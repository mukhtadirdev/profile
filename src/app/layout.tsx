import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://profile-gules-sigma.vercel.app'),
  title: 'Mukhtadir Shaikh — Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer specializing in React, Next.js, TypeScript, Microfrontends, frontend architecture and performance engineering.',
  keywords: [
    'React Developer',
    'Senior Frontend Engineer',
    'Frontend Engineer',
    'React.js Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Frontend Architect',
    'Microfrontend Developer',
    'Remote Frontend Engineer'
  ],
  authors: [{ name: 'Mukhtadir Shaikh' }],
  creator: 'Mukhtadir Shaikh',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  openGraph: {
    title: 'Mukhtadir Shaikh — Senior Frontend Engineer',
    description:
      '7+ years of experience engineering high-performance web applications, modern frontend architectures, and enterprise platforms.',
    url: 'https://profile-gules-sigma.vercel.app',
    siteName: 'Mukhtadir Shaikh Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mukhtadir Shaikh — Senior Frontend Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukhtadir Shaikh — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, TypeScript, Microfrontends, frontend architecture and performance engineering.',
    images: ['/og-image.svg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  themeColor: '#080808'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-[#f3f4f6] selection:bg-white selection:text-black min-h-screen flex flex-col justify-between`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
