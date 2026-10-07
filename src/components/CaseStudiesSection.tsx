'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { fallbackCaseStudies } from '@/lib/mockData';

export default function CaseStudiesSection() {
  const featured = fallbackCaseStudies[0];
  if (!featured) return null;

  return (
    <section className="py-12 md:py-16 bg-[#0B0F19] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/80 px-3 py-1 rounded-full border border-primary-800">
              FEATURED CASE STUDY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {featured.title}
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>Client: <strong className="text-white">{featured.client}</strong></span>
              <span>•</span>
              <span>Industry: <strong className="text-white">{featured.industry}</strong></span>
              <span>•</span>
              <span>Timeline: <strong className="text-white">{featured.duration}</strong></span>
            </div>
          </div>

          <Link
            href={`/case-studies/${featured.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm shadow-glow transition-all"
          >
            <span>Read Full Technical Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 md:mb-10">
          {/* Challenge & Solution Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="text-xs uppercase tracking-wider font-mono text-rose-400 font-bold">
                The Architectural Challenge
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featured.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="text-xs uppercase tracking-wider font-mono text-emerald-400 font-bold">
                Our Engineering Solution
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featured.solution}
              </p>
            </div>
          </div>

          {/* Right column: Results metrics counters */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {featured.verified_results.map((res, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-center space-y-2 hover:border-primary-500 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {res.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-primary-950 via-slate-900 to-slate-900 border border-primary-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white">Have a Similar Complex Project?</h4>
            <p className="text-xs text-slate-400">Our engineering architects can assess your current system bottlenecks.</p>
          </div>
          <Link
            href="/get-quote"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs shadow-subtle transition-all whitespace-nowrap"
          >
            Let&apos;s Build It Together &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
