// app\lib\monggodb\connectToDatabase.tsx

import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
const MONGODB_DB = process.env.MONGODB_DB || 'hupuna-price';

// Cache client khi hot-reload (Next.js dev mode)
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (process.env.NODE_ENV === 'production' && (MONGODB_URI.includes('localhost') || MONGODB_URI.includes('127.0.0.1'))) {
    console.error('❌ ERROR: You are using a localhost MongoDB URI in production. Please set MONGODB_URI in your Vercel project settings to a remote database (e.g., MongoDB Atlas).');
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();

  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
