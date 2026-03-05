'use client';

import { motion, Variants } from 'motion/react';
import { PROJECTS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col gap-16"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">Things I&apos;ve Built</h2>
          <p className="text-lg text-muted-foreground">Side projects, experiments, and shipped products.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group ${project.featured ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <Card className={`h-full bg-surface border-border/50 transition-all duration-300 rounded-2xl overflow-hidden relative ${
                project.featured ? 'hover:border-primary/50 shadow-[0_0_15px_rgba(99,102,241,0.05)] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'hover:border-border hover:bg-surface/80'
              } hover:scale-[1.02]`}>
                <CardContent className="p-8 flex flex-col h-full gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{project.title}</h3>
                      {project.featured && (
                        <Badge variant="outline" className="px-3 py-1 border-primary/50 bg-primary/10 text-primary uppercase tracking-widest text-[10px] font-bold whitespace-nowrap">
                          Featured · Vibe Coded with AI
                        </Badge>
                      )}
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="px-3 py-1 text-xs font-medium rounded-full border-border/50 bg-background/50 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub ↗
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
