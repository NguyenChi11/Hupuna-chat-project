'use client';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineSearch, HiPlus } from 'react-icons/hi';

type Scope = 'user' | 'global';
type Folder = { id: string; name: string };
type Entry = {
  key: string;
  value: string;
  att?: { type: 'image' | 'video' | 'file'; name: string; size: number; dataUrl?: string }[];
};

const keyFolders = (scope: Scope) => (scope === 'user' ? 'flashMsg:user:folders' : 'flashMsg:global:folders');
const keyKV = (scope: Scope, fid: string) =>
  scope === 'user' ? `flashMsg:user:kv:${fid}` : `flashMsg:global:kv:${fid}`;

export default function FlashMessagePage() {
  const router = useRouter();
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const [scope, setScope] = useState<Scope>('user');
  const [folders, setFolders] = useState<Folder[]>([]);
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [search, setSearch] = useState('');
  const [newTopicMode, setNewTopicMode] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [modalKey, setModalKey] = useState('');
  const [modalValue, setModalValue] = useState('');
  const [modalFiles, setModalFiles] = useState<
    { type: 'image' | 'video' | 'file'; name: string; size: number; dataUrl?: string }[]
  >([]);
  const [accountName, setAccountName] = useState('');
  const [accountAvatar, setAccountAvatar] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [folderCounts, setFolderCounts] = useState<Record<string, number>>({});
  const activeFolder = useMemo(() => folders.find((f) => f.id === activeFolderId) || null, [folders, activeFolderId]);
  const filteredEntries = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return entries;
    return entries.filter((e) => e.key.toLowerCase().includes(s) || e.value.toLowerCase().includes(s));
  }, [entries, search]);
  const readFolders = (sc: Scope): Folder[] => {
    try {
      const raw = localStorage.getItem(keyFolders(sc));
      const arr = raw ? (JSON.parse(raw) as Folder[]) : [];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  };
  const writeFolders = (sc: Scope, arr: Folder[]) => {
    try {
      localStorage.setItem(keyFolders(sc), JSON.stringify(arr));
    } catch {}
  };
  const readEntries = (sc: Scope, fid: string): Entry[] => {
    try {
      const raw = localStorage.getItem(keyKV(sc, fid));
      const arr = raw ? (JSON.parse(raw) as Entry[]) : [];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  };
  const writeEntries = (sc: Scope, fid: string, arr: Entry[]) => {
    try {
      localStorage.setItem(keyKV(sc, fid), JSON.stringify(arr));
    } catch {}
  };
  const apiCall = async (payload: Record<string, unknown>) => {
    const res = await fetch('/api/flash-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    try {
      return await res.json();
    } catch {
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const json = await apiCall({ action: 'listFolders', scope });
      const arr = Array.isArray(json?.data) ? (json.data as Array<Record<string, unknown>>) : [];
      let mapped = arr.map((f) => ({ id: String(f['_id'] || ''), name: String(f['name'] || '') })) as Folder[];
      const initialCounts: Record<string, number> = Object.fromEntries(
        arr.map((f) => [String(f['_id'] || ''), Array.isArray(f['entries']) ? (f['entries'] as unknown[]).length : 0]),
      );
      if (mapped.length === 0) {
        const localFs = readFolders(scope);
        for (const lf of localFs) {
          const created = await apiCall({ action: 'createFolder', scope, name: lf.name });
          const newId = created?._id ? String(created._id) : null;
          if (!newId) continue;
          const localEs = readEntries(scope, lf.id);
          for (const e of localEs) {
            await apiCall({
              action: 'upsertEntry',
              scope,
              folderId: newId,
              key: e.key,
              value: e.value,
              att: e.att || [],
            });
          }
        }
        const json2 = await apiCall({ action: 'listFolders', scope });
        const arr2 = Array.isArray(json2?.data) ? (json2.data as Array<Record<string, unknown>>) : [];
        mapped = arr2.map((f) => ({ id: String(f['_id'] || ''), name: String(f['name'] || '') })) as Folder[];
        Object.assign(
          initialCounts,
          Object.fromEntries(
            arr2.map((f) => [
              String(f['_id'] || ''),
              Array.isArray(f['entries']) ? (f['entries'] as unknown[]).length : 0,
            ]),
          ),
        );
      }
      if (!mounted) return;
      setFolders(mapped);
      setFolderCounts(initialCounts);
      const firstId = mapped[0]?.id || null;
      setActiveFolderId(firstId);
      if (firstId) {
        const ents = await apiCall({ action: 'listEntries', scope, folderId: firstId });
        const list = Array.isArray(ents?.data) ? (ents.data as Entry[]) : [];
        if (mounted) {
          setEntries(list);
          setFolderCounts((prev) => ({ ...prev, [firstId]: list.length }));
        }
      } else {
        setEntries([]);
      }
    };
    void load();
    return () => {
      mounted = false;
    };
  }, [scope]);

  useEffect(() => {
    if (!activeFolderId) {
      setEntries([]);
      return;
    }
    let mounted = true;
    const load = async () => {
      const json = await apiCall({ action: 'listEntries', scope, folderId: activeFolderId });
      const list = Array.isArray(json?.data) ? (json.data as Entry[]) : [];
      if (mounted) {
        setEntries(list);
        setFolderCounts((prev) => ({ ...prev, [activeFolderId]: list.length }));
      }
    };
    void load();
    return () => {
      mounted = false;
    };
  }, [activeFolderId]);
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch('/api/account/summary', { credentials: 'include' });
        const json = await res.json();
        if (mounted && json?.success) {
          const name = String(json.account?.name || json.account?.username || '').trim();
          const avatar = String(json.account?.avatar || '').trim();
          setAccountName(name);
          setAccountAvatar(avatar);
        }
      } catch {}
    };
    void load();
    return () => {
      mounted = false;
    };
  }, []);

  const addFolder = async () => {
    const name = newFolderName.trim();
    if (!name) return;
    const json = await apiCall({ action: 'createFolder', scope, name });
    const id = json?._id ? String(json._id) : `fld_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const next: Folder[] = [...folders, { id, name }];
    setFolders(next);
    setActiveFolderId(id);
    setFolderCounts((prev) => ({ ...prev, [id]: 0 }));
    setNewFolderName('');
    setEntries([]);
  };

  const renameFolder = async (id: string, name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    await apiCall({ action: 'renameFolder', scope, folderId: id, name: trimmed });
    const next = folders.map((f) => (f.id === id ? { ...f, name: trimmed } : f));
    setFolders(next);
  };

  const deleteFolder = async (id: string) => {
    await apiCall({ action: 'deleteFolder', scope, folderId: id });
    const next = folders.filter((f) => f.id !== id);
    setFolders(next);
    setFolderCounts((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
    if (activeFolderId === id) {
      const firstId = next[0]?.id || null;
      setActiveFolderId(firstId);
      if (firstId) {
        const json = await apiCall({ action: 'listEntries', scope, folderId: firstId });
        const list = Array.isArray(json?.data) ? (json.data as Entry[]) : [];
        setEntries(list);
        setFolderCounts((prev) => ({ ...prev, [firstId]: list.length }));
      } else {
        setEntries([]);
      }
    }
  };

  const addEntry = async () => {
    if (!activeFolderId) return;
    const k = newKey.trim();
    const v = newValue.trim();
    if (!k || !v) return;
    await apiCall({ action: 'upsertEntry', scope, folderId: activeFolderId, key: k, value: v, att: [] });
    const exists = entries.some((e) => e.key === k);
    const next = exists
      ? entries.map((e) => (e.key === k ? { key: k, value: v, att: e.att ?? [] } : e))
      : [...entries, { key: k, value: v, att: [] }];
    setEntries(next);
    setFolderCounts((prev) => ({ ...prev, [activeFolderId]: next.length }));
    setNewKey('');
    setNewValue('');
  };

  const updateEntry = async (key: string, value: string) => {
    if (!activeFolderId) return;
    const att = entries.find((e) => e.key === key)?.att ?? [];
    await apiCall({ action: 'upsertEntry', scope, folderId: activeFolderId, key, value, att });
    const next = entries.map((e) => (e.key === key ? { key, value, att: att } : e));
    setEntries(next);
    setFolderCounts((prev) => ({ ...prev, [activeFolderId]: next.length }));
  };

  const deleteEntry = async (key: string) => {
    if (!activeFolderId) return;
    await apiCall({ action: 'deleteEntry', scope, folderId: activeFolderId, key });
    const next = entries.filter((e) => e.key !== key);
    setEntries(next);
    setFolderCounts((prev) => ({ ...prev, [activeFolderId]: next.length }));
  };

  const handleOpenCreateModal = () => {
    if (!activeFolderId) return;
    setModalKey('');
    setModalValue('');
    setModalFiles([]);
    setIsEditMode(false);
    setEditKey(null);
    setShowCreateModal(true);
  };
  const handleOpenEditModal = (entry: Entry) => {
    if (!activeFolderId) return;
    setModalKey(entry.key);
    setModalValue(entry.value);
    setModalFiles(entry.att ?? []);
    setIsEditMode(true);
    setEditKey(entry.key);
    setShowCreateModal(true);
  };
  const addEntryFromModal = async () => {
    if (!activeFolderId) return;
    const k = modalKey.trim();
    const v = modalValue.trim();
    if (!k || !v) return;
    await apiCall({ action: 'upsertEntry', scope, folderId: activeFolderId, key: k, value: v, att: modalFiles });
    const exists = entries.some((e) => e.key === k);
    const next = exists
      ? entries.map((e) => (e.key === k ? { key: k, value: v, att: modalFiles } : e))
      : [...entries, { key: k, value: v, att: modalFiles }];
    setEntries(next);
    setShowCreateModal(false);
  };
  const editEntryFromModal = async () => {
    if (!activeFolderId || !isEditMode || !editKey) return;
    const k = modalKey.trim();
    const v = modalValue.trim();
    if (!k || !v) return;
    await apiCall({ action: 'upsertEntry', scope, folderId: activeFolderId, key: k, value: v, att: modalFiles });
    const next = entries.map((e) => (e.key === k ? { key: k, value: v, att: modalFiles } : e));
    setEntries(next);
    setShowCreateModal(false);
    setIsEditMode(false);
    setEditKey(null);
  };
  const removeModalFile = (idx: number) => {
    setModalFiles((prev) => prev.filter((_, i) => i !== idx));
  };
  const handleModalFilesChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = Array.from(e.target.files || []);
    const out: { type: 'image' | 'video' | 'file'; name: string; size: number; dataUrl?: string }[] = [];
    for (const f of files) {
      const kind = f.type.startsWith('image') ? 'image' : f.type.startsWith('video') ? 'video' : 'file';
      let dataUrl: string | undefined;
      if (kind === 'image') {
        try {
          dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result || ''));
            reader.onerror = () => reject(new Error('read error'));
            reader.readAsDataURL(f);
          });
        } catch {}
      } else if (kind === 'video') {
        try {
          dataUrl = await new Promise<string | undefined>((resolve) => {
            const url = URL.createObjectURL(f);
            const video = document.createElement('video');
            video.src = url;
            video.preload = 'metadata';
            video.muted = true;
            (video as unknown as { playsInline: boolean }).playsInline = true;
            const cleanup = () => {
              try {
                URL.revokeObjectURL(url);
              } catch {}
            };
            video.onloadedmetadata = () => {
              const t = Math.min(1, Math.max(0.05, (video.duration || 1) * 0.05));
              const onSeeked = () => {
                try {
                  const w = 224;
                  const ratio = video.videoWidth && video.videoHeight ? video.videoHeight / video.videoWidth : 9 / 16;
                  const h = Math.round(w * ratio);
                  const canvas = document.createElement('canvas');
                  canvas.width = w;
                  canvas.height = h;
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    ctx.drawImage(video, 0, 0, w, h);
                    resolve(canvas.toDataURL('image/png'));
                  } else {
                    resolve(undefined);
                  }
                } catch {
                  resolve(undefined);
                } finally {
                  cleanup();
                }
                video.removeEventListener('seeked', onSeeked);
              };
              video.addEventListener('seeked', onSeeked);
              try {
                video.currentTime = t;
              } catch {
                onSeeked();
              }
            };
            video.onerror = () => {
              cleanup();
              resolve(undefined);
            };
          });
        } catch {}
      }
      out.push({ type: kind, name: f.name, size: f.size, dataUrl });
    }
    setModalFiles(out);
  };

  return (
    <div className="min-h-screen bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow border border-slate-200/80 overflow-hidden">
              {/* Header profile */}
              <div className="p-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-semibold text-lg shadow-sm">
                    H
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Flash-Chat Hupuna</div>
                    <div className="text-xs text-slate-500 mt-0.5">Quản lý phản hồi nhanh</div>
                  </div>
                </div>
                <button
                  onClick={() => router.push('/home')}
                  className="mt-3 px-4 cursor-pointer py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 border border-indigo-200 rounded-lg transition-all duration-150 shadow-sm hover:shadow"
                >
                  Về trang chủ
                </button>
              </div>

              {/* Scope toggle */}
              <div className="px-5 pt-5 pb-2">
                <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setScope('user')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                      scope === 'user' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    Tài khoản
                  </button>
                  <button
                    onClick={() => setScope('global')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                      scope === 'global' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    Nhiều tài khoản
                  </button>
                </div>
              </div>

              {/* Add topic button */}
              <div className="px-5 pb-5">
                <button
                  onClick={() => setNewTopicMode((v) => !v)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-medium rounded-xl border border-slate-200 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow-sm">
                    <HiPlus className="w-3.5 h-3.5" />
                  </div>
                  Thêm chủ đề
                </button>

                {newTopicMode && (
                  <div className="mt-3 flex gap-2">
                    <input
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      placeholder="Tên chủ đề mới..."
                      className="flex-1 px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 outline-none transition"
                    />
                    <button
                      onClick={addFolder}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium rounded-xl transition"
                    >
                      Tạo
                    </button>
                  </div>
                )}
              </div>

              {/* Folder list */}
              <div className="px-5 pb-6">
                <div className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-wide">Chủ đề của bạn</div>
                <div className="max-h-[20rem] overflow-auto custom-scrollbar">
                  {folders.map((f) => {
                    const count = f.id === activeFolderId ? entries.length : (folderCounts[f.id] ?? 0);
                    const active = activeFolderId === f.id;
                    return (
                      <button
                        key={f.id}
                        onClick={() => {
                          setActiveFolderId(f.id);
                          try {
                            const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
                            if (w < 1024) {
                              mainSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          } catch {}
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left transition-all ${
                          active
                            ? 'bg-blue-50/80 text-blue-700 font-medium'
                            : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                        }`}
                      >
                        <span className="truncate">{f.name}</span>
                        <span
                          className={`min-w-[1.8rem] text-center text-xs font-medium px-2 py-0.5 rounded-full ${
                            active ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}

                  {folders.length === 0 && (
                    <div className="px-4 py-3 text-sm text-slate-400 italic">Chưa có chủ đề nào</div>
                  )}
                </div>
              </div>

              {/* Current account */}
              <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  {accountAvatar ? (
                    <Image
                      width={40}
                      height={40}
                      src={accountAvatar}
                      alt={accountName || 'Avatar'}
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow-sm">
                      {(accountName || '—').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="font-medium text-slate-800 truncate">{accountName || 'Chưa đăng nhập'}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow border border-slate-200/80 overflow-hidden">
              {/* Header */}
              <div
                ref={mainSectionRef}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-b border-slate-100"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-base font-medium">
                      !
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {activeFolder ? activeFolder.name : 'Chọn một chủ đề'}
                    </h2>
                  </div>
                  {activeFolder && <p className="text-xs text-slate-500 mt-1">{entries.length} tin nhắn mẫu</p>}
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative min-w-[240px]">
                    <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Tìm kiếm tin nhắn..."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 outline-none transition"
                    />
                  </div>

                  {activeFolder && (
                    <button
                      onClick={handleOpenCreateModal}
                      className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-medium rounded-xl shadow-sm transition"
                    >
                      <HiPlus className="w-4 h-4" />
                      Tạo mới
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {activeFolder ? (
                  filteredEntries.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                      {filteredEntries.map((e) => (
                        <div
                          key={e.key}
                          className="rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="font-medium text-slate-800 truncate">{e.key}</div>
                            <div className="flex gap-2 shrink-0">
                              <button
                                onClick={() => handleOpenEditModal(e)}
                                className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 rounded-lg transition"
                              >
                                Sửa
                              </button>
                              <button
                                onClick={() => {
                                  const ok = window.confirm('Xóa tin nhắn này?');
                                  if (ok) deleteEntry(e.key);
                                }}
                                className="px-3 py-1.5 text-xs font-medium bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-3 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                            <div className="max-w-[55%] truncate">{e.value}</div>
                            {Array.isArray(e.att) && e.att.length > 0 && (
                              <div className="  space-y-2.5">
                                {e.att.map((a, idx) => (
                                  <div
                                    key={`${e.key}-att-${idx}`}
                                    className="flex items-center gap-3 text-xs justify-between"
                                  >
                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
                                      {a.type}
                                    </span>
                                    {a.type === 'file' && (
                                      <span className="text-slate-600 truncate max-w-[180px]">{a.name}</span>
                                    )}
                                    {a.type === 'image' && a.dataUrl && (
                                      <Image
                                        src={a.dataUrl}
                                        alt={a.name}
                                        width={12}
                                        height={12}
                                        className="w-12 h-12 rounded-md object-cover border border-slate-200 shadow-sm"
                                      />
                                    )}
                                    {a.type === 'video' && (
                                      <div className="relative w-12 h-12  rounded-md border border-slate-200 shadow-sm bg-black overflow-hidden">
                                        {a.dataUrl ? (
                                          <Image
                                            width={28}
                                            height={16}
                                            src={a.dataUrl}
                                            alt={a.name}
                                            className="w-full h-full object-cover opacity-80"
                                          />
                                        ) : null}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="min-h-[400px] flex flex-col items-center justify-center text-center px-4">
                      <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl text-slate-300 mb-5">
                        🕊️
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Chưa có tin nhắn nào</h3>
                      <p className="text-sm text-slate-500 mt-2 max-w-md">
                        Bắt đầu tạo tin nhắn mẫu đầu tiên của bạn trong chủ đề{' '}
                        <span className="font-medium text-slate-700">{activeFolder.name}</span>
                      </p>
                      <button
                        onClick={handleOpenCreateModal}
                        className="mt-6 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl shadow-sm transition"
                      >
                        Thêm tin nhắn ngay
                      </button>
                    </div>
                  )
                ) : (
                  <div className="min-h-[400px] flex items-center justify-center text-slate-500 text-base">
                    Chọn một chủ đề ở thanh bên trái để bắt đầu
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowCreateModal(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">
                {isEditMode ? 'Sửa tin nhắn nhanh' : 'Thêm tin nhắn nhanh'}
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-5">
              <input
                value={modalKey}
                onChange={(e) => setModalKey(e.target.value)}
                placeholder="Key / Phím tắt"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200/50 outline-none transition"
                readOnly={isEditMode}
              />

              <textarea
                value={modalValue}
                onChange={(e) => setModalValue(e.target.value)}
                placeholder="Nội dung tin nhắn..."
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm resize-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200/50 outline-none transition"
              />

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">Đính kèm (ảnh, video, file)</label>
                <input
                  type="file"
                  multiple
                  onChange={handleModalFilesChange}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 file:transition"
                />

                {modalFiles.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {modalFiles.map((a, idx) => (
                      <div
                        key={`modal-att-${idx}`}
                        className="flex items-center gap-3 text-sm bg-slate-50 p-3 rounded-xl"
                      >
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-md text-xs font-medium">
                          {a.type}
                        </span>
                        <span className="text-slate-600 truncate flex-1">{a.name}</span>
                        {a.type === 'image' && a.dataUrl && (
                          <img src={a.dataUrl} alt="" className="w-14 h-14 rounded-lg object-cover border" />
                        )}
                        {a.type === 'video' && (
                          <div className="relative w-28 h-16 rounded-lg border bg-black overflow-hidden">
                            {a.dataUrl ? (
                              <img src={a.dataUrl} alt="" className="w-full h-full object-cover opacity-80" />
                            ) : null}
                            <span className="absolute inset-0 flex items-center justify-center text-white">▶</span>
                          </div>
                        )}
                        <button
                          onClick={() => removeModalFile(idx)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          Xóa
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 py-5 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              >
                Hủy
              </button>
              <button
                onClick={isEditMode ? editEntryFromModal : addEntryFromModal}
                className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition"
              >
                {isEditMode ? 'Cập nhật tin nhắn' : 'Lưu tin nhắn'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
