'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { VisitorCounter } from './VisitorCounter';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-white font-bold text-lg md:text-xl tracking-tight transition-opacity hover:opacity-90"
          >
            <span>Mukhtadir Shaikh</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
          </Link>

          {/* Status Badges & Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-xs text-zinc-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for opportunities</span>
              </div>
              <VisitorCounter />
            </div>

            <nav className="flex items-center gap-6 text-sm text-zinc-400 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none flex items-center gap-2"
            aria-label="Toggle Navigation Menu"
          >
            <VisitorCounter />
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col justify-between px-8 py-20 md:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-xs text-zinc-300 font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for opportunities</span>
              </div>
              <VisitorCounter />
            </div>

            <nav className="flex flex-col space-y-6 text-2xl font-bold text-white pt-6 border-t border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-white/5 hover:text-zinc-300 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-zinc-400 font-mono">
            <p>Senior Frontend Engineer · React & Next.js Architect</p>
            <p className="text-white">mukhtadir.shaikh2025@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};
