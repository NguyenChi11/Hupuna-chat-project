import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookie } from '@/lib/auth';
import crypto from 'node:crypto';

export const runtime = 'nodejs';

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

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const room = String(url.searchParams.get('room') || '').trim();
    const publish = url.searchParams.get('publish');
    const subscribe = url.searchParams.get('subscribe');
    const canPublish = publish ? publish !== 'false' : true;
    const canSubscribe = subscribe ? subscribe !== 'false' : true;

    const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL || process.env.LIVEKIT_URL || '';
    const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
    const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';

    if (!LIVEKIT_URL || !LIVEKIT_API_KEY || !LIVEKIT_API_SECRET) {
      return NextResponse.json({ error: 'Missing LiveKit env' }, { status: 500 });
    }
    if (!room) {
      return NextResponse.json({ error: 'Missing room' }, { status: 400 });
    }

    const user = await getUserFromCookie();
    const identity = String(user?._id || '');
    const name = String(user?.name || user?.username || identity || 'user');
    if (!identity) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = buildAccessToken({
      apiKey: LIVEKIT_API_KEY,
      apiSecret: LIVEKIT_API_SECRET,
      identity,
      name,
      room,
      ttlSeconds: 3600,
      canPublish,
      canSubscribe,
    });

    return NextResponse.json({ token, serverUrl: LIVEKIT_URL });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const room = String(body.room || '').trim();
  const canPublish = body.canPublish !== false;
  const canSubscribe = body.canSubscribe !== false;

  const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL || process.env.LIVEKIT_URL || '';
  const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
  const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';

  if (!LIVEKIT_URL || !LIVEKIT_API_KEY || !LIVEKIT_API_SECRET) {
    return NextResponse.json({ error: 'Missing LiveKit env' }, { status: 500 });
  }
  if (!room) {
    return NextResponse.json({ error: 'Missing room' }, { status: 400 });
  }

  const user = await getUserFromCookie();
  const identity = String(user?._id || '');
  const name = String(user?.name || user?.username || identity || 'user');
  if (!identity) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = buildAccessToken({
    apiKey: LIVEKIT_API_KEY,
    apiSecret: LIVEKIT_API_SECRET,
    identity,
    name,
    room,
    ttlSeconds: 3600,
    canPublish,
    canSubscribe,
  });

  return NextResponse.json({ token, serverUrl: LIVEKIT_URL });
}
