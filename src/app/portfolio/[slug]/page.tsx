'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCtaSection from '@/components/FinalCtaSection';
import { ChevronRight, ArrowRight, ExternalLink, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { fallbackProjects, fallbackCaseStudies } from '@/lib/mockData';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = fallbackProjects.find((p) => p.slug === slug) || fallbackProjects[0];
  const caseStudy = fallbackCaseStudies.find((cs) => cs.project_id === project.id || cs.slug === slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/portfolio" className="hover:text-primary-600">Portfolio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-primary font-bold">{project.title}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 font-mono text-xs font-bold uppercase">
                {project.industry} • Delivered in {project.year}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {project.short_summary}
              </p>

              {project.live_url && (
                <div className="pt-2">
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-subtle transition-all"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-border shadow-elevated aspect-[16/10] bg-slate-900">
                <img
                  src={project.cover_image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Details if available */}
        {caseStudy && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
            <div className="rounded-3xl bg-white border border-border p-8 sm:p-12 shadow-subtle space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-border space-y-2">
                  <div className="text-xs uppercase font-mono text-rose-500 font-bold">The Challenge</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-border space-y-2">
                  <div className="text-xs uppercase font-mono text-emerald-600 font-bold">The Solution</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Verified Metrics */}
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-6">Verified Production Results</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {caseStudy.verified_results.map((res, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-1">
                      <div className="text-3xl font-extrabold text-white">{res.value}</div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
