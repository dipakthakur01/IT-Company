'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

const ThreeHeroCanvas = dynamic(() => import('@/components/ThreeHeroCanvas'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 md:pt-24 md:pb-16 overflow-hidden bg-tech-grid">
      {/* Background glow flares - lightweight ambient depth */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition - Moved Up */}
          <div className="lg:col-span-7 space-y-5 text-left -translate-y-2 lg:-translate-y-6">
            {/* Tech Badge Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-subtle text-[11px] sm:text-xs font-semibold text-text-primary max-w-full">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping shrink-0" />
              <span className="truncate">Modern Software, Web Development & IT Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.14]">
              We Build Digital Products That{' '}
              <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Move Businesses Forward.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
              We design and develop fast, scalable, secure, and modern websites, enterprise web applications, and digital platforms using the optimal technology stack for each business requirement.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base shadow-elevated transition-all hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-text-primary font-semibold text-base border border-border shadow-subtle transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Tech Pills */}
            <div className="pt-3.5 border-t border-slate-200/80">
              <div className="text-xs uppercase tracking-wider font-semibold text-text-muted mb-2.5">
                Core Engineering Stacks
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {['Next.js', 'React', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'Docker', 'AWS Cloud', 'OpenAI'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-xs font-mono font-medium text-text-secondary hover:border-primary-400 hover:text-primary-600 transition-colors shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Trust Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-3">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">120+</div>
                <div className="text-xs text-text-secondary font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">24+</div>
                <div className="text-xs text-text-secondary font-medium">Tech Stacks Handled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">8+ Yrs</div>
                <div className="text-xs text-text-secondary font-medium">Engineering Track</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">99.9%</div>
                <div className="text-xs text-text-secondary font-medium">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive WebGL Tech Sphere - Aligned & Elevated */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[500px] lg:min-h-[620px] xl:min-h-[680px] overflow-visible -translate-y-2 lg:-translate-y-6">
            {/* Ambient Radial Backlight Glow */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-primary-500/25 via-cyan-400/20 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* 3D WebGL Canvas - Generously sized, completely free, unboxed */}
            <div className="relative w-full sm:w-[580px] md:w-[660px] lg:w-[720px] xl:w-[780px] h-[500px] lg:h-[620px] xl:h-[680px] lg:-mr-12 xl:-mr-24 flex items-center justify-center overflow-visible pointer-events-auto">
              <ThreeHeroCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
