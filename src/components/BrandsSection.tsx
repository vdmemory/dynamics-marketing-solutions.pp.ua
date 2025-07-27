import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {easeOut, motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
      name: 'GitHub',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
      name: 'Tesla',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    },
    {
      name: 'Meta',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const brandVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
        animate={{
          y: [10, -10, 10],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <motion.div 
          className="text-center space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {t('brands.title')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            variants={itemVariants}
          >
            {t('brands.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              className="group flex items-center justify-center"
              variants={brandVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`w-auto h-12 rounded-lg bg-gradient-to-br flex items-center justify-center overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all duration-300`}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;