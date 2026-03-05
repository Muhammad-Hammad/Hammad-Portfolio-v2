'use client';

import { motion } from 'motion/react';
import { PERSONAL } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center text-center gap-16"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Open to remote contracts, full-time roles, and interesting freelance projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Card className="bg-surface border-border/50 hover:border-primary/50 transition-colors rounded-2xl overflow-hidden h-full">
              <CardContent className="p-8 flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-foreground">Send an Email</h3>
                  <p className="text-muted-foreground">{PERSONAL.email}</p>
                </div>
                <Link
                  href={`mailto:${PERSONAL.email}`}
                  className="mt-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 w-full"
                >
                  Email Me →
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Card className="bg-surface border-border/50 hover:border-success/50 transition-colors rounded-2xl overflow-hidden h-full">
              <CardContent className="p-8 flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success mb-2">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-foreground">Chat on WhatsApp</h3>
                  <p className="text-muted-foreground">{PERSONAL.whatsappDisplay}</p>
                </div>
                <Link
                  href={PERSONAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-surface border border-border/50 hover:bg-success hover:text-success-foreground hover:border-success h-10 px-6 py-2 w-full"
                >
                  Message Me →
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full border-t border-border/50 pt-12">
          <div className="flex items-center gap-6">
            <SocialLink href={PERSONAL.github} icon={<Github className="w-6 h-6" />} label="GitHub" />
            <SocialLink href={PERSONAL.linkedin} icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
          </div>
          
          <p className="text-sm text-muted-foreground/60">
            {PERSONAL.availability} · {PERSONAL.location} · Response within 24 hours
          </p>
        </div>
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
      className="p-4 rounded-full bg-surface/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-surface hover:border-border transition-all group relative"
      aria-label={label}
    >
      {icon}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-border rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </Link>
  );
}
