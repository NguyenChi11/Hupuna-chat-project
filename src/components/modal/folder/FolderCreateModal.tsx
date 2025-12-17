'use client';

import React, { useMemo, useState, useRef, useEffect } from 'react';
import { ChevronDown, Folder } from 'lucide-react';
import type { FolderNode } from '@/types/folderTypes';
import { flatten } from '@/utils/folderHelpers';

export default function FolderCreateModal({
  isOpen,
  folders,
  defaultParentId,
  lockParent,
  onClose,
  onCreate,
}: {
  isOpen: boolean;
  folders: FolderNode[];
  defaultParentId?: string;
  lockParent?: boolean;
  onClose: () => void;
  onCreate: (name: string, parentId?: string) => void;
}) {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState<string>(defaultParentId || 'root');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = useMemo(() => {
    const flat = flatten(folders);
    return [{ id: 'root', name: 'Gốc (Root)', depth: 0 }, ...flat];
  }, [folders]);

  const selectedFolder = options.find((opt) => opt.id === parentId) || options[0];

  // Đóng dropdown khi click ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md  rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
        {/* Header gradient */}
        <div className="bg-gradient-to-r rounded-t-2xl from-sky-500 via-blue-500 to-blue-500 px-6 py-5">
          <h3 className="text-xl font-bold text-white">Tạo thư mục mới</h3>
          <p className="mt-1 text-sm text-sky-100">Chọn tên và vị trí lưu trữ cho thư mục</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Tên thư mục */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tên thư mục</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow placeholder:text-gray-400"
              placeholder="Ví dụ: Media, Tài liệu, Dự án 2025..."
              autoFocus
            />
          </div>

          {/* Thư mục cha - Custom Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thư mục cha</label>
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => !lockParent && setIsDropdownOpen(!isDropdownOpen)}
                disabled={!!lockParent}
                className="w-full flex items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-left focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow disabled:bg-gray-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-sky-600" />
                  <span className="font-medium">{selectedFolder.name}</span>
                  {selectedFolder.depth && selectedFolder.depth > 0 && (
                    <span className="text-gray-400 text-xs">({'└─ '.repeat(selectedFolder.depth)})</span>
                  )}
                </span>
                {!lockParent && (
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {/* Dropdown List */}
              {isDropdownOpen && !lockParent && (
                <div className="absolute z-10 w-full mt-2 rounded-xl border border-gray-200 bg-white shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setParentId(option.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-sky-50 transition-colors ${
                        option.id === parentId ? 'bg-sky-100 text-sky-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span
                        style={{ paddingLeft: `${(option.depth ?? 0) * 20}px` }}
                        className="flex items-center gap-2"
                      >
                        <Folder className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        {option.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {lockParent && <p className="mt-2 text-xs text-gray-500">Thư mục cha đã được cố định</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center rounded-b-2xl justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={() => {
              const trimmed = name.trim();
              if (!trimmed) return;
              onCreate(trimmed, parentId === 'root' ? undefined : parentId);
              setName('');
              onClose();
            }}
            disabled={!name.trim()}
            className="rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 px-6 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Tạo thư mục
          </button>
        </div>
      </div>
    </div>
  );
}
