// GlowHaus Cosmetics - Main JavaScript

console.log("GlowHaus Cosmetics website loaded");

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    console.log('Scrolling to: ' + href);
                    
                    // Smooth scroll to the target element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close navbar if open on mobile
                    const navbarToggle = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        navbarToggle.click();
                    }
                }
            }
        });
    });
});

// WhatsApp button tracking
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-success, .btn-outline-success').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('WhatsApp interaction triggered');
        });
    });
});