'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number; // ms, defaults to 4000
}

interface ToastContextValue {
  showToast: (props: Omit<ToastItem, 'id'>) => string;
  success: (title: string, message?: string, duration?: number) => string;
  error: (title: string, message?: string, duration?: number) => string;
  warning: (title: string, message?: string, duration?: number) => string;
  info: (title: string, message?: string, duration?: number) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const TYPE_CONFIG = {
  success: {
    icon: CheckCircle2,
    badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-300',
    borderColor: 'border-emerald-500/40',
    lineGradient: 'from-emerald-500 to-teal-400',
    glowColor: 'shadow-emerald-500/10'
  },
  error: {
    icon: XCircle,
    badgeBg: 'bg-rose-50 text-rose-600 border-rose-300',
    borderColor: 'border-rose-500/40',
    lineGradient: 'from-rose-500 to-red-400',
    glowColor: 'shadow-rose-500/10'
  },
  warning: {
    icon: AlertTriangle,
    badgeBg: 'bg-amber-50 text-amber-600 border-amber-300',
    borderColor: 'border-amber-500/40',
    lineGradient: 'from-amber-500 to-orange-400',
    glowColor: 'shadow-amber-500/10'
  },
  info: {
    icon: Info,
    badgeBg: 'bg-blue-50 text-primary-600 border-blue-300',
    borderColor: 'border-primary-500/40',
    lineGradient: 'from-primary-600 to-cyan-400',
    glowColor: 'shadow-primary-500/10'
  }
};

const ToastCard = React.forwardRef<
  HTMLDivElement,
  {
    toast: ToastItem;
    onDismiss: (id: string) => void;
  }
>(function ToastCard({ toast, onDismiss }, ref) {
  const [isHovered, setIsHovered] = useState(false);
  const config = TYPE_CONFIG[toast.type] || TYPE_CONFIG.info;
  const IconComponent = config.icon;
  const duration = toast.duration || 4000;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: -16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 30, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full max-w-sm rounded-none bg-white border ${config.borderColor} shadow-xl ${config.glowColor} py-2.5 px-3.5 overflow-hidden pointer-events-auto select-none group`}
    >
      <div className="flex items-center gap-2.5">
        {/* Type Badge Icon (Straight Rectangle) */}
        <div className={`p-1.5 rounded-none border ${config.badgeBg} shrink-0`}>
          <IconComponent className="w-3.5 h-3.5" />
        </div>

        {/* Content (Reduced Height & Sleek Typography) */}
        <div className="flex-1 min-w-0 pr-1">
          <h4 className="text-xs font-bold text-text-primary tracking-tight leading-tight">
            {toast.title}
          </h4>
          {toast.message && (
            <p className="text-[11px] text-text-secondary leading-tight mt-0.5 truncate">
              {toast.message}
            </p>
          )}
        </div>

        {/* Dismiss Button (Straight Rectangle) */}
        <button
          onClick={() => onDismiss(toast.id)}
          className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1 rounded-none transition-colors shrink-0 cursor-pointer"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Animated Lining Progress Bar (Straight Sharp Rectangle) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-100 rounded-none overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${config.lineGradient} rounded-none`}
          style={{
            animation: `toastLining ${duration}ms linear forwards`,
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
          onAnimationEnd={() => onDismiss(toast.id)}
        />
      </div>
    </motion.div>
  );
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type, title, message, duration = 4000 }: Omit<ToastItem, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      setToasts((prev) => [...prev, { id, type, title, message, duration }]);
      return id;
    },
    []
  );

  const success = useCallback(
    (title: string, message?: string, duration?: number) =>
      showToast({ type: 'success', title, message, duration }),
    [showToast]
  );

  const error = useCallback(
    (title: string, message?: string, duration?: number) =>
      showToast({ type: 'error', title, message, duration }),
    [showToast]
  );

  const warning = useCallback(
    (title: string, message?: string, duration?: number) =>
      showToast({ type: 'warning', title, message, duration }),
    [showToast]
  );

  const info = useCallback(
    (title: string, message?: string, duration?: number) =>
      showToast({ type: 'info', title, message, duration }),
    [showToast]
  );

  return (
    <ToastContext.Provider
      value={{ showToast, success, error, warning, info, removeToast }}
    >
      {children}

      {/* Toast Viewport (Top-Right Floating Stack) */}
      <aside
        aria-label="Notifications"
        className="fixed top-5 right-5 z-[9999] flex flex-col items-end gap-2.5 pointer-events-none max-w-sm w-full px-4 sm:px-0"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastCard key={toast.id} toast={toast} onDismiss={removeToast} />
          ))}
        </AnimatePresence>
      </aside>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
