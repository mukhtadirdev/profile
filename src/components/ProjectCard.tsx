'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { ProjectMockup } from './ProjectMockup';
import { TechLogo } from './TechLogos';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block relative bg-[#0e0e10]/80 hover:bg-[#131316] border border-white/10 hover:border-white/25 rounded-2xl p-6 lg:p-8 transition-all duration-300 shadow-xl overflow-hidden interactive-hover"
    >
      {/* Background Hover Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Project Metadata & Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl lg:text-3xl font-bold text-zinc-500 group-hover:text-white transition-colors">
                {project.number}
              </span>
              <span className="h-4 w-[1px] bg-white/10" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                {project.category}
              </span>
            </div>

            {/* Interactive Diagonal Arrow */}
            <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white text-zinc-400 group-hover:text-black flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Role: <span className="text-zinc-200">{project.role}</span>
            </p>
          </div>

          <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Technology Badges with SVG Logos */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-xs font-mono text-zinc-300 group-hover:border-white/20 transition-colors"
              >
                <TechLogo name={tech} className="w-3.5 h-3.5 shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Verified Metrics Snippet */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <p className="text-[10px] uppercase font-mono text-zinc-500">{m.label}</p>
                  <p className="text-sm font-mono font-bold text-white mt-0.5">{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Visual Mockup (5 cols) */}
        <div className="lg:col-span-5 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          <ProjectMockup type={project.visualType} title={project.title} />
        </div>
      </div>
    </Link>
  );
};
