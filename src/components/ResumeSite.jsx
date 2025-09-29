import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePhoto from "../images/your-photo.jpg";

// анимациия
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
};

const Resume = () => {
    const [isClient, setIsClient] = useState(false);
    const [theme, setTheme] = useState('light');

    // Инициализация темы
    useEffect(() => {
        setIsClient(true);
        const savedTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);
    }, []);

    // Применяем тему при изменении
    useEffect(() => {
        if (isClient) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme, isClient]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Плавная прокрутка к секциям
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="resume-container">
            {/* Навигация */}
            <header className="resume-header">
                <nav className="nav-inner">
                    <div className="logo">Пишук Анфиса Игоревна</div>
                    <ul className="nav-menu">
                        <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Обо мне</a></li>
                        <li><a href="#education" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Образование</a></li>
                        <li><a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Опыт</a></li>
                        <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Проекты</a></li>
                        <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Контакты</a></li>
                    </ul>
                    <button className="theme-switcher" onClick={toggleTheme} aria-label="Переключить тему">
                        <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            {theme === 'light' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            )}
                        </svg>
                    </button>
                </nav>
            </header>

            <main className="resume-main">
                {/* Секция "Обо мне" */}
                <section id="about" className="section">
                    <div className="about-section">
                        <motion.div
                            className="about-photo"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="photo-container">
                                <img
                                    src={profilePhoto}
                                    alt="Пишук Анфиса"
                                    className="profile-photo"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="about-title">Пишук Анфиса Игоревна</h1>
                            <p className="about-subtitle">Team Lead Developer</p>

                            <div className="about-description">
                                <p>
                                    Опытный team Lead с более чем 2 годами коммерческого опыта.
                                    Специализируюсь на создании современных, отзывчивых веб-приложений
                                    с использованием React, TypeScript и современных инструментов разработки.
                                </p>
                                <p>
                                    Увлечена созданием интуитивных пользовательских интерфейсов,
                                    оптимизацией производительности и внедрением лучших практик разработки.
                                </p>
                            </div>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-number">2+</span>
                                    <span className="stat-label">Лет опыта</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Проектов</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Довольных клиентов</span>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>Ключевые навыки:</h3>
                                <div className="skills-list">
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">TypeScript</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">HTML/CSS</span>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">Webpack</span>
                                    <span className="skill-tag">REST API</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Секция образования */}
                <section id="education" className="section">
                    <h2>Образование</h2>
                    <div className="education-grid">
                        {[
                            {
                                id: 1,
                                degree: "Средства связи с подвижными объектами",
                                university: "МГТУ им. Э.Н Баумана, Москва",
                                period: "2020 — 2024",
                                location: "Москва, Россия",
                                icon: "🎓",
                                description: "Углубленное изучение алгоритмов, Систем связи и аппаратных комплексов, машинного обучения и современных технологий разработки программного обеспечения.",
                                features: [
                                    "Основы программирования и алгоритмов",
                                    "Базы данных и архитектура компьютера",
                                    "Веб-разработка и мобильные приложения",
                                    "Монтаж, техническая эксплуатация и ремонт оборудования для систем связи с подвижными объектами, обеспечивающие стабильность и эффективность коммуникаций",
                                    "Прием и квалифицированное разрешение обращений абонентов, а также координация работы технических служб для оперативного решения задач",
                                    "Настройка и оптимизация аппаратных средств и программного обеспечения, обеспечивающих высокую производительность и надежность связи",
                                    "Проектирование и внедрение комплексных систем связи, соответствующих современным стандартам и требованиям отрасли.",
                                    "Научная работа по оптимизации фронтенд-приложений",
                                    "Участие в хакатонах и IT-конференциях"
                                ],
                                gpa: "4.98/5.0"
                            },
                            {
                                id: 2,
                                degree: "Бакалавр юриспруденции",
                                university: "Финансовый университет при Правительстве Российской Федерации",
                                period: "2024 — 2028",
                                location: "Москва, Россия",
                                icon: "📚",
                                description: "Фундаментальное образование в области компьютерных наук, математики и программирования.",
                                features: [
                                    "Подготовка и оформление нормативных, юридических, организационных и распорядительных документов с применением передовых методов юридической техники, обеспечивающих точность и соответствие законодательным требованиям",
                                    " Анализ и исследование юридических фактов, выбор и применение соответствующих норм права, профессиональное оформление правоприменительных актов для принятия обоснованных управленческих решений",
                                    " Ведение претензионно исковой работы, представление интересов физических и юридических лиц в судебных инстанциях, включая арбитраж, а также в государственных и общественных организациях, что обеспечивает эффективное разрешение правовых споров",
                                    " Поиск, систематизация и реферирование актуальной правовой информации, развитие навыков юридического письма для аргументированного и научно - обоснованного представления результатов исследований в сфере правового обеспечения экономической деятельности",
                                    " Охрана прав и свобод человека и гражданина, защита всех форм собственности, предупреждение и пресечение правонарушений с применением комплексных мер правовой защиты",
                                    " Экспертно - консультационная деятельность, включая подготовку экспертных заключений по правовым вопросам, что способствует принятию взвешенных стратегических решений",
                                ],
                                gpa: "Будет известен после окончания вуза"
                            },
                            {
                                id: 3,
                                degree: "Исполнитель Художественно-оформительных работ",
                                university: "Государственное бюджетное профессиональное учреждение города Москвы Технологический колледж N 34",
                                period: "2019-2020",
                                location: "Офлайн",
                                icon: "⚡",
                                description: "Интенсивный курс по современному дизайну с упором на практические навыки.",
                                features: [
                                    "Продвинутая работа с инструментами дизайна",
                                    "Принципы юзабилити и основы UX/UI-дизайна",
                                    "Основы визуальной коммуникации"
                                ],
                                certificate: true
                            },
                            {
                                id: 4,
                                degree: "Секретарь-машинистка",
                                university: "Государственное бюджетное профессиональное учреждение города Москвы Технологический колледж N 34",
                                period: "2019-2020",
                                location: "Офлайн",
                                icon: "⚡",
                                description: "Интенсивный курс по современной фронтенд-разработке с упором на практические навыки.",
                                features: [
                                    "Ведение делопроизводства и обработка документов",
                                    "Использование офисных программ (MS Office, Google Docs)",
                                    "Организация встреч и видеоконференций",
                                    "Работа с IT-терминологией и технической документацией",
                                    "Администрирование корпоративных мессенджеров и почтовых сервисов",
                                    "Автоматизация рутинных задач и базовые навыки программирования",
                                    "Коммуникация и координация внутри команды",
                                    "Конфиденциальность и ответственность при работе с данными"
                                ],
                                certificate: true
                            },
                            {
                                id: 5,
                                degree: "Разработка игр и чат-ботов на Python",
                                university: "Проект Код Будущего",
                                period: "2023-2024",
                                location: "Онлайн",
                                icon: "⚡",
                                description: "Интенсивный курс по современной фронтенд-разработке с упором на практические навыки.",
                                features: [
                                    "Разработка игр и чат-ботов на Python",
                                    "Использование библиотек Pygame и Discord.py",
                                    "Обработка событий и взаимодействие пользователя",
                                    "Искусственный интеллект и логика поведения",
                                    "Интеграция с мессенджерами и API",
                                    "Оптимизация производительности и отладка"
                                ],
                                certificate: true
                            },
                            {
                                id: 6,
                                degree: "Web-программист: создание сайтов и верстка web-страниц",
                                university: "Проект кадры",
                                period: "2025",
                                location: "Онлайн",
                                icon: "⚡",
                                description: "Интенсивный курс по современной фронтенд-разработке с упором на практические навыки.",
                                features: [
                                    "Повторение html и css",
                                    "Продвинутый JavaScript и TypeScript",
                                    "React и современные фреймворки",
                                    "Оптимизация и лучшие практики"
                                ],
                                certificate: true
                            }
                        ].map((edu, i) => (
                            <motion.article
                                key={edu.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                className="education-card"
                            >
                                <div className="education-header">
                                    <div className="education-icon">
                                        {edu.icon}
                                    </div>
                                    <div className="education-info">
                                        <h3 className="education-degree">{edu.degree}</h3>
                                        <p className="education-university">{edu.university}</p>
                                        <div className="education-meta">
                                            <span className="education-period">{edu.period}</span>
                                            <span className="education-location">{edu.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="education-details">{edu.description}</p>

                                <ul className="education-features">
                                    {edu.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                                {edu.gpa && (
                                    <div className="education-gpa">
                                        <span className="gpa-label">Средний балл: </span>
                                        <span className="gpa-value">{edu.gpa}</span>
                                    </div>
                                )}

                                {edu.certificate && (
                                    <div className="education-gpa">
                                        <span className="gpa-label">Статус: </span>
                                        <span className="gpa-value">Сертификат с отличием</span>
                                    </div>
                                )}
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Секция опыта */}
                <section id="experience" className="section">
                    <h2>Опыт работы</h2>
                    <div className="experience-grid">
                        {[
                            {
                                company: "ООО «Орион»",
                                role: "Младший инженер Департамента программного обеспечения в Дирекции разработки микроэлектроники и электронных модулей",
                                years: "2023 — 2024",
                                id: 1,
                                achievements: [
                                    "Руководство командой из 7 человек",
                                    "Разработка архитектуры и сценариев бота",
                                    "Тестирование, выявление багов и подготовка отчётности",
                                    "Валидация и метрологический контроль комплектующих и готовых конфигураций",
                                    "Подготовка и установка тестового оборудования и ПО, анализ измерений, контроль качества работ и рационального расходования материалов",
                                    "Оптимизация производительности приложения на 40%"
                                ]
                            },
                            {
                                company: "Лаборант МГТУ ИМ. Н. Э Баумана, г Москва",
                                role: "Frontend Developer",
                                years: "2023 — 2024",
                                id: 2,
                                achievements: [
                                    "Корректировка и разработка методических пособий",
                                    "Проверка отчётов по практическим и лабораторным работам",
                                    "Участие в экспериментах",
                                    "Помощь в проведение и чтении лекций",
                                    "Проверка технического оборудования, согласно методических указаний и т.д"
                                ]
                            },
                            {
                                company: "InfiniInfinite leaders Tech",
                                role: "Team Lead, Product manager",
                                years: "2024 — по настоящие время",
                                id: 3,
                                achievements: [
                                    "Разработка клиентских приложений",
                                    "Интеграция с REST API и GraphQL. Postgressql и т.д",
                                    "Руководство командой",
                                    "Code review и менторство junior разработчиков"
                                ]
                            }
                        ].map((item, i) => (
                            <motion.article
                                key={item.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                className="experience-card animated-card"
                                aria-labelledby={`exp-${item.id}`}
                            >
                                <h3 id={`exp-${item.id}`}>{item.role}</h3>
                                <p className="experience-meta">{item.company} — {item.years}</p>
                                <ul className="experience-list">
                                    {item.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Секция проектов */}
                <section id="projects" className="section">
                    <h2>Проекты</h2>
                    <div className="projects-grid">
                        {[
                            {
                                id: 1,
                                title: "E-commerce Platform",
                                description: "Разработка современной платформы электронной коммерции с поддержкой PWA, offline-режимом и продвинутой системой поиска.",
                                tags: ["React", "TypeScript", "Redux", "PWA", "Node.js"]
                            },
                            {
                                id: 2,
                                title: "Analytics Dashboard",
                                description: "Создание интерактивной панели управления для анализа больших данных с реальными графиками и отчетами.",
                                tags: ["React", "D3.js", "TypeScript", "WebSocket", "Chart.js"]
                            },
                            {
                                id: 3,
                                title: "Mobile Banking App",
                                description: "Разработка безопасного мобильного банковского приложения с биометрической аутентификацией.",
                                tags: ["React Native", "TypeScript", "Firebase", "Security"]
                            }
                        ].map((project) => (
                            <motion.article
                                key={project.id}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="project-card"
                            >
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Секция контактов */}
                <section id="contact" className="section">
                    <h2>Контакты</h2>
                    <form
                        className="contact-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Сообщение отправлено!');
                        }}
                        aria-label="Форма контактов"
                    >
                        <label>
                            <span>Email</span>
                            <input
                                type="email"
                                required
                                placeholder="anfisa22092004@gmail.com"
                            />
                        </label>

                        <label>
                            <span>Сообщение</span>
                            <textarea
                                rows={5}
                                required
                                placeholder="Привет, хочу обсудить проект..."
                            />
                        </label>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="primary-btn"
                        >
                            Отправить сообщение
                        </motion.button>
                    </form>
                </section>
            </main>

            {/* Футер */}
            <footer className="resume-footer">
                <div className="footer-inner">
                    <p>© {isClient ? new Date().getFullYear() : "2025"} Пишук Анфиса Игоревна — Все права защищены.</p>
                    <nav aria-label="Футер навигация">
                        <ul className="footer-nav">
                            <li><a href="#privacy">Политика конфиденциальности</a></li>
                            <li><a href="#terms">Условия использования</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Resume;