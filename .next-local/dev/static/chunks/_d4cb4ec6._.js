(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/cookie.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/cookieHelper.ts
__turbopack_context__.s([
    "cookieBase",
    ()=>cookieBase
]);
function setCookie(key, value, options = {}) {
    if (typeof document === 'undefined') return;
    const parts = [
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ];
    const path = options.path ?? '/';
    if (path) parts.push(`Path=${path}`);
    if (options.domain) parts.push(`Domain=${options.domain}`);
    if (typeof options.maxAge === 'number') parts.push(`Max-Age=${Math.max(0, options.maxAge)}`);
    else if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
    if (options.secure) parts.push('Secure');
    if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
    document.cookie = parts.join('; ');
}
function getCookie(key) {
    if (typeof document === 'undefined') return null;
    const name = `${encodeURIComponent(key)}=`;
    const cookies = document.cookie ? document.cookie.split('; ') : [];
    for (const c of cookies){
        if (c.startsWith(name)) return decodeURIComponent(c.slice(name.length));
    }
    return null;
}
function deleteCookie(key, options = {}) {
    setCookie(key, '', {
        ...options,
        maxAge: 0
    });
}
const COOKIE_OPTIONS = {
    path: '/',
    maxAge: 60 * 60 * 24 * 30
};
const cookieBase = {
    set (key, value) {
        setCookie(key, JSON.stringify(value), COOKIE_OPTIONS);
    },
    get (key) {
        const cookie = getCookie(key);
        if (!cookie) return null;
        try {
            return JSON.parse(cookie);
        } catch  {
            return null;
        }
    },
    remove (key) {
        deleteCookie(key, {
            path: '/'
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "accentAwareIncludes",
    ()=>accentAwareIncludes,
    "buildAccentInsensitiveRegex",
    ()=>buildAccentInsensitiveRegex,
    "computeMatchScore",
    ()=>computeMatchScore,
    "getProxyUrl",
    ()=>getProxyUrl,
    "hasDiacritics",
    ()=>hasDiacritics,
    "isLink",
    ()=>isLink,
    "isVideoFile",
    ()=>isVideoFile,
    "normalizeNoAccent",
    ()=>normalizeNoAccent,
    "resolveSocketUrl",
    ()=>resolveSocketUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const getProxyUrl = (url, download)=>{
    if (!url) return '';
    // Các link khác (S3, Firebase, External, PocketBase...) -> Giữ nguyên
    return url;
};
const isVideoFile = (fileName)=>{
    if (!fileName) return false;
    const videoExtensions = [
        'mp4',
        'mov',
        'avi',
        'mkv',
        'webm',
        'flv'
    ];
    const ext = fileName.split('.').pop()?.toLowerCase();
    return videoExtensions.includes(ext || '');
};
const isLink = (str)=>{
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '(' + // Bắt đầu nhóm Hostname
    'localhost|' + // ✅ THÊM DÒNG NÀY: Chấp nhận localhost
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})|' + // domain name (google.com)
    '((\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (127.0.0.1)
    ')' + // Kết thúc nhóm Hostname
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str || '');
};
const resolveSocketUrl = ()=>{
    const envUrl = (("TURBOPACK compile-time value", "http://localhost:3002") || '').trim();
    const envPort = (("TURBOPACK compile-time value", "3002") || '').trim();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const isSecure = protocol === 'https:';
    // 1. Ưu tiên URL từ biến môi trường
    if (envUrl) {
        let finalUrl = envUrl;
        // Nếu URL chứa localhost/127.0.0.1 -> thay bằng hostname hiện tại
        if (finalUrl.includes('localhost') || finalUrl.includes('127.0.0.1')) {
            finalUrl = finalUrl.replace('localhost', host).replace('127.0.0.1', host);
        }
        // Nếu đã có protocol
        if (finalUrl.match(/^(ws|wss|http|https):\/\//)) {
            // Nếu đang ở HTTPS, bắt buộc dùng WSS/HTTPS để tránh Mixed Content
            if (isSecure) {
                return finalUrl.replace(/^http:/, 'https:').replace(/^ws:/, 'wss:');
            }
            return finalUrl;
        }
        // Nếu chưa có protocol
        const proto = isSecure ? 'https:' : 'http:';
        return `${proto}//${finalUrl}`;
    } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // 2. Logic fallback (tự động đoán)
    const port = envPort || '3002';
    // Localhost / Dev -> Luôn dùng http + port
    if (host === 'localhost' || host === '127.0.0.1') {
        return `http://${host}:${port}`;
    }
    // Production (HTTPS)
    if (isSecure) {
        // Nếu không set port cụ thể trong ENV, ta giả định dùng port 443 (qua Nginx proxy)
        // để tránh lỗi Mixed Content (wss://...:3002 yêu cầu SSL trên port 3002)
        if (!envPort) {
            return `https://${host}`;
        }
        // Nếu có set port, dùng port đó với https (wss)
        return `https://${host}:${port}`;
    }
    // Production (HTTP) hoặc IP LAN
    return `${protocol}//${host}:${port}`;
};
const normalizeNoAccent = (str)=>{
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
};
const normalizeNoAccentKeepDHook = (str)=>{
    return String(str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC').toLowerCase();
};
const buildAccentInsensitiveRegex = (term)=>{
    const escape = (ch)=>ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = [];
    for (const ch of term){
        if (/\s/.test(ch)) {
            parts.push('\\s+');
        } else if (/[A-Za-z]/.test(ch)) {
            if (ch.toLowerCase() === 'd') {
                parts.push('(?:[dđ][\\u0300-\\u036f]*)');
            } else {
                parts.push(`(?:${escape(ch)}[\\u0300-\\u036f]*)`);
            }
        } else {
            parts.push(escape(ch));
        }
    }
    const pattern = parts.join('');
    return new RegExp(`(${pattern})`, 'giu');
};
const hasDiacritics = (str)=>{
    const s = String(str || '');
    const sNFD = s.normalize('NFD');
    if (/[\u0300-\u036f]/.test(sNFD)) return true;
    return /[đĐ]/.test(s);
};
const computeMatchScore = (text, term)=>{
    const escape = (v)=>v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const txt = String(text || '').toLowerCase();
    const q = String(term || '').toLowerCase();
    const nTxt = normalizeNoAccent(txt);
    const nQ = normalizeNoAccent(q);
    if (!nTxt.includes(nQ)) return -Infinity;
    const qHasDia = hasDiacritics(q);
    const exactIdx = txt.indexOf(q);
    const normIdx = nTxt.indexOf(nQ);
    const wordExact = new RegExp(`(^|\\b)${escape(q)}`, 'i').test(txt);
    const wordNorm = new RegExp(`(^|\\b)${escape(nQ)}`, 'i').test(nTxt);
    let score = 0;
    if (exactIdx >= 0) {
        score += 50;
        if (qHasDia) score += 30;
        if (exactIdx === 0) score += 20;
        if (wordExact) score += 10;
        score += Math.max(0, 10 - exactIdx);
    } else {
        score += 20;
        if (normIdx === 0) score += 10;
        if (wordNorm) score += 5;
        score += Math.max(0, 5 - normIdx);
    }
    const lengthBoost = Math.min(10, Math.floor(nQ.length / Math.max(1, nTxt.length) * 10));
    score += lengthBoost;
    return score;
};
const hasToneMarks = (str)=>{
    const s = String(str || '').normalize('NFD');
    return /[\u0300\u0301\u0303\u0309\u0323]/.test(s);
};
const stripToneMarks = (str)=>{
    return String(str || '').normalize('NFD').replace(/[\u0300\u0301\u0303\u0309\u0323]/g, '').normalize('NFC').toLowerCase();
};
const stripBaseMarks = (str)=>{
    return String(str || '').normalize('NFD').replace(/[\u0302\u0306\u031B]/g, '').normalize('NFC').toLowerCase();
};
const accentAwareIncludes = (text, keyword)=>{
    const t = String(text || '');
    const k = String(keyword || '');
    if (!k.trim()) return true;
    const tNFC = t.normalize('NFC');
    const kNFC = k.normalize('NFC');
    const kHasDia = hasDiacritics(kNFC);
    if (kHasDia) {
        if (hasToneMarks(kNFC)) {
            const tBase = stripBaseMarks(tNFC);
            const kBase = stripBaseMarks(kNFC);
            return tBase.includes(kBase);
        }
        const tNoTone = stripToneMarks(tNFC);
        const kNoTone = stripToneMarks(kNFC);
        const tNoAccent = normalizeNoAccentKeepDHook(tNoTone);
        const kNoAccent = normalizeNoAccentKeepDHook(kNoTone);
        return tNoAccent.includes(kNoAccent);
    }
    const tNo = normalizeNoAccentKeepDHook(tNFC);
    const kNo = normalizeNoAccentKeepDHook(kNFC);
    return tNo.includes(kNo);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/CropImageModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CropImageModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-advanced-cropper/dist/index.esm-bundler.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$advanced$2d$cropper$2f$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/advanced-cropper/types/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CropImageModal({ open, src, onClose, onConfirm, aspectRatio = 1, circle = false, fileName = 'cropped.jpg', outputType = 'image/jpeg', quality = 0.92 }) {
    _s();
    const cropperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CropImageModal.useMemo[stencil]": ()=>circle ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CircleStencil"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RectangleStencil"]
    }["CropImageModal.useMemo[stencil]"], [
        circle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CropImageModal.useEffect": ()=>{
            if (!open) setReady(false);
        }
    }["CropImageModal.useEffect"], [
        open
    ]);
    const handleZoom = (delta)=>{
        try {
            const factor = 1 + delta;
            cropperRef.current?.zoomImage(factor, {
                transitions: true
            });
        } catch  {}
    };
    const handleConfirm = async ()=>{
        const canvas = cropperRef.current?.getCanvas();
        if (!canvas) return;
        canvas.toBlob((blob)=>{
            if (!blob) return;
            const ext = outputType === 'image/png' ? 'png' : outputType === 'image/webp' ? 'webp' : 'jpg';
            const safeName = fileName?.trim() ? fileName : `cropped.${ext}`;
            const file = new File([
                blob
            ], safeName, {
                type: outputType
            });
            onConfirm(file);
        }, outputType, quality);
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-2xl w-[90vw] max-w-[800px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 border-b flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Điều chỉnh ảnh"
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/CropImageModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/CropImageModal.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/CropImageModal.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[50vh] min-h-[320px] bg-gray-50 rounded-lg overflow-hidden",
                            children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Cropper"], {
                                ref: cropperRef,
                                src: src,
                                className: "w-full h-full",
                                stencilComponent: stencil,
                                stencilProps: {
                                    aspectRatio,
                                    movable: true,
                                    resizable: true
                                },
                                imageRestriction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$advanced$2d$cropper$2f$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageRestriction"].fitArea,
                                onReady: ()=>setReady(true),
                                defaultSize: ({ imageSize })=>({
                                        width: Math.min(imageSize.width, 800),
                                        height: Math.min(imageSize.height, 600)
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/CropImageModal.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-gray-500",
                                children: "Không có ảnh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/CropImageModal.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleZoom(-0.1),
                                            className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700",
                                            children: "Thu nhỏ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleZoom(0.1),
                                            className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700",
                                            children: "Phóng to"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/CropImageModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700",
                                            children: "Hủy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleConfirm,
                                            disabled: !ready,
                                            className: "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60",
                                            children: "Lưu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/CropImageModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/CropImageModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/CropImageModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/CropImageModal.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/base/CropImageModal.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(CropImageModal, "txa81MB524UswfFYwokIKGzqgiE=");
_c = CropImageModal;
var _c;
__turbopack_context__.k.register(_c, "CropImageModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(profile)/popup-profile/ProfileView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function ProfileView({ user, displayName, displayId, departmentOptions, statusOptions, onEdit, onChangePassword }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900",
                        children: displayName
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: [
                            "ID: ",
                            displayId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    user.department !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOfficeBuilding"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 52,
                            columnNumber: 19
                        }, void 0),
                        label: "Phòng ban",
                        value: departmentOptions.find((o)=>o.value === String(user.department))?.label || '—'
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    user.status !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiStatusOnline"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 61,
                            columnNumber: 19
                        }, void 0),
                        label: "Trạng thái",
                        value: statusOptions.find((o)=>o.value === String(user.status))?.label || '—'
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 67,
                            columnNumber: 24
                        }, void 0),
                        label: "Số điện thoại",
                        value: user.phone
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiIdentification"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 68,
                            columnNumber: 24
                        }, void 0),
                        label: "Giới tính",
                        value: user.gender
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCalendar"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 69,
                            columnNumber: 24
                        }, void 0),
                        label: "Ngày sinh",
                        value: user.birthday
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMail"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 70,
                            columnNumber: 24
                        }, void 0),
                        label: "Email",
                        value: user.email
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 71,
                            columnNumber: 24
                        }, void 0),
                        label: "Địa chỉ",
                        value: user.address
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiBriefcase"], {
                            className: "w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 72,
                            columnNumber: 24
                        }, void 0),
                        label: "Chức vụ",
                        value: user.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onEdit,
                        className: "cursor-pointer w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPencil"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            "Cập nhật thông tin"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onChangePassword,
                        className: "cursor-pointer w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg flex items-center justify-center gap-2 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            "Đổi mật khẩu"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = ProfileView;
// Component nhỏ gọn, đẹp cho từng dòng thông tin
function InfoRow({ icon, label, value, bold = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0.5",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium text-gray-500",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm ${bold ? 'font-bold text-gray-900' : 'font-medium text-gray-800'} mt-0.5`,
                        children: value ? String(value) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "Chưa cập nhật"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                            lineNumber: 115,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(profile)/popup-profile/ProfileView.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c1 = InfoRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileView");
__turbopack_context__.k.register(_c1, "InfoRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Field({ label, children, icon, required }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mr-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2 text-sm font-semibold text-gray-700",
                children: [
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-indigo-600",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Field.tsx",
                        lineNumber: 15,
                        columnNumber: 18
                    }, this),
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Field.tsx",
                        lineNumber: 17,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Field.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Field.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Field;
var _c;
__turbopack_context__.k.register(_c, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dropdown",
    ()=>Dropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
function Dropdown({ label, icon, items, open, onToggle, onSelect, value, placeholder = 'Chọn một mục', className = '' }) {
    const selectedLabel = items.find((i)=>i.value === value)?.label || '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: " text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                children: [
                    icon,
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Dropdown.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: `
          w-full pl-4 pr-5 py-1.5 rounded-2xl border-2 border-gray-200 
          bg-white text-left text-lg font-medium transition-all
          flex items-center justify-between
          focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
          hover:border-gray-300
          ${open ? 'border-indigo-500 ring-4 ring-indigo-100' : ''}
          ${className}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: selectedLabel ? 'text-gray-900' : 'text-gray-400',
                        children: selectedLabel || placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Dropdown.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronDown"], {
                        className: `w-6 h-6 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Dropdown.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Dropdown.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Dropdown.tsx",
                lineNumber: 57,
                columnNumber: 16
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-30 w-full mt-2 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-64 overflow-y-auto custom-scrollbar",
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onSelect(item.value);
                                onToggle();
                            },
                            className: `
                  w-full px-5 py-4 text-left text-lg font-medium flex items-center justify-between
                  transition-all duration-150 hover:bg-indigo-50
                  ${value === item.value ? 'bg-indigo-50 text-indigo-700' : 'text-gray-800'}
                `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Dropdown.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this),
                                value === item.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                    className: "w-6 h-6 text-indigo-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Dropdown.tsx",
                                    lineNumber: 77,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, item.value, true, {
                            fileName: "[project]/src/components/ui/Dropdown.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Dropdown.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Dropdown.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Dropdown.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(profile)/popup-profile/EditInfoView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditInfoView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function EditInfoView({ form, setForm, onSubmit, onCancel, departmentOptions, statusOptions, loading }) {
    _s();
    const [openDept, setOpenDept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openStatus, setOpenStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openGender, setOpenGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const genderOptions = [
        {
            value: 'Nam',
            label: 'Nam'
        },
        {
            value: 'Nữ',
            label: 'Nữ'
        },
        {
            value: 'Khác',
            label: 'Khác'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUser"], {
                            className: "w-5 h-5 text-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 41,
                            columnNumber: 22
                        }, void 0),
                        label: "Tên hiển thị",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: String(form.name ?? ''),
                            onChange: (e)=>setForm({
                                    ...form,
                                    name: e.target.value
                                }),
                            placeholder: "Ví dụ: Nguyễn Văn A",
                            className: "w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm font-medium transition-all bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                            className: "w-5 h-5 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 52,
                            columnNumber: 22
                        }, void 0),
                        label: "Số điện thoại",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            value: String(form.phone ?? ''),
                            onChange: (e)=>setForm({
                                    ...form,
                                    phone: e.target.value
                                }),
                            placeholder: "0123456789",
                            className: "w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiIdentification"], {
                            className: "w-5 h-5 text-purple-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 63,
                            columnNumber: 22
                        }, void 0),
                        label: "Giới tính",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                            items: genderOptions,
                            value: String(form.gender ?? ''),
                            placeholder: "Chọn giới tính",
                            open: openGender,
                            onToggle: ()=>{
                                setOpenGender(!openGender);
                                setOpenDept(false);
                                setOpenStatus(false);
                            },
                            onSelect: (v)=>{
                                setForm({
                                    ...form,
                                    gender: v
                                });
                                setOpenGender(false);
                            },
                            className: "h-[2.5rem] rounded-lg border border-gray-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCalendar"], {
                            className: "w-5 h-5 text-emerald-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 83,
                            columnNumber: 22
                        }, void 0),
                        label: "Ngày sinh",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: form.birthday ? String(form.birthday) : '',
                            onChange: (e)=>setForm({
                                    ...form,
                                    birthday: e.target.value
                                }),
                            className: "w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm font-medium transition-all bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMail"], {
                            className: "w-5 h-5 text-orange-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 93,
                            columnNumber: 22
                        }, void 0),
                        label: "Email",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            value: String(form.email ?? ''),
                            onChange: (e)=>setForm({
                                    ...form,
                                    email: e.target.value
                                }),
                            placeholder: "you@example.com",
                            className: "w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-sm font-medium transition-all bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiBriefcase"], {
                            className: "w-5 h-5 text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 104,
                            columnNumber: 22
                        }, void 0),
                        label: "Chức vụ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: String(form.title ?? ''),
                            onChange: (e)=>setForm({
                                    ...form,
                                    title: e.target.value
                                }),
                            placeholder: "Ví dụ: Nhân viên kinh doanh",
                            className: "w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm font-medium transition-all bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                                className: "w-5 h-5 text-rose-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                lineNumber: 116,
                                columnNumber: 24
                            }, void 0),
                            label: "Địa chỉ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: String(form.address ?? ''),
                                onChange: (e)=>setForm({
                                        ...form,
                                        address: e.target.value
                                    }),
                                placeholder: "Số nhà, đường, phường/xã...",
                                className: "w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-sm font-medium transition-all bg-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOfficeBuilding"], {
                                className: "w-5 h-5 text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                lineNumber: 129,
                                columnNumber: 24
                            }, void 0),
                            label: "Phòng ban",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                items: departmentOptions,
                                value: String(form.department ?? ''),
                                placeholder: "Chọn phòng ban",
                                open: openDept,
                                onToggle: ()=>{
                                    setOpenDept(!openDept);
                                    setOpenStatus(false);
                                    setOpenGender(false);
                                },
                                onSelect: (v)=>{
                                    setForm({
                                        ...form,
                                        department: v
                                    });
                                    setOpenDept(false);
                                },
                                className: "h-[2.5rem] rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiStatusOnline"], {
                                className: "w-5 h-5 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                lineNumber: 151,
                                columnNumber: 24
                            }, void 0),
                            label: "Trạng thái làm việc",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                items: statusOptions,
                                value: String(form.status ?? ''),
                                placeholder: "Chọn trạng thái",
                                open: openStatus,
                                onToggle: ()=>{
                                    setOpenStatus(!openStatus);
                                    setOpenDept(false);
                                    setOpenGender(false);
                                },
                                onSelect: (v)=>{
                                    setForm({
                                        ...form,
                                        status: v
                                    });
                                    setOpenStatus(false);
                                },
                                className: "h-[2.5rem] rounded-lg border border-gray-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSubmit,
                        disabled: loading,
                        className: "cursor-pointer flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                        children: loading ? 'Đang lưu...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Lưu thay đổi",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUser"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "cursor-pointer flex-1 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm transition-all active:scale-98",
                        children: "Hủy bỏ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(profile)/popup-profile/EditInfoView.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(EditInfoView, "KybK6QdtESsK8X/Jv+IvRfjJHPM=");
_c = EditInfoView;
var _c;
__turbopack_context__.k.register(_c, "EditInfoView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangePasswordView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ChangePasswordView({ form, setForm, onSubmit, onCancel, loading }) {
    _s();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        current: false,
        new: false,
        confirm: false
    });
    const toggleShow = (field)=>{
        setShowPassword((prev)=>({
                ...prev,
                [field]: !prev[field]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Mật khẩu hiện tại",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: showPassword.current ? 'text' : 'password',
                                    value: form.currentPassword,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            currentPassword: e.target.value
                                        }),
                                    placeholder: "Nhập mật khẩu hiện tại",
                                    className: "w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleShow('current'),
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition",
                                    children: showPassword.current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEye"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Mật khẩu mới",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: showPassword.new ? 'text' : 'password',
                                    value: form.newPassword,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            newPassword: e.target.value
                                        }),
                                    placeholder: "Tạo mật khẩu mạnh",
                                    className: "w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm font-medium transition-all bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleShow('new'),
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition",
                                    children: showPassword.new ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEye"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Xác nhận mật khẩu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: showPassword.confirm ? 'text' : 'password',
                                    value: form.confirmPassword,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            confirmPassword: e.target.value
                                        }),
                                    placeholder: "Nhập lại mật khẩu mới",
                                    className: "w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleShow('confirm'),
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition",
                                    children: showPassword.confirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEye"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSubmit,
                        disabled: loading,
                        className: "cursor-pointer flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                        children: loading ? 'Đang đổi...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Đổi mật khẩu",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "cursor-pointer flex-1 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm transition-all active:scale-98",
                        children: "Hủy bỏ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ChangePasswordView, "WrU7tNhltiSSW3ADlzUDJXOAayM=");
_c = ChangePasswordView;
// Giữ nguyên hoàn toàn cấu trúc Field
function Field({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                        className: "w-3.5 h-3.5 text-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChangePasswordView");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(profile)/popup-profile/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Header({ displayName, backgroundUrl, avatarUrl, isUploading, avatarFailed, setAvatarFailed, onSelectFile, isUploadingBackground, onSelectBackgroundFile }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-32 relative mb-16",
        children: [
            backgroundUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(backgroundUrl),
                alt: "bg",
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            isUploadingBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 flex items-center justify-center text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 px-3 py-2 rounded bg-black/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Đang tải..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer group transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCamera"], {
                        className: "text-white w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        className: "sr-only",
                        onChange: onSelectBackgroundFile,
                        disabled: Boolean(isUploadingBackground)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 -bottom-14 -translate-x-1/2 w-28 h-28 p-1 bg-white rounded-full overflow-hidden shadow-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "group cursor-pointer relative block w-full h-full rounded-full overflow-hidden",
                    children: [
                        !avatarFailed && avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatarUrl),
                            width: 128,
                            height: 128,
                            className: "w-full h-full object-cover",
                            alt: displayName,
                            onError: ()=>setAvatarFailed(true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold",
                            children: displayName[0]?.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCamera"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-black/40 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            className: "sr-only",
                            onChange: onSelectFile,
                            disabled: isUploading
                        }, void 0, false, {
                            fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(profile)/popup-profile/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useUploadAvatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUploadAvatar",
    ()=>useUploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useUploadAvatar(user, onAvatarUpdated) {
    _s();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarFailed, setAvatarFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const upload = async (file, resetInput)=>{
        try {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('roomId', 'avatar');
            formData.append('sender', String(user._id));
            formData.append('receiver', '');
            formData.append('type', 'image');
            formData.append('folderName', 'Avatars');
            const uploadRes = await fetch(`/api/upload?uploadId=avatar_${user._id}`, {
                method: 'POST',
                body: formData
            });
            const json = await uploadRes.json();
            if (!json.success || !json.link) throw new Error('Upload thất bại');
            const avatarUrl = json.link;
            // Update DB
            await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'update',
                    field: '_id',
                    value: String(user._id),
                    data: {
                        avatar: avatarUrl
                    }
                })
            });
            // Update localStorage
            const raw = localStorage.getItem('info_user');
            if (raw) {
                const parsed = JSON.parse(raw);
                localStorage.setItem('info_user', JSON.stringify({
                    ...parsed,
                    avatar: avatarUrl
                }));
            }
            onAvatarUpdated?.(avatarUrl);
            toast({
                type: 'success',
                message: 'Cập nhật ảnh đại diện thành công!'
            });
        } catch  {
            toast({
                type: 'error',
                message: 'Lỗi khi cập nhật ảnh'
            });
        } finally{
            setIsUploading(false);
            resetInput();
        }
    };
    return {
        upload,
        isUploading,
        avatarFailed,
        setAvatarFailed
    };
}
_s(useUploadAvatar, "DlsimjZg2xM6QQ9mV2oxT0v5iPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useUpdateUser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUpdateUser",
    ()=>useUpdateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useUpdateUser(userId, onUpdated) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const updateUser = async (data)=>{
        try {
            setLoading(true);
            const isPasswordChange = typeof data.currentPassword === 'string' && typeof data.newPassword === 'string';
            if (isPasswordChange) {
                const { currentPassword, newPassword, confirmPassword } = data;
                if (!currentPassword || !newPassword) {
                    toast({
                        type: 'error',
                        message: 'Vui lòng nhập đầy đủ mật khẩu'
                    });
                    return;
                }
                if (newPassword.length < 5) {
                    toast({
                        type: 'error',
                        message: 'Mật khẩu mới quá ngắn'
                    });
                    return;
                }
                if (confirmPassword && confirmPassword !== newPassword) {
                    toast({
                        type: 'error',
                        message: 'Xác nhận mật khẩu không khớp'
                    });
                    return;
                }
                const res = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'changePassword',
                        data: {
                            userId,
                            currentPassword,
                            newPassword
                        }
                    })
                });
                const json = await res.json();
                if (!res.ok || !json.success) {
                    toast({
                        type: 'error',
                        message: String(json.message || 'Đổi mật khẩu thất bại')
                    });
                    return;
                }
                toast({
                    type: 'success',
                    message: String(json.message || 'Đổi mật khẩu thành công')
                });
                onUpdated?.({});
            } else {
                const res = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'update',
                        field: '_id',
                        value: userId,
                        data
                    })
                });
                const json = await res.json();
                if (!res.ok || json.error) throw new Error(json.error);
                const raw = localStorage.getItem('info_user');
                if (raw) {
                    const parsed = JSON.parse(raw);
                    localStorage.setItem('info_user', JSON.stringify({
                        ...parsed,
                        ...data
                    }));
                }
                onUpdated?.(data);
                toast({
                    type: 'success',
                    message: 'Cập nhật thành công!'
                });
            }
        } catch  {
            toast({
                type: 'error',
                message: 'Lỗi hệ thống'
            });
        } finally{
            setLoading(false);
        }
    };
    return {
        updateUser,
        loading
    };
}
_s(useUpdateUser, "hLQoEQe2TlddhwTrkmbdhwfo1vA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/PopupProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PopupProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$CropImageModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/CropImageModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$ProfileView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(profile)/popup-profile/ProfileView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$EditInfoView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(profile)/popup-profile/EditInfoView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$ChangePasswordView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(profile)/popup-profile/ChangePasswordView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(profile)/popup-profile/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUploadAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUploadAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUpdateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUpdateUser.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function PopupProfile({ isOpen, onClose, user, onAvatarUpdated, onUserUpdated }) {
    _s();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('profile');
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { upload, isUploading, avatarFailed, setAvatarFailed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUploadAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadAvatar"])(user, onAvatarUpdated);
    const [isUploadingBackground, setIsUploadingBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cropOpen, setCropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cropSrc, setCropSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cropKind, setCropKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cropFileName, setCropFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('image.jpg');
    const [pendingReset, setPendingReset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { updateUser, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUpdateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateUser"])(String(user._id), onUserUpdated);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: String(user.name || ''),
        phone: String(user.phone || ''),
        gender: String(user.gender || ''),
        birthday: String(user.birthday || ''),
        email: String(user.email || ''),
        address: String(user.address || ''),
        title: String(user.title || ''),
        department: String(user.department || ''),
        status: String(user.status || '')
    });
    const [passwordForm, setPasswordForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const departmentOptions = [
        {
            id: 1,
            name: 'Ban lãnh đạo'
        },
        {
            id: 2,
            name: 'Quản lý'
        },
        {
            id: 3,
            name: 'Kinh doanh'
        },
        {
            id: 4,
            name: 'Thiết kế'
        },
        {
            id: 5,
            name: 'Sản xuất'
        },
        {
            id: 6,
            name: 'Sàn TMĐT'
        },
        {
            id: 7,
            name: 'Kế toán'
        },
        {
            id: 8,
            name: 'Kho TM'
        },
        {
            id: 9,
            name: 'HCNS'
        },
        {
            id: 10,
            name: 'Maketing'
        }
    ];
    const statusOptions = [
        {
            value: '1',
            label: 'Hoạt động'
        },
        {
            value: '2',
            label: 'Tạm khóa'
        },
        {
            value: '3',
            label: 'Nghỉ phép'
        }
    ];
    if (!isOpen) return null;
    const displayName = user.name || user.username || 'Tài khoản';
    const displayId = user.username || user._id;
    const profilePath = `/profile/${displayId}`;
    const profileUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.origin + profilePath : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[400px] bg-white rounded-lg shadow-2xl h-auto max-h-[90vh] overflow-hidden no-scrollbar relative flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 py-3 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-bold text-gray-900",
                            children: "Thông tin tài khoản"
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PopupProfile.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/PopupProfile.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PopupProfile.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto custom-scrollbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            displayName: displayName,
                            avatarUrl: user.avatar,
                            backgroundUrl: user.background,
                            isUploading: isUploading,
                            avatarFailed: avatarFailed,
                            setAvatarFailed: setAvatarFailed,
                            onSelectFile: (e)=>{
                                const inputEl = e.target;
                                const f = inputEl.files?.[0];
                                if (!f) return;
                                try {
                                    const reader = new FileReader();
                                    reader.onload = ()=>{
                                        setCropSrc(String(reader.result || ''));
                                        setCropKind('avatar');
                                        setCropFileName(f.name || 'avatar.jpg');
                                        setPendingReset(()=>()=>{
                                                inputEl.value = '';
                                            });
                                        setCropOpen(true);
                                    };
                                    reader.readAsDataURL(f);
                                } catch  {}
                            },
                            isUploadingBackground: isUploadingBackground,
                            onSelectBackgroundFile: async (e)=>{
                                const inputEl = e.currentTarget;
                                const f = inputEl.files?.[0];
                                if (!f) return;
                                try {
                                    const reader = new FileReader();
                                    reader.onload = ()=>{
                                        setCropSrc(String(reader.result || ''));
                                        setCropKind('background');
                                        setCropFileName(f.name || 'background.jpg');
                                        setPendingReset(()=>()=>{
                                                inputEl.value = '';
                                            });
                                        setCropOpen(true);
                                    };
                                    reader.readAsDataURL(f);
                                } catch  {}
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PopupProfile.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-5 px-4",
                            children: [
                                viewMode === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$ProfileView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    user: user,
                                    displayName: displayName,
                                    displayId: displayId,
                                    departmentOptions: departmentOptions.map((item)=>({
                                            value: String(item.id),
                                            label: item.name
                                        })),
                                    statusOptions: statusOptions.map((item)=>({
                                            value: String(item.value),
                                            label: item.label
                                        })),
                                    onEdit: ()=>setViewMode('editInfo'),
                                    onChangePassword: ()=>setViewMode('changePassword')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                viewMode === 'editInfo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$EditInfoView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    form: form,
                                    setForm: (updater)=>{
                                        if (typeof updater === 'function') {
                                            setForm((prev)=>{
                                                const next = updater(prev);
                                                return {
                                                    name: String(next.name ?? prev.name),
                                                    phone: String(next.phone ?? prev.phone),
                                                    gender: String(next.gender ?? prev.gender),
                                                    birthday: String(next.birthday ?? prev.birthday),
                                                    email: String(next.email ?? prev.email),
                                                    address: String(next.address ?? prev.address),
                                                    title: String(next.title ?? prev.title),
                                                    department: String(next.department ?? prev.department),
                                                    status: String(next.status ?? prev.status)
                                                };
                                            });
                                        } else {
                                            setForm({
                                                name: String(updater.name ?? form.name),
                                                phone: String(updater.phone ?? form.phone),
                                                gender: String(updater.gender ?? form.gender),
                                                birthday: String(updater.birthday ?? form.birthday),
                                                email: String(updater.email ?? form.email),
                                                address: String(updater.address ?? form.address),
                                                title: String(updater.title ?? form.title),
                                                department: String(updater.department ?? form.department),
                                                status: String(updater.status ?? form.status)
                                            });
                                        }
                                    },
                                    loading: loading,
                                    departmentOptions: departmentOptions.map((item)=>({
                                            value: String(item.id),
                                            label: item.name
                                        })),
                                    statusOptions: statusOptions.map((item)=>({
                                            value: String(item.value),
                                            label: item.label
                                        })),
                                    onSubmit: ()=>updateUser(form),
                                    onCancel: ()=>setViewMode('profile')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                viewMode === 'changePassword' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$profile$292f$popup$2d$profile$2f$ChangePasswordView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    form: passwordForm,
                                    setForm: setPasswordForm,
                                    loading: loading,
                                    onSubmit: async ()=>{
                                        await updateUser(passwordForm);
                                        setViewMode('profile');
                                    },
                                    onCancel: ()=>setViewMode('profile')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/PopupProfile.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$CropImageModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    open: cropOpen,
                    src: cropSrc,
                    onClose: ()=>{
                        setCropOpen(false);
                    },
                    onConfirm: async (file)=>{
                        if (cropKind === 'avatar') {
                            await upload(file, ()=>pendingReset?.());
                        } else if (cropKind === 'background') {
                            try {
                                setIsUploadingBackground(true);
                                const MAX = 1024 * 1024 * 1024;
                                if (!file.type.startsWith('image/') || file.size > MAX) {
                                    toast({
                                        type: 'error',
                                        message: 'Ảnh không hợp lệ hoặc quá lớn (>1GB)'
                                    });
                                    return;
                                }
                                const formData = new FormData();
                                formData.append('file', file);
                                formData.append('roomId', 'background');
                                formData.append('sender', String(user._id));
                                formData.append('receiver', '');
                                formData.append('type', 'image');
                                formData.append('folderName', 'Backgrounds');
                                const uploadRes = await fetch(`/api/upload?uploadId=background_${user._id}`, {
                                    method: 'POST',
                                    body: formData
                                });
                                const uploadJson = await uploadRes.json();
                                if (!uploadRes.ok || !uploadJson.success || !uploadJson.link) {
                                    toast({
                                        type: 'error',
                                        message: 'Upload thất bại'
                                    });
                                    return;
                                }
                                const newUrl = String(uploadJson.link);
                                let updateOk = false;
                                try {
                                    const res1 = await fetch('/api/users', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            action: 'update',
                                            field: '_id',
                                            value: String(user._id),
                                            data: {
                                                background: newUrl
                                            }
                                        })
                                    });
                                    const json1 = await res1.json();
                                    updateOk = res1.ok && !json1.error;
                                } catch  {}
                                if (!updateOk) {
                                    try {
                                        const res2 = await fetch('/api/users', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                action: 'update',
                                                field: 'username',
                                                value: String(user.username || ''),
                                                data: {
                                                    background: newUrl
                                                }
                                            })
                                        });
                                        const json2 = await res2.json();
                                        updateOk = res2.ok && !json2.error;
                                    } catch  {}
                                }
                                if (!updateOk) {
                                    toast({
                                        type: 'error',
                                        message: 'Cập nhật nền thất bại'
                                    });
                                    return;
                                }
                                try {
                                    const raw = localStorage.getItem('info_user');
                                    if (raw) {
                                        const parsed = JSON.parse(raw);
                                        localStorage.setItem('info_user', JSON.stringify({
                                            ...parsed,
                                            background: newUrl
                                        }));
                                    }
                                } catch  {}
                                onUserUpdated?.({
                                    background: newUrl
                                });
                                toast({
                                    type: 'success',
                                    message: 'Cập nhật nền thành công!'
                                });
                            } finally{
                                setIsUploadingBackground(false);
                                pendingReset?.();
                            }
                        }
                        setCropOpen(false);
                        setCropSrc(null);
                        setCropKind(null);
                    },
                    aspectRatio: cropKind === 'background' ? 16 / 9 : 1,
                    circle: cropKind === 'avatar',
                    fileName: cropFileName,
                    outputType: "image/jpeg",
                    quality: 0.92
                }, void 0, false, {
                    fileName: "[project]/src/components/base/PopupProfile.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/PopupProfile.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/base/PopupProfile.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(PopupProfile, "TUTu3A7m0Ild4/5wb/PAogGpVro=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUploadAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadAvatar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUpdateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateUser"]
    ];
});
_c = PopupProfile;
var _c;
__turbopack_context__.k.register(_c, "PopupProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/imgs/bannerzalo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bannerzalo.ee6665e6.png");}),
"[project]/public/imgs/bannerzalo.png.mjs { IMAGE => \"[project]/public/imgs/bannerzalo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$bannerzalo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/imgs/bannerzalo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$bannerzalo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 441,
    height: 80,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAI0lEQVR42mOQy33yT6346X+W2If/GaIfADGQjgFiED/u0T8AJnISWO9FrscAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(menu)/help.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ZaloContactCard.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$bannerzalo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$imgs$2f$bannerzalo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/imgs/bannerzalo.png.mjs { IMAGE => "[project]/public/imgs/bannerzalo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const ZaloContactCard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-120 h-60 rounded-xl overflow-hidden shadow-2xl bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-120 h-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$bannerzalo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$imgs$2f$bannerzalo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Zalo Banner",
                    fill: true,
                    className: "object-cover ",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/(menu)/help.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(menu)/help.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 ",
                        children: "Liên hệ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/help.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mb-4 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 font-medium w-32",
                                children: "Email:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/help.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:feedbackpc@zalo.me",
                                className: "text-[#0068FF] hover:text-blue-700 hover:underline transition duration-150 break-words",
                                children: "feedbackpc@zalo.me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/help.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(menu)/help.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 font-medium w-32",
                                children: "Website:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/help.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://zalo.me/pc",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#0068FF] hover:text-blue-700 hover:underline transition duration-150 break-words",
                                children: "https://zalo.me/pc"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/help.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(menu)/help.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(menu)/help.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(menu)/help.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ZaloContactCard;
const __TURBOPACK__default__export__ = ZaloContactCard;
var _c;
__turbopack_context__.k.register(_c, "ZaloContactCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/imgs/zCloud.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/zCloud.cfc3388b.png");}),
"[project]/public/imgs/zCloud.png.mjs { IMAGE => \"[project]/public/imgs/zCloud.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$zCloud$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/imgs/zCloud.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$zCloud$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 868,
    height: 540,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AAAAAAAFBgcBSFlgGYeswDSJrcE0RlZfFQUHBwEAAAAAAAAAAABASEwLttThPa7d+W2s2fhwuNfoO0NNUhABAQEBAAQFBQGHkpkVv9nyWHWs9NBpoPLfsdLzYXqWrV4IDhQUAAQFBwM9TFkjgqTPdFWI1dlTgtPZd5jKci88SCQBAgMDAAAAAAARGiMiKz9USBEaKSARGSkgFx0kEgcLDwoAAAAAQ2QyAhRAwfQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(menu)/icloud.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$zCloud$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$imgs$2f$zCloud$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/imgs/zCloud.png.mjs { IMAGE => "[project]/public/imgs/zCloud.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const ZaloCloudPopup = ({ onClose })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-85 ml-1 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "cursor-pointer absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1",
                "aria-label": "Close",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/(menu)/icloud.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(menu)/icloud.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f0f7ff] p-4 flex flex-col items-center justify-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        priority: true,
                        width: 100,
                        height: 40,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$imgs$2f$zCloud$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$imgs$2f$zCloud$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        alt: "ZCloud",
                        className: "w-100 h-40 object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-2 left-1/4 w-2 h-2 bg-red-500 rounded-full rotate-45"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-6 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-6 left-6 w-3 h-3 bg-blue-400 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-8 right-10 w-2 h-2 bg-green-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(menu)/icloud.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-900 mb-2",
                        children: "Bảo toàn dữ liệu Zalo với zCloud"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 leading-relaxed mb-4",
                        children: "Khám phá ngay tiện ích lưu trữ an toàn ảnh, video, và tệp quan trọng trên zCloud, đồng thời giải phóng dung lượng máy."
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "cursor-pointer w-full py-2 bg-[#e8e9ea] text-sm font-semibold text-gray-800 rounded-lg hover:bg-[#dcdde0] transition duration-200",
                        children: "Tìm hiểu zCloud ngay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(menu)/icloud.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(menu)/icloud.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(menu)/icloud.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ZaloCloudPopup;
const __TURBOPACK__default__export__ = ZaloCloudPopup;
var _c;
__turbopack_context__.k.register(_c, "ZaloCloudPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmModal",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
const ConfirmModal = ({ title, message, onCancel, onConfirm, confirmText = 'Xác nhận', variant = 'danger' })=>{
    const isDanger = variant === 'danger';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl md:rounded-none shadow-2xl md:shadow-none overflow-hidden    animate-in fade-in zoom-in-95 duration-300",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative px-8 pt-10 pb-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "absolute top-4 cursor-pointer right-4 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all active:scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-5",
                            children: isDanger ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiExclamationTriangle"], {
                                className: "w-12 h-12 text-red-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiExclamationTriangle"], {
                                className: "w-12 h-12 text-yellow-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-gray-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 pb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-center text-lg leading-relaxed",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 px-8 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "flex-1 cursor-pointer py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-lg rounded-2xl transition-all duration-200 active:scale-95 shadow-md",
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: `flex-1 cursor-pointer py-4 font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3
              ${isDanger ? 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-red-300' : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-orange-300'}`,
                            children: [
                                confirmText === 'Đăng xuất' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLogout"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0)),
                                confirmText.includes('Xóa') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiExclamationTriangle"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0)),
                                confirmText
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ConfirmModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ConfirmModal.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ConfirmModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(menu)/menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cookie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PopupProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/PopupProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$menu$292f$help$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(menu)/help.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$menu$292f$icloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(menu)/icloud.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ConfirmModal.tsx [app-client] (ecmascript)");
// React Icons - Full modern set
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
function SidebarMenu({ totalUnread = 0, unreadGroups = 0, unreadContacts = 0 }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        avatar: false,
        business: false,
        cloud: false,
        submenu: null
    });
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [showContactCard, setShowContactCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAccountModal, setShowAccountModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userInfo, setUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const avatarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const businessRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarMenu.useEffect": ()=>{
            try {
                const raw = localStorage.getItem('info_user');
                if (raw) setUserInfo(JSON.parse(raw));
            } catch (e) {
                console.error('Failed to parse info_user', e);
            }
        }
    }["SidebarMenu.useEffect"], []);
    // Click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarMenu.useEffect": ()=>{
            const handleClickOutside = {
                "SidebarMenu.useEffect.handleClickOutside": (e)=>{
                    if (avatarRef.current && !avatarRef.current.contains(e.target)) {
                        setOpenMenu({
                            "SidebarMenu.useEffect.handleClickOutside": (prev)=>({
                                    ...prev,
                                    avatar: false,
                                    submenu: null
                                })
                        }["SidebarMenu.useEffect.handleClickOutside"]);
                    }
                    if (businessRef.current && !businessRef.current.contains(e.target)) {
                        setOpenMenu({
                            "SidebarMenu.useEffect.handleClickOutside": (prev)=>({
                                    ...prev,
                                    business: false
                                })
                        }["SidebarMenu.useEffect.handleClickOutside"]);
                    }
                }
            }["SidebarMenu.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SidebarMenu.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["SidebarMenu.useEffect"];
        }
    }["SidebarMenu.useEffect"], []);
    const handleLogout = ()=>{
        setShowLogoutConfirm(true);
        setOpenMenu((prev)=>({
                ...prev,
                avatar: false
            }));
    };
    const finalizeLogout = async ()=>{
        try {
            await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'logout'
                })
            });
        } catch (err) {
            console.error('Logout error:', err);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieBase"].remove('session_token');
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieBase"].remove('remember_login');
        localStorage.removeItem('info_user');
        localStorage.removeItem('remember_login');
        router.push('/');
    };
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarMenu.useCallback[navigate]": (path, key)=>{
            setActiveItem(key);
            router.push(path);
        }
    }["SidebarMenu.useCallback[navigate]"], [
        router
    ]);
    const toggleMenu = (menu, value)=>{
        setOpenMenu((prev)=>({
                ...prev,
                [menu]: value !== undefined ? value : !prev[menu],
                submenu: menu === 'avatar' && value !== true ? null : prev.submenu
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-16 bg-blue-400 flex flex-col items-center py-6 text-white shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: avatarRef,
                        className: "mb-10 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleMenu('avatar'),
                                className: "group cursor-pointer relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30 hover:ring-yellow-400 transition-all duration-300 shadow-2xl",
                                children: [
                                    userInfo?.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(userInfo.avatar),
                                        width: 56,
                                        height: 56,
                                        alt: userInfo.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo/avata.webp",
                                        alt: userInfo?.name || 'User',
                                        width: 56,
                                        height: 56,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            openMenu.avatar && userInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 top-12 w-80 bg-white text-gray-800 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: userInfo.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-gray-100 mx-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors",
                                                onClick: ()=>{
                                                    setOpenMenu({
                                                        avatar: false,
                                                        business: false,
                                                        cloud: false,
                                                        submenu: null
                                                    });
                                                    router.push(`/profile/${userInfo.username}`);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Hồ sơ của bạn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors",
                                                onClick: ()=>{
                                                    setOpenMenu({
                                                        avatar: false,
                                                        business: false,
                                                        cloud: false,
                                                        submenu: null
                                                    });
                                                    setShowAccountModal(true);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Tài khoản"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-gray-100 mx-4 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors",
                                                onClick: ()=>{
                                                    setOpenMenu({
                                                        avatar: false,
                                                        business: false,
                                                        cloud: false,
                                                        submenu: null
                                                    });
                                                    handleLogout();
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Đăng xuất"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(menu)/menu.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 flex flex-col items-center gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigate('/home', 'home'),
                                className: `relative p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'home' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiHome"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    totalUnread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm",
                                        children: totalUnread > 99 ? '99+' : totalUnread
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigate('/group', 'group'),
                                className: `relative p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'group' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiRectangleGroup"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    unreadGroups > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm",
                                        children: unreadGroups > 99 ? '99+' : unreadGroups
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigate('/moments', 'moments'),
                                className: `p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'moments' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPager"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>navigate('/directory', 'directory'),
                                className: `relative p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'directory' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserGroup"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    unreadContacts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm",
                                        children: unreadContacts > 99 ? '99+' : unreadContacts
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (userInfo?._id) {
                                        navigate(`/profile/${userInfo._id}`, 'profile');
                                    } else {
                                        console.warn('User info or ID missing');
                                    }
                                },
                                className: `p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'profile' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserCircle"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(menu)/menu.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleMenu('cloud'),
                                        className: `p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${openMenu.cloud ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUpload"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    openMenu.cloud && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-24 bottom-0 z-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$menu$292f$icloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onClose: ()=>toggleMenu('cloud', false)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 cursor-pointer rounded-[0.5rem] hover:bg-white/10 hover:scale-110 transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiDeviceMobile"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: businessRef,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleMenu('business'),
                                        className: `p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${openMenu.business ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiBriefcase"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this),
                                    openMenu.business && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-24 bottom-0 w-96 bg-white rounded-3xl shadow-2xl p-8 z-50 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 mb-8",
                                                children: "Công cụ zBusiness"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-8",
                                                children: [
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLightningBolt"], {
                                                            className: "w-10 h-10 text-yellow-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: 'Tin nhắn nhanh'
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCollection"], {
                                                            className: "w-10 h-10 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: 'Danh mục',
                                                        disabled: true
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChatAlt2"], {
                                                            className: "w-10 h-10 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: 'Trả lời tự động',
                                                        disabled: true
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiStar"], {
                                                            className: "w-10 h-10 text-purple-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: 'Tin đánh dấu'
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiClock"], {
                                                            className: "w-10 h-10 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: 'Tin đồng thời',
                                                        disabled: true
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiDocumentText"], {
                                                            className: "w-10 h-10 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(menu)/menu.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 29
                                                        }, this),
                                                        label: 'Ghi chú'
                                                    }
                                                ].map((tool, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-center ${tool.disabled ? 'opacity-40' : 'cursor-pointer hover:scale-110 transition-transform'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center shadow-xl mb-3 mx-auto",
                                                                children: tool.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-gray-700",
                                                                children: tool.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(menu)/menu.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'setting' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCog"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(menu)/menu.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(menu)/menu.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(menu)/menu.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(menu)/menu.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            showLogoutConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
                title: "Đăng xuất",
                message: "Bạn có chắc chắn muốn thoát khỏi tài khoản hiện tại?",
                confirmText: "Đăng xuất",
                onCancel: ()=>setShowLogoutConfirm(false),
                onConfirm: finalizeLogout
            }, void 0, false, {
                fileName: "[project]/src/components/(menu)/menu.tsx",
                lineNumber: 345,
                columnNumber: 9
            }, this),
            showContactCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",
                onClick: ()=>setShowContactCard(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$menu$292f$help$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/(menu)/menu.tsx",
                        lineNumber: 360,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(menu)/menu.tsx",
                    lineNumber: 359,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(menu)/menu.tsx",
                lineNumber: 355,
                columnNumber: 9
            }, this),
            userInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PopupProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAccountModal,
                onClose: ()=>setShowAccountModal(false),
                user: userInfo,
                onAvatarUpdated: (newUrl)=>setUserInfo((prev)=>prev ? {
                            ...prev,
                            avatar: newUrl
                        } : null),
                onUserUpdated: (updated)=>setUserInfo((prev)=>prev ? {
                            ...prev,
                            ...updated
                        } : prev)
            }, void 0, false, {
                fileName: "[project]/src/components/(menu)/menu.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(SidebarMenu, "C1DivnnRfxVnqmkPjjP/zbE1I/Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SidebarMenu;
var _c;
__turbopack_context__.k.register(_c, "SidebarMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/fetch/messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMessageApi",
    ()=>createMessageApi,
    "deleteMessageApi",
    ()=>deleteMessageApi,
    "fireReminderOnceApi",
    ()=>fireReminderOnceApi,
    "markAsReadApi",
    ()=>markAsReadApi,
    "readMessagesApi",
    ()=>readMessagesApi,
    "readPinnedMessagesApi",
    ()=>readPinnedMessagesApi,
    "recallMessageApi",
    ()=>recallMessageApi,
    "togglePinMessageApi",
    ()=>togglePinMessageApi,
    "tryLockPollApi",
    ()=>tryLockPollApi,
    "updateMessageApi",
    ()=>updateMessageApi
]);
'use client';
async function createMessageApi(payload) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'create',
            data: payload
        })
    });
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
        return res.json();
    }
    return {
        success: false,
        message: res.statusText
    };
}
async function readMessagesApi(roomId, options) {
    try {
        const filters = {
            roomId,
            ...options?.extraFilters || {}
        };
        if (typeof options?.before === 'number') {
            filters.timestamp = {
                $lt: options.before
            };
        }
        const res = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'read',
                filters,
                skip: options?.skip ?? 0,
                limit: options?.limit ?? 20,
                sort: {
                    field: 'timestamp',
                    order: options?.sortOrder ?? 'desc'
                }
            })
        });
        if (!res.ok) {
            return {
                success: false,
                message: res.statusText
            };
        }
        return res.json();
    } catch (error) {
        console.error('readMessagesApi error:', error);
        return {
            success: false,
            message: String(error)
        };
    }
}
async function readPinnedMessagesApi(roomId, options) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'read',
            filters: {
                roomId,
                isPinned: true
            },
            skip: options?.skip ?? 0,
            limit: options?.limit ?? 10,
            sort: {
                field: 'pinnedAt',
                order: 'desc'
            }
        })
    });
    return res.json();
}
async function togglePinMessageApi(messageId, isPinned) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'togglePin',
            messageId,
            data: {
                isPinned
            }
        })
    });
    return res.json();
}
async function recallMessageApi(roomId, messageId) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'recall',
            messageId,
            roomId
        })
    });
    return res.json();
}
async function markAsReadApi(roomId, userId) {
    await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'markAsRead',
            roomId,
            userId
        })
    });
}
async function updateMessageApi(messageId, data) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'update',
            field: '_id',
            value: messageId,
            data
        })
    });
    return res.json();
}
async function deleteMessageApi(messageId) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'delete',
            field: '_id',
            value: messageId
        })
    });
    return res.json();
}
async function fireReminderOnceApi(messageId) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'updateMany',
            filters: {
                _id: messageId,
                reminderFired: {
                    $ne: true
                }
            },
            data: {
                reminderFired: true
            }
        })
    });
    const json = await res.json();
    return {
        success: !!json.success,
        modifiedCount: json.modifiedCount
    };
}
async function tryLockPollApi(messageId, updates) {
    const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'updateMany',
            filters: {
                _id: messageId,
                isPollLocked: {
                    $ne: true
                }
            },
            data: updates
        })
    });
    const json = await res.json();
    return {
        success: !!json.success,
        modifiedCount: json.modifiedCount
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(call)/IncomingCallModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IncomingCallModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
function IncomingCallModal({ avatar, name, onAccept, onReject, titleText = 'Cuộc gọi đến', callType = 'voice' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-[46vh] md:min-h-[24rem] md:max-h-[28rem] md:rounded-xl rounded-none overflow-hidden bg-black md:pt-10 pt-16",
        children: [
            avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                alt: name || '',
                fill: true,
                className: "object-cover blur-xl opacity-40",
                sizes: "100vw"
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40"
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex flex-col items-center justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-3",
                        children: [
                            avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                                    alt: name || '',
                                    width: 96,
                                    height: 96,
                                    className: "w-full h-full  object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo/avata.webp",
                                    alt: name,
                                    width: 64,
                                    height: 64,
                                    className: "w-full h-full rounded-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white font-medium text-base",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/80 text-sm",
                                children: titleText || (callType === 'video' ? 'Cuộc gọi video đến' : 'Cuộc gọi thoại đến')
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: ()=>void onAccept(),
                                title: titleText || 'Chấp nhận',
                                children: callType === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiVideoCamera"], {
                                    className: "w-7 h-7 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                    className: "w-7 h-7 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: ()=>void onReject(),
                                title: "Từ chối",
                                children: callType === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPhoneDisconnectFill"], {
                                    className: "w-7 h-7 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPhoneDisconnectFill"], {
                                    className: "w-7 h-7 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(call)/IncomingCallModal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = IncomingCallModal;
var _c;
__turbopack_context__.k.register(_c, "IncomingCallModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/svg/MicOffIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const MicOffIcon = ({ className, stroke, title })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "800px",
            height: "800px",
            viewBox: "0 0 56 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/MicOffIcon.tsx",
                    lineNumber: 22,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 33.7891 25.5859 L 33.7891 11.2656 C 33.7891 6.9297 30.8828 3.7187 26.711 3.7187 C 22.6094 3.7187 19.6094 6.8125 19.6094 11.0078 L 19.6094 11.3828 Z",
                    fill: stroke || "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/MicOffIcon.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 46.3281 47.1484 C 47.0313 47.8516 48.1797 47.8516 48.8594 47.1484 C 49.5859 46.4687 49.5859 45.2969 48.8594 44.5937 L 9.6719 5.4062 C 8.9688 4.7031 7.7735 4.7031 7.0938 5.4062 C 6.4141 6.1094 6.4141 7.2813 7.0938 7.9609 Z",
                    fill: stroke || "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/MicOffIcon.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 15.7657 48.7422 C 14.8281 48.7422 13.9844 49.5859 13.9844 50.5234 C 13.9844 51.4609 14.8281 52.2813 15.7657 52.2813 L 37.6328 52.2813 C 38.5703 52.2813 39.4141 51.4609 39.4141 50.5234 C 39.4141 49.5859 38.5703 48.7422 37.6328 48.7422 L 28.4688 48.7422 L 28.4688 43.6094 C 31.4453 43.3516 34.0469 42.3906 36.1797 40.8906 L 33.6719 38.3828 C 31.7735 39.6484 29.4062 40.375 26.711 40.375 C 19.3516 40.375 14.2188 35.125 14.2188 27.9766 L 14.2188 22.5391 C 14.2188 21.4375 13.5157 20.7578 12.4844 20.7578 C 11.4531 20.7578 10.7735 21.4375 10.7735 22.5391 L 10.7735 27.9766 C 10.7735 36.5547 16.3984 42.8594 24.9297 43.6094 L 24.9297 48.7422 Z",
                    fill: stroke || "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/MicOffIcon.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 42.625 22.5391 C 42.625 21.4375 41.9453 20.7578 40.9141 20.7578 C 39.8828 20.7578 39.1797 21.4375 39.1797 22.5391 L 39.1797 27.9766 C 39.1797 28.914 39.0859 29.8047 38.8984 30.6953 L 41.7578 33.5313 C 42.3203 31.8203 42.625 29.9687 42.625 27.9766 Z",
                    fill: stroke || "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/MicOffIcon.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 29.9453 34.6562 L 19.6094 24.3203 L 19.6094 28 C 19.6094 32.3125 22.5157 35.5469 26.711 35.5469 C 27.9531 35.5469 29.0313 35.2187 29.9453 34.6562 Z",
                    fill: stroke || "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/MicOffIcon.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/svg/MicOffIcon.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/MicOffIcon.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MicOffIcon;
const __TURBOPACK__default__export__ = MicOffIcon;
var _c;
__turbopack_context__.k.register(_c, "MicOffIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/svg/ICVideoOff.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ICVideoOff = ({ className, stroke, title })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            width: "800px",
            height: "800px",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-label": title,
            role: "img",
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/ICVideoOff.tsx",
                    lineNumber: 22,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 6V16C3 17.1046 3.89543 18 5 18H13C13.3151 18 13.6095 17.9252 13.8712 17.792M16 10L21 7V17L18.5 15.75",
                    stroke: stroke || "#141415",
                    strokeWidth: "0.9",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/ICVideoOff.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 3L21 21",
                    stroke: stroke || "#141415",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/ICVideoOff.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/svg/ICVideoOff.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/ICVideoOff.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ICVideoOff;
const __TURBOPACK__default__export__ = ICVideoOff;
var _c;
__turbopack_context__.k.register(_c, "ICVideoOff");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(call)/ModalCall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModalCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$MicOffIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/MicOffIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICVideoOff$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICVideoOff.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function ModalCall({ avatar, name, mode, callType, callStartAt, localVideoRef, currentUserName, currentUserAvatar, remotePeers = [], participants = [], micEnabled = true, camEnabled = true, onToggleMic, onToggleCamera, onEndCall }) {
    _s();
    const timer = (()=>{
        if (!callStartAt) return '';
        const now = Date.now();
        const s = Math.floor((now - callStartAt) / 1000);
        const m = Math.floor(s / 60);
        const ss = s % 60;
        const mm = String(m).padStart(2, '0');
        const sss = String(ss).padStart(2, '0');
        return `${mm}:${sss}`;
    })();
    const [hiddenCam, setHiddenCam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalCall.useEffect": ()=>{
            remotePeers.forEach({
                "ModalCall.useEffect": (peer)=>{
                    const a = audioRefs.current.get(peer.userId);
                    if (a) {
                        try {
                            a.muted = false;
                            a.autoplay = true;
                            a.srcObject = peer.stream;
                            void a.play().catch({
                                "ModalCall.useEffect": ()=>{}
                            }["ModalCall.useEffect"]);
                        } catch  {}
                    }
                    const v = videoRefs.current.get(peer.userId);
                    if (v) {
                        try {
                            v.srcObject = peer.stream;
                            void v.play().catch({
                                "ModalCall.useEffect": ()=>{}
                            }["ModalCall.useEffect"]);
                        } catch  {}
                    }
                }
            }["ModalCall.useEffect"]);
        }
    }["ModalCall.useEffect"], [
        remotePeers
    ]);
    if (mode === 'connecting') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-md:h-[100vh] md:min-h-[24rem] md:max-h-[28rem] md:rounded-xl rounded-none overflow-hidden bg-black",
            children: [
                avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                    alt: name,
                    fill: true,
                    className: "object-cover blur-xl opacity-40",
                    sizes: "100vw"
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-blue/40"
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 h-full flex flex-col items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3 pt-10",
                            children: [
                                avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                                        alt: name,
                                        width: 96,
                                        height: 96,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full bg-gray-500 flex items-center rounded-full justify-center text-white text-2xl font-semibold ring-4 ring-white/60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo/avata.webp",
                                        alt: name,
                                        width: 64,
                                        height: 64,
                                        className: "w-full h-full rounded-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-medium text-base",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/80 text-sm",
                                    children: "Đang đổ chuông..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 md:flex hidden items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-3 rounded-full bg-white/10 text-white opacity-60 cursor-default",
                                    disabled: true,
                                    title: "Mic",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMicrophone"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                    onClick: onEndCall,
                                    title: "Kết thúc",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                        className: "w-7 h-7 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                callType === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-3 rounded-full bg-white/10 opacity-60 cursor-default",
                                    disabled: true,
                                    title: "Video",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiVideoCamera"], {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-8 left-0 right-0 md:hidden flex justify-center gap-6",
                            children: [
                                callType === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition",
                                            onClick: ()=>onToggleCamera && onToggleCamera(),
                                            title: camEnabled ? 'Tắt camera' : 'Bật camera',
                                            children: camEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiVideoCamera"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 143,
                                                columnNumber: 33
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICVideoOff$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 143,
                                                columnNumber: 73
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs",
                                            children: "Camera"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition",
                                            onClick: ()=>onToggleMic && onToggleMic(),
                                            title: micEnabled ? 'Tắt mic' : 'Bật mic',
                                            children: micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMicrophone"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 155,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$MicOffIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "w-6 h-6",
                                                stroke: "red"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 155,
                                                columnNumber: 70
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs",
                                            children: "Mic"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition",
                                            onClick: onEndCall,
                                            title: "Kết thúc",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs",
                                            children: "Kết thúc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(call)/ModalCall.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-md:h-[100vh] md:min-h-[24rem] md:max-h-[28rem] md:rounded-xl rounded-none overflow-hidden bg-black",
        children: [
            avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                alt: name,
                fill: true,
                className: "object-cover blur-xl opacity-40",
                sizes: "100vw"
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " inset-0 bg-black/30"
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            timer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-1 rounded bg-green-700 text-white text-xs font-medium",
                    children: timer
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            callType === 'voice' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex flex-col items-center justify-center gap-5 pt-10",
                children: [
                    avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                            alt: name,
                            width: 96,
                            height: 96,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-24 rounded-full bg-gray-500 flex items-center rounded-full justify-center text-white text-2xl font-semibold ring-4 ring-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo/avata.webp",
                            alt: name,
                            width: 64,
                            height: 64,
                            className: "w-full h-full rounded-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                            lineNumber: 200,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-medium text-base",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " b-0 left-0 right-0 flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: onToggleMic,
                                title: micEnabled ? 'Tắt mic' : 'Bật mic',
                                children: micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMicrophone"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$MicOffIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "w-6 h-6",
                                    stroke: "red"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: onEndCall,
                                title: "Kết thúc",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                    className: "w-7 h-7 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sr-only",
                        children: remotePeers.map((peer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                autoPlay: true,
                                ref: (el)=>{
                                    if (el) {
                                        const a = el;
                                        a.srcObject = peer.stream;
                                        try {
                                            a.play();
                                        } catch  {}
                                        audioRefs.current.set(peer.userId, el);
                                    }
                                }
                            }, peer.userId, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-3",
                children: [
                    remotePeers.length <= 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full aspect-video bg-black rounded-lg overflow-hidden",
                        children: [
                            (()=>{
                                const peer = remotePeers[0];
                                const hasRemoteVideo = !!peer && peer.stream.getVideoTracks().some((t)=>t.enabled);
                                if (peer && hasRemoteVideo) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        className: "w-full h-full object-cover",
                                        autoPlay: true,
                                        playsInline: true,
                                        ref: (el)=>{
                                            if (el) {
                                                const v = el;
                                                v.srcObject = peer.stream;
                                                try {
                                                    v.play();
                                                } catch  {}
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 258,
                                        columnNumber: 21
                                    }, this);
                                }
                                const remoteAvatar = peer?.avatar ?? avatar;
                                const nameShow = peer?.name ?? name;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center w-full h-full bg-black",
                                    children: remoteAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(remoteAvatar),
                                            alt: nameShow || '',
                                            width: 112,
                                            height: 112,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 280,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 279,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-28 h-28 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo/avata.webp",
                                            alt: name,
                                            width: 64,
                                            height: 64,
                                            className: "w-full h-full rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 290,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 289,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 277,
                                    columnNumber: 19
                                }, this);
                            })(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: [
                                    !hiddenCam ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer hover:bg-gray-600 z-[50] absolute top-4 right-4 text-white text-sm bg-black/50 px-1 py-1 rounded-full transition-colors",
                                        onClick: ()=>setHiddenCam(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 308,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 304,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer hover:bg-gray-600 z-[50] absolute top-4 right-4 text-white text-sm bg-black/50 px-1 py-1 rounded-full transition-colors",
                                        onClick: ()=>setHiddenCam(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 315,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 311,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute top-3 right-3 w-40 aspect-video bg-black/80 rounded-lg overflow-hidden border border-white/20 ${hiddenCam ? 'hidden' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: localVideoRef,
                                                className: `w-full h-full object-cover ${camEnabled ? '' : 'opacity-0'}`,
                                                muted: true,
                                                playsInline: true,
                                                autoPlay: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this),
                                            !camEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: currentUserAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentUserAvatar),
                                                        alt: currentUserName || '',
                                                        width: 64,
                                                        height: 64,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white text-xl font-semibold ring-2 ring-white/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/logo/avata.webp",
                                                        alt: name,
                                                        width: 64,
                                                        height: 64,
                                                        className: "w-full h-full rounded-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 332,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "absolute bottom-3 left-3 text-white text-sm",
                                children: name || 'U'
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-black rounded-lg overflow-hidden aspect-video",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: localVideoRef,
                                        className: `w-full h-full object-cover ${camEnabled ? '' : 'opacity-0'}`,
                                        muted: true,
                                        playsInline: true,
                                        autoPlay: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this),
                                    !camEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black",
                                        children: currentUserAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentUserAvatar),
                                                alt: currentUserName || '',
                                                width: 96,
                                                height: 96,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 374,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 373,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo/avata.webp",
                                                alt: name,
                                                width: 64,
                                                height: 64,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 384,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 383,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 371,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 362,
                                columnNumber: 15
                            }, this),
                            remotePeers.map((peer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative bg-black rounded-lg overflow-hidden aspect-video",
                                    children: peer.stream.getVideoTracks().some((t)=>t.enabled) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        className: "w-full h-full object-cover",
                                        autoPlay: true,
                                        playsInline: true,
                                        ref: (el)=>{
                                            if (el) {
                                                const v = el;
                                                try {
                                                    v.muted = true;
                                                } catch  {}
                                                v.srcObject = peer.stream;
                                                try {
                                                    v.play();
                                                } catch  {}
                                                videoRefs.current.set(peer.userId, el);
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 399,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-full h-full bg-black",
                                        children: peer.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(peer.avatar),
                                                alt: peer.name || '',
                                                width: 96,
                                                height: 96,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 421,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 420,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo/avata.webp",
                                                alt: name,
                                                width: 64,
                                                height: 64,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                                lineNumber: 431,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                            lineNumber: 430,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 418,
                                        columnNumber: 21
                                    }, this)
                                }, peer.userId, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 397,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sr-only",
                                children: remotePeers.map((peer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                        autoPlay: true,
                                        ref: (el)=>{
                                            if (el) {
                                                const a = el;
                                                a.srcObject = peer.stream;
                                                try {
                                                    a.play();
                                                } catch  {}
                                                audioRefs.current.set(peer.userId, el);
                                            }
                                        }
                                    }, `aud-${peer.userId}`, false, {
                                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 444,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 361,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: onToggleMic,
                                title: micEnabled ? 'Tắt mic' : 'Bật mic',
                                children: micEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMicrophone"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 471,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$MicOffIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "w-6 h-6",
                                    stroke: "red"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 473,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: onToggleCamera,
                                title: camEnabled ? 'Tắt video' : 'Bật video',
                                children: camEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiVideoCamera"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 482,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICVideoOff$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "w-6 h-6",
                                    stroke: "red"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 484,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer",
                                onClick: onEndCall,
                                title: "Kết thúc",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                    className: "w-7 h-7 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                                lineNumber: 487,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/ModalCall.tsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(call)/ModalCall.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(call)/ModalCall.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(ModalCall, "d7y75Rf0njEUtoWwRXMzN4KJAB4=");
_c = ModalCall;
var _c;
__turbopack_context__.k.register(_c, "ModalCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(call)/LiveKitCall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveKitCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Bb6uLxS5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/room-Bb6uLxS5.mjs [app-client] (ecmascript) <export L as LiveKitRoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DuRBtGp8.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-yU-srrIO.mjs [app-client] (ecmascript) <export t as useTracks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DuRBtGp8.mjs [app-client] (ecmascript) <export T as TrackToggle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DuRBtGp8.mjs [app-client] (ecmascript) <export V as VideoTrack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useIsMuted$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-yU-srrIO.mjs [app-client] (ecmascript) <export G as useIsMuted>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
;
;
;
function CustomTrackTile({ trackRef, title, avatarUrl, offMinHeight, cover, contain, callMode }) {
    _s();
    const isMuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useIsMuted$3e$__["useIsMuted"])(trackRef);
    const ref = trackRef;
    const pub = ref?.publication;
    const showVideo = !!(pub && pub.isEnabled !== false && pub.isSubscribed !== false && !isMuted);
    const [portrait, setPortrait] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const handleMeta = (e)=>{
        const v = e.currentTarget;
        const w = v.videoWidth || 0;
        const h = v.videoHeight || 0;
        setPortrait(w > 0 && h > 0 ? h > w : false);
    };
    const displayName = title ?? (trackRef?.participant?.name || trackRef?.participant?.identity || '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full  h-full bg-black overflow-hidden rounded-md`,
        children: [
            showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                trackRef: trackRef,
                className: contain ? 'w-full h-full object-contain' : cover || !portrait ? 'w-full h-full object-cover' : 'w-full h-full object-contain',
                onLoadedMetadata: handleMeta,
                muted: true,
                playsInline: true,
                autoPlay: true
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center bg-black",
                children: avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: avatarUrl,
                    alt: title || 'avatar',
                    width: 240,
                    height: 240,
                    className: "w-14 h-14 rounded-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-14 h-14 rounded-full bg-white/10"
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded",
                children: displayName
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(CustomTrackTile, "5KSP1rnCPIrm7zf/WpxOO/a02IY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useIsMuted$3e$__["useIsMuted"]
    ];
});
_c = CustomTrackTile;
function CallTiles({ titleName, avatarUrl, offMinHeight, myName, myAvatarUrl, callMode, mini }) {
    _s1();
    const cameraTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera
    ]);
    const remoteTracks = cameraTracks.filter((t)=>!t.participant?.isLocal);
    const localTrack = cameraTracks.find((t)=>t.participant?.isLocal);
    const remoteIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "CallTiles.useMemo[remoteIds]": ()=>{
            return remoteTracks.map({
                "CallTiles.useMemo[remoteIds]": (tr)=>String((tr?.participant?.identity || '').trim())
            }["CallTiles.useMemo[remoteIds]"]).filter({
                "CallTiles.useMemo[remoteIds]": (id)=>!!id
            }["CallTiles.useMemo[remoteIds]"]);
        }
    }["CallTiles.useMemo[remoteIds]"], [
        remoteTracks
    ]);
    const [miniPickId, setMiniPickId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CallTiles.useEffect": ()=>{
            if (!mini) return;
            if (remoteIds.length === 0) {
                setMiniPickId(null);
                return;
            }
            if (miniPickId && remoteIds.includes(miniPickId)) return;
            const next = remoteIds[Math.floor(Math.random() * remoteIds.length)];
            setMiniPickId(next);
        }
    }["CallTiles.useEffect"], [
        mini,
        remoteIds,
        miniPickId
    ]);
    const isGridMode = cameraTracks.length >= 3;
    const gridTracks = isGridMode ? cameraTracks : remoteTracks;
    const [avatarsMap, setAvatarsMap] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({});
    const [showRoster, setShowRoster] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [spotlightId, setSpotlightId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CallTiles.useEffect": ()=>{
            const ids = gridTracks.map({
                "CallTiles.useEffect.ids": (tr)=>String((tr?.participant?.identity || '').trim())
            }["CallTiles.useEffect.ids"]).filter({
                "CallTiles.useEffect.ids": (id)=>!!id && !avatarsMap[id]
            }["CallTiles.useEffect.ids"]);
            if (ids.length === 0) return;
            const run = {
                "CallTiles.useEffect.run": async ()=>{
                    try {
                        const results = await Promise.all(ids.map({
                            "CallTiles.useEffect.run": async (id)=>{
                                const res = await fetch('/api/users', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        action: 'getById',
                                        _id: String(id)
                                    })
                                });
                                const data = await res.json();
                                const row = data && (data.row || (Array.isArray(data?.data) ? data.data[0] : null)) || null;
                                const avatar = typeof row?.avatar === 'string' ? row.avatar : '';
                                return {
                                    id,
                                    avatar
                                };
                            }
                        }["CallTiles.useEffect.run"]));
                        const next = {
                            ...avatarsMap
                        };
                        results.forEach({
                            "CallTiles.useEffect.run": ({ id, avatar })=>{
                                if (avatar) next[id] = avatar;
                            }
                        }["CallTiles.useEffect.run"]);
                        setAvatarsMap(next);
                    } catch  {}
                }
            }["CallTiles.useEffect.run"];
            void run();
        }
    }["CallTiles.useEffect"], [
        gridTracks,
        avatarsMap
    ]);
    const sortedTracks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "CallTiles.useMemo[sortedTracks]": ()=>{
            if (!spotlightId) return gridTracks;
            const s = gridTracks.slice();
            const idx = s.findIndex({
                "CallTiles.useMemo[sortedTracks].idx": (tr)=>String((tr?.participant?.identity || '').trim()) === spotlightId
            }["CallTiles.useMemo[sortedTracks].idx"]);
            if (idx > 0) {
                const [sp] = s.splice(idx, 1);
                s.unshift(sp);
            }
            return s;
        }
    }["CallTiles.useMemo[sortedTracks]"], [
        gridTracks,
        spotlightId
    ]);
    const maxTiles = 9;
    const total = sortedTracks.length;
    const showMore = total > maxTiles;
    const displayLimit = showMore ? maxTiles - 1 : maxTiles;
    const displayTracks = sortedTracks.slice(0, displayLimit);
    const moreCount = Math.max(0, total - displayTracks.length);
    const totalTiles = displayTracks.length + (moreCount > 0 ? 1 : 0);
    const cols = totalTiles <= 1 ? 1 : totalTiles <= 4 ? 2 : totalTiles <= 9 ? 3 : 4;
    const rows = Math.ceil(totalTiles / cols);
    if (mini) {
        const picked = miniPickId ? remoteTracks.find((tr)=>String((tr?.participant?.identity || '').trim()) === miniPickId) : undefined;
        const trackToShow = picked || localTrack;
        if (callMode === 'voice') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-full h-full overflow-hidden ${callMode === 'voice' ? 'bg-blue-500' : 'bg-black'}`,
                style: {
                    minHeight: offMinHeight ?? 120
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-3",
                        children: [
                            avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: avatarUrl,
                                alt: titleName || 'avatar',
                                width: 96,
                                height: 96,
                                className: "w-16 h-16 rounded-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 233,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 241,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/90 text-sm",
                                children: titleName || ''
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 230,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full overflow-hidden bg-black",
            style: {
                minHeight: offMinHeight ?? 120
            },
            children: trackToShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
                trackRef: trackToShow,
                offMinHeight: offMinHeight,
                avatarUrl: trackToShow?.participant?.isLocal ? myAvatarUrl : avatarUrl,
                contain: true
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 253,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white/80 text-xs",
                    children: "Đang chờ camera..."
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 265,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 264,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
            lineNumber: 251,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-full overflow-hidden max-md:h-[100vh]  ${callMode === 'voice' ? 'bg-blue-500' : 'bg-black'}`,
        style: {
            minHeight: offMinHeight ?? 240
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:block hidden rounded-lg w-full h-full",
                children: callMode === 'voice' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-4 mt-20",
                        children: [
                            avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: avatarUrl,
                                alt: titleName || 'avatar',
                                width: 160,
                                height: 160,
                                className: "w-32 h-32 rounded-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 282,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 rounded-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 290,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/90 text-lg",
                                children: titleName || ''
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this) : displayTracks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full h-full gap-2 p-2",
                    style: {
                        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
                    },
                    children: [
                        displayTracks.map((tr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
                                    trackRef: tr,
                                    offMinHeight: offMinHeight,
                                    avatarUrl: (tr?.participant?.isLocal ? myAvatarUrl : avatarsMap[String((tr?.participant?.identity || '').trim())]) || (isGridMode ? undefined : avatarUrl)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this)
                            }, `${String(tr?.participant?.identity || '')}-${i}`, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 304,
                                columnNumber: 15
                            }, this)),
                        moreCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowRoster(true),
                            className: "flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-lg font-semibold rounded-md",
                            title: "Xem thêm",
                            children: [
                                "+",
                                moreCount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 326,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 296,
                    columnNumber: 11
                }, this) : localTrack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
                        trackRef: localTrack,
                        title: myName,
                        avatarUrl: myAvatarUrl,
                        offMinHeight: offMinHeight
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 337,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 336,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/80 text-sm",
                        children: "Đang chờ đối phương bật camera..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 341,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 340,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden  w-full h-full flex items-center justify-center",
                children: callMode === 'voice' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-4 mt-40 max-md:mt-0",
                        children: [
                            avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: avatarUrl,
                                alt: titleName || 'avatar',
                                width: 128,
                                height: 128,
                                className: "w-28 h-28 rounded-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 350,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-28 h-28 rounded-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 358,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/90 text-xl font-bold",
                                children: titleName || ''
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 360,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 348,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 347,
                    columnNumber: 11
                }, this) : displayTracks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full h-full",
                    style: {
                        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
                    },
                    children: [
                        displayTracks.map((tr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
                                    trackRef: tr,
                                    offMinHeight: offMinHeight,
                                    contain: true,
                                    avatarUrl: (tr?.participant?.isLocal ? myAvatarUrl : avatarsMap[String((tr?.participant?.identity || '').trim())]) || (isGridMode ? undefined : avatarUrl)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 376,
                                    columnNumber: 17
                                }, this)
                            }, `${String(tr?.participant?.identity || '')}-${i}`, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 372,
                                columnNumber: 15
                            }, this)),
                        moreCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowRoster(true),
                            className: "flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-lg font-semibold rounded-md",
                            title: "Xem thêm",
                            children: [
                                "+",
                                moreCount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 395,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 364,
                    columnNumber: 11
                }, this) : localTrack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[85vh] mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
                        trackRef: localTrack,
                        title: myName,
                        avatarUrl: myAvatarUrl,
                        offMinHeight: offMinHeight,
                        contain: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 406,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 405,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/80 text-sm",
                        children: "Đang chờ đối phương bật camera..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 416,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 415,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            showRoster && callMode === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/80 z-50 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-sm",
                                children: "Người tham gia khác"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1 rounded bg-white/10 text-white hover:bg-white/20",
                                onClick: ()=>setShowRoster(false),
                                title: "Đóng",
                                children: "Đóng"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            style: {
                                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
                            },
                            children: sortedTracks.slice(displayTracks.length).map((tr, i)=>{
                                const id = String((tr?.participant?.identity || '').trim());
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "relative rounded-md overflow-hidden bg-black",
                                    onClick: ()=>{
                                        setSpotlightId(id);
                                        setShowRoster(false);
                                    },
                                    title: "Đẩy lên giao diện chính",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
                                        trackRef: tr,
                                        offMinHeight: 120,
                                        contain: true,
                                        avatarUrl: (tr?.participant?.isLocal ? myAvatarUrl : avatarsMap[id]) || avatarUrl
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                        lineNumber: 448,
                                        columnNumber: 21
                                    }, this)
                                }, `${id}-${i}`, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 439,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 433,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s1(CallTiles, "fkkRy8bk83jW17hm8o1CLUe5vzQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"]
    ];
});
_c1 = CallTiles;
function formatTime(startAt) {
    if (!startAt) return '00:00';
    const s = Math.max(0, Math.floor((Date.now() - startAt) / 1000));
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const r = (s % 60).toString().padStart(2, '0');
    return `${m}:${r}`;
}
function LiveKitCall({ serverUrl, token, onDisconnected, onRequestEnd, className, titleName, callStartAt, avatarUrl, myName, myAvatarUrl, localPreviewSize, offMinHeight, onParticipantsChanged, callMode = 'video', uiVariant = 'full' }) {
    _s2();
    var _s = __turbopack_context__.k.signature();
    const isMini = uiVariant === 'mini';
    const [showLocalPreview, setShowLocalPreview] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true);
    const [showControls, setShowControls] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [tick, setTick] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const initialPreview = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "LiveKitCall.useMemo[initialPreview]": ()=>{
            return {
                w: localPreviewSize?.w ?? 80,
                h: localPreviewSize?.h ?? 50
            };
        }
    }["LiveKitCall.useMemo[initialPreview]"], [
        localPreviewSize
    ]);
    const toggleControls = ()=>{
        setShowControls((prev)=>!prev);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LiveKitCall.useEffect": ()=>{
            if (!callStartAt) {
                setTick(0);
                return;
            }
            setTick(0);
            const id = window.setInterval({
                "LiveKitCall.useEffect.id": ()=>setTick({
                        "LiveKitCall.useEffect.id": (x)=>x + 1
                    }["LiveKitCall.useEffect.id"])
            }["LiveKitCall.useEffect.id"], 1000);
            return ({
                "LiveKitCall.useEffect": ()=>window.clearInterval(id)
            })["LiveKitCall.useEffect"];
        }
    }["LiveKitCall.useEffect"], [
        callStartAt
    ]);
    // function ParticipantsCounter() {
    //   const tracks = useTracks([Track.Source.Camera]);
    //   const count = tracks.filter((t) => !t.participant?.isLocal).length;
    //   return (
    //     <div className="absolute top-3 right-3 text-xs font-semibold bg-white/20 text-white px-2 py-1 rounded">
    //       {count} người
    //     </div>
    //   );
    // }
    function ParticipantsWatcher({ onChanged }) {
        _s();
        const tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera
        ]);
        const parts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "LiveKitCall.ParticipantsWatcher.useMemo[parts]": ()=>{
                return tracks.filter({
                    "LiveKitCall.ParticipantsWatcher.useMemo[parts]": (t)=>!t.participant?.isLocal
                }["LiveKitCall.ParticipantsWatcher.useMemo[parts]"]).map({
                    "LiveKitCall.ParticipantsWatcher.useMemo[parts]": (t)=>({
                            id: String((t?.participant?.identity || '').trim()),
                            name: String((t?.participant?.name || t?.participant?.identity || '').trim())
                        })
                }["LiveKitCall.ParticipantsWatcher.useMemo[parts]"]).filter({
                    "LiveKitCall.ParticipantsWatcher.useMemo[parts]": (p)=>!!p.id
                }["LiveKitCall.ParticipantsWatcher.useMemo[parts]"]);
            }
        }["LiveKitCall.ParticipantsWatcher.useMemo[parts]"], [
            tracks
        ]);
        const prevRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef([]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "LiveKitCall.ParticipantsWatcher.useEffect": ()=>{
                const prev = prevRef.current;
                const changed = prev.length !== parts.length || prev.some({
                    "LiveKitCall.ParticipantsWatcher.useEffect": (p, i)=>p.id !== parts[i]?.id
                }["LiveKitCall.ParticipantsWatcher.useEffect"]);
                if (changed) {
                    prevRef.current = parts;
                    if (onChanged) onChanged(parts);
                }
            }
        }["LiveKitCall.ParticipantsWatcher.useEffect"], [
            parts,
            onChanged
        ]);
        return null;
    }
    _s(ParticipantsWatcher, "beaYGLK79oiw+eDe7PB3UYfibVU=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className ? className : '',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Bb6uLxS5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__["LiveKitRoom"], {
            serverUrl: serverUrl,
            token: token,
            connect: true,
            video: callMode === 'video',
            audio: true,
            onDisconnected: onDisconnected,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative w-full h-full ${isMini ? '' : 'group'}`,
                    onClick: isMini ? undefined : toggleControls,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CallTiles, {
                            titleName: titleName,
                            avatarUrl: avatarUrl,
                            offMinHeight: offMinHeight,
                            myName: myName,
                            myAvatarUrl: myAvatarUrl,
                            callMode: callMode,
                            mini: isMini
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 570,
                            columnNumber: 11
                        }, this),
                        !isMini && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute md:block hidden top-3 left-3 text-xs font-semibold bg-green-600 text-white px-2 py-1 rounded",
                                    children: formatTime(callStartAt)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute md:hidden block top-3 left-1/2 -translate-x-1/2 text-xs font-semibold  text-white px-2 py-1 rounded",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-500 text-[1rem]",
                                        children: formatTime(callStartAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                        lineNumber: 586,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 585,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 left-3 md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition z-50",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            try {
                                                window.dispatchEvent(new CustomEvent('minimizeCallOverlay'));
                                                window.dispatchEvent(new CustomEvent('hideCallOverlay'));
                                            } catch  {}
                                        },
                                        title: "Quay lại",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 601,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                        lineNumber: 589,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticipantsWatcher, {
                            onChanged: onParticipantsChanged
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, this),
                        !isMini && showLocalPreview && callMode === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocalPreview, {
                            myName: myName,
                            myAvatarUrl: myAvatarUrl,
                            size: initialPreview
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this),
                        !isMini && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 bottom-4 md:flex hidden justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100",
                                children: [
                                    callMode === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                                                className: "cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 620,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                                                className: "cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 624,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer p-2 rounded-full bg-red-600 hover:bg-red-700 transition text-white",
                                        onClick: ()=>{
                                            if (onRequestEnd) onRequestEnd();
                                        },
                                        title: "Kết thúc",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiPhone"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 637,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                        lineNumber: 630,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                                        className: "cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, this),
                                    callMode === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition",
                                        onClick: ()=>setShowLocalPreview((v)=>!v),
                                        title: showLocalPreview ? 'Ẩn cam của tôi' : 'Hiện cam của tôi',
                                        children: showLocalPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 649,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEye"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 649,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                        lineNumber: 644,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                lineNumber: 617,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, this),
                        !isMini && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `fixed bottom-6 left-0 right-0 md:hidden flex justify-center gap-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: callMode === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                                                className: "w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 663,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-xs",
                                                children: "Camera"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 667,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DuRBtGp8$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                            source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                                            className: "w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 672,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs",
                                            children: "Mic"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 671,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition",
                                            onClick: ()=>{
                                                if (onRequestEnd) onRequestEnd();
                                            },
                                            title: "Kết thúc",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiPhone"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 686,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs",
                                            children: "Kết thúc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                            lineNumber: 688,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 678,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: callMode === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition",
                                                onClick: ()=>setShowLocalPreview((v)=>!v),
                                                title: showLocalPreview ? 'Ẩn cam của tôi' : 'Hiện cam của tôi',
                                                children: showLocalPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 43
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEye"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 80
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 693,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-xs",
                                                children: showLocalPreview ? 'Ẩn cam tôi' : 'Hiện cam tôi'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                                lineNumber: 700,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                                    lineNumber: 690,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
            lineNumber: 557,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
        lineNumber: 556,
        columnNumber: 5
    }, this);
}
_s2(LiveKitCall, "diBSbJIr5vFllXFqF89ipMqmpiU=");
_c2 = LiveKitCall;
function LocalPreview({ myName, myAvatarUrl, size }) {
    _s3();
    const cameraTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera
    ]);
    const localTrack = cameraTracks.find((t)=>t.participant?.isLocal);
    const [isDesktop, setIsDesktop] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [pos, setPos] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        x: 12,
        y: 12
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LocalPreview.useEffect": ()=>{
            const apply = {
                "LocalPreview.useEffect.apply": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const width = window.innerWidth;
                    const desktop = width >= 768;
                    setIsDesktop(desktop);
                    if (!desktop) {
                        setPos({
                            x: Math.max(8, width - size.w - 12),
                            y: 12
                        });
                    }
                }
            }["LocalPreview.useEffect.apply"];
            apply();
            window.addEventListener('resize', apply);
            return ({
                "LocalPreview.useEffect": ()=>window.removeEventListener('resize', apply)
            })["LocalPreview.useEffect"];
        }
    }["LocalPreview.useEffect"], [
        size.w
    ]);
    const handleDragStart = (e)=>{
        if (isDesktop) return;
        const st = {
            sx: e.clientX,
            sy: e.clientY,
            ox: pos.x,
            oy: pos.y
        };
        const onMove = (ev)=>{
            const dx = ev.clientX - st.sx;
            const dy = ev.clientY - st.sy;
            const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - size.w - 8));
            const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - size.h - 8));
            setPos({
                x: nx,
                y: ny
            });
        };
        const onUp = ()=>{
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };
    const handleTouchStart = (e)=>{
        if (isDesktop) return;
        const t = e.touches[0];
        const st = {
            sx: t.clientX,
            sy: t.clientY,
            ox: pos.x,
            oy: pos.y
        };
        const onMove = (ev)=>{
            const tt = ev.touches[0];
            const dx = tt.clientX - st.sx;
            const dy = tt.clientY - st.sy;
            const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - size.w - 8));
            const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - size.h - 8));
            setPos({
                x: nx,
                y: ny
            });
        };
        const onUp = ()=>{
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
        window.addEventListener('touchmove', onMove, {
            passive: false
        });
        window.addEventListener('touchend', onUp, {
            passive: false
        });
    };
    const style = {
        width: size.w,
        height: size.h
    };
    if (isDesktop) {
    // desktop: fixed position handled by className; keep size only
    } else {
        style.left = pos.x;
        style.top = pos.y;
    }
    // Hide local preview if we have 3 or more participants (grid mode)
    if (cameraTracks.length >= 3) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? 'absolute top-2 right-2' : 'absolute'} rounded-lg overflow-hidden bg-black ${isDesktop ? '' : 'cursor-move'}`,
        style: style,
        onMouseDown: handleDragStart,
        onTouchStart: handleTouchStart,
        children: localTrack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTrackTile, {
            trackRef: localTrack,
            title: myName,
            avatarUrl: myAvatarUrl
        }, void 0, false, {
            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
            lineNumber: 795,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white/70 text-xs px-2 py-1",
                children: "Không có camera"
            }, void 0, false, {
                fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
                lineNumber: 798,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
            lineNumber: 797,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(call)/LiveKitCall.tsx",
        lineNumber: 788,
        columnNumber: 5
    }, this);
}
_s3(LocalPreview, "FbEse+2+RqmCflk04X5ywThqT6c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$yU$2d$srrIO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"]
    ];
});
_c3 = LocalPreview;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CustomTrackTile");
__turbopack_context__.k.register(_c1, "CallTiles");
__turbopack_context__.k.register(_c2, "LiveKitCall");
__turbopack_context__.k.register(_c3, "LocalPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/callRing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playGlobalRingTone",
    ()=>playGlobalRingTone,
    "stopGlobalRingTone",
    ()=>stopGlobalRingTone
]);
let ringCtx = null;
let ringGain = null;
let ringOsc = null;
let ringInterval = null;
let ringOn = false;
function playGlobalRingTone(onMs = 1000, offMs = 1000, freq = 800) {
    if (ringOn) return;
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.value = 0;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        ringCtx = ctx;
        ringOsc = osc;
        ringGain = gain;
        ringOn = true;
        let on = false;
        ringInterval = window.setInterval(()=>{
            on = !on;
            if (ringGain) ringGain.gain.value = on ? 0.2 : 0;
        }, onMs + offMs);
        setTimeout(()=>{
            if (ringGain) {
                ringGain.gain.value = 0.2;
                setTimeout(()=>{
                    if (ringGain) ringGain.gain.value = 0;
                }, onMs);
            }
        }, 0);
    } catch (err) {
        console.error('❌ [GLOBAL] Ring error:', err);
    }
}
function stopGlobalRingTone() {
    try {
        if (ringInterval) {
            window.clearInterval(ringInterval);
            ringInterval = null;
        }
        if (ringGain) {
            ringGain.gain.value = 0;
        }
        if (ringOsc) {
            try {
                ringOsc.stop();
            } catch  {}
            ringOsc.disconnect();
            ringOsc = null;
        }
        if (ringCtx) {
            try {
                ringCtx.close();
            } catch  {}
            ringCtx = null;
        }
        ringGain = null;
        ringOn = false;
    } catch (err) {
        console.error('❌ [GLOBAL] Stop ring error:', err);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLiveKitSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLiveKitSession",
    ()=>useLiveKitSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/callRing.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function useLiveKitSession({ socketRef, roomId, currentUserId, currentUser, isGroup, selectedChat }) {
    _s();
    const [incomingCall, setIncomingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [callActive, setCallActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [callType, setCallType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [callStartAt, setCallStartAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [callConnecting, setCallConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roomCallActive, setRoomCallActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roomCallType, setRoomCallType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roomParticipants, setRoomParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeRoomId, setActiveRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(roomId);
    const [counterpartId, setCounterpartId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [livekitToken, setLivekitToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [livekitUrl, setLivekitUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const receiversRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const ringTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const callConnectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastJoinedRoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const activeRoomIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const ignoreRemoteEndUntilRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const roomParticipantsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const callTypeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            callActiveRef.current = callActive;
        }
    }["useLiveKitSession.useEffect"], [
        callActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            callTypeRef.current = callType;
        }
    }["useLiveKitSession.useEffect"], [
        callType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            callConnectingRef.current = callConnecting;
        }
    }["useLiveKitSession.useEffect"], [
        callConnecting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            activeRoomIdRef.current = String(activeRoomId || '');
        }
    }["useLiveKitSession.useEffect"], [
        activeRoomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            roomParticipantsRef.current = roomParticipants;
        }
    }["useLiveKitSession.useEffect"], [
        roomParticipants
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            const ensureUserJoin = {
                "useLiveKitSession.useEffect.ensureUserJoin": async ()=>{
                    try {
                        if (!currentUserId) return;
                        if (!socketRef.current || !socketRef.current.connected) {
                            socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                                transports: [
                                    'websocket'
                                ],
                                withCredentials: false
                            });
                            await new Promise({
                                "useLiveKitSession.useEffect.ensureUserJoin": (resolve)=>{
                                    socketRef.current.on('connect', {
                                        "useLiveKitSession.useEffect.ensureUserJoin": ()=>resolve()
                                    }["useLiveKitSession.useEffect.ensureUserJoin"]);
                                }
                            }["useLiveKitSession.useEffect.ensureUserJoin"]);
                        }
                        socketRef.current.emit('join_user', {
                            userId: String(currentUserId)
                        });
                    } catch  {}
                }
            }["useLiveKitSession.useEffect.ensureUserJoin"];
            void ensureUserJoin();
        }
    }["useLiveKitSession.useEffect"], [
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            if (callActive || callConnecting) {
                ignoreRemoteEndUntilRef.current = Date.now() + 5000;
                return;
            }
            setActiveRoomId(roomId);
        }
    }["useLiveKitSession.useEffect"], [
        roomId,
        callActive,
        callConnecting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            const rid = String(roomId || '');
            if (!rid) {
                setRoomCallActive(false);
                setRoomCallType(null);
                setRoomParticipants([]);
                return;
            }
            if (callActiveRef.current || callConnectingRef.current) return;
            setRoomCallActive(false);
            setRoomCallType(null);
            setRoomParticipants([]);
        }
    }["useLiveKitSession.useEffect"], [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            const rid = String(roomId || '');
            if (!rid) return;
            const ensureJoin = {
                "useLiveKitSession.useEffect.ensureJoin": async ()=>{
                    try {
                        if (callActive || callConnecting) return;
                        if (!socketRef.current || !socketRef.current.connected) {
                            socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                                transports: [
                                    'websocket'
                                ],
                                withCredentials: false
                            });
                            await new Promise({
                                "useLiveKitSession.useEffect.ensureJoin": (resolve)=>{
                                    socketRef.current.on('connect', {
                                        "useLiveKitSession.useEffect.ensureJoin": ()=>resolve()
                                    }["useLiveKitSession.useEffect.ensureJoin"]);
                                }
                            }["useLiveKitSession.useEffect.ensureJoin"]);
                            socketRef.current.emit('join_user', {
                                userId: String(currentUserId)
                            });
                        }
                        if (lastJoinedRoomRef.current !== rid) {
                            socketRef.current?.emit('join_room', rid);
                            lastJoinedRoomRef.current = rid;
                        }
                    } catch  {}
                }
            }["useLiveKitSession.useEffect.ensureJoin"];
            void ensureJoin();
        }
    }["useLiveKitSession.useEffect"], [
        roomId,
        currentUserId,
        socketRef,
        callActive,
        callConnecting
    ]);
    // Bỏ hoàn toàn lưu trạng thái phòng gọi vào localStorage
    const getReceiverIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[getReceiverIds]": ()=>{
            if (isGroup) {
                const members = selectedChat?.members || [];
                const ids = members.map({
                    "useLiveKitSession.useCallback[getReceiverIds].ids": (m)=>typeof m === 'object' ? String(m._id) : String(m)
                }["useLiveKitSession.useCallback[getReceiverIds].ids"]).filter({
                    "useLiveKitSession.useCallback[getReceiverIds].ids": (id)=>id !== String(currentUserId)
                }["useLiveKitSession.useCallback[getReceiverIds].ids"]);
                return ids;
            }
            const id = String(selectedChat?._id || '');
            return id ? [
                id
            ] : [];
        }
    }["useLiveKitSession.useCallback[getReceiverIds]"], [
        isGroup,
        selectedChat,
        currentUserId
    ]);
    const fetchToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[fetchToken]": async (rid)=>{
            const res = await fetch(`/api/livekit/token?room=${encodeURIComponent(rid)}`, {
                method: 'GET'
            });
            if (!res.ok) throw new Error('token failed');
            const data = await res.json();
            setLivekitToken(String(data.token || ''));
            setLivekitUrl(String(data.serverUrl || ''));
        }
    }["useLiveKitSession.useCallback[fetchToken]"], []);
    const sendNotify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[sendNotify]": async (content)=>{
            if (!roomId || !currentUserId) return;
            const myName = currentUser?.name || 'Bạn';
            const msgData = {
                roomId,
                sender: currentUserId,
                type: 'notify',
                content,
                timestamp: Date.now()
            };
            try {
                const res = await fetch('/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'create',
                        data: msgData
                    })
                });
                const json = await res.json();
                if (json.success && json._id) {
                    let members = [];
                    if (selectedChat && String(selectedChat._id) === String(roomId) && isGroup) {
                        members = selectedChat.members || [];
                    }
                    socketRef.current?.emit('send_message', {
                        ...msgData,
                        _id: json._id,
                        senderName: myName,
                        isGroup,
                        receiver: null,
                        members
                    });
                }
            } catch (e) {
                console.error('Failed to send notify', e);
            }
        }
    }["useLiveKitSession.useCallback[sendNotify]"], [
        roomId,
        currentUserId,
        currentUser,
        isGroup,
        selectedChat,
        socketRef
    ]);
    const joinActiveGroupCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[joinActiveGroupCall]": async ()=>{
            try {
                if (!isGroup || !roomCallActive) return;
                const rid = String(roomId);
                if (!socketRef.current || !socketRef.current.connected) {
                    socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                        transports: [
                            'websocket'
                        ],
                        withCredentials: false
                    });
                    await new Promise({
                        "useLiveKitSession.useCallback[joinActiveGroupCall]": (resolve)=>{
                            socketRef.current.on('connect', {
                                "useLiveKitSession.useCallback[joinActiveGroupCall]": ()=>resolve()
                            }["useLiveKitSession.useCallback[joinActiveGroupCall]"]);
                        }
                    }["useLiveKitSession.useCallback[joinActiveGroupCall]"]);
                    socketRef.current.emit('join_user', {
                        userId: String(currentUserId)
                    });
                }
                socketRef.current?.emit('join_room', rid);
                const target = (Array.isArray(roomParticipants) ? roomParticipants : []).find({
                    "useLiveKitSession.useCallback[joinActiveGroupCall].target": (id)=>String(id) !== String(currentUserId)
                }["useLiveKitSession.useCallback[joinActiveGroupCall].target"]);
                if (target) {
                    socketRef.current?.emit('call_answer', {
                        roomId: rid,
                        target: String(target),
                        from: String(currentUserId),
                        sdp: null
                    });
                }
                setActiveRoomId(rid);
                setCallType(roomCallType || 'voice');
                setCallConnecting(false);
                await fetchToken(rid);
                setCallActive(true);
                const myName = currentUser?.name || 'Bạn';
                void sendNotify(`${myName} đã tham gia cuộc gọi video`);
            } catch  {
            // ignore
            }
        }
    }["useLiveKitSession.useCallback[joinActiveGroupCall]"], [
        isGroup,
        roomCallActive,
        roomParticipants,
        roomId,
        currentUserId,
        roomCallType,
        fetchToken,
        currentUser,
        sendNotify
    ]);
    const startCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[startCall]": async (type, overrideTargetId)=>{
            try {
                if (!socketRef.current || !socketRef.current.connected) {
                    socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                        transports: [
                            'websocket'
                        ],
                        withCredentials: false
                    });
                    await new Promise({
                        "useLiveKitSession.useCallback[startCall]": (resolve)=>{
                            socketRef.current.on('connect', {
                                "useLiveKitSession.useCallback[startCall]": ()=>resolve()
                            }["useLiveKitSession.useCallback[startCall]"]);
                        }
                    }["useLiveKitSession.useCallback[startCall]"]);
                    socketRef.current.emit('join_room', roomId);
                    socketRef.current.emit('join_user', {
                        userId: String(currentUserId)
                    });
                }
            } catch  {}
            const receivers = ({
                "useLiveKitSession.useCallback[startCall].receivers": ()=>{
                    if (!isGroup && overrideTargetId) {
                        return [
                            String(overrideTargetId)
                        ];
                    }
                    if (isGroup && roomCallActive && roomParticipants && roomParticipants.length > 0) {
                        return roomParticipants.filter({
                            "useLiveKitSession.useCallback[startCall].receivers": (id)=>String(id) !== String(currentUserId)
                        }["useLiveKitSession.useCallback[startCall].receivers"]);
                    }
                    return getReceiverIds();
                }
            })["useLiveKitSession.useCallback[startCall].receivers"]();
            receiversRef.current = receivers;
            if (receivers.length === 0) return;
            if (isGroup) {
                const myName = currentUser?.name || 'Bạn';
                void sendNotify(`${myName} đã tham gia cuộc gọi video`);
            }
            setCallType(type);
            setCallStartAt(null);
            setCallConnecting(true);
            setLivekitToken(null);
            setLivekitUrl(null);
            setActiveRoomId(roomId);
            {
                const otherId = ({
                    "useLiveKitSession.useCallback[startCall].otherId": ()=>{
                        if (isGroup) return null;
                        if (overrideTargetId) return String(overrideTargetId);
                        if (receivers.length > 0) return String(receivers[0]);
                        const parts = String(roomId).split('_').filter(Boolean);
                        const me = String(currentUserId);
                        const t = parts.length === 2 ? parts.find({
                            "useLiveKitSession.useCallback[startCall].otherId": (id)=>String(id) !== me
                        }["useLiveKitSession.useCallback[startCall].otherId"]) : undefined;
                        return t ? String(t) : null;
                    }
                })["useLiveKitSession.useCallback[startCall].otherId"]();
                setCounterpartId(otherId);
            }
            if (ringTimeoutRef.current) {
                window.clearTimeout(ringTimeoutRef.current);
                ringTimeoutRef.current = null;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlobalRingTone"])();
            ringTimeoutRef.current = window.setTimeout({
                "useLiveKitSession.useCallback[startCall]": ()=>{
                    if (!callActiveRef.current && callConnectingRef.current) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
                        endCall('local');
                    }
                }
            }["useLiveKitSession.useCallback[startCall]"], 30000);
            try {
                for (const otherId of receivers){
                    socketRef.current?.emit('call_offer', {
                        roomId,
                        target: otherId,
                        from: String(currentUserId),
                        type,
                        sdp: null
                    });
                }
            } catch  {
                setCallConnecting(false);
            }
        }
    }["useLiveKitSession.useCallback[startCall]"], [
        getReceiverIds,
        roomId,
        currentUserId,
        isGroup,
        roomCallActive,
        roomParticipants,
        currentUser,
        sendNotify
    ]);
    const endCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[endCall]": (source = 'local')=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
            setCallActive(false);
            setCallType(null);
            setCallStartAt(null);
            setCallConnecting(false);
            setIncomingCall(null);
            setCounterpartId(null);
            setActiveRoomId('');
            setLivekitToken(null);
            setLivekitUrl(null);
            if (ringTimeoutRef.current) {
                window.clearTimeout(ringTimeoutRef.current);
                ringTimeoutRef.current = null;
            }
            if (source === 'local' && socketRef.current?.connected) {
                if (isGroup) {
                    socketRef.current.emit('call_leave', {
                        roomId,
                        userId: String(currentUserId)
                    });
                    const myName = currentUser?.name || 'Bạn';
                    void sendNotify(`${myName} đã rời cuộc gọi video`);
                    const type = callTypeRef.current;
                    if (type === 'video') {
                        const currentParts = roomParticipantsRef.current || [];
                        const remaining = currentParts.filter({
                            "useLiveKitSession.useCallback[endCall].remaining": (id)=>String(id) !== String(currentUserId)
                        }["useLiveKitSession.useCallback[endCall].remaining"]);
                        if (remaining.length === 0) {
                            const time = new Date().toLocaleTimeString('vi-VN', {
                                hour: '2-digit',
                                minute: '2-digit'
                            });
                            void sendNotify(`Cuộc gọi video đã kết thúc lúc ${time}`);
                        }
                    }
                    setRoomParticipants({
                        "useLiveKitSession.useCallback[endCall]": (prev)=>{
                            const next = (prev || []).filter({
                                "useLiveKitSession.useCallback[endCall].next": (id)=>String(id) !== String(currentUserId)
                            }["useLiveKitSession.useCallback[endCall].next"]);
                            if (next.length === 0) {
                                setRoomCallActive(false);
                                setRoomCallType(null);
                            }
                            return next;
                        }
                    }["useLiveKitSession.useCallback[endCall]"]);
                } else {
                    let targets = receiversRef.current;
                    if (!targets || targets.length === 0) {
                        const other = counterpartId ? String(counterpartId) : ({
                            "useLiveKitSession.useCallback[endCall]": ()=>{
                                const parts = String(roomId).split('_').filter(Boolean);
                                const me = String(currentUserId);
                                const t = parts.length === 2 ? parts.find({
                                    "useLiveKitSession.useCallback[endCall]": (id)=>String(id) !== me
                                }["useLiveKitSession.useCallback[endCall]"]) : undefined;
                                return t ? String(t) : undefined;
                            }
                        })["useLiveKitSession.useCallback[endCall]"]();
                        targets = other ? [
                            other
                        ] : [];
                    }
                    socketRef.current.emit('call_end', {
                        roomId,
                        from: String(currentUserId),
                        targets
                    });
                }
            }
        }
    }["useLiveKitSession.useCallback[endCall]"], [
        roomId,
        currentUserId,
        counterpartId,
        isGroup,
        callType,
        currentUser,
        sendNotify
    ]);
    const acceptIncomingCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveKitSession.useCallback[acceptIncomingCall]": async ()=>{
            if (!incomingCall) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
            setCallType(incomingCall.type);
            setActiveRoomId(incomingCall.roomId);
            setCallConnecting(false);
            try {
                if (!socketRef.current || !socketRef.current.connected) {
                    socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                        transports: [
                            'websocket'
                        ],
                        withCredentials: false
                    });
                    await new Promise({
                        "useLiveKitSession.useCallback[acceptIncomingCall]": (resolve)=>{
                            socketRef.current.on('connect', {
                                "useLiveKitSession.useCallback[acceptIncomingCall]": ()=>resolve()
                            }["useLiveKitSession.useCallback[acceptIncomingCall]"]);
                        }
                    }["useLiveKitSession.useCallback[acceptIncomingCall]"]);
                    socketRef.current.emit('join_user', {
                        userId: String(currentUserId)
                    });
                }
                socketRef.current?.emit('join_room', incomingCall.roomId);
                socketRef.current?.emit('call_answer', {
                    roomId: incomingCall.roomId,
                    target: String(incomingCall.from),
                    from: String(currentUserId),
                    sdp: null
                });
                const parts = String(incomingCall.roomId).split('_').filter(Boolean);
                if (parts.length === 2) {
                    setCounterpartId(String(incomingCall.from));
                } else {
                    setCounterpartId(null);
                }
                setCallActive(true);
                await fetchToken(incomingCall.roomId);
                setIncomingCall(null);
                setCallStartAt({
                    "useLiveKitSession.useCallback[acceptIncomingCall]": (prev)=>prev && prev > 0 ? prev : Date.now()
                }["useLiveKitSession.useCallback[acceptIncomingCall]"]);
            } catch  {
                setCallActive(true);
            }
        }
    }["useLiveKitSession.useCallback[acceptIncomingCall]"], [
        incomingCall,
        fetchToken,
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            const socket = socketRef.current;
            if (!socket) return;
            socket.off('call_offer');
            socket.off('call_answer');
            socket.off('call_end');
            socket.off('call_reject');
            socket.off('call_leave');
            socket.off('call_state');
            const handleCallOffer = {
                "useLiveKitSession.useEffect.handleCallOffer": (data)=>{
                    if (String(data.target) !== String(currentUserId)) return;
                    if (callActiveRef.current || callConnectingRef.current) {
                        socket.emit('call_candidate', {
                            roomId: data.roomId,
                            target: data.from,
                            from: currentUserId,
                            candidate: 'busy-signal'
                        });
                        return;
                    }
                    setIncomingCall({
                        from: String(data.from),
                        type: data.type,
                        roomId: data.roomId
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlobalRingTone"])();
                }
            }["useLiveKitSession.useEffect.handleCallOffer"];
            const handleCallCandidate = {
                "useLiveKitSession.useEffect.handleCallCandidate": (data)=>{
                    if (data.target && String(data.target) !== String(currentUserId)) return;
                    if (data.candidate === 'busy-signal') {
                        const ev = new CustomEvent('callBusy', {
                            detail: {
                                roomId: data.roomId,
                                from: data.from
                            }
                        });
                        window.dispatchEvent(ev);
                    }
                }
            }["useLiveKitSession.useEffect.handleCallCandidate"];
            const handleCallAnswer = {
                "useLiveKitSession.useEffect.handleCallAnswer": async (data)=>{
                    if (String(data.target) !== String(currentUserId)) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
                    setCallConnecting(false);
                    setActiveRoomId(data.roomId);
                    setCallStartAt({
                        "useLiveKitSession.useEffect.handleCallAnswer": (prev)=>prev && prev > 0 ? prev : Date.now()
                    }["useLiveKitSession.useEffect.handleCallAnswer"]);
                    await fetchToken(data.roomId);
                    setCallActive(true);
                }
            }["useLiveKitSession.useEffect.handleCallAnswer"];
            const handleCallEnd = {
                "useLiveKitSession.useEffect.handleCallEnd": (data)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
                    setIncomingCall(null);
                    const isDirect = String(data.roomId).split('_').filter(Boolean).length === 2;
                    const fromOther = typeof data.from === 'string' && String(data.from) !== String(currentUserId);
                    const explicit = fromOther || Array.isArray(data.targets) && data.targets.length > 0;
                    // 1-1: luôn kết thúc khi roomId trùng phòng đang gọi (dù explicit hay không)
                    if (isDirect) {
                        if (String(data.roomId) !== String(activeRoomIdRef.current)) return;
                        endCall('remote');
                        if (String(data.roomId) === String(roomId)) {
                            setRoomCallActive(false);
                            setRoomCallType(null);
                            setRoomParticipants([]);
                        }
                        return;
                    }
                    if (String(data.roomId) !== String(activeRoomIdRef.current)) return;
                    endCall('remote');
                    if (String(data.roomId) === String(roomId)) {
                        setRoomCallActive(false);
                        setRoomCallType(null);
                        setRoomParticipants([]);
                    }
                }
            }["useLiveKitSession.useEffect.handleCallEnd"];
            const handleCallReject = {
                "useLiveKitSession.useEffect.handleCallReject": (data)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
                    setIncomingCall(null);
                    if (String(data.roomId).split('_').filter(Boolean).length === 2) {
                        if (String(data.roomId) !== String(activeRoomIdRef.current)) return;
                        endCall('remote');
                        if (String(data.roomId) === String(roomId)) {
                            setRoomCallActive(false);
                            setRoomCallType(null);
                            setRoomParticipants([]);
                        }
                    }
                }
            }["useLiveKitSession.useEffect.handleCallReject"];
            const handleCallLeave = {
                "useLiveKitSession.useEffect.handleCallLeave": (data)=>{
                    if (String(data.roomId) !== String(roomId)) return;
                    setRoomParticipants({
                        "useLiveKitSession.useEffect.handleCallLeave": (prev)=>{
                            const next = (prev || []).filter({
                                "useLiveKitSession.useEffect.handleCallLeave.next": (id)=>String(id) !== String(data.userId)
                            }["useLiveKitSession.useEffect.handleCallLeave.next"]);
                            if (next.length === 0) {
                                setRoomCallActive(false);
                                setRoomCallType(null);
                            }
                            return next;
                        }
                    }["useLiveKitSession.useEffect.handleCallLeave"]);
                }
            }["useLiveKitSession.useEffect.handleCallLeave"];
            const handleCallState = {
                "useLiveKitSession.useEffect.handleCallState": (data)=>{
                    if (String(data.roomId) !== String(roomId)) return;
                    const isDirect = String(data.roomId).split('_').filter(Boolean).length === 2;
                    if (isDirect) return;
                    setRoomCallActive(!!data.active);
                    setRoomCallType(data.type);
                    setRoomParticipants(Array.isArray(data.participants) ? data.participants.map({
                        "useLiveKitSession.useEffect.handleCallState": (x)=>String(x)
                    }["useLiveKitSession.useEffect.handleCallState"]) : []);
                    setCallStartAt(typeof data.startAt === 'number' ? data.startAt : null);
                }
            }["useLiveKitSession.useEffect.handleCallState"];
            socket.on('call_offer', handleCallOffer);
            socket.on('call_answer', handleCallAnswer);
            socket.on('call_end', handleCallEnd);
            socket.on('call_reject', handleCallReject);
            socket.on('call_leave', handleCallLeave);
            socket.on('call_state', handleCallState);
            socket.on('call_candidate', handleCallCandidate);
            return ({
                "useLiveKitSession.useEffect": ()=>{
                    socket.off('call_offer', handleCallOffer);
                    socket.off('call_answer', handleCallAnswer);
                    socket.off('call_end', handleCallEnd);
                    socket.off('call_reject', handleCallReject);
                    socket.off('call_leave', handleCallLeave);
                    socket.off('call_state', handleCallState);
                    socket.off('call_candidate', handleCallCandidate);
                }
            })["useLiveKitSession.useEffect"];
        }
    }["useLiveKitSession.useEffect"], [
        currentUserId,
        socketRef,
        endCall,
        roomId,
        fetchToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            if (!callConnecting) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
                if (ringTimeoutRef.current) {
                    window.clearTimeout(ringTimeoutRef.current);
                    ringTimeoutRef.current = null;
                }
            }
        }
    }["useLiveKitSession.useEffect"], [
        callConnecting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveKitSession.useEffect": ()=>{
            if (!incomingCall) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$callRing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopGlobalRingTone"])();
                if (ringTimeoutRef.current) {
                    window.clearTimeout(ringTimeoutRef.current);
                    ringTimeoutRef.current = null;
                }
            }
        }
    }["useLiveKitSession.useEffect"], [
        incomingCall
    ]);
    return {
        callActive,
        callType,
        callStartAt,
        callConnecting,
        incomingCall,
        startCall,
        endCall,
        acceptIncomingCall,
        setIncomingCall,
        roomCallActive,
        roomCallType,
        roomParticipants,
        activeRoomId,
        counterpartId,
        livekitToken,
        livekitUrl,
        joinActiveGroupCall
    };
}
_s(useLiveKitSession, "3VkuBfNDu9bUh1kaNMIfiTCIjwI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChatNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatNotifications",
    ()=>useChatNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MESSAGE_SOUND_URL = 'https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3';
let globalAudioContext = null;
function useChatNotifications({ chatName }) {
    _s();
    const messageAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPlayedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const flashingIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashTabTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatNotifications.useCallback[flashTabTitle]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!document.hidden) return; // Chỉ nhấp nháy khi tab đang ẩn
            if (flashingIntervalRef.current) return; // Đang nhấp nháy rồi thì thôi
            const originalTitle = document.title;
            let isOriginal = false;
            flashingIntervalRef.current = setInterval({
                "useChatNotifications.useCallback[flashTabTitle]": ()=>{
                    document.title = isOriginal ? 'Bạn có tin nhắn mới' : originalTitle;
                    isOriginal = !isOriginal;
                }
            }["useChatNotifications.useCallback[flashTabTitle]"], 1000);
            const stopFlashing = {
                "useChatNotifications.useCallback[flashTabTitle].stopFlashing": ()=>{
                    if (flashingIntervalRef.current) {
                        clearInterval(flashingIntervalRef.current);
                        flashingIntervalRef.current = null;
                    }
                    document.title = originalTitle;
                    window.removeEventListener('focus', stopFlashing);
                    window.removeEventListener('click', stopFlashing);
                }
            }["useChatNotifications.useCallback[flashTabTitle].stopFlashing"];
            window.addEventListener('focus', stopFlashing);
            window.addEventListener('click', stopFlashing);
        }
    }["useChatNotifications.useCallback[flashTabTitle]"], []);
    const playMessageSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatNotifications.useCallback[playMessageSound]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const now = Date.now();
                if (now - (lastPlayedAtRef.current || 0) < 400) {
                    return;
                }
                if (!messageAudioRef.current) {
                    const a = new Audio(MESSAGE_SOUND_URL);
                    a.preload = 'auto';
                    messageAudioRef.current = a;
                }
                const audio = messageAudioRef.current;
                audio.currentTime = 0;
                void audio.play().catch({
                    "useChatNotifications.useCallback[playMessageSound]": ()=>{
                        try {
                            const AC = window.AudioContext || window.webkitAudioContext;
                            if (!AC) return;
                            let ctx = globalAudioContext;
                            if (!ctx) {
                                ctx = new AC();
                                globalAudioContext = ctx;
                            }
                            if (ctx.state === 'suspended') {
                                void ctx.resume();
                            }
                            const gain = ctx.createGain();
                            gain.gain.setValueAtTime(0, ctx.currentTime);
                            gain.connect(ctx.destination);
                            const osc1 = ctx.createOscillator();
                            osc1.type = 'sine';
                            osc1.frequency.setValueAtTime(820, ctx.currentTime);
                            osc1.frequency.linearRampToValueAtTime(1180, ctx.currentTime + 0.08);
                            osc1.connect(gain);
                            const osc2 = ctx.createOscillator();
                            osc2.type = 'sine';
                            osc2.frequency.setValueAtTime(620, ctx.currentTime + 0.05);
                            osc2.frequency.linearRampToValueAtTime(980, ctx.currentTime + 0.12);
                            osc2.connect(gain);
                            gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 0.02);
                            gain.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.20);
                            osc1.start(ctx.currentTime);
                            osc1.stop(ctx.currentTime + 0.18);
                            osc2.start(ctx.currentTime + 0.05);
                            try {
                                osc2.stop(ctx.currentTime + 0.23);
                            } catch  {}
                            setTimeout({
                                "useChatNotifications.useCallback[playMessageSound]": ()=>{
                                    try {
                                        osc1.disconnect();
                                        osc2.disconnect();
                                        gain.disconnect();
                                    // Do NOT close the global context, just disconnect nodes
                                    // ctx.close(); 
                                    } catch  {}
                                }
                            }["useChatNotifications.useCallback[playMessageSound]"], 260);
                        } catch  {}
                    }
                }["useChatNotifications.useCallback[playMessageSound]"]);
                lastPlayedAtRef.current = now;
            } catch  {
            // ignore
            }
        }
    }["useChatNotifications.useCallback[playMessageSound]"], []);
    const showMessageNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatNotifications.useCallback[showMessageNotification]": (msg)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!('Notification' in window)) return;
            // Nếu chưa xin quyền, xin ngay lúc nhận tin nhắn
            if (Notification.permission === 'default') {
                Notification.requestPermission().then({
                    "useChatNotifications.useCallback[showMessageNotification]": (permission)=>{
                        if (permission === 'granted') {
                            new Notification(chatName || 'Tin nhắn mới', {
                                body: msg.content || (msg.type === 'image' ? 'Đã gửi cho bạn một ảnh.' : msg.type === 'video' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(msg.fileName) ? 'Đã gửi cho bạn một video.' : msg.type === 'file' ? 'Đã gửi cho bạn một file.' : 'Bạn có tin nhắn mới.')
                            });
                        }
                    }
                }["useChatNotifications.useCallback[showMessageNotification]"]);
                return;
            }
            if (Notification.permission !== 'granted') return;
            const body = msg.content || (msg.type === 'image' ? 'Đã gửi cho bạn một ảnh.' : msg.type === 'video' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(msg.fileName) ? 'Đã gửi cho bạn một video.' : msg.type === 'file' ? 'Đã gửi cho bạn một file.' : 'Bạn có tin nhắn mới.');
            new Notification(chatName || 'Tin nhắn mới', {
                body
            });
        }
    }["useChatNotifications.useCallback[showMessageNotification]"], [
        chatName
    ]);
    // Xin quyền thông báo 1 lần khi mở cửa sổ chat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatNotifications.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!('Notification' in window)) return;
            if (Notification.permission === 'default') {
                Notification.requestPermission().catch({
                    "useChatNotifications.useEffect": ()=>{
                    // ignore
                    }
                }["useChatNotifications.useEffect"]);
            }
        }
    }["useChatNotifications.useEffect"], []);
    // Unlock WebAudio context on user interaction
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatNotifications.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const initAudio = {
                "useChatNotifications.useEffect.initAudio": ()=>{
                    // 1. Unlock HTML5 Audio (existing logic)
                    if (!messageAudioRef.current) {
                        const a = new Audio(MESSAGE_SOUND_URL);
                        a.preload = 'auto';
                        messageAudioRef.current = a;
                    }
                    const audio = messageAudioRef.current;
                    try {
                        audio.muted = true;
                        audio.currentTime = 0;
                        void audio.play().then({
                            "useChatNotifications.useEffect.initAudio": ()=>{
                                audio.pause();
                                audio.muted = false;
                                audio.currentTime = 0;
                            }
                        }["useChatNotifications.useEffect.initAudio"]).catch({
                            "useChatNotifications.useEffect.initAudio": ()=>{
                            // ignore
                            }
                        }["useChatNotifications.useEffect.initAudio"]);
                    } catch  {
                    // ignore
                    }
                    // 2. Unlock WebAudio Context (New Logic for Mobile)
                    try {
                        const AC = window.AudioContext || window.webkitAudioContext;
                        if (AC) {
                            if (!globalAudioContext) {
                                globalAudioContext = new AC();
                            }
                            const ctx = globalAudioContext;
                            if (ctx.state === 'suspended') {
                                void ctx.resume();
                            }
                            // Play a silent buffer to fully unlock iOS/Android
                            const buffer = ctx.createBuffer(1, 1, 22050);
                            const source = ctx.createBufferSource();
                            source.buffer = buffer;
                            source.connect(ctx.destination);
                            source.start(0);
                        }
                    } catch  {
                    // ignore
                    }
                }
            }["useChatNotifications.useEffect.initAudio"];
            const events = [
                'click',
                'pointerdown',
                'touchstart',
                'keydown'
            ];
            events.forEach({
                "useChatNotifications.useEffect": (ev)=>window.addEventListener(ev, initAudio, {
                        once: true
                    })
            }["useChatNotifications.useEffect"]);
            return ({
                "useChatNotifications.useEffect": ()=>{
                    events.forEach({
                        "useChatNotifications.useEffect": (ev)=>window.removeEventListener(ev, initAudio)
                    }["useChatNotifications.useEffect"]);
                }
            })["useChatNotifications.useEffect"];
        }
    }["useChatNotifications.useEffect"], []);
    return {
        playMessageSound,
        showMessageNotification,
        flashTabTitle
    };
}
_s(useChatNotifications, "VNWAGjrWB7MslUTWCFn8MUIM9bo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$menu$292f$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(menu)/menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$call$292f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(call)/IncomingCallModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$call$292f$ModalCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(call)/ModalCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$call$292f$LiveKitCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(call)/LiveKitCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLiveKitSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLiveKitSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-client] (ecmascript)");
// React Icons – Bộ hiện đại nhất 2025
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatNotifications.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
;
const LayoutBase = ({ children })=>{
    _s();
    const [isAuthed, setIsAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hideMobileFooter, setHideMobileFooter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalUnread, setTotalUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [unreadGroups, setUnreadGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [unreadContacts, setUnreadContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groupMembersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const groupInfoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const callNotifySeenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [showNewMsgBanner, setShowNewMsgBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const newMsgBannerTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [globalCallFullscreen, setGlobalCallFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const callOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const el = callOverlayRef.current;
            if (globalCallFullscreen) {
                try {
                    if (el && typeof el.requestFullscreen === 'function') {
                        void el.requestFullscreen();
                    }
                } catch  {}
            } else {
                try {
                    if (document.fullscreenElement) {
                        void document.exitFullscreen();
                    }
                } catch  {}
            }
        }
    }["LayoutBase.useEffect"], [
        globalCallFullscreen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const handler = {
                "LayoutBase.useEffect.handler": ()=>{
                    const active = !!document.fullscreenElement;
                    if (!active && globalCallFullscreen) {
                        setGlobalCallFullscreen(false);
                    }
                }
            }["LayoutBase.useEffect.handler"];
            document.addEventListener('fullscreenchange', handler);
            return ({
                "LayoutBase.useEffect": ()=>document.removeEventListener('fullscreenchange', handler)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        globalCallFullscreen
    ]);
    const { playMessageSound, flashTabTitle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatNotifications"])({});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isProfilePage = pathname === '/profile' || pathname === '/me' || pathname?.startsWith('/profile') || pathname?.startsWith('/me');
    const pathnameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            pathnameRef.current = pathname;
        }
    }["LayoutBase.useEffect"], [
        pathname
    ]);
    // Kiểm tra đăng nhập – giữ nguyên logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            let mounted = true;
            const checkAuth = {
                "LayoutBase.useEffect.checkAuth": async ()=>{
                    try {
                        const res = await fetch('/api/auth/refresh', {
                            credentials: 'include'
                        });
                        if (res.ok) {
                            const meRes = await fetch('/api/users/me', {
                                credentials: 'include'
                            });
                            const meJson = await meRes.json();
                            if (mounted) {
                                setIsAuthed(!!meJson?.success);
                                if (meJson?.success && meJson?.user) setCurrentUser(meJson.user);
                            }
                        } else {
                            const meRes = await fetch('/api/users/me', {
                                credentials: 'include'
                            });
                            const meJson = await meRes.json();
                            if (mounted) {
                                setIsAuthed(!!meJson?.success);
                                if (meJson?.success && meJson?.user) setCurrentUser(meJson.user);
                            }
                        }
                    } catch  {
                        try {
                            const raw = localStorage.getItem('info_user');
                            const u = raw ? JSON.parse(raw) : null;
                            if (mounted) {
                                setIsAuthed(!!u && !!u._id);
                                if (u && u._id) setCurrentUser(u);
                            }
                        } catch  {
                            if (mounted) setIsAuthed(false);
                        }
                    } finally{
                        if (mounted) setChecked(true);
                    }
                }
            }["LayoutBase.useEffect.checkAuth"];
            checkAuth();
            return ({
                "LayoutBase.useEffect": ()=>{
                    mounted = false;
                }
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], []);
    // Lấy current user id để dùng tính tổng unread
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const loadMe = {
                "LayoutBase.useEffect.loadMe": async ()=>{
                    try {
                        const meRes = await fetch('/api/users/me', {
                            credentials: 'include'
                        });
                        const meJson = await meRes.json();
                        const id = String(meJson?.data?._id || '').trim();
                        if (id) {
                            setCurrentUserId(id);
                            return;
                        }
                    } catch  {}
                    try {
                        const raw = localStorage.getItem('info_user');
                        const u = raw ? JSON.parse(raw) : null;
                        const id = String(u?._id || u?.username || '').trim();
                        if (id) setCurrentUserId(id);
                    } catch  {}
                }
            }["LayoutBase.useEffect.loadMe"];
            if (isAuthed && checked) loadMe();
        }
    }["LayoutBase.useEffect"], [
        isAuthed,
        checked
    ]);
    // Tính tổng tin nhắn chưa đọc
    const fetchUnreadTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LayoutBase.useCallback[fetchUnreadTotal]": async ()=>{
            if (!currentUserId) return;
            try {
                const [usersRes, groupsRes] = await Promise.all([
                    fetch('/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'read',
                            currentUserId
                        })
                    }),
                    fetch('/api/groups', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'readGroups',
                            _id: currentUserId
                        })
                    })
                ]);
                const usersJson = await usersRes.json();
                const groupsJson = await groupsRes.json();
                const users = Array.isArray(usersJson) ? usersJson : usersJson.data || [];
                const groups = Array.isArray(groupsJson) ? groupsJson : groupsJson.data || [];
                const sumUsers = users.reduce({
                    "LayoutBase.useCallback[fetchUnreadTotal].sumUsers": (acc, u)=>acc + Number(u?.unreadCount || 0)
                }["LayoutBase.useCallback[fetchUnreadTotal].sumUsers"], 0);
                const sumGroups = groups.reduce({
                    "LayoutBase.useCallback[fetchUnreadTotal].sumGroups": (acc, g)=>acc + Number(g?.unreadCount || 0)
                }["LayoutBase.useCallback[fetchUnreadTotal].sumGroups"], 0);
                setTotalUnread(sumUsers + sumGroups);
                setUnreadContacts(sumUsers);
                setUnreadGroups(sumGroups);
            } catch  {
            // bỏ qua lỗi
            }
        }
    }["LayoutBase.useCallback[fetchUnreadTotal]"], [
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            fetchUnreadTotal();
        // Polling removed in favor of socket events
        }
    }["LayoutBase.useEffect"], [
        fetchUnreadTotal
    ]);
    // Ẩn/hiện mobile footer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const handler = {
                "LayoutBase.useEffect.handler": (e)=>{
                    const evt = e;
                    setHideMobileFooter(!!evt.detail?.hidden);
                }
            }["LayoutBase.useEffect.handler"];
            window.addEventListener('mobile-footer', handler);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('mobile-footer', handler)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], []);
    // Redirect khi chưa đăng nhập hoặc khi API trả về 401
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const orig = window.fetch;
            let refreshPromise = null;
            const wrapped = {
                "LayoutBase.useEffect.wrapped": async (input, init)=>{
                    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input instanceof Request ? input.url : '';
                    let res;
                    try {
                        res = await orig(input, init);
                    } catch (err) {
                        return new Response(null, {
                            status: 502,
                            statusText: 'Network Error'
                        });
                    }
                    // Chỉ xử lý refresh token cho các API nội bộ (bắt đầu bằng /api/)
                    // và bỏ qua các request không phải API (ví dụ: socket.io, assets, external links)
                    if (!url.includes('/api/') || url.includes('/api/auth/refresh')) {
                        if (res.status === 401 && url.includes('/api/auth/refresh') && pathname !== '/login') {
                            router.push('/login');
                        }
                        return res;
                    }
                    if (res.status !== 401) return res;
                    if (!refreshPromise) {
                        refreshPromise = orig('/api/auth/refresh', {
                            credentials: 'include'
                        }).finally({
                            "LayoutBase.useEffect.wrapped": ()=>{
                                refreshPromise = null;
                            }
                        }["LayoutBase.useEffect.wrapped"]);
                    }
                    try {
                        const r = await refreshPromise;
                        if (r.ok) {
                            return await orig(input, init);
                        }
                    } catch  {}
                    if (pathname !== '/login') router.push('/login');
                    return res;
                }
            }["LayoutBase.useEffect.wrapped"];
            window.fetch = wrapped;
            return ({
                "LayoutBase.useEffect": ()=>{
                    window.fetch = orig;
                }
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        router,
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            if (checked && !isAuthed && pathname !== '/login') {
                router.push('/login');
            }
        }
    }["LayoutBase.useEffect"], [
        checked,
        isAuthed,
        pathname,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            if (!checked || !isAuthed || !currentUser) return;
            if (socketRef.current?.connected) return;
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socketRef.current = s;
            s.emit('join_user', {
                userId: String(currentUser._id)
            });
            const joinAllGroups = {
                "LayoutBase.useEffect.joinAllGroups": async ()=>{
                    try {
                        const res = await fetch('/api/groups', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'readGroups',
                                _id: String(currentUser._id)
                            })
                        });
                        const j = await res.json();
                        const arr = j?.data || [];
                        const m = new Map();
                        arr.forEach({
                            "LayoutBase.useEffect.joinAllGroups": (g)=>{
                                const gid = String(g._id);
                                const members = Array.isArray(g.members) ? g.members : [];
                                m.set(gid, members);
                                groupInfoRef.current.set(gid, {
                                    name: g.name,
                                    avatar: g.avatar
                                });
                                s.emit('join_room', gid);
                            }
                        }["LayoutBase.useEffect.joinAllGroups"]);
                        groupMembersRef.current = m;
                    } catch  {}
                }
            }["LayoutBase.useEffect.joinAllGroups"];
            void joinAllGroups();
            s.on('connect', {
                "LayoutBase.useEffect": ()=>{
                    void joinAllGroups();
                }
            }["LayoutBase.useEffect"]);
            s.on('update_sidebar', {
                "LayoutBase.useEffect": (data)=>{
                    // const p = pathnameRef.current;
                    // const isChatPage = p === '/' || p === '/home' || p?.startsWith('/chat');
                    if (data.sender === String(currentUser._id)) return;
                    const soundEnabled = currentUser?.notifications?.soundEnabled !== false;
                    if (soundEnabled) {
                        playMessageSound();
                    }
                    flashTabTitle();
                    const isMsgType = data.type === 'text' || data.type === 'image' || data.type === 'file' || data.type === 'sticker' || data.type === 'video' || data.type === 'notify';
                    if (isMsgType) {
                        // Update unread count when new message arrives
                        fetchUnreadTotal();
                        setShowNewMsgBanner(true);
                        if (newMsgBannerTimerRef.current) {
                            window.clearTimeout(newMsgBannerTimerRef.current);
                            newMsgBannerTimerRef.current = null;
                        }
                        newMsgBannerTimerRef.current = window.setTimeout({
                            "LayoutBase.useEffect": ()=>{
                                setShowNewMsgBanner(false);
                                newMsgBannerTimerRef.current = null;
                            }
                        }["LayoutBase.useEffect"], 5000);
                    }
                    if (data.type === 'notify' && typeof data.content === 'string') {
                        const rid = String(data.roomId || '');
                        if (rid && data.content.toLowerCase().includes('cuộc gọi nhóm đã kết thúc')) {
                            const prev = new Map(activeGroupCallRooms);
                            if (prev.has(rid)) {
                                prev.set(rid, {
                                    active: false,
                                    type: prev.get(rid)?.type || null,
                                    participants: [],
                                    startAt: null
                                });
                                setActiveGroupCallRooms(prev);
                                const activeRooms = Array.from(prev.entries()).filter({
                                    "LayoutBase.useEffect.activeRooms": ([, v])=>v.active
                                }["LayoutBase.useEffect.activeRooms"]).map({
                                    "LayoutBase.useEffect.activeRooms": ([k])=>k
                                }["LayoutBase.useEffect.activeRooms"]);
                                try {
                                    localStorage.setItem('ACTIVE_GROUP_CALL_ROOMS', JSON.stringify(activeRooms));
                                } catch  {}
                                const ev2 = new CustomEvent('activeGroupCallsUpdated', {
                                    detail: {
                                        rooms: activeRooms
                                    }
                                });
                                window.dispatchEvent(ev2);
                            }
                        }
                    }
                }
            }["LayoutBase.useEffect"]);
            s.on('call_state', {
                "LayoutBase.useEffect": (payload)=>{
                    try {
                        const rid = String(payload.roomId || '');
                        if (!rid) return;
                        const prevEntry = activeGroupCallRoomsRef.current.get(rid) || {
                            active: false,
                            type: null,
                            participants: [],
                            startAt: null
                        };
                        const wasActive = !!prevEntry.active;
                        const prevParticipants = Array.isArray(prevEntry.participants) ? prevEntry.participants.map({
                            "LayoutBase.useEffect": (x)=>String(x)
                        }["LayoutBase.useEffect"]) : [];
                        const nowActive = !!payload.active;
                        const nowParticipants = Array.isArray(payload.participants) ? payload.participants.map({
                            "LayoutBase.useEffect": (x)=>String(x)
                        }["LayoutBase.useEffect"]) : [];
                        const isGroupRoom = rid.split('_').filter(Boolean).length !== 2;
                        const amLast = isGroupRoom && wasActive && !nowActive && prevParticipants.length <= 1 && prevParticipants.includes(String(currentUser?._id || ''));
                        const prev = new Map(activeGroupCallRooms);
                        prev.set(rid, {
                            active: nowActive,
                            type: payload.type || null,
                            participants: nowParticipants,
                            startAt: typeof payload.startAt === 'number' ? payload.startAt : null
                        });
                        setActiveGroupCallRooms(prev);
                        const activeRooms = Array.from(prev.entries()).filter({
                            "LayoutBase.useEffect.activeRooms": ([, v])=>v.active
                        }["LayoutBase.useEffect.activeRooms"]).map({
                            "LayoutBase.useEffect.activeRooms": ([k])=>k
                        }["LayoutBase.useEffect.activeRooms"]);
                        try {
                            localStorage.setItem('ACTIVE_GROUP_CALL_ROOMS', JSON.stringify(activeRooms));
                        } catch  {}
                        const ev = new CustomEvent('activeGroupCallsUpdated', {
                            detail: {
                                rooms: activeRooms
                            }
                        });
                        window.dispatchEvent(ev);
                        if (amLast) {
                            const members = groupMembersRef.current.get(rid) || [];
                            socketRef.current?.emit('send_message', {
                                roomId: rid,
                                sender: String(currentUser?._id || ''),
                                senderName: String(currentUser?.name || 'Hệ thống'),
                                isGroup: true,
                                members,
                                type: 'notify',
                                content: 'Cuộc gọi nhóm đã kết thúc'
                            });
                        }
                    } catch  {}
                }
            }["LayoutBase.useEffect"]);
            s.on('call_end', {
                "LayoutBase.useEffect": (payload)=>{
                    try {
                        const rid = String(payload.roomId || '');
                        if (!rid) return;
                        const prevEntry = activeGroupCallRoomsRef.current.get(rid) || {
                            active: false,
                            type: null,
                            participants: [],
                            startAt: null
                        };
                        const wasActive = !!prevEntry.active;
                        const prevParticipants = Array.isArray(prevEntry.participants) ? prevEntry.participants : [];
                        const isGroupRoom = rid.split('_').filter(Boolean).length !== 2;
                        const prev = new Map(activeGroupCallRooms);
                        prev.set(rid, {
                            active: false,
                            type: prev.get(rid)?.type || null,
                            participants: [],
                            startAt: null
                        });
                        setActiveGroupCallRooms(prev);
                        const activeRooms = Array.from(prev.entries()).filter({
                            "LayoutBase.useEffect.activeRooms": ([, v])=>v.active
                        }["LayoutBase.useEffect.activeRooms"]).map({
                            "LayoutBase.useEffect.activeRooms": ([k])=>k
                        }["LayoutBase.useEffect.activeRooms"]);
                        try {
                            localStorage.setItem('ACTIVE_GROUP_CALL_ROOMS', JSON.stringify(activeRooms));
                        } catch  {}
                        const ev = new CustomEvent('activeGroupCallsUpdated', {
                            detail: {
                                rooms: activeRooms
                            }
                        });
                        window.dispatchEvent(ev);
                        const senderId = String(payload?.from || '');
                        const amLast = isGroupRoom && wasActive && prevParticipants.length <= 1 && prevParticipants.includes(String(currentUser?._id || '')) && senderId && String(currentUser?._id || '') === senderId;
                        if (amLast) {
                            const members = groupMembersRef.current.get(rid) || [];
                            socketRef.current?.emit('send_message', {
                                roomId: rid,
                                sender: String(currentUser?._id || ''),
                                senderName: String(currentUser?.name || 'Hệ thống'),
                                isGroup: true,
                                members,
                                type: 'notify',
                                content: 'Cuộc gọi nhóm đã kết thúc'
                            });
                        }
                    } catch  {}
                }
            }["LayoutBase.useEffect"]);
            ({
                "LayoutBase.useEffect": async ()=>{
                    try {
                        const res = await fetch('/api/groups', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'readGroups',
                                _id: String(currentUser?._id || '')
                            })
                        });
                        const j = await res.json();
                        const arr = j?.data || [];
                        arr.forEach({
                            "LayoutBase.useEffect": (g)=>{
                                const gid = String(g._id);
                                s.emit('join_room', gid);
                            }
                        }["LayoutBase.useEffect"]);
                    } catch  {}
                }
            })["LayoutBase.useEffect"]();
            s.on('call_notify', {
                "LayoutBase.useEffect": async ()=>{}
            }["LayoutBase.useEffect"]);
            return ({
                "LayoutBase.useEffect": ()=>{
                    try {
                        socketRef.current?.disconnect();
                    } catch  {}
                    socketRef.current = null;
                }
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        checked,
        isAuthed,
        currentUser,
        playMessageSound,
        flashTabTitle,
        fetchUnreadTotal
    ]);
    // Xác định tab active
    const isActive = (paths)=>{
        return paths.some((p)=>pathname === p || pathname?.startsWith(p + '/') || p === '/home' && (pathname === '/' || pathname?.startsWith('/chat')));
    };
    const mobileTabs = [
        {
            key: 'home',
            label: 'Tin nhắn',
            paths: [
                '/home',
                '/chat',
                '/'
            ],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChatBubbleLeftRight"]
        },
        {
            key: 'group',
            label: 'Nhóm',
            paths: [
                '/group'
            ],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiRectangleGroup"]
        },
        {
            key: 'directory',
            label: 'Danh bạ',
            paths: [
                '/directory'
            ],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserGroup"]
        },
        {
            key: 'moments',
            label: 'Tường',
            paths: [
                '/moments',
                '/timeline'
            ],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhoto"]
        },
        {
            key: 'profile',
            label: 'Cá nhân',
            paths: [
                '/profile',
                '/me'
            ],
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserCircle"]
        }
    ];
    const isWidgetIframe = pathname === '/chat-iframe' || pathname?.startsWith('/chat-iframe');
    const [globalRoomId, setGlobalRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [globalIsGroup, setGlobalIsGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalSelectedChat, setGlobalSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentViewedRoomId, setCurrentViewedRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const normalizedRoomId = String((globalRoomId || currentViewedRoomId || '').trim());
    const normalizedIsGroup = !!globalIsGroup;
    const { callActive, callType, callConnecting, incomingCall, startCall, acceptIncomingCall, endCall, callStartAt, counterpartId, activeRoomId, livekitToken, livekitUrl, roomCallActive, roomCallType, roomParticipants, setIncomingCall, joinActiveGroupCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLiveKitSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveKitSession"])({
        socketRef,
        roomId: normalizedRoomId,
        currentUserId: String(currentUser?._id || ''),
        currentUser: currentUser,
        isGroup: normalizedIsGroup,
        selectedChat: globalSelectedChat
    });
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const lastActiveRoomIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            if (activeRoomId) lastActiveRoomIdRef.current = String(activeRoomId);
        }
    }["LayoutBase.useEffect"], [
        activeRoomId
    ]);
    const lastCallStartAtRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            lastCallStartAtRef.current = typeof callStartAt === 'number' ? callStartAt : null;
        }
    }["LayoutBase.useEffect"], [
        callStartAt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            try {
                const raw = localStorage.getItem('CURRENT_ROOM_ID');
                setCurrentViewedRoomId(String(raw || ''));
            } catch  {}
            const handler = {
                "LayoutBase.useEffect.handler": (e)=>{
                    const d = e.detail;
                    if (!d) return;
                    setCurrentViewedRoomId(String(d.roomId || ''));
                }
            }["LayoutBase.useEffect.handler"];
            window.addEventListener('currentRoomChanged', handler);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('currentRoomChanged', handler)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const isChatPage = pathname === '/' || pathname === '/home' || pathname?.startsWith('/chat');
            if (!isChatPage) return;
            if (!currentViewedRoomId) return;
            if (incomingCall || callActive || callConnecting) return;
            if (String(globalRoomId) === String(currentViewedRoomId)) return;
            setGlobalRoomId(String(currentViewedRoomId));
            const parts = String(currentViewedRoomId).split('_').filter(Boolean);
            setGlobalIsGroup(parts.length !== 2);
        }
    }["LayoutBase.useEffect"], [
        currentViewedRoomId,
        pathname,
        globalRoomId,
        incomingCall,
        callActive,
        callConnecting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            if (!incomingCall) return;
            const rid = String(incomingCall.roomId || '');
            if (!rid) return;
            const parts = rid.split('_').filter(Boolean);
            const isG = parts.length !== 2;
            setGlobalRoomId(rid);
            setGlobalIsGroup(isG);
            if (isG) {
                const info = groupInfoRef.current.get(rid);
                const applyInfo = {
                    "LayoutBase.useEffect.applyInfo": (inf)=>{
                        if (inf) {
                            setRemoteName(String(inf.name || ''));
                            setRemoteAvatar(inf.avatar ? String(inf.avatar) : undefined);
                        }
                    }
                }["LayoutBase.useEffect.applyInfo"];
                if (info) {
                    applyInfo(info);
                } else {
                    ({
                        "LayoutBase.useEffect": async ()=>{
                            try {
                                const res = await fetch('/api/groups', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        action: 'readGroups',
                                        _id: String(currentUser?._id || '')
                                    })
                                });
                                const j = await res.json();
                                const arr = j?.data || [];
                                const m = new Map();
                                arr.forEach({
                                    "LayoutBase.useEffect": (g)=>{
                                        const gid = String(g._id);
                                        const members = Array.isArray(g.members) ? g.members : [];
                                        m.set(gid, members);
                                        groupInfoRef.current.set(gid, {
                                            name: g.name,
                                            avatar: g.avatar
                                        });
                                    }
                                }["LayoutBase.useEffect"]);
                                groupMembersRef.current = m;
                                applyInfo(groupInfoRef.current.get(rid));
                            } catch  {
                            // ignore
                            }
                        }
                    })["LayoutBase.useEffect"]();
                }
            }
        }
    }["LayoutBase.useEffect"], [
        incomingCall
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            try {
                const flag = incomingCall ? '1' : '';
                if (flag) localStorage.setItem('GLOBAL_INCOMING_CALL', flag);
                else localStorage.removeItem('GLOBAL_INCOMING_CALL');
                const activeFlag = callActive ? '1' : '';
                const connectingFlag = callConnecting ? '1' : '';
                if (activeFlag) localStorage.setItem('GLOBAL_CALL_ACTIVE', activeFlag);
                else localStorage.removeItem('GLOBAL_CALL_ACTIVE');
                if (connectingFlag) localStorage.setItem('GLOBAL_CALL_CONNECTING', connectingFlag);
                else localStorage.removeItem('GLOBAL_CALL_CONNECTING');
                const ev = new CustomEvent('globalCallStatusChanged', {
                    detail: {
                        active: !!callActive,
                        connecting: !!callConnecting,
                        incoming: !!incomingCall
                    }
                });
                window.dispatchEvent(ev);
            } catch  {}
        }
    }["LayoutBase.useEffect"], [
        incomingCall,
        callActive,
        callConnecting
    ]);
    const [globalCallPos, setGlobalCallPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 24,
        y: 24
    });
    const [globalCallSize, setGlobalCallSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        w: 560
    });
    const [globalCallMin, setGlobalCallMin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const globalPrevSizeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [globalCallHidden, setGlobalCallHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalIsDesktop, setGlobalIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remoteName, setRemoteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [remoteAvatar, setRemoteAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [callDurationSec, setCallDurationSec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeGroupCallRooms, setActiveGroupCallRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const activeGroupCallRoomsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            activeGroupCallRoomsRef.current = new Map(activeGroupCallRooms);
        }
    }["LayoutBase.useEffect"], [
        activeGroupCallRooms
    ]);
    const participantsZeroTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const prevParticipantsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const apply = {
                "LayoutBase.useEffect.apply": ()=>setGlobalIsDesktop(("TURBOPACK compile-time truthy", 1) ? window.innerWidth >= 768 : "TURBOPACK unreachable")
            }["LayoutBase.useEffect.apply"];
            apply();
            window.addEventListener('resize', apply);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('resize', apply)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], []);
    const [openBtnPos, setOpenBtnPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 24,
        y: 24
    });
    const openBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openBtnDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            try {
                const W = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
                const H = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
                setOpenBtnPos({
                    x: Math.max(8, W - 140),
                    y: Math.max(8, H - 80)
                });
            } catch  {}
        }
    }["LayoutBase.useEffect"], []);
    const handleOpenBtnDragStart = (e)=>{
        e.preventDefault();
        const rect = openBtnRef.current?.getBoundingClientRect();
        const bw = rect?.width ?? 140;
        const bh = rect?.height ?? 48;
        const st = {
            sx: e.clientX,
            sy: e.clientY,
            ox: openBtnPos.x,
            oy: openBtnPos.y
        };
        const onMove = (ev)=>{
            openBtnDraggingRef.current = true;
            const dx = ev.clientX - st.sx;
            const dy = ev.clientY - st.sy;
            const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - bw - 8));
            const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - bh - 8));
            setOpenBtnPos({
                x: nx,
                y: ny
            });
        };
        const onUp = ()=>{
            setTimeout(()=>openBtnDraggingRef.current = false, 0);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };
    const handleOpenBtnTouchDragStart = (e)=>{
        e.preventDefault();
        const rect = openBtnRef.current?.getBoundingClientRect();
        const bw = rect?.width ?? 140;
        const bh = rect?.height ?? 48;
        const t = e.touches[0];
        const st = {
            sx: t.clientX,
            sy: t.clientY,
            ox: openBtnPos.x,
            oy: openBtnPos.y
        };
        const onMove = (ev)=>{
            openBtnDraggingRef.current = true;
            const tt = ev.touches[0];
            const dx = tt.clientX - st.sx;
            const dy = tt.clientY - st.sy;
            const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - bw - 8));
            const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - bh - 8));
            setOpenBtnPos({
                x: nx,
                y: ny
            });
        };
        const onUp = ()=>{
            setTimeout(()=>openBtnDraggingRef.current = false, 0);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
        window.addEventListener('touchmove', onMove, {
            passive: false
        });
        window.addEventListener('touchend', onUp, {
            passive: false
        });
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LayoutBase.useEffect": ()=>{
            const minimize = {
                "LayoutBase.useEffect.minimize": ()=>{
                    setGlobalCallHidden(false);
                    globalPrevSizeRef.current = {
                        ...globalCallSize
                    };
                    const w = Math.max(280, Math.min(360, globalCallSize.w));
                    setGlobalCallSize({
                        w
                    });
                    try {
                        const W = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
                        const x = Math.max(8, W - w - 16);
                        setGlobalCallPos({
                            x,
                            y: 16
                        });
                    } catch  {}
                    setGlobalCallMin(true);
                }
            }["LayoutBase.useEffect.minimize"];
            window.addEventListener('minimizeCallOverlay', minimize);
            return ({
                "LayoutBase.useEffect": ()=>{
                    window.removeEventListener('minimizeCallOverlay', minimize);
                }
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        globalCallSize.w
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LayoutBase.useEffect": ()=>{
            const hide = {
                "LayoutBase.useEffect.hide": ()=>{
                    setGlobalCallMin(false);
                    setGlobalCallHidden(true);
                }
            }["LayoutBase.useEffect.hide"];
            window.addEventListener('hideCallOverlay', hide);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('hideCallOverlay', hide)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const rid = String(normalizedRoomId || '');
            if (!rid) return;
            if (!normalizedIsGroup) return;
            const nowActive = !!callActive || !!roomCallActive;
            const prev = new Map(activeGroupCallRooms);
            const prevEntry = prev.get(rid) || {
                active: false,
                type: null,
                participants: [],
                startAt: null
            };
            const parts = Array.isArray(roomParticipants) ? roomParticipants.map({
                "LayoutBase.useEffect": (x)=>String(x)
            }["LayoutBase.useEffect"]) : [];
            const nextParts = parts.length > 0 ? parts : nowActive ? [
                String(currentUser?._id || '')
            ] : [];
            const nextType = callType || prevEntry.type || null;
            const nextStartAt = typeof callStartAt === 'number' ? callStartAt : prevEntry.startAt;
            const changed = prevEntry.active !== nowActive || String(prevEntry.type || '') !== String(nextType || '') || (prevEntry.startAt || null) !== (nextStartAt || null);
            if (changed) {
                prev.set(rid, {
                    active: nowActive,
                    type: nextType,
                    participants: nextParts,
                    startAt: nextStartAt || null
                });
                setActiveGroupCallRooms(prev);
                const activeRooms = Array.from(prev.entries()).filter({
                    "LayoutBase.useEffect.activeRooms": ([, v])=>v.active
                }["LayoutBase.useEffect.activeRooms"]).map({
                    "LayoutBase.useEffect.activeRooms": ([k])=>k
                }["LayoutBase.useEffect.activeRooms"]);
                try {
                    localStorage.setItem('ACTIVE_GROUP_CALL_ROOMS', JSON.stringify(activeRooms));
                } catch  {}
                const ev = new CustomEvent('activeGroupCallsUpdated', {
                    detail: {
                        rooms: activeRooms
                    }
                });
                window.dispatchEvent(ev);
            }
        }
    }["LayoutBase.useEffect"], [
        callActive,
        roomCallActive,
        normalizedIsGroup,
        normalizedRoomId,
        callType,
        roomParticipants,
        callStartAt,
        activeGroupCallRooms,
        currentUser
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LayoutBase.useEffect": ()=>{
            const handler = {
                "LayoutBase.useEffect.handler": (e)=>{
                    const d = e.detail;
                    const rid = String(d?.roomId || '');
                    if (!rid) return;
                    setGlobalRoomId(rid);
                    setGlobalIsGroup(true);
                    void joinActiveGroupCall();
                }
            }["LayoutBase.useEffect.handler"];
            window.addEventListener('joinActiveGroupCallRequest', handler);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('joinActiveGroupCallRequest', handler)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        joinActiveGroupCall
    ]);
    const handleGlobalDragStart = (e)=>{
        const state = {
            startX: e.clientX,
            startY: e.clientY,
            originX: globalCallPos.x,
            originY: globalCallPos.y
        };
        const onMove = (ev)=>{
            const dx = ev.clientX - state.startX;
            const dy = ev.clientY - state.startY;
            const x = state.originX + dx;
            const y = state.originY + dy;
            const maxX = Math.max(8, window.innerWidth - (globalCallSize.w + 24));
            const maxY = Math.max(8, window.innerHeight - (320 + 24));
            setGlobalCallPos({
                x: Math.min(Math.max(8, x), maxX),
                y: Math.min(Math.max(8, y), maxY)
            });
        };
        const onUp = ()=>{
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };
    const handleGlobalTouchDragStart = (e)=>{
        e.preventDefault();
        const t = e.touches[0];
        const state = {
            startX: t.clientX,
            startY: t.clientY,
            originX: globalCallPos.x,
            originY: globalCallPos.y
        };
        const onMove = (ev)=>{
            const tt = ev.touches[0];
            const dx = tt.clientX - state.startX;
            const dy = tt.clientY - state.startY;
            const x = state.originX + dx;
            const y = state.originY + dy;
            const maxX = Math.max(8, window.innerWidth - (globalCallSize.w + 24));
            const maxY = Math.max(8, window.innerHeight - (320 + 24));
            setGlobalCallPos({
                x: Math.min(Math.max(8, x), maxX),
                y: Math.min(Math.max(8, y), maxY)
            });
        };
        const onUp = ()=>{
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
        window.addEventListener('touchmove', onMove, {
            passive: false
        });
        window.addEventListener('touchend', onUp, {
            passive: false
        });
    };
    const handleResizeStart = (e)=>{
        const startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const originW = globalCallSize.w;
        const onMove = (ev)=>{
            const clientX = 'touches' in ev ? ev.touches[0].clientX : ev.clientX;
            const dx = clientX - startX;
            const nextW = Math.min(Math.max(280, originW + dx), Math.floor(window.innerWidth * 0.9));
            setGlobalCallSize({
                w: nextW
            });
        };
        const onUp = ()=>{
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        window.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onUp);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            try {
                const isDesktop = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth >= 1024;
                if (isDesktop) {
                    const w = Math.floor(window.innerWidth * 0.5);
                    setGlobalCallSize({
                        w: Math.max(560, w)
                    });
                }
            } catch  {}
        }
    }["LayoutBase.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const ridCandidate = String(activeRoomId || '') || normalizedRoomId || String(incomingCall?.roomId || '') || String(globalRoomId || '');
            const isGroupByRid = ridCandidate.split('_').filter(Boolean).length !== 2;
            if (isGroupByRid) {
                const info = ridCandidate ? groupInfoRef.current.get(String(ridCandidate)) : undefined;
                if (info) {
                    setRemoteName(String(info.name || ''));
                    setRemoteAvatar(info.avatar ? String(info.avatar) : undefined);
                    return;
                }
                const gname = String(globalSelectedChat?.name || '').trim();
                const gavatar = globalSelectedChat?.avatar ? String(globalSelectedChat.avatar) : undefined;
                setRemoteName(gname || '');
                setRemoteAvatar(gavatar);
                return;
            }
            const id = ({
                "LayoutBase.useEffect.id": ()=>{
                    if (counterpartId) return String(counterpartId);
                    if (incomingCall?.from) return String(incomingCall.from);
                    if (globalSelectedChat?._id) return String(globalSelectedChat._id);
                    return '';
                }
            })["LayoutBase.useEffect.id"]();
            if (globalSelectedChat?._id && String(globalSelectedChat._id) === String(id)) {
                setRemoteName(String(globalSelectedChat?.name || ''));
                setRemoteAvatar(globalSelectedChat?.avatar ? String(globalSelectedChat?.avatar) : undefined);
            } else {
                setRemoteName('');
                setRemoteAvatar(undefined);
            }
            if (!id) {
                setRemoteName('');
                setRemoteAvatar(undefined);
                return;
            }
            const run = {
                "LayoutBase.useEffect.run": async ()=>{
                    try {
                        const res = await fetch('/api/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'getById',
                                _id: String(id)
                            })
                        });
                        const json = await res.json();
                        const row = json?.row || json?.user || json;
                        setRemoteName(String(row?.name || ''));
                        setRemoteAvatar(row?.avatar ? String(row.avatar) : undefined);
                    } catch  {
                        setRemoteName('');
                        setRemoteAvatar(undefined);
                    }
                }
            }["LayoutBase.useEffect.run"];
            void run();
        }
    }["LayoutBase.useEffect"], [
        counterpartId,
        incomingCall,
        globalSelectedChat,
        globalIsGroup,
        activeRoomId,
        normalizedRoomId,
        globalRoomId
    ]);
    const callTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            if (callTimerRef.current) {
                window.clearInterval(callTimerRef.current);
                callTimerRef.current = null;
            }
            if (!callActive || !callStartAt) {
                setCallDurationSec(0);
                return;
            }
            setCallDurationSec(0);
            callTimerRef.current = window.setInterval({
                "LayoutBase.useEffect": ()=>{
                    setCallDurationSec(Math.max(0, Math.floor((Date.now() - Number(callStartAt)) / 1000)));
                }
            }["LayoutBase.useEffect"], 1000);
            return ({
                "LayoutBase.useEffect": ()=>{
                    if (callTimerRef.current) {
                        window.clearInterval(callTimerRef.current);
                        callTimerRef.current = null;
                    }
                }
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        callActive,
        callStartAt
    ]);
    const sendCallNotify = async (status)=>{
        try {
            const rid = String(activeRoomId || lastActiveRoomIdRef.current || normalizedRoomId || currentViewedRoomId || '');
            if (!rid || !currentUser?._id) return;
            const parts = rid.split('_').filter(Boolean);
            const isOneToOneRoom = parts.length === 2;
            if (status === 'ended') {
                const keyStart = typeof lastCallStartAtRef.current === 'number' && lastCallStartAtRef.current > 0 ? String(lastCallStartAtRef.current) : typeof callStartAt === 'number' && callStartAt > 0 ? String(callStartAt) : 'unknown';
                const key = `${rid}:${keyStart}`;
                const bag = sendCallNotify.endedSentBag || new Set();
                sendCallNotify.endedSentBag = bag;
                if (bag.has(key)) return;
                bag.add(key);
            }
            const computedDurationSec = status === 'ended' ? (()=>{
                const startAt = typeof lastCallStartAtRef.current === 'number' && lastCallStartAtRef.current > 0 ? lastCallStartAtRef.current : typeof callStartAt === 'number' && callStartAt > 0 ? callStartAt : undefined;
                if (typeof startAt === 'number' && startAt > 0) return Math.max(0, Math.floor((Date.now() - Number(startAt)) / 1000));
                return Math.max(0, Math.floor(callDurationSec));
            })() : Math.max(0, Math.floor(callDurationSec));
            const content = (()=>{
                if (isOneToOneRoom) {
                    if (status !== 'ended') return '';
                    const kind = callType === 'video' ? 'video' : 'thoại';
                    const dir = outgoingRef.current ? 'đi' : 'đến';
                    const m2 = Math.floor(computedDurationSec / 60);
                    const ss = computedDurationSec % 60;
                    return `Cuộc gọi ${kind} ${dir} – ${m2} phút ${ss} giây`;
                }
                return '';
            })();
            if (!content) return;
            const tsNow = Date.now();
            const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId: rid,
                type: 'notify',
                sender: String(currentUser._id),
                content,
                timestamp: tsNow,
                callerId: String(currentUser._id),
                calleeId: String(counterpartId || ''),
                callType: callType || 'voice',
                callStatus: status === 'ended' ? 'answered' : status,
                callDurationSec: computedDurationSec,
                callStartedAt: typeof callStartAt === 'number' ? callStartAt : undefined,
                callEndedAt: tsNow
            });
            if (notifyRes?.success && typeof notifyRes._id === 'string') {
                const parts2 = rid.split('_').filter(Boolean);
                const isOneToOne = parts2.length === 2;
                const isGroup = !isOneToOne;
                const receiver = isOneToOne ? parts2[0] === String(currentUser._id) ? parts2[1] : parts2[0] : null;
                const members = isGroup ? groupMembersRef.current.get(rid) || [] : [];
                socketRef.current?.emit('send_message', {
                    roomId: rid,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members,
                    _id: notifyRes._id,
                    type: 'notify',
                    content,
                    timestamp: tsNow,
                    callerId: String(currentUser._id),
                    calleeId: String(counterpartId || ''),
                    callType: callType || 'voice',
                    callStatus: status === 'ended' ? 'answered' : status,
                    callDurationSec: computedDurationSec
                });
            }
        } catch  {}
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const handler = {
                "LayoutBase.useEffect.handler": (e)=>{
                    try {
                        if (callActive || incomingCall || callConnecting) {
                            toast({
                                type: 'warning',
                                message: 'Người này đang có cuộc gọi'
                            });
                            return;
                        }
                        const d = e.detail || {};
                        const isG = !!d?.isGroup;
                        const t = isG ? 'video' : d?.type === 'video' ? 'video' : 'voice';
                        const rid = String(d?.roomId || '');
                        const sel = d?.selectedChat;
                        setGlobalRoomId(rid);
                        setGlobalIsGroup(isG);
                        const norm = ({
                            "LayoutBase.useEffect.handler.norm": ()=>{
                                if (!sel) return isG ? {
                                    _id: '',
                                    members: []
                                } : {
                                    _id: ''
                                };
                                const _id = String(sel._id || '');
                                if (isG) {
                                    const members = Array.isArray(sel.members) ? sel.members.map({
                                        "LayoutBase.useEffect.handler.norm": (m)=>typeof m === 'object' ? {
                                                _id: String(m._id)
                                            } : String(m)
                                    }["LayoutBase.useEffect.handler.norm"]) : [];
                                    return {
                                        _id,
                                        members,
                                        name: sel.name,
                                        avatar: sel.avatar
                                    };
                                }
                                return {
                                    _id,
                                    name: sel.name,
                                    avatar: sel.avatar
                                };
                            }
                        })["LayoutBase.useEffect.handler.norm"]();
                        setGlobalSelectedChat(norm);
                        if (sel?.name) setRemoteName(String(sel.name));
                        else setRemoteName('');
                        if (sel?.avatar) setRemoteAvatar(String(sel.avatar));
                        else setRemoteAvatar(undefined);
                        setCallDurationSec(0);
                        outgoingRef.current = true;
                        const overrideTargetId = !isG && norm && typeof norm._id === 'string' && norm._id ? String(norm._id) : undefined;
                        void startCall(t, overrideTargetId);
                    } catch  {}
                }
            }["LayoutBase.useEffect.handler"];
            window.addEventListener('startCall', handler);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('startCall', handler)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        startCall,
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const handler = {
                "LayoutBase.useEffect.handler": (e)=>{
                    // Show toast
                    toast({
                        type: 'warning',
                        message: 'Người này đang có cuộc gọi'
                    });
                    // End call
                    endCall('local');
                }
            }["LayoutBase.useEffect.handler"];
            window.addEventListener('callBusy', handler);
            return ({
                "LayoutBase.useEffect": ()=>window.removeEventListener('callBusy', handler)
            })["LayoutBase.useEffect"];
        }
    }["LayoutBase.useEffect"], [
        endCall
    ]);
    const outgoingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const prevCallActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const endedSentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutBase.useEffect": ()=>{
            const prev = prevCallActiveRef.current;
            if (prev && !callActive && !endedSentRef.current && outgoingRef.current) {
                endedSentRef.current = true;
                void sendCallNotify('ended');
            }
            prevCallActiveRef.current = callActive;
            if (callActive) {
                endedSentRef.current = false;
                prevParticipantsRef.current = null;
            }
        }
    }["LayoutBase.useEffect"], [
        callActive
    ]);
    // Bỏ lưu trạng thái call theo room trong localStorage cho 1-1
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden",
        children: [
            isAuthed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$menu$292f$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    totalUnread: totalUnread,
                    unreadGroups: unreadGroups,
                    unreadContacts: unreadContacts
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/layout.tsx",
                    lineNumber: 1120,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/layout.tsx",
                lineNumber: 1119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isAuthed && checked && isProfilePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/3 flex items-center justify-center p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute "
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/layout.tsx",
                        lineNumber: 1127,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSparkles"], {
                                            className: "w-16 h-16 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/layout.tsx",
                                            lineNumber: 1132,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4",
                                        children: "Hupuna"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1134,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-700 mb-10 leading-relaxed",
                                        children: "Chào mừng bạn đến với thế hệ chat mới"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1137,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push('/login'),
                                                className: "w-full cursor-pointer py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserCircle"], {
                                                        className: "w-7 h-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/layout.tsx",
                                                        lineNumber: 1144,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Đăng nhập ngay"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push('/login?mode=register'),
                                                className: "w-full cursor-pointer py-5 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSparkles"], {
                                                        className: "w-7 h-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/layout.tsx",
                                                        lineNumber: 1152,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Tạo tài khoản mới"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-8 text-sm text-gray-500",
                                        children: "Bắt đầu hành trình kết nối không giới hạn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1157,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/layout.tsx",
                                lineNumber: 1130,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/layout.tsx",
                            lineNumber: 1129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/layout.tsx",
                        lineNumber: 1128,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/layout.tsx",
                lineNumber: 1126,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `flex-1 overflow-hidden ${isAuthed && !(hideMobileFooter || isWidgetIframe) ? 'pb-20 md:pb-0' : ''}`,
                children: [
                    showNewMsgBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-3 left-1/2 -translate-x-1/2 z-[200] pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white shadow-xl animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold",
                                    children: "Bạn có tin nhắn mới"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/layout.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewMsgBanner(false),
                                    className: "ml-2 text-white/80 hover:text-white",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/layout.tsx",
                                    lineNumber: 1172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/layout.tsx",
                            lineNumber: 1170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/layout.tsx",
                        lineNumber: 1169,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/layout.tsx",
                lineNumber: 1165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isAuthed && checked && currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (incomingCall || callConnecting || callActive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: globalCallHidden && (callType === 'video' || callType === 'voice') ? openBtnRef : callOverlayRef,
                    className: `fixed z-[2000] ${globalCallHidden && (callType === 'video' || callType === 'voice') ? 'rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/20 bg-black cursor-move' : globalCallFullscreen ? 'inset-0 w-screen h-screen' : globalIsDesktop ? '' : globalCallMin ? '' : 'inset-0 w-full h-full'}`,
                    style: globalCallHidden ? callType === 'video' ? {
                        left: openBtnPos.x,
                        top: openBtnPos.y,
                        width: 240,
                        height: 160,
                        display: 'block'
                    } : {
                        left: openBtnPos.x,
                        top: openBtnPos.y,
                        width: 200,
                        height: 80,
                        display: 'block'
                    } : globalCallFullscreen ? {
                        display: 'block'
                    } : globalIsDesktop ? {
                        left: globalCallPos.x,
                        top: globalCallPos.y,
                        width: globalCallSize.w,
                        display: 'block'
                    } : globalCallMin ? {
                        left: globalCallPos.x,
                        top: globalCallPos.y,
                        width: globalCallSize.w,
                        height: callType === 'video' ? 180 : 200,
                        display: 'block'
                    } : {
                        display: 'block'
                    },
                    onClick: !globalIsDesktop && globalCallMin && !globalCallHidden ? ()=>{
                        const prev = globalPrevSizeRef.current;
                        if (prev) setGlobalCallSize(prev);
                        setGlobalCallMin(false);
                    } : undefined,
                    onMouseDown: globalCallHidden && (callType === 'video' || callType === 'voice') ? handleOpenBtnDragStart : !globalIsDesktop && globalCallMin ? handleGlobalDragStart : undefined,
                    onTouchStart: globalCallHidden && (callType === 'video' || callType === 'voice') ? handleOpenBtnTouchDragStart : !globalIsDesktop && globalCallMin ? handleGlobalTouchDragStart : undefined,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute h-auto ${globalCallHidden && (callType === 'video' || callType === 'voice') ? 'inset-0 w-full h-full p-0 rounded-xl overflow-hidden' : globalCallMin ? '' : globalCallFullscreen ? 'inset-0 w-full h-full' : globalIsDesktop ? 'w-full md:w-[44rem] lg:w-[50rem] h-[23rem]' : 'inset-0 w-full h-full'} ${globalCallHidden && (callType === 'video' || callType === 'voice') ? 'bg-black' : 'md:rounded-xl rounded-none p-0 shadow-2xl ring-1 ring-black/10 bg-white/5 backdrop-blur'}`,
                        children: [
                            !globalCallHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:flex hidden items-center justify-between px-3 py-2 bg-black/70 text-white rounded-t-xl select-none",
                                onMouseDown: globalCallFullscreen ? undefined : handleGlobalDragStart,
                                onTouchStart: globalCallFullscreen ? undefined : handleGlobalTouchDragStart,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: callActive ? remoteName || groupInfoRef.current.get(String(normalizedRoomId || globalRoomId || ''))?.name || 'Đang gọi' : incomingCall ? (()=>{
                                            const gname = globalIsGroup ? groupInfoRef.current.get(String(incomingCall?.roomId || globalRoomId || normalizedRoomId || ''))?.name : undefined;
                                            return `Cuộc gọi từ ${gname || remoteName || 'Cuộc gọi đến'}`;
                                        })() : 'Đang kết nối...'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1277,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs flex items-center",
                                        children: [
                                            callType === 'video' ? 'Video' : 'Thoại',
                                            callActive && callDurationSec > 0 ? ` • ${Math.floor(callDurationSec / 60).toString().padStart(2, '0')}:${(callDurationSec % 60).toString().padStart(2, '0')}` : '',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ml-3 p-1 rounded hover:bg-white/20 cursor-pointer transition-colors",
                                                onClick: ()=>setGlobalCallFullscreen((v)=>!v),
                                                title: globalCallFullscreen ? 'Thu nhỏ' : 'Phóng to',
                                                children: globalCallFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowsPointingIn"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/layout.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowsPointingOut"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/layout.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1300,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ml-2 p-1 rounded hover:bg-white/20 cursor-pointer transition-colors",
                                                onClick: ()=>setGlobalCallHidden(true),
                                                title: "Ẩn cửa sổ gọi",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMinus"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/layout.tsx",
                                                    lineNumber: 1316,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1311,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ml-2 p-1 rounded bg-red-600 hover:bg-red-500 text-white cursor-pointer transition-colors",
                                                onClick: ()=>endCall('local'),
                                                title: "Kết thúc cuộc gọi",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiXMark"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/layout.tsx",
                                                    lineNumber: 1323,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1318,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1293,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/layout.tsx",
                                lineNumber: 1272,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${globalCallHidden && (callType === 'video' || callType === 'voice') ? 'w-full h-full bg-black' : globalCallMin ? 'rounded-lg overflow-hidden bg-black' : globalIsDesktop ? 'md:rounded-b-xl rounded-none md:pt-2 md:p-2 p-0 relative bg-black/20' : `rounded-none p-0 h-full ${callType === 'voice' ? 'bg-blue-500' : 'bg-black'}`}`,
                                children: [
                                    globalCallHidden && (callType === 'video' || callType === 'voice') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1 right-1 z-[2100] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1 rounded bg-white/20 hover:bg-white/30 text-white cursor-pointer transition-colors",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    if (openBtnDraggingRef.current) return;
                                                    setGlobalCallHidden(false);
                                                },
                                                title: "Mở cửa sổ cuộc gọi",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowsPointingOut"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/layout.tsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1334,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1 rounded bg-red-600 hover:bg-red-500 text-white cursor-pointer transition-colors",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    if (openBtnDraggingRef.current) return;
                                                    endCall('local');
                                                },
                                                title: "Kết thúc cuộc gọi",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiXMark"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/layout.tsx",
                                                    lineNumber: 1356,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1346,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    incomingCall && !callActive && !callConnecting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$call$292f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        avatar: (globalIsGroup ? groupInfoRef.current.get(String(incomingCall?.roomId || globalRoomId || normalizedRoomId || ''))?.avatar || remoteAvatar : remoteAvatar) || '/logo/avata.webp',
                                        name: (globalIsGroup ? groupInfoRef.current.get(String(incomingCall?.roomId || globalRoomId || normalizedRoomId || ''))?.name || remoteName : remoteName) || 'Cuộc gọi đến',
                                        callType: incomingCall.type,
                                        onAccept: async ()=>{
                                            outgoingRef.current = false;
                                            await acceptIncomingCall();
                                        },
                                        onReject: ()=>{
                                            socketRef.current?.emit('call_reject', {
                                                roomId: String(incomingCall.roomId),
                                                targets: [
                                                    String(incomingCall.from)
                                                ]
                                            });
                                            try {
                                                setIncomingCall(null);
                                            } catch  {}
                                            void sendCallNotify('rejected');
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1362,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !incomingCall && callConnecting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$call$292f$ModalCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        avatar: remoteAvatar || '/logo/avata.webp',
                                        name: remoteName || 'Đang kết nối...',
                                        mode: "connecting",
                                        callType: callType === 'video' ? 'video' : 'voice',
                                        onEndCall: ()=>{
                                            endCall('local');
                                            void sendCallNotify('timeout');
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1395,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    callActive && livekitToken && livekitUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$call$292f$LiveKitCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        serverUrl: livekitUrl,
                                        token: livekitToken,
                                        onDisconnected: ()=>{
                                            endCall('remote');
                                        },
                                        onRequestEnd: ()=>{
                                            endCall('local');
                                        },
                                        onParticipantsChanged: (parts)=>{
                                            try {
                                                const prev = prevParticipantsRef.current;
                                                if (prev !== null) {
                                                    const currentIds = new Set(parts.map((p)=>p.id));
                                                    const prevIds = new Set(prev.map((p)=>p.id));
                                                    parts.forEach((p)=>{
                                                        if (!prevIds.has(p.id)) {
                                                            toast({
                                                                type: 'info',
                                                                message: `${p.name || 'Ai đó'} đã tham gia cuộc gọi`
                                                            });
                                                        }
                                                    });
                                                    prev.forEach((p)=>{
                                                        if (!currentIds.has(p.id)) {
                                                            toast({
                                                                type: 'info',
                                                                message: `${p.name || 'Ai đó'} đã rời cuộc gọi`
                                                            });
                                                        }
                                                    });
                                                }
                                                prevParticipantsRef.current = parts;
                                                if (participantsZeroTimerRef.current) {
                                                    window.clearTimeout(participantsZeroTimerRef.current);
                                                    participantsZeroTimerRef.current = null;
                                                }
                                                const isDirect = !!counterpartId;
                                                const isVideo = callType === 'video';
                                                const remoteCount = Array.isArray(parts) ? parts.length : 0;
                                                if (isDirect && isVideo && remoteCount === 0) {
                                                    participantsZeroTimerRef.current = window.setTimeout(()=>{
                                                        endCall('local');
                                                    }, 800);
                                                }
                                                if (!isDirect && isVideo) {
                                                    const total = remoteCount + 1;
                                                    if (total > 20) {
                                                        toast({
                                                            type: 'warning',
                                                            message: 'Cuộc gọi nhóm đã đủ 20 người (tối đa 20)'
                                                        });
                                                        endCall('local');
                                                    }
                                                }
                                            } catch  {}
                                        },
                                        className: `${globalCallHidden && callType === 'video' ? 'w-full h-full' : globalCallMin ? '' : globalIsDesktop ? 'md:rounded-xl rounded-none overflow-hidden min-h-[46vh] md:min-h-[20rem] md:max-h-[100vh]' : 'rounded-none overflow-hidden h-full min-h-[46vh]'}`,
                                        titleName: remoteName || '',
                                        callStartAt: callStartAt,
                                        avatarUrl: remoteAvatar || '/logo/avata.webp',
                                        myName: currentUser.name,
                                        myAvatarUrl: currentUser.avatar,
                                        callMode: callType === 'video' ? 'video' : 'voice',
                                        localPreviewSize: globalCallMin ? {
                                            w: Math.max(120, Math.min(160, Math.floor(globalCallSize.w / 3))),
                                            h: 90
                                        } : {
                                            w: Math.max(240, Math.min(300, Math.floor(globalCallSize.w / 2))),
                                            h: 160
                                        },
                                        offMinHeight: globalCallHidden && (callType === 'video' || callType === 'voice') ? 120 : 320,
                                        uiVariant: globalCallHidden && (callType === 'video' || callType === 'voice') ? 'mini' : 'full'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !incomingCall && !callActive && !callConnecting && normalizedIsGroup && roomCallActive && !(roomParticipants || []).includes(String(currentUser?._id || '')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-3 right-3 z-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-3 py-1 rounded-full bg-green-600 text-white text-xs shadow cursor-pointer hover:bg-green-700",
                                            onClick: ()=>{
                                                const cur = Array.isArray(roomParticipants) ? roomParticipants.length : 0;
                                                if (cur >= 20) {
                                                    toast({
                                                        type: 'warning',
                                                        message: 'Cuộc gọi nhóm đã đủ 20 người (tối đa 20)'
                                                    });
                                                    return;
                                                }
                                                void joinActiveGroupCall();
                                            },
                                            title: "Tham gia cuộc gọi nhóm",
                                            children: "Tham gia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/layout.tsx",
                                            lineNumber: 1478,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1477,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !globalCallFullscreen && !globalCallHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1 right-1 w-4 h-4 cursor-se-resize bg-white/30 hover:bg-white/50 rounded-sm",
                                        onMouseDown: handleResizeStart,
                                        onTouchStart: handleResizeStart
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1495,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/layout.tsx",
                                lineNumber: 1328,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/layout.tsx",
                        lineNumber: 1258,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/layout.tsx",
                    lineNumber: 1185,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false),
            !callActive && !callConnecting && normalizedIsGroup && roomCallActive && String(currentViewedRoomId || '') === String(normalizedRoomId || '') && !(roomParticipants || []).includes(String(currentUser?._id || '')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 bottom-25 right-4 md:bottom-30 md:right-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 py-2 rounded-full bg-green-600 text-white shadow cursor-pointer hover:bg-green-700",
                    onClick: ()=>{
                        const cur = Array.isArray(roomParticipants) ? roomParticipants.length : 0;
                        if (cur >= 20) {
                            toast({
                                type: 'warning',
                                message: 'Cuộc gọi nhóm đã đủ 20 người (tối đa 20)'
                            });
                            return;
                        }
                        void joinActiveGroupCall();
                    },
                    title: "Tham gia lại cuộc gọi nhóm",
                    children: "Tham gia cuộc gọi"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/layout.tsx",
                    lineNumber: 1517,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/layout.tsx",
                lineNumber: 1516,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            isAuthed && !(hideMobileFooter || isWidgetIframe) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-0 left-0 right-0 z-[100] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative pointer-events-auto bg-white border-t border-gray-200 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: mobileTabs.map((tab)=>{
                            const active = isActive(tab.paths);
                            const Icon = tab.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (tab.key === 'profile') {
                                        try {
                                            const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('info_user') : "TURBOPACK unreachable";
                                            const u = raw ? JSON.parse(raw) : null;
                                            const id = String(u?.['username'] || u?.['_id'] || '').trim();
                                            router.push(id ? `/profile/${id}` : '/profile');
                                        } catch  {
                                            router.push('/profile');
                                        }
                                    } else {
                                        router.push(tab.paths[0]);
                                    }
                                },
                                className: "cursor-pointer flex-1 py-3 flex flex-col items-center gap-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `w-6 h-6 ${active ? 'text-indigo-600' : 'text-gray-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1563,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            tab.key === 'home' && totalUnread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-2 -right-3 min-w-[1.5rem] px-1.5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center",
                                                children: totalUnread > 99 ? '99+' : totalUnread
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1565,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            tab.key === 'group' && unreadGroups > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-2 -right-3 min-w-[1.5rem] px-1.5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center",
                                                children: unreadGroups > 99 ? '99+' : unreadGroups
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1570,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            tab.key === 'directory' && unreadContacts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-2 -right-3 min-w-[1.5rem] px-1.5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center",
                                                children: unreadContacts > 99 ? '99+' : unreadContacts
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/layout.tsx",
                                                lineNumber: 1575,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1562,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs font-medium ${active ? 'text-indigo-600' : 'text-gray-500'}`,
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1581,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 w-10 h-0.5 bg-indigo-600 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/layout.tsx",
                                        lineNumber: 1585,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.key, true, {
                                fileName: "[project]/src/components/layout/layout.tsx",
                                lineNumber: 1544,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/layout.tsx",
                        lineNumber: 1538,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/layout.tsx",
                    lineNumber: 1537,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/layout.tsx",
                lineNumber: 1536,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/layout.tsx",
        lineNumber: 1116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LayoutBase, "n/TGXdHPg+1fP2E3oTmu45kxo9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatNotifications"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLiveKitSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveKitSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = LayoutBase;
const __TURBOPACK__default__export__ = LayoutBase;
var _c;
__turbopack_context__.k.register(_c, "LayoutBase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(zalo)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZaloLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/layout.tsx [app-client] (ecmascript)");
'use client';
;
;
function ZaloLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/(zalo)/layout.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = ZaloLayout;
var _c;
__turbopack_context__.k.register(_c, "ZaloLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d4cb4ec6._.js.map