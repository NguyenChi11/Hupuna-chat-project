'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { IoClose, IoSearch, IoSend, IoCheckmark } from 'react-icons/io5';
import { HiUsers, HiUser, HiOutlineDocumentText } from 'react-icons/hi2';
import { User } from '@/types/User';
import { GroupConversation } from '@/types/Group';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';
import { Message } from '@/types/Message';
import { HiPlay, HiX, HiXCircle } from 'react-icons/hi';

// Mock types

interface ShareMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: Message;
  currentUser: User;
  allUsers: User[];
  groups: GroupConversation[];
  onShare: (targetRoomIds: string[], message: Message, attachedText?: string) => Promise<void>;
}

type ShareTarget = {
  id: string;
  name: string;
  avatar?: string;
  isGroup: boolean;
  type: 'user' | 'group';
};

export default function ShareMessageModal({
  isOpen,
  onClose,
  message,
  currentUser,
  allUsers,
  groups = [],
  onShare,
}: ShareMessageModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTargets, setSelectedTargets] = useState<Set<string>>(new Set());
  const [isSharing, setIsSharing] = useState(false);
  const [attachedText, setAttachedText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      el.scrollTop = el.scrollHeight;
    } catch {}
    try {
      inputRef.current?.scrollIntoView({ block: 'end' });
    } catch {}
  };

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  }, []);
  useEffect(() => {
    if (!isOpen || !isMobile) return;
    const root = document.documentElement;
    const applyViewport = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      root.style.setProperty('--vvh', `${vv.height}px`);
      root.style.setProperty('--vvw', `${vv.width}px`);
      root.style.setProperty('--vvTop', `${vv.offsetTop || 0}px`);
      root.style.setProperty('--vvLeft', `${vv.offsetLeft || 0}px`);
      if (viewportRef.current) {
        viewportRef.current.style.height = `${vv.height}px`;
      }
      scrollToBottom();
    };
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener('resize', applyViewport);
      vv.addEventListener('scroll', applyViewport);
      applyViewport();
    }
    document.body.classList.add('vv-body-lock');
    return () => {
      if (vv) {
        vv.removeEventListener('resize', applyViewport);
        vv.removeEventListener('scroll', applyViewport);
      }
      document.body.classList.remove('vv-body-lock');
      root.style.removeProperty('--vvh');
      root.style.removeProperty('--vvw');
      root.style.removeProperty('--vvTop');
      root.style.removeProperty('--vvLeft');
    };
  }, [isOpen, isMobile]);
  // Scroll input vào view khi focus
  const handleInputFocus = () => {
    setTimeout(() => {
      scrollToBottom();
      inputRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 300); // Đợi bàn phím xuất hiện
  };
  const shareTargets: ShareTarget[] = useMemo(() => {
    const userTargets: ShareTarget[] = allUsers
      .filter((u) => u._id !== currentUser._id)
      .map((u) => ({
        id: String(u._id),
        name: u.name || 'Người dùng',
        avatar: u.avatar,
        isGroup: false,
        type: 'user' as const,
      }));

    const groupTargets: ShareTarget[] = groups.map((g) => ({
      id: String(g._id),
      name: g.name || 'Nhóm',
      avatar: g.avatar,
      isGroup: true,
      type: 'group' as const,
    }));

    return [...groupTargets, ...userTargets];
  }, [allUsers, groups, currentUser._id]);

  const filteredTargets = useMemo(() => {
    if (!searchTerm.trim()) return shareTargets;
    const lower = searchTerm.toLowerCase();
    return shareTargets.filter((t) => t.name.toLowerCase().includes(lower));
  }, [shareTargets, searchTerm]);

  const toggleSelect = (targetId: string) => {
    setSelectedTargets((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(targetId)) {
        newSet.delete(targetId);
      } else {
        newSet.add(targetId);
      }
      return newSet;
    });
  };

  const handleShare = async () => {
    if (selectedTargets.size === 0) return;

    setIsSharing(true);
    try {
      const targetRoomIds = Array.from(selectedTargets).map((targetId) => {
        const target = shareTargets.find((t) => t.id === targetId);
        if (target?.isGroup) {
          return targetId;
        } else {
          const ids = [currentUser._id, targetId].sort();
          return `${ids[0]}_${ids[1]}`;
        }
      });

      await onShare(targetRoomIds, message, attachedText);

      setSelectedTargets(new Set());
      setSearchTerm('');
      setAttachedText('');
      onClose();
    } catch (error) {
      console.error('Share error:', error);
    } finally {
      setIsSharing(false);
    }
  };

  const renderMessagePreview = () => {
    const batchItems =
      (
        message as unknown as {
          batchItems?: Array<{
            id: string;
            type: 'image' | 'video' | 'file' | 'text';
            fileUrl?: string;
            fileName?: string;
            content?: string;
          }>;
        }
      ).batchItems || [];
    if (Array.isArray(batchItems) && batchItems.length > 1) {
      const items = batchItems.slice(0, 6);
      return (
        <div>
          <p className="text-xs text-gray-500 mb-2">{batchItems.length} mục sẽ được chia sẻ</p>
          <div className="grid grid-cols-10 gap-1">
            {items.map((it, idx) => {
              const url = getProxyUrl(String(it.fileUrl || ''));
              if (it.type === 'image') {
                return (
                  <div
                    key={`share-preview-img-${idx}`}
                    className="relative w-full max-w-[5rem] aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100"
                  >
                    {url ? (
                      <Image src={url} alt="Ảnh" width={200} height={200} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}
                  </div>
                );
              }
              if (it.type === 'video') {
                return (
                  <div
                    key={`share-preview-vid-${idx}`}
                    className="relative w-full max-w-[5rem] aspect-square bg-black rounded-lg overflow-hidden border border-gray-100"
                  >
                    {url ? (
                      <video src={url} preload="metadata" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-900" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-100">
                      <div className=" rounded-full flex items-center justify-center shadow">
                        <HiPlay className="w-3 h-3 text-blue-600 ml-1" />
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={`share-preview-other-${idx}`}
                  className="flex items-center justify-center w-full aspect-square rounded-lg border border-gray-200 bg-white"
                >
                  <HiOutlineDocumentText className="w-6 h-6 text-gray-500" />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (message.type === 'text') {
      const text = (message.content || '').slice(0, 120) + ((message.content || '').length > 120 ? '...' : '');
      return <p className="text-sm text-gray-700 leading-relaxed">{text}</p>;
    }

    const mediaUrl = getProxyUrl(message.fileUrl || message.previewUrl);

    if (message.type === 'image' && mediaUrl) {
      return (
        <div className="w-full max-w-[5rem]">
          <Image
            src={mediaUrl}
            alt="Ảnh chia sẻ"
            width={300}
            height={200}
            className="w-full max-h-20 object-contain rounded-xl border border-gray-100"
          />
        </div>
      );
    }

    if (message.type === 'video' && mediaUrl) {
      return (
        <div className="w-full max-w-[7rem]">
          <video
            src={mediaUrl}
            controls
            preload="metadata"
            className="w-full max-h-20 rounded-xl border border-gray-100 bg-black"
          />
        </div>
      );
    }

    if (message.type === 'file') {
      return (
        <a
          href={getProxyUrl(message.fileUrl)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl max-w-[70vw] sm:max-w-[18rem] shadow-sm hover:bg-gray-50"
        >
          <div className="p-2 bg-blue-600 rounded-xl">
            <HiOutlineDocumentText className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">{message.fileName || 'Tệp đính kèm'}</p>
            <p className="text-xs text-gray-500 truncate">Nhấn để tải xuống</p>
          </div>
        </a>
      );
    }

    if (message.type === 'sticker') {
      return <p className="text-sm text-gray-700">😊 Sticker</p>;
    }
    return <p className="text-sm text-gray-700">Tin nhắn</p>;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={viewportRef}
      className={`fixed inset-0 z-[10001] flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200 ${isMobile ? 'vv-fixed' : ''}`}
    >
      <div
        ref={containerRef}
        className="w-full h-full sm:w-full sm:h-auto sm:max-w-lg bg-white shadow-2xl flex flex-col sm:max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200 md:rounded-xl"
      >
        {/* Header - Modern gradient */}
        <div className="relative p-1 bg-gray-200 text-black ">
          <div className="flex items-center px-2 gap-3">
            <button
              onClick={onClose}
              className="top-4 right-4 hover:cursor-pointer  hover:bg-white/20 rounded-full transition-all duration-200 hover:rotate-90"
            >
              <HiX className="w-6 h-6" />
            </button>
            <div>
              <h3 className="text-[1rem] ">Chia sẻ</h3>
              <p className="text-black text-sm mt-0.5">Đã chọn: {selectedTargets.size}</p>
            </div>
          </div>
        </div>

        <div className="py-1.5 px-3 bg-white border-b border-gray-300 pb-3">
          <div className="relative ">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm người dùng hoặc nhóm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Main content scrollable (mobile fullscreen) */}
        <div className="flex-1 overflow-y-auto">
          {/* Message Preview - Enhanced */}

          {/* Search - Modern design */}
          <div className="px-3 py-1.5 bg-white">
            {selectedTargets.size > 0 && (
              <div className="mt-3 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1.5 text-blue-600 font-medium">
                  <IoCheckmark className="w-5 h-5" />
                  <span>{selectedTargets.size} đã chọn</span>
                </div>
              </div>
            )}
          </div>

          {/* Target List - Improved styling */}
          <div className="px-3 pb-2">
            {filteredTargets.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoSearch className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">Không tìm thấy kết quả</p>
                <p className="text-gray-400 text-sm mt-1">Thử tìm kiếm với từ khóa khác</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredTargets.map((target) => {
                  const isSelected = selectedTargets.has(target.id);
                  return (
                    <button
                      key={target.id}
                      onClick={() => toggleSelect(target.id)}
                      className={`w-full  p-2 mb-2 flex items-center gap-4 transition-all hover:cursor-pointer duration-200 hover:bg-gray-50  border-transparent`}
                    >
                      <div className="relative flex-shrink-0 flex items-center gap-5">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}`}
                        >
                          {isSelected && <IoCheckmark className="w-5 h-5 text-white" />}
                        </div>
                        <div className={`w-10 h-10 rounded-full overflow-hidden transition-all duration-200`}>
                          {target.avatar ? (
                            <Image
                              src={getProxyUrl(target.avatar)}
                              alt=""
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Image
                              src="/logo/avata.webp"
                              alt={target.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <p className="font-semibold text-gray-800 truncate">{target.name}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {target.isGroup ? (
                            <>
                              <HiUsers className="w-4 h-4 text-purple-500" />
                              <span className="text-xs text-purple-600 font-medium">Nhóm</span>
                            </>
                          ) : (
                            <>
                              <HiUser className="w-4 h-4 text-gray-400" />
                              <span className="text-xs text-gray-500">Người dùng</span>
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer - Modern actions */}
        {/* Footer - Hiển thị các target đã chọn */}
        <div className="py-2 px-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 rounded-none sm:rounded-b-2xl">
          {selectedTargets.size === 0 ? (
            <p className="text-center text-gray-400 text-sm">Chưa chọn người nhận nào</p>
          ) : (
            <>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700">Đã chọn ({selectedTargets.size})</p>
              </div>

              {/* Danh sách cuộn ngang các người đã chọn */}
              <div className="flex gap-3 overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-300">
                {Array.from(selectedTargets).map((targetId) => {
                  const target = shareTargets.find((t) => t.id === targetId);
                  if (!target) return null;

                  return (
                    <div key={targetId} className="flex-shrink-0 flex flex-col items-center gap-2 group">
                      <div className="relative flex-shrink-0">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          {target.avatar ? (
                            <Image
                              src={getProxyUrl(target.avatar)}
                              alt={target.name}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Image
                              src="/logo/avata.webp"
                              alt={target.name}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        {/* Nút xóa - Dấu X đỏ ở góc trên phải */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Ngăn click lan ra toggleSelect toàn bộ item
                            toggleSelect(targetId);
                          }}
                          className="absolute -top-[2px] cursor-pointer -right-1 w-5 h-5 bg-gray-400 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-200 opacity-0 opacity-100 hover:scale-110"
                          aria-label="Xóa khỏi danh sách chia sẻ"
                        >
                          <IoClose className="w-4 h-4 text-white" />
                        </button>

                        {/* Icon nhóm ở góc dưới phải (nếu là group) */}
                        {target.isGroup && (
                          <div className="absolute -bottom-[2px] -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-3 border-white shadow-md">
                            <HiUsers className="w-4.5 h-4.5 text-white" />
                          </div>
                        )}
                      </div>

                      <p className="text-xs font-medium text-gray-700 max-w-[64px] truncate text-center mt-1">
                        {target.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div
          className="px-2 pb-3 mb-2 bg-white border-t border-gray-200"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="py-2 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nội dung chia sẻ</p>
            <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm  whitespace-pre-wrap break-words">
              {renderMessagePreview()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập tin nhắn đính kèm (tùy chọn)"
              value={attachedText}
              onChange={(e) => setAttachedText(e.target.value)}
              onFocus={handleInputFocus}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
            />
            <button
              onClick={handleShare}
              disabled={selectedTargets.size === 0 || isSharing}
              className="flex-1 px-4 py-4 hover:cursor-pointer bg-blue-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {isSharing ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <IoSend className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
