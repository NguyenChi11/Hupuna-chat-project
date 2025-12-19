'use client';

import React, { useEffect, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import { createPortal } from 'react-dom';

interface MobileProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function MobileProfileSheet({ isOpen, onClose, title, children }: MobileProfileSheetProps) {
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
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Sheet Container */}
      <div
        className={`absolute inset-y-0 right-0 w-full bg-white shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex-none px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-600"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          <h2 className="text-lg font-bold text-gray-800 flex-1 text-center pr-8">{title}</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 custom-scrollbar p-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
