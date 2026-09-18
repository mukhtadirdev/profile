import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-4 h-4' }) => {
  const normalized = name.toLowerCase().trim();

  // React Atom SVG
  if (normalized.includes('react')) {
    return (
      <svg className={`${className} shrink-0 text-[#61DAFB]`} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.4" fill="none">
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  // Next.js Badge SVG
  if (normalized.includes('next.js') || normalized.includes('next')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M14.8 15.5L9.6 8.5H8.2V15.5H9.6V10.2L14.1 16.3C14.3 16.1 14.6 15.8 14.8 15.5Z" fill="#FFFFFF" />
        <path d="M14.5 8.5H15.8V15.5H14.5V8.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // TypeScript Badge SVG (Centered vector geometry)
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        {/* 'TS' Lettermarks crisp vector path */}
        <path d="M6.5 8.5H12V10H9.8V16.5H8.2V10H6.5V8.5Z" fill="white" />
        <path d="M16.8 10.3C16.3 10 15.6 9.8 14.8 9.8C14 9.8 13.5 10.1 13.5 10.6C13.5 11.1 13.9 11.4 14.9 11.7C16.3 12.1 17.2 12.7 17.2 14.1C17.2 15.6 15.9 16.7 14 16.7C12.9 16.7 11.8 16.3 11 15.8L11.6 14.4C12.3 14.9 13.2 15.3 14.1 15.3C14.9 15.3 15.4 15 15.4 14.4C15.4 13.9 15 13.6 14 13.3C12.5 12.8 11.7 12.2 11.7 10.8C11.7 9.4 12.9 8.3 14.7 8.3C15.7 8.3 16.6 8.6 17.3 9L16.8 10.3Z" fill="white" />
      </svg>
    );
  }

  // JavaScript Badge SVG (Centered vector geometry)
  if (normalized === 'javascript' || normalized === 'js') {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        {/* 'JS' Lettermarks crisp vector path */}
        <path d="M10.8 14.8C10.3 15.2 9.5 15.5 8.5 15.5C7.2 15.5 6.5 14.8 6.5 13.5V10H8V13.4C8 13.9 8.3 14.1 8.8 14.1C9.2 14.1 9.7 13.9 10.1 13.6L10.8 14.8Z" fill="#000000" />
        <path d="M16.8 10.3C16.3 10 15.6 9.8 14.8 9.8C14 9.8 13.5 10.1 13.5 10.6C13.5 11.1 13.9 11.4 14.9 11.7C16.3 12.1 17.2 12.7 17.2 14.1C17.2 15.6 15.9 16.7 14 16.7C12.9 16.7 11.8 16.3 11 15.8L11.6 14.4C12.3 14.9 13.2 15.3 14.1 15.3C14.9 15.3 15.4 15 15.4 14.4C15.4 13.9 15 13.6 14 13.3C12.5 12.8 11.7 12.2 11.7 10.8C11.7 9.4 12.9 8.3 14.7 8.3C15.7 8.3 16.6 8.6 17.3 9L16.8 10.3Z" fill="#000000" />
      </svg>
    );
  }

  // HTML5 Shield SVG
  if (normalized.includes('html')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z" fill="#E34F26" />
        <path d="M12 3.8V19.8L17.7 18.2L19.2 3.8H12Z" fill="#EF652A" />
        <path d="M12 7.7H7.7L7.9 9.9H12V12H8.1L8.5 15.8L12 16.8V14.6L9.9 14L9.7 12H12V7.7Z" fill="#FFFFFF" />
        <path d="M12 7.7V9.9H16.1L15.7 14L12 15V17.2L15.5 16.2L16.2 9.9H12V7.7Z" fill="#ECECEC" />
      </svg>
    );
  }

  // CSS3 Shield SVG
  if (normalized.includes('css')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z" fill="#1572B6" />
        <path d="M12 3.8V19.8L17.7 18.2L19.2 3.8H12Z" fill="#33A9DC" />
        <path d="M12 7.7H7.7L7.9 9.9H12V7.7ZM12 12H8.1L8.5 15.8L12 16.8V14.6L9.9 14L9.7 12H12V12Z" fill="#FFFFFF" />
        <path d="M16.1 7.7H12V9.9H16.1L15.7 14L12 15V17.2L15.5 16.2L16.2 7.7H16.1Z" fill="#ECECEC" />
      </svg>
    );
  }

  // Tailwind CSS Wave SVG
  if (normalized.includes('tailwind')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M12 5C9 5 7 6.5 6 9.5C7.2 8 8.6 7.4 10.2 8C11.1 8.2 11.8 8.9 12.5 9.6C13.7 10.9 15 12.3 18 12.3C21 12.3 23 10.8 24 7.8C22.8 9.3 21.4 9.9 19.8 9.3C18.9 9.1 18.2 8.4 17.5 7.7C16.3 6.4 15 5 12 5ZM6 12.3C3 12.3 1 13.8 0 16.8C1.2 15.3 2.6 14.7 4.2 15.3C5.1 15.5 5.8 16.2 6.5 16.9C7.7 18.2 9 19.6 12 19.6C15 19.6 17 18.1 18 15.1C16.8 16.6 15.4 17.2 13.8 16.6C12.9 16.4 12.2 15.7 11.5 15C10.3 13.7 9 12.3 6 12.3Z" fill="#06B6D4" />
      </svg>
    );
  }

  // Redux Toolkit SVG
  if (normalized.includes('redux')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M16.5 6A4.5 4.5 0 0 0 12 10.5V11A4.5 4.5 0 1 0 16.5 6ZM7.5 6A4.5 4.5 0 1 0 12 10.5V10.5A4.5 4.5 0 0 0 7.5 6ZM12 13.5A4.5 4.5 0 1 0 12 22.5A4.5 4.5 0 0 0 12 13.5Z" fill="#764ABC" />
      </svg>
    );
  }

  // GraphQL SVG
  if (normalized.includes('graphql')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2ZM12 4.31L5.34 8V16L12 19.69L18.66 16V8L12 4.31Z" fill="#E10098" />
      </svg>
    );
  }

  // Node.js Hexagon SVG
  if (normalized.includes('node')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.5V16.5L12 22L22 16.5V7.5L12 2ZM12 4.31L19.5 8.44V15.56L12 19.69L4.5 15.56V8.44L12 4.31Z" fill="#5FA04E" />
      </svg>
    );
  }

  // AWS Cloud SVG
  if (normalized.includes('aws')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2ZM12 9.33L4.47 7L12 3.67L19.53 7L12 9.33ZM2 17L12 22L22 17V14L12 19L2 14V17Z" fill="#FF9900" />
      </svg>
    );
  }

  // Docker Whale SVG
  if (normalized.includes('docker')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M13.98 11.08H11.86V13.2H13.98V11.08ZM10.8 11.08H8.68V13.2H10.8V11.08ZM7.62 11.08H5.5V13.2H7.62V11.08ZM17.16 11.08H15.04V13.2H17.16V11.08ZM20.34 11.08H18.22V13.2H20.34V11.08ZM13.98 7.9H11.86V10.02H13.98V7.9ZM10.8 7.9H8.68V10.02H10.8V7.9ZM17.16 7.9H15.04V10.02H17.16V7.9ZM13.98 4.72H11.86V6.84H13.98V4.72Z" fill="#2496ED" />
      </svg>
    );
  }

  // Kubernetes Helm SVG
  if (normalized.includes('kubernetes')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2.5 7.5V18.5L12 24L21.5 18.5V7.5L12 2ZM12 5.3L18.5 9.05V16.95L12 20.7L5.5 16.95V9.05L12 5.3Z" fill="#326CE5" />
      </svg>
    );
  }

  // Jest Testing SVG
  if (normalized.includes('jest')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 22H22L12 2ZM12 6L18.5 19H5.5L12 6Z" fill="#C21325" />
      </svg>
    );
  }

  // Cypress Testing SVG
  if (normalized.includes('cypress')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#00BF88" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="5" fill="#00BF88" />
      </svg>
    );
  }

  // Default Fallback Vector Icon
  return (
    <svg className={`${className} shrink-0 text-zinc-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
