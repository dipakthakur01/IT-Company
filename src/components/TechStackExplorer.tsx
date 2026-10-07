'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Globe, Server, Database, Cloud, Sparkles, Box, CheckCircle2, ArrowRight } from 'lucide-react';
import { fallbackTechnologies } from '@/lib/mockData';

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'database', label: 'Database & Cache' },
  { id: 'cloud', label: 'Cloud & Infrastructure' },
  { id: 'devops', label: 'DevOps & Containers' },
  { id: 'ai', label: 'AI & Automation' }
];

interface TechStackExplorerProps {
  preview?: boolean;
}

export default function TechStackExplorer({ preview = false }: TechStackExplorerProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = preview
    ? fallbackTechnologies.slice(0, 6)
    : activeCategory === 'all'
    ? fallbackTechnologies
    : fallbackTechnologies.filter(t => t.category === activeCategory);

  return (
    <section id="technologies" className="py-12 md:py-16 bg-[#F4F5F7] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6"
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {preview ? 'CORE TECH FOUNDATION' : 'TECHNOLOGY ECOSYSTEM'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Curated Stacks for Enterprise Performance.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {preview
                ? 'Standardized on Next.js, Node.js, and MySQL for bulletproof reliability. Explore our complete ecosystem across AI, cloud, and databases.'
                : 'Technology selection depends on scalability, budget, security, and integration requirements. We never force one tool onto every project.'}
            </p>
          </div>

          {preview && (
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 12+ Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        {/* Filter Tabs (Full view only) */}
        {!preview && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white shadow-subtle'
                    : 'bg-white text-text-secondary hover:text-text-primary hover:bg-slate-50 border border-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Technologies Grid with Animated Reordering */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-bold text-text-primary">{item.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-primary-600 font-semibold">
                      {item.proficiency}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-text-muted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Production Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Home Preview Bottom Teaser */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-white border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Need PostgreSQL, Redis In-Memory Caching, or OpenAI AI Integration?
              </h4>
              <p className="text-xs text-text-secondary">
                Visit our dedicated Technologies section to simulate stacks using our Interactive Stack Recommendation Engine.
              </p>
            </div>
            <Link
              href="/technologies"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Explore All Technologies & Wizard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
