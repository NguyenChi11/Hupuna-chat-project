import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { HiFolder, HiXMark } from 'react-icons/hi2';
import { useFolderController } from '@/components/controller/useFolderController';
import DesktopLayout from '@/components/layout/folder/DesktopLayout';
import MobileLayout from '@/components/layout/folder/MobileLayout';
import FolderCreateModal from '@/components/modal/folder/FolderCreateModal';
import RenameModal from '@/components/modal/folder/RenameModal';
import DeleteModal from '@/components/modal/folder/DeleteModal';

interface GlobalFolderModalProps {
  currentUserId: string;
  onClose: () => void;
}

export default function GlobalFolderModal({ currentUserId, onClose }: GlobalFolderModalProps) {
  const [mounted, setMounted] = useState(false);
  const controller = useFolderController({
    roomId: '__global__sidebar__',
    currentUserId,
    messages: [],
  });

  useEffect(() => {
    setMounted(true);
    controller.setSelectedScope('global');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted || typeof document === 'undefined') return null;

  const modal = (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 border-b-gray-300 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <HiFolder className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Folder dùng chung</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 cursor-pointer">
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          {controller.compact ? (
            <MobileLayout {...controller} onClose={onClose} onlyGlobal />
          ) : (
            <DesktopLayout {...controller} onClose={onClose} onlyGlobal />
          )}
        </div>
      </div>
      {controller.showCreateModal && (
        <FolderCreateModal
          isOpen={controller.showCreateModal}
          folders={controller.foldersGlobal}
          defaultParentId={controller.createParentId || undefined}
          lockParent={!!controller.createParentId}
          onClose={() => {
            controller.setShowCreateModal(false);
            controller.setCreateParentId(null);
          }}
          onCreate={(name: string, parentId?: string) => {
            controller.createFolder(name, parentId);
            controller.setShowCreateModal(false);
            controller.setCreateParentId(null);
          }}
        />
      )}
      <RenameModal
        open={!!controller.renameTarget}
        name={controller.renameInput}
        onChangeName={(v) => controller.setRenameInput(v)}
        onCancel={() => controller.setRenameTarget(null)}
        onSave={controller.saveRename}
      />
      <DeleteModal
        open={!!controller.deleteTarget}
        name={controller.deleteTarget?.name || ''}
        onCancel={() => controller.setDeleteTarget(null)}
        onConfirm={controller.confirmDeleteFolder}
      />
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
}
