import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: '100+', label: 'Clients' },
    { icon: Award, value: '50+', label: 'Projects' },
    { icon: Target, value: '5+', label: 'Years' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
      {/* Background Image */}
      <motion.div 
        className="absolute top-10 left-10 w-80 h-80 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
      >
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Team collaboration"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground"
                variants={itemVariants}
              >
                {t('about.title')}
              </motion.h2>
              <motion.p 
                className="text-xl text-primary font-medium"
                variants={itemVariants}
              >
                {t('about.subtitle')}
              </motion.p>
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={itemVariants}
              >
                {t('about.description')}
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center space-y-4"
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="mx-auto p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 w-fit"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-3xl font-bold text-foreground"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;