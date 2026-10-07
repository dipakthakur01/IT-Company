import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { fallbackBlogs } from '@/lib/mockData';

interface BlogSectionProps {
  preview?: boolean;
}

export default function BlogSection({ preview = false }: BlogSectionProps) {
  const displayedBlogs = preview ? fallbackBlogs.slice(0, 2) : fallbackBlogs;

  return (
    <section id="blog" className="py-12 md:py-16 bg-[#F4F5F7] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {preview ? 'LATEST TECHNICAL NOTES' : 'TECHNICAL INSIGHTS & BLOG'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Engineering Notes & Architectural Deep Dives.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              {preview
                ? 'Practical analysis on Next.js Server Components, MySQL optimization, and cloud scalability.'
                : 'Read practical analysis written by our practicing software architects on Next.js, MySQL optimization, and cloud scalability.'}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedBlogs.map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl bg-white border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-medium border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
                    <span>{post.author_name}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.reading_time}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:text-primary-700 transition-colors"
                >
                  <span>Read Technical Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Home preview bottom banner */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-white border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Looking for In-Depth Database Optimization & Cloud Engineering Guides?
              </h4>
              <p className="text-xs text-text-secondary">
                Our engineering library covers real production case studies, benchmark tests, and architectural best practices.
              </p>
            </div>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Browse Full Article Library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
