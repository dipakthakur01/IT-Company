'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { fallbackFaqs } from '@/lib/mockData';

interface FaqSectionProps {
  preview?: boolean;
}

export default function FaqSection({ preview = false }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(fallbackFaqs[0]?.id || null);
  const [query, setQuery] = useState('');

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  const filtered = preview
    ? fallbackFaqs.slice(0, 3)
    : fallbackFaqs.filter(
        (f) =>
          f.question.toLowerCase().includes(query.toLowerCase()) ||
          f.answer.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <section id="faq" className="py-12 md:py-16 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
            {preview ? 'FREQUENTLY ASKED QUESTIONS' : 'FREQUENTLY ASKED QUESTIONS & KNOWLEDGE'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
            Clear Answers to Common Questions.
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Everything you need to know about our technology stack, development timelines, project delivery, and source code ownership.
          </p>
        </motion.div>

        {/* Search Input (Full view only) */}
        {!preview && (
          <div className="relative mb-8 max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs (timeline, tech stack, code ownership, security...)"
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F8FAFC] border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-2xs"
            />
          </div>
        )}

        {/* Accordions */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-sm text-text-muted">
              No matching answers found. Feel free to contact our technical team directly.
            </div>
          ) : (
            filtered.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-primary-500 bg-white shadow-subtle' : 'border-border bg-[#F8FAFC]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-text-primary">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="shrink-0 text-slate-400"
                    >
                      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary-600' : ''}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-text-secondary leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Home preview bottom link */}
        {preview && (
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Have a specific architectural question? Contact our technical squad</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
