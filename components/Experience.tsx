'use client';

import { motion, Variants } from 'motion/react';
import { EXPERIENCE } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col gap-16"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">Where I&apos;ve Worked</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-primary/30 ml-4 md:ml-8"
        >
          {EXPERIENCE.map((job, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 ml-8 md:ml-12 relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[40px] md:-left-[56px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 transition-transform group-hover:scale-125" />
              
              <Card className="bg-surface/50 border-border/50 hover:border-primary/30 transition-colors rounded-2xl overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                        {job.role}
                        {job.isCurrent && (
                          <Badge variant="outline" className="px-2 py-0.5 border-success/30 bg-success/10 text-success uppercase tracking-widest text-[10px] font-bold flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span>
                            </span>
                            Current
                          </Badge>
                        )}
                      </h3>
                      <p className="text-base font-medium text-primary">{job.company}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider bg-background/50 px-3 py-1 rounded-full border border-border/50 self-start md:self-auto">
                      {job.period}
                    </span>
                  </div>
                  
                  <ul className="list-none space-y-3 mt-2">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-base text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-1.5 text-xs">◆</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
