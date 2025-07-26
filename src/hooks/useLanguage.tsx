import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ua';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
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
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts behind our success',
    
    // Portfolio
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Showcasing our latest projects and achievements',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by businesses worldwide',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Contact us today',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    
    // Brands
    'brands.title': 'Trusted By',
    'brands.subtitle': 'Companies that trust our expertise',
    
    // Footer
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
    
    // Team
    'team.title': 'Наша команда',
    'team.subtitle': 'Зустрічайте експертів нашого успіху',
    
    // Portfolio
    'portfolio.title': 'Наші роботи',
    'portfolio.subtitle': 'Демонструємо наші останні проекти та досягнення',
    
    // Testimonials
    'testimonials.title': 'Що кажуть наші клієнти',
    'testimonials.subtitle': 'Нам довіряють компанії по всьому світу',
    
    // FAQ
    'faq.title': 'Часті запитання',
    'faq.subtitle': 'Знайдіть відповіді на поширені запитання',
    
    // Contact
    'contact.title': 'Зв\'яжіться з нами',
    'contact.subtitle': 'Готові почати свій проект? Зв\'яжіться з нами сьогодні',
    'contact.email': 'Електронна пошта',
    'contact.phone': 'Телефон',
    'contact.address': 'Адреса',
    
    // Brands
    'brands.title': 'Нам довіряють',
    'brands.subtitle': 'Компанії, які довіряють нашій експертизі',
    
    // Footer
    'footer.rights': 'Всі права захищені',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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