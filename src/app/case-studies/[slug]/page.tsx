'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCtaSection from '@/components/FinalCtaSection';
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { fallbackCaseStudies } from '@/lib/mockData';

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const study = fallbackCaseStudies.find((cs) => cs.slug === slug) || fallbackCaseStudies[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/case-studies" className="hover:text-primary-600">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-primary font-bold">{study.title}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0B0F19] text-white relative overflow-hidden shadow-elevated">
            <div className="relative z-10 max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950 border border-primary-800 text-primary-400 text-xs font-mono font-bold uppercase">
                {study.industry} • Duration: {study.duration}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {study.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Client Organization: <strong>{study.client}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Challenge, Solution, Architecture Deep Dive */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-border shadow-subtle space-y-4">
              <div className="text-xs uppercase font-mono text-rose-500 font-bold">1. The Operational Challenge</div>
              <p className="text-sm text-text-secondary leading-relaxed">{study.challenge}</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-border shadow-subtle space-y-4">
              <div className="text-xs uppercase font-mono text-emerald-600 font-bold">2. The Technical Solution</div>
              <p className="text-sm text-text-secondary leading-relaxed">{study.solution}</p>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-4">
            <h3 className="text-xl font-bold">Architecture & Infrastructure Blueprint</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-mono">
              {study.architecture_overview}
            </p>
          </div>

          {/* Features Developed */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary">Key Engineering Features Delivered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.features_developed.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-text-primary">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Results Metrics */}
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-border space-y-6">
            <h3 className="text-xl font-bold text-text-primary text-center">Measured Production Impact</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {study.verified_results.map((res, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border text-center space-y-1 shadow-subtle">
                  <div className="text-3xl font-extrabold text-primary-600">{res.value}</div>
                  <div className="text-xs font-mono uppercase text-text-muted">{res.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
