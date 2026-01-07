import { NextRequest, NextResponse } from 'next/server';
import { io as ioClient } from 'socket.io-client';
import { updateParticipant, getRecipientsForCall } from '@/lib/callsStore';
import { resolveSocketUrl } from '@/utils/utils';

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
  const call_id = String(body.call_id || '');
  const user_id = String(body.user_id || '');
  if (!call_id || !user_id) return NextResponse.json({ ok: false }, { status: 400 });
  const next = updateParticipant(call_id, user_id, { status: 'left', left_at: Date.now() });
  if (!next) return NextResponse.json({ ok: false }, { status: 400 });
  const recipients = getRecipientsForCall(call_id);
  try {
    const s = ioClient(socketUrl(), { transports: ['websocket'] });
    await new Promise<void>((r) => s.on('connect', () => r()));
    s.emit('participant-left', { call_id, user_id, recipients });
    s.disconnect();
  } catch {}
  return NextResponse.json({ ok: true });
}
