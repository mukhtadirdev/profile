import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ClientProviders } from '@/components/ClientProviders';

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
  openGraph: {
    title: 'Mukhtadir Shaikh — Senior Frontend Engineer',
    description:
      '7+ years of experience engineering high-performance web applications, modern frontend architectures, and enterprise platforms.',
    url: 'https://profile-gules-sigma.vercel.app',
    siteName: 'Mukhtadir Shaikh Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukhtadir Shaikh — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, TypeScript, Microfrontends, frontend architecture and performance engineering.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-[#f3f4f6] selection:bg-white selection:text-black min-h-screen flex flex-col justify-between`}
      >
        <ClientProviders />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
