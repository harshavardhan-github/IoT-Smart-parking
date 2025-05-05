/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    const navButton = document.createElement('button');

    // Create mobile navigation button
    navButton.innerHTML = '<i class="fas fa-bars"></i>';
    nav.insertBefore(navButton, navUl);
    navButton.style.display = 'none'; // Initially hide

    // Toggle mobile navigation
    navButton.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Check for screen size to show/hide mobile nav button
    function updateMobileNavVisibility() {
        if (window.innerWidth <= 768) {
            navButton.style.display = 'block';
        } else {
            navButton.style.display = 'none';
            navUl.classList.remove('active');
        }
    }

    // Initial check and event listener for resize
    updateMobileNavVisibility();
    window.addEventListener('resize', updateMobileNavVisibility);

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Simulate form submission (replace with actual API call)
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.className = 'success-message';
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'hidden';
                contactForm.reset();
            }, 3000);
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 60),
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking
                if (window.innerWidth <= 768) {
                    navUl.classList.remove('active');
                }
            }
        });
    });

    // Basic scroll to top button (optional)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
    scrollToTopBtn.style.display = 'none'; // Initially hidden

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});