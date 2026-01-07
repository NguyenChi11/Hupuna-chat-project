import { NextRequest, NextResponse } from 'next/server';
import { io as ioClient } from 'socket.io-client';
import { createCall, addParticipants, getRecipientsForCall } from '@/lib/callsStore';

export const runtime = 'nodejs';

function socketUrl() {
  const url = (process.env.NEXT_PUBLIC_SOCKET_URL || '').trim();
  const port = (process.env.NEXT_PUBLIC_SOCKET_PORT || '').trim();
  if (url) return url.startsWith('http') ? url : `http://${url}`;
  const host = process.env.SOCKET_HOST || 'localhost';
  const p = port || process.env.NEXT_PUBLIC_SERVER_PORT || '3002';
  return `http://${host}:${p}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const conversation_id = String(body.conversation_id || '');
  const type = String(body.type || '');
  const media = String(body.media || '');
  const created_by = String(body.created_by || '');
  const targets = Array.isArray(body.target_user_ids) ? body.target_user_ids.map((x: unknown) => String(x)) : [];
  if (!conversation_id || !created_by) return NextResponse.json({ ok: false }, { status: 400 });
  if (type !== 'one_to_one' && type !== 'group') return NextResponse.json({ ok: false }, { status: 400 });
  if (media !== 'voice' && media !== 'video') return NextResponse.json({ ok: false }, { status: 400 });
  if (type === 'group' && media !== 'video') return NextResponse.json({ ok: false }, { status: 400 });
  if (type === 'one_to_one' && targets.length !== 1) return NextResponse.json({ ok: false }, { status: 400 });
  const room_name = `call_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const call = createCall({ conversation_id, type, media, room_name, created_by, targets });
  addParticipants(
    call.id,
    [{ user_id: created_by, status: 'joined' }, ...targets.map((u: string) => ({ user_id: u, status: 'ringing' }))],
  );
  const recipients = targets;
  try {
    const s = ioClient(socketUrl(), { transports: ['websocket'] });
    await new Promise<void>((r) => s.on('connect', () => r()));
    s.emit('incoming-call', { call_id: call.id, conversation_id, type, media, room_name, from: created_by, recipients });
    s.disconnect();
  } catch {}
  return NextResponse.json({ ok: true, call_id: call.id, room_name });
}
