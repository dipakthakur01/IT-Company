'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Layers,
  Settings,
  Bell,
  ArrowRight,
  Database,
  Lock,
  FileCheck
} from 'lucide-react';

export default function EnterprisePlatformMockup() {
  return (
    <section className="py-12 md:py-16 bg-[#0B0F19] text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/80 px-3 py-1 rounded-full border border-primary-800">
            ENTERPRISE PLATFORM ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Custom Management Dashboards That Put You in Complete Control.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Every digital platform we build includes an enterprise-grade management hub, granting your leadership complete visibility into content, analytics, inquiries, and operational workflows.
          </p>
        </motion.div>

        {/* Dashboard Browser Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>https://portal.zorventech.com/enterprise/analytics</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Bell className="w-4 h-4 hover:text-white cursor-pointer" />
              <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold shadow-glow">
                Z
              </div>
            </div>
          </div>

          {/* Inner Dashboard Layout */}
          <div className="grid grid-cols-12 min-h-[460px]">
            {/* Sidebar */}
            <div className="col-span-3 bg-slate-950/60 p-4 border-r border-slate-800/80 hidden sm:block space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Management Modules
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-primary-600 text-white font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Overview Analytics</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>Leads & Inquiries</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <Layers className="w-4 h-4" />
                  <span>Services & Content</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <Database className="w-4 h-4" />
                  <span>Data Pool & Caching</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <FileCheck className="w-4 h-4" />
                  <span>Audit Logs</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>System Settings</span>
                </div>
              </div>
            </div>

            {/* Main Dashboard Canvas */}
            <div className="col-span-12 sm:col-span-9 p-6 space-y-6 bg-slate-900/50">
              {/* Stat Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Monthly Unique Visits</div>
                  <div className="text-2xl font-bold text-white">42,850</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">+18.4% from last month</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Active Inquiries / Leads</div>
                  <div className="text-2xl font-bold text-white">128</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">14 New this week</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">System Health</div>
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-[10px] text-slate-400 font-mono">0 Pending Alerts</div>
                </div>
              </div>

              {/* Recent Inquiries Table Preview */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Recent Enterprise Inquiries
                  </span>
                  <span className="text-[10px] text-primary-400">
                    Live Real-Time Feed
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                    <div>
                      <div className="font-semibold text-white">Dr. Arthur Sterling (CuraHealth)</div>
                      <div className="text-[10px] text-slate-400 font-mono">Telemedicine EHR Synchronization</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px] font-mono">
                      Qualified Lead
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                    <div>
                      <div className="font-semibold text-white">Elena Rostova (Zenith Luxury)</div>
                      <div className="text-[10px] text-slate-400 font-mono">Multi-Vendor Marketplace Expansion</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-950 text-primary-300 text-[10px] font-mono">
                      Proposal Sent
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom callout */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs">
                <span className="text-slate-400">Role-Based Access: Executive, Product Lead, Content Team, Operations</span>
                <Link
                  href="/get-quote"
                  className="font-bold text-primary-400 hover:text-white flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-primary-600 transition-all border border-slate-700/80"
                >
                  <span>Request Custom Portal Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
