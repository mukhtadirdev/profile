'use me'
'use client';

import React from 'react';
import { Shield, TrendingUp, Search, Lock, ShoppingCart, Zap, BarChart3, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectMockupProps {
  type: 'fintech' | 'banking' | 'postal' | 'ecommerce' | 'insurance';
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, title }) => {
  return (
    <div className="w-full h-full min-h-[260px] md:min-h-[320px] bg-[#0d0d0e] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl relative group">
      {/* Top Browser Bar */}
      <div className="h-9 bg-[#161618] border-b border-white/10 px-4 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="px-3 py-0.5 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span>https://enterprise.{title.toLowerCase().replace(/\s+/g, '')}.com</span>
        </div>
        <div className="flex items-center gap-1 text-zinc-500 text-[10px] font-mono">
          <span>PROD</span>
        </div>
      </div>

      {/* Main Container Render based on project type */}
      <div className="flex-1 p-4 md:p-6 bg-gradient-to-b from-[#0f0f11] to-[#0a0a0c] text-zinc-300 font-sans relative overflow-hidden flex flex-col justify-between">
        {/* Subtle Background Mesh Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        {type === 'fintech' && (
          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-emerald-400">Intuit Enterprise Platform</p>
                <h4 className="text-sm md:text-base font-semibold text-white">Financial Analytics Engine</h4>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 text-xs font-mono">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+36% Speed</span>
              </div>
            </div>

            {/* Visual Charts & Stat Widgets */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <p className="text-[10px] text-zinc-500">Revenue Index</p>
                <p className="text-sm md:text-base font-mono font-bold text-white mt-1">$4.28M</p>
                <div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[78%]" />
                </div>
              </div>
              <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <p className="text-[10px] text-zinc-500">Lighthouse Score</p>
                <p className="text-sm md:text-base font-mono font-bold text-emerald-400 mt-1">95 / 100</p>
                <div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[95%]" />
                </div>
              </div>
              <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <p className="text-[10px] text-zinc-500">React Components</p>
                <p className="text-sm md:text-base font-mono font-bold text-sky-400 mt-1">120+ Shared</p>
                <div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-sky-400 h-full w-[85%]" />
                </div>
              </div>
            </div>

            {/* Sparkline Graphic */}
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-end gap-1.5 h-20 md:h-24 justify-between">
              {[40, 65, 45, 80, 55, 90, 75, 95, 88, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-400 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        )}

        {type === 'banking' && (
          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-sky-400">UBS Wealth Management Portal</p>
                <h4 className="text-sm md:text-base font-semibold text-white">Institutional Data Grid</h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-sky-400 font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>Zero Trust Encrypted</span>
              </div>
            </div>

            <div className="border border-white/5 rounded-lg overflow-hidden text-xs">
              <div className="bg-white/5 px-3 py-2 grid grid-cols-4 font-mono text-[10px] text-zinc-400 uppercase border-b border-white/5">
                <span>Instrument</span>
                <span>Value</span>
                <span>Delta</span>
                <span className="text-right">Status</span>
              </div>
              <div className="divide-y divide-white/5 font-mono text-[11px]">
                <div className="px-3 py-2 grid grid-cols-4 items-center">
                  <span className="text-white font-medium">USD / EUR Swap</span>
                  <span className="text-zinc-300">$14,250,000</span>
                  <span className="text-emerald-400">+1.42%</span>
                  <span className="text-right text-emerald-400 font-sans text-[10px]">VERIFIED</span>
                </div>
                <div className="px-3 py-2 grid grid-cols-4 items-center bg-white/[0.01]">
                  <span className="text-white font-medium">Equities Fund A</span>
                  <span className="text-zinc-300">$8,900,000</span>
                  <span className="text-emerald-400">+0.88%</span>
                  <span className="text-right text-emerald-400 font-sans text-[10px]">VERIFIED</span>
                </div>
                <div className="px-3 py-2 grid grid-cols-4 items-center">
                  <span className="text-white font-medium">Treasury Yield 10Y</span>
                  <span className="text-zinc-300">$22,400,000</span>
                  <span className="text-sky-400">0.00%</span>
                  <span className="text-right text-emerald-400 font-sans text-[10px]">VERIFIED</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>Virtualization: 10,000 Rows</span>
              <span>Accessibility: WCAG 2.2 AA</span>
            </div>
          </div>
        )}

        {type === 'postal' && (
          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-rose-400">Post Office UK Digital Services</p>
                <h4 className="text-sm md:text-base font-semibold text-white">Branch Locator & Service Hub</h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                <Search className="w-3.5 h-3.5" />
                <span>Instant Geo Search</span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                <Search className="w-4 h-4 text-zinc-400" />
                <span className="text-xs text-zinc-400 font-mono">Enter UK postcode e.g. EC1A 1BB...</span>
              </div>
              <button className="px-3 py-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 rounded-lg text-xs font-mono font-medium">
                Locate
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-2.5">
                <div className="p-1.5 bg-rose-500/10 rounded text-rose-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white font-medium">Branch Finder</p>
                  <p className="text-[10px] text-zinc-500">Nearest 11,500+ branches</p>
                </div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-2.5">
                <div className="p-1.5 bg-rose-500/10 rounded text-rose-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white font-medium">Postage Calc</p>
                  <p className="text-[10px] text-zinc-500">Realtime rate matrix</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'ecommerce' && (
          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-amber-400">Tirebuyer E-commerce</p>
                <h4 className="text-sm md:text-base font-semibold text-white">Tire Fitment & Checkout Selector</h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Zero CLS Funnel</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-white/[0.02] p-3 border border-white/5 rounded-lg text-xs">
              <div className="p-2 border border-white/5 rounded bg-black/40">
                <p className="text-[9px] text-zinc-500 uppercase font-mono">Year</p>
                <p className="text-white font-medium mt-0.5">2024</p>
              </div>
              <div className="p-2 border border-white/5 rounded bg-black/40">
                <p className="text-[9px] text-zinc-500 uppercase font-mono">Make</p>
                <p className="text-white font-medium mt-0.5">Audi</p>
              </div>
              <div className="p-2 border border-amber-500/30 rounded bg-amber-500/10">
                <p className="text-[9px] text-amber-400 uppercase font-mono">Rim Size</p>
                <p className="text-amber-300 font-medium mt-0.5">19" Performance</p>
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
                  245/45
                </div>
                <div>
                  <p className="text-xs text-white font-medium">All-Season Ultra High Perf</p>
                  <p className="text-[10px] text-emerald-400 font-mono">In Stock · Guaranteed Fitment</p>
                </div>
              </div>
              <p className="text-xs font-mono font-bold text-white">$189.99</p>
            </div>
          </div>
        )}

        {type === 'insurance' && (
          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-purple-400">QBE Insurance Enterprise</p>
                <h4 className="text-sm md:text-base font-semibold text-white">Dynamic Policy Quote Engine</h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-purple-400 font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>Atomic Tokens</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-zinc-300 font-medium">Commercial Risk Rating</span>
                </div>
                <span className="font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 text-[10px]">Tier A+</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-white/[0.02] border border-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-zinc-300 font-medium">Quote Time Acceleration</span>
                </div>
                <span className="font-mono text-emerald-400 text-[11px] font-bold">-40% Latency</span>
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between">
              <span className="text-[11px] text-zinc-400 font-mono">Component Design System</span>
              <span className="text-[11px] font-mono text-purple-400">45+ Reusable Atoms</span>
            </div>
          </div>
        )}

        {/* Bottom Accent Glow Bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};
