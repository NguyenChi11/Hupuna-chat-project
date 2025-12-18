'use client';

import React from 'react';
import Image from 'next/image';
import { HiDocumentText, HiLink, HiCheck, HiPencil } from 'react-icons/hi';
import { getProxyUrl } from '@/utils/utils';

export type MessageLike = {
  _id: string;
  type?: 'image' | 'video' | 'file' | 'text';
  content?: string;
  fileUrl?: string;
  previewUrl?: string;
  fileName?: string;
};

export type FolderItemLike = {
  id: string;
  name?: string;
  content?: string;
  fileUrl?: string;
  fileName?: string;
  type?: 'image' | 'video' | 'file' | 'text';
};

type Props = {
  selectedFolderId: string | null;
  items: FolderItemLike[];
  messages: MessageLike[];

  activeMenuId: string | null;
  setActiveMenuId: (id: string | null) => void;

  onJumpToMessage?: (id: string) => void;
  onInsertToInput?: (text: string) => void;
  onAttachFromFolder?: (att: { url: string; type: 'image' | 'video' | 'file'; fileName?: string }) => void;

  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;

  removeItemFromFolder: (folderId: string, messageId: string) => void;
  onRenameItem?: (folderId: string, itemId: string, name: string) => void;
};

export default function ContentList({
  selectedFolderId,
  items,
  messages,
  setActiveMenuId,
  selectedIds,
  onToggleSelect,
  onRenameItem,
}: Props) {
  // expose setter for ItemDropdownMenu
  if (typeof window !== 'undefined') {
    (window as unknown as { __setChatFolderActiveMenu?: (id: string) => void }).__setChatFolderActiveMenu = (
      id: string,
    ) => setActiveMenuId(id);
  }

  const [renameOpen, setRenameOpen] = React.useState(false);
  const [renameItemId, setRenameItemId] = React.useState<string | null>(null);
  const [renameInput, setRenameInput] = React.useState('');

  if (!selectedFolderId) {
    return (
      <div className="mt-3 rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-600 mr-2">
        Chọn 1 thư mục để xem nội dung.
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="mt-3 rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-600 mr-2">
        Thư mục trống.
      </div>
    );
  }

  const openRename = (itemId: string, currentName: string) => {
    setActiveMenuId(null);
    setRenameItemId(itemId);
    setRenameInput(currentName || '');
    setRenameOpen(true);
  };

  const confirmRename = async () => {
    const name = renameInput.trim();
    if (!name || !renameItemId || !selectedFolderId) {
      setRenameOpen(false);
      return;
    }
    await onRenameItem?.(selectedFolderId, renameItemId, name);
    setRenameOpen(false);
    setRenameItemId(null);
    setRenameInput('');
  };

  const renderTile = (it: FolderItemLike, idx: number) => {
    const msg = messages.find((m) => String(m._id) === String(it.id));
    const id = String(it.id || idx);
    const selected = selectedIds.has(id);

    // 🔑 CHUẨN HOÁ DATA (WORDPRESS STYLE)
    const resolvedType = msg?.type || it.type || 'text';
    const resolvedUrl = msg?.fileUrl || msg?.previewUrl || it.fileUrl || '';

    const resolvedFileName = msg?.fileName || it.fileName;
    const resolvedContent = msg?.content || it.content || '';

    const showSelected = (
      <div className="absolute left-2 top-2 z-20 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
        <HiCheck className="h-4 w-4" />
      </div>
    );

    /* ================= IMAGE / VIDEO ================= */
    if ((resolvedType === 'image' || resolvedType === 'video') && resolvedUrl) {
      return (
        <div
          key={`media-${id}`}
          className="relative w-40 h-[12rem] overflow-hidden rounded-2xl border border-gray-200 bg-white cursor-pointer"
          onClick={() => onToggleSelect(id)}
        >
          <div className="relative aspect-square w-full h-[10rem]">
            {resolvedType === 'video' ? (
              <video
                src={getProxyUrl(resolvedUrl)}
                className="!h-[10rem] w-full object-cover"
                controls
                preload="metadata"
              />
            ) : (
              <Image
                src={getProxyUrl(resolvedUrl)}
                alt={resolvedFileName || 'image'}
                fill
                sizes="144px"
                className="object-cover"
              />
            )}
          </div>

          <div className="px-2 py-2">
            <p className="truncate text-sm font-semibold text-gray-900">
              {it.name || resolvedFileName || (resolvedType === 'video' ? 'Video' : 'Ảnh')}
            </p>
          </div>

          {selected && showSelected}
          <button
            className="cursor-pointer absolute right-2 top-2 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-black/5 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              const label = it.name || resolvedFileName || (resolvedType === 'video' ? 'Video' : 'Ảnh');
              openRename(id, label);
            }}
            aria-label="Đổi tên"
            title="Đổi tên"
          >
            <HiPencil className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      );
    }

    /* ================= FILE ================= */
    if (resolvedType === 'file' && resolvedUrl) {
      return (
        <div
          key={`file-${id}`}
          className="relative flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 hover:bg-gray-50 cursor-pointer"
          onClick={() => onToggleSelect(id)}
        >
          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-2 text-white">
            <HiDocumentText className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              {it.name || resolvedFileName || 'Tệp đính kèm'}
            </p>
          </div>

          {selected && showSelected}
          <button
            className="cursor-pointer absolute right-2 top-2 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-black/5 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              const label = it.name || resolvedFileName || 'Tệp đính kèm';
              openRename(id, label);
            }}
            aria-label="Đổi tên"
            title="Đổi tên"
          >
            <HiPencil className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      );
    }

    /* ================= TEXT / LINK ================= */
    const match = resolvedContent.match(/(https?:\/\/|www\.)\S+/i);
    const raw = match?.[0];
    const href = raw ? (raw.startsWith('http') ? raw : `https://${raw}`) : '';

    return (
      <div
        key={`text-${id}`}
        className="relative flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 hover:bg-gray-50 cursor-pointer"
        onClick={() => onToggleSelect(id)}
      >
        <div className="rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500 p-2 text-white">
          <HiLink className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-900">
            {it.name || raw || resolvedContent || 'Tin nhắn'}
          </p>
          {href && <p className="mt-0.5 truncate text-xs text-gray-500">{href}</p>}
        </div>

        {selected && showSelected}
        <button
          className="cursor-pointer absolute right-2 top-2 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-black/5 hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            const label = it.name || raw || resolvedContent || 'Tin nhắn';
            openRename(id, label);
          }}
          aria-label="Đổi tên"
          title="Đổi tên"
        >
          <HiPencil className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4 mr-2">{items.map(renderTile)}</div>
      {renameOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            {/* Header với gradient */}
            <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 px-6 py-5">
              <h3 className="text-xl font-bold text-white">Đổi tên mục</h3>
              <p className="mt-1 text-sm text-sky-100">Nhập tên mới cho mục này</p>
            </div>

            {/* Body */}
            <div className="p-6">
              <input
                value={renameInput}
                onChange={(e) => setRenameInput(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow placeholder:text-gray-400"
                placeholder="Tên mới..."
                autoFocus
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
              <button
                onClick={() => {
                  setRenameOpen(false);
                  setRenameItemId(null);
                }}
                className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={confirmRename}
                disabled={!renameInput.trim()}
                className="rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 px-6 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
