import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  number?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  number,
  className = ''
}) => {
  return (
    <div className={`space-y-3 mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-3">
        {number && (
          <span className="font-mono text-xs md:text-sm text-zinc-500 font-semibold tracking-wider">
            [{number}]
          </span>
        )}
        {eyebrow && (
          <span className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
