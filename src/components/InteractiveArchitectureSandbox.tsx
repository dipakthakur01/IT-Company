'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Globe,
  Zap,
  ShieldCheck,
  Cpu,
  Activity,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface SimulationState {
  mode: 'idle' | 'read' | 'write' | 'spike';
  latency: string;
  cacheHit: string;
  statusText: string;
  packetStep: number;
}

export default function InteractiveArchitectureSandbox() {
  const [state, setState] = useState<SimulationState>({
    mode: 'idle',
    latency: '16ms',
    cacheHit: '99.4%',
    statusText: 'System idling at optimal baseline SLA.',
    packetStep: 0
  });

  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');

  const runSimulation = (mode: 'read' | 'write' | 'spike') => {
    if (mode === 'read') {
      setState({
        mode: 'read',
        latency: '8ms',
        cacheHit: '100% (Redis Hit)',
        statusText: 'Client read request fulfilled from Redis In-Memory Cache in 8ms.',
        packetStep: 2
      });
    } else if (mode === 'write') {
      setState({
        mode: 'write',
        latency: '24ms',
        cacheHit: 'Cache Invalidation',
        statusText: 'ACID transactional write committed to MySQL 8.0 with binary log replication.',
        packetStep: 3
      });
    } else {
      setState({
        mode: 'spike',
        latency: '34ms',
        cacheHit: '98.8%',
        statusText: 'Spike load simulated: 5,000 req/s absorbed via connection pooling with 0% packet drop.',
        packetStep: 4
      });
    }
  };

  const resetSimulation = () => {
    setState({
      mode: 'idle',
      latency: '16ms',
      cacheHit: '99.4%',
      statusText: 'System idling at optimal baseline SLA.',
      packetStep: 0
    });
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B0F19] text-white relative overflow-hidden border-b border-slate-800">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/60 shadow-glow">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            See How Your Application Performs Under Real Enterprise Workloads.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Test our standardized three-tier stack: Next.js frontend, Node.js + Express REST layer, and persistent MySQL database with Redis caching.
          </p>
        </div>

        {/* Sandbox Canvas Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
          {/* Top Controls Toolbar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono font-semibold text-slate-400 mr-2 uppercase tracking-wider">
                Simulate Traffic:
              </span>
              <button
                type="button"
                onClick={() => runSimulation('read')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  state.mode === 'read'
                    ? 'bg-cyan-500 text-slate-950 shadow-glow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Cached Read (8ms)</span>
              </button>

              <button
                type="button"
                onClick={() => runSimulation('write')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  state.mode === 'write'
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>ACID Write (24ms)</span>
              </button>

              <button
                type="button"
                onClick={() => runSimulation('spike')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  state.mode === 'spike'
                    ? 'bg-emerald-500 text-slate-950 shadow-glow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>5k req/s Traffic Spike</span>
              </button>

              <button
                type="button"
                onClick={resetSimulation}
                className="px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Reset simulation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Live Status Telemetry Pill */}
            <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-400">P99:</span>
              <span className="text-emerald-400 font-bold">{state.latency}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Cache:</span>
              <span className="text-cyan-400 font-bold">{state.cacheHit}</span>
            </div>
          </div>

          {/* Interactive Pipeline Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative py-4">
            {/* Node 1: Client Edge */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                state.packetStep >= 1
                  ? 'bg-cyan-950/40 border-cyan-500 shadow-glow'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-800/80">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                  Layer 01 • Edge
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Next.js Client</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  React Server Components, edge SSR, and client prefetching with zero hydration overhead.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
                ✓ HTTP/3 QUIC
              </div>
            </div>

            {/* Node 2: API Gateway */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                state.packetStep >= 2
                  ? 'bg-blue-950/40 border-blue-500 shadow-glow'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center mb-4 border border-blue-800/80">
                  <Server className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider mb-1">
                  Layer 02 • Core API
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Node.js Express</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Layered architecture with JWT authentication, role guards, Zod schema validation, and rate limiting.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400">
                ✓ Pooled Workers
              </div>
            </div>

            {/* Node 3: In-Memory Cache */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                state.mode === 'read' || state.mode === 'spike'
                  ? 'bg-amber-950/40 border-amber-500 shadow-glow'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-4 border border-amber-800/80">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
                  Layer 03 • Speed
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Redis Cache</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sub-millisecond memory cache for user sessions, catalog queries, and distributed rate limiting counters.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-amber-400">
                ✓ 0.8ms Lookup
              </div>
            </div>

            {/* Node 4: ACID Relational Database */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                state.mode === 'write' || state.mode === 'spike'
                  ? 'bg-emerald-950/40 border-emerald-500 shadow-glow'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-800/80">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  Layer 04 • Persistence
                </div>
                <h4 className="text-lg font-bold text-white mb-2">MySQL 8.0 Primary</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Normalized schemas, ACID transactional guarantees, foreign keys, connection pools, and automatic daily backups.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
                ✓ Zero Data Loss
              </div>
            </div>
          </div>

          {/* Live Dynamic Event Log Box */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-slate-400">Event Stream:</span>
              <span className="text-cyan-300 font-medium">{state.statusText}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-500">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>TLS 1.3 Strict</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
