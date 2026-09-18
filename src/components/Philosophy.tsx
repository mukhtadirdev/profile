'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';

const principles = [
  {
    number: '01',
    title: 'Architecture should enable teams.',
    description:
      'Build systems that remain maintainable as products and engineering organizations grow. Modular microfrontends, atomic design tokens, and clear interface boundaries keep development velocity fast.'
  },
  {
    number: '02',
    title: 'Performance is a product feature.',
    description:
      'Fast experiences directly improve usability, conversion rates, accessibility, and business outcomes. Core Web Vitals and Lighthouse scores are fundamental engineering standards, not afterthoughts.'
  },
  {
    number: '03',
    title: 'Complexity should be absorbed by the system.',
    description:
      'Users should experience seamless simplicity even when the underlying application architecture involves intricate financial algorithms, dynamic schemas, and secure enterprise integrations.'
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="ENGINEERING PHILOSOPHY"
          title="How I Think About Frontend Engineering"
          subtitle="Core guiding principles driving my technical decision-making and software architecture."
          number="07"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-[#0e0e11] border border-white/10 rounded-2xl space-y-6 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="font-mono text-3xl font-extrabold text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  {item.number}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="w-12 h-[2px] bg-white/10 group-hover:bg-emerald-400/60 transition-colors pt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
