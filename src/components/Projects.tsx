'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="PORTFOLIO HIGHLIGHTS"
          title="Selected Work"
          subtitle="Enterprise products, platforms and frontend systems I've helped build."
          number="01"
        />

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
