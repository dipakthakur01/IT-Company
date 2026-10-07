'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { fallbackProjects } from '@/lib/mockData';

const CATEGORIES = ['All', 'Web Application', 'E-Commerce', 'Custom Software'];

export default function CinematicPortfolioSlider() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? fallbackProjects
      : fallbackProjects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="portfolio-slider" className="py-20 md:py-28 bg-white border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN CLIENT DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Production Work That Drives Real Business ROI.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Slide through our recent production applications. Built for enterprise uptime, compliance, and multi-million dollar transaction volumes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Sliding Arrows Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Project"
                className="w-12 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-subtle hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Project"
                className="w-12 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-subtle hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-subtle transition-all whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>View All 12+ Works</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-premium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sliding Cards Carousel Track */}
        <div ref={sliderRef} className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-elevated">
            {filteredProjects[currentIndex] && (
              <>
                {/* Left Column: Visual Showcase & Mockup */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-slate-950 group">
                    <Image
                      src={filteredProjects[currentIndex].cover_image}
                      alt={filteredProjects[currentIndex].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                    {/* Top Floating Industry Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20">
                        {filteredProjects[currentIndex].industry}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary-600/90 backdrop-blur-md text-white text-xs font-mono font-bold">
                        {filteredProjects[currentIndex].year}
                      </span>
                    </div>

                    {/* Bottom Outcome Tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-mono text-cyan-300 font-bold bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 backdrop-blur-sm">
                        Client: {filteredProjects[currentIndex].client_name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 backdrop-blur-sm">
                        Verified Production Launch
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Case Narrative & Specifications */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted pb-2 border-b border-slate-200">
                    <span>
                      PROJECT <span className="font-bold text-slate-900">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(filteredProjects.length).padStart(2, '0')}
                    </span>
                    <span className="text-primary-600 font-semibold">{filteredProjects[currentIndex].category}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary leading-tight">
                      {filteredProjects[currentIndex].title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {filteredProjects[currentIndex].short_summary}
                    </p>
                  </div>

                  {/* Outcome Metric Box */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 font-mono">
                      <TrendingUp className="w-4 h-4" />
                      <span>MEASURABLE BUSINESS IMPACT</span>
                    </div>
                    <div className="text-xs text-text-secondary">
                      Delivered high-throughput operational capacity with zero data downtime and automated database failover.
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div>
                    <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2 font-bold">
                      ENGINEERING STACK:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {filteredProjects[currentIndex].technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deep Link Action */}
                  <div className="pt-2">
                    <Link
                      href={`/portfolio/${filteredProjects[currentIndex].slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider shadow-premium transition-all hover:scale-105"
                    >
                      <span>Read Full Architecture Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
