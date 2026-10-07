import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import FounderSection from '@/components/FounderSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import { Shield, Sparkles, Code2, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Zorven Tech IT Solutions',
  description:
    'Learn about Zorven Tech, our mission, vision, core values, why companies choose us, and meet our founder Dipak Thakur. Scalable software engineering with zero fluff.',
  openGraph: {
    title: 'About Zorven Tech | Enterprise IT Solutions & Systems Architecture',
    description:
      'Our mission, vision, architectural rigor, and executive leadership. Building high-performance digital products for ambitious brands.',
    url: 'https://zorventech.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Page Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-text-muted mb-6 font-mono">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <span>Company</span>
            <span>/</span>
            <span className="text-text-primary font-semibold">About Us</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
              <span>OUR STORY & PHILOSOPHY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
              Engineering Better{' '}
              <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Zorven Tech was founded on a simple principle: build software that solves actual operational bottlenecks with zero fluff, uncompromising performance, and complete intellectual property transparency.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-600">100%</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Code & IP Ownership</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">99.9%</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Production SLA Uptime</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">120+</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Systems Delivered</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">&lt;50ms</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Edge Response Target</div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Core Story Narrative & Architectural Foundations */}
        <AboutSection isAboutPage={true} />

        {/* 2. Dedicated Mission, Vision & Core Values */}
        <MissionVisionSection />

        {/* 3. Founder Spotlight (Exclusively Founder Dipak Thakur — No whole team squad grid) */}
        <FounderSection />

        {/* 4. Why Choose Us (8 Practical Reasons & Architectural Rigor) */}
        <WhyChooseUsSection preview={false} />

        {/* 5. Final Call To Action */}
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
