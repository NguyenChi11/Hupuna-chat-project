module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/src/components/(mongodb)/connectToDatabase.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app\lib\monggodb\connectToDatabase.tsx
__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
const MONGODB_DB = process.env.MONGODB_DB || 'hupuna-price';
// Cache client khi hot-reload (Next.js dev mode)
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    if (("TURBOPACK compile-time value", "development") === 'production' && (MONGODB_URI.includes('localhost') || MONGODB_URI.includes('127.0.0.1'))) //TURBOPACK unreachable
    ;
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](MONGODB_URI);
    await client.connect();
    const db = client.db(MONGODB_DB);
    cachedClient = client;
    cachedDb = db;
    return {
        client,
        db
    };
}
}),
"[project]/src/lib/mongoDBCRUD.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app\lib\monggodb\mongoDBCRUD.ts
__turbopack_context__.s([
    "addRow",
    ()=>addRow,
    "createMany",
    ()=>createMany,
    "deleteByField",
    ()=>deleteByField,
    "deleteById",
    ()=>deleteById,
    "deleteManyRows",
    ()=>deleteManyRows,
    "findByField",
    ()=>findByField,
    "getAllRows",
    ()=>getAllRows,
    "getCollection",
    ()=>getCollection,
    "getHeaders",
    ()=>getHeaders,
    "getRowByIdOrCode",
    ()=>getRowByIdOrCode,
    "safeParse",
    ()=>safeParse,
    "updateByField",
    ()=>updateByField,
    "updateMany",
    ()=>updateMany
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(mongodb)/connectToDatabase.tsx [app-route] (ecmascript)");
;
;
function safeParse(value) {
    if (typeof value !== 'string') return value;
    const firstChar = value.trim().charAt(0);
    if (firstChar !== '[' && firstChar !== '{') return value;
    try {
        return JSON.parse(value);
    } catch  {
        return value;
    }
}
const getHeaders = async (collectionName)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const doc = await db.collection(collectionName).findOne({});
    return doc ? Object.keys(doc) : [];
};
const findByField = async (collectionName, field, value)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const item = await db.collection(collectionName).find({
        [field]: value
    }).toArray();
    if (!item) return null;
    return {
        data: item
    };
};
const getRowByIdOrCode = async (collectionName, { id, code, _id })=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const filter = {};
    if (_id) {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(_id)) {
            filter['_id'] = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](_id);
        } else if (!isNaN(Number(_id))) {
            filter['_id'] = Number(_id);
        }
    }
    if (id) filter['id'] = id;
    if (code) filter['code'] = code;
    const row = await db.collection(collectionName).findOne(filter);
    return row ? {
        rowIndex: 0,
        row: row
    } : null;
};
const getAllRows = async (collectionName, { search, skip = 0, limit, field, value, filters, sort, collation } = {})=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const collection = db.collection(collectionName);
    const query = {};
    // Filter field=value
    if (field && value !== undefined) {
        query[field] = value;
    }
    // ====== 2. Filter nâng cao ======
    if (filters && Object.keys(filters).length > 0) {
        for (const [key, rawVal] of Object.entries(filters)){
            if (rawVal === undefined || rawVal === null) continue;
            // --- Nếu là mệnh đề $or hoặc $and ---
            // Trường hợp tìm kiếm có điều kiện kết hợp
            if (key === '$or' || key === '$and') {
                query[key] = rawVal;
                continue;
            }
            // --- Nếu là object có $gte / $lte (lọc khoảng thời gian hoặc khoảng số) ---
            if (typeof rawVal === 'object' && rawVal !== null && ('$gte' in rawVal || '$lte' in rawVal)) {
                query[key] = rawVal;
                continue;
            }
            // --- Nếu là object có toán tử MongoDB ---
            // Trường hợp tìm kiếm có điều kiện
            // $in – chứa trong danh sách giá trị (giống WHERE field IN (...))
            // $nin – không chứa trong danh sách giá trị
            // $gte – lớn hơn hoặc bằng (>=)
            // $lte – nhỏ hơn hoặc bằng (<=)
            // $gt – lớn hơn (>)
            // $lt – nhỏ hơn (<)
            // $ne – khác (!=)
            if (typeof rawVal === 'object' && rawVal !== null && Object.keys(rawVal).some((k)=>[
                    '$in',
                    '$nin',
                    '$gte',
                    '$lte',
                    '$gt',
                    '$lt',
                    '$ne'
                ].includes(k))) {
                query[key] = rawVal;
                continue;
            }
            // --- Nếu là chuỗi bắt đầu bằng "#" => regex ---
            if (typeof rawVal === 'string' && rawVal.trim().startsWith('#')) {
                // Trường hợp tìm kiếm gần đúng (regex)
                query[key] = {
                    $regex: rawVal.trim().slice(1),
                    $options: 'i'
                };
                continue;
            }
            // Trường hợp so sánh chính xác (exact match)
            query[key] = rawVal;
        }
    }
    // Search toàn bộ text - cách cũ - chỉ lấy key 1 cấp
    // if (search) {
    //     const sampleDoc = await collection.findOne();
    //     if (sampleDoc) {
    //         const textFields = Object.keys(sampleDoc).filter(
    //             (k) => typeof sampleDoc[k] === "string"
    //         );
    //         if (textFields.length > 0) {
    //             query["$or"] = textFields.map((key) => ({
    //                 [key]: { $regex: search, $options: "i" },
    //             }));
    //         }
    //     }
    // }
    // Search toàn bộ text - cải tiến để lấy cả các key trong object con - nhiều cấp
    if (search) {
        const sampleDoc = await collection.findOne();
        if (sampleDoc) {
            // 👉 Hàm đệ quy lấy tất cả key string (kể cả nested)
            const getStringPaths = (obj, prefix = '')=>{
                let keys = [];
                for (const [k, v] of Object.entries(obj)){
                    const path = prefix ? `${prefix}.${k}` : k;
                    if (typeof v === 'string') keys.push(path);
                    else if (v && typeof v === 'object' && !Array.isArray(v)) keys = keys.concat(getStringPaths(v, path));
                }
                return keys;
            };
            const textFields = getStringPaths(sampleDoc);
            if (textFields.length > 0) {
                query['$or'] = textFields.map((path)=>({
                        [path]: {
                            $regex: search,
                            $options: 'i'
                        }
                    }));
            }
        }
    }
    // Sort
    let sortOption = {};
    if (sort) {
        const sortArr = Array.isArray(sort) ? sort : [
            sort
        ];
        sortOption = sortArr.reduce((acc, s)=>{
            acc[s.field] = s.order === 'desc' ? -1 : 1;
            return acc;
        }, {});
    }
    const total = await collection.countDocuments(query, collation ? {
        collation
    } : undefined);
    let cursor = collection.find(query);
    if (collation) {
        cursor = cursor.collation(collation);
    }
    const data = await cursor.sort(sortOption).skip(skip).limit(limit ?? 0).toArray();
    return {
        total,
        data: data
    };
};
const addRow = async (collectionName, newData)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const result = await db.collection(collectionName).insertOne(newData);
    return result.insertedId.toString();
};
async function getCollection(name) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    return db.collection(name);
}
async function createMany(collectionName, docs) {
    const collection = await getCollection(collectionName);
    return collection.insertMany(docs);
}
const updateByField = async (collectionName, field, value, updateData)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    if ('_id' in updateData) delete updateData._id;
    let queryValue = value;
    if (field === '_id' && typeof value === 'string') {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(value)) {
            // Nếu là ObjectId hợp lệ
            queryValue = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](value);
        } else if (!isNaN(Number(value))) {
            // Nếu là số
            queryValue = Number(value);
        }
    // Nếu là string không phải ObjectId và không phải số, queryValue vẫn là string
    }
    const result = await db.collection(collectionName).updateOne({
        [field]: queryValue
    }, {
        $set: updateData
    });
    return result.modifiedCount > 0;
};
async function updateMany(collectionName, filter, update) {
    const collection = await getCollection(collectionName);
    const isOperatorUpdate = typeof update === 'object' && update !== null && Object.keys(update).some((key)=>key.startsWith('$'));
    const updateDoc = isOperatorUpdate ? update : {
        $set: update
    };
    return collection.updateMany(filter, updateDoc);
}
const deleteByField = async (collectionName, field, value)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const result = await db.collection(collectionName).deleteOne({
        [field]: value
    });
    return result.deletedCount > 0;
};
const deleteById = async (collectionName, id)=>{
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const result = await db.collection(collectionName).deleteOne({
        _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](id)
    });
    return result.deletedCount > 0;
};
async function deleteManyRows(collectionName, filter) {
    const collection = await getCollection(collectionName);
    return collection.deleteMany(filter);
}
}),
"[project]/src/types/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USERS_COLLECTION_NAME",
    ()=>USERS_COLLECTION_NAME
]);
const USERS_COLLECTION_NAME = 'Users';
}),
"[project]/src/types/Message.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MESSAGES_COLLECTION_NAME",
    ()=>MESSAGES_COLLECTION_NAME
]);
const MESSAGES_COLLECTION_NAME = 'Messages';
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserFromCookie",
    ()=>getUserFromCookie,
    "signEphemeralJWT",
    ()=>signEphemeralJWT,
    "signJWT",
    ()=>signJWT,
    "verifyJWT",
    ()=>verifyJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
const SECRET_KEY = process.env.SECRET_KEY || '';
const ALG = 'HS256';
function toBase64(input) {
    if (typeof Buffer !== 'undefined') {
        return typeof input === 'string' ? Buffer.from(input).toString('base64') : Buffer.from(input).toString('base64');
    }
    const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : input;
    let binary = '';
    for(let i = 0; i < bytes.length; i++)binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
}
function base64urlEncode(input) {
    return toBase64(input).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function base64urlDecodeToBytes(str) {
    let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
    const pad = b64.length % 4;
    if (pad) b64 += '='.repeat(4 - pad);
    if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(b64, 'base64'));
    const binary = atob(b64);
    const arr = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)arr[i] = binary.charCodeAt(i);
    return arr;
}
function bytesToUtf8(bytes) {
    if (typeof Buffer !== 'undefined') return Buffer.from(bytes).toString('utf8');
    return new TextDecoder().decode(bytes);
}
async function hmacSha256(data, secret) {
    const hasSubtle = typeof globalThis.crypto !== 'undefined' && !!globalThis.crypto.subtle;
    if (!hasSubtle) {
        throw new Error('Web Crypto API is not available in this runtime');
    }
    const enc = new TextEncoder();
    const key = await globalThis.crypto.subtle.importKey('raw', enc.encode(secret), {
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, false, [
        'sign'
    ]);
    const sig = await globalThis.crypto.subtle.sign('HMAC', key, enc.encode(data));
    return new Uint8Array(sig);
}
async function signJWT(payload) {
    const header = {
        alg: ALG,
        typ: 'JWT'
    };
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 30 * 24 * 3600;
    const body = {
        ...payload,
        iat,
        exp
    };
    const encodedHeader = base64urlEncode(JSON.stringify(header));
    const encodedPayload = base64urlEncode(JSON.stringify(body));
    const data = `${encodedHeader}.${encodedPayload}`;
    const sig = await hmacSha256(data, SECRET_KEY);
    const signature = base64urlEncode(sig);
    return `${data}.${signature}`;
}
async function signEphemeralJWT(payload, ttlSeconds) {
    const header = {
        alg: ALG,
        typ: 'JWT'
    };
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + Math.max(1, Math.floor(ttlSeconds));
    const body = {
        ...payload,
        iat,
        exp
    };
    const encodedHeader = base64urlEncode(JSON.stringify(header));
    const encodedPayload = base64urlEncode(JSON.stringify(body));
    const data = `${encodedHeader}.${encodedPayload}`;
    const sig = await hmacSha256(data, SECRET_KEY);
    const signature = base64urlEncode(sig);
    return `${data}.${signature}`;
}
async function verifyJWT(token) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        const [h, p, s] = parts;
        const headerJson = JSON.parse(bytesToUtf8(base64urlDecodeToBytes(h)));
        if (headerJson['alg'] !== ALG) return null;
        const data = `${h}.${p}`;
        const expectedBytes = await hmacSha256(data, SECRET_KEY);
        const expected = base64urlEncode(expectedBytes);
        if (s !== expected) return null;
        const payload = JSON.parse(bytesToUtf8(base64urlDecodeToBytes(p)));
        const exp = typeof payload['exp'] === 'number' ? payload['exp'] : undefined;
        if (typeof exp === 'number' && Math.floor(Date.now() / 1000) > exp) return null;
        return payload;
    } catch  {
        return null;
    }
}
async function getUserFromCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('session_token')?.value;
    if (!token) return null;
    return await verifyJWT(token);
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app\lib\session.ts
__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "fingerprintFromHeaders",
    ()=>fingerprintFromHeaders,
    "getSession",
    ()=>getSession,
    "listUserSessions",
    ()=>listUserSessions,
    "revokeSession",
    ()=>revokeSession,
    "touchSession",
    ()=>touchSession
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(mongodb)/connectToDatabase.tsx [app-route] (ecmascript)");
;
;
async function createSession(params) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const { userId, deviceName = 'web', ip = '', headers = {}, ttlDays = 7 } = params;
    const sid = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(32).toString('hex');
    const fingerprint = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update((headers['user-agent'] || '') + '|' + (headers['accept-language'] || '')).digest('hex');
    const now = new Date();
    const expiresAt = new Date(Date.now() + ttlDays * 24 * 3600 * 1000);
    const session = {
        _id: sid,
        userId,
        deviceName,
        deviceFingerprint: fingerprint,
        ip,
        createdAt: now,
        lastSeenAt: now,
        expiresAt,
        isRevoked: false
    };
    await db.collection('sessions').insertOne(session);
    return sid;
}
async function getSession(sid) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    if (!sid) return null;
    const session = await db.collection('sessions').findOne({
        _id: sid
    });
    if (!session || session.isRevoked || session.expiresAt < new Date()) return null;
    return session;
}
async function touchSession(sid) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    await db.collection('sessions').updateOne({
        _id: sid
    }, {
        $set: {
            lastSeenAt: new Date()
        }
    });
}
async function revokeSession(sid) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    await db.collection('sessions').updateOne({
        _id: sid
    }, {
        $set: {
            isRevoked: true
        }
    });
}
async function listUserSessions(userId) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    return db.collection('sessions').find({
        userId,
        isRevoked: false
    }).sort({
        lastSeenAt: -1
    }).toArray();
}
function fingerprintFromHeaders(headers) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update((headers['user-agent'] || '') + '|' + (headers['accept-language'] || '')).digest('hex');
}
}),
"[project]/src/lib/authCookies.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthCookies",
    ()=>clearAuthCookies,
    "setAuthCookies",
    ()=>setAuthCookies
]);
const defaultCookieOptions = {
    httpOnly: true,
    secure: ("TURBOPACK compile-time value", "development") === 'production',
    path: '/',
    sameSite: 'lax'
};
function setAuthCookies(res, params) {
    const { accessToken, refreshToken, sid, accessMaxAge = 30 * 24 * 3600, refreshMaxAge = 3650 * 24 * 3600, sidMaxAge = 3650 * 24 * 3600 } = params;
    if (accessToken) {
        res.cookies.set('session_token', accessToken, {
            ...defaultCookieOptions,
            maxAge: accessMaxAge
        });
    }
    if (sid) {
        res.cookies.set('sid', sid, {
            ...defaultCookieOptions,
            maxAge: sidMaxAge
        });
    }
    if (refreshToken) {
        res.cookies.set('refresh_token', refreshToken, {
            ...defaultCookieOptions,
            maxAge: refreshMaxAge
        });
    }
    return res;
}
function clearAuthCookies(res) {
    res.cookies.set('session_token', '', {
        ...defaultCookieOptions,
        maxAge: 0
    });
    res.cookies.set('sid', '', {
        ...defaultCookieOptions,
        maxAge: 0
    });
    res.cookies.set('refresh_token', '', {
        ...defaultCookieOptions,
        maxAge: 0
    });
    return res;
}
}),
"[project]/src/lib/chatUpdateFields.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildToggleChatStatusFields",
    ()=>buildToggleChatStatusFields,
    "buildUpdateCategoriesFields",
    ()=>buildUpdateCategoriesFields,
    "buildUpdateTagsFields",
    ()=>buildUpdateTagsFields,
    "normalizeStringArray",
    ()=>normalizeStringArray
]);
function buildToggleChatStatusFields(currentUserId, payload) {
    const fields = {};
    if (typeof payload.isPinned === 'boolean') {
        fields[`isPinnedBy.${currentUserId}`] = payload.isPinned;
    }
    if (typeof payload.isHidden === 'boolean') {
        fields[`isHiddenBy.${currentUserId}`] = payload.isHidden;
    }
    if (Object.keys(fields).length === 0) return null;
    return fields;
}
function normalizeStringArray(input) {
    if (!Array.isArray(input)) return [];
    return input.filter((x)=>typeof x === 'string');
}
function buildUpdateCategoriesFields(currentUserId, categories) {
    const arr = normalizeStringArray(categories);
    return {
        [`categoriesBy.${currentUserId}`]: arr
    };
}
function buildUpdateTagsFields(currentUserId, tags) {
    const arr = normalizeStringArray(tags);
    return {
        [`tagsBy.${currentUserId}`]: arr
    };
}
}),
"[project]/src/app/api/users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoDBCRUD.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/Message.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authCookies.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chatUpdateFields.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const runtime = 'nodejs';
// 🔥 Helper function để tạo query filter cho _id
function createIdFilter(id) {
    if (typeof id === 'number') {
        return id;
    }
    const idStr = String(id);
    // Kiểm tra nếu là ObjectId hợp lệ
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr) && idStr.length === 24) {
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](idStr);
    }
    // Kiểm tra nếu là số
    if (!isNaN(Number(idStr))) {
        return Number(idStr);
    }
    // Mặc định trả về string (trường hợp đặc biệt)
    return idStr;
}
async function POST(req) {
    let body = {};
    try {
        const contentType = req.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            body = await req.json();
        }
    } catch (err) {
        console.warn('Invalid JSON body in /api/users:', err);
        body = {};
    }
    const { action, collectionName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"], data, field, value, filters, search, skip, limit, _id: requestId, code, sort, currentUserId, roomId } = body;
    try {
        switch(action){
            case 'create':
                {
                    if (!data || !data.password) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing data or password'
                        }, {
                            status: 400
                        });
                    }
                    const hashed = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(String(data.password), 5);
                    const newData = {
                        ...data,
                        password: hashed
                    };
                    const _id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addRow"])(collectionName, newData);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        _id
                    });
                }
            case 'read':
                {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        search,
                        skip,
                        limit,
                        field,
                        value,
                        filters,
                        sort
                    });
                    const users = result.data || [];
                    if (!currentUserId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
                    }
                    const userIdStr = String(currentUserId);
                    const variants = [
                        userIdStr
                    ];
                    if (!isNaN(Number(userIdStr))) {
                        variants.push(Number(userIdStr));
                    }
                    const msgCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MESSAGES_COLLECTION_NAME"]);
                    const usersWithData = await Promise.all(users.map(async (u)=>{
                        if (String(u._id) === userIdStr) return u;
                        const roomId = [
                            userIdStr,
                            String(u._id)
                        ].sort().join('_');
                        const unreadCount = await msgCollection.countDocuments({
                            roomId,
                            readBy: {
                                $nin: variants
                            }
                        });
                        const lastMsgs = await msgCollection.find({
                            roomId
                        }).sort({
                            timestamp: -1
                        }).limit(1).toArray();
                        let lastMessagePreview = '';
                        const lastMsgObj = lastMsgs[0];
                        if (lastMsgObj) {
                            if (lastMsgObj.isRecalled) {
                                const isMySender = String(lastMsgObj.sender) === userIdStr;
                                const senderName = isMySender ? 'Bạn' : u.name || 'Người dùng';
                                lastMessagePreview = `${senderName}: đã thu hồi tin nhắn`;
                            } else {
                                const content = lastMsgObj.type === 'text' || lastMsgObj.type === 'notify' ? lastMsgObj.content : `[${lastMsgObj.type}]`;
                                if (String(lastMsgObj.sender) === userIdStr) {
                                    lastMessagePreview = `Bạn: ${content}`;
                                } else {
                                    lastMessagePreview = content || '';
                                }
                            }
                        } else {
                            lastMessagePreview = 'Các bạn đã kết nối với nhau trên Hupuna Chat';
                        }
                        const isPinned = u.isPinnedBy?.[userIdStr] === true;
                        const isHidden = u.isHiddenBy?.[userIdStr] === true;
                        const categories = Array.isArray(u.categoriesBy?.[userIdStr]) ? u.categoriesBy?.[userIdStr] : [];
                        return {
                            ...u,
                            unreadCount,
                            lastMessage: lastMessagePreview,
                            lastMessageAt: lastMsgObj ? lastMsgObj.timestamp : null,
                            isGroup: false,
                            isRecall: lastMsgObj ? lastMsgObj.isRecalled || false : false,
                            isPinned,
                            isHidden,
                            categories
                        };
                    }));
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        total: usersWithData.length,
                        data: usersWithData
                    });
                }
            case 'getById':
                {
                    const idStr = requestId ? String(requestId) : '';
                    const isObjId = idStr ? __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr) && idStr.length === 24 : false;
                    const isNumeric = idStr ? !isNaN(Number(idStr)) : false;
                    if (isObjId || isNumeric || code) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRowByIdOrCode"])(collectionName, {
                            _id: idStr,
                            code
                        }));
                    }
                    if (!idStr) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(null);
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        filters: {
                            $or: [
                                {
                                    username: idStr
                                },
                                {
                                    _id: idStr
                                }
                            ]
                        },
                        limit: 1
                    });
                    const row = (result.data || [])[0];
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(row ? {
                        rowIndex: 0,
                        row
                    } : null);
                }
            case 'update':
                if (!field || value === undefined) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing field or value for update'
                    }, {
                        status: 400
                    });
                }
                try {
                    if (field === '_id') {
                        const userCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(collectionName);
                        const idStr = String(value);
                        const orFilters = [
                            {
                                _id: idStr
                            }
                        ];
                        if (!isNaN(Number(idStr))) {
                            orFilters.push({
                                _id: Number(idStr)
                            });
                        }
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr) && idStr.length === 24) {
                            orFilters.push({
                                _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](idStr)
                            });
                        }
                        const result = await userCollection.updateOne({
                            $or: orFilters
                        }, {
                            $set: data || {}
                        });
                        if (result.matchedCount === 0) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                                error: 'User not found'
                            }, {
                                status: 404
                            });
                        }
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true,
                            modified: result.modifiedCount
                        });
                    } else {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, field, value, data || {});
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: true
                        });
                    }
                } catch (error) {
                    console.error('Update error:', error);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Invalid ID format or update failed'
                    }, {
                        status: 400
                    });
                }
            case 'delete':
                if (!field || value === undefined) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Missing field or value for delete'
                    }, {
                        status: 400
                    });
                }
                const deleteValue = field === '_id' && typeof value === 'string' && __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(value) ? new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](value) : value;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteByField"])(collectionName, field, deleteValue);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true
                });
            case 'toggleChatStatus':
                {
                    if (!currentUserId || !data || !roomId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing currentUserId, roomId or data'
                        }, {
                            status: 400
                        });
                    }
                    const statusData = data;
                    const partnerId = roomId;
                    const updateFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildToggleChatStatusFields"])(String(currentUserId), statusData);
                    if (!updateFields) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'No status provided'
                        }, {
                            status: 400
                        });
                    }
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', partnerId, updateFields);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateNickname':
                {
                    if (!currentUserId || !data || !roomId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing currentUserId, roomId or data'
                        }, {
                            status: 400
                        });
                    }
                    const nicknameData = data;
                    const partnerId = roomId;
                    const updateFields = {};
                    updateFields[`nicknames.${currentUserId}`] = nicknameData.nickname;
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', partnerId, updateFields);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateCategories':
                {
                    if (!currentUserId || !data || !roomId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing currentUserId, roomId or data'
                        }, {
                            status: 400
                        });
                    }
                    const payload = data;
                    const partnerId = roomId;
                    const updateFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildUpdateCategoriesFields"])(String(currentUserId), payload.categories);
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', partnerId, updateFields);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'updateTags':
                {
                    if (!currentUserId || !data || !roomId) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: 'Missing currentUserId, roomId or data'
                        }, {
                            status: 400
                        });
                    }
                    const payload = data;
                    const partnerId = roomId;
                    const updateFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatUpdateFields$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildUpdateTagsFields"])(String(currentUserId), payload.tags);
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByField"])(collectionName, '_id', partnerId, updateFields);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        result
                    });
                }
            case 'login':
                {
                    const loginData = data || {};
                    const { username, password } = loginData;
                    if (!username || !password) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            message: 'Thiếu tên người dùng hoặc mật khẩu!'
                        }, {
                            status: 400
                        });
                    }
                    const queryResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllRows"])(collectionName, {
                        filters: {
                            username
                        },
                        limit: 1
                    });
                    const found = queryResult.data?.[0];
                    if (!found) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            message: 'Username hoặc Password không đúng!'
                        }, {
                            status: 401
                        });
                    }
                    let ok = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(String(password), String(found.password || ''));
                    if (!ok && String(found.password || '') === String(password)) {
                        try {
                            const userCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(collectionName);
                            const idStr = String(found._id);
                            const orFilters = [
                                {
                                    _id: idStr
                                }
                            ];
                            if (!isNaN(Number(idStr))) {
                                orFilters.push({
                                    _id: Number(idStr)
                                });
                            }
                            if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"].isValid(idStr) && idStr.length === 24) {
                                orFilters.push({
                                    _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](idStr)
                                });
                            }
                            const hashed = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(String(password), 12);
                            await userCollection.updateOne({
                                $or: orFilters
                            }, {
                                $set: {
                                    password: hashed
                                }
                            });
                            ok = true;
                        } catch  {}
                    }
                    if (!ok) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            message: 'Username hoặc Password không đúng!'
                        }, {
                            status: 401
                        });
                    }
                    const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fingerprintFromHeaders"])({
                        'user-agent': req.headers.get('user-agent') || '',
                        'accept-language': req.headers.get('accept-language') || ''
                    });
                    const sid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])({
                        userId: String(found._id),
                        deviceName: 'web',
                        headers: {
                            'user-agent': req.headers.get('user-agent') || '',
                            'accept-language': req.headers.get('accept-language') || ''
                        },
                        ttlDays: 3650
                    });
                    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signJWT"])({
                        _id: String(found._id),
                        username: String(found.username || ''),
                        name: String(found.name || ''),
                        sid,
                        fp
                    });
                    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        token,
                        user: {
                            _id: String(found._id),
                            name: String(found.name || ''),
                            username: String(found.username || ''),
                            avatar: found.avatar,
                            role: found.role,
                            department: found.department,
                            status: found.status,
                            phone: found['phone'],
                            gender: found['gender'],
                            birthday: found['birthday'],
                            email: found['email'],
                            address: found['address'],
                            title: found['title'],
                            background: found['background'],
                            bio: found['bio'],
                            nicknames: found.nicknames,
                            categoryTags: Array.isArray(found.categoryTags) ? found.categoryTags : []
                        }
                    });
                    const refreshToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signEphemeralJWT"])({
                        purpose: 'refresh',
                        sub: String(found._id),
                        username: String(found.username || ''),
                        name: String(found.name || ''),
                        fp
                    }, 3650 * 24 * 3600);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setAuthCookies"])(res, {
                        accessToken: token,
                        sid,
                        refreshToken
                    });
                    return res;
                }
            case 'logout':
                {
                    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authCookies$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clearAuthCookies"])(res);
                    return res;
                }
            case 'changePassword':
                {
                    const changeData = data;
                    const { userId, currentPassword, newPassword } = changeData;
                    if (!userId || !currentPassword || !newPassword) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            message: 'Thiếu thông tin bắt buộc'
                        }, {
                            status: 400
                        });
                    }
                    // 🔥 FIX: Xử lý cả ObjectId và number
                    const userCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoDBCRUD$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollection"])(collectionName);
                    const queryId = createIdFilter(userId);
                    // 🔥 Type-safe filter
                    const filter = {
                        _id: queryId
                    };
                    const userDoc = await userCollection.findOne(filter);
                    if (!userDoc || !userDoc.password) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            message: 'Không tìm thấy tài khoản'
                        }, {
                            status: 404
                        });
                    }
                    const ok = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(String(currentPassword), String(userDoc.password || ''));
                    if (!ok) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            success: false,
                            message: 'Mật khẩu hiện tại không đúng'
                        }, {
                            status: 401
                        });
                    }
                    const hashed = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(String(newPassword), 12);
                    await userCollection.updateOne(filter, {
                        $set: {
                            password: hashed
                        }
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        message: 'Đổi mật khẩu thành công'
                    });
                }
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid action'
                }, {
                    status: 400
                });
        }
    } catch (error) {
        console.error('API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f4d5d03._.js.map