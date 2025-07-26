import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.about')}</a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.services')}</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.portfolio')}</a>
          <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.team')}</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'ua' : 'en')}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'en' ? 'UA' : 'EN'}
          </Button>
          <Button size="sm">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;