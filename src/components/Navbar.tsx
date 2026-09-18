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
            ? 'py-3 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2">
          {/* Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-white font-bold text-base sm:text-lg md:text-xl tracking-tight transition-opacity hover:opacity-90 shrink-0"
          >
            <span className="truncate max-w-[170px] sm:max-w-none">Mukhtadir Shaikh</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
          </Link>

          {/* Desktop Status Badges & Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-xs text-zinc-300 font-mono whitespace-nowrap">
                <span className="relative flex h-2 w-2 shrink-0">
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

          {/* Mobile Right Controls: Compact Visitor Counter + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <VisitorCounter compact />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/[0.04] border border-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col justify-between px-6 py-20 lg:hidden animate-in fade-in duration-200 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-xs text-zinc-300 font-mono w-fit">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for opportunities</span>
              </div>
              <VisitorCounter />
            </div>

            <nav className="flex flex-col space-y-4 text-xl sm:text-2xl font-bold text-white pt-6 border-t border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 border-b border-white/5 hover:text-zinc-300 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-zinc-400 font-mono">
            <p>Senior Frontend Engineer · React & Next.js Architect</p>
            <p className="text-white truncate">mukhtadir.shaikh2025@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};
