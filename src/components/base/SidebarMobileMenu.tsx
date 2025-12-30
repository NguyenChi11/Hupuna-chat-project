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
  onlyPersonal?: boolean;
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
  onlyPersonal = false,
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

  let displayedFilters = filters;
  if (onlyGroups) {
    displayedFilters = filters.filter((f) => f !== 'personal');
  } else if (onlyPersonal) {
    displayedFilters = filters.filter((f) => f !== 'group');
  }

  return (
    <div
      ref={menuRef}
      className="absolute top-12 right-0 z-50 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-1 animate-in fade-in zoom-in-95 duration-200 origin-top-right"
    >
      <div className="space-y-0.5">
        {/* Actions */}
        {!onlyPersonal && (
          <button
            onClick={() => {
              onOpenCreateGroup();
              onClose();
            }}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium"
          >
            <div className="flex items-center justify-center w-5 h-5 text-gray-500">
              <FaPlus className="w-4 h-4" />
            </div>
            <span>Tạo nhóm mới</span>
          </button>
        )}

        <div className="my-1 border-t border-gray-100" />

        {/* Filters */}
        <div className="text-xs font-semibold text-gray-400 px-4 py-2 uppercase tracking-wider">Bộ lọc tin nhắn</div>

        {displayedFilters.map((filter) => {
          const { label, icon: Icon, color } = FILTER_CONFIG[filter];
          const isActive = filterType === filter;
          const count = counts[filter];

          // Map colors for active state
          const activeTextClass =
            {
              indigo: 'text-indigo-600',
              blue: 'text-blue-600',
              green: 'text-emerald-600',
              purple: 'text-purple-600',
              pink: 'text-pink-600',
              gray: 'text-gray-600',
            }[color] || 'text-gray-600';

          const activeBgClass =
            {
              indigo: 'bg-indigo-50',
              blue: 'bg-blue-50',
              green: 'bg-emerald-50',
              purple: 'bg-purple-50',
              pink: 'bg-pink-50',
              gray: 'bg-gray-50',
            }[color] || 'bg-gray-50';

          return (
            <button
              key={filter}
              onClick={() => {
                setFilterType(filter);
                onClose();
              }}
              className={`
                w-full cursor-pointer flex items-center justify-between px-4 py-2.5 transition-colors text-sm
                ${isActive ? `${activeBgClass} ${activeTextClass} font-medium` : 'text-gray-600 hover:bg-gray-50'}
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${isActive ? activeTextClass : 'text-gray-400'}`} />
                <span>{label}</span>
              </div>

              {count > 0 && (
                <span
                  className={`
                  text-xs px-2 py-0.5 rounded-full font-medium
                  ${isActive ? 'bg-white/60' : 'bg-gray-100 text-gray-600'}
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
