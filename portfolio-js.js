// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navbar = document.querySelector('#navbar');

function highlightNavigation() {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', function() {
    highlightNavigation();
    handleNavbarScroll();
});

// Initial check on page load
highlightNavigation();
handleNavbarScroll();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
const animatedElements = document.querySelectorAll('.expertise-card, .timeline-item, .stat-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show success message
    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
    formStatus.className = 'form-status success';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(function() {
        formStatus.style.display = 'none';
    }, 5000);
    
    // In a production environment, you would send this data to a server
    // Example:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     formStatus.textContent = 'Message sent successfully!';
    //     formStatus.className = 'form-status success';
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     formStatus.textContent = 'Error sending message. Please try again.';
    //     formStatus.className = 'form-status error';
    // });
});

// Scroll reveal for hero elements
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'fadeInUp 1s ease';
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.textContent = footerText.textContent.replace('2025', currentYear);
}

// Add loading animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        
        // Check if it's a number
        if (finalValue.includes('+')) {
            const numValue = parseInt(finalValue.replace('+', ''));
            let currentValue = 0;
            const increment = numValue / 50;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numValue) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentValue) + '+';
                }
            }, 30);
        } else if (finalValue.includes('%')) {
            const numValue = parseInt(finalValue.replace('%', ''));
            let currentValue = 0;
            const increment = numValue / 50;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numValue) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentValue) + '%';
                }
            }, 30);
        }
    });
}

// Observe stats section
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.timeline-marker').style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.timeline-marker').style.transform = 'scale(1)';
    });
});

// Portfolio section - placeholder for future functionality
// This function can be used to dynamically add portfolio items
function addPortfolioItem(title, description, image, link) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const placeholder = portfolioGrid.querySelector('.portfolio-placeholder');
    
    // Remove placeholder if it exists
    if (placeholder) {
        placeholder.remove();
    }
    
    // Create portfolio item
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `
        <div class="portfolio-image">
            <img src="${image}" alt="${title}">
        </div>
        <div class="portfolio-info">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" class="portfolio-link">View Project</a>
        </div>
    `;
    
    portfolioGrid.appendChild(item);
}

// Example usage (commented out):
// addPortfolioItem(
//     'Thyroid Eye Disease CME Program',
//     'Comprehensive educational initiative targeting ophthalmologists',
//     'path/to/image.jpg',
//     '#'
// );

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'h' to go home
    if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        const target = document.querySelector('#home');
        if (target && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});

console.log('Portfolio website loaded successfully!');