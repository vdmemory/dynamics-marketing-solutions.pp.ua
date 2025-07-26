import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Shield, Smartphone, Cloud } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: Shield,
      titleKey: 'services.cybersecurity.title',
      descriptionKey: 'services.cybersecurity.description',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-red-500/20 to-orange-500/20'
    },
    {
      icon: Smartphone,
      titleKey: 'services.mobile.title',
      descriptionKey: 'services.mobile.description',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      icon: Cloud,
      titleKey: 'services.cloud.title',
      descriptionKey: 'services.cloud.description',
      image: 'https://images.pexels.com/photos/451844/pexels-photo-451844.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
      {/* Background decorative image */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 opacity-5"
        initial={{ opacity: 0, rotate: -45 }}
        animate={isInView ? { opacity: 0.05, rotate: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Technology background"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <motion.div 
          className="text-center space-y-4 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group h-full border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-32 overflow-hidden">
                    <motion.img 
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`} />
                  </div>
                  
                  <CardHeader className="text-center relative">
                    <motion.div 
                      className="mx-auto mb-4 p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 w-fit -mt-8 relative z-10 border-2 border-background"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {t(service.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {t(service.descriptionKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;