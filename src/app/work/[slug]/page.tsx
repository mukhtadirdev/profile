import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectMockup } from '@/components/ProjectMockup';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found — Mukhtadir Shaikh'
    };
  }

  return {
    title: `${project.title} Case Study — Mukhtadir Shaikh`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header Header */}
        <div className="space-y-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl md:text-2xl font-bold text-emerald-400">
              PROJECT {project.number}
            </span>
            <span className="h-4 w-[1px] bg-white/10" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-4xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5 font-mono text-xs">
            <div>
              <p className="text-zinc-500 uppercase">Industry</p>
              <p className="text-white font-semibold mt-1">{project.industry}</p>
            </div>
            <div>
              <p className="text-zinc-500 uppercase">Role</p>
              <p className="text-white font-semibold mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-zinc-500 uppercase">Architecture</p>
              <p className="text-white font-semibold mt-1">Modular / Microfrontends</p>
            </div>
            <div>
              <p className="text-zinc-500 uppercase">Status</p>
              <p className="text-emerald-400 font-semibold mt-1">Production Deployed</p>
            </div>
          </div>
        </div>

        {/* Visual Render Container */}
        <div className="my-12">
          <ProjectMockup type={project.visualType} title={project.title} />
        </div>

        {/* Verified Metrics Strip */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 bg-[#0e0e11] border border-white/10 rounded-2xl mb-16">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-xs font-mono text-zinc-500 uppercase">{m.label}</p>
                <p className="text-3xl font-extrabold font-mono text-white">{m.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-base md:text-lg text-zinc-300">
          {/* Left Column (8 cols): Overview, Challenge, Contributions, Considerations */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Project Overview
              </h2>
              <p className="leading-relaxed text-zinc-300 font-normal">{project.overview}</p>
            </section>

            {/* Technical Challenge */}
            <section className="space-y-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-sky-400" />
                Technical Challenge
              </h2>
              <p className="leading-relaxed text-zinc-400 text-sm md:text-base">{project.challenge}</p>
            </section>

            {/* Key Contributions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">Key Contributions & Engineering</h2>
              <ul className="space-y-3">
                {project.contribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Engineering Considerations */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">Architecture & Engineering Considerations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.engineeringConsiderations.map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#0e0e11] border border-white/10 rounded-xl space-y-1">
                    <p className="text-xs font-mono text-zinc-400 uppercase">Consideration 0{idx + 1}</p>
                    <p className="text-sm font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Verified Outcomes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Verified Outcomes & Value
              </h2>
              <ul className="space-y-2">
                {project.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm md:text-base text-zinc-300 font-mono">
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column (4 cols): Tech Stack Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#0e0e11] border border-white/10 rounded-2xl sticky top-28 space-y-6">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-white/10">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg text-xs font-mono text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs text-zinc-400 font-mono">
                  All enterprise case study details reflect production engineering responsibilities.
                </p>
                <a
                  href="mailto:mukhtadir.shaikh2025@gmail.com?subject=Inquiry%20regarding%20"
                  className="block w-full py-3 text-center bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  Discuss similar technical architecture →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Project Navigation */}
        <div className="mt-20 pt-12 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/#work"
            className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
          >
            ← All Selected Work
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors group"
          >
            <div className="text-right">
              <p className="text-[10px] font-mono text-zinc-500 uppercase">Next Case Study</p>
              <p className="text-base font-bold">{nextProject.title}</p>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
