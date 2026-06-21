// ========================================
// NAVIGATION
// ========================================

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// ACTIVE LINK HIGHLIGHTING
// ========================================

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Get values and trim whitespace
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();
        
        // Validation
        if (!nameValue || !emailValue || !messageValue) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:shahjalal99bd@gmail.com?subject=${encodeURIComponent(
            subjectValue || 'Portfolio Contact'
        )}&body=${encodeURIComponent(
            `Name: ${nameValue}\nEmail: ${emailValue}\n\n${messageValue}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        min-width: 300px;
        max-width: 90%;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.3s ease;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
    `;
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        opacity: 0.7;
        transition: opacity 0.3s;
    `;
    closeBtn.onmouseover = () => closeBtn.style.opacity = '1';
    closeBtn.onmouseout = () => closeBtn.style.opacity = '0.7';
    closeBtn.onclick = () => notification.remove();
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// DOWNLOAD RESUME
// ========================================

function downloadResume() {
    const resumeContent = `
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║                      SHAH JALAL                          ║
║                   Software Engineer                      ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║  📧 shahjalal99bd@gmail.com                             ║
║  📱 +880 15804 61936                                    ║
║  📍 Dhaka, Bangladesh                                   ║
║  🐙 github.com/jalal99rock                             ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  SUMMARY                                                 ║
║  ─────────────────────────────────────────────────────    ║
║  Software Engineer with internship experience at         ║
║  Blinkit (Zomato), specializing in backend API           ║
║  development and database management. Proficient in      ║
║  Python, Java, and Angular, with hands-on projects in    ║
║  machine learning and deep learning.                     ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  EXPERIENCE                                              ║
║  ─────────────────────────────────────────────────────    ║
║  Backend Developer Intern | Blinkit (Zomato)             ║
║  Jan 2025 - Apr 2025                                     ║
║  • Designed RESTful APIs for product catalog             ║
║    (1,200+ daily updates)                                ║
║  • Optimized MySQL queries (35% faster)                  ║
║  • Implemented data validation scripts                   ║
║    (60% fewer errors)                                    ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  PROJECTS                                                ║
║  ─────────────────────────────────────────────────────    ║
║  1. Road Accident Analysis - ML (85% accuracy)           ║
║  2. Age & Gender Detection - Deep Learning (84%)         ║
║  3. Personal & Technical Companion - Full Stack App      ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  EDUCATION                                               ║
║  ─────────────────────────────────────────────────────    ║
║  B.Tech in CSE (Software Engineering)                    ║
║  Jain University, Bengaluru | 2020-2025                  ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  TECHNICAL SKILLS                                        ║
║  ─────────────────────────────────────────────────────    ║
║  Python, Java, JavaScript, TypeScript, PHP               ║
║  Angular, React, Node.js, Django, FastAPI                ║
║  MySQL, PostgreSQL, Docker, Git                          ║
║  Machine Learning, Deep Learning, REST APIs              ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `;
    
    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Shah_Jalal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    
    showNotification('Resume downloaded successfully!', 'success');
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (targetId === '#' || !targetId) return;
        
        const target = document.querySelector(targetId);
        
        if (target) {
            e.preventDefault();
            
            const navHeight = navbar ? navbar.offsetHeight : 70;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
            
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuToggle) {
                    const icon = menuToggle.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });
});

// ========================================
// TYPEWRITER EFFECT
// ========================================

function typeWriter(element, text, speed = 50, callback = null) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

// Uncomment to enable typewriter effect
/*
const nameElement = document.querySelector('.hero-text h1 .highlight');
if (nameElement) {
    // Store original text
    const originalText = nameElement.textContent;
    // Clear and start typing
    typeWriter(nameElement, originalText, 80);
}
*/

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
};

// Call after page load
if (document.readyState === 'complete') {
    animateOnScroll();
} else {
    window.addEventListener('load', animateOnScroll);
}

// ========================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ========================================

function debounce(func, wait = 100) {
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

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Your scroll logic here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================

console.log('%c🚀 Shah Jalal - Software Engineer Portfolio', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c📧 shahjalal99bd@gmail.com', 'font-size: 14px; color: #764ba2;');
console.log('%c🐙 github.com/jalal99rock', 'font-size: 14px; color: #764ba2;');
console.log('%c💼 Available for work!', 'font-size: 14px; font-weight: bold; color: #10b981;');

// ========================================
// KEYBOARD SHORTCUTS (Accessibility)
// ========================================

document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
    
    // Ctrl + K to focus search (if you add search later)
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        // Focus search input if exists
        const searchInput = document.querySelector('.search-input');
        if (searchInput) searchInput.focus();
    }
});

// ========================================
// PAGE LOAD PERFORMANCE
// ========================================

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

console.log('✅ Portfolio loaded successfully!');