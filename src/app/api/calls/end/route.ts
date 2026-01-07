import { NextRequest, NextResponse } from 'next/server';
import { io as ioClient } from 'socket.io-client';
import { getCall, endCall, getJoinedCount, getRecipientsForCall } from '@/lib/callsStore';

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
  const call = getCall(call_id);
  if (!call) return NextResponse.json({ ok: false }, { status: 404 });
  const joinedCount = getJoinedCount(call_id);
  if (call.type === 'one_to_one' || joinedCount === 0) {
    endCall(call_id);
    const recipients = getRecipientsForCall(call_id);
    try {
      const s = ioClient(socketUrl(), { transports: ['websocket'] });
      await new Promise<void>((r) => s.on('connect', () => r()));
      s.emit('call-ended', { call_id, recipients });
      s.disconnect();
    } catch {}
  }
  return NextResponse.json({ ok: true });
}
