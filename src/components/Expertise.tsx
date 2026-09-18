'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { expertiseItems } from '@/data/skills';
import { Code2, Layers, Zap, ShieldCheck } from 'lucide-react';

const icons = [Code2, Layers, Zap, ShieldCheck];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 border-b border-white/10 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="CORE COMPETENCIES"
          title="What I Build"
          subtitle="Full-spectrum frontend engineering and software architecture capabilities."
          number="05"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseItems.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.number}
                className="p-8 bg-[#0f0f12] border border-white/10 rounded-2xl space-y-6 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-zinc-500 group-hover:text-white transition-colors">
                      [{item.number}]
                    </span>
                    <div className="p-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-zinc-400 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="text-xs font-mono text-emerald-400 mt-1">{item.subtitle}</p>
                  </div>

                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-md text-xs font-mono text-zinc-300 font-medium"
                    >
                      {skill}
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
