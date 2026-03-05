'use client';

import { motion, Variants } from 'motion/react';
import { SKILLS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col gap-16"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">What I Work With</h2>
          <p className="text-lg text-muted-foreground">Full-stack capable. Frontend obsessed.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {SKILLS.map((group, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-foreground tracking-tight border-b border-border/50 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-surface ${
                      group.isAI
                        ? 'border-primary/50 bg-primary/10 text-primary-foreground hover:bg-primary/20'
                        : 'border-border bg-surface/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
