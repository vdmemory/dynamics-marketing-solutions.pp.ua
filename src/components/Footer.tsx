import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Transforming businesses through innovative technology solutions and expert consultation.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('nav.services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.software.title')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.cybersecurity.title')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.mobile.title')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.cloud.title')}</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('nav.team')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 TechSolutions. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;