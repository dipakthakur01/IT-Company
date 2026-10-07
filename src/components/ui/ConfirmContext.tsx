'use client';

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, AlertTriangle, ShieldAlert, X } from 'lucide-react';

export type ConfirmVariant = 'primary' | 'danger' | 'warning';

export interface ConfirmOptions {
  title: string;
  message: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmVariant;
}

interface ConfirmContextValue {
  confirm: (options: ConfirmOptions) => Promise<boolean>;
}

const ConfirmContext = createContext<ConfirmContextValue | undefined>(undefined);

const VARIANT_CONFIG = {
  primary: {
    icon: HelpCircle,
    badgeBg: 'bg-blue-50 text-primary-600 border-blue-300',
    confirmBtn: 'bg-primary-500 hover:bg-primary-600 shadow-glow text-white',
    focusRing: 'focus:ring-primary-500'
  },
  danger: {
    icon: ShieldAlert,
    badgeBg: 'bg-rose-50 text-rose-600 border-rose-300',
    confirmBtn: 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30 text-white',
    focusRing: 'focus:ring-rose-500'
  },
  warning: {
    icon: AlertTriangle,
    badgeBg: 'bg-amber-50 text-amber-600 border-amber-300',
    confirmBtn: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30 text-white',
    focusRing: 'focus:ring-amber-500'
  }
};

export function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    options: ConfirmOptions;
  }>({
    isOpen: false,
    options: {
      title: '',
      message: '',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      variant: 'primary'
    }
  });

  const resolverRef = useRef<((value: boolean) => void) | null>(null);

  const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      resolverRef.current = resolve;
      setDialogState({
        isOpen: true,
        options: {
          confirmText: 'Confirm',
          cancelText: 'Cancel',
          variant: 'primary',
          ...options
        }
      });
    });
  }, []);

  const handleClose = (choice: boolean) => {
    setDialogState((prev) => ({ ...prev, isOpen: false }));
    if (resolverRef.current) {
      resolverRef.current(choice);
      resolverRef.current = null;
    }
  };

  const { options, isOpen } = dialogState;
  const config = VARIANT_CONFIG[options.variant || 'primary'];
  const IconComponent = config.icon;

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="confirm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => handleClose(false)}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          >
            <motion.div
              key="confirm-card"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-none bg-white border border-slate-300 shadow-2xl p-6 overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Top Accent Strip (Straight Rectangle) */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  options.variant === 'danger'
                    ? 'from-rose-500 to-red-400'
                    : options.variant === 'warning'
                    ? 'from-amber-500 to-orange-400'
                    : 'from-primary-600 to-cyan-400'
                }`}
              />

              {/* Close corner button (Straight Rectangle) */}
              <button
                onClick={() => handleClose(false)}
                className="absolute top-4 right-4 p-1.5 rounded-none text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4 pt-1">
                {/* Variant Icon (Straight Rectangle) */}
                <div
                  className={`p-2.5 rounded-none border ${config.badgeBg} shrink-0 mt-0.5 shadow-2xs`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-base font-bold text-text-primary tracking-tight">
                    {options.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                    {options.message}
                  </div>
                </div>
              </div>

              {/* Action Buttons (Straight Rectangles) */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => handleClose(false)}
                  className="px-4 py-2 rounded-none border border-slate-300 hover:bg-slate-50 text-text-secondary font-semibold text-xs sm:text-sm transition-all cursor-pointer active:scale-98"
                >
                  {options.cancelText || 'Cancel'}
                </button>
                <button
                  type="button"
                  autoFocus
                  onClick={() => handleClose(true)}
                  className={`px-5 py-2 rounded-none font-semibold text-xs sm:text-sm shadow-subtle transition-all cursor-pointer active:scale-98 ${config.confirmBtn}`}
                >
                  {options.confirmText || 'Confirm'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmProvider');
  }
  return context;
}
