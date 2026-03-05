'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Github, Linkedin, MessageCircle, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PERSONAL } from '@/lib/constants';
import Link from 'next/link';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % PERSONAL.taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle radial gradient glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="outline" className="px-4 py-1.5 border-border/50 bg-surface/50 text-muted-foreground uppercase tracking-widest text-xs font-medium">
              ✦ {PERSONAL.title} · {PERSONAL.yearsExperience} Years
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            {PERSONAL.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="h-12 md:h-16 mb-4 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl font-medium text-muted-foreground"
              >
                {PERSONAL.taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground/80 mb-10 tracking-wide">
            {PERSONAL.subTagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-shadow">
              <motion.a 
                href="#projects"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                View My Work ↓
              </motion.a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-medium border-border/50 bg-surface/30 hover:bg-surface">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <SocialLink href={PERSONAL.github} icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href={PERSONAL.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href={PERSONAL.whatsapp} icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-surface/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-surface hover:border-border transition-all group relative"
      aria-label={label}
    >
      {icon}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-border rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </Link>
  );
}
