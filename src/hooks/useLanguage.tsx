import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

type Language = 'en' | 'ua';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Innovative IT Solutions for Your Business',
    'hero.subtitle': 'We deliver cutting-edge software development, cybersecurity, mobile solutions, and cloud services to transform your digital presence',
    'hero.cta': 'Get Started',
    'hero.learn_more': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive IT solutions tailored to your needs',
    'services.software.title': 'Software Development',
    'services.software.description': 'Custom web and desktop applications built with modern technologies',
    'services.cybersecurity.title': 'Cybersecurity',
    'services.cybersecurity.description': 'Protect your digital assets with enterprise-grade security solutions',
    'services.mobile.title': 'Mobile Solutions',
    'services.mobile.description': 'Native and cross-platform mobile apps for iOS and Android',
    'services.cloud.title': 'Cloud Services',
    'services.cloud.description': 'Scalable cloud infrastructure and migration services',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Leading the way in digital transformation',
    'about.description': 'We are a team of passionate developers and IT specialists dedicated to delivering innovative solutions that drive business growth and digital transformation.',
    'about.cta': 'Learn More',

    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts behind our success',
    'team.alex.message': 'Alex is the visionary behind our company, leading with passion and innovation.',
    'team.sarah.message': 'Sarah drives our technology strategy, ensuring we stay at the forefront of innovation.',
    'team.mike.message': 'Mike is the backbone of our development team, crafting robust and scalable solutions.',
    'team.emily.message': 'Emily ensures our systems are secure and resilient against threats.',

    // Features
    'features.title': 'Everything your business needs',
    'features.description': 'Comprehensive fintech solutions to streamline your financial operations and drive growth',

    'features.feature1.title': 'Payment Automation',
    'features.feature1.description': 'Automate payment processing and reconciliation to reduce manual errors and improve efficiency.',
    'features.feature1.note': 'Set up automated payment workflows with custom approval chains. Schedule recurring payments, automate invoice processing, and create conditional rules for different transaction types. Reduce manual intervention and ensure compliance with financial regulations.',

    'features.feature2.title': 'Real-time Analytics',
    'features.feature2.description': 'Monitor financial performance with real-time dashboards and comprehensive reporting.',
    'features.feature2.note': 'Track key financial metrics with customizable dashboards. Monitor cash flow, payment volumes, and transaction success rates in real-time. Generate detailed reports for stakeholders and identify trends before they impact your business.',

    'features.feature3.title': 'Risk Management',
    'features.feature3.description': 'Advanced fraud detection and risk assessment tools to protect your business.',
    'features.feature3.note': 'Utilize machine learning algorithms to detect suspicious transactions and prevent fraud. Set up custom risk rules, monitor transaction patterns, and receive instant alerts for unusual activity. Protect your business with enterprise-grade security measures.',

    'features.feature4.title': 'Compliance Tools',
    'features.feature4.description': 'Built-in compliance features to meet regulatory requirements effortlessly.',
    'features.feature4.note': 'Stay compliant with financial regulations across multiple jurisdictions. Automated KYC/AML checks, transaction monitoring, and regulatory reporting. Generate audit trails and maintain documentation to meet compliance standards.',

    'features.feature5.title': 'Multi-currency Support',
    'features.feature5.description': 'Process payments in multiple currencies with real-time exchange rates.',
    'features.feature5.note': 'Accept and process payments in over 150 currencies with competitive exchange rates. Automatic currency conversion, hedging tools, and multi-currency accounting. Expand your business globally with seamless international payment processing.',

    'features.feature6.title': 'API Integration',
    'features.feature6.description': 'Powerful APIs for seamless integration with your existing financial systems.',
    'features.feature6.note': 'Connect with your ERP, accounting software, and banking systems through our comprehensive APIs. Real-time webhooks, detailed documentation, and SDKs for popular programming languages. Build custom integrations that fit your unique business needs.',

    
    // Portfolio
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Showcasing our latest projects and achievements',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by businesses worldwide',
    'testimonials.client1': 'Outstanding development team! They delivered our project on time and exceeded our expectations. The quality of code and attention to detail is remarkable.',
    'testimonials.client2': 'Their cybersecurity expertise saved our company from potential threats. Professional, reliable, and highly skilled team.',
    'testimonials.client3': 'The mobile app they developed transformed our business. User-friendly, fast, and beautifully designed. Highly recommend!',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Contact us today',
    'contact.subtitle2': 'Ready to transform your business with cutting-edge technology? Contact us today and let\'s discuss your project.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.form_title': 'Leave us a message',
    'contact.form_first_name': 'First Name',
    'contact.form_last_name': 'Last Name',
    'contact.form_email': 'Email',
    'contact.form_phone': 'Phone',
    'contact.form_message': 'Tell us about your project...',
    'contact.form_submit': 'Send Message',
    
    // Brands
    'brands.title': 'Trusted By',
    'brands.subtitle': 'Companies that trust our expertise',
    
    // Footer
    'footer.company': 'Company',
    'footer.rights': 'All rights reserved',
  },
  ua: {
    // Navigation
    'nav.about': 'Про нас',
    'nav.services': 'Послуги',
    'nav.portfolio': 'Портфоліо',
    'nav.team': 'Команда',
    'nav.contact': 'Контакти',
    
    // Hero Section
    'hero.title': 'Інноваційні IT-рішення для вашого бізнесу',
    'hero.subtitle': 'Ми надаємо передові послуги з розробки програмного забезпечення, кібербезпеки, мобільних рішень та хмарних сервісів для трансформації вашої цифрової присутності',
    'hero.cta': 'Почати',
    'hero.learn_more': 'Дізнатися більше',
    
    // Services
    'services.title': 'Наші послуги',
    'services.subtitle': 'Комплексні IT-рішення, адаптовані до ваших потреб',
    'services.software.title': 'Розробка ПЗ',
    'services.software.description': 'Кастомні веб та настільні додатки, створені з використанням сучасних технологій',
    'services.cybersecurity.title': 'Кібербезпека',
    'services.cybersecurity.description': 'Захистіть свої цифрові активи за допомогою рішень безпеки корпоративного рівня',
    'services.mobile.title': 'Мобільні рішення',
    'services.mobile.description': 'Нативні та кросплатформенні мобільні додатки для iOS та Android',
    'services.cloud.title': 'Хмарні сервіси',
    'services.cloud.description': 'Масштабована хмарна інфраструктура та послуги міграції',
    
    // About
    'about.title': 'Про нас',
    'about.subtitle': 'Лідери цифрової трансформації',
    'about.description': 'Ми - команда пристрасних розробників та IT-спеціалістів, присвячених створенню інноваційних рішень, які стимулюють зростання бізнесу та цифрову трансформацію.',
    'about.cta': 'Дізнатися більше',

    // Team
    'team.title': 'Наша команда',
    'team.subtitle': 'Зустрічайте експертів нашого успіху',
    'team.alex.message': 'Алекс - візіонер нашої компанії, який веде нас вперед з пристрастю та інноваціями.',
    'team.sarah.message': 'Сара керує нашою технологічною стратегією, забезпечуючи, щоб ми залишалися на передовій інновацій.',
    'team.mike.message': 'Майк - основа нашої команди розробників, створюючи надійні та масштабовані рішення.',
    'team.emily.message': 'Емілі забезпечує безпеку та стійкість наших систем проти загроз.',

    // Features
    'features.title': 'Все, що потрібно вашому бізнесу',
    'features.description': 'Комплексні фінансові рішення для оптимізації ваших фінансових операцій та стимулювання зростання',
    'features.feature1.title': 'Автоматизація платежів',
    'features.feature1.description': 'Автоматизуйте обробку платежів та звірку, щоб зменшити ручні помилки та підвищити ефективність.',
    'features.feature1.note': 'Налаштуйте автоматизовані робочі процеси платежів з кастомними ланцюгами затвердження. Плануйте регулярні платежі, автоматизуйте обробку рахунків та створюйте умовні правила для різних типів транзакцій. Зменшіть ручне втручання та забезпечте відповідність фінансовим регламентам.',
    'features.feature2.title': 'Аналітика в реальному часі',
    'features.feature2.description': 'Моніторинг фінансової продуктивності з реальними інформаційними панелями та комплексною звітністю.',
    'features.feature2.note': 'Відстежуйте ключові фінансові показники з налаштовуваними інформаційними панелями. Моніторинг грошових потоків, обсягів платежів та успішності транзакцій в реальному часі. Генеруйте детальні звіти для зацікавлених сторін та виявляйте тенденції до того, як вони вплинуть на ваш бізнес.',
    'features.feature3.title': 'Управління ризиками',
    'features.feature3.description': 'Розширене виявлення шахрайства та інструменти оцінки ризиків для захисту вашого бізнесу.',
    'features.feature3.note': 'Використовуйте алгоритми машинного навчання для виявлення підозрілих транзакцій та запобігання шахрайству. Налаштуйте кастомні правила ризику, моніторте патерни транзакцій та отримуйте миттєві сповіщення про незвичайну активність. Захистіть свій бізнес за допомогою рішень безпеки корпоративного рівня.',
    'features.feature4.title': 'Інструменти відповідності',
    'features.feature4.description': 'Вбудовані функції відповідності для легкого дотримання регуляторних вимог.',
    'features.feature4.note': 'Залишайтеся відповідними фінансовим регламентам у різних юрисдикціях. Автоматизовані перевірки KYC/AML, моніторинг транзакцій та регуляторна звітність. Генеруйте аудиторські сліди та зберігайте документацію для відповідності стандартам.',
    'features.feature5.title': 'Підтримка багатовалютності',
    'features.feature5.description': 'Обробляйте платежі в різних валютах з реальними обмінними курсами.',
    'features.feature5.note': 'Приймайте та обробляйте платежі в понад 150 валютах з конкурентними обмінними курсами. Автоматична конверсія валют, інструменти хеджування та багатовалютний облік. Розширюйте свій бізнес на міжнародному рівні з безшовною обробкою міжнародних платежів.',
    'features.feature6.title': 'Інтеграція API',
    'features.feature6.description': 'Потужні API для безшовної інтеграції з вашими існуючими фінансовими системами.',
    'features.feature6.note': 'Підключайтеся до вашого ERP, бухгалтерського програмного забезпечення та банківських систем через наші комплексні API. Реальні вебхуки, детальна документація та SDK для популярних мов програмування. Створюйте кастомні інтеграції, які відповідають вашим унікальним бізнес-потребам.',
    
    // Portfolio
    'portfolio.title': 'Наші роботи',
    'portfolio.subtitle': 'Демонструємо наші останні проекти та досягнення',
    
    // Testimonials
    'testimonials.title': 'Що кажуть наші клієнти',
    'testimonials.subtitle': 'Нам довіряють компанії по всьому світу',
    'testimonials.client1': 'Відмінна команда розробників! Вони виконали наш проект вчасно і перевершили наші очікування. Якість коду та увага до деталей вражає.',
    'testimonials.client2': 'Їх експертиза в кібербезпеці врятувала нашу компанію від потенційних загроз. Професійна, надійна та високо кваліфікована команда.',
    'testimonials.client3': 'Мобільний додаток, який вони розробили, трансформував наш бізнес. Зручний у використанні, швидкий та красиво оформлений. Щиро рекомендую!',
    
    // FAQ
    'faq.title': 'Часті запитання',
    'faq.subtitle': 'Знайдіть відповіді на поширені запитання',
    
    // Contact
    'contact.title': 'Зв\'яжіться з нами',
    'contact.subtitle': 'Готові почати свій проект? Зв\'яжіться з нами сьогодні',
    'contact.subtitle2': 'Готові трансформувати свій бізнес за допомогою передових технологій? Зв\'яжіться з нами сьогодні та обговоримо ваш проект.',
    'contact.email': 'Електронна пошта',
    'contact.phone': 'Телефон',
    'contact.address': 'Адреса',
    'contact.form_title': 'Залиште нам повідомлення',
    'contact.form_first_name': 'Ім\'я',
    'contact.form_last_name': 'Прізвище',
    'contact.form_email': 'Електронна пошта',
    'contact.form_phone': 'Телефон',
    'contact.form_message': 'Розкажіть нам про ваш проект...',
    'contact.form_submit': 'Надіслати',
    
    // Brands
    'brands.title': 'Нам довіряють',
    'brands.subtitle': 'Компанії, які довіряють нашій експертизі',
    
    // Footer
    'footer.company': 'Компанія',
    'footer.rights': 'Всі права захищені',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ua')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};