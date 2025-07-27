import React, { useRef, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  ChevronDown,
  Layers,
  Grid3x3,
  ListCheck,
  BookOpen,
  Star,
  LayoutDashboard
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import {useLanguage} from "@/hooks/useLanguage.tsx";

const Features = () => {
  const { t } = useLanguage();
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  const features = [
    {
      title: t('features.feature1.title'),
      description: t('features.feature1.description'),
      expandedDescription: t('features.feature1.note'),
      icon: <Layers size={24} className="text-cosmic-accent" />
    },
    {
      title: t('features.feature2.title'),
      description: t('features.feature2.description'),
      expandedDescription: t('features.feature2.note'),
      icon: <Grid3x3 size={24} className="text-cosmic-accent" />
    },
    {
      title: t('features.feature3.title'),
      description: t('features.feature3.description'),
      expandedDescription: t('features.feature3.note'),
      icon: <LayoutDashboard size={24} className="text-cosmic-accent" />
    },
    {
      title: t('features.feature4.title'),
      description: t('features.feature4.description'),
      expandedDescription: t('features.feature4.note'),
      icon: <ListCheck size={24} className="text-cosmic-accent" />
    },
    {
      title: t('features.feature5.title'),
      description: t('features.feature5.description'),
      expandedDescription: t('features.feature5.note'),
      icon: <Star size={24} className="text-cosmic-accent" />
    },
    {
      title: t('features.feature6.title'),
      description: t('features.feature6.description'),
      expandedDescription: t('features.feature6.note'),
      icon: <BookOpen size={24} className="text-cosmic-accent" />
    }
  ];

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
      <section
          id="features"
          className="w-full py-12 md:py-16 px-6 md:px-12"
          ref={ref}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                {t('features.title')}
            </h2>
            <p className="text-cosmic-muted text-lg">
                {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: isInView ? index * 0.1 : 0,
                      duration: 0.4,
                      ease: 'easeOut'
                    }}
                >
                  <Collapsible
                      open={openFeature === index}
                      onOpenChange={() => toggleFeature(index)}
                      className={`rounded-xl border ${
                          openFeature === index
                              ? 'border-cosmic-light/40'
                              : 'border-cosmic-light/20'
                      } cosmic-gradient transition-all duration-300`}
                  >
                    <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                          {feature.icon}
                        </div>
                        <ChevronDown
                            className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                                openFeature === index ? 'rotate-180' : ''
                            }`}
                        />
                      </div>
                      <h3 className="text-xl font-medium tracking-tighter mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-cosmic-muted">{feature.description}</p>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 pt-2">
                      <div className="pt-3 border-t border-cosmic-light/10">
                        <p className="text-cosmic-muted">
                          {feature.expandedDescription}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Features;
