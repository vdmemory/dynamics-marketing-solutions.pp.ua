import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import {scrollToSection} from "@/lib/scrollToSection.ts";
import {motion} from "framer-motion";
import logo from "@/assets/logo.png";
import {configCompany} from "@/lib/configCompany.ts";
import SocialLinks from "@/components/ui/SocialLinks.tsx";
import {LanguageSwitcher} from "@/components/LanguageSwitcher.tsx";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
          <img src={logo} alt="logo company" className={`h-14`} />
          <span className={`text-xl font-bold text-white`}>
              {configCompany.name}
            </span>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.services')}</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.portfolio')}</a>
          <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.team')}</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>

        <SocialLinks isHeader />
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button onClick={() => scrollToSection('contact')} size="sm">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;