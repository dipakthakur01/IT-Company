'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  ShoppingBag,
  Cpu,
  Palette,
  Layers,
  Cloud,
  Sparkles,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { fallbackServices } from '@/lib/mockData';

const ICON_MAP: Record<string, any> = {
  Code2,
  ShoppingBag,
  Cpu,
  Palette,
  Layers,
  Cloud,
  Sparkles,
  ShieldCheck
};

interface ServicesSectionProps {
  preview?: boolean;
}

export default function ServicesSection({ preview = false }: ServicesSectionProps) {
  const displayedServices = preview ? fallbackServices.slice(0, 4) : fallbackServices;

  return (
    <section id="services" className="py-12 md:py-16 bg-[#F4F5F7] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {preview ? 'CORE SERVICES PREVIEW' : 'SERVICES WE DELIVER'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Engineered for Speed, Reliability, and Measurable Growth.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              {preview
                ? 'A curated selection of our core digital engineering services. Visit our full catalog to explore our complete suite of 8+ enterprise solutions.'
                : 'From mission-critical web applications to automated enterprise ERP systems, we combine architectural discipline with modern user experiences.'}
            </p>
          </div>

          {preview && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 8+ Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;
            const isWide = !preview && (index === 0 || index === 3);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl bg-white p-8 border border-border shadow-subtle hover:shadow-elevated transition-shadow flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Top Badge & Delivery Type */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors flex items-center justify-center shadow-subtle">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {service.delivery_type}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.short_description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-slate-600 group-hover:border-slate-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-muted group-hover:text-text-primary transition-colors">
                    Enterprise SLA Included
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:text-primary-700 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Home preview footer banner */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-white border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Looking for Cloud DevOps, AI Integrations, or Proactive SLA Retainers?
              </h4>
              <p className="text-xs text-text-secondary">
                Our full services catalog contains 8+ standardized delivery streams with itemized deliverables and architectural specs.
              </p>
            </div>
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Explore All 8+ Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
