'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

interface VisitorCounterProps {
  compact?: boolean;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ compact = false }) => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const STORAGE_KEY = 'mukhtadir_portfolio_views_count';
    const BASELINE_VIEWS = 1420;

    const saved = localStorage.getItem(STORAGE_KEY);
    let currentCount = saved ? parseInt(saved, 10) : BASELINE_VIEWS;

    // Increment count once per session
    if (!sessionStorage.getItem('mukhtadir_session_counted')) {
      currentCount += 1;
      localStorage.setItem(STORAGE_KEY, currentCount.toString());
      sessionStorage.setItem('mukhtadir_session_counted', 'true');
    }

    setViews(currentCount);
  }, []);

  if (views === null) return null;

  // Format large numbers cleanly
  const formattedCount =
    views >= 1000 ? `${(views / 1000).toFixed(1)}k+` : `${views}+`;

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/10 rounded-full text-xs font-mono text-zinc-300 select-none whitespace-nowrap shrink-0">
      <div className="relative flex h-2 w-2 shrink-0 items-center justify-center">
        <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
      </div>
      <Eye className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
      {!compact && <span className="text-zinc-400 font-medium hidden sm:inline">Views:</span>}
      <span className="text-white font-bold">{compact ? formattedCount : views.toLocaleString() + '+'}</span>
    </div>
  );
};
