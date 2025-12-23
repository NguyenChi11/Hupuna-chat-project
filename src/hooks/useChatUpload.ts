'use client';

import { useCallback, useState } from 'react';
import { Message, MessageCreate, MessageType } from '@/types/Message';
import { ChatItem, GroupConversation } from '@/types/Group';
import { User } from '@/types/User';
import { uploadFileWithProgress, type UploadResponse } from '@/utils/uploadHelper';

let swReadyPromise: Promise<ServiceWorkerRegistration> | null = null;
let swListenerAttached = false;
const pendingUploads = new Map<
  string,
  {
    resolve: (res: UploadResponse) => void;
    reject: (err: unknown) => void;
  }
>();

async function ensureServiceWorker() {
  if (typeof window === 'undefined') return null;
  if (!('serviceWorker' in navigator)) return null;
  if (!swReadyPromise) {
    swReadyPromise = navigator.serviceWorker
      .register('/sw-upload.js', { scope: '/' })
      .then(() => navigator.serviceWorker.ready);
  }
  const reg = await swReadyPromise.catch(() => null);
  if (reg && !swListenerAttached) {
    swListenerAttached = true;
    navigator.serviceWorker.addEventListener('message', (e: MessageEvent) => {
      const data = e.data as { type?: string; uploadId?: string; response?: UploadResponse; message?: string };
      if (!data || !data.type) return;
      const id = String(data.uploadId || '');
      const entry = pendingUploads.get(id);
      if (!entry) return;
      if (data.type === 'UPLOAD_COMPLETE' && data.response) {
        entry.resolve(data.response);
        pendingUploads.delete(id);
      } else if (data.type === 'UPLOAD_FAILED') {
        entry.reject(new Error(data.message || 'Upload failed'));
        pendingUploads.delete(id);
      }
    });
  }
  return reg;
}

interface UseChatUploadParams {
  roomId: string;
  currentUser: User;
  selectedChat: ChatItem;
  isGroup: boolean;
  sendMessageProcess: (msgData: MessageCreate) => Promise<void>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  onScrollBottom?: () => void;
}

export function useChatUpload({
  roomId,
  currentUser,
  selectedChat,
  isGroup,
  sendMessageProcess,
  setMessages,
  onScrollBottom,
}: UseChatUploadParams) {
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>({});

  const handleUploadAndSend = useCallback(
    async (
      file: File,
      type: MessageType,
      caption?: string,
      replyToMessageId?: string,
      mentions?: string[],
      senderName?: string,
      batchId?: string,
    ) => {
      const sanitizeName = (name: string) => {
        return name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\s+/g, '_')
          .replace(/[^a-zA-Z0-9_]/g, '');
      };

      const uploadId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('roomId', roomId);
      formData.append('sender', currentUser._id);
      if (!isGroup && '_id' in selectedChat) {
        formData.append('receiver', selectedChat._id);
      }
      formData.append('type', type);
      formData.append('fileName', file.name);

      let folderNameStr = '';
      if (isGroup) {
        folderNameStr = `Group__${sanitizeName((selectedChat as GroupConversation).name)}`;
      } else {
        const myName = sanitizeName(currentUser.name || 'Me');
        const partnerBaseName = '_id' in selectedChat && 'name' in selectedChat ? selectedChat.name || 'User' : 'User';
        const partnerName = sanitizeName(partnerBaseName);
        const names = [myName, partnerName].sort();
        folderNameStr = `${names[0]}__${names[1]}`;
      }
      formData.append('folderName', folderNameStr);

      const tempMsg: Message & { isSending?: boolean } = {
        _id: tempId,
        roomId,
        sender: currentUser._id,
        senderModel: currentUser,
        batchId,
        fileUrl: URL.createObjectURL(file),
        fileName: file.name,
        type,
        timestamp: Date.now(),
        content: caption,
        isSending: true,
      };

      setMessages((prev) => [...prev, tempMsg]);
      setUploadingFiles((prev) => ({ ...prev, [tempId]: 0 }));
      try {
        onScrollBottom?.();
      } catch {}

      let success = false;
      let lastMessage = '';
      const useSW = !!(await ensureServiceWorker());
      if (useSW) {
        const es =
          typeof window !== 'undefined'
            ? new EventSource(`/api/upload/progress?id=${encodeURIComponent(uploadId)}`)
            : null;
        const updatePercent = (p: number) => {
          const displayed = Math.min(p, 95);
          setUploadingFiles((prev) => ({ ...prev, [tempId]: displayed }));
        };
        if (es) {
          es.onmessage = (ev) => {
            try {
              const payload = JSON.parse((ev as MessageEvent).data) as { percent?: number; done?: boolean };
              const percent = typeof payload.percent === 'number' ? payload.percent : 0;
              updatePercent(percent);
              const done = !!payload.done;
              if (done) {
                es.close();
              }
            } catch {}
          };
          es.onerror = () => {
            try {
              es.close();
            } catch {}
          };
        }
        for (let attempt = 0; attempt < 2 && !success; attempt++) {
          try {
            const res = await new Promise<UploadResponse>((resolve, reject) => {
              pendingUploads.set(uploadId, { resolve, reject });
              const controller = navigator.serviceWorker.controller;
              const fields: Record<string, unknown> = {
                file,
                roomId,
                sender: currentUser._id,
                receiver: !isGroup && '_id' in selectedChat ? selectedChat._id : '',
                type,
                fileName: file.name,
                folderName: folderNameStr,
              };
              controller?.postMessage({ type: 'UPLOAD', uploadId, fields });
            });
            if (res.success) {
              success = true;
              const finalMsg = res.data;
              setMessages((prev) => prev.filter((m) => m._id !== tempId));
              const socketData: MessageCreate = {
                ...finalMsg,
                _id: res.data._id || Date.now().toString(),
                roomId,
                sender: currentUser._id,
                senderName: senderName || currentUser.name,
                isGroup,
                receiver: isGroup ? null : '_id' in selectedChat ? selectedChat._id : '',
                members: isGroup ? (selectedChat as GroupConversation).members : [],
                type,
                timestamp: Date.now(),
                content: caption,
                replyToMessageId,
                mentions,
                batchId,
              } as unknown as MessageCreate;
              await sendMessageProcess(socketData);
            } else {
              lastMessage = res.message || 'Không xác định';
            }
          } catch (e) {
            lastMessage = (e as Error)?.message || String(e) || 'Không xác định';
          }
        }
        try {
          es?.close();
        } catch {}
      } else {
        for (let attempt = 0; attempt < 2 && !success; attempt++) {
          try {
            const res = (await uploadFileWithProgress(
              `/api/upload?uploadId=${uploadId}`,
              formData,
              (clientRawPercent) => {
                const displayed = Math.min(clientRawPercent, 95);
                setUploadingFiles((prev) => ({ ...prev, [tempId]: displayed }));
              },
            )) as UploadResponse;
            if (res.success) {
              success = true;
              const finalMsg = res.data;
              setMessages((prev) => prev.filter((m) => m._id !== tempId));
              const socketData: MessageCreate = {
                ...finalMsg,
                _id: res.data._id || Date.now().toString(),
                roomId,
                sender: currentUser._id,
                senderName: senderName || currentUser.name,
                isGroup,
                receiver: isGroup ? null : '_id' in selectedChat ? selectedChat._id : '',
                members: isGroup ? (selectedChat as GroupConversation).members : [],
                type,
                timestamp: Date.now(),
                content: caption,
                replyToMessageId,
                mentions,
                batchId,
              } as unknown as MessageCreate;
              await sendMessageProcess(socketData);
            } else {
              lastMessage = res.message || 'Không xác định';
            }
          } catch (e) {
            lastMessage = (e as Error)?.message || String(e) || 'Không xác định';
          }
        }
      }

      if (!success) {
        setMessages((prev) => prev.filter((m) => m._id !== tempId));
        try {
          alert(`Tải lên thất bại: ${file.name}. Lý do: ${lastMessage}`);
        } catch {}
      }

      setUploadingFiles((prev) => {
        const newState = { ...prev };
        delete newState[tempId];
        return newState;
      });
    },
    [roomId, currentUser, isGroup, selectedChat, sendMessageProcess, setMessages, onScrollBottom],
  );

  return {
    uploadingFiles,
    handleUploadAndSend,
  };
}
