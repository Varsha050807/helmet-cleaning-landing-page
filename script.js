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

<<<<<<< HEAD
=======
                // If it's a why-card, trigger letter animation
                if (entry.target.classList.contains('why-card')) {
                    const heading = entry.target.querySelector('h4');
                    // Ensure we only process if heading exists and hasn't been animated
                    if (heading && !heading.classList.contains('animated-text')) {
                        const text = heading.textContent;
                        heading.textContent = '';
                        heading.classList.add('animated-text');

                        // Split into spans mapping characters
                        [...text].forEach((char, i) => {
                            const span = document.createElement('span');

                            // For spaces, use a non-breaking space mapping or CSS space logic
                            if (char === ' ') {
                                span.innerHTML = '&nbsp;';
                            } else {
                                span.textContent = char;
                            }

                            // Set a stagger delay, ~40ms feels premium
                            span.style.animationDelay = `${i * 40}ms`;
                            heading.appendChild(span);
                        });

                        // Trigger paragraph fade in after heading animation completes
                        const paragraph = entry.target.querySelector('p');
                        if (paragraph) {
                            // Delay fading by (text length * delay per letter) + CSS flyInAssemble duration
                            // length * 40ms + 500ms + some wiggle room padding
                            paragraph.style.animationDelay = `${(text.length * 40) + 200}ms`;
                            paragraph.classList.add('fade-in-delayed');
                        }
                    }
                }

>>>>>>> 968469f (message)
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
<<<<<<< HEAD

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
=======
    // 4. 3D Tilt Effect for Why Cards
    const whyCards = document.querySelectorAll('.why-card');

    whyCards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 12;
            const rotateY = (x - centerX) / 12;

            card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });

    });
    // Letter by letter animation for Why cards
    document.querySelectorAll(".why-card h4").forEach((heading) => {

        const text = heading.textContent;
        heading.textContent = "";
        heading.classList.add("animated-text");

        [...text].forEach((letter, index) => {
            const span = document.createElement("span");

            span.textContent = letter === " " ? "\u00A0" : letter;
            span.style.animationDelay = `${index * 0.05}s`;

            heading.appendChild(span);
        });

        // fade paragraph after letters
        const paragraph = heading.parentElement.querySelector("p");

        setTimeout(() => {
            paragraph.classList.add("fade-in-delayed");
        }, text.length * 50 + 200);
    });
>>>>>>> 968469f (message)
});
