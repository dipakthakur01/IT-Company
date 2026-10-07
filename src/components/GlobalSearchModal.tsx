'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Code2, Globe, FileText, HelpCircle } from 'lucide-react';
import { fallbackServices, fallbackTechnologies, fallbackProjects, fallbackBlogs, fallbackFaqs } from '@/lib/mockData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const q = query.trim().toLowerCase();

  const matchedServices = q
    ? fallbackServices.filter(s => s.title.toLowerCase().includes(q) || s.short_description.toLowerCase().includes(q))
    : [];

  const matchedTechnologies = q
    ? fallbackTechnologies.filter(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
    : [];

  const matchedProjects = q
    ? fallbackProjects.filter(p => p.title.toLowerCase().includes(q) || p.short_summary.toLowerCase().includes(q))
    : [];

  const matchedBlogs = q
    ? fallbackBlogs.filter(b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q))
    : [];

  const matchedFaqs = q
    ? fallbackFaqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
    : [];

  const totalResults =
    matchedServices.length +
    matchedTechnologies.length +
    matchedProjects.length +
    matchedBlogs.length +
    matchedFaqs.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="search-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/60 backdrop-blur-sm"
        >
          <motion.div
            key="search-modal"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl rounded-3xl bg-white border border-border shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
          >
        {/* Search Input Bar */}
        <div className="relative border-b border-border p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-primary-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, technologies, projects, blogs, FAQs..."
            className="w-full text-base text-text-primary placeholder-text-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1 text-xs">
          {!q ? (
            <div className="text-center py-10 space-y-2 text-text-muted">
              <p className="font-semibold text-text-secondary">Type anything to explore our IT services and tech stack.</p>
              <p className="text-[11px]">Popular searches: Next.js, MySQL, E-Commerce, Cloud Architecture, Case Studies</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-text-muted">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <>
              {/* Matched Services */}
              {matchedServices.length > 0 && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-text-muted tracking-wider">Services</div>
                  {matchedServices.map(s => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Code2 className="w-4 h-4 text-primary-600" />
                        <div>
                          <div className="font-semibold text-text-primary text-xs group-hover:text-primary-600">{s.title}</div>
                          <div className="text-[11px] text-text-muted">{s.delivery_type}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Matched Technologies */}
              {matchedTechnologies.length > 0 && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-text-muted tracking-wider">Technologies</div>
                  {matchedTechnologies.map(t => (
                    <Link
                      key={t.id}
                      href="/technologies"
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        <div>
                          <div className="font-semibold text-text-primary text-xs group-hover:text-primary-600">{t.name}</div>
                          <div className="text-[11px] text-text-muted">{t.description}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-primary-600">{t.proficiency}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Matched Projects */}
              {matchedProjects.length > 0 && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-text-muted tracking-wider">Projects & Case Studies</div>
                  {matchedProjects.map(p => (
                    <Link
                      key={p.id}
                      href={`/portfolio/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div>
                        <div className="font-semibold text-text-primary text-xs group-hover:text-primary-600">{p.title}</div>
                        <div className="text-[11px] text-text-muted">{p.industry} • {p.year}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Matched Blogs */}
              {matchedBlogs.length > 0 && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-text-muted tracking-wider">Articles & Insights</div>
                  {matchedBlogs.map(b => (
                    <Link
                      key={b.id}
                      href={`/blog/${b.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-border transition-colors group"
                    >
                      <div>
                        <div className="font-semibold text-text-primary text-xs group-hover:text-primary-600">{b.title}</div>
                        <div className="text-[11px] text-text-muted">{b.reading_time} • {b.category}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Matched FAQs */}
              {matchedFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase font-bold text-text-muted tracking-wider">Frequently Asked Questions</div>
                  {matchedFaqs.map(f => (
                    <div key={f.id} className="p-3 rounded-xl bg-slate-50 border border-border">
                      <div className="font-semibold text-text-primary text-xs">{f.question}</div>
                      <div className="text-[11px] text-text-secondary mt-1">{f.answer}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-border flex items-center justify-between text-[11px] text-text-muted">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px]">ESC</kbd> to close</span>
          <span>Instant Indexed Search</span>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
}
