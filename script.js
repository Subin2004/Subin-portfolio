      // Menu toggle functions
        function open_menu() {
            document.querySelector('.side-menu').classList.add('active');
        }
        
        function close_menu() {
            document.querySelector('.side-menu').classList.remove('active');
        }
        
        // Close menu when clicking a link
        document.querySelectorAll('.side-menu a').forEach(link => {
            link.addEventListener('click', () => {
                close_menu();
            });
        });
        
        // Intersection Observer for section animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Remove the class when not in view to reset animation
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe each section
        document.querySelectorAll('#hero, #about, #skills, #contact').forEach(section => {
            observer.observe(section);
        });
        
        // Active link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.side-menu a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active-link');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });