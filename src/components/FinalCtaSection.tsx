import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-12 md:py-16 bg-[#F4F5F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-900 text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-elevated">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider text-blue-100 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have an Idea? Let&apos;s Turn It Into a Scalable Digital Product.
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
              Tell us what you are planning. Our senior engineering squad will review your requirements, determine the optimal technology stack, estimate budget milestones, and outline a realistic roadmap.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-premium transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 backdrop-blur-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Architecture Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
