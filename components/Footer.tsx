'use client';

import { PERSONAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
        <p className="text-sm text-muted-foreground font-medium">
          Built by {PERSONAL.name} · {new Date().getFullYear()} · Crafted with Next.js & a lot of AI
        </p>
      </div>
    </footer>
  );
}
