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

  React.useEffect(() => {
    const s = pending.fileName || (pending.content.length < 50 ? pending.content : '');
    setSaveName(s || '');
  }, [pending]);

  const handleConfirm = async () => {
    if (!controller.selectedFolderId) return;
    const name = saveName?.trim() || undefined;
    const kind = String(pending.type || '').toLowerCase();

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
      itemId: pending.messageId,
      name,
      url: ['image', 'video', 'file'].includes(kind) ? pending.fileUrl : undefined,
      fileName: pending.fileName,
      content: ['image', 'video', 'file'].includes(kind) ? undefined : pending.content,
    };

    let json;
    let storageKey = '';
    let eventDetailRoomId = '';

    if (controller.selectedScope === 'global') {
      // User personal folders -> folderUserApi
      json = await folderUserApi(payload);
      storageKey = `chatFolderItems:__global__:${String(currentUser?._id || '')}`;
      eventDetailRoomId = '__global__';
    } else if (controller.selectedScope === 'rooms_shared') {
      // Global shared folders -> folderGlobalApi
      json = await folderGlobalApi(payload);
      storageKey = `chatFolderItems:__rooms_shared__:${String(currentUser?._id || '')}`;
      eventDetailRoomId = `__rooms_shared__:${String(currentUser?._id || '')}`;
    } else {
      // Room folders -> folderRoomApi
      json = await folderRoomApi({ ...payload, roomId });
      storageKey = `chatFolderItems:${roomId}`;
      eventDetailRoomId = roomId;
    }

    if (json && json.success) {
      const arr = Array.isArray(json.items) ? json.items : [];
      updateLocalStorage(storageKey, controller.selectedFolderId, arr);

      try {
        const ev = new CustomEvent('chatFolderItemsChanged', {
          detail: {
            roomId: eventDetailRoomId,
            folderId: controller.selectedFolderId,
            messageId: pending.messageId,
          },
        });
        window.dispatchEvent(ev);
      } catch {}
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
        <h3 className="text-lg font-bold">{step === 'choose' ? 'Chọn thư mục' : 'Đặt tên & Lưu'}</h3>
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
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Tên hiển thị</p>
              <input
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder="Nhập tên cho tin nhắn/file..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Nội dung gốc</p>
              <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 break-words max-h-32 overflow-y-auto">
                {pending.content || pending.fileName || 'Không có nội dung'}
              </div>
            </div>

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
