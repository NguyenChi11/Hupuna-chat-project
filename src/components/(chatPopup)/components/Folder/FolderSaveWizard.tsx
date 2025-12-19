'use client';

import React from 'react';
import { HiFolder, HiArrowLeft } from 'react-icons/hi';
import { useChatContext } from '@/context/ChatContext';
import { useFolderController } from '@/components/controller/useFolderController';
import FolderSidebar from '@/components/ui/folder/FolderSidebar';
import { folderRoomApi } from '@/services/folderRoom.service';
import { folderGlobalApi } from '@/services/folderGlobal.service';
import { folderUserApi } from '@/services/folderUser.service';

type PendingMsg = {
  roomId: string;
  messageId: string;
  content: string;
  type: string;
  fileUrl?: string;
  fileName?: string;
  batch?: PendingMsg[];
};

type Props = {
  roomId: string;
  pending: PendingMsg;
  onClose: () => void;
};

export default function FolderSaveWizard({ roomId, pending, onClose }: Props) {
  const { messages, currentUser } = useChatContext();
  const controller = useFolderController({
    roomId,
    currentUserId: String(currentUser?._id || ''),
    messages,
  });

  const updateLocalStorage = (key: string, folderId: string, items: unknown[]) => {
    try {
      const raw = localStorage.getItem(key);
      const map = raw ? JSON.parse(raw) : {};
      map[folderId] = items;
      localStorage.setItem(key, JSON.stringify(map));
    } catch {}
  };

  const [step, setStep] = React.useState<'choose' | 'name' | 'confirm'>('choose');
  const [saveName, setSaveName] = React.useState<string>('');
  const [items, setItems] = React.useState<PendingMsg[]>([]);
  const [names, setNames] = React.useState<string[]>([]);

  React.useEffect(() => {
    const list = Array.isArray(pending.batch) && pending.batch.length ? pending.batch : [pending];
    setItems(list);
    const initial = list.map((it) => {
      const s = it.fileName || (it.content.length < 50 ? it.content : '');
      return s || '';
    });
    setNames(initial);
    const first = initial[0] || '';
    setSaveName(first);
  }, [pending]);

  const handleConfirm = async () => {
    if (!controller.selectedFolderId) return;
    const storageScope =
      controller.selectedScope === 'global'
        ? 'global'
        : controller.selectedScope === 'rooms_shared'
          ? 'rooms_shared'
          : 'room';
    const storageKey =
      storageScope === 'global'
        ? `chatFolderItems:__global__:${String(currentUser?._id || '')}`
        : storageScope === 'rooms_shared'
          ? `chatFolderItems:__rooms_shared__:${String(currentUser?._id || '')}`
          : `chatFolderItems:${roomId}`;
    const eventDetailRoomId =
      storageScope === 'global'
        ? '__global__'
        : storageScope === 'rooms_shared'
          ? `__rooms_shared__:${String(currentUser?._id || '')}`
          : roomId;

    const targets = items.length ? items : [pending];
    for (let i = 0; i < targets.length; i += 1) {
      const it = targets[i];
      const nm = (names[i] ?? '').trim() || undefined;
      const kind = String(it.type || '').toLowerCase();
      const payload = {
        action:
          kind === 'image'
            ? 'updateImage'
            : kind === 'video'
              ? 'updateVideo'
              : kind === 'file'
                ? 'updateFile'
                : 'updateText',
        ownerId: String(currentUser?._id || ''),
        folderId: controller.selectedFolderId,
        itemId: it.messageId,
        name: nm,
        url: ['image', 'video', 'file'].includes(kind) ? it.fileUrl : undefined,
        fileName: it.fileName,
        content: ['image', 'video', 'file'].includes(kind) ? undefined : it.content,
      };

      let json;
      if (storageScope === 'global') {
        json = await folderUserApi(payload);
      } else if (storageScope === 'rooms_shared') {
        json = await folderGlobalApi(payload);
      } else {
        json = await folderRoomApi({ ...payload, roomId });
      }

      if (json && json.success) {
        const arr = Array.isArray(json.items) ? json.items : [];
        updateLocalStorage(storageKey, controller.selectedFolderId, arr);
        try {
          const ev = new CustomEvent('chatFolderItemsChanged', {
            detail: {
              roomId: eventDetailRoomId,
              folderId: controller.selectedFolderId,
              messageId: it.messageId,
            },
          });
          window.dispatchEvent(ev);
        } catch {}
      }
    }
    onClose();
  };

  return (
    <div className="w-full flex flex-col h-full max-h-[80vh]">
      <div className="flex items-center gap-2 px-4 py-3 border-b shrink-0">
        {step === 'name' && (
          <button
            onClick={() => setStep('choose')}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 mr-1"
            title="Quay lại"
          >
            <HiArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
          <HiFolder className="w-4 h-4" />
        </div>
        <h3 className="text-lg font-bold">
          {step === 'choose' ? 'Chọn thư mục' : items.length > 1 ? 'Đặt tên & Lưu (nhiều mục)' : 'Đặt tên & Lưu'}
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 p-2 custom-scrollbar">
        {step === 'choose' && (
          <FolderSidebar
            folders={controller.folders}
            foldersGlobal={controller.foldersGlobal}
            foldersShared={controller.foldersShared}
            itemsMap={controller.itemsMap}
            itemsMapGlobal={controller.itemsMapGlobal}
            itemsMapShared={controller.itemsMapShared}
            expanded={controller.expanded}
            selectedFolderId={controller.selectedFolderId}
            selectedScope={controller.selectedScope}
            onSelect={(id, scope) => {
              controller.onSelectFolder(id, scope);
              if (id) setStep('name');
            }}
            onToggle={controller.toggleNode}
            onCreateRoot={controller.handleCreateRoot}
            openFolderMenuId={controller.openFolderMenuId}
            setOpenFolderMenuId={controller.setOpenFolderMenuId}
            onCreateChild={(nodeId, scope) => controller.onCreateChild(nodeId, scope)}
            onRename={(nodeId, name, scope) => controller.onRenameFolder(nodeId, name, scope)}
            onDelete={(nodeId, name, scope) => controller.onDeleteFolder(nodeId, name, scope)}
            readonly={true}
          />
        )}

        {step === 'name' && (
          <div className="space-y-4 p-2">
            {items.length <= 1 ? (
              <>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Tên hiển thị</p>
                  <input
                    value={saveName}
                    onChange={(e) => {
                      setSaveName(e.target.value);
                      setNames((prev) => {
                        const cp = [...prev];
                        cp[0] = e.target.value;
                        return cp;
                      });
                    }}
                    placeholder="Nhập tên cho tin nhắn/file..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Nội dung gốc</p>
                  <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 break-words max-h-32 overflow-y-auto">
                    {items[0]?.content || items[0]?.fileName || 'Không có nội dung'}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Đặt tên cho từng mục</p>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {items.map((it, idx) => (
                      <div key={it.messageId} className="flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-600 truncate">
                            {it.fileName || it.content || 'Không có nội dung'}
                          </div>
                        </div>
                        <input
                          value={names[idx] ?? ''}
                          onChange={(e) =>
                            setNames((prev) => {
                              const cp = [...prev];
                              cp[idx] = e.target.value;
                              return cp;
                            })
                          }
                          placeholder="Tên hiển thị"
                          className="px-2 py-1 rounded-lg border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium text-sm transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirm}
                disabled={!controller.selectedFolderId}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Lưu vào thư mục
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
