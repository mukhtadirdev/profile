'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, Building } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="CAREER TIMELINE"
          title="Professional Experience"
          subtitle="A track record of engineering leadership and frontend development across enterprise organizations."
          number="04"
        />

        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12 ml-2 md:ml-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Dot */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#0a0a0a] transition-all duration-300 ${
                  exp.isCurrent
                    ? 'border-emerald-400 bg-emerald-400/20 scale-125'
                    : 'border-zinc-600 group-hover:border-white group-hover:scale-110'
                }`}
              />

              <div className="p-6 md:p-8 bg-[#0e0e11] border border-white/10 rounded-2xl space-y-4 hover:border-white/25 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/5 pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded-full">
                          PRESENT ROLE
                        </span>
                      )}
                      {exp.client && (
                        <span className="px-2.5 py-0.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[10px] rounded-full flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          <span>Client: {exp.client}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-zinc-300 mt-1 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.role}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-mono text-zinc-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Highlights list */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2.5 pt-2 text-xs md:text-sm text-zinc-300 font-sans">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 font-mono text-xs mt-0.5">▸</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Focus Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.focus.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-white/[0.02] border border-white/10 rounded-md text-xs font-mono text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
