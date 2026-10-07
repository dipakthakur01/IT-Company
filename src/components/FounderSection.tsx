'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github, Mail, ArrowRight, Shield, Zap, Terminal, CheckCircle2, Award } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            <span>EXECUTIVE LEADERSHIP & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
            Founded by an Engineer, Built for Scale.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Leading with hands-on systems architecture, not sales jargon or agency layers.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="rounded-3xl bg-tech-grid border border-border shadow-elevated overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Portrait Image & Quick Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
                <Image
                  src="/founder.jpg"
                  alt="Dipak Thakur - Founder, CEO & Chief Systems Architect"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Subtle dark gradient overlay at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-bold text-base sm:text-lg">Dipak Thakur</div>
                  <div className="text-xs text-blue-200 font-mono">Founder, CEO & Chief Systems Architect</div>
                </div>
              </div>

              {/* Status Pill below photo */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Active Squad Lead • Available for Architecture Discovery Calls</span>
              </div>
            </div>

            {/* Right: Founder Philosophy, Story & Credentials */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <div className="text-xs uppercase font-mono tracking-widest text-primary-600 font-bold mb-1">
                  MEET THE FOUNDER
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight">
                  Dipak Thakur
                </h3>
                <div className="text-sm sm:text-base font-semibold text-text-secondary mt-0.5">
                  Founder, CEO & Chief Systems Architect
                </div>
              </div>

              {/* Editorial Vision Quote */}
              <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle relative border-l-4 border-l-primary-500">
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed italic">
                  &ldquo;I started Zorven Tech because too many agencies deliver brittle prototypes, hand off unmaintainable spaghetti code, and vanish when traffic spikes. We build with strict systems discipline—software architected to run fast, securely, and predictably for the next 5 years of your business growth.&rdquo;
                </p>
              </div>

              {/* Founder Background Story */}
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Before founding Zorven Tech, Dipak led distributed backend engineering and high-availability cloud migrations for high-growth SaaS platforms and fintech applications. Today, he personally oversees architectural blueprints, database normalization, and security audits for all flagship client engagements.
              </p>

              {/* 3 Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-xs text-text-primary mb-1">
                    <Shield className="w-4 h-4 text-primary-600 shrink-0" />
                    <span>Zero Junior Handoff</span>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    Direct oversight on critical APIs, business logic, and database schemas.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-border shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-xs text-text-primary mb-1">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Sub-50ms Standard</span>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    Obsessive performance tuning for sub-second TTFB and 100/100 Core Web Vitals.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-border shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-xs text-text-primary mb-1">
                    <Terminal className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Clean Source Code</span>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    Strict TypeScript, 100% test coverage, and complete documentation on delivery.
                  </p>
                </div>
              </div>

              {/* Socials & Connect Buttons */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-border text-text-secondary hover:text-primary-600 font-medium text-xs shadow-2xs transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href="https://github.com/dipakthakur01"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-border text-text-secondary hover:text-text-primary font-medium text-xs shadow-2xs transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repos</span>
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs shadow-premium transition-all hover:scale-105"
                >
                  <span>Book Architecture Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
