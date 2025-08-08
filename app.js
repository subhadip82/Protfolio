document.addEventListener('DOMContentLoaded', () => {
    // --- Particles.js Initialization ---
    // Make sure particles.js is loaded via CDN in HTML
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
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
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.warn("particles.js not found. Make sure the CDN script is correctly linked in your HTML.");
    }


    // --- Mobile Navbar Toggle ---
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active'); // Animate burger icon
    });

    // Close navbar when a link is clicked (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        });
    });

    // --- Smooth Scrolling for Navigation (if staying on same page) ---
    // If you plan to have sections on the *same* page and navigate with hash links
    // document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    // --- Download CV Button Animation and Action ---
    const downloadCvBtn = document.getElementById('download-cv-btn');
    downloadCvBtn.addEventListener('click', () => {
        // Add animation class
        downloadCvBtn.classList.add('downloading-cv');
        downloadCvBtn.textContent = 'Downloading...';

        // Simulate download delay
        setTimeout(() => {
            // Replace with the actual path to your CV file
            const cvUrl = 'your-cv.pdf'; // IMPORTANT: Replace with your actual CV file path
            const link = document.createElement('a');
            link.href = cvUrl;
            link.setAttribute('download', 'Subhadip_Bera_CV.pdf'); // Suggested filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            downloadCvBtn.textContent = 'Download Complete!';
            setTimeout(() => {
                downloadCvBtn.classList.remove('downloading-cv');
                downloadCvBtn.textContent = 'Download CV'; // Reset button text
            }, 1000); // Keep "Download Complete" for 1 second
        }, 2000); // Simulate 2-second download
    });

    // --- Hire Me Button Action ---
    const hireMeBtn = document.getElementById('hire-me-btn');
    hireMeBtn.addEventListener('click', () => {
        const emailAddress = 'your.email@example.com'; // IMPORTANT: Replace with your actual email
        const subject = 'Hiring Inquiry from Portfolio Website';
        const body = 'Dear Subhadip,\n\nI am interested in discussing a potential opportunity...\n\nSincerely,\n[Your Name]';
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

    // --- Chatbot Functionality ---
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotBox = document.getElementById('chatbot-box');
    const closeChatbotBtn = document.querySelector('.close-chatbot');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotSendBtn = document.querySelector('.chatbot-input button');

    chatbotIcon.addEventListener('click', () => {
        chatbotBox.classList.toggle('active');
        if (chatbotBox.classList.contains('active')) {
            chatbotInput.focus(); // Focus on input when opened
        }
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbotBox.classList.remove('active');
    });

    // Simulate simple chatbot responses
    const sendChatMessage = () => {
        const userMessageText = chatbotInput.value.trim();
        if (userMessageText === '') return;

        // Add user message
        const userMessageDiv = document.createElement('p');
        userMessageDiv.classList.add('message', 'user-message');
        userMessageDiv.textContent = userMessageText;
        chatbotMessages.appendChild(userMessageDiv);

        chatbotInput.value = ''; // Clear input
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to bottom

        // Simulate bot response
        setTimeout(() => {
            const botMessageDiv = document.createElement('p');
            botMessageDiv.classList.add('message', 'bot-message');
            let botResponse = "I'm sorry, I don't understand that. Please try asking about Subhadip's skills, projects, or how to contact him!";

            if (userMessageText.toLowerCase().includes('hello') || userMessageText.toLowerCase().includes('hi')) {
                botResponse = "Hello there! How can I assist you regarding Subhadip Bera's portfolio?";
            } else if (userMessageText.toLowerCase().includes('skill')) {
                botResponse = "Subhadip is proficient in HTML, CSS, JavaScript, React, Node.js, and more!";
            } else if (userMessageText.toLowerCase().includes('project')) {
                botResponse = "You can check out his projects on the 'Projects' page or his GitHub profile!";
            } else if (userMessageText.toLowerCase().includes('contact') || userMessageText.toLowerCase().includes('email')) {
                botResponse = "You can contact Subhadip via email at your.email@example.com or through his LinkedIn profile.";
            } else if (userMessageText.toLowerCase().includes('cv') || userMessageText.toLowerCase().includes('resume')) {
                botResponse = "You can download Subhadip's CV by clicking the 'Download CV' button on the home page!";
            }

            botMessageDiv.textContent = botResponse;
            chatbotMessages.appendChild(botMessageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to bottom again
        }, 1000); // 1 second delay for bot response
    };

    chatbotSendBtn.addEventListener('click', sendChatMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    // --- Dynamic "Hi, I'm Subhadip Bera, I am a Software Developer" Text Animation ---
    // Using simple JS for a typewriter effect
    const greetingElement = document.querySelector('.greeting');
    const professionElement = document.querySelector('.profession');

    const greetingText = "Hi, I'm Subhadip Bera";
    const professionText = "I am a Software Developer";

    let greetingIndex = 0;
    let professionIndex = 0;

    const typeWriter = (element, text, index, callback) => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(() => typeWriter(element, text, index, callback), 70); // Typing speed
        } else if (callback) {
            callback();
        }
    };

    // Initial load animation for greeting and profession
    // These are handled by CSS animations (`fadeInSlideUp`) for simplicity.
    // If you want a typewriter effect, you'd modify or remove the CSS animations
    // and use this JS instead:
    /*
    setTimeout(() => {
        greetingElement.textContent = ''; // Clear initial text for typewriter
        typeWriter(greetingElement, greetingText, 0, () => {
            setTimeout(() => {
                professionElement.textContent = ''; // Clear initial text for typewriter
                typeWriter(professionElement, professionText, 0);
            }, 500); // Delay before typing profession
        });
    }, 1200); // Delay before starting typewriter effect after page load
    */
});