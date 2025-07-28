import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import {easeOut, motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {configCompany} from "@/lib/configCompany.ts";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: configCompany.email,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: configCompany.phone,
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: language === 'en' ? configCompany.addressEng : configCompany.address,
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
        ease: easeOut
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const actionEmail = `https://formsubmit.co/${configCompany.formEmail}`;

  return (
    <section id={"contact"} className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
      {/* Background decorative image */}
      <motion.div 
        className="absolute top-20 right-20 w-80 h-80 opacity-5"
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        animate={isInView ? { opacity: 0.05, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Contact us"
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
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardTitle className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t('contact.form_title')}
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action={actionEmail} method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input name={'First Name'} placeholder={t('contact.form_first_name')} className="border-primary/20 focus:border-primary" />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input name={"Last Name"} placeholder={t('contact.form_last_name')} className="border-primary/20 focus:border-primary" />
                  </motion.div>
                </div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input name={"Email"} placeholder={t('contact.form_email')} type="email" className="border-primary/20 focus:border-primary" />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input name={"Phone"} placeholder={t('contact.form_phone')} type="tel" className="border-primary/20 focus:border-primary" />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                      name={"message"}
                    placeholder={t('contact.form_message')}
                    className="min-h-32 border-primary/20 focus:border-primary" 
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                    {t('contact.form_submit')}
                  </Button>
                </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={infoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold text-foreground mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {t('contact.title')}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                variants={itemVariants}
              >
                {t('contact.subtitle2')}
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;