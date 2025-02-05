// Joriy tilni saqlash uchun
let currentLanguage = localStorage.getItem('preferred-language') || 'uz';

// Barcha tarjimalarni saqlash uchun
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hi there 👋, I\'m',
            description: 'Crafting modern web experiences with React.js and Next.js',
            viewWork: 'View My Work',
            getInTouch: 'Get in Touch',
            downloadCV: 'Download CV',
            scrollDown: 'Scroll Down'
        },
        about: {
            title: 'About Me',
            role: 'Frontend Developer',
            experience: '+4 months Experience',
            description1: 'I am a dedicated Frontend Developer specializing in building modern web applications.',
            description2: 'I maintain a technology blog and create educational content, sharing my knowledge with the tech community.'
        },
        projects: {
            title: 'My Projects',
            view: 'View Demo',
            code: 'Source Code'
        },
        skills: {
            title: 'Skills & Expertise',
            intro: 'Core technologies and skills',
            experience: 'Months Experience',
            projects: 'Projects',
            satisfaction: 'Success Rate',
            coreTech: 'Core Technologies'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Let\'s Connect',
            description: 'Feel free to reach out for collaborations or just a friendly hello',
            form: {
                name: 'Full Name',
                email: 'Email Address',
                phone: 'Phone Number',
                subject: 'Subject',
                message: 'Your Message',
                send: 'Send Message'
            }
        },
        gallery: {
            title: 'Photo Gallery',
            image1: {
                title: 'Photos from Tashkent City',
                description: 'Photo 1'
            },
            image2: {
                title: 'Photos from Tashkent City',
                description: 'Photo 2'
            }
        },
        footer: {
            copyright: '© 2024 Ikramovdev. All rights reserved.',
            links: {
                home: 'Home',
                about: 'About',
                portfolio: 'Portfolio',
                contact: 'Contact'
            }
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            about: 'Обо мне',
            portfolio: 'Портфолио',
            skills: 'Навыки',
            contact: 'Контакты'
        },
        hero: {
            greeting: 'Привет 👋, я',
            description: 'Создаю современные веб-приложения с React.js и Next.js',
            viewWork: 'Мои работы',
            getInTouch: 'Связаться',
            downloadCV: 'Скачать CV',
            scrollDown: 'Прокрутить вниз'
        },
        about: {
            title: 'Обо мне',
            role: 'Frontend Разработчик',
            experience: '+4 месяца опыта',
            description1: 'Я Frontend разработчик, специализирующийся на создании современных веб-приложений.',
            description2: 'Веду технический блог и создаю обучающий контент, делясь знаниями с сообществом.'
        },
        projects: {
            title: 'Мои проекты',
            view: 'Демо',
            code: 'Исходный код'
        },
        skills: {
            title: 'Навыки и опыт',
            intro: 'Основные технологии и навыки',
            experience: 'Месяцев опыта',
            projects: 'Проектов',
            satisfaction: 'Успешность',
            coreTech: 'Основные технологии'
        },
        contact: {
            title: 'Контакты',
            subtitle: 'Свяжитесь со мной',
            description: 'Буду рад сотрудничеству или просто общению',
            form: {
                name: 'Полное имя',
                email: 'Электронная почта',
                phone: 'Номер телефона',
                subject: 'Тема',
                message: 'Ваше сообщение',
                send: 'Отправить'
            }
        },
        gallery: {
            title: 'Фотогалерея',
            image1: {
                title: 'Фотографии из Ташкент Сити',
                description: 'Фото 1'
            },
            image2: {
                title: 'Фотографии из Ташкент Сити',
                description: 'Фото 2'
            }
        },
        footer: {
            copyright: '© 2024 Ikramovdev. Все права защищены.',
            links: {
                home: 'Главная',
                about: 'Обо мне',
                portfolio: 'Портфолио',
                contact: 'Контакты'
            }
        }
    },
    uz: {
        nav: {
            home: 'Asosiy',
            about: 'Men haqimda',
            portfolio: 'Portfolio',
            skills: 'Ko\'nikmalar',
            contact: 'Aloqa'
        },
        hero: {
            greeting: 'Salom 👋, men',
            description: 'React.js va Next.js yordamida zamonaviy web ilovalar yarataman',
            viewWork: 'Ishlarimni ko\'ring',
            getInTouch: 'Bog\'lanish',
            downloadCV: 'CV yuklab olish',
            scrollDown: 'Pastga'
        },
        about: {
            title: 'Men haqimda',
            role: 'Frontend Dasturchi',
            experience: '+4 oylik tajriba',
            description1: 'Men zamonaviy web ilovalar yaratishga ixtisoslashgan Frontend dasturchiman.',
            description2: 'Texnologik blog yuritaman va ta\'lim kontentlari yarataman, bilimlarimni jamiyat bilan ulashaman.'
        },
        projects: {
            title: 'Loyihalarim',
            view: 'Ko\'rish',
            code: 'Manba kod'
        },
        skills: {
            title: 'Ko\'nikmalar',
            intro: 'Asosiy texnologiyalar va ko\'nikmalar',
            experience: 'Oylik tajriba',
            projects: 'Loyihalar',
            satisfaction: 'Natija',
            coreTech: 'Asosiy texnologiyalar'
        },
        contact: {
            title: 'Aloqa',
            subtitle: 'Bog\'lanish',
            description: 'Hamkorlik yoki do\'stona suhbat uchun bog\'laning',
            form: {
                name: 'To\'liq ism',
                email: 'Email manzil',
                phone: 'Telefon raqam',
                subject: 'Mavzu',
                message: 'Xabaringiz',
                send: 'Xabar yuborish'
            }
        },
        gallery: {
            title: 'Fotogalereya',
            image1: {
                title: 'Toshkent Shahridan fotolar',
                description: '1-rasm'
            },
            image2: {
                title: 'Toshkent Shahridan fotolar',
                description: '2-rasm'
            }
        },
        footer: {
            copyright: '© 2024 Ikramovdev. Barcha huquqlar himoyalangan.',
            links: {
                home: 'Asosiy',
                about: 'Men haqimda',
                portfolio: 'Portfolio',
                contact: 'Aloqa'
            }
        }
    }
};

// Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);

    // Barcha tarjima qilinadigan elementlarni yangilash
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                return;
            }
        }
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    // Til tanlash tugmasidagi joriy tilni yangilash
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }

    // Faol til tugmasini belgilash
    document.querySelectorAll('.language-dropdown button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Loyihalar bo'limini yangilash
    if (typeof generateProjects === 'function') {
        generateProjects();
    }

    // Custom event yuborish
    document.dispatchEvent(new Event('languageChanged'));
}

// DOM yuklangandan keyin ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');

    if (languageBtn && languageSelector && languageDropdown) {
        languageBtn.addEventListener('click', () => {
            languageSelector.classList.toggle('active');
        });

        document.querySelectorAll('.language-dropdown button').forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                changeLanguage(lang);
                languageSelector.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target)) {
                languageSelector.classList.remove('active');
            }
        });
    }

    // Saqlangan tilni yuklash
    const savedLanguage = localStorage.getItem('preferred-language');
    changeLanguage(savedLanguage || 'uz');
});