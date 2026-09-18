'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { techCategories } from '@/data/skills';

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="TECHNICAL TOOLING"
          title="Technology Ecosystem"
          subtitle="A categorized snapshot of the modern technologies, frameworks, and build tooling I utilize."
          number="06"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0e0e11] border border-white/10 rounded-2xl space-y-4 hover:border-white/25 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold text-white tracking-tight">{cat.category}</h3>
                <span className="text-[10px] font-mono text-zinc-500">{cat.skills.length} TOOLS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] rounded-md text-xs font-mono text-zinc-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
