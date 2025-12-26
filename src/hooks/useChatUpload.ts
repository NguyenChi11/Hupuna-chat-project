'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Message, MessageCreate, MessageType } from '@/types/Message';
import { ChatItem, GroupConversation } from '@/types/Group';
import { User } from '@/types/User';
import { uploadFileWithProgress, type UploadResponse } from '@/utils/uploadHelper';
import { readMessagesApi } from '@/fetch/messages';
import { setProgress, getProgress, clearProgress } from '@/lib/uploadStore';

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
  const sortMessagesAsc = (list: Message[]) => {
    const safeNum = (t: unknown) => {
      const n = Number(t);
      return Number.isFinite(n) ? n : 0;
    };
    const cmp = (a: Message, b: Message) => {
      const ta = safeNum(a.timestamp);
      const tb = safeNum(b.timestamp);
      if (ta !== tb) return ta - tb;
      const ia = String(a._id || '');
      const ib = String(b._id || '');
      if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
      if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
      return ia.localeCompare(ib);
    };
    return list.slice().sort(cmp);
  };
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>({});
  const activeSourcesRef = useRef<Record<string, EventSource>>({});

  type PendingItem = {
    tempId: string;
    uploadId: string;
    type: MessageType;
    fileName: string;
    caption?: string;
    fileUrl: string;
    percent?: number;
  };
  const pendingKey = `pendingUploads:${roomId}`;
  const readPending = (): PendingItem[] => {
    try {
      const raw = localStorage.getItem(pendingKey);
      return raw ? (JSON.parse(raw) as PendingItem[]) : [];
    } catch {
      return [];
    }
  };
  const writePending = (arr: PendingItem[]) => {
    try {
      localStorage.setItem(pendingKey, JSON.stringify(arr));
    } catch {}
  };
  const addPending = (item: PendingItem) => {
    const arr = readPending();
    const exists = arr.some((x) => x.tempId === item.tempId);
    const next = exists ? arr.map((x) => (x.tempId === item.tempId ? item : x)) : [...arr, item];
    writePending(next);
  };
  const setPendingPercent = (tempId: string, percent: number) => {
    const arr = readPending();
    const next = arr.map((x) => (x.tempId === tempId ? { ...x, percent } : x));
    writePending(next);
  };
  const removePending = (tempId: string) => {
    const arr = readPending();
    const next = arr.filter((x) => x.tempId !== tempId);
    writePending(next);
  };

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
      if (batchId) {
        formData.append('batchId', batchId);
      }

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

      setMessages((prev) => sortMessagesAsc([...prev, tempMsg]));
      setUploadingFiles((prev) => ({ ...prev, [tempId]: 0 }));
      setProgress(tempId, 0);
      addPending({
        tempId,
        uploadId,
        type,
        fileName: file.name,
        caption,
        fileUrl: tempMsg.fileUrl || '',
        percent: 0,
      });
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
          setProgress(tempId, displayed);
          setPendingPercent(tempId, displayed);
        };
        if (es) {
          activeSourcesRef.current[uploadId] = es;
          es.onmessage = (ev) => {
            try {
              const payload = JSON.parse((ev as MessageEvent).data) as { percent?: number; done?: boolean };
              const percent = typeof payload.percent === 'number' ? payload.percent : 0;
              updatePercent(percent);
              const done = !!payload.done;
              if (done) {
                es.close();
                delete activeSourcesRef.current[uploadId];
              }
            } catch {}
          };
          es.onerror = () => {
            try {
              es.close();
              delete activeSourcesRef.current[uploadId];
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
                batchId,
              };
              controller?.postMessage({ type: 'UPLOAD', uploadId, fields });
            });
            if (res.success) {
              success = true;
              const finalMsg = res.data;
              setMessages((prev) => prev.filter((m) => m._id !== tempId));
              const socketData: MessageCreate = {
                ...finalMsg,
                _id: res._id || res.data._id || Date.now().toString(),
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
          if (es) delete activeSourcesRef.current[uploadId];
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
                setProgress(tempId, displayed);
                setPendingPercent(tempId, displayed);
              },
            )) as UploadResponse;
            if (res.success) {
              success = true;
              const finalMsg = res.data;
              setMessages((prev) => prev.filter((m) => m._id !== tempId));
              const socketData: MessageCreate = {
                ...finalMsg,
                _id: res._id || res.data._id || Date.now().toString(),
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
      clearProgress(tempId);
      removePending(tempId);
    },
    [roomId, currentUser, isGroup, selectedChat, sendMessageProcess, setMessages, onScrollBottom],
  );

  useEffect(() => {
    const pending = readPending();
    if (pending.length === 0) return;
    pending.forEach((item) => {
      setMessages((prev) => {
        const exists = prev.some((m) => m._id === item.tempId);
        if (exists) return prev;
        const msg: Message & { isSending?: boolean } = {
          _id: item.tempId,
          roomId,
          sender: currentUser._id,
          senderModel: currentUser,
          type: item.type,
          fileUrl: item.fileUrl,
          fileName: item.fileName,
          timestamp: Date.now(),
          content: item.caption,
          isSending: true,
        };
        return sortMessagesAsc([...prev, msg]);
      });
      const p = getProgress(item.tempId);
      const percent = p >= 0 ? p : item.percent || 0;
      setUploadingFiles((prev) => ({ ...prev, [item.tempId]: Math.min(percent, 95) }));
      if (!activeSourcesRef.current[item.uploadId]) {
        try {
          const es = new EventSource(`/api/upload/progress?id=${encodeURIComponent(item.uploadId)}`);
          activeSourcesRef.current[item.uploadId] = es;
          es.onmessage = (ev) => {
            try {
              const payload = JSON.parse((ev as MessageEvent).data) as { percent?: number; done?: boolean };
              const percentN = typeof payload.percent === 'number' ? payload.percent : 0;
              const displayed = Math.min(percentN, 95);
              setUploadingFiles((prev) => ({ ...prev, [item.tempId]: displayed }));
              setProgress(item.tempId, displayed);
              setPendingPercent(item.tempId, displayed);
              const done = !!payload.done;
              if (done) {
                es.close();
                delete activeSourcesRef.current[item.uploadId];
                setUploadingFiles((prev) => {
                  const next = { ...prev };
                  delete next[item.tempId];
                  return next;
                });
                setMessages((prev) => prev.filter((m) => m._id !== item.tempId));
                clearProgress(item.tempId);
                removePending(item.tempId);
                (async () => {
                  try {
                    const resp = await readMessagesApi(roomId, {
                      limit: 1,
                      sortOrder: 'desc',
                      extraFilters: { uploadId: item.uploadId },
                    });
                    const list = (resp?.data as Message[]) || [];
                    const match = list[0];
                    if (match) {
                      setMessages((prev) => {
                        const exists = prev.some((mm) => String(mm._id) === String(match._id));
                        return exists ? prev : [...prev, match];
                      });
                    }
                  } catch {}
                })();
              }
            } catch {}
          };
          es.onerror = () => {
            try {
              es.close();
              delete activeSourcesRef.current[item.uploadId];
            } catch {}
          };
        } catch {}
      }
    });
    setTimeout(() => {
      const again = readPending();
      again.forEach((item) => {
        setMessages((prev) => {
          const exists = prev.some((m) => m._id === item.tempId);
          if (exists) return prev;
          const msg: Message & { isSending?: boolean } = {
            _id: item.tempId,
            roomId,
            sender: currentUser._id,
            senderModel: currentUser,
            type: item.type,
            fileUrl: item.fileUrl,
            fileName: item.fileName,
            timestamp: Date.now(),
            content: item.caption,
            isSending: true,
          };
          return sortMessagesAsc([...prev, msg]);
        });
      });
    }, 600);
    setTimeout(() => {
      const again = readPending();
      again.forEach((item) => {
        setMessages((prev) => {
          const exists = prev.some((m) => m._id === item.tempId);
          if (exists) return prev;
          const msg: Message & { isSending?: boolean } = {
            _id: item.tempId,
            roomId,
            sender: currentUser._id,
            senderModel: currentUser,
            type: item.type,
            fileUrl: item.fileUrl,
            fileName: item.fileName,
            timestamp: Date.now(),
            content: item.caption,
            isSending: true,
          };
          return sortMessagesAsc([...prev, msg]);
        });
      });
    }, 1500);
    return () => {
      Object.values(activeSourcesRef.current).forEach((es) => {
        try {
          es.close();
        } catch {}
      });
      activeSourcesRef.current = {};
    };
  }, [roomId, currentUser, setMessages]);

  useEffect(() => {
    const onSwMessage = async (e: MessageEvent) => {
      const data = e.data as { type?: string; uploadId?: string; response?: UploadResponse; message?: string };
      if (!data || !data.type) return;
      const id = String(data.uploadId || '');
      if (!id) return;
      const arr = readPending();
      const item = arr.find((x) => x.uploadId === id);
      if (!item) return;
      if (data.type === 'UPLOAD_COMPLETE' && data.response) {
        const res = data.response as UploadResponse;
        if (res.success) {
          setUploadingFiles((prev) => {
            const next = { ...prev };
            delete next[item.tempId];
            return next;
          });
          setMessages((prev) => prev.filter((m) => m._id !== item.tempId));
          clearProgress(item.tempId);
          removePending(item.tempId);
          const finalMsg = res.data;
          const socketData: MessageCreate = {
            ...finalMsg,
            _id: finalMsg._id || Date.now().toString(),
            roomId,
            sender: currentUser._id,
            senderName: currentUser.name,
            isGroup,
            receiver: isGroup ? null : '_id' in selectedChat ? (selectedChat as User)._id : '',
            members: isGroup ? (selectedChat as GroupConversation).members : [],
            type: item.type,
            timestamp: Date.now(),
            content: item.caption,
            batchId: (finalMsg as unknown as { batchId?: string }).batchId,
          } as unknown as MessageCreate;
          try {
            await sendMessageProcess(socketData);
          } catch {}
        } else {
          setUploadingFiles((prev) => {
            const next = { ...prev };
            delete next[item.tempId];
            return next;
          });
          setMessages((prev) => prev.filter((m) => m._id !== item.tempId));
          clearProgress(item.tempId);
          removePending(item.tempId);
        }
      } else if (data.type === 'UPLOAD_FAILED') {
        setUploadingFiles((prev) => {
          const next = { ...prev };
          delete next[item.tempId];
          return next;
        });
        setMessages((prev) => prev.filter((m) => m._id !== item.tempId));
        clearProgress(item.tempId);
        removePending(item.tempId);
      }
    };
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', onSwMessage);
    }
    return () => {
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.removeEventListener('message', onSwMessage);
      }
    };
  }, [roomId, currentUser, selectedChat, isGroup, sendMessageProcess, setMessages]);

  return {
    uploadingFiles,
    handleUploadAndSend,
  };
}
