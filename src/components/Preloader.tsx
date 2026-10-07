'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const MESSAGES = [
  'INITIALIZING DIGITAL EXPERIENCE',
  'LOADING ENTERPRISE ARCHITECTURE',
  'CONNECTING REST APIS & MYSQL',
  'SYSTEM READY'
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const forceIntro = urlParams.has('intro') || urlParams.has('reload');
      const hasLoaded = sessionStorage.getItem('zorven_preloader_done');
      if (hasLoaded && !forceIntro) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('zorven_preloader_done', 'true');
            }
          }, 250);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 12;
        const bounded = next > 100 ? 100 : next;

        if (bounded > 25 && bounded < 55) setMessageIndex(1);
        else if (bounded >= 55 && bounded < 85) setMessageIndex(2);
        else if (bounded >= 85) setMessageIndex(3);

        return bounded;
      });
    }, 45);

    // Hard fallback timeout: Preloader will never trap the screen for more than 1.8s
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('zorven_preloader_done', 'true');
      }
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F8FC]"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md px-6 text-center"
          >
            {/* Brand Monogram */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-5 rounded-2xl bg-white shadow-elevated border border-border p-2">
              <motion.div
                animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/logo-mark.png"
                  alt="Zorven Tech"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,98,227,0.4)]"
                  priority
                />
              </motion.div>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-text-primary mb-0.5 font-display">
              ZORVEN <span className="text-primary-600">TECH</span>
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-text-muted mb-3">
              IT Solutions
            </p>

            {/* Progress Bar with Cyan-Blue Gradient */}
            <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden my-4 relative shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-primary-700 via-primary-500 to-accent-cyan transition-all duration-100 ease-out shadow-glow-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status Telemetry */}
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-primary-500 animate-pulse" />
                // {MESSAGES[messageIndex]}
              </span>
              <span className="font-bold text-text-primary">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
