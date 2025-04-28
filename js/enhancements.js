/**
 * Enhancements JavaScript file for Abdul Faridajalal Mohammad's portfolio
 * Handles additional interactive elements and visual enhancements
 */

/* Start: Clean Initialization Function */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all enhancement features
    initParticlesJS();      // Hero section particles
    initSkillBars();        // Skills progress bars
    initInteractiveTimeline(); // Experience timeline
    initProjectCards();     // Project cards (static - just for potential future enhancements)
    initTestimonialSlider(); // Testimonials slider
    initLazyLoading();      // Lazy loading for below-fold content
    initScrollSpy();        // Navigation highlighting
    
    // Log successful initialization
    console.log('All portfolio enhancements initialized successfully');
});
/* End: Clean Initialization Function */

/**
 * Particles.js Background for Hero Section
 */
function initParticlesJS() {
    const particlesContainer = document.getElementById('particles-js');
    
    if (particlesContainer && window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#5BC0BE"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                },
                "size": {
                    "value": 5,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#5BC0BE",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.8
                        }
                    },
                    "push": {
                        "particles_nb": 3
                    }
                }
            },
            "retina_detect": true
        });
    }
}

/**
 * Skills Progress Bars Animation
 */
/* Correction Start: Skills Mobile Fix - Better Animation and Visibility */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    // Skip if no skill bars found
    if (!skillBars.length) {
        console.error('No skill bars found');
        return;
    }
    
    // Create intersection observer for animation
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% visibility triggers animation
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get target width from data attribute
                const targetWidth = entry.target.getAttribute('data-width');
                
                // If target width exists, animate after small delay
                // Delay helps ensure proper rendering on all devices
                if (targetWidth) {
                    setTimeout(() => {
                        entry.target.style.width = targetWidth;
                    }, 100);
                }
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing each skill bar
    skillBars.forEach(bar => {
        // Reset to zero width before observing
        bar.style.width = '0';
        observer.observe(bar);
    });
    
    console.log('Skill bars initialized successfully');
}
/* Correction End */

/**
 * Interactive Timeline with Expandable Details
 */
/* Correction Start: Improved timeline toggle functionality */
function initInteractiveTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-content[data-expandable="true"]');
    
    timelineItems.forEach(item => {
        const toggleBtn = item.querySelector('.timeline-toggle');
        const extendedContent = item.querySelector('.timeline-extended');
        
        if (toggleBtn && extendedContent) {
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                
                // Toggle this specific timeline item
                const isActive = toggleBtn.classList.contains('active');
                
                if (!isActive) {
                    // Change icon to minus
                    toggleBtn.innerHTML = '&#8722;'; // Minus sign
                    toggleBtn.classList.add('active');
                    extendedContent.classList.add('active');
                } else {
                    // Change icon back to plus
                    toggleBtn.innerHTML = '&#43;'; // Plus sign
                    toggleBtn.classList.remove('active');
                    extendedContent.classList.remove('active');
                }
            });
        }
    });
}
/* Correction End */

/**
 * Expandable Project Cards
 */
/* Correction Start: Improved independent project card functionality */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const header = card.querySelector('.project-header');
        const content = card.querySelector('.project-content');
        const toggle = card.querySelector('.project-toggle');
        
        if (header && content && toggle) {
            // Set initial height to zero for all cards
            content.style.maxHeight = '0px';
            
            header.addEventListener('click', function(e) {
                // Prevent event bubbling to parent containers
                e.stopPropagation();
                
                // Toggle only this card's active state
                const isActive = card.classList.contains('active');
                
                // Toggle class
                card.classList.toggle('active');
                
                // Apply max-height for smooth animation
                if (!isActive) {
                    // Get the scroll height to ensure proper expansion
                    const scrollHeight = content.scrollHeight;
                    content.style.maxHeight = scrollHeight + 'px';
                    toggle.innerHTML = '&times;'; // Change to close icon
                } else {
                    content.style.maxHeight = '0px';
                    toggle.innerHTML = '+'; // Change back to plus icon
                }
                
                // Add animation class if not already added
                if (!card.classList.contains('animated')) {
                    card.classList.add('animated');
                }
            });
        }
    });
}
/* Correction End */

/**
 * Testimonial Slider
 */
/* Correction Start: Fixed testimonial slider functionality */
function initTestimonialSlider() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    
    if (testimonialContainer) {
        const testimonials = testimonialContainer.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.testimonial-btn.prev');
        const nextBtn = document.querySelector('.testimonial-btn.next');
        
        let currentIndex = 0;
        const totalTestimonials = testimonials.length;
        
        // Function to show specific testimonial with enhanced animation
        function showTestimonial(index) {
            // Determine direction for animation
            const direction = index > currentIndex ? 1 : -1;
            
            // Hide current testimonial with slide-out animation
            testimonials[currentIndex].style.opacity = '0';
            testimonials[currentIndex].style.transform = `translateX(${direction * -50}px)`;
            
            // Deactivate all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Update currentIndex
            currentIndex = index;
            
            // Reset position of new testimonial for slide-in animation
            testimonials[currentIndex].style.transform = `translateX(${direction * 50}px)`;
            
            // Small delay before showing new testimonial
            setTimeout(() => {
                // Remove active class from all testimonials
                testimonials.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to current testimonial and animate in
                testimonials[currentIndex].classList.add('active');
                testimonials[currentIndex].style.opacity = '1';
                testimonials[currentIndex].style.transform = 'translateX(0)';
                
                // Activate corresponding dot
                dots[currentIndex].classList.add('active');
            }, 300);
        }
        
        // Next testimonial function
        function nextTestimonial() {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= totalTestimonials) {
                nextIndex = 0;
            }
            showTestimonial(nextIndex);
        }
        
        // Previous testimonial function
        function prevTestimonial() {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = totalTestimonials - 1;
            }
            showTestimonial(prevIndex);
        }
        
        // Add click event to navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(testimonialInterval); // Stop auto-rotation when manually navigating
                nextTestimonial();
                startAutoRotation(); // Restart auto-rotation
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(testimonialInterval); // Stop auto-rotation when manually navigating
                prevTestimonial();
                startAutoRotation(); // Restart auto-rotation
            });
        }
        
        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                if (index !== currentIndex) {
                    clearInterval(testimonialInterval); // Stop auto-rotation when manually navigating
                    showTestimonial(index);
                    startAutoRotation(); // Restart auto-rotation
                }
            });
        });
        
        // Auto rotation function with interval management
        let testimonialInterval;
        
        function startAutoRotation() {
            // Clear any existing intervals first to prevent multiple intervals
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(nextTestimonial, 6000);
        }
        
        // Start auto-rotation initially
        startAutoRotation();
        
        // Pause auto-rotate on hover
        testimonialContainer.addEventListener('mouseenter', function() {
            clearInterval(testimonialInterval);
        });
        
        // Resume auto-rotate on mouse leave
        testimonialContainer.addEventListener('mouseleave', function() {
            startAutoRotation();
        });
        
        // Handle visibility change (tab switching)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                clearInterval(testimonialInterval);
            } else {
                startAutoRotation();
            }
        });
    }
}
/* Correction End */

/**
 * Lazy Loading for Images and Below-the-fold Content
 */
function initLazyLoading() {
    // Add lazy-load class to relevant elements
    const lazyElements = document.querySelectorAll('.svg-divider, .blog-image, .achievement-card, .project-card');
    
    lazyElements.forEach(element => {
        element.classList.add('lazy-load');
    });
    
    // Create IntersectionObserver to detect when elements are in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px 50px 0px'
    });
    
    // Observe all lazy elements
    lazyElements.forEach(element => {
        observer.observe(element);
    });
}