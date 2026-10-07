'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Layers,
  Sparkles,
  MessageCircle,
  Menu,
  ShieldCheck,
  Phone
} from 'lucide-react';

interface MobileBottomBarProps {
  onOpenMenu: () => void;
  onOpenSearch?: () => void;
}

export default function MobileBottomBar({ onOpenMenu }: MobileBottomBarProps) {
  const pathname = usePathname();

  // Don't show the bottom bar inside admin dashboard or client dashboard
  if (pathname?.startsWith('/admin/dashboard') || pathname?.startsWith('/client/dashboard')) {
    return null;
  }

  const isHome = pathname === '/';
  const isServices = pathname?.startsWith('/services');
  const isQuote = pathname === '/get-quote';

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-2 py-1.5 safe-area-bottom pointer-events-auto"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-items-center">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
            isHome ? 'text-primary-600 font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Home className={`w-5 h-5 ${isHome ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
        </Link>

        {/* 2. Services */}
        <Link
          href="/services"
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
            isServices ? 'text-primary-600 font-bold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className={`w-5 h-5 ${isServices ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Services</span>
        </Link>

        {/* 3. Center Elevated Quote Button */}
        <Link
          href="/get-quote"
          className="flex flex-col items-center justify-center -mt-5 group"
          title="Get a Quote"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-600 to-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 border-4 border-white transition-transform active:scale-95 group-hover:scale-105">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <span className={`text-[10px] mt-0.5 font-bold ${isQuote ? 'text-primary-600' : 'text-slate-700'}`}>
            Quote
          </span>
        </Link>

        {/* 4. WhatsApp Quick Connect */}
        <a
          href="https://wa.me/9779814702731"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-emerald-600 hover:text-emerald-700 transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 stroke-2" />
          <span className="text-[10px] mt-0.5 font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* 5. Menu Drawer & Portals */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-600 hover:text-slate-900 transition-colors"
        >
          <Menu className="w-5 h-5 stroke-2" />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Menu</span>
        </button>
      </div>
    </nav>
  );
}
