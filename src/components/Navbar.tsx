'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Code2,
  ShoppingBag,
  Cpu,
  Palette,
  Cloud,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  ExternalLink,
  Laptop
} from 'lucide-react';
import dynamic from 'next/dynamic';
import MobileSidebar from '@/components/MobileSidebar';

const GlobalSearchModal = dynamic(() => import('@/components/GlobalSearchModal'), { ssr: false });

interface NavbarProps {
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenSearch = () => {
    setSearchModalOpen(true);
    if (onOpenSearch) onOpenSearch();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-subtle border-b border-border py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,98,227,0.35)]">
              <Image
                src="/logo-mark.png"
                alt="Zorven Tech Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-text-primary group-hover:text-primary-600 transition-colors font-display leading-tight">
                ZORVEN <span className="text-primary-600">TECH</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-text-muted -mt-0.5">
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-text-secondary">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                pathname === '/' ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                  pathname.startsWith('/services') ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px]">
                  <div className="bg-white rounded-2xl shadow-elevated border border-border p-4 grid grid-cols-2 gap-2">
                    <Link
                      href="/services/web-application-development"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary text-sm group-hover:text-primary-600">Web Applications</div>
                        <div className="text-xs text-text-muted mt-0.5">Custom Next.js & React enterprise platforms</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/ecommerce-platforms"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary text-sm group-hover:text-emerald-600">E-Commerce</div>
                        <div className="text-xs text-text-muted mt-0.5">High-conversion multi-vendor stores</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/custom-software-development"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary text-sm group-hover:text-violet-600">Custom Software</div>
                        <div className="text-xs text-text-muted mt-0.5">ERP, CRM & business workflow engines</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/ui-ux-design-systems"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        <Palette className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary text-sm group-hover:text-pink-600">UI/UX Systems</div>
                        <div className="text-xs text-text-muted mt-0.5">Research-backed interactive design</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/cloud-devops-deployment"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary text-sm group-hover:text-amber-600">Cloud & DevOps</div>
                        <div className="text-xs text-text-muted mt-0.5">AWS, Docker & CI/CD deployment</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/ai-integration-intelligent-tools"
                      className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary text-sm group-hover:text-cyan-600">AI Integration</div>
                        <div className="text-xs text-text-muted mt-0.5">LLMs, semantic search & automation</div>
                      </div>
                    </Link>

                    <div className="col-span-2 pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                      <span className="text-text-muted">Need a bespoke architecture?</span>
                      <Link href="/services" className="font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                        View All Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                  pathname.startsWith('/solutions') ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[420px]">
                  <div className="bg-white rounded-2xl shadow-elevated border border-border p-4 space-y-2">
                    <Link href="/solutions#saas" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold text-text-primary text-sm">SaaS & Subscription Platforms</div>
                        <div className="text-xs text-text-muted">Multi-tenant software with billing</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </Link>
                    <Link href="/solutions#erp" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold text-text-primary text-sm">Enterprise ERP & Inventory</div>
                        <div className="text-xs text-text-muted">Supply chain & operational controls</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </Link>
                    <Link href="/solutions#portals" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold text-text-primary text-sm">Job Portals & LMS Platforms</div>
                        <div className="text-xs text-text-muted">Interactive recruitment & e-learning</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </Link>
                    <Link href="/solutions#booking" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="font-semibold text-text-primary text-sm">Hotel & Healthcare Booking</div>
                        <div className="text-xs text-text-muted">Real-time scheduling engines</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/technologies"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                pathname === '/technologies' ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Technologies
            </Link>

            <Link
              href="/portfolio"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                pathname.startsWith('/portfolio') || pathname.startsWith('/case-studies') ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Portfolio
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                  pathname.startsWith('/about') || pathname.startsWith('/team') || pathname.startsWith('/process') || pathname.startsWith('/careers')
                    ? 'text-primary-600 font-semibold'
                    : ''
                }`}
              >
                Company
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[220px]">
                  <div className="bg-white rounded-2xl shadow-elevated border border-border p-3 space-y-1">
                    <Link
                      href="/about"
                      className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-text-primary hover:text-primary-600 font-medium transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/team"
                      className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-text-primary hover:text-primary-600 font-medium transition-colors"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/process"
                      className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-text-primary hover:text-primary-600 font-medium transition-colors"
                    >
                      Our Process
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-text-primary hover:text-primary-600 font-medium transition-colors"
                    >
                      <span>Careers</span>
                      <span className="text-[10px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">
                        HIRING
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                pathname.startsWith('/blog') ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-primary-600 ${
                pathname === '/contact' ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={handleOpenSearch}
              className="p-2 text-text-secondary hover:text-primary-600 hover:bg-slate-100 rounded-xl transition-colors"
              title="Search website (Cmd+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Primary Get Quote CTA */}
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm shadow-premium transition-all hover:shadow-glow hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={handleOpenSearch}
              aria-label="Search"
              className="p-2 text-text-secondary hover:text-text-primary rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2 rounded-xl text-text-primary hover:bg-slate-100 transition-colors flex items-center justify-center active:scale-95"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Right-Side Slide-out Mobile Sidebar Drawer */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={handleOpenSearch}
      />

      {/* Global Search Dialog */}
      {searchModalOpen && (
        <GlobalSearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      )}
    </header>
  );
}
