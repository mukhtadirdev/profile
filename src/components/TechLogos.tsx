import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-4 h-4' }) => {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('react')) {
    return (
      <svg className={`${className} text-[#61DAFB] fill-current`} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" />
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes('next.js') || normalized.includes('next')) {
    return (
      <svg className={`${className} fill-current text-white`} viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm3.96 13.96L11 9.5v6.5H9.5V8.5h1.5l4.96 6.46v-6.46H17.4v7.46z" />
      </svg>
    );
  }

  if (normalized.includes('typescript')) {
    return (
      <svg className={`${className} fill-current text-[#3178C6]`} viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm10.22 13.56c.72.39 1.63.66 2.47.66 1.34 0 1.96-.58 1.96-1.39 0-.84-.69-1.29-2.02-1.77-1.89-.66-2.97-1.54-2.97-3.05 0-1.92 1.6-3.23 4.14-3.23 1.15 0 2.07.24 2.67.57l-.63 1.51c-.48-.27-1.28-.53-2.14-.53-1.29 0-1.82.55-1.82 1.25 0 .77.63 1.15 1.94 1.63 1.99.72 3.07 1.55 3.07 3.2 0 2.05-1.57 3.39-4.38 3.39-1.29 0-2.47-.35-3.03-.7l.54-1.54zM7.18 10.6H5v-1.6h6.11v1.6H9.03v7.35H7.18V10.6z" />
      </svg>
    );
  }

  if (normalized === 'javascript' || normalized === 'js') {
    return (
      <svg className={`${className} fill-current text-[#F7DF1E]`} viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm11.53 14.34c.76.43 1.76.77 2.87.77 1.48 0 2.22-.62 2.22-1.53 0-.96-.79-1.44-2.15-1.96-2.17-.79-3.23-1.74-3.23-3.41 0-2.14 1.73-3.49 4.41-3.49 1.39 0 2.37.3 2.92.59l-.65 1.68c-.46-.24-1.34-.54-2.31-.54-1.37 0-2.07.57-2.07 1.32 0 .86.72 1.25 2.11 1.76 2.26.83 3.32 1.77 3.32 3.48 0 2.28-1.79 3.65-4.73 3.65-1.48 0-2.73-.39-3.32-.78l.61-1.54zM7.78 12.18c0-.7.31-1.04.9-1.04.62 0 .97.35.97 1.04v5.33c0 1.57-.88 2.68-2.61 2.68-1.1 0-1.95-.38-2.42-.76l.54-1.48c.4.3.99.57 1.65.57.87 0 1.27-.49 1.27-1.34v-4.46z" />
      </svg>
    );
  }

  if (normalized.includes('html')) {
    return (
      <svg className={`${className} fill-current text-[#E34F26]`} viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.48L12 24 1.41 21.48L1.5 0zm15.42 6.55H7.13l.23 2.58h9.33l-.52 5.72-4.17 1.15-4.17-1.15-.27-3.07H5.02l.48 5.48L12 19.92l6.5-1.8 1.08-11.57z" />
      </svg>
    );
  }

  if (normalized.includes('css')) {
    return (
      <svg className={`${className} fill-current text-[#1572B6]`} viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.48L12 24 1.41 21.48L1.5 0zm15.42 6.55H7.13l.23 2.58h9.33l-.52 5.72-4.17 1.15-4.17-1.15-.27-3.07H5.02l.48 5.48L12 19.92l6.5-1.8 1.08-11.57z" />
      </svg>
    );
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg className={`${className} fill-current text-[#06B6D4]`} viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  if (normalized.includes('redux')) {
    return (
      <svg className={`${className} fill-current text-[#764ABC]`} viewBox="0 0 24 24">
        <path d="M16.5 6a4.5 4.5 0 0 0-4.5 4.5V11a4.5 4.5 0 1 0 4.5-5zm-9 0a4.5 4.5 0 1 0 4.5 4.5V10.5A4.5 4.5 0 0 0 7.5 6zm4.5 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
      </svg>
    );
  }

  if (normalized.includes('graphql')) {
    return (
      <svg className={`${className} fill-current text-[#E10098]`} viewBox="0 0 24 24">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8v8L12 19.69 18.66 16V8L12 4.31z" />
      </svg>
    );
  }

  if (normalized.includes('node')) {
    return (
      <svg className={`${className} fill-current text-[#5FA04E]`} viewBox="0 0 24 24">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.31l7.5 4.13v8.25L12 20.82l-7.5-4.13V8.44L12 4.31z" />
      </svg>
    );
  }

  if (normalized.includes('aws')) {
    return (
      <svg className={`${className} fill-current text-[#FF9900]`} viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.33L4.47 7 12 3.67 19.53 7 12 9.33zM2 17l10 5 10-5v-3l-10 5-10-5v3z" />
      </svg>
    );
  }

  if (normalized.includes('docker')) {
    return (
      <svg className={`${className} fill-current text-[#2496ED]`} viewBox="0 0 24 24">
        <path d="M13.98 11.08h-2.12v2.12h2.12v-2.12zm-3.18 0H8.68v2.12h2.12v-2.12zm-3.18 0H5.5v2.12h2.12v-2.12zm9.54 0h-2.12v2.12h2.12v-2.12zm3.18 0h-2.12v2.12h2.12v-2.12zm-6.36-3.18h-2.12v2.12h2.12V7.9zm-3.18 0H8.68v2.12h2.12V7.9zm6.36 0h-2.12v2.12h2.12V7.9zm-3.18-3.18h-2.12v2.12h2.12V4.72z" />
      </svg>
    );
  }

  if (normalized.includes('kubernetes')) {
    return (
      <svg className={`${className} fill-current text-[#326CE5]`} viewBox="0 0 24 24">
        <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm0 3.3l6.5 3.75v7.5L12 20.3l-6.5-3.75v-7.5L12 5.3z" />
      </svg>
    );
  }

  if (normalized.includes('jest')) {
    return (
      <svg className={`${className} fill-current text-[#C21325]`} viewBox="0 0 24 24">
        <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" />
      </svg>
    );
  }

  if (normalized.includes('cypress')) {
    return (
      <svg className={`${className} fill-current text-[#00BF88]`} viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={`${className} fill-current text-zinc-400`} viewBox="0 0 24 24">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  );
};
