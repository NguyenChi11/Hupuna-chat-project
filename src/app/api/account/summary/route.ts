import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/components/(mongodb)/connectToDatabase';
import { USERS_COLLECTION_NAME } from '@/types/User';
import { verifyJWT, signJWT } from '@/lib/auth';
import { fingerprintFromHeaders, getSession } from '@/lib/session';
import { ObjectId, Filter } from 'mongodb';

export const runtime = 'nodejs';

type UserDoc = {
  _id: ObjectId | number | string;
  username?: string;
  name?: string;
  avatar?: string;
};

type UserFilter = Filter<UserDoc>;

export async function GET(req: NextRequest) {
  const { db } = await connectToDatabase();
  let userId: string | null = null;
  let refreshedAccess: string | null = null;
  const fp = fingerprintFromHeaders({
    'user-agent': req.headers.get('user-agent') || '',
    'accept-language': req.headers.get('accept-language') || '',
  });

  const sid = req.cookies.get('sid')?.value || null;
  if (sid) {
    const session = await getSession(sid);
    if (session) userId = session.userId;
  }

  if (!userId) {
    const token = req.cookies.get('session_token')?.value || null;
    if (token) {
      const payload = await verifyJWT(token);
      const pid = payload && typeof payload['_id'] === 'string' ? (payload['_id'] as string) : undefined;
      const tfp = payload && typeof payload['fp'] === 'string' ? (payload['fp'] as string) : '';
      if (pid && tfp && tfp === fp) userId = pid;
    }
  }

  if (!userId) {
    const refresh = req.cookies.get('refresh_token')?.value || null;
    if (refresh) {
      const payload = await verifyJWT(refresh);
      const sub = payload && typeof payload['sub'] === 'string' ? (payload['sub'] as string) : undefined;
      const tfp = payload && typeof payload['fp'] === 'string' ? (payload['fp'] as string) : '';
      const username = payload && typeof payload['username'] === 'string' ? (payload['username'] as string) : '';
      const name = payload && typeof payload['name'] === 'string' ? (payload['name'] as string) : '';
      if (payload && payload['purpose'] === 'refresh' && sub && tfp === fp) {
        userId = sub;
        refreshedAccess = await signJWT({ _id: sub, username, name, fp });
      }
    }
  }

  const isValidObjectId = (id: string) => id.length === 24 && /^[0-9a-fA-F]{24}$/.test(id);
  if (!userId) return NextResponse.json({ success: false }, { status: 401 });

  let query: UserFilter;
  if (isValidObjectId(userId)) {
    query = { _id: new ObjectId(userId) };
  } else if (!isNaN(Number(userId))) {
    query = { _id: Number(userId) };
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const user = await db.collection<UserDoc>(USERS_COLLECTION_NAME).findOne(query);
  if (!user) return NextResponse.json({ success: false }, { status: 404 });

  const idStr =
    typeof user._id === 'object' && 'toHexString' in (user._id as ObjectId)
      ? (user._id as ObjectId).toHexString()
      : String(user._id);
  const account = {
    id: idStr,
    username: String(user.username || ''),
    name: String(user.name || ''),
    plan: 'Free Plan',
    avatar: String(user.avatar || ''),
  };

  const res = NextResponse.json({ success: true, account });
  if (!refreshedAccess && sid && user) {
    const username = String(user.username || '');
    const name = String(user.name || '');
    refreshedAccess = await signJWT({ _id: idStr, username, name, fp });
  }
  if (refreshedAccess) {
    res.cookies.set('session_token', refreshedAccess, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 30 * 24 * 3600,
    });
  }
  return res;
}
