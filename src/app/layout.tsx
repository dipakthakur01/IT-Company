import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0062E3',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zorventech.com'),
  title: 'Zorven Tech | Enterprise IT Solutions & Modern Software Engineering',
  description: 'Zorven Tech IT Solutions delivers mission-critical software engineering, modern web applications, scalable cloud architecture, and enterprise digital solutions.',
  keywords: [
    'Zorven Tech',
    'Zorven Tech IT Solutions',
    'Enterprise IT Solutions',
    'Full-Stack Software Development',
    'Next.js Web Development',
    'Node.js REST API',
    'MySQL Database',
    'Custom Cloud Applications'
  ],
  authors: [{ name: 'Zorven Tech IT Solutions' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Zorven Tech'
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Zorven Tech | Enterprise IT Solutions & Digital Excellence',
    description: 'We engineer high-performance, secure, and modern digital platforms for forward-thinking enterprises.',
    url: 'https://zorventech.com',
    siteName: 'Zorven Tech IT Solutions',
    images: [
      {
        url: '/logo.png',
        width: 1420,
        height: 1108,
        alt: 'Zorven Tech IT Solutions Logo'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zorven Tech IT Solutions',
    description: 'Enterprise IT Solutions & Engineering Digital Excellence',
    images: ['/logo.png']
  }
};

import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Providers from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="bg-background text-text-primary antialiased min-h-screen flex flex-col font-sans pb-16 lg:pb-0">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
