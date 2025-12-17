'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { HiLink, HiDocument } from 'react-icons/hi';
import { HiPhoto } from 'react-icons/hi2';

export default function ContentToolbar({
  selectedFolderId,
  linkInput,
  onLinkInputChange,
  onAddLink,
  onSelectMediaFiles,
  onSelectAnyFiles,
  nameInput,
  onNameInputChange,
  searchInput,
  onSearchInputChange,
  searchResults,
  onClickSearchResult,
}: {
  selectedFolderId: string | null;
  linkInput: string;
  onLinkInputChange: (v: string) => void;
  onAddLink: (link?: string, nameOverride?: string) => void;
  onSelectMediaFiles: (files: FileList, nameOverride?: string) => void;
  onSelectAnyFiles: (files: FileList, nameOverride?: string) => void;
  nameInput: string;
  onNameInputChange: (v: string) => void;
  searchInput: string;
  onSearchInputChange: (v: string) => void;
  searchResults: Array<{ id: string; type: 'media' | 'file' | 'text' | 'link'; label: string }>;
  onClickSearchResult: (id: string, type: 'media' | 'file' | 'text' | 'link') => void;
}) {
  const mediaRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [openKind, setOpenKind] = useState<'media' | 'file' | 'link' | null>(null);
  const [tempName, setTempName] = useState('');
  const [tempLink, setTempLink] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const disabled = !selectedFolderId;

  const openUpload = (kind: 'media' | 'file') => {
    if (disabled) return;
    setTempName(nameInput || '');
    setSelectedFiles([]);
    setOpenKind(kind);
  };
  const openLink = () => {
    if (disabled) return;
    setTempName(nameInput || '');
    setTempLink(linkInput || '');
    setOpenKind('link');
  };

  const closeUpload = () => setOpenKind(null);

  const confirmUpload = () => {
    if (!openKind) return;
    const nextName = tempName.trim();
    onNameInputChange(nextName);
    if (openKind === 'link') {
      const nextLink = tempLink.trim();
      if (!nextLink) return;
      onLinkInputChange(nextLink);
      onAddLink(nextLink, nextName);
    } else if (openKind === 'media' && mediaRef.current?.files?.length) {
      onSelectMediaFiles(mediaRef.current.files, nextName);
    } else if (openKind === 'file' && fileRef.current?.files?.length) {
      onSelectAnyFiles(fileRef.current.files, nextName);
    }
    closeUpload();
  };

  return (
    <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={openLink}
            disabled={disabled}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 px-4 py-2 text-xs font-medium text-white shadow hover:shadow-md disabled:opacity-50 transition"
          >
            <HiLink className="h-4 w-4" />
            Link
          </button>
          <button
            onClick={() => openUpload('media')}
            disabled={disabled}
            className="flex items-center gap-1.5 rounded-lg border border-sky-300 bg-sky-50 px-4 py-2 text-xs font-medium text-sky-700 hover:bg-sky-100 disabled:opacity-50 transition"
          >
            <HiPhoto className="h-4 w-4" />
            Ảnh/Video
          </button>
          <button
            onClick={() => openUpload('file')}
            disabled={disabled}
            className="flex items-center gap-1.5 rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700 hover:bg-blue-100 disabled:opacity-50 transition"
          >
            <HiDocument className="h-4 w-4" />
            File
          </button>
        </div>
        <div className="relative md:w-80 w-full ">
          <input
            value={searchInput}
            onChange={(e) => onSearchInputChange(e.target.value)}
            placeholder="Tìm kiếm..."
            className="w-full md:w-80 px-3 py-2  rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          {searchInput && searchResults.length > 0 && (
            <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white shadow-lg">
              {searchResults.map((r) => (
                <button
                  key={r.id}
                  className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm hover:bg-sky-50 transition-colors"
                  onClick={() => onClickSearchResult(r.id, r.type)}
                >
                  <span className="inline-flex min-w-[2.5rem] items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-2 py-1 text-xs font-medium text-white">
                    {r.type}
                  </span>
                  <span className="truncate flex-1 font-medium text-gray-800">{r.label || r.id}</span>
                  <span className="text-xs text-gray-400">→</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {!selectedFolderId && <p className="mt-2 text-xs text-gray-500">Chọn thư mục để thêm nội dung</p>}

      {openKind && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-xl bg-white shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 px-5 py-4">
              <h3 className="text-base font-semibold text-white">
                {openKind === 'link' ? 'Thêm Link' : `Upload ${openKind === 'media' ? 'Ảnh/Video' : 'File'}`}
              </h3>
            </div>

            <div className="p-5 space-y-4">
              <input
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Tên gợi nhớ (tùy chọn)"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              {openKind === 'link' ? (
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
                  <HiLink className="h-4 w-4 text-gray-500" />
                  <input
                    value={tempLink}
                    onChange={(e) => setTempLink(e.target.value)}
                    placeholder="Dán link..."
                    className="flex-1 bg-transparent text-sm outline-none"
                  />
                </div>
              ) : (
                <>
                  <input
                    ref={openKind === 'media' ? mediaRef : fileRef}
                    type="file"
                    accept={openKind === 'media' ? 'image/*,video/*' : undefined}
                    multiple
                    className="hidden"
                    onChange={(e) => setSelectedFiles(Array.from(e.target.files || []))}
                  />
                  <button
                    onClick={() => (openKind === 'media' ? mediaRef : fileRef).current?.click()}
                    className="w-full rounded-lg border border-dashed border-sky-400 bg-sky-50 py-6 text-sm font-medium text-sky-700 hover:bg-sky-100 transition"
                  >
                    Nhấn để chọn {openKind === 'media' ? 'ảnh/video' : 'file'}
                  </button>

                  {selectedFiles.length > 0 && (
                    <div className="rounded-lg bg-gray-50 p-3 text-xs">
                      <p className="mb-2 font-medium text-gray-700">{selectedFiles.length} tệp đã chọn</p>
                      <div className={openKind === 'media' ? 'grid grid-cols-3 gap-2' : 'space-y-2'}>
                        {selectedFiles.map((f, i) => {
                          const url = URL.createObjectURL(f);
                          return openKind === 'media' ? (
                            <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                              {f.type.startsWith('video/') ? (
                                <video src={url} className="h-full w-full object-cover" muted />
                              ) : (
                                <Image
                                  src={url}
                                  alt={f.name}
                                  width={80}
                                  height={80}
                                  className="h-full w-full object-cover"
                                />
                              )}
                            </div>
                          ) : (
                            <div key={i} className="flex items-center gap-2 rounded bg-white px-2 py-1.5 border">
                              <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">F</span>
                              <span className="truncate">{f.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex justify-end gap-2 border-t bg-gray-50 px-5 py-3">
              <button
                onClick={closeUpload}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200"
              >
                Hủy
              </button>
              <button
                onClick={confirmUpload}
                disabled={
                  (openKind === 'link' && !tempLink.trim()) || (openKind !== 'link' && selectedFiles.length === 0)
                }
                className="rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 px-5 py-2 text-sm font-medium text-white shadow hover:shadow-md disabled:opacity-50 transition"
              >
                Thêm ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
