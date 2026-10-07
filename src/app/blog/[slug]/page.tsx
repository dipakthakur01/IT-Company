'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCtaSection from '@/components/FinalCtaSection';
import { ChevronRight, Clock, User, Calendar, Share2, ArrowLeft } from 'lucide-react';
import { fallbackBlogs } from '@/lib/mockData';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = fallbackBlogs.find((b) => b.slug === slug) || fallbackBlogs[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-primary font-bold truncate max-w-xs">{blog.title}</span>
          </div>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-mono font-bold uppercase">
              {blog.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 text-xs font-mono text-text-muted pt-2 border-b border-border pb-6">
              <span className="flex items-center gap-1.5 font-bold text-text-primary">
                <User className="w-4 h-4 text-primary-600" />
                {blog.author_name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {blog.reading_time}
              </span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-3xl overflow-hidden border border-border aspect-[16/9] shadow-elevated bg-slate-900">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed space-y-6 pt-4 text-base">
            <p className="text-lg font-medium text-text-primary leading-relaxed">
              {blog.excerpt}
            </p>

            <div className="whitespace-pre-line text-sm sm:text-base leading-loose">
              {blog.content}
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-text-muted">Tagged in:</span>
              {blog.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono text-slate-700">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Technical Articles</span>
            </Link>
          </div>
        </article>

        <div className="pt-16">
          <FinalCtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
