import json
import urllib.request
import subprocess
import time
import socket
import base64
import os
import struct

def ws_connect_and_eval(ws_url, expr):
    host = "localhost"
    port = 9222
    path = ws_url.split(f":{port}")[1]
    
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    
    key = base64.b64encode(os.urandom(16)).decode('utf-8')
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        f"Host: {host}:{port}\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        f"Sec-WebSocket-Key: {key}\r\n"
        "Sec-WebSocket-Version: 13\r\n\r\n"
    )
    s.sendall(handshake.encode('utf-8'))
    
    res = b""
    while b"\r\n\r\n" not in res:
        res += s.recv(4096)
    
    msg = json.dumps({
        "id": 1,
        "method": "Runtime.evaluate",
        "params": {
            "expression": expr,
            "returnByValue": True
        }
    })
    
    payload = msg.encode('utf-8')
    frame = bytearray([0x81])
    mask = os.urandom(4)
    length = len(payload)
    if length < 126:
        frame.append(0x80 | length)
    elif length < 65536:
        frame.append(0x80 | 126)
        frame.extend(struct.pack(">H", length))
    else:
        frame.append(0x80 | 127)
        frame.extend(struct.pack(">Q", length))
    
    frame.extend(mask)
    for i in range(len(payload)):
        frame.append(payload[i] ^ mask[i % 4])
        
    s.sendall(frame)
    
    data = s.recv(65536)
    masked = bool(data[1] & 0x80)
    plen = data[1] & 0x7F
    offset = 2
    if plen == 126:
        plen = struct.unpack(">H", data[2:4])[0]
        offset = 4
    elif plen == 127:
        plen = struct.unpack(">Q", data[2:10])[0]
        offset = 10
    
    if masked:
        m = data[offset:offset+4]
        offset += 4
        res_bytes = bytearray(data[offset:offset+plen])
        for i in range(len(res_bytes)):
            res_bytes[i] ^= m[i % 4]
        raw_text = res_bytes.decode('utf-8')
    else:
        raw_text = data[offset:offset+plen].decode('utf-8')
        
    s.close()
    return json.loads(raw_text)

expr = """
(() => {
  return {
    windowInnerHeight: window.innerHeight,
    docScrollHeight: document.documentElement.scrollHeight,
    bodyScrollHeight: document.body.scrollHeight,
    dashContentScrollHeight: document.querySelector('.dash-content').scrollHeight,
    dashContentClientHeight: document.querySelector('.dash-content').clientHeight
  };
})()
"""

proc = subprocess.Popen([
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--headless',
    '--remote-debugging-port=9222',
    '--window-size=912,1368',
    'http://localhost:5500/dashboard.html'
])
time.sleep(2)
try:
    pages = json.loads(urllib.request.urlopen('http://localhost:9222/json').read())
    target = next(p for p in pages if p['type'] == 'page')
    result = ws_connect_and_eval(target['webSocketDebuggerUrl'], expr)
    print(json.dumps(result['result']['result']['value'], indent=2))
finally:
    proc.kill()
