'use client';

import React from 'react';
import { ToastProvider } from '@/components/ui/ToastContext';
import { ConfirmProvider } from '@/components/ui/ConfirmContext';
import PwaRegister from '@/components/PwaRegister';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <ConfirmProvider>
        <PwaRegister />
        {children}
      </ConfirmProvider>
    </ToastProvider>
  );
}
