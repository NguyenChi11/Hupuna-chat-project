(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__2c15236a._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
;
const SECRET_KEY = process.env.SECRET_KEY || '';
const ALG = 'HS256';
function toBase64(input) {
    if (typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"] !== 'undefined') {
        return typeof input === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input).toString('base64') : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input).toString('base64');
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
    if (typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"] !== 'undefined') return new Uint8Array(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(b64, 'base64'));
    const binary = atob(b64);
    const arr = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)arr[i] = binary.charCodeAt(i);
    return arr;
}
function bytesToUtf8(bytes) {
    if (typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"] !== 'undefined') return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(bytes).toString('utf8');
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
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('session_token')?.value;
    if (!token) return null;
    return await verifyJWT(token);
}
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [middleware-edge] (ecmascript)");
;
;
// Danh sách các trang cần bảo vệ
const protectedRoutes = [
    '/home'
];
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // 1. Kiểm tra trang cần bảo vệ
    if (protectedRoutes.some((route)=>pathname.startsWith(route))) {
        const token = request.cookies.get('session_token')?.value;
        // Nếu không có token hoặc token sai -> Đá về trang login (/)
        if (!token || !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyJWT"])(token)) {
            const refresh = request.cookies.get('refresh_token')?.value || '';
            if (refresh) {
                const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyJWT"])(refresh);
                if (payload && payload['purpose'] === 'refresh') {
                    const enc = new TextEncoder();
                    const ua = request.headers.get('user-agent') || '';
                    const al = request.headers.get('accept-language') || '';
                    const data = enc.encode(`${ua}|${al}`);
                    const digest = await crypto.subtle.digest('SHA-256', data);
                    const hex = Array.from(new Uint8Array(digest)).map((b)=>b.toString(16).padStart(2, '0')).join('');
                    const tfp = typeof payload['fp'] === 'string' ? payload['fp'] : '';
                    const userId = typeof payload['sub'] === 'string' ? payload['sub'] : '';
                    const username = typeof payload['username'] === 'string' ? payload['username'] : '';
                    const name = typeof payload['name'] === 'string' ? payload['name'] : '';
                    if (userId && tfp && tfp === hex) {
                        const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signJWT"])({
                            _id: userId,
                            username,
                            name,
                            fp: hex
                        });
                        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
                        res.cookies.set('session_token', accessToken, {
                            httpOnly: true,
                            secure: ("TURBOPACK compile-time value", "development") === 'production',
                            path: '/',
                            sameSite: 'lax',
                            maxAge: 30 * 24 * 3600
                        });
                        const rotateRefresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["signEphemeralJWT"])({
                            purpose: 'refresh',
                            sub: userId,
                            username,
                            name,
                            fp: hex
                        }, 3650 * 24 * 3600);
                        res.cookies.set('refresh_token', rotateRefresh, {
                            httpOnly: true,
                            secure: ("TURBOPACK compile-time value", "development") === 'production',
                            path: '/',
                            sameSite: 'lax',
                            maxAge: 3650 * 24 * 3600
                        });
                        return res;
                    }
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
        }
    }
    // 2. Nếu đã đăng nhập mà vào trang Login (/) -> Đá vào trang chủ
    if (pathname === '/') {
        const token = request.cookies.get('session_token')?.value;
        if (token && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyJWT"])(token)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/home', request.url));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/',
        '/home/:path*',
        '/api/conversations/:path*',
        '/api/message/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__2c15236a._.js.map