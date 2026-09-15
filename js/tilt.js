/**
 * Nexora Marketplace — 3D Tilt Card Engine
 * Applies perspective-based cursor-tracking 3D tilt and dynamic light glare
 * to all .tilt-card elements across the site.
 */

function initTiltEffect(selector = '.tilt-card') {
  const cards = document.querySelectorAll(selector);

  cards.forEach(card => {
    // Avoid double attaching
    if (card.dataset.tiltInitialized) return;
    card.dataset.tiltInitialized = "true";

    let rafId = null;
    const maxTilt = 10; // degrees

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rotateX = (-deltaY * maxTilt).toFixed(2);
        const rotateY = (deltaX * maxTilt).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
        card.style.setProperty('--glare-x', `${((x / rect.width) * 100).toFixed(1)}%`);
        card.style.setProperty('--glare-y', `${((y / rect.height) * 100).toFixed(1)}%`);
        card.style.setProperty('--glare-opacity', '0.22');
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.setProperty('--glare-opacity', '0');

      setTimeout(() => {
        card.style.transition = 'transform 0.12s ease-out, box-shadow 0.2s ease-out';
      }, 450);
    };

    const handleMouseEnter = () => {
      card.style.transition = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
  });
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTiltEffect();
});

// Expose globally
window.initTiltEffect = initTiltEffect;
