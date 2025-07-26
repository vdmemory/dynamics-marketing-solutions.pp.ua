import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced analytics',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Security Dashboard',
      description: 'Real-time cybersecurity monitoring platform',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vue.js', 'Python', 'PostgreSQL'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Firebase', 'Stripe'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud deployment solution',
      image: 'https://images.pexels.com/photos/451844/pexels-photo-451844.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      links: { demo: '#', github: '#' }
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
    hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
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
            {t('portfolio.title')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group overflow-hidden border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <motion.h4 
                      className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full border border-primary/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" variant="outline" asChild className="group/btn">
                        <a href={project.links.demo}>
                          <ExternalLink className="mr-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" variant="outline" asChild className="group/btn">
                        <a href={project.links.github}>
                          <Github className="mr-2 h-3 w-3 transition-transform group-hover/btn:rotate-12" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;