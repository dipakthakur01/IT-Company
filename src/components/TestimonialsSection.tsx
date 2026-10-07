'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, User } from 'lucide-react';
import { fallbackTestimonials } from '@/lib/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fallbackTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? fallbackTestimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === fallbackTestimonials.length - 1 ? 0 : c + 1));
  };

  const item = fallbackTestimonials[currentIndex];

  return (
    <section
      className="py-20 md:py-28 bg-white border-b border-border overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED CLIENT PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Trusted by Technical Leaders and Growing Enterprises.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Read authentic feedback from executives who have partnered with Zorven Tech for mission-critical software.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Pagination dots */}
            <div className="flex items-center gap-1.5 mr-2">
              {fallbackTestimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-6 bg-primary-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-subtle hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all shadow-subtle hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Featured Testimonial Card with Animated Slide */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            {item && (
              <motion.div
                key={item.id || currentIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-12 relative overflow-hidden shadow-elevated"
              >
                <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-200/60 pointer-events-none -z-0" />

                <div className="relative z-10 max-w-4xl space-y-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <span className="ml-2 text-xs font-mono font-bold text-slate-600">5.0 Verified Review</span>
                  </div>

                  {/* Feedback Text - Italic Georgia Pro font */}
                  <blockquote
                    className="text-xl sm:text-2xl italic font-normal text-text-primary leading-relaxed font-georgia"
                    style={{ fontFamily: '"Georgia Pro", Georgia, Cambria, "Times New Roman", serif' }}
                  >
                    &ldquo;{item.feedback}&rdquo;
                  </blockquote>

                  {/* Author & Project info - Icon instead of reviewer image */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-600 to-accent-cyan text-white flex items-center justify-center shadow-md shadow-primary-500/20 flex-shrink-0">
                      <User className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-text-primary">{item.client_name}</div>
                      <div className="text-xs text-text-secondary">
                        {item.position} • <strong>{item.company}</strong>
                      </div>
                      <div className="text-[11px] font-mono text-primary-600 mt-0.5">
                        Delivered Platform: {item.project_name}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
