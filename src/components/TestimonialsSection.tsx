import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "Outstanding development team! They delivered our project on time and exceeded our expectations. The quality of code and attention to detail is remarkable.",
      author: "John Smith",
      position: "CEO at TechStart",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      quote: "Their cybersecurity expertise saved our company from potential threats. Professional, reliable, and highly skilled team.",
      author: "Maria Garcia",
      position: "CTO at SecureData",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      quote: "The mobile app they developed transformed our business. User-friendly, fast, and beautifully designed. Highly recommend!",
      author: "David Chen",
      position: "Founder at MobileFirst",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8, rotateX: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cosmic-grid opacity-5"></div>
      
      {/* Background quote decoration */}
      <motion.div 
        className="absolute top-20 left-20 text-9xl text-primary/5 font-serif"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
      >
        "
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
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <motion.div 
                    className="flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={starVariants}
                        custom={i}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.p 
                    className="text-foreground/90 italic flex-grow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <motion.div 
                      className="w-12 h-12 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-medium text-foreground"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.author}
                      </motion.h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
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

export default TestimonialsSection;