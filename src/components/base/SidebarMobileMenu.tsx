'use client';

import React, { useRef, useEffect } from 'react';
import { FILTER_CONFIG, FilterType } from '../(chatPopup)/MessageFilter';
import { FaPlus } from 'react-icons/fa6';
import { HiFolder } from 'react-icons/hi2';

interface SidebarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  filterType: FilterType;
  setFilterType: (filter: FilterType) => void;
  counts: {
    all: number;
    unread: number;
    read: number;
    group: number;
    personal: number;
    hidden: number;
    [key: string]: number;
  };
  onOpenCreateGroup: () => void;
  onOpenGlobalFolder: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onlyGroups?: boolean;
}

export default function SidebarMobileMenu({
  isOpen,
  onClose,
  filterType,
  setFilterType,
  counts,
  onOpenCreateGroup,
  onOpenGlobalFolder,
  buttonRef,
  onlyGroups = false,
}: SidebarMobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  const filters: FilterType[] =
    counts.hidden > 0
      ? ['all', 'group', 'personal', 'unread', 'read', 'hidden']
      : ['all', 'group', 'personal', 'unread', 'read'];

  const displayedFilters = onlyGroups ? filters.filter((f) => f !== 'personal') : filters;

  return (
    <div
      ref={menuRef}
      className="absolute top-12 right-0 z-50 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-2 animate-in fade-in zoom-in-95 duration-200 origin-top-right"
    >
      <div className="space-y-1">
        {/* Actions */}
        <button
          onClick={() => {
            onOpenCreateGroup();
            onClose();
          }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/50 transition-colors text-gray-700 font-medium"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md">
            <FaPlus className="w-4 h-4" />
          </div>
          <span>Tạo nhóm mới</span>
        </button>

        <button
          onClick={() => {
            onOpenGlobalFolder();
            onClose();
          }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/50 transition-colors text-gray-700 font-medium"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
            <HiFolder className="w-4 h-4" />
          </div>
          <span>Folder dùng chung</span>
        </button>

        <div className="my-2 border-t border-gray-200/60" />

        {/* Filters */}
        <div className="text-xs font-semibold text-gray-400 px-3 py-1 uppercase tracking-wider">Bộ lọc tin nhắn</div>

        {displayedFilters.map((filter) => {
          const { label, icon: Icon, color } = FILTER_CONFIG[filter];
          const isActive = filterType === filter;
          const count = counts[filter];

          // Map colors for active state
          const colorClasses =
            {
              indigo: 'bg-indigo-500 text-white shadow-indigo-500/30',
              blue: 'bg-blue-500 text-white shadow-blue-500/30',
              green: 'bg-emerald-500 text-white shadow-emerald-500/30',
              purple: 'bg-purple-500 text-white shadow-purple-500/30',
              pink: 'bg-pink-500 text-white shadow-pink-500/30',
              gray: 'bg-gray-500 text-white shadow-gray-500/30',
            }[color] || 'bg-gray-500 text-white';

          return (
            <button
              key={filter}
              onClick={() => {
                setFilterType(filter);
                onClose();
              }}
              className={`
                w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200
                ${isActive ? 'bg-white shadow-sm ring-1 ring-gray-200' : 'hover:bg-white/50'}
              `}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    p-1.5 rounded-lg transition-colors shadow-sm
                    ${isActive ? colorClasses : 'bg-gray-100 text-gray-500'}
                 `}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`${isActive ? 'font-bold text-gray-800' : 'font-medium text-gray-600'}`}>{label}</span>
              </div>

              {count > 0 && (
                <span
                  className={`
                  text-xs px-2 py-0.5 rounded-full font-bold
                  ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}
                `}
                >
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
