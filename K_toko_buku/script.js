// Shopping Cart System
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        this.updateCartBadge();
        this.bindEvents();
        this.loadProducts();
    }

    bindEvents() {
        // Cart toggle
        document.getElementById('cart-toggle').addEventListener('click', () => {
            this.toggleCart();
        });

        // Cart close
        document.getElementById('cart-close').addEventListener('click', () => {
            this.closeCart();
        });

        // Cart overlay
        document.getElementById('cart-overlay').addEventListener('click', () => {
            this.closeCart();
        });

        // Continue shopping
        document.getElementById('continue-shopping').addEventListener('click', () => {
            this.closeCart();
        });

        // Checkout
        document.getElementById('checkout-btn').addEventListener('click', () => {
            this.checkout();
        });

        // Category filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterProducts(e.target.dataset.category);
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    loadProducts() {
        const products = [
            {
                id: 1,
                title: "Al-Quran Terjemahan Indonesia",
                category: "islamic",
                price: 125000,
                inStock: true,
                image: null
            },
            {
                id: 2,
                title: "Shahih Bukhari - Complete Collection",
                category: "islamic",
                price: 350000,
                inStock: true,
                image: null
            },
            {
                id: 3,
                title: "Tafsir Ibn Kathir (8 Volumes)",
                category: "islamic",
                price: 750000,
                inStock: true,
                image: null
            },
            {
                id: 4,
                title: "Mathematics Grade 10 - Curriculum 2013",
                category: "educational",
                price: 85000,
                inStock: true,
                image: null
            },
            {
                id: 5,
                title: "English Grammar in Use",
                category: "educational",
                price: 165000,
                inStock: true,
                image: null
            },
            {
                id: 6,
                title: "Indonesian History Textbook",
                category: "educational",
                price: 95000,
                inStock: false,
                image: null
            },
            {
                id: 7,
                title: "Islamic Stories for Children",
                category: "children",
                price: 45000,
                inStock: true,
                image: null
            },
            {
                id: 8,
                title: "Learn Arabic Alphabet",
                category: "children",
                price: 35000,
                inStock: true,
                image: null
            },
            {
                id: 9,
                title: "Prophet Stories Collection",
                category: "children",
                price: 65000,
                inStock: true,
                image: null
            },
            {
                id: 10,
                title: "Indonesian Literature Classics",
                category: "literature",
                price: 120000,
                inStock: true,
                image: null
            },
            {
                id: 11,
                title: "Modern Islamic Poetry",
                category: "literature",
                price: 85000,
                inStock: true,
                image: null
            },
            {
                id: 12,
                title: "Contemporary Indonesian Writers",
                category: "literature",
                price: 110000,
                inStock: false,
                image: null
            }
        ];

        this.renderProducts(products);
        this.allProducts = products;
    }

    renderProducts(products) {
        const grid = document.getElementById('products-grid');
        grid.innerHTML = '';

        products.forEach(product => {
            const productCard = this.createProductCard(product);
            grid.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.title}">` : '<i class="fas fa-book"></i>'}
                <div class="product-badge">${this.getCategoryLabel(product.category)}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-category">${this.getCategoryLabel(product.category)}</p>
                <div class="product-price">Rp ${this.formatPrice(product.price)}</div>
                <div class="product-status ${product.inStock ? 'status-in-stock' : 'status-out-of-stock'}">
                    <span class="status-indicator"></span>
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                <button class="add-to-cart-btn" ${!product.inStock ? 'disabled' : ''} 
                        onclick="cart.addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        `;
        return card;
    }

    getCategoryLabel(category) {
        const labels = {
            islamic: 'Islamic',
            educational: 'Educational',
            children: 'Children',
            literature: 'Literature'
        };
        return labels[category] || category;
    }

    formatPrice(price) {
        return new Intl.NumberFormat('id-ID').format(price);
    }

    filterProducts(category) {
        if (category === 'all') {
            this.renderProducts(this.allProducts);
        } else {
            const filtered = this.allProducts.filter(product => product.category === category);
            this.renderProducts(filtered);
        }
    }

    addToCart(productId) {
        const product = this.allProducts.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartBadge();
        this.showToast(`${product.title} added to cart!`);
        this.renderCartItems();
    }

    removeFromCart(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartBadge();
        this.renderCartItems();
    }

    updateQuantity(productId, change) {
        const item = this.items.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;
        
        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.saveCart();
            this.renderCartItems();
        }
    }

    toggleCart() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
        
        if (drawer.classList.contains('open')) {
            this.renderCartItems();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeCart() {
        document.getElementById('cart-drawer').classList.remove('open');
        document.getElementById('cart-overlay').classList.remove('open');
        document.body.style.overflow = '';
    }

    renderCartItems() {
        const container = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        const footer = document.getElementById('cart-footer');

        if (this.items.length === 0) {
            emptyCart.style.display = 'block';
            footer.style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        footer.style.display = 'block';

        container.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="fas fa-book"></i>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">Rp ${this.formatPrice(item.price)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="cart.removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateSubtotal();
    }

    updateSubtotal() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cart-subtotal').textContent = `Rp ${this.formatPrice(subtotal)}`;
    }

    updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const messageEl = document.getElementById('toast-message');
        
        messageEl.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    checkout() {
        if (this.items.length === 0) return;

        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hello TokoBuku Hidayah!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0A%0AMessage: ${encodeURIComponent(message)}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/6287782866044?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Thank you! Your message will be sent via WhatsApp.');
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .category-card, .service-card, .info-card, .contact-card');
    animateElements.forEach(el => observer.observe(el));
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add click tracking for analytics (placeholder)
function trackClick(element, action) {
    // This is where you would add analytics tracking
    console.log(`Clicked: ${element} - ${action}`);
}

// Track important button clicks
document.addEventListener('DOMContentLoaded', () => {
    // Track WhatsApp button clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(button => {
        button.addEventListener('click', () => {
            trackClick('WhatsApp Button', 'Contact');
        });
    });
    
    // Track phone number clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(button => {
        button.addEventListener('click', () => {
            trackClick('Phone Button', 'Contact');
        });
    });
    
    // Track category card clicks
    document.querySelectorAll('.card-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Remove this when you have actual category pages
            trackClick('Category Card', link.closest('.category-card').querySelector('h3').textContent);
            alert('Book catalog coming soon! Please contact us via WhatsApp for specific book inquiries.');
        });
    });
});

// Lazy loading for images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading state for form submission
function showLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#2E8B57';
        }
    });
    
    return isValid;
}

// Phone number formatting
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.startsWith('0')) {
        value = '62' + value.substring(1);
    } else if (!value.startsWith('62')) {
        value = '62' + value;
    }
    return value;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value) {
                input.value = '+' + formatPhoneNumber(input);
            }
        });
    });
});

// Add smooth reveal animation for hero section
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            heroImage.style.transition = 'all 0.8s ease-out';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 400);
    }
});

// Add CSS class for active nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2E8B57 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);