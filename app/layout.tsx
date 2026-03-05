import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Hammad Ghani — Senior Frontend Engineer',
  description: 'Senior Frontend Engineer specializing in React, Next.js, TypeScript, and AI-augmented development. Remote-ready. Based in Karachi, Pakistan.',
  openGraph: {
    title: 'Hammad Ghani — Senior Frontend Engineer',
    description: 'Senior Frontend Engineer specializing in React, Next.js, TypeScript, and AI-augmented development. Remote-ready. Based in Karachi, Pakistan.',
    url: 'https://hammad-ghani.netlify.app/',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
