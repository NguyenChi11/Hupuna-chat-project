import type { Message } from '@/types/Message';

export const groupMessagesByDate = (msgs: Message[]) => {
  const groups = new Map<string, Message[]>();
  const seen = new Set<string>();
  msgs.forEach((msg) => {
    const id = String(msg._id);
    if (seen.has(id)) return;
    seen.add(id);
    const ts =
      Number((msg as unknown as { serverTimestamp?: number }).serverTimestamp ?? msg.timestamp) || 0;
    const dateKey = new Date(ts).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    if (!groups.has(dateKey)) {
      groups.set(dateKey, []);
    }
    groups.get(dateKey)!.push(msg);
  });
  const safeNum = (t: unknown) => {
    const n = Number(t);
    return Number.isFinite(n) ? n : 0;
  };
  const cmp = (a: Message, b: Message) => {
    const ta = safeNum((a as unknown as { serverTimestamp?: number }).serverTimestamp ?? a.timestamp);
    const tb = safeNum((b as unknown as { serverTimestamp?: number }).serverTimestamp ?? b.timestamp);
    if (ta !== tb) return ta - tb;
    const ia = String(a._id || '');
    const ib = String(b._id || '');
    if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
    if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
    return ia.localeCompare(ib);
  };
  Array.from(groups.values()).forEach((arr) => arr.sort(cmp));
  return groups;
};


