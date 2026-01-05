import React, { useMemo, useState } from 'react';
import { HiXMark, HiPlus, HiBars3, HiChevronLeft, HiCheck } from 'react-icons/hi2';
import { CiEdit, CiTrash } from 'react-icons/ci';
import type { User } from '@/types/User';
import type { GroupConversation, ChatItem as ChatItemType } from '@/types/Group';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';

interface TagManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserId?: string;
  currentUser?: User;
  groups?: GroupConversation[];
  allUsers?: User[];
}

export default function TagManagerModal({
  isOpen,
  onClose,
  currentUserId,
  currentUser,
  groups = [],
  allUsers = [],
}: TagManagerModalProps) {
  const [tags, setTags] = useState(currentUser?.userTags || []);

  React.useEffect(() => {
    async function loadUserTags() {
      if (!currentUserId) return;
      try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: currentUserId }),
        });
        const data = await res.json();
        const row = (data && data.row) || (Array.isArray(data?.data) ? data.data[0] : null);
        const existing = (row?.userTags as typeof tags) || [];
        setTags(Array.isArray(existing) ? existing : []);
      } catch {}
    }
    if (isOpen) {
      loadUserTags();
    }
  }, [isOpen, currentUserId]);

  React.useEffect(() => {
    function handleTagsUpdated(e: Event) {
      const ev = e as CustomEvent<{ userId: string; tags: { id: string; label: string; color: string }[] }>;
      const detail = ev.detail;
      if (!detail) return;
      if (String(detail.userId) !== String(currentUserId)) return;
      setTags(Array.isArray(detail.tags) ? detail.tags : []);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('userTagsUpdated', handleTagsUpdated as EventListener);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('userTagsUpdated', handleTagsUpdated as EventListener);
      }
    };
  }, [currentUserId]);

  const [editingTagId, setEditingTagId] = useState<string | null>(null);
  const [deletingTagId, setDeletingTagId] = useState<string | null>(null);
  const editingTag = useMemo(() => tags.find((t) => t.id === editingTagId) || null, [tags, editingTagId]);
  const deletingTag = useMemo(() => tags.find((t) => t.id === deletingTagId) || null, [tags, deletingTagId]);
  const allChats: ChatItemType[] = useMemo(() => [...groups, ...allUsers], [groups, allUsers]);

  const getChatDisplayName = (chat: ChatItemType): string => {
    const maybeGroup = chat as GroupConversation;
    const isGroupChat = maybeGroup.isGroup === true || Array.isArray(maybeGroup.members);
    if (isGroupChat) return (maybeGroup.name || '').trim() || 'Nhóm';
    const u = chat as User;
    if (currentUserId && u.nicknames?.[currentUserId]) return u.nicknames[currentUserId].trim();
    return (u.name || u.username || 'Người dùng').trim();
  };

  const [chatTagsMap, setChatTagsMap] = useState<Record<string, string[]>>({});

  React.useEffect(() => {
    function handleChatTagsUpdated(e: Event) {
      const ev = e as CustomEvent<{ userId: string; roomId: string; tags: string[] }>;
      const detail = ev.detail;
      if (!detail) return;
      if (String(detail.userId) !== String(currentUserId)) return;
      setChatTagsMap((prev) => ({
        ...prev,
        [detail.roomId]: detail.tags,
      }));
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('chatTagsUpdated', handleChatTagsUpdated as EventListener);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('chatTagsUpdated', handleChatTagsUpdated as EventListener);
      }
    };
  }, [currentUserId]);

  const getItemTags = (chat: ChatItemType): string[] => {
    if (chatTagsMap[String(chat._id)]) {
      return chatTagsMap[String(chat._id)];
    }
    const byField = (chat as unknown as { tagsBy?: Record<string, string[]> }).tagsBy;
    const arr = (byField && currentUserId ? byField[String(currentUserId)] : undefined) || [];
    if (Array.isArray(arr)) return arr.filter((x) => typeof x === 'string');
    return [];
  };

  const [selectedChats, setSelectedChats] = useState<string[]>([]);
  const [labelDraft, setLabelDraft] = useState<string>('');
  const [colorDraft, setColorDraft] = useState<string>('');
  const [addingPanelOpen, setAddingPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const availableColors = useMemo(
    () => [
      'bg-red-500',
      'bg-pink-500',
      'bg-orange-400',
      'bg-yellow-400',
      'bg-green-500',
      'bg-teal-500',
      'bg-blue-500',
      'bg-purple-500',
    ],
    [],
  );

  const [isCreating, setIsCreating] = useState(false);

  const saveTagsToUser = async (newTags: typeof tags) => {
    if (!currentUserId) return;
    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          field: '_id',
          value: currentUserId,
          data: { userTags: newTags },
        }),
      });
    } catch (error) {
      console.error('Failed to save tags', error);
    }
  };

  const openEdit = (tagId: string) => {
    setEditingTagId(tagId);
    setIsCreating(false);
    const tag = tags.find((t) => t.id === tagId);
    setLabelDraft(tag?.label || '');
    setColorDraft(tag?.color || availableColors[0]);
    const assigned = allChats.filter((c) => getItemTags(c).includes(tagId)).map((c) => String(c._id));
    setSelectedChats(assigned);
    setAddingPanelOpen(false);
    setSearchTerm('');
  };

  const openCreate = () => {
    setIsCreating(true);
    setEditingTagId(null);
    setLabelDraft('');
    setColorDraft(availableColors[0]);
    setSelectedChats([]);
    setAddingPanelOpen(false);
    setSearchTerm('');
  };

  const closeEdit = () => {
    setEditingTagId(null);
    setIsCreating(false);
    setSelectedChats([]);
    setLabelDraft('');
    setColorDraft('');
    setAddingPanelOpen(false);
    setSearchTerm('');
  };

  const requestUpdateTags = async (chat: ChatItemType, newTags: string[]) => {
    try {
      const maybeGroup = chat as GroupConversation;
      const isGroupChat = maybeGroup.isGroup === true || Array.isArray(maybeGroup.members);
      const endpoint = isGroupChat ? '/api/groups' : '/api/users';
      const roomId = String(chat._id);
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateTags',
          currentUserId,
          roomId,
          data: { tags: newTags },
        }),
      });
      try {
        const k = `chatTags:${String(currentUserId)}:${roomId}`;
        localStorage.setItem(k, JSON.stringify(newTags));
        const ev = new CustomEvent('chatTagsUpdated', {
          detail: { userId: String(currentUserId), roomId, tags: newTags },
        });
        window.dispatchEvent(ev as unknown as Event);
      } catch {}
    } catch {}
  };

  const handleApplyEdit = async () => {
    if (!editingTag && !isCreating) return;
    const tagId = isCreating ? `tag_${Date.now()}` : editingTag!.id;
    const originalAssigned = isCreating
      ? []
      : allChats.filter((c) => getItemTags(c).includes(tagId)).map((c) => String(c._id));
    const toAdd = selectedChats.filter((id) => !originalAssigned.includes(id));
    const toRemove = originalAssigned.filter((id) => !selectedChats.includes(id));
    setIsUpdating(true);
    const operations: Array<Promise<void>> = [];
    for (const chat of allChats) {
      const id = String(chat._id);
      const currentTags = getItemTags(chat);
      if (toAdd.includes(id)) {
        const nextTags = [...currentTags, tagId].filter((v, i, a) => a.indexOf(v) === i); // unique
        operations.push(requestUpdateTags(chat, nextTags));
      } else if (toRemove.includes(id)) {
        const nextTags = currentTags.filter((x) => x !== tagId);
        operations.push(requestUpdateTags(chat, nextTags));
      }
    }
    await Promise.all(operations);

    let newTags = [...tags];
    if (isCreating) {
      newTags.push({ id: tagId, label: labelDraft, color: colorDraft });
    } else {
      newTags = tags.map((t) => (t.id === tagId ? { ...t, label: labelDraft, color: colorDraft } : t));
    }
    await saveTagsToUser(newTags);
    setTags(newTags);
    try {
      const ev = new CustomEvent('userTagsUpdated', {
        detail: { userId: String(currentUserId), tags: newTags },
      });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}

    setIsUpdating(false);
    closeEdit();
  };

  const handleRemoveChatFromTag = async (chatId: string) => {
    setSelectedChats((prev) => prev.filter((x) => x !== chatId));

    if (editingTag && !isCreating) {
      const chat = allChats.find((c) => String(c._id) === chatId);
      if (!chat) return;

      const tagId = editingTag.id;
      const currentTags = getItemTags(chat);
      if (currentTags.includes(tagId)) {
        const newTags = currentTags.filter((x) => x !== tagId);
        await requestUpdateTags(chat, newTags);
      }
    }
  };

  const confirmDelete = (tagId: string) => {
    setDeletingTagId(tagId);
  };
  const handleDelete = () => {
    if (!deletingTag) return;
    const newTags = tags.filter((t) => t.id !== deletingTag.id);
    setTags(newTags);
    saveTagsToUser(newTags);
    try {
      const ev = new CustomEvent('userTagsUpdated', {
        detail: { userId: String(currentUserId), tags: newTags },
      });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}
    setDeletingTagId(null);
  };
  const cancelDelete = () => setDeletingTagId(null);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    const newTags = [...tags];
    const [moved] = newTags.splice(draggedIndex, 1);
    newTags.splice(dropIndex, 0, moved);
    setTags(newTags);
    saveTagsToUser(newTags);
    try {
      const ev = new CustomEvent('userTagsUpdated', {
        detail: { userId: String(currentUserId), tags: newTags },
      });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}
    setDraggedIndex(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 md:p-4">
      <div className="bg-white w-full h-full md:h-auto md:max-w-md md:rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 flex-none">
          <h3 className="text-lg font-semibold text-gray-800">Quản lý thẻ tags</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 flex-1 flex flex-col min-h-0">
          <div className="mb-3 text-sm text-gray-600 flex-none">Danh sách thẻ tags</div>

          <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar md:max-h-[60vh]">
            {tags.map((tag, index) => (
              <div
                key={tag.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className={`flex items-center justify-between gap-3 p-3 bg-gray-50 rounded-md group hover:bg-gray-100 transition-colors cursor-move mr-1 ${
                  draggedIndex === index ? 'opacity-50 ring-2 ring-blue-500 ring-dashed' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing">
                    <HiBars3 className="w-5 h-5" />
                  </button>

                  <div className={`flex items-center justify-center`}>
                    <div
                      className={`h-4 w-6 ${tag.color}`}
                      style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
                    />
                  </div>

                  <span className="flex-1 text-gray-700 font-medium text-sm">{tag.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => openEdit(tag.id)}
                  >
                    <CiEdit className="w-5 h-5" />
                  </button>
                  <button
                    className="cursor-pointer text-red-600 hover:text-red-700 transition-colors"
                    onClick={() => confirmDelete(tag.id)}
                  >
                    <CiTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="cursor-pointer mt-4 flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors w-full px-2 py-2 rounded-md hover:bg-blue-50"
            onClick={openCreate}
          >
            <HiPlus className="w-5 h-5" />
            <span>Thêm thẻ mới</span>
          </button>
        </div>
      </div>
      {deletingTag && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h4 className="text-base font-semibold text-gray-800">Xác nhận xóa</h4>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700">Bạn có chắc muốn xóa thẻ “{deletingTag.label}”?</div>
            <div className="px-4 py-3 flex items-center justify-end gap-2">
              <button
                className="cursor-pointer px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium"
                onClick={cancelDelete}
              >
                Hủy
              </button>
              <button
                className="px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-medium"
                onClick={handleDelete}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
      {(editingTag || isCreating) && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 md:p-4">
          <div className="bg-white w-full h-full md:h-auto md:max-w-lg md:rounded-lg shadow-xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 flex-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={closeEdit}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
                  title="Quay lại"
                >
                  <HiChevronLeft className="w-6 h-6" />
                </button>
                <h4 className="text-base font-semibold text-gray-800">
                  {isCreating ? 'Thêm thẻ mới' : 'Chi tiết thẻ tags'}
                </h4>
              </div>
              <button
                onClick={closeEdit}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 space-y-4 flex-1 overflow-y-auto">
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Tên thẻ tags</div>
                <div className="flex items-center gap-2">
                  <input
                    value={labelDraft}
                    onChange={(e) => setLabelDraft(e.target.value)}
                    placeholder="Nhập tên thẻ"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="relative">
                    <button
                      className={`cursor-pointer h-6 w-10 ${colorDraft} rounded-md`}
                      onClick={() => setShowColorPicker((s) => !s)}
                      style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
                      title="Đổi màu"
                    />
                    {showColorPicker && (
                      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-[10001]">
                        <div className="px-1 pb-1 text-xs font-medium text-gray-600">Thay đổi màu thẻ</div>
                        <div className="flex items-center gap-2">
                          {availableColors.map((c) => (
                            <button
                              key={c}
                              className={`relative w-6 h-6 rounded-sm ${c} border border-white shadow-sm`}
                              onClick={() => {
                                setColorDraft(c);
                                setShowColorPicker(false);
                              }}
                              title={c}
                            >
                              {colorDraft === c && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                  <HiCheck className="w-3.5 h-3.5 text-yellow-300 drop-shadow" />
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Hội thoại được gắn thẻ</div>
                <button
                  className="cursor-pointer text-blue-600 text-sm font-medium"
                  onClick={() => setAddingPanelOpen((s) => !s)}
                >
                  + Thêm hội thoại
                </button>
                {addingPanelOpen && (
                  <div className="mt-2 border border-gray-200 rounded-md">
                    <div className="p-2 border-b border-gray-200">
                      <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Tìm hội thoại"
                        className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="max-h-48 overflow-auto custom-scrollbar">
                      {allChats
                        .filter((c) => !selectedChats.includes(String(c._id)))
                        .filter((c) => getChatDisplayName(c).toLowerCase().includes(searchTerm.trim().toLowerCase()))
                        .slice(0, 50)
                        .map((c) => (
                          <button
                            key={String(c._id)}
                            onClick={() => setSelectedChats((prev) => [...prev, String(c._id)])}
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50"
                          >
                            {(c as GroupConversation).avatar || (c as User).avatar ? (
                              <Image
                                src={getProxyUrl(String((c as GroupConversation).avatar || (c as User).avatar))}
                                alt=""
                                width={28}
                                height={28}
                                className="w-7 h-7 rounded-full object-cover"
                              />
                            ) : (
                              <Image
                                src="/logo/avata.webp"
                                alt=""
                                width={28}
                                height={28}
                                className="w-7 h-7 rounded-full object-cover"
                              />
                            )}
                            <span className="text-sm text-gray-800">{getChatDisplayName(c)}</span>
                          </button>
                        ))}
                    </div>
                  </div>
                )}
                <div className="space-y-2 max-h-36 overflow-auto custom-scrollbar">
                  {selectedChats.map((id) => {
                    const chat = allChats.find((c) => String(c._id) === id);
                    if (!chat) return null;
                    return (
                      <div key={id} className="flex items-center gap-3">
                        {(chat as GroupConversation).avatar || (chat as User).avatar ? (
                          <Image
                            src={getProxyUrl(String((chat as GroupConversation).avatar || (chat as User).avatar))}
                            alt=""
                            width={28}
                            height={28}
                            className="w-7 h-7 rounded-full object-cover"
                          />
                        ) : (
                          <Image
                            src="/logo/avata.webp"
                            alt=""
                            width={28}
                            height={28}
                            className="w-7 h-7 rounded-full object-cover"
                          />
                        )}
                        <span className="text-sm text-gray-800">{getChatDisplayName(chat)}</span>
                        <button
                          className="cursor-pointer ml-auto text-gray-500 hover:text-gray-700 text-sm"
                          onClick={() => handleRemoveChatFromTag(id)}
                        >
                          Xóa
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-end gap-2 border-t border-gray-100 flex-none">
              <button
                className="cursor-pointer px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium"
                onClick={closeEdit}
              >
                Hủy
              </button>
              <button
                disabled={isUpdating || labelDraft.trim().length === 0}
                className={`cursor-pointer px-3 py-2 rounded-md text-white text-sm font-medium ${
                  isUpdating || labelDraft.trim().length === 0
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                onClick={handleApplyEdit}
              >
                {isUpdating ? 'Đang thêm...' : 'Thêm thẻ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
