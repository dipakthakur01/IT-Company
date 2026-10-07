'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Search,
  ChevronDown,
  ArrowRight,
  Code2,
  ShoppingBag,
  Cpu,
  Palette,
  Cloud,
  Sparkles,
  Shield,
  Layers,
  User,
  Lock,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

const SERVICES = [
  { name: 'Web Applications', href: '/services/web-application-development', icon: Code2, desc: 'Next.js & React enterprise apps' },
  { name: 'E-Commerce Platforms', href: '/services/ecommerce-platforms', icon: ShoppingBag, desc: 'High-conversion stores' },
  { name: 'Custom Software & ERP', href: '/services/custom-software-development', icon: Cpu, desc: 'Tailored enterprise workflows' },
  { name: 'UI/UX Design Systems', href: '/services/ui-ux-design-systems', icon: Palette, desc: 'Design systems & prototyping' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops-deployment', icon: Cloud, desc: 'Docker, CI/CD & AWS scaling' },
  { name: 'AI & Automation', href: '/services/ai-integration-intelligent-tools', icon: Sparkles, desc: 'LLM agents & intelligent workflows' }
];

const SOLUTIONS = [
  { name: 'Fintech & Banking', href: '/solutions#fintech', desc: 'Secure payment engines & KYC' },
  { name: 'Healthcare & HIPAA', href: '/solutions#healthcare', desc: 'Compliant clinical portals' },
  { name: 'Real Estate & PropTech', href: '/solutions#realestate', desc: 'MLS sync & listing engines' },
  { name: 'Logistics & Supply Chain', href: '/solutions#logistics', desc: 'Real-time telemetry & dispatch' }
];

export default function MobileSidebar({ isOpen, onClose, onOpenSearch }: MobileSidebarProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true" role="dialog">
          {/* Dimmed Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Right Slide-out Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-[88vw] max-w-[380px] bg-white flex flex-col shadow-2xl border-l border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-slate-50/70">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/logo-mark.png"
                    alt="Zorven Tech"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-base tracking-tight text-text-primary leading-tight font-display">
                    ZORVEN <span className="text-primary-600">TECH</span>
                  </span>
                  <span className="text-[10px] tracking-[0.2em] font-bold text-text-muted uppercase">
                    IT Solutions
                  </span>
                </div>
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search Bar */}
            <div className="px-5 pt-3 pb-2">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenSearch) onOpenSearch();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-100 text-text-muted text-xs font-medium border border-border/80 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-primary-500" />
                  <span>Search services, stack...</span>
                </span>
                <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-border font-mono">⌘K</span>
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-5 py-2 space-y-1">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Home</span>
              </Link>

              {/* Expandable Services */}
              <div>
                <button
                  id="mobile-services-toggle"
                  type="button"
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  aria-expanded={servicesExpanded}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
                      servicesExpanded ? 'rotate-180 text-primary-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesExpanded && (
                    <motion.div
                      id="mobile-services-panel"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-3 pr-1 py-1 space-y-1 border-l-2 border-primary-100 ml-3 my-1"
                    >
                      {SERVICES.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          onClick={onClose}
                          className="flex items-start gap-2.5 p-2 rounded-lg text-xs hover:bg-primary-50/50 transition-colors"
                        >
                          <s.icon className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                          <div>
                            <div className="font-semibold text-text-primary">{s.name}</div>
                            <div className="text-[11px] text-text-muted">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={onClose}
                        className="block p-2 text-xs font-bold text-primary-600 hover:underline"
                      >
                        View All Services &rarr;
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Expandable Solutions */}
              <div>
                <button
                  id="mobile-solutions-toggle"
                  type="button"
                  onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                  aria-expanded={solutionsExpanded}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
                      solutionsExpanded ? 'rotate-180 text-primary-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {solutionsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-3 pr-1 py-1 space-y-1 border-l-2 border-accent-cyan/40 ml-3 my-1"
                    >
                      {SOLUTIONS.map((sol) => (
                        <Link
                          key={sol.name}
                          href={sol.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg text-xs hover:bg-cyan-50/50 transition-colors"
                        >
                          <div className="font-semibold text-text-primary">{sol.name}</div>
                          <div className="text-[11px] text-text-muted">{sol.desc}</div>
                        </Link>
                      ))}
                      <Link
                        href="/solutions"
                        onClick={onClose}
                        className="block p-2 text-xs font-bold text-primary-600 hover:underline"
                      >
                        Explore All Solutions &rarr;
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/technologies"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Technologies</span>
              </Link>

              <Link
                href="/portfolio"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Portfolio & Case Studies</span>
              </Link>

              <Link
                href="/process"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Our 8-Step Process</span>
              </Link>

              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>About Us</span>
              </Link>

              <Link
                href="/team"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Our Team</span>
              </Link>

              <Link
                href="/careers"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Careers</span>
                <span className="text-[10px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">
                  HIRING
                </span>
              </Link>

              <Link
                href="/blog"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Insights & Blog</span>
              </Link>

              <Link
                href="/case-studies"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Case Studies</span>
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-slate-50 hover:text-primary-600 transition-colors"
              >
                <span>Contact Us</span>
              </Link>

              {/* Client Portal Access */}
              <div className="pt-3 pb-1 border-t border-border mt-3">
                <Link
                  href="/client/login"
                  onClick={onClose}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100/90 text-xs font-semibold text-text-primary hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary-600" />
                    <span>Client Portal</span>
                  </div>
                  <span className="text-[10px] text-text-muted font-medium">Enterprise Login &rarr;</span>
                </Link>
              </div>

              {/* Quick Legal Below Menus */}
              <div className="pt-2 pb-4 flex items-center justify-center gap-4 text-[11px] text-text-muted">
                <Link href="/privacy-policy" onClick={onClose} className="hover:text-primary-600">Privacy</Link>
                <span>&bull;</span>
                <Link href="/terms" onClick={onClose} className="hover:text-primary-600">Terms</Link>
                <span>&bull;</span>
                <Link href="/contact" onClick={onClose} className="hover:text-primary-600">Security</Link>
              </div>
            </div>

            {/* Sidebar Bottom CTA & Status */}
            <div className="p-5 border-t border-border bg-slate-50/70 space-y-3">
              <Link
                href="/get-quote"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold text-sm shadow-glow transition-all active:scale-[0.99]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-[11px] text-text-secondary pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>99.9% SLA Operational</span>
                </span>
                <a
                  href="mailto:hello@zorventech.com"
                  className="text-primary-600 hover:underline font-mono"
                >
                  hello@zorventech.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
