<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'ph ph-sun';
        } else {
            themeIcon.className = 'ph ph-moon';
        }
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const processSection = document.getElementById('process');
    const processProgress = document.getElementById('process-progress');
    const processCards = document.querySelectorAll('.process-card');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's the process section, animate the line
                if (entry.target.id === 'process' || entry.target.closest('#process')) {
                    if (processProgress) {
                        setTimeout(() => {
                            processProgress.style.width = '100%';
                        }, 300); // Wait for first card to fade in
                    }

                    // Activate dots sequentially
                    processCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('active-step');
                        }, 300 + (index * 200));
                    });
                }

                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Scroll-Driven Story Videos
    const storySteps = document.querySelectorAll('.story-step');
    const storyVideos = document.querySelectorAll('.story-video');

    if (storySteps.length > 0) {
        const storyObserverOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when step is near the middle of screen
            threshold: 0
        };

        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all steps
                    storySteps.forEach(step => step.classList.remove('active'));
                    // Add active class to intersecting step
                    entry.target.classList.add('active');

                    // Switch video
                    const stepNumber = entry.target.getAttribute('data-step');
                    storyVideos.forEach(video => {
                        if (video.getAttribute('data-video') === stepNumber) {
                            video.classList.add('active');
                            // Ensure it is playing
                            video.play().catch(e => console.log('Autoplay prevented:', e));
                        } else {
                            video.classList.remove('active');
                            // Pause video to save resources
                            video.pause();
                        }
                    });
                }
            });
        }, storyObserverOptions);

        storySteps.forEach(step => storyObserver.observe(step));
    }

    // 5. 3D Hover Tilt & Lighting Effect for Feature Cards
    const whyCards = document.querySelectorAll('.why-card');
    
    whyCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 12; // max 12deg
            const rotateX = ((centerY - y) / centerY) * 12; // max 12deg
            
            card.style.setProperty('--rx', `${rotateX}deg`);
            card.style.setProperty('--ry', `${rotateY}deg`);
            card.style.setProperty('--mx', `${x}px`);
            card.style.setProperty('--my', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.removeProperty('--rx');
            card.style.removeProperty('--ry');
            card.style.removeProperty('--mx');
            card.style.removeProperty('--my');
        });
    });
});
=======
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'ph ph-sun';
        } else {
            themeIcon.className = 'ph ph-moon';
        }
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const processSection = document.getElementById('process');
    const processProgress = document.getElementById('process-progress');
    const processCards = document.querySelectorAll('.process-card');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's the process section, animate the line
                if (entry.target.id === 'process' || entry.target.closest('#process')) {
                    if (processProgress) {
                        setTimeout(() => {
                            processProgress.style.width = '100%';
                        }, 300); // Wait for first card to fade in
                    }

                    // Activate dots sequentially
                    processCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('active-step');
                        }, 300 + (index * 200));
                    });
                }

                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Scroll-Driven Story Videos
    const storySteps = document.querySelectorAll('.story-step');
    const storyVideos = document.querySelectorAll('.story-video');

    if (storySteps.length > 0) {
        const storyObserverOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when step is near the middle of screen
            threshold: 0
        };

        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all steps
                    storySteps.forEach(step => step.classList.remove('active'));
                    // Add active class to intersecting step
                    entry.target.classList.add('active');

                    // Switch video
                    const stepNumber = entry.target.getAttribute('data-step');
                    storyVideos.forEach(video => {
                        if (video.getAttribute('data-video') === stepNumber) {
                            video.classList.add('active');
                            // Ensure it is playing
                            video.play().catch(e => console.log('Autoplay prevented:', e));
                        } else {
                            video.classList.remove('active');
                            // Pause video to save resources
                            video.pause();
                        }
                    });
                }
            });
        }, storyObserverOptions);

        storySteps.forEach(step => storyObserver.observe(step));
    }
});
>>>>>>> d88bb097f6cceec62af05e71e0370b272ab72f14
