'use client';

import React from 'react';

const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Microfrontends',
  'Module Federation',
  'Redux Toolkit',
  'GraphQL',
  'Node.js',
  'AWS',
  'Performance Engineering',
  'Accessibility'
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full py-6 border-y border-white/10 bg-black/40 overflow-hidden select-none group">
      <div className="flex gap-8 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-sm font-mono text-zinc-400 hover:text-white transition-colors font-medium tracking-wide">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  );
};
