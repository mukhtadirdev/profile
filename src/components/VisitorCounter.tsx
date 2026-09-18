'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const STORAGE_KEY = 'mukhtadir_portfolio_views_count';
    const BASELINE_VIEWS = 1420;

    const saved = localStorage.getItem(STORAGE_KEY);
    let currentCount = saved ? parseInt(saved, 10) : BASELINE_VIEWS;

    // Increment count on new session/visit
    if (!sessionStorage.getItem('mukhtadir_session_counted')) {
      currentCount += 1;
      localStorage.setItem(STORAGE_KEY, currentCount.toString());
      sessionStorage.setItem('mukhtadir_session_counted', 'true');
    }

    setViews(currentCount);
  }, []);

  if (views === null) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-xs font-mono text-zinc-300 select-none">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
      </div>
      <Eye className="w-3.5 h-3.5 text-zinc-400" />
      <span className="text-zinc-400 font-medium">Views:</span>
      <span className="text-white font-bold">{views.toLocaleString()}+</span>
    </div>
  );
};
