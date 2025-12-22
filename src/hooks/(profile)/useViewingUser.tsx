'use client';

import { useEffect, useState, useCallback } from 'react';

export function useViewingUser(viewingId: string, isOwner: boolean, currentUser: Record<string, unknown> | null) {
  const [overviewData, setOverviewData] = useState({
    phone: '',
    gender: '',
    birthday: '',
    email: '',
    address: '',
    department: '',
    title: '',
    bio: '',
  });

  const [displayName, setDisplayName] = useState('');
  const [displayDept, setDisplayDept] = useState('');
  const [displayTitle, setDisplayTitle] = useState('');
  const [displayBio, setDisplayBio] = useState('');
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [background, setBackground] = useState<string | undefined>(undefined);

  const fillFrom = useCallback(
    (u: Record<string, unknown> | null) => {
      if (!u) return;
      const myId = String((currentUser as Record<string, unknown> | null)?.['_id'] || '');
      const nickMap = (u['nicknames'] as Record<string, unknown> | undefined) || undefined;
      const nick = !isOwner && myId && nickMap ? String((nickMap[myId] as unknown) || '').trim() : '';
      const baseName = String(u['name'] || u['username'] || '');
      setDisplayName(nick || baseName);
      setDisplayDept(String(u['department'] || ''));
      setDisplayTitle(String(u['title'] || ''));
      setDisplayBio(String(u['bio'] || ''));
      setAvatar(typeof u['avatar'] === 'string' ? (u['avatar'] as string) : undefined);
      setBackground(typeof u['background'] === 'string' ? (u['background'] as string) : undefined);

      setOverviewData({
        phone: String(u['phone'] || ''),
        gender: String(u['gender'] || ''),
        birthday: String(u['birthday'] || ''),
        email: String(u['email'] || ''),
        address: String(u['address'] || ''),
        department: String(u['department'] || ''),
        title: String(u['title'] || ''),
        bio: String(u['bio'] || ''),
      });
    },
    [isOwner, currentUser],
  );

  useEffect(() => {
    if (isOwner) {
      fillFrom(currentUser);
      return;
    }

    const fetchViewingUser = async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: viewingId }),
        });

        const json = await res.json();
        const dataArr = Array.isArray(json?.data) ? (json.data as Record<string, unknown>[]) : undefined;

        const userRow = json?.row || dataArr?.[0] || json?.user || json;

        fillFrom(userRow || null);
      } catch {}
    };

    if (viewingId) void fetchViewingUser();
  }, [isOwner, viewingId, currentUser, fillFrom]);

  return {
    overviewData,
    displayName,
    setDisplayName,
    displayDept,
    setDisplayDept,
    displayTitle,
    setDisplayTitle,
    displayBio,
    setDisplayBio,
    avatar,
    background,
    setAvatar,
    setBackground,
    setOverviewData,
  };
}
