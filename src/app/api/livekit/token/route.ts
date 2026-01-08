import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const roomName = String(body?.roomName || '');
  const identity = String(body?.identity || '');
  const metadata = typeof body?.metadata === 'string' ? body?.metadata : undefined;

  const apiKey = process.env.LIVEKIT_API_KEY || '';
  const apiSecret = process.env.LIVEKIT_API_SECRET || '';

  if (!apiKey || !apiSecret) {
    return NextResponse.json({ error: 'LiveKit credentials missing' }, { status: 500 });
  }
  if (!roomName || !identity) {
    return NextResponse.json({ error: 'Missing roomName or identity' }, { status: 400 });
  }

  const token = new AccessToken(apiKey, apiSecret, { identity, metadata });
  token.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true,
  });

  return NextResponse.json({ token: await token.toJwt() });
}
