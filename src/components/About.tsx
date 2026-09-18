'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Heading & Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="BACKGROUND & FOCUS"
              title="About Me"
              number="03"
              className="mb-6"
            />

            <div className="p-6 bg-[#0f0f12] border border-white/10 rounded-2xl space-y-4 font-mono text-xs text-zinc-300">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-zinc-500">ENGINEER PROFILE</span>
                <span className="text-emerald-400 font-bold">SENIOR / LEAD LEVEL</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Experience:</span>
                  <span className="text-white font-semibold">7+ Years Professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Primary Stack:</span>
                  <span className="text-white font-semibold">React · Next.js · TS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Architecture:</span>
                  <span className="text-white font-semibold">Microfrontends & Monorepos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-white font-semibold">Available Global Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Detailed Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed font-normal pt-2">
            <p className="text-xl md:text-2xl text-white font-semibold leading-snug">
              I'm Mukhtadir Shaikh, a Senior Frontend Engineer with 7+ years of experience building scalable and high-impact web applications.
            </p>

            <p>
              My core expertise is React, Next.js, TypeScript, frontend architecture, microfrontends, performance engineering and modern UI development.
            </p>

            <p>
              I've worked across fintech, digital banking, insurance, e-commerce, postal services and enterprise platforms, collaborating with cross-functional teams to turn complex requirements into reliable digital products.
            </p>

            <p className="text-zinc-400">
              I enjoy solving frontend architecture problems, improving application performance, building reusable systems and helping teams move from legacy implementations toward modern web architectures.
            </p>

            {/* Core Directives Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-zinc-300">
              <div className="flex items-center gap-2.5 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-hydration layout shift optimization</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict WCAG 2.1/2.2 AA accessibility</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modular React design token systems</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Microfrontend Module Federation</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300 transition-colors group"
              >
                <span>More about my experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
