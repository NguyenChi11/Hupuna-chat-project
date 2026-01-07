import { NextRequest, NextResponse } from 'next/server';
import { io as ioClient } from 'socket.io-client';
import { getCall, setCallOngoing, updateParticipant, getJoinedCount, getRecipientsForCall, addParticipants } from '@/lib/callsStore';
import crypto from 'node:crypto';

export const runtime = 'nodejs';

function socketUrl() {
  const url = (process.env.NEXT_PUBLIC_SOCKET_URL || '').trim();
  const port = (process.env.NEXT_PUBLIC_SOCKET_PORT || '').trim();
  if (url) return url.startsWith('http') ? url : `http://${url}`;
  const host = process.env.SOCKET_HOST || 'localhost';
  const p = port || process.env.NEXT_PUBLIC_SERVER_PORT || '3002';
  return `http://${host}:${p}`;
}

function livekitUrl() {
  const url = (process.env.NEXT_PUBLIC_LIVEKIT_URL || process.env.LIVEKIT_URL || '').trim();
  return url || '';
}
function base64url(input: Buffer | string) {
  const b = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return b.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function signHS256(data: string, secret: string) {
  const h = crypto.createHmac('sha256', secret);
  h.update(data);
  return base64url(h.digest());
}
function buildAccessToken({
  apiKey,
  apiSecret,
  identity,
  name,
  room,
  ttlSeconds = 3600,
  canPublish = true,
  canSubscribe = true,
}: {
  apiKey: string;
  apiSecret: string;
  identity: string;
  name?: string;
  room: string;
  ttlSeconds?: number;
  canPublish?: boolean;
  canSubscribe?: boolean;
}) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'HS256', typ: 'JWT' };
  const payload: Record<string, unknown> = {
    iss: apiKey,
    sub: identity,
    name,
    iat: now,
    nbf: now,
    exp: now + Math.max(1, Math.floor(ttlSeconds)),
    video: {
      roomJoin: true,
      room,
      canPublish,
      canSubscribe,
    },
  };
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const data = `${encodedHeader}.${encodedPayload}`;
  const signature = signHS256(data, apiSecret);
  return `${data}.${signature}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const call_id = String(body.call_id || '').trim();
  const user_id = String(body.user_id || '').trim();
  if (!call_id || !user_id) {
    return NextResponse.json({ ok: false, error: 'Missing call_id or user_id' }, { status: 400 });
  }
  const call = getCall(call_id);
  if (!call) {
    return NextResponse.json({ ok: false, error: 'Call not found' }, { status: 404 });
  }
  if (call.status === 'ended') {
    return NextResponse.json({ ok: false, error: 'Call already ended' }, { status: 400 });
  }
  let next = updateParticipant(call_id, user_id, { status: 'joined', joined_at: Date.now() });
  if (!next) {
    addParticipants(call_id, [{ user_id, status: 'joined' }]);
    next = updateParticipant(call_id, user_id, { status: 'joined', joined_at: Date.now() });
    if (!next) {
      return NextResponse.json({ ok: false, error: 'Failed to update participant' }, { status: 400 });
    }
  }
  const joinedCount = getJoinedCount(call_id);
  const wasOngoing = call.status === 'ongoing';
  if (!wasOngoing && joinedCount >= (call.type === 'one_to_one' ? 2 : 1)) {
    setCallOngoing(call_id);
  }
  const recipients = getRecipientsForCall(call_id);
  try {
    const s = ioClient(socketUrl(), { transports: ['websocket'] });
    await new Promise<void>((r) => s.on('connect', () => r()));
    if (!wasOngoing && joinedCount >= (call.type === 'one_to_one' ? 2 : 1)) {
      s.emit('call-accepted', { call_id, recipients });
    }
    s.emit('participant-joined', { call_id, user_id, recipients });
    s.disconnect();
  } catch {}
  const LIVEKIT_URL = livekitUrl();
  const LIVEKIT_API_KEY = (process.env.LIVEKIT_API_KEY || '').trim();
  const LIVEKIT_API_SECRET = (process.env.LIVEKIT_API_SECRET || '').trim();
  if (!LIVEKIT_URL || !LIVEKIT_API_KEY || !LIVEKIT_API_SECRET) {
    return NextResponse.json({ ok: false, error: 'Missing LiveKit env' }, { status: 500 });
  }
  const token = buildAccessToken({
    apiKey: LIVEKIT_API_KEY,
    apiSecret: LIVEKIT_API_SECRET,
    identity: user_id,
    name: user_id,
    room: call.room_name,
    ttlSeconds: 3600,
    canPublish: true,
    canSubscribe: true,
  });
  return NextResponse.json({ ok: true, token, url: LIVEKIT_URL, room_name: call.room_name });
}
