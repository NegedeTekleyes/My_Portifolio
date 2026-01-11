import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Negede Tekleyes | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Next.js, NestJS, and scalable web applications. Building e-learning platforms and social impact systems.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'NestJS', 'Software Engineer', 'Web Developer'],
  authors: [{ name: 'Negede Tekleyes' }],
  openGraph: {
    title: 'Negede Tekleyes | Full-Stack Developer',
    description: 'Full-Stack Developer building scalable web & mobile applications',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Negede Tekleyes | Full-Stack Developer',
    description: 'Full-Stack Developer building scalable web & mobile applications',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
