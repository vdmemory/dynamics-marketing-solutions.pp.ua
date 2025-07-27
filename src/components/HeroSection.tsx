import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { easeOut, motion} from 'framer-motion';
import {scrollToSection} from "@/lib/scrollToSection.ts";
import bgHero from '@/assets/bg-hero.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: 'cover',
      }}></div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Hero content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={
              () => scrollToSection('contact')
            } size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;