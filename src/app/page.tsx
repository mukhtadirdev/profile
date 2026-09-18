import React from 'react';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Projects } from '@/components/Projects';
import { CaseStudy } from '@/components/CaseStudy';
import { About } from '@/components/About';
import { Impact } from '@/components/Impact';
import { Experience } from '@/components/Experience';
import { Expertise } from '@/components/Expertise';
import { TechStack } from '@/components/TechStack';
import { Philosophy } from '@/components/Philosophy';
import { EducationCertifications } from '@/components/EducationCertifications';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <CaseStudy />
      <About />
      <Impact />
      <Experience />
      <Expertise />
      <TechStack />
      <Philosophy />
      <EducationCertifications />
      <Contact />
    </>
  );
}
