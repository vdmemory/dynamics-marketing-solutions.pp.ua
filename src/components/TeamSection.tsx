import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import {easeOut, motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TeamSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: t('team.alex.message')
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
        message: t('team.sarah.message')
    },
    {
      name: 'Mike Rodriguez',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
        message: t('team.mike.message')
    },
    {
      name: 'Emily Davis',
      position: 'Security Expert',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
        message: t('team.emily.message')
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  return (
    <section id={"team"} className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
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
        className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
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
            {t('team.title')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t('team.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="min-h-72 group border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 text-center space-y-4">
                  <motion.div 
                    className="relative w-24 h-24 mx-auto rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="font-bold text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.name}
                    </motion.h4>
                    <p className="text-muted-foreground">{member.position}</p>
                  </div>
                    <p className="text-muted-foreground text-sm">{member.message}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;