import { NextRequest, NextResponse } from 'next/server';
import { AccessToken, RoomServiceClient } from 'livekit-server-sdk';

export const runtime = 'nodejs';

function getEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const roomName = String(body?.room || body?.roomName || '');
    const identity = String(body?.identity || body?.userId || '');
    const name = String(body?.name || '');
    const metadata = body?.metadata ? String(body.metadata) : undefined;
    const canPublish = body?.canPublish !== false;
    const canSubscribe = body?.canSubscribe !== false;

    if (!roomName || !identity) {
      return NextResponse.json({ success: false, error: 'room and identity are required' }, { status: 400 });
    }

    const LIVEKIT_URL = getEnv('LIVEKIT_URL');
    const LIVEKIT_API_KEY = getEnv('LIVEKIT_API_KEY');
    const LIVEKIT_API_SECRET = getEnv('LIVEKIT_API_SECRET');

    try {
      const roomClient = new RoomServiceClient(LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET);
      await roomClient.createRoom({
        name: roomName,
        emptyTimeout: 60 * 10,
        // maxParticipants optional; user can limit on frontend
      }).catch(() => {});
    } catch {}

    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity,
      name: name || identity,
      metadata,
    });
    at.addGrant({
      room: roomName,
      roomJoin: true,
      canPublish,
      canSubscribe,
      canPublishData: true,
    });
    const token = await at.toJwt();

    return NextResponse.json({ success: true, token });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
