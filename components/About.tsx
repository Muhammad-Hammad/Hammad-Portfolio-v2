'use client';

import { motion } from 'motion/react';
import { PERSONAL } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">About Me</h2>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              I&apos;m a Senior Frontend Engineer based in {PERSONAL.location}, with {PERSONAL.yearsExperience} years building production-grade React and Next.js applications for clients across the UK, EU, and Asia. I specialize in micro-frontend architecture, TypeScript-first development, and scalable design systems.
            </p>
            <p>
              What sets me apart: I&apos;ve fully integrated AI into my engineering workflow — using Cursor AI with custom MCP configurations, prompt engineering, and agentic setups to ship faster without cutting corners. I don&apos;t just use AI as a search engine. I direct it like a team.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-3xl opacity-50 pointer-events-none" />
          <Card className="relative bg-surface border-border/50 rounded-2xl overflow-hidden backdrop-blur-sm">
            <CardContent className="p-8 grid grid-cols-2 gap-8">
              <StatItem value={PERSONAL.yearsExperience} label="Years Experience" />
              <StatItem value={PERSONAL.projectsShipped} label="Projects Shipped" />
              <StatItem value={PERSONAL.aiSpeedMultiplier} label="Faster with AI" />
              <StatItem value={PERSONAL.countriesServed} label="Countries Served" />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">{value}</span>
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );
}
