/* ============================================
   SANTANU JANA - DATA ANALYST PORTFOLIO
   JavaScript - Interactive Features & Animations
   ============================================ */

// ============================================
// 1. DOM ELEMENTS & CONSTANTS
// ============================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');
const typingText = document.querySelector('.typing-text');
const contactForm = document.getElementById('contact-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const progressBars = document.querySelectorAll('.progress-fill');

// Typing animation text - PREMIUM HERO EDITION
const typingTexts = [
    'Transforming Data Into Decisions',
    'Building Insight-Driven Solutions',
    'Turning Raw Data Into Business Value',
    'Data Storytelling Through Analytics'
];

let typingIndex = 0;

// ============================================
// 2. THEME TOGGLE (FIXED)
// ============================================

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon();
    } else {
        document.body.classList.remove('light-theme');
        updateThemeIcon();
    }
}

// Update theme icon
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    if (document.body.classList.contains('light-theme')) {
        // Light theme - show sun icon
        icon.className = 'fas fa-sun';
    } else {
        // Dark theme - show moon icon
        icon.className = 'fas fa-moon';
    }
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = document.body.classList.contains('light-theme');
    const newTheme = isCurrentlyLight ? 'dark' : 'light';
    
    // Update body class
    document.body.classList.toggle('light-theme');
    
    // Save preference
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Update icon
    updateThemeIcon();
    
    // Log for debugging
    console.log('Theme switched to:', newTheme);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

// ============================================
// 3. PARTICLES ANIMATION
// ============================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = Math.max(3, Math.floor(window.innerWidth / 300));
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 100 + 50 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create particles on load and resize
createParticles();
window.addEventListener('resize', createParticles);

// ============================================
// 4. TYPING ANIMATION
// ============================================

function typeText() {
    const text = typingTexts[typingIndex];
    let charIndex = 0;
    typingText.textContent = '';

    function type() {
        if (charIndex < text.length) {
            typingText.textContent += text[charIndex];
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                typingIndex = (typingIndex + 1) % typingTexts.length;
                setTimeout(typeText, 1000);
            }, 2000);
        }
    }

    type();
}

if (typingText) {
    typeText();
}

// ============================================
// 4.5 HERO METRICS COUNTER ANIMATION
// ============================================

function animateMetricCounters() {
    const metricElements = document.querySelectorAll('.card-value[data-target]');
    let animationStarted = false;

    const startCounting = () => {
        if (animationStarted) return;
        animationStarted = true;

        metricElements.forEach(element => {
            const target = parseInt(element.getAttribute('data-target'), 10);
            let current = 0;
            const increment = target / 50;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 30);
        });
    };

    // Start counting when page loads
    setTimeout(startCounting, 1000);
}

// Initialize metric counters on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateMetricCounters);
} else {
    animateMetricCounters();
}

// ============================================
// 5. NAVBAR & SMOOTH SCROLLING
// ============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// 6. MOBILE MENU TOGGLE
// ============================================

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        // Toggle active class on hamburger
        hamburger.classList.toggle('active');
        
        // Toggle active class on nav menu
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close menu when window resizes to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// 7. BACK TO TOP BUTTON
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// 8. SCROLL REVEAL ANIMATION
// ============================================

const revealElements = () => {
    const reveals = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .detail-card, .experience-card, .info-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Add reveal class to elements
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .detail-card, .experience-card, .info-card').forEach(el => {
    el.classList.add('reveal');
});

window.addEventListener('scroll', revealElements);
revealElements(); // Call on load

// ============================================
// 9. SKILL PROGRESS BARS ANIMATION
// ============================================

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        
        if (rect.top < window.innerHeight) {
            bar.style.setProperty('--progress-width', progress + '%');
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// ============================================
// 10. CINEMATIC STACKED PANEL NAVIGATION
// ============================================

const categoryButtons = document.querySelectorAll('.category-btn');
const projectPanels = document.querySelectorAll('.project-panel');
let panelStack = ['all']; // Track panel history

function switchPanel(targetCategory) {
    const currentPanel = document.querySelector('.project-panel.active');
    const targetPanel = document.querySelector(`.project-panel[data-panel="${targetCategory}"]`);
    
    if (!targetPanel || currentPanel === targetPanel) return;
    
    // Update panel stack
    const currentCategory = currentPanel.getAttribute('data-panel');
    const targetIndex = panelStack.indexOf(targetCategory);
    
    if (targetIndex === -1) {
        // Moving forward - add to stack
        panelStack.push(targetCategory);
        animateForward(currentPanel, targetPanel);
    } else {
        // Moving backward - remove from stack
        panelStack = panelStack.slice(0, targetIndex + 1);
        animateBackward(currentPanel, targetPanel);
    }
    
    // Update all panels based on stack
    updatePanelStates();
}

function animateForward(currentPanel, targetPanel) {
    // Current panel becomes stacked
    currentPanel.classList.remove('active');
    currentPanel.classList.add('stacked');
    
    // Target panel slides in
    targetPanel.classList.remove('stacked', 'stacked-2', 'stacked-3');
    targetPanel.style.transform = 'translateX(100%) scale(0.96)';
    targetPanel.style.opacity = '0';
    
    // Force reflow
    targetPanel.offsetHeight;
    
    // Animate in
    requestAnimationFrame(() => {
        targetPanel.classList.add('active');
        targetPanel.style.transform = '';
        targetPanel.style.opacity = '';
    });
}

function animateBackward(currentPanel, targetPanel) {
    // Current panel slides out
    currentPanel.classList.add('exiting');
    currentPanel.classList.remove('active');
    
    setTimeout(() => {
        currentPanel.classList.remove('exiting');
    }, 700);
    
    // Target panel comes forward
    targetPanel.classList.remove('stacked', 'stacked-2', 'stacked-3');
    targetPanel.classList.add('active');
}

function updatePanelStates() {
    projectPanels.forEach(panel => {
        const panelCategory = panel.getAttribute('data-panel');
        const stackIndex = panelStack.indexOf(panelCategory);
        const currentIndex = panelStack.length - 1;
        
        // Remove all state classes
        panel.classList.remove('active', 'stacked', 'stacked-2', 'stacked-3', 'exiting');
        
        if (stackIndex === currentIndex) {
            // Active panel
            panel.classList.add('active');
        } else if (stackIndex === currentIndex - 1) {
            // First stacked panel
            panel.classList.add('stacked');
        } else if (stackIndex === currentIndex - 2) {
            // Second stacked panel
            panel.classList.add('stacked-2');
        } else if (stackIndex === currentIndex - 3) {
            // Third stacked panel
            panel.classList.add('stacked-3');
        }
    });
}

// Category button click handlers
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetCategory = button.getAttribute('data-category');
        
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Switch panel
        switchPanel(targetCategory);
    });
});

// Initialize first panel
document.addEventListener('DOMContentLoaded', () => {
    const firstPanel = document.querySelector('.project-panel[data-panel="all"]');
    if (firstPanel) {
        firstPanel.classList.add('active');
    }
});

// ============================================
// 11. FORM VALIDATION & SUBMISSION
// ============================================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset error messages
        clearFormErrors();
        
        // Validation
        let isValid = true;
        
        if (!name || name.length < 3) {
            showError('name', 'Name must be at least 3 characters');
            isValid = false;
        }
        
        if (!email || !isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject || subject.length < 5) {
            showError('subject', 'Subject must be at least 5 characters');
            isValid = false;
        }
        
        if (!message || message.length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    document.querySelector('.form-status').style.display = 'none';
                }, 5000);
            }, 1500);
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentElement.querySelector('.form-error');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
        field.style.borderColor = 'var(--accent-color)';
    }
}

function clearFormErrors() {
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
    
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.style.borderColor = '';
    });
}

function showFormStatus(type, message) {
    const formStatus = document.querySelector('.form-status');
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
}

// ============================================
// 12. LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// 13. DOWNLOAD RESUME
// ============================================

document.querySelectorAll('a[href="assets/resume.pdf"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Analytics tracking (optional)
        console.log('Resume download initiated');
    });
});

// ============================================
// 14. KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            if (hamburger) hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown') {
        scrollToNextSection();
    }
});

function scrollToNextSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > scrollY + 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// ============================================
// 15. ACCESSIBILITY IMPROVEMENTS
// ============================================

// Focus management
document.querySelectorAll('button, a, input, textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
    });
});

// ============================================
// 16. PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, delay) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// 17. PAGE LOAD OPTIMIZATION
// ============================================

window.addEventListener('load', () => {
    // Trigger animations on page load
    document.body.style.opacity = '1';
    
    // Preload images
    document.querySelectorAll('img').forEach(img => {
        const src = img.src;
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
});

// ============================================
// 18. INTERSECTION OBSERVER FOR ELEMENTS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .timeline-item, .detail-card').forEach(el => {
    observer.observe(el);
});

// ============================================
// 19. SMOOTH SCROLL BEHAVIOR
// ============================================

// Fallback for browsers that don't support smooth scroll
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// 20. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Initialize animations
    revealElements();
    updateActiveNavLink();
    
    // Ensure mobile menu is closed on load
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// Export for external use if needed
window.PortfolioApp = {
    scrollTo: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    },
    toggleTheme: () => themeToggle.click(),
    downloadResume: () => {
        window.location.href = 'assets/resume.pdf';
    }
};
