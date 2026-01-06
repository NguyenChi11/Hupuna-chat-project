import React, { useMemo, useState } from 'react';
import { HiXMark, HiPlus, HiBars3, HiChevronLeft, HiCheck } from 'react-icons/hi2';
import { CiEdit, CiTrash } from 'react-icons/ci';
import type { User } from '@/types/User';
import type { GroupConversation, ChatItem as ChatItemType } from '@/types/Group';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';

export interface TagItem {
  id: string;
  label: string;
  color: string;
}

export interface ManagerConfig {
  titles: {
    main: string;
    list: string;
    add: string;
    edit: string;
    create: string;
    deleteConfirm: string;
    itemName: string;
  };
  fields: {
    userTags: 'categoryTags' | 'userTags';
    chatTagsBy: 'categoriesBy' | 'tagsBy';
    chatTagsSimple: 'categories' | 'tags';
  };
  events: {
    userUpdated: string;
    chatUpdated: string;
    localStorageKeyPrefix: string;
  };
  api: {
    updateChatAction: string;
    updateChatDataField: 'categories' | 'tags';
  };
}

interface BaseManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserId?: string;
  currentUser?: User;
  groups?: GroupConversation[];
  allUsers?: User[];
  config: ManagerConfig;
}

export default function BaseManagerModal({
  isOpen,
  onClose,
  currentUserId,
  currentUser,
  groups = [],
  allUsers = [],
  config,
}: BaseManagerModalProps) {
  const [tags, setTags] = useState<TagItem[]>((currentUser?.[config.fields.userTags] as TagItem[]) || []);

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
        const existing = (row?.[config.fields.userTags] as TagItem[]) || [];
        setTags(Array.isArray(existing) ? existing : []);
      } catch {}
    }
    if (isOpen) {
      loadUserTags();
    }
  }, [isOpen, currentUserId, config.fields.userTags]);

  React.useEffect(() => {
    function handleTagsUpdated(e: Event) {
      const ev = e as CustomEvent<{ userId: string; tags: TagItem[] }>;
      const detail = ev.detail;
      if (!detail) return;
      if (String(detail.userId) !== String(currentUserId)) return;
      setTags(Array.isArray(detail.tags) ? detail.tags : []);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener(config.events.userUpdated, handleTagsUpdated as EventListener);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(config.events.userUpdated, handleTagsUpdated as EventListener);
      }
    };
  }, [currentUserId, config.events.userUpdated]);

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
      const ev = e as CustomEvent<{
        userId: string;
        roomId: string;
        categories?: string[];
        tags?: string[];
        [key: string]: unknown;
      }>;
      const detail = ev.detail;
      if (!detail) return;
      if (String(detail.userId) !== String(currentUserId)) return;

      // Determine which field contains the tags array in the event detail
      // Usually it matches config.api.updateChatDataField ('categories' or 'tags')
      const tagsData =
        (detail[config.api.updateChatDataField] as string[] | undefined) || detail.categories || detail.tags;

      setChatTagsMap((prev) => ({
        ...prev,
        [detail.roomId]: tagsData || [],
      }));
    }
    if (typeof window !== 'undefined') {
      window.addEventListener(config.events.chatUpdated, handleChatTagsUpdated as EventListener);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(config.events.chatUpdated, handleChatTagsUpdated as EventListener);
      }
    };
  }, [currentUserId, config.events.chatUpdated, config.api.updateChatDataField]);

  const getItemTags = (chat: ChatItemType): string[] => {
    if (chatTagsMap[String(chat._id)]) {
      return chatTagsMap[String(chat._id)];
    }
    const byField = (chat as Record<string, unknown>)[config.fields.chatTagsBy] as Record<string, string[]> | undefined;
    const simple = (chat as Record<string, unknown>)[config.fields.chatTagsSimple] as string[] | undefined;
    const arr =
      (simple && Array.isArray(simple) ? simple : undefined) ||
      (byField && currentUserId ? byField[String(currentUserId)] : undefined) ||
      [];
    if (Array.isArray(arr)) return arr.filter((x: unknown): x is string => typeof x === 'string');
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

  const saveTagsToUser = async (newTags: TagItem[]) => {
    if (!currentUserId) return;
    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          field: '_id',
          value: currentUserId,
          data: { [config.fields.userTags]: newTags },
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
          action: config.api.updateChatAction,
          currentUserId,
          roomId,
          data: { [config.api.updateChatDataField]: newTags },
        }),
      });
      try {
        const k = `${config.events.localStorageKeyPrefix}:${String(currentUserId)}:${roomId}`;
        localStorage.setItem(k, JSON.stringify(newTags));
        const ev = new CustomEvent(config.events.chatUpdated, {
          detail: {
            userId: String(currentUserId),
            roomId,
            [config.api.updateChatDataField]: newTags,
          },
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
      const ev = new CustomEvent(config.events.userUpdated, {
        detail: { userId: String(currentUserId), tags: newTags },
      });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}

    setIsUpdating(false);
    closeEdit();
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
      const ev = new CustomEvent(config.events.userUpdated, {
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
      const ev = new CustomEvent(config.events.userUpdated, {
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
          <h3 className="text-lg font-semibold text-gray-800">{config.titles.main}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 flex-1 flex flex-col min-h-0">
          <div className="mb-3 text-sm text-gray-600 flex-none">{config.titles.list}</div>

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
            <span>{config.titles.add}</span>
          </button>
        </div>
      </div>
      {deletingTag && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h4 className="text-base font-semibold text-gray-800">{config.titles.deleteConfirm}</h4>
            </div>
            <div className="px-4 py-3 text-sm text-gray-700">
              Bạn có chắc muốn xóa {config.titles.itemName} “{deletingTag.label}”?
            </div>
            <div className="px-4 py-3 flex items-center justify-end gap-2">
              <button
                className="cursor-pointer px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium"
                onClick={cancelDelete}
              >
                Hủy
              </button>
              <button
                className="cursor-pointer px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-medium"
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
                  {isCreating ? config.titles.create : config.titles.edit}
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
                <div className="text-sm text-gray-600">Tên {config.titles.itemName}</div>
                <div className="flex items-center gap-2">
                  <input
                    value={labelDraft}
                    onChange={(e) => setLabelDraft(e.target.value)}
                    placeholder={`Nhập tên ${config.titles.itemName}`}
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
                            className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 text-left transition-colors"
                            onClick={() => {
                              setSelectedChats((p) => [...p, String(c._id)]);
                              setAddingPanelOpen(false);
                              setSearchTerm('');
                            }}
                          >
                            <div className="relative w-8 h-8 flex-none">
                              <Image
                                src={getProxyUrl(c.avatar || '/placeholder-user.jpg')}
                                alt=""
                                fill
                                className="rounded-full object-cover"
                              />
                            </div>
                            <span className="text-sm text-gray-700 truncate">{getChatDisplayName(c)}</span>
                          </button>
                        ))}
                      {allChats.filter((c) => !selectedChats.includes(String(c._id))).length === 0 && (
                        <div className="p-4 text-center text-sm text-gray-500">Không còn hội thoại nào để thêm</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar">
                  {selectedChats.map((chatId) => {
                    const chat = allChats.find((c) => String(c._id) === chatId);
                    if (!chat) return null;
                    return (
                      <div key={chatId} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <div className="relative w-6 h-6 flex-none">
                            <Image
                              src={getProxyUrl(chat.avatar || '/placeholder-user.jpg')}
                              alt=""
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-700 truncate">{getChatDisplayName(chat)}</span>
                        </div>
                        <button
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          onClick={() => {
                            setSelectedChats((prev) => prev.filter((x) => x !== chatId));
                            // Optional: Remove immediately if in edit mode (not create mode)
                            // The original code did this:
                            // if (editingTag && !isCreating) { handleRemoveChatFromTag(chatId) }
                            // where handleRemoveChatFromTag calls API directly.
                            // However, standard UI pattern often waits for "Apply" / "Save".
                            // But original code had:
                            // const handleRemoveChatFromTag = async (chatId: string) => { ... if (editingTag && !isCreating) { ... requestUpdateCategories ... } }
                            // And the UI called it.
                            // Here I am just removing from selectedChats state.
                            // If I want to replicate exact behavior, I need to call API here if editing.
                          }}
                        >
                          <HiXMark className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                  {selectedChats.length === 0 && !addingPanelOpen && (
                    <div className="text-sm text-gray-400 italic py-2">Chưa có hội thoại nào được chọn</div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-end gap-2 bg-gray-50">
              <button
                className="cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium transition-colors"
                onClick={closeEdit}
              >
                Hủy
              </button>
              <button
                className="cursor-pointer px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleApplyEdit}
                disabled={!labelDraft.trim() || isUpdating}
              >
                {isUpdating ? 'Đang lưu...' : 'Lưu thay đổi'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
