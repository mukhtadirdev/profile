import React from 'react';
import { ArrowDownRight, ArrowRight, Download, Terminal } from 'lucide-react';
import { TechLogo } from './TechLogos';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="max-w-4xl space-y-8">
          <div
            className="hero-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-xs font-mono text-zinc-300"
            style={{ animationDelay: '0ms' }}
          >
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span className="uppercase tracking-widest font-semibold">SENIOR FRONTEND ENGINEER</span>
          </div>

          <h1
            className="hero-reveal text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]"
            style={{ animationDelay: '80ms' }}
          >
            Building scalable digital experiences with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              React, Next.js & TypeScript.
            </span>
          </h1>

          <p
            className="hero-reveal text-lg md:text-xl text-zinc-400 leading-relaxed font-normal max-w-3xl"
            style={{ animationDelay: '160ms' }}
          >
            7+ years of experience engineering high-performance web applications, modern frontend architectures, and enterprise platforms.
          </p>

          <div
            className="hero-reveal text-sm font-mono text-zinc-400 flex items-center gap-3 flex-wrap pt-1"
            style={{ animationDelay: '220ms' }}
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white font-medium">
              <TechLogo name="React" className="w-4 h-4" />
              <span>React</span>
            </span>
            <span className="text-zinc-600">·</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white font-medium">
              <TechLogo name="Next.js" className="w-4 h-4" />
              <span>Next.js</span>
            </span>
            <span className="text-zinc-600">·</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white font-medium">
              <TechLogo name="TypeScript" className="w-4 h-4" />
              <span>TypeScript</span>
            </span>
            <span className="text-zinc-600">·</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white font-medium">
              <TechLogo name="JavaScript" className="w-4 h-4" />
              <span>JavaScript</span>
            </span>
            <span className="text-zinc-600">·</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white font-medium">
              <TechLogo name="Microfrontend" className="w-4 h-4" />
              <span>Microfrontends</span>
            </span>
            <span className="text-zinc-600">·</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 font-medium">
              <TechLogo name="Tailwind CSS" className="w-4 h-4" />
              <span>Performance</span>
            </span>
          </div>

          <div
            className="hero-reveal pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#work"
              className="px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 group shadow-xl"
            >
              <span>View Selected Work</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="mailto:mukhtadir.shaikh2025@gmail.com?subject=Mukhtadir%20Shaikh%20-%20Resume%20Request"
              className="px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-semibold text-sm rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 group py-2"
            >
              <span>Let's work together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
