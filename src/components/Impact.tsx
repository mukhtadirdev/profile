'use client';

import React from 'react';

const impactMetrics = [
  {
    value: '7+',
    label: 'Years of Experience',
    subtext: 'Engineering web applications across enterprise products, banking portals, and e-commerce platforms since 2019.'
  },
  {
    value: '91',
    label: 'Production Lighthouse Score',
    subtext: 'Average production performance rating across optimized client-facing React and Next.js applications.'
  },
  {
    value: '36%+',
    label: 'Page Performance Improvement',
    subtext: 'Empirically verified Core Web Vitals acceleration achieved through code splitting, dynamic loading, and caching.'
  },
  {
    value: 'Enterprise',
    label: 'Scale Applications',
    subtext: 'Delivering frontend architecture for fortune-500 financial institutions, postal networks, and global e-commerce.'
  }
];

export const Impact: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
            VERIFIED METRICS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            Engineering Impact & Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-[#101013] border border-white/10 rounded-2xl flex flex-col justify-between space-y-4 hover:border-white/25 transition-colors group"
            >
              <div>
                <p className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                  {item.value}
                </p>
                <h3 className="text-base font-bold text-zinc-200 mt-3">{item.label}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal pt-2 border-t border-white/5">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
