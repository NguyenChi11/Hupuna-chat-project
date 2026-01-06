/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useMemo, useState } from 'react';
import FolderSidebar from '@/components/ui/folder/FolderSidebar';
import ContentToolbar from '@/components/ui/folder/ContentToolbar';
import ContentList from '@/components/ui/folder/ContentList';

import type { FolderItem, FolderNode, Scope } from '@/types/folderTypes';
import UploadProgressBar from '@/components/ui/folder/UploadProgressBar';
import { FaFolder } from 'react-icons/fa6';
import type { MessageLike } from '@/components/ui/folder/ContentList';
import type { Message } from '@/types/Message';
import { isLink } from '@/utils/utils';

type MobileLayoutProps = {
  compact?: boolean;
  activeTab: 'sidebar' | 'content';
  setActiveTab: (tab: 'sidebar' | 'content') => void;
  onClose?: () => void;
  onlyGlobal?: boolean;

  folders: FolderNode[];
  foldersGlobal: FolderNode[];
  foldersShared: FolderNode[];
  itemsMap: Record<string, FolderItem[]>;
  itemsMapGlobal: Record<string, FolderItem[]>;
  itemsMapShared: Record<string, FolderItem[]>;
  expanded: Record<string, boolean>;
  selectedFolderId: string | null;
  selectedScope: Scope;
  selectedIds: Set<string>;

  breadcrumbNodes: FolderNode[];

  openFolderMenuId: string | null;
  setOpenFolderMenuId: (id: string | null) => void;

  linkInput: string;
  setLinkInput: (v: string) => void;
  textInput: string;
  setTextInput: (v: string) => void;
  nameInput: string;
  setNameInput: (v: string) => void;
  searchInput: string;
  setSearchInput: (v: string) => void;

  showCreateModal?: boolean;
  setShowCreateModal?: (v: boolean) => void;
  createParentId?: string | null;
  setCreateParentId?: (id: string | null) => void;

  activeMenuId: string | null;
  setActiveMenuId: (id: string | null) => void;

  toggleNode: (id: string) => void;
  handleCreateRoot: (scope: Scope) => void;
  onSelectFolder: (id: string | null, scope: Scope) => void;
  onCreateChild: (nodeId: string, scope: Scope) => void;
  onRenameFolder: (nodeId: string, name: string, scope: Scope) => void;
  onDeleteFolder: (nodeId: string, name: string, scope: Scope) => void;

  onAddLink: (link?: string, nameOverride?: string) => void;
  onAddText: (text?: string, nameOverride?: string) => void;
  onSelectMediaFiles: (files: FileList, nameOverride?: string) => void;
  onSelectAnyFiles: (files: FileList, nameOverride?: string) => void;
  removeItemFromFolder: (folderId: string, messageId: string) => void;
  renameItem: (folderId: string, itemId: string, newName: string) => void;

  onToggleSelect: (id: string) => void;
  clearSelection: () => void;
  applySelection: () => void;

  currentItems: FolderItem[];
  messages: Message[];
  onJumpToMessage?: (id: string) => void;
  onInsertToInput?: (text: string) => void;
  onAttachFromFolder?: (att: { url: string; type: 'image' | 'video' | 'file'; fileName?: string }) => void;

  selectedChildren: FolderNode[];
  getItemCountById: (id: string) => number;

  uploadingCount: number;
  overallPercent: number;
};

export default function MobileLayout(props: MobileLayoutProps) {
  const {
    compact,
    activeTab,
    setActiveTab,

    folders,
    foldersGlobal,
    foldersShared,
    itemsMap,
    itemsMapGlobal,
    itemsMapShared,
    expanded,
    selectedFolderId,
    selectedScope,
    selectedIds,

    breadcrumbNodes,

    openFolderMenuId,
    setOpenFolderMenuId,

    linkInput,
    setLinkInput,
    nameInput,
    setNameInput,
    searchInput,
    setSearchInput,

    activeMenuId,
    setActiveMenuId,

    // handlers
    toggleNode,
    handleCreateRoot,
    onSelectFolder,
    onCreateChild,
    onRenameFolder,
    onDeleteFolder,

    onAddLink,

    onSelectMediaFiles,
    onSelectAnyFiles,
    removeItemFromFolder,
    renameItem,

    // selection
    onToggleSelect,
    clearSelection,
    applySelection,

    // message + callbacks
    currentItems,
    messages,
    onJumpToMessage,
    onInsertToInput,
    onAttachFromFolder,

    // children
    selectedChildren,
    getItemCountById,

    // upload
    uploadingCount,
    overallPercent,
  } = props;

  const [activeNav, setActiveNav] = useState<'media' | 'text' | 'link' | 'file'>('media');
  const [showComplete, setShowComplete] = useState(false);

  // Smart switch tab when folder changes or items load
  React.useEffect(() => {
    if (!currentItems || currentItems.length === 0) return;

    const hasItem = (navType: 'media' | 'text' | 'link' | 'file') => {
      return currentItems.some((it) => {
        const msg = (messages || []).find((m) => String(m._id) === String(it.id));
        const t = (msg?.type || it.type || 'text') as 'image' | 'video' | 'file' | 'text';
        const c = msg?.content || it.content || '';

        if (navType === 'media') return t === 'image' || t === 'video';
        if (navType === 'text') return t === 'text' && !isLink(c);
        if (navType === 'link') return t === 'text' && isLink(c);
        if (navType === 'file') return t === 'file';
        return false;
      });
    };

    // If current tab has items, stay
    if (hasItem(activeNav)) return;

    // Else switch to first available
    if (hasItem('media')) {
      setActiveNav('media');
      return;
    }
    if (hasItem('text')) {
      setActiveNav('text');
      return;
    }
    if (hasItem('link')) {
      setActiveNav('link');
      return;
    }
    if (hasItem('file')) {
      setActiveNav('file');
      return;
    }
  }, [selectedFolderId, currentItems, messages, activeNav]);

  const filteredItems = useMemo(() => {
    const kw = (searchInput || '').toLowerCase().trim();
    return (currentItems || []).filter((it) => {
      const msg = (messages || []).find((m) => String(m._id) === String(it.id));
      const t = (msg?.type || it.type || 'text') as 'image' | 'video' | 'file' | 'text';
      const c = msg?.content || it.content || '';
      const name = it.name || '';
      const fileName = msg?.fileName || it.fileName || '';
      const hay = `${name} ${fileName} ${c}`.toLowerCase();
      if (kw && !hay.includes(kw)) return false;
      if (activeNav === 'media') return t === 'image' || t === 'video';
      if (activeNav === 'text') return t === 'text' && !isLink(c);
      if (activeNav === 'link') return t === 'text' && isLink(c);
      if (activeNav === 'file') return t === 'file';
      return true;
    });
  }, [currentItems, messages, activeNav, searchInput]);

  const searchResults = useMemo(() => {
    const kw = (searchInput || '').toLowerCase().trim();
    if (!kw) return [];
    return (currentItems || [])
      .map((it) => {
        const msg = (messages || []).find((m) => String(m._id) === String(it.id));
        const t = (msg?.type || it.type || 'text') as 'image' | 'video' | 'file' | 'text';
        const c = msg?.content || it.content || '';
        const name = it.name || '';
        const fileName = msg?.fileName || it.fileName || '';
        const hay = `${name} ${fileName} ${c}`.toLowerCase();
        const navType = t === 'image' || t === 'video' ? 'media' : t === 'file' ? 'file' : isLink(c) ? 'link' : 'text';
        const label = name || fileName || (isLink(c) ? c : c);
        return { id: String(it.id), type: navType as 'media' | 'file' | 'text' | 'link', label, hay };
      })
      .filter((x) => x.hay.includes(kw))
      .slice(0, 8);
  }, [currentItems, messages, searchInput]);

  const messagesUi = React.useMemo<MessageLike[]>(() => {
    return (messages || []).map((m) => ({
      _id: m._id,
      type:
        m.type === 'image' || m.type === 'video' || m.type === 'file' || m.type === 'text'
          ? (m.type as 'image' | 'video' | 'file' | 'text')
          : undefined,
      content: m.content,
      fileUrl: m.fileUrl,
      previewUrl: m.previewUrl,
      fileName: m.fileName,
    }));
  }, [messages]);

  if (!compact) return null;

  return (
    <div className="w-full ">
      <div className="flex flex-col  ">
        <div className="flex flex-nowrap  border-b border-gray-200 bg-white/80 backdrop-blur-sm -mx-4 px-4">
          <button
            onClick={() => setActiveTab('sidebar')}
            className={`cursor-pointer flex-shrink-0 flex items-center justify-center gap-2 py-3 px-3 text-sm font-semibold transition-all ${
              activeTab === 'sidebar' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`}
          >
            Thư mục
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`cursor-pointer flex-shrink-0 flex items-center justify-center gap-2 py-3 px-3 text-sm font-semibold transition-all ${
              activeTab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`}
          >
            Nội dung
          </button>
        </div>

        {activeTab === 'sidebar' ? (
          <div className="w-full max-h-full overflow-y-auto custom-scrollbar">
            <FolderSidebar
              folders={folders}
              foldersGlobal={foldersGlobal}
              foldersShared={foldersShared}
              itemsMap={itemsMap}
              itemsMapGlobal={itemsMapGlobal}
              itemsMapShared={itemsMapShared}
              expanded={expanded}
              selectedFolderId={selectedFolderId}
              selectedScope={selectedScope}
              onSelect={(id, scope) => {
                onSelectFolder(id, scope);
                setActiveTab('content');
              }}
              onToggle={toggleNode}
              onCreateRoot={handleCreateRoot}
              openFolderMenuId={openFolderMenuId}
              setOpenFolderMenuId={setOpenFolderMenuId}
              onCreateChild={(nodeId, scope) => onCreateChild(nodeId, scope)}
              onRename={(nodeId, name, scope) => onRenameFolder(nodeId, name, scope)}
              onDelete={(nodeId, name, scope) => onDeleteFolder(nodeId, name, scope)}
              onlyGlobal={props.onlyGlobal}
            />
          </div>
        ) : (
          <div className="w-full">
            <div className="mb-3 mt-3 flex items-center flex-wrap gap-4 text-sm">
              {/* Nút "Gốc" */}
              <button
                onClick={() => {
                  onSelectFolder(null, selectedScope);
                }}
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-2 py-1.5 font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-lg">🏠</span>
                Gốc
              </button>

              {/* Các thư mục trong breadcrumb */}
              {breadcrumbNodes.map((node: FolderNode, idx: number) => (
                <React.Fragment key={node.id}>
                  <span className="text-gray-400 select-none text-lg">/</span>
                  <button
                    onClick={() => onSelectFolder(node.id, selectedScope)}
                    className={`
          inline-flex items-center gap-2.5 rounded-xl px-2 py-1.5 font-medium transition-all cursor-pointer
          ${
            idx === breadcrumbNodes.length - 1
              ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
              : 'bg-white text-gray-700 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:bg-gray-50'
          }
        `}
                  >
                    <span className="text-lg">📁</span>
                    {node.name}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <ContentToolbar
              selectedFolderId={selectedFolderId}
              linkInput={linkInput}
              onLinkInputChange={setLinkInput}
              onAddLink={() => {
                setActiveNav('link');
                onAddLink();
              }}
              onSelectMediaFiles={(files, nameOverride) => {
                setActiveNav('media');
                onSelectMediaFiles(files, nameOverride);
              }}
              onSelectAnyFiles={(files, nameOverride) => {
                setActiveNav('file');
                onSelectAnyFiles(files, nameOverride);
              }}
              nameInput={nameInput}
              onNameInputChange={setNameInput}
              searchInput={searchInput}
              onSearchInputChange={setSearchInput}
              searchResults={searchResults}
              onClickSearchResult={(id, type) => {
                setActiveNav(type);
                onToggleSelect(id);
              }}
            />

            <div className="mt-3 flex w-full flex-col items-start">
              <div className="flex flex-wrap items-center gap-2 rounded-xl bg-gray-50 p-1.5">
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeNav === 'media'
                      ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                  }`}
                  onClick={() => setActiveNav('media')}
                >
                  Ảnh/Video
                </button>
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeNav === 'text'
                      ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                  }`}
                  onClick={() => setActiveNav('text')}
                >
                  Text
                </button>
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeNav === 'link'
                      ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                  }`}
                  onClick={() => setActiveNav('link')}
                >
                  Link
                </button>
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeNav === 'file'
                      ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                  }`}
                  onClick={() => setActiveNav('file')}
                >
                  File
                </button>
              </div>
            </div>

            <div className="flex flex-col w-full h-[22rem] overflow-auto custom-scrollbar">
              {selectedFolderId && selectedChildren.length > 0 && (
                <div className="mt-3 p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-800">Thư mục con</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedChildren.map((child: FolderNode) => (
                      <button
                        key={child.id}
                        onClick={() => onSelectFolder(child.id, selectedScope)}
                        className="cursor-pointer flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-sm text-gray-800"
                      >
                        <div className="flex items-center gap-2">
                          <FaFolder className="w-5 h-5 text-gray-500" />
                          <span className="truncate font-semibold">{child.name}</span>
                        </div>
                        <span className="ml-2 inline-flex items-center justify-center text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
                          {getItemCountById(child.id)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedIds.size > 0 && (
                <div className="mt-3 p-3 rounded-xl bg-white border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-800">Xem trước lựa chọn</p>
                    <div className="flex items-center gap-2">
                      <button
                        className="cursor-pointer px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs hover:bg-green-700"
                        onClick={() => {
                          applySelection();
                          setShowComplete(true);
                          props.onClose?.();
                        }}
                      >
                        Đồng ý lựa chọn
                      </button>
                      <button
                        className="cursor-pointer px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs hover:bg-red-700"
                        onClick={() => {
                          if (!selectedFolderId) return;
                          Array.from(selectedIds).forEach((id) => removeItemFromFolder(selectedFolderId, id));
                          clearSelection();
                          setShowComplete(true);
                        }}
                      >
                        Xóa lựa chọn
                      </button>
                      <button
                        className="cursor-pointer px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs hover:bg-gray-200 border border-gray-200"
                        onClick={() => {
                          clearSelection();
                          setShowComplete(true);
                        }}
                      >
                        Bỏ chọn tất cả
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <ContentList
                selectedFolderId={selectedFolderId}
                items={filteredItems}
                messages={messagesUi}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
                onJumpToMessage={onJumpToMessage}
                onInsertToInput={onInsertToInput}
                onAttachFromFolder={onAttachFromFolder}
                selectedIds={selectedIds}
                onToggleSelect={onToggleSelect}
                removeItemFromFolder={removeItemFromFolder}
                onRenameItem={renameItem}
              />
            </div>
          </div>
        )}
      </div>

      {/* <UploadProgressBar uploadingCount={uploadingCount} overallUploadPercent={overallPercent} /> */}

      {showComplete && (
        <div className="fixed inset-0 z-[1000] bg-black/40" onClick={() => setShowComplete(false)}>
          <div
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-gray-200 text-sm font-semibold text-gray-800">Hoàn thành</div>
            <div className="px-4 py-4 text-sm text-gray-700">Thao tác đã được thực hiện thành công.</div>
            <div className="px-4 py-3 border-t border-gray-200 flex justify-end">
              <button
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700"
                onClick={() => setShowComplete(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
