// Project data
const projects = [
    {
        title: {
            en: 'E-Expert',
            ru: 'E-Expert',
            uz: 'E-Expert'
        },
        description: {
            en: 'Property valuation system. Modern web platform for real estate and car valuation.',
            ru: 'Система оценки имущества. Современная веб-платформа для оценки недвижимости и автомобилей.',
            uz: 'Mulk baholash tizimi. Ko\'chmas mulk va avtomobillarni baholash uchun zamonaviy web platforma.'
        },
        image: './images/E-expert.png',
        demo: 'https://expert-finall.vercel.app/',
        source: '#',
        technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Ant Design']
    },
    {
        title: {
            en: 'Nsoft',
            ru: 'Nsoft',
            uz: 'Nsoft'
        },
        description: {
            en: 'Landing page for educational platform',
            ru: 'Целевая страница образовательной платформы',
            uz: 'Ta\'lim platformasining yo\'naltirish sahifasi'
        },
        image: './images/nsoft.png',
        demo: 'https://nsoft-zexj.vercel.app/#work',
        source: '#',
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript']
    }
];

// Skills data
const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Git/GitHub', level: 85 }
];

// DOM Elements
const preloader = document.querySelector('.preloader');
const backToTopButton = document.getElementById('back-to-top');
const portfolioGrid = document.querySelector('.portfolio-grid');
const skillsContainer = document.querySelector('.skills-container');

// Preloader
window.addEventListener('load', () => {
    preloader.style.display = 'none';
});

// Back to Top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Generate project cards with language support
function generateProjects() {
    if (!portfolioGrid) return;
    
    const currentLang = localStorage.getItem('language') || 'uz';
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title[currentLang]}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.demo}" target="_blank" class="demo-btn">
                            <i class="fas fa-external-link-alt"></i>
                            <span data-i18n="projects.view">Ko'rish</span>
                        </a>
                        ${project.source !== '#' ? `
                            <a href="${project.source}" target="_blank" class="source-btn">
                                <i class="fab fa-github"></i>
                                <span data-i18n="projects.code">Kod</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title[currentLang]}</h3>
                <p>${project.description[currentLang]}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Generate skill bars
function generateSkills() {
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = `
        <div class="skills-header">
            <p class="skills-intro">Asosiy texnologiyalar va ko'nikmalar</p>
            <div class="skills-summary">
                <div class="summary-item">
                    <span class="summary-number">4+</span>
                    <span class="summary-label">Oylik Tajriba</span>
                </div>
                <div class="summary-item">
                    <span class="summary-number">10+</span>
                    <span class="summary-label">Loyihalar</span>
                </div>
                <div class="summary-item">
                    <span class="summary-number">100%</span>
                    <span class="summary-label">Natija</span>
                </div>
            </div>
        </div>
        <div class="skills-grid">
            ${skills.map(skill => `
                <div class="skill">
                    <div class="skill-info">
                        <span>${skill.name}</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize
generateProjects();
generateSkills();

// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Format message for Telegram
    const telegramMessage = `
🔔 Yangi Xabar:
👤 Ism: ${name}
📧 Email: ${email}
📱 Telefon: ${phone}
📝 Mavzu: ${subject}
💬 Xabar: ${message}
    `;

    const BOT_TOKEN = '6049358572:AAH7kX6UshFT-FLIjDfrRI5NKPVXdYFhw-o';
    const CHAT_ID = '6257619631';

    try {
        // Send message to Telegram bot
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();

        if (response.ok && data.ok) {
            // Show success modal
            const modal = document.getElementById('successModal');
            modal.classList.add('show');
            this.reset(); // Reset form

            // Close modal when clicking OK button
            document.getElementById('modalClose').onclick = function() {
                modal.classList.remove('show');
            };

            // Close modal when clicking outside
            modal.onclick = function(e) {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            };
        } else {
            console.error('Telegram API Error:', data);
            throw new Error('Xabar yuborishda xatolik yuz berdi');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Xabar yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
    }
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const navMenuLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navMenuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Close menu when clicking on nav links
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Animation on scroll
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = entry.target.dataset.animation;
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}

// Enhance project cards with hover effect
function enhanceProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const { left, top } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Initialize animations
setupScrollAnimations();
enhanceProjectCards();
animateSkillBars();

// Typing animation
const typedTextSpan = document.querySelector('.typed-text');
const texts = ['Frontend Developer', 'React.js Developer', 'Next.js Developer'];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (!typedTextSpan) return;
    
    if (charIndex < texts[textIndex].length) {
        typedTextSpan.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (!typedTextSpan) return;
    
    if (charIndex > 0) {
        typedTextSpan.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Initialize typing animation after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Particle animation
function createParticles() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particles.appendChild(particle);

        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            animation: particleFloat ${15 + Math.random() * 10}s infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
    }
}

// Initialize particles after DOM is loaded
document.addEventListener('DOMContentLoaded', createParticles);

// Add global error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Add error reporting logic here
});

// Add loading state handling
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('loading');
});

// Update projects when language changes
document.addEventListener('languageChanged', function(e) {
    generateProjects();
});