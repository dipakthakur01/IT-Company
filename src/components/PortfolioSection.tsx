'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { fallbackProjects } from '@/lib/mockData';

const CATEGORIES = ['All', 'Web Applications', 'E-Commerce', 'Custom Software'];

interface PortfolioSectionProps {
  preview?: boolean;
}

export default function PortfolioSection({ preview = false }: PortfolioSectionProps) {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = preview
    ? fallbackProjects.slice(0, 2)
    : activeTab === 'All'
    ? fallbackProjects
    : fallbackProjects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {preview ? 'FEATURED CLIENT WORK' : 'CLIENT WORK & PORTFOLIO'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Proven Digital Systems Delivered in Production.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              {preview
                ? 'Spotlight on recent premier production deployments. Visit our full portfolio to review our complete work across fintech, healthtech, and proptech.'
                : 'Inspect our recent projects spanning fintech analytics, luxury e-commerce marketplaces, HIPAA telemedicine, and real estate ERPs.'}
            </p>
          </div>

          {/* Action button if preview, Filter Pills if full */}
          {preview ? (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-subtle transition-all whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === cat
                      ? 'bg-slate-900 text-white shadow-subtle'
                      : 'bg-[#F4F5F7] text-text-secondary hover:text-text-primary hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Project Cards Grid with Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-3xl bg-[#F8FAFC] border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-shadow flex flex-col"
              >
                {/* Cover Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={proj.cover_image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-medium border border-white/20">
                      {proj.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary-500/90 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-primary-600 uppercase tracking-wider">
                      {proj.client_name}
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {proj.short_summary}
                    </p>
                  </div>

                  {/* Tech Pills & Actions */}
                  <div className="space-y-4 pt-4 border-t border-slate-200/80">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href={`/portfolio/${proj.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-text-primary hover:text-primary-600 transition-colors"
                      >
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {proj.live_url && (
                        <a
                          href={proj.live_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-text-primary transition-colors"
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Home Preview Bottom Banner */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-[#F8FAFC] border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Explore More Deployments Across Healthcare, PropTech & Multi-Vendor E-Commerce
              </h4>
              <p className="text-xs text-text-secondary">
                View verified system architectures, measurable performance results, and technical case study deep dives.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0 shadow-subtle"
            >
              <span>Explore All Projects & Demos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
