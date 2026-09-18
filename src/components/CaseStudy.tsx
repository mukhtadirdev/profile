'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Cpu, Gauge, Building2, Eye } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    category: 'Architecture',
    title: 'Modern frontend architectures',
    description:
      'React, Next.js, Microfrontends, Module Federation, Nx and scalable component architecture built to support multi-team parallel development.',
    tech: ['Microfrontends', 'Module Federation', 'Nx Monorepo', 'Design Systems']
  },
  {
    icon: Gauge,
    category: 'Performance',
    title: 'Performance as an engineering discipline',
    description:
      'Code splitting, lazy loading, SSR, caching, Core Web Vitals tuning, Lighthouse optimization and CDN edge strategies to maximize user retention.',
    tech: ['Web Vitals', 'Lighthouse', 'SSR & ISR', 'Bundle Splitting']
  },
  {
    icon: Building2,
    category: 'Enterprise',
    title: 'Complex products made maintainable',
    description:
      'Enterprise web platforms across financial technology, wealth management, insurance technology, e-commerce, and public postal services.',
    tech: ['Fintech', 'Banking', 'E-commerce', 'Insurance']
  },
  {
    icon: Eye,
    category: 'Experience',
    title: 'Interfaces people can actually use',
    description:
      'Responsive design, WCAG accessibility, semantic HTML5 structure, comprehensive keyboard navigation, and screen-reader compliant experiences.',
    tech: ['WCAG 2.2 AA', 'Accessibility', 'Keyboard Nav', 'Semantic HTML']
  }
];

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="ENGINEERING DOMAINS"
          title="Engineering at Scale"
          subtitle="Specialized problem domains in enterprise web engineering and architecture."
          number="02"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#0f0f12] border border-white/10 rounded-2xl space-y-6 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-zinc-300 group-hover:text-white group-hover:border-white/30 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                      0{idx + 1} // {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/[0.02] border border-white/10 rounded text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
