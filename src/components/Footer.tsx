'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#08080a] border-t border-white/5 text-xs text-zinc-500 font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-zinc-300 font-semibold">© 2026 Mukhtadir Shaikh</p>
          <p className="text-[11px] text-zinc-500 mt-0.5">Senior Frontend Engineer & React Architect</p>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <a
            href="https://linkedin.com/in/mukhtadirshaikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mukhtadirdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:mukhtadir.shaikh2025@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-right">
          <p className="text-zinc-400">Built with Next.js, TypeScript & curiosity.</p>
        </div>
      </div>
    </footer>
  );
};
