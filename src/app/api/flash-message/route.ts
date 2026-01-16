import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/components/(mongodb)/connectToDatabase';
import { fingerprintFromHeaders, getSession } from '@/lib/session';
import { verifyJWT } from '@/lib/auth';
import { ObjectId } from 'mongodb';

export const runtime = 'nodejs';

const COLLECTION_USER = 'FlashMessagesUser';
const COLLECTION_GLOBAL = 'FlashMessagesGlobal';

type Scope = 'user' | 'global';
type Attachment = {
  type: 'image' | 'video' | 'file';
  name: string;
  size: number;
  dataUrl?: string;
  url?: string;
};
type Entry = { key: string; value: string; att?: Attachment[] };
type FlashFolderDoc = {
  _id?: ObjectId | string;
  ownerId?: string;
  name: string;
  entries: Entry[];
  createdAt: number;
  updatedAt?: number;
};

function getCollectionName(scope: Scope) {
  return scope === 'user' ? COLLECTION_USER : COLLECTION_GLOBAL;
}

async function getCurrentUserId(req: NextRequest): Promise<string | null> {
  const fp = fingerprintFromHeaders({
    'user-agent': req.headers.get('user-agent') || '',
    'accept-language': req.headers.get('accept-language') || '',
  });

  const sid = req.cookies.get('sid')?.value || null;
  if (sid) {
    const session = await getSession(sid);
    if (session) return session.userId;
  }

  const token = req.cookies.get('session_token')?.value || null;
  if (token) {
    const payload = await verifyJWT(token);
    const pid = payload && typeof payload['_id'] === 'string' ? (payload['_id'] as string) : undefined;
    const tfp = payload && typeof payload['fp'] === 'string' ? (payload['fp'] as string) : '';
    if (pid && tfp && tfp === fp) return pid;
  }

  const refresh = req.cookies.get('refresh_token')?.value || null;
  if (refresh) {
    const payload = await verifyJWT(refresh);
    const sub = payload && typeof payload['sub'] === 'string' ? (payload['sub'] as string) : undefined;
    const tfp = payload && typeof payload['fp'] === 'string' ? (payload['fp'] as string) : '';
    if (payload && payload['purpose'] === 'refresh' && sub && tfp === fp) return sub;
  }

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const body = (await req.json()) as {
      action:
        | 'listFolders'
        | 'createFolder'
        | 'renameFolder'
        | 'deleteFolder'
        | 'listEntries'
        | 'upsertEntry'
        | 'deleteEntry';
      scope?: Scope;
      folderId?: string;
      name?: string;
      key?: string;
      value?: string;
      att?: Attachment[];
    };

    const scope: Scope = body.scope === 'global' ? 'global' : 'user';
    const colName = getCollectionName(scope);
    const collection = db.collection<FlashFolderDoc>(colName);

    const currentUserId = await getCurrentUserId(req);
    if (scope === 'user' && !currentUserId) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    switch (body.action) {
      case 'listFolders': {
        const filter =
          scope === 'user'
            ? ({ ownerId: String(currentUserId) } as Record<string, unknown>)
            : ({} as Record<string, unknown>);
        const folders = await collection.find(filter).sort({ updatedAt: -1, createdAt: -1 }).toArray();
        return NextResponse.json({ success: true, data: folders.map((f) => ({ ...f, _id: String(f._id || '') })) });
      }
      case 'createFolder': {
        const name = String(body.name || '').trim();
        if (!name) return NextResponse.json({ success: false, message: 'Missing name' }, { status: 400 });
        const doc: FlashFolderDoc = {
          ownerId: scope === 'user' ? String(currentUserId) : undefined,
          name,
          entries: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        const result = await collection.insertOne(doc);
        return NextResponse.json({ success: true, _id: String(result.insertedId) });
      }
      case 'renameFolder': {
        const folderId = String(body.folderId || '');
        const name = String(body.name || '').trim();
        if (!folderId || !name) return NextResponse.json({ success: false }, { status: 400 });
        const filter =
          scope === 'user'
            ? { _id: new ObjectId(folderId), ownerId: String(currentUserId) }
            : { _id: new ObjectId(folderId) };
        const result = await collection.updateOne(filter, { $set: { name, updatedAt: Date.now() } });
        return NextResponse.json({ success: result.modifiedCount > 0 });
      }
      case 'deleteFolder': {
        const folderId = String(body.folderId || '');
        if (!folderId) return NextResponse.json({ success: false }, { status: 400 });
        const filter =
          scope === 'user'
            ? { _id: new ObjectId(folderId), ownerId: String(currentUserId) }
            : { _id: new ObjectId(folderId) };
        const result = await collection.deleteOne(filter);
        return NextResponse.json({ success: result.deletedCount > 0 });
      }
      case 'listEntries': {
        const folderId = String(body.folderId || '');
        if (!folderId) return NextResponse.json({ success: false }, { status: 400 });
        const filter =
          scope === 'user'
            ? { _id: new ObjectId(folderId), ownerId: String(currentUserId) }
            : { _id: new ObjectId(folderId) };
        const doc = await collection.findOne(filter);
        return NextResponse.json({ success: !!doc, data: doc ? doc.entries || [] : [] });
      }
      case 'upsertEntry': {
        const folderId = String(body.folderId || '');
        const key = String(body.key || '').trim();
        const value = String(body.value || '').trim();
        const att = Array.isArray(body.att) ? (body.att as Attachment[]) : [];
        if (!folderId || !key || !value) return NextResponse.json({ success: false }, { status: 400 });
        const filter =
          scope === 'user'
            ? { _id: new ObjectId(folderId), ownerId: String(currentUserId) }
            : { _id: new ObjectId(folderId) };
        const doc = await collection.findOne(filter);
        if (!doc) return NextResponse.json({ success: false }, { status: 404 });
        const exists = (doc.entries || []).some((e) => e.key === key);
        const nextEntries = exists
          ? (doc.entries || []).map((e) => (e.key === key ? { key, value, att } : e))
          : [...(doc.entries || []), { key, value, att }];
        const result = await collection.updateOne(filter, { $set: { entries: nextEntries, updatedAt: Date.now() } });
        return NextResponse.json({ success: result.modifiedCount > 0 });
      }
      case 'deleteEntry': {
        const folderId = String(body.folderId || '');
        const key = String(body.key || '').trim();
        if (!folderId || !key) return NextResponse.json({ success: false }, { status: 400 });
        const filter =
          scope === 'user'
            ? { _id: new ObjectId(folderId), ownerId: String(currentUserId) }
            : { _id: new ObjectId(folderId) };
        const doc = await collection.findOne(filter);
        if (!doc) return NextResponse.json({ success: false }, { status: 404 });
        const nextEntries = (doc.entries || []).filter((e) => e.key !== key);
        const result = await collection.updateOne(filter, { $set: { entries: nextEntries, updatedAt: Date.now() } });
        return NextResponse.json({ success: result.modifiedCount > 0 });
      }
      default:
        return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
