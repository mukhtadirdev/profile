'use client';

import React from 'react';
import { ArrowUpRight, Send, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 border-b border-white/10 relative overflow-hidden bg-[#0a0a0c]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            GET IN TOUCH
          </span>

          <div className="space-y-3">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Have a frontend challenge?
            </h2>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-400 tracking-tight">
              Let's build something scalable.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
            I'm open to senior frontend engineering, lead frontend engineering, frontend architecture and consulting opportunities.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:mukhtadir.shaikh2025@gmail.com"
              className="px-8 py-4 bg-white text-black font-bold text-base rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-3 shadow-2xl interactive-hover group"
            >
              <span>Start a conversation</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/mukhtadirshaikh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-medium text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </a>

            <a
              href="https://github.com/mukhtadtirShakh1123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-medium text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-zinc-300" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs font-mono">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
              <p className="text-zinc-500 uppercase">Direct Email</p>
              <a href="mailto:mukhtadir.shaikh2025@gmail.com" className="text-white hover:text-emerald-400 transition-colors block font-semibold truncate">
                mukhtadir.shaikh2025@gmail.com
              </a>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
              <p className="text-zinc-500 uppercase">LinkedIn Profile</p>
              <a href="https://linkedin.com/in/mukhtadirshaikh/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors block font-semibold truncate">
                linkedin.com/in/mukhtadirshaikh/
              </a>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
              <p className="text-zinc-500 uppercase">Portfolio Website</p>
              <a href="https://profile-gules-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors block font-semibold truncate">
                profile-gules-sigma.vercel.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
