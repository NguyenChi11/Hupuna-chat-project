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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
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
"[project]/src/types/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USERS_COLLECTION_NAME",
    ()=>USERS_COLLECTION_NAME
]);
const USERS_COLLECTION_NAME = 'Users';
}),
"[project]/src/app/api/users/me/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(mongodb)/connectToDatabase.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
;
;
;
const runtime = 'nodejs';
async function GET(req) {
    const { db } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$mongodb$292f$connectToDatabase$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    let userId = null;
    let refreshedAccess = null;
    const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fingerprintFromHeaders"])({
        'user-agent': req.headers.get('user-agent') || '',
        'accept-language': req.headers.get('accept-language') || ''
    });
    const sid = req.cookies.get('sid')?.value || null;
    if (sid) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])(sid);
        if (session) userId = session.userId;
    }
    if (!userId) {
        const token = req.cookies.get('session_token')?.value || null;
        if (token) {
            // 🎯 FIX: Gán kiểu rõ ràng cho payload của Access Token
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyJWT"])(token);
            // Truy cập các thuộc tính đã được định kiểu, không còn implicit 'any'
            const pid = payload && typeof payload._id === 'string' ? payload._id : undefined;
            const tfp = payload && typeof payload.fp === 'string' ? payload.fp : '';
            if (pid && tfp && tfp === fp) userId = pid;
        }
    }
    if (!userId) {
        const rft = req.cookies.get('refresh_token')?.value || null;
        if (rft) {
            // 🎯 FIX: Gán kiểu rõ ràng cho payload của Refresh Token
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyJWT"])(rft);
            // Truy cập các thuộc tính đã được định kiểu
            const sub = payload && typeof payload.sub === 'string' ? payload.sub : undefined;
            const tfp = payload && typeof payload.fp === 'string' ? payload.fp : '';
            if (payload && payload.purpose === 'refresh' && sub && tfp === fp) {
                userId = sub;
                // Các trường này đã có kiểu string | undefined, nên không cần kiểm tra kiểu nữa
                const username = typeof payload.username === 'string' ? payload.username : '';
                const name = typeof payload.name === 'string' ? payload.name : '';
                refreshedAccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signJWT"])({
                    _id: sub,
                    username,
                    name,
                    fp
                });
            }
        }
    }
    const isValidObjectId = (id)=>{
        if (!id) return false;
        return id.length === 24 && /^[0-9a-fA-F]{24}$/.test(id);
    };
    // Khai báo rõ ràng kiểu của query là UserIdFilter
    let query;
    if (!userId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false
    }, {
        status: 401
    });
    if (isValidObjectId(userId)) {
        query = {
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](userId)
        };
    } else if (!isNaN(Number(userId))) {
        query = {
            _id: Number(userId)
        };
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: 'Invalid user ID format.'
        }, {
            status: 401
        });
    }
    // Gán kiểu cho collection bằng <UserDocument> (Đã fix lỗi trước đó)
    const user = await db.collection(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["USERS_COLLECTION_NAME"]).findOne(query);
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        user: {
            ...user,
            password: undefined
        }
    });
    // Nếu chưa cấp refreshedAccess (do dùng sid fallback), cấp token mới từ thông tin user hiện tại
    if (!refreshedAccess && sid && user) {
        const username = typeof user.username === 'string' ? user.username : '';
        const name = typeof user.name === 'string' ? user.name : '';
        const userIdStr = typeof user._id === 'object' && 'toHexString' in user._id ? user._id.toHexString() : String(user._id);
        refreshedAccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signJWT"])({
            _id: userIdStr,
            username,
            name,
            fp
        });
    }
    if (refreshedAccess) {
        res.cookies.set('session_token', refreshedAccess, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            path: '/',
            sameSite: 'lax',
            maxAge: 30 * 24 * 3600
        });
    }
    return res;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7d3f760f._.js.map