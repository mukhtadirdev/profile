'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { certifications } from '@/data/certifications';
import { GraduationCap, Award } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="ACADEMICS & CREDENTIALS"
          title="Education & Certifications"
          number="08"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-zinc-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Higher Education</span>
            </div>

            <div className="p-8 bg-[#0f0f12] border border-white/10 rounded-2xl space-y-3 hover:border-white/20 transition-colors">
              <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-zinc-400 font-mono text-xs rounded">
                BACHELOR OF TECHNOLOGY
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Computer Science & Engineering
              </h3>
              <p className="text-sm text-zinc-400 font-medium">
                Maharashtra Institute of Technology, Aurangabad
              </p>
              <p className="text-xs text-zinc-500 font-mono pt-2 border-t border-white/5">
                Core Focus: Data Structures, Algorithms, Software Engineering, Systems Architecture.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Selective Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-zinc-400 uppercase tracking-wider">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Professional Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#0e0e11] border border-white/10 rounded-xl space-y-1 hover:border-white/20 transition-colors"
                >
                  <p className="text-sm font-semibold text-white">{cert.name}</p>
                  {cert.issuer && (
                    <p className="text-[11px] font-mono text-zinc-500">{cert.issuer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
