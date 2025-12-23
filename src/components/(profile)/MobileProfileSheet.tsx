'use client';

import React, { useEffect, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import { createPortal } from 'react-dom';

interface MobileProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  backButtonClassName?: string;
}

export default function MobileProfileSheet({
  isOpen,
  onClose,
  title,
  children,
  rightAction,
  headerClassName = '',
  titleClassName = '',
  backButtonClassName = '',
}: MobileProfileSheetProps) {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300); // Wait for animation
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  // Use portal if needed, but for now rendering inline is fine as long as it covers everything.
  // Using portal is safer for z-index.
  if (!shouldRender) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex justify-center items-end md:items-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Sheet Container */}
      <div
        className={`relative w-full h-full md:h-[90vh] md:max-w-[480px] md:rounded-3xl md:overflow-hidden bg-white shadow-2xl transition-all duration-300 ease-in-out transform flex flex-col ${
          isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full md:translate-x-0 md:opacity-0 md:scale-95'
        }`}
      >
        {/* Header */}
        <div
          className={`flex-none px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10 ${
            headerClassName || 'bg-white/80 backdrop-blur-md'
          }`}
        >
          <button
            onClick={onClose}
            className={`p-2 -ml-2 rounded-full transition-colors cursor-pointer ${
              backButtonClassName || 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
            }`}
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          <h2 className={`text-lg font-bold flex-1 text-center pr-8 ${titleClassName || 'text-gray-800'}`}>{title}</h2>
          {rightAction && <div className="absolute right-4">{rightAction}</div>}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 custom-scrollbar">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
