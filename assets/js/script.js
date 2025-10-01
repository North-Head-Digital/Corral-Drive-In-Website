// Corral Drive-In Website JavaScript

// Menu Data
const menuData = {
    burgers: [
        {
            id: 1,
            name: "Tsunami Burger",
            price: "$12.99",
            description: "Our legendary half-pound burger with special sauce, crispy bacon, and signature toppings",
            highlight: "Signature",
            category: "burgers"
        },
        {
            id: 2,
            name: "Classic Cheeseburger",
            price: "$8.99",
            description: "Traditional beef patty with American cheese, lettuce, tomato, and onion",
            category: "burgers"
        },
        {
            id: 3,
            name: "Bacon Deluxe",
            price: "$10.99",
            description: "Double patty with crispy bacon, cheese, and our special sauce",
            category: "burgers"
        },
        {
            id: 4,
            name: "Veggie Burger",
            price: "$9.99",
            description: "Plant-based patty with fresh vegetables and our house-made vegan sauce",
            highlight: "Vegetarian",
            category: "burgers"
        },
        {
            id: 5,
            name: "Fish & Chips Burger",
            price: "$11.99",
            description: "Fresh cod fillet with tartar sauce and crispy fries on the side",
            category: "burgers"
        }
    ],
    sides: [
        {
            id: 6,
            name: "Crispy Fries",
            price: "$4.99",
            description: "Golden, crispy french fries with sea salt",
            category: "sides"
        },
        {
            id: 7,
            name: "Onion Rings",
            price: "$5.99",
            description: "Beer-battered onion rings with ranch dipping sauce",
            category: "sides"
        },
        {
            id: 8,
            name: "Sweet Potato Fries",
            price: "$5.99",
            description: "Cinnamon-sugar sweet potato fries",
            category: "sides"
        },
        {
            id: 9,
            name: "Chili Cheese Fries",
            price: "$7.99",
            description: "Loaded fries with homemade chili and melted cheese",
            highlight: "Popular",
            category: "sides"
        },
        {
            id: 10,
            name: "Mozzarella Sticks",
            price: "$6.99",
            description: "Breaded mozzarella sticks with marinara sauce",
            category: "sides"
        }
    ],
    beverages: [
        {
            id: 11,
            name: "Classic Milkshake",
            price: "$5.99",
            description: "Vanilla, chocolate, or strawberry - made with real ice cream",
            category: "beverages"
        },
        {
            id: 12,
            name: "Oreo Milkshake",
            price: "$6.99",
            description: "Vanilla milkshake blended with crushed Oreo cookies",
            highlight: "Favorite",
            category: "beverages"
        },
        {
            id: 13,
            name: "Fresh Lemonade",
            price: "$3.99",
            description: "Freshly squeezed lemonade with mint",
            category: "beverages"
        },
        {
            id: 14,
            name: "Iced Tea",
            price: "$2.99",
            description: "Sweet or unsweetened iced tea",
            category: "beverages"
        },
        {
            id: 15,
            name: "Soft Drinks",
            price: "$2.49",
            description: "Coke, Pepsi, Sprite, and other favorites",
            category: "beverages"
        }
    ],
    desserts: [
        {
            id: 16,
            name: "Apple Pie",
            price: "$4.99",
            description: "Homemade apple pie with vanilla ice cream",
            category: "desserts"
        },
        {
            id: 17,
            name: "Chocolate Cake",
            price: "$5.99",
            description: "Rich chocolate layer cake with chocolate frosting",
            highlight: "Decadent",
            category: "desserts"
        },
        {
            id: 18,
            name: "Ice Cream Sundae",
            price: "$4.99",
            description: "Vanilla ice cream with chocolate sauce, whipped cream, and cherry",
            category: "desserts"
        }
    ]
};

// Gallery Data with Placeholder Content
const galleryData = [
    {
        id: 1,
        type: "placeholder",
        icon: "fas fa-hamburger",
        title: "The Legendary Tsunami Burger",
        description: "Our signature half-pound masterpiece"
    },
    {
        id: 2,
        type: "placeholder",
        icon: "fas fa-store",
        title: "Our Classic Drive-In Look",
        description: "Authentic 1980s atmosphere"
    },
    {
        id: 3,
        type: "placeholder",
        icon: "fas fa-french-fries",
        title: "Perfectly Crispy Fries",
        description: "Golden and delicious"
    },
    {
        id: 4,
        type: "placeholder",
        icon: "fas fa-coffee",
        title: "Creamy Milkshakes",
        description: "Made with real ice cream"
    },
    {
        id: 5,
        type: "placeholder",
        icon: "fas fa-home",
        title: "Cozy Interior",
        description: "Warm and welcoming"
    },
    {
        id: 6,
        type: "placeholder",
        icon: "fas fa-bacon",
        title: "Bacon Deluxe Burger",
        description: "Double the deliciousness"
    },
    {
        id: 7,
        type: "placeholder",
        icon: "fas fa-circle",
        title: "Crispy Onion Rings",
        description: "Beer-battered perfection"
    },
    {
        id: 8,
        type: "placeholder",
        icon: "fas fa-users",
        title: "Family Fun at Corral",
        description: "Memories made here"
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeNavigation();
        initializeMenu();
        initializeGallery();
        initializeMap();
        initializeAnimations();
        initializeScrollEffects();
        console.log('Corral Drive-In website initialized successfully');
    } catch (error) {
        console.error('Error initializing website:', error);
    }
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Menu functionality
function initializeMenu() {
    const filterButtons = document.querySelectorAll('.menu-filter .btn');
    const searchInput = document.getElementById('menu-search');
    
    // Render all menu items
    renderMenuItems();
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            const filter = this.getAttribute('data-filter');
            filterMenuItems(filter);
        });
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            const searchTerm = e.target.value.toLowerCase();
            searchMenuItems(searchTerm);
        }, 300));
    }
}

function renderMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) {
        console.error('Menu container not found');
        return;
    }
    
    const allItems = [...menuData.burgers, ...menuData.sides, ...menuData.beverages, ...menuData.desserts];
    
    menuContainer.innerHTML = allItems.map(item => `
        <div class="col-lg-6 col-xl-4">
            <div class="menu-item" data-category="${item.category}">
                <div class="menu-item-header">
                    <h5 class="menu-item-name">${item.name}</h5>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                ${item.highlight ? `<span class="menu-item-highlight">${item.highlight}</span>` : ''}
            </div>
        </div>
    `).join('');
}

function filterMenuItems(filter) {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

function searchMenuItems(searchTerm) {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const name = item.querySelector('.menu-item-name').textContent.toLowerCase();
        const description = item.querySelector('.menu-item-description').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || description.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Gallery functionality
function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="gallery-item" onclick="openLightbox('${item.type}', '${item.title}', '${item.icon}', '${item.description}')">
            <div class="gallery-placeholder">
                <i class="${item.icon}"></i>
                <h5>${item.title}</h5>
                <p>${item.description}</p>
            </div>
            <div class="gallery-overlay">
                <h5>${item.title}</h5>
                <p>Click to view details</p>
            </div>
        </div>
    `).join('');
}

function openLightbox(type, title, icon, description) {
    // Create lightbox modal
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    let content = '';
    if (type === 'placeholder') {
        content = `
            <div class="lightbox-content placeholder-lightbox">
                <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                <div class="placeholder-lightbox-content">
                    <i class="${icon} fa-5x mb-4"></i>
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <div class="placeholder-note">
                        <small><i class="fas fa-info-circle me-2"></i>This is a placeholder. Replace with actual restaurant photos.</small>
                    </div>
                </div>
            </div>
        `;
    } else {
        content = `
            <div class="lightbox-content">
                <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                <img src="${type}" alt="${title}">
                <h4>${title}</h4>
            </div>
        `;
    }
    
    lightbox.innerHTML = content;
    
    // Add lightbox styles
    const lightboxStyles = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lightbox.show {
            opacity: 1;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        }
        
        .lightbox-content img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 10px;
        }
        
        .lightbox-content h4 {
            color: white;
            margin-top: 1rem;
            font-weight: 600;
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            z-index: 10000;
        }
        
        .lightbox-close:hover {
            color: #ffc107;
        }
    `;
    
    // Add styles to head if not already added
    if (!document.getElementById('lightbox-styles')) {
        const style = document.createElement('style');
        style.id = 'lightbox-styles';
        style.textContent = lightboxStyles;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(lightbox);
    
    // Show lightbox with animation
    setTimeout(() => lightbox.classList.add('show'), 10);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.classList.remove('show');
        setTimeout(() => lightbox.remove(), 300);
    }
}

// Map functionality
function initializeMap() {
    try {
        // Check if Leaflet is available
        if (typeof L === 'undefined') {
            console.warn('Leaflet.js not loaded, skipping map initialization');
            return;
        }
        
        // Long Beach, WA coordinates
        const longBeach = [46.3509, -124.0511];
        
        // Initialize map
        const map = L.map('map').setView(longBeach, 15);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add marker
        L.marker(longBeach).addTo(map)
            .bindPopup('<b>Corral Drive-In</b><br>123 Ocean Beach Blvd<br>Long Beach, WA 98631')
            .openPopup();
            
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Error initializing map:', error);
        // Fallback: show address text if map fails
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <div class="map-fallback">
                    <h5>Corral Drive-In</h5>
                    <p>123 Ocean Beach Blvd<br>Long Beach, WA 98631</p>
                    <a href="https://maps.google.com/?q=123+Ocean+Beach+Blvd,+Long+Beach,+WA+98631" target="_blank" rel="noopener">
                        <i class="fas fa-map-marker-alt me-2"></i>View on Google Maps
                    </a>
                </div>
            `;
        }
    }
}

// Animation functionality
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-section');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Form handling (if contact form is added)
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = document.querySelector('#contact-form button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize form handling when DOM is ready
document.addEventListener('DOMContentLoaded', handleContactForm);

// Service Worker registration for PWA functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Performance optimization: Lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);
