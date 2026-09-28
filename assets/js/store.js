/**
 * Nexora Multi-Vendor Marketplace — Core Data Store & Shared Operations
 */

// ==========================================================================
// 1. Static Marketplace Data Registry
// ==========================================================================

const MARKETPLACE_DATA = {
  categories: [
    { id: 'electronics', name: 'Electronics & Smart Tech', count: '1,420+ items', image: 'assets/images/cat_electronics.jpg', slug: 'electronics' },
    { id: 'home', name: 'Home & Living Decor', count: '890+ items', image: 'assets/images/cat_home.jpg', slug: 'home' },
    { id: 'fashion', name: 'Luxury Fashion & Apparel', count: '2,150+ items', image: 'assets/images/cat_fashion.jpg', slug: 'fashion' },
    { id: 'beauty', name: 'Clean Beauty & Skincare', count: '640+ items', image: 'assets/images/cat_beauty.jpg', slug: 'beauty' },
    { id: 'crafts', name: 'Artisanal & Handmade', count: '1,120+ items', image: 'assets/images/cat_crafts.jpg', slug: 'crafts' },
    { id: 'sports', name: 'Active Gear & Outdoors', count: '780+ items', image: 'assets/images/cat_sports.jpg', slug: 'sports' },
    { id: 'gourmet', name: 'Gourmet Pantry & Coffee', count: '430+ items', image: 'assets/images/cat_gourmet.jpg', slug: 'gourmet' },
    { id: 'audio', name: 'Studio & Audiophile Sound', count: '560+ items', image: 'assets/images/cat_audio.jpg', slug: 'audio' }
  ],

  vendors: [
    {
      id: 'apex-audio',
      slug: 'apex-audio',
      name: 'Apex Audio Labs',
      badge: 'Premier Merchant',
      verified: true,
      rating: 4.9,
      reviewsCount: 1240,
      productsCount: 38,
      followersCount: '14.2k',
      category: 'Studio & Audiophile Sound',
      tagline: 'Acoustic perfection engineered with aerospace-grade acoustics.',
      bio: 'Founded in Stockholm, Apex Audio Labs designs audiophile-grade monitoring headphones, studio monitors, and precision acoustic gear for discerning listeners and studio professionals worldwide.',
      banner: 'assets/images/vendor_banner_1.jpg',
      logo: 'assets/images/vendor_logo_1.jpg',
      location: 'Stockholm, Sweden',
      joinedYear: '2023',
      responseTime: '< 1 hour',
      shippingTime: '1-3 Business Days'
    },
    {
      id: 'lumina-living',
      slug: 'lumina-living',
      name: 'Lumina Living Studio',
      badge: 'Eco-Certified',
      verified: true,
      rating: 4.8,
      reviewsCount: 960,
      productsCount: 52,
      followersCount: '9.8k',
      category: 'Home & Living Decor',
      tagline: 'Nordic minimalism, sustainable oak furnishings, and sculptural lighting.',
      bio: 'Crafting serene home sanctuaries through sustainable materials, warm ambient lighting, and bespoke architectural furniture engineered for timeless living spaces.',
      banner: 'assets/images/vendor_banner_2.jpg',
      logo: 'assets/images/vendor_logo_2.jpg',
      location: 'Copenhagen, Denmark',
      joinedYear: '2022',
      responseTime: '< 2 hours',
      shippingTime: '2-4 Business Days'
    },
    {
      id: 'velvet-thread',
      slug: 'velvet-thread',
      name: 'Velvet & Thread Atelier',
      badge: 'Artisan Tailor',
      verified: true,
      rating: 4.9,
      reviewsCount: 1810,
      productsCount: 64,
      followersCount: '22.5k',
      category: 'Luxury Fashion & Apparel',
      tagline: 'Modern luxury silhouettes hand-tailored from organic fabrics.',
      bio: 'An independent atelier dedicated to slow fashion, ethical silk and wool tailoring, and contemporary everyday wear designed to outlast passing trends.',
      banner: 'assets/images/vendor_banner_3.jpg',
      logo: 'assets/images/vendor_logo_3.jpg',
      location: 'Milan, Italy',
      joinedYear: '2021',
      responseTime: '< 30 mins',
      shippingTime: '2-3 Business Days'
    },
    {
      id: 'terra-artisans',
      slug: 'terra-artisans',
      name: 'Terra Clay & Crafts',
      badge: 'Master Maker',
      verified: true,
      rating: 5.0,
      reviewsCount: 740,
      productsCount: 29,
      followersCount: '8.1k',
      category: 'Artisanal & Handmade',
      tagline: 'Wheel-thrown ceramic homewares and handcrafted pottery.',
      bio: 'Every vessel, plate, and planter is shaped by hand on the potter wheel and fired in small batches using local mineral glazes and ancestral techniques.',
      banner: 'assets/images/vendor_banner_4.jpg',
      logo: 'assets/images/vendor_logo_4.jpg',
      location: 'Kyoto, Japan',
      joinedYear: '2023',
      responseTime: '< 1 hour',
      shippingTime: '3-5 Business Days'
    }
  ],

  products: [
    {
      id: 'aurapulse-pro',
      slug: 'aurapulse-pro',
      name: 'AuraPulse ANC Wireless Studio Headphones',
      vendorId: 'apex-audio',
      vendorName: 'Apex Audio Labs',
      category: 'audio',
      categoryName: 'Studio & Audiophile Sound',
      price: 249.00,
      originalPrice: 320.00,
      discount: '22% OFF',
      rating: 4.9,
      reviewsCount: 428,
      stock: 14,
      image: 'assets/images/prod_headphones.jpg',
      gallery: ['assets/images/prod_headphones.jpg', 'assets/images/gallery_1.jpg', 'assets/images/gallery_2.jpg', 'assets/images/gallery_3.jpg', 'assets/images/gallery_4.jpg'],
      isFeatured: true,
      isTrending: true,
      description: 'Experience pure sonic fidelity. Custom-engineered 45mm beryllium drivers deliver ultra-low distortion, deep visceral bass, and expansive soundstage. Featuring hybrid 42dB active noise cancellation with spatial audio tracking and 40-hour continuous battery life.'
    },
    {
      id: 'chronos-sapphire',
      slug: 'chronos-sapphire',
      name: 'Chronos Minimalist Sapphire Titanium Watch',
      vendorId: 'apex-audio',
      vendorName: 'Apex Audio Labs',
      category: 'electronics',
      categoryName: 'Electronics & Smart Tech',
      price: 380.00,
      originalPrice: 450.00,
      discount: '15% OFF',
      rating: 4.8,
      reviewsCount: 194,
      stock: 9,
      image: 'assets/images/prod_watch.jpg',
      gallery: ['assets/images/prod_watch.jpg'],
      isFeatured: true,
      isTrending: true,
      description: 'Aerospace-grade grade-5 titanium casing fitted with anti-reflective sapphire crystal glass. Swiss automatic movement with 48-hour power reserve and water resistance up to 10 ATM.'
    },
    {
      id: 'vagabond-duffle',
      slug: 'vagabond-duffle',
      name: 'Vagabond Full-Grain Artisan Leather Duffle',
      vendorId: 'velvet-thread',
      vendorName: 'Velvet & Thread Atelier',
      category: 'fashion',
      categoryName: 'Luxury Fashion & Apparel',
      price: 285.00,
      originalPrice: 340.00,
      discount: '16% OFF',
      rating: 4.9,
      reviewsCount: 312,
      stock: 18,
      image: 'assets/images/prod_bag.jpg',
      gallery: ['assets/images/prod_bag.jpg'],
      isFeatured: false,
      isTrending: true,
      description: 'Vegetable-tanned full-grain Italian leather hand-stitched with waxed linen thread. Includes solid brass hardware, padded laptop sleeve, and water-resistant interior lining.'
    },
    {
      id: 'lumix-rangefinder',
      slug: 'lumix-rangefinder',
      name: 'Heritage Classic 35mm Digital Rangefinder',
      vendorId: 'apex-audio',
      vendorName: 'Apex Audio Labs',
      category: 'electronics',
      categoryName: 'Electronics & Smart Tech',
      price: 890.00,
      originalPrice: 990.00,
      discount: '10% OFF',
      rating: 5.0,
      reviewsCount: 88,
      stock: 6,
      image: 'assets/images/prod_camera.jpg',
      gallery: ['assets/images/prod_camera.jpg'],
      isFeatured: true,
      isTrending: true,
      description: 'Tactile analog dials married with a full-frame 24MP BSI CMOS sensor. High contrast optical viewfinder and uncompressed RAW recording for purist photographers.'
    },
    {
      id: 'eclipse-lamp',
      slug: 'eclipse-lamp',
      name: 'Eclipse Sculptural Dimmable Ambient Desk Lamp',
      vendorId: 'lumina-living',
      vendorName: 'Lumina Living Studio',
      category: 'home',
      categoryName: 'Home & Living Decor',
      price: 165.00,
      originalPrice: 195.00,
      discount: '15% OFF',
      rating: 4.8,
      reviewsCount: 142,
      stock: 22,
      image: 'assets/images/prod_lamp.jpg',
      gallery: ['assets/images/prod_lamp.jpg'],
      isFeatured: false,
      isTrending: true,
      description: 'Cast aluminium disc with warm 2700K diffusion LED ring. Stepless capacitive touch dimmer with memory brightness function and anodized matte champagne finish.'
    },
    {
      id: 'komorebi-chair',
      slug: 'komorebi-chair',
      name: 'Komorebi Mid-Century Ergonomic Walnut Lounge Chair',
      vendorId: 'lumina-living',
      vendorName: 'Lumina Living Studio',
      category: 'home',
      categoryName: 'Home & Living Decor',
      price: 640.00,
      originalPrice: 750.00,
      discount: '14% OFF',
      rating: 4.9,
      reviewsCount: 97,
      stock: 5,
      image: 'assets/images/prod_chair.jpg',
      gallery: ['assets/images/prod_chair.jpg'],
      isFeatured: true,
      isTrending: true,
      description: 'Solid FSC-certified American walnut frame with steam-bent curvature and high-density memory foam upholstered in textured bouclé fabric.'
    },
    {
      id: 'aerolite-sneakers',
      slug: 'aerolite-sneakers',
      name: 'Aerolite PrimeKnit Performance Running Sneakers',
      vendorId: 'velvet-thread',
      vendorName: 'Velvet & Thread Atelier',
      category: 'sports',
      categoryName: 'Active Gear & Outdoors',
      price: 155.00,
      originalPrice: 180.00,
      discount: '14% OFF',
      rating: 4.7,
      reviewsCount: 520,
      stock: 35,
      image: 'assets/images/prod_sneakers.jpg',
      gallery: ['assets/images/prod_sneakers.jpg'],
      isFeatured: false,
      isTrending: true,
      description: 'Seamless recycled poly-knit upper with dynamic carbon propulsion plate and ultra-cushioned supercritical nitrogen-infused midsole foam.'
    },
    {
      id: 'radiance-elixir',
      slug: 'radiance-elixir',
      name: 'Botanical Radiance Restorative Facial Elixir',
      vendorId: 'terra-artisans',
      vendorName: 'Terra Clay & Crafts',
      category: 'beauty',
      categoryName: 'Clean Beauty & Skincare',
      price: 68.00,
      originalPrice: 85.00,
      discount: '20% OFF',
      rating: 4.9,
      reviewsCount: 380,
      stock: 45,
      image: 'assets/images/prod_skincare.jpg',
      gallery: ['assets/images/prod_skincare.jpg'],
      isFeatured: false,
      isTrending: true,
      description: 'Cold-pressed wild rosehip, squalane, and bakuchiol extract designed to deeply nourish the cellular lipid barrier and restore radiant firmness.'
    },
    {
      id: 'cyber-keyboard',
      slug: 'cyber-keyboard',
      name: 'KeyCraft Brass Plate Custom Mechanical Keyboard',
      vendorId: 'apex-audio',
      vendorName: 'Apex Audio Labs',
      category: 'electronics',
      categoryName: 'Electronics & Smart Tech',
      price: 210.00,
      originalPrice: 245.00,
      discount: '14% OFF',
      rating: 4.9,
      reviewsCount: 260,
      stock: 12,
      image: 'assets/images/prod_keyboard.jpg',
      gallery: ['assets/images/prod_keyboard.jpg'],
      isFeatured: false,
      isTrending: false,
      description: 'CNC machined anodized 6063 aluminium chassis, hot-swappable PCB, factory-lubed linear switches, and gasket-mounted acoustic sound dampening.'
    },
    {
      id: 'origin-pourover',
      slug: 'origin-pourover',
      name: 'Origin Gooseneck Precision Barista Brewer Set',
      vendorId: 'terra-artisans',
      vendorName: 'Terra Clay & Crafts',
      category: 'gourmet',
      categoryName: 'Gourmet Pantry & Coffee',
      price: 115.00,
      originalPrice: 135.00,
      discount: '15% OFF',
      rating: 4.8,
      reviewsCount: 175,
      stock: 24,
      image: 'assets/images/prod_coffee.jpg',
      gallery: ['assets/images/prod_coffee.jpg'],
      isFeatured: false,
      isTrending: false,
      description: 'PID controlled variable temperature gooseneck kettle with double-walled borosilicate glass dripper and precision 0.1g digital brew scale.'
    },
    {
      id: 'solara-aviators',
      slug: 'solara-aviators',
      name: 'Solara Polarized Matte Titanium Aviators',
      vendorId: 'velvet-thread',
      vendorName: 'Velvet & Thread Atelier',
      category: 'fashion',
      categoryName: 'Luxury Fashion & Apparel',
      price: 175.00,
      originalPrice: 210.00,
      discount: '17% OFF',
      rating: 4.7,
      reviewsCount: 140,
      stock: 20,
      image: 'assets/images/prod_sunglasses.jpg',
      gallery: ['assets/images/prod_sunglasses.jpg'],
      isFeatured: false,
      isTrending: false,
      description: 'Ultralight Japanese titanium frame weighing just 18 grams with multi-layer hydrophobic oleophobic polarized lenses providing 100% UV400 defense.'
    },
    {
      id: 'aeroview-drone',
      slug: 'aeroview-drone',
      name: 'AeroView 4K Ultralight Carbon Aerial Drone',
      vendorId: 'apex-audio',
      vendorName: 'Apex Audio Labs',
      category: 'electronics',
      categoryName: 'Electronics & Smart Tech',
      price: 499.00,
      originalPrice: 599.00,
      discount: '16% OFF',
      rating: 4.9,
      reviewsCount: 92,
      stock: 8,
      image: 'assets/images/prod_drone.jpg',
      gallery: ['assets/images/prod_drone.jpg'],
      isFeatured: false,
      isTrending: false,
      description: 'Sub-249 gram regulation-free design featuring a 3-axis mechanical gimbal, 4K/60fps HDR video capture, 10km video transmission, and 34-minute flight endurance.'
    }
  ]
};

// Ensure catalog exists in localStorage (allows vendor dashboard to append/modify products)
function getCatalog() {
  const local = localStorage.getItem('nexora_products');
  if (local) {
    try {
      const items = JSON.parse(local);
      if (Array.isArray(items) && items.length > 0) {
        let needsUpdate = false;
        const normalized = items.map(p => {
          if (p.image && !p.image.startsWith('assets/')) {
            p.image = 'assets/' + p.image.replace(/^[./]+/, '');
            needsUpdate = true;
          }
          if (Array.isArray(p.gallery)) {
            p.gallery = p.gallery.map(img => {
              if (img && !img.startsWith('assets/')) {
                needsUpdate = true;
                return 'assets/' + img.replace(/^[./]+/, '');
              }
              return img;
            });
          }
          return p;
        });
        if (needsUpdate) {
          localStorage.setItem('nexora_products', JSON.stringify(normalized));
        }
        return normalized;
      }
    } catch(e) {
      console.error(e);
    }
  }
  localStorage.setItem('nexora_products', JSON.stringify(MARKETPLACE_DATA.products));
  return MARKETPLACE_DATA.products;
}

function saveCatalog(products) {
  localStorage.setItem('nexora_products', JSON.stringify(products));
}

// ==========================================================================
// 2. Cart Operations (Shared Across All Pages)
// ==========================================================================

function getCart() {
  const data = localStorage.getItem('nexora_cart');
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem('nexora_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, qty = 1, options = {}) {
  const products = getCatalog();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId && JSON.stringify(item.options) === JSON.stringify(options));

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      vendorName: product.vendorName,
      vendorId: product.vendorId,
      qty: qty,
      options: options
    });
  }

  saveCart(cart);
  showToast('Added to Cart', `${product.name} has been added to your shopping cart.`, 'success');
  openCartDrawer();
}

function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    const removed = cart.splice(index, 1);
    saveCart(cart);
    showToast('Item Removed', `${removed[0]?.name || 'Item'} removed from cart.`, 'info');
  }
}

function updateCartItemQty(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
  }
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartBadge() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
    b.style.transform = 'scale(1.3)';
    setTimeout(() => { b.style.transform = 'scale(1)'; }, 200);
  });
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    backdrop?.classList.remove('open');
  } else {
    drawer.classList.add('open');
    backdrop?.classList.add('open');
    renderCartDrawer();
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) {
    drawer.classList.add('open');
    backdrop?.classList.add('open');
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) {
    drawer.classList.remove('open');
    backdrop?.classList.remove('open');
  }
}

function renderCartDrawer() {
  const listEl = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const grandTotalEl = document.getElementById('cartGrandTotal');
  if (!listEl) return;

  const cart = getCart();
  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">🛍️</div>
        <h4 style="color: white; margin-bottom: 0.5rem;">Your Cart is Empty</h4>
        <p style="font-size: 0.9rem;">Explore trending products from verified marketplace creators.</p>
        <a href="categories.html" class="btn-primary" style="margin-top: 1.5rem; display: inline-flex;">Start Shopping</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (grandTotalEl) grandTotalEl.textContent = '$0.00';
    return;
  }

  let html = '';
  cart.forEach((item, idx) => {
    html += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <a href="product-details.html?id=${item.id}" class="cart-item-title">${item.name}</a>
          <div class="cart-item-vendor">By ${item.vendorName}</div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.4rem;">
            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">−</button>
              <span style="font-size: 0.85rem; font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
        <button class="cart-remove-btn" title="Remove" onclick="removeFromCart(${idx})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `;
  });

  listEl.innerHTML = html;
  const subtotal = getCartSubtotal();
  const shipping = subtotal > 150 ? 0 : 9.99;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

// ==========================================================================
// 3. Global Toast System
// ==========================================================================

function showToast(title, message, type = 'accent') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  } else if (type === 'info') {
    iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  } else {
    iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>';
  }

  toast.innerHTML = `
    <div style="flex-shrink: 0; display: grid; place-items: center;">${iconSvg}</div>
    <div style="flex: 1;">
      <div style="font-weight: 700; font-size: 0.95rem; color: #FFFFFF;">${title}</div>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'fadeOutToast 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// ==========================================================================
// 4. Wishlist Helper
// ==========================================================================

function getWishlist() {
  const data = localStorage.getItem('nexora_wishlist');
  return data ? JSON.parse(data) : [];
}

function toggleWishlist(productId, btnEl) {
  let list = getWishlist();
  const index = list.indexOf(productId);
  if (index > -1) {
    list.splice(index, 1);
    if (btnEl) btnEl.style.color = 'var(--text-muted)';
    showToast('Wishlist Updated', 'Item removed from your saved items.', 'info');
  } else {
    list.push(productId);
    if (btnEl) btnEl.style.color = '#EF4444';
    showToast('Wishlist Saved', 'Item added to your saved wishlist.', 'success');
  }
  localStorage.setItem('nexora_wishlist', JSON.stringify(list));
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCartDrawer();

  // Cart Backdrop click listener
  const cartBackdrop = document.getElementById('cartBackdrop');
  cartBackdrop?.addEventListener('click', closeCartDrawer);

  // Search form submit handler (if present)
  const navSearchForm = document.getElementById('navSearchForm');
  if (navSearchForm) {
    navSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = navSearchForm.querySelector('input');
      const categorySelect = navSearchForm.querySelector('select');
      const q = encodeURIComponent(input.value.trim());
      const cat = encodeURIComponent(categorySelect?.value || 'all');
      window.location.href = `categories.html?search=${q}&cat=${cat}`;
    });
  }

  // Mobile Drawer Toggle Listeners
  const mobileToggles = document.querySelectorAll('.mobile-menu-toggle, #mobileToggle');
  mobileToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  });

  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
  mobileBackdrop?.addEventListener('click', closeMobileMenu);

  const mobileCloseBtns = document.querySelectorAll('.mobile-menu-close-btn, #mobileMenuClose');
  mobileCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeMobileMenu);
  });

  // Global key listener for ESC to close drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeCartDrawer();
    }
  });

  // Scroll to Top Button Initialization
  initScrollToTop();
});

// ==========================================================================
// 6. Mobile Menu Drawer System
// ==========================================================================

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (menu) {
    menu.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (menu) {
    menu.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleMobileSearch(e, formEl) {
  if (e) e.preventDefault();
  const form = formEl || document.getElementById('mobileSearchForm');
  if (!form) return;
  const input = form.querySelector('input');
  if (input && input.value.trim()) {
    closeMobileMenu();
    window.location.href = `categories.html?search=${encodeURIComponent(input.value.trim())}`;
  }
}

// ==========================================================================
// 5. Scroll To Top Component Logic
// ==========================================================================

function initScrollToTop() {
  let scrollBtn = document.getElementById('scrollToTopBtn');
  if (!scrollBtn) {
    scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.className = 'scroll-to-top-btn';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.setAttribute('title', 'Scroll to top of page');
    scrollBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(scrollBtn);
  }

  const toggleVisibility = () => {
    if (window.scrollY > 280) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

