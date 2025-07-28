import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {configCompany} from "@/lib/configCompany.ts";
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';
import SocialLinks from "@/components/SocialLinks.tsx";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="space-y-4">
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
            <p className="text-muted-foreground text-sm">
              {
                language === 'en' ? configCompany.infoEng : configCompany.info
              }
            </p>
            <SocialLinks />
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('nav.services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.software.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.cybersecurity.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.mobile.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.cloud.title')}</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">{t('nav.team')}</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">{t('nav.portfolio')}</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 {configCompany.name}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;