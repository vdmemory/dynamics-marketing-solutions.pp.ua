import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    { 
      name: 'TechCorp', 
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    { 
      name: 'Innovation Ltd', 
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-green-500/20 to-teal-500/20'
    },
    { 
      name: 'Future Systems', 
      logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-red-500/20 to-orange-500/20'
    },
    { 
      name: 'Digital Solutions', 
      logo: 'https://images.pexels.com/photos/451844/pexels-photo-451844.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    { 
      name: 'Cloud Nine', 
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      name: 'Secure Data', 
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'from-yellow-500/20 to-red-500/20'
    },
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
        ease: "easeOut"
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
        ease: "easeOut"
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
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
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${brand.color} flex items-center justify-center overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all duration-300`}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
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