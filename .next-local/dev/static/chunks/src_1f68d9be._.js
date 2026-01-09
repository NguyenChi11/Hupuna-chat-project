(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/dateUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTimeAgo",
    ()=>formatTimeAgo
]);
const formatTimeAgo = (timestamp)=>{
    if (!timestamp) return '';
    const now = Date.now();
    const diff = now - timestamp;
    // Quy đổi ra giây, phút, giờ, ngày
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) {
        return 'Vừa xong';
    } else if (minutes < 60) {
        return `${minutes} phút`;
    } else if (hours < 24) {
        return `${hours} giờ`;
    } else if (days < 7) {
        return `${days} ngày`;
    } else {
        // Nếu quá 7 ngày thì hiện ngày tháng (VD: 20/11)
        const date = new Date(timestamp);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/getFbEmojiUrl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEmojiUrl",
    ()=>getEmojiUrl
]);
function getEmojiUrl(unicode) {
    return `https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/72x72/${unicode}.png`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/uploadHelper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Upload file sử dụng XMLHttpRequest để theo dõi tiến trình (Progress)
 * @param url Đường dẫn API (ví dụ: /api/upload)
 * @param formData Dữ liệu form chứa file
 * @param onProgress Callback nhận % hoàn thành (0 -> 100)
 */ __turbopack_context__.s([
    "uploadFileWithProgress",
    ()=>uploadFileWithProgress
]);
const uploadFileWithProgress = (url, formData, onProgress)=>{
    return new Promise((resolve)=>{
        const xhr = new XMLHttpRequest();
        // 1. Lắng nghe sự kiện tiến trình upload (quan trọng nhất)
        xhr.upload.onprogress = (event)=>{
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total * 100;
                onProgress(percentComplete); // Gọi callback để cập nhật UI
            }
        };
        // 2. Mở kết nối POST
        xhr.open('POST', url);
        // 3. Xử lý khi hoàn tất
        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    // Parse kết quả trả về từ server (JSON)
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } catch  {
                    resolve({
                        success: false,
                        message: 'Phản hồi từ server không phải JSON hợp lệ'
                    });
                }
            } else {
                try {
                    const parsed = JSON.parse(xhr.responseText);
                    const msg = typeof parsed?.message === 'string' && parsed.message.trim() ? parsed.message : xhr.statusText || `Upload thất bại (${xhr.status})`;
                    resolve({
                        success: false,
                        message: msg
                    });
                } catch  {
                    const msg = xhr.statusText || `Upload thất bại (${xhr.status})`;
                    resolve({
                        success: false,
                        message: msg
                    });
                }
            }
        };
        // 4. Xử lý lỗi mạng
        xhr.onerror = ()=>{
            resolve({
                success: false,
                message: 'Lỗi mạng (Network Error)'
            });
        };
        // 5. Gửi dữ liệu đi
        xhr.send(formData);
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/chatInput.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertTextAtCursor",
    ()=>insertTextAtCursor
]);
const insertTextAtCursor = (editable, text)=>{
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
        editable.appendChild(document.createTextNode(text));
        return;
    }
    const range = selection.getRangeAt(0);
    // Đảm bảo range nằm bên trong editable
    let current = range.commonAncestorContainer;
    let isInside = false;
    while(current){
        if (current === editable) {
            isInside = true;
            break;
        }
        current = current.parentNode;
    }
    if (!isInside) {
        editable.appendChild(document.createTextNode(text));
        return;
    }
    range.deleteContents();
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    // Di chuyển caret sau emoji vừa chèn
    range.setStartAfter(textNode);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/chatMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "groupMessagesByDate",
    ()=>groupMessagesByDate
]);
const groupMessagesByDate = (msgs)=>{
    const groups = new Map();
    const seen = new Set();
    msgs.forEach((msg)=>{
        const id = String(msg._id);
        if (seen.has(id)) return;
        seen.add(id);
        const ts = Number(msg.serverTimestamp ?? msg.timestamp) || 0;
        const dateKey = new Date(ts).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        if (!groups.has(dateKey)) {
            groups.set(dateKey, []);
        }
        groups.get(dateKey).push(msg);
    });
    const safeNum = (t)=>{
        const n = Number(t);
        return Number.isFinite(n) ? n : 0;
    };
    const cmp = (a, b)=>{
        const ta = safeNum(a.serverTimestamp ?? a.timestamp);
        const tb = safeNum(b.serverTimestamp ?? b.timestamp);
        if (ta !== tb) return ta - tb;
        const ia = String(a._id || '');
        const ib = String(b._id || '');
        if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
        if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
        return ia.localeCompare(ib);
    };
    Array.from(groups.values()).forEach((arr)=>arr.sort(cmp));
    return groups;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ChatContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatProvider",
    ()=>ChatProvider,
    "useChatContext",
    ()=>useChatContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ChatProvider = ({ value, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ChatContext.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ChatProvider;
const useChatContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
};
_s(useChatContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ChatProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/fbEmojis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FB_EMOJIS",
    ()=>FB_EMOJIS
]);
const FB_EMOJIS = [
    '1f600',
    '1f601',
    '1f602',
    '1f603',
    '1f604',
    '1f606',
    '1f607',
    '1f609',
    '1f60a',
    '1f60b',
    '1f60d',
    '1f60e',
    '1f60f',
    '1f612',
    '1f613',
    '1f614',
    '1f616',
    '1f618',
    '1f61a',
    '1f61c',
    '1f61d',
    '1f61e',
    '1f620',
    '1f621',
    '1f622',
    '1f623',
    '1f624',
    '1f625',
    '1f626',
    '1f627',
    '1f628',
    '1f629',
    '1f62a',
    '1f62b',
    '1f62d',
    '1f630',
    '1f631',
    '1f632',
    '1f633',
    '1f634',
    '1f635',
    '1f636',
    '1f637',
    '1f641',
    '1f642',
    '1f643',
    '1f644',
    '1f910',
    '1f911',
    '1f912',
    '1f914',
    '1f917',
    '1f920',
    '1f921',
    '1f922',
    '1f923',
    '1f924',
    '1f925',
    '1f927',
    '1f928',
    '1f929',
    '1f92a',
    '1f92b',
    '1f92c',
    '1f92d',
    '1f92e',
    '1f92f',
    '1f970',
    '1f973',
    '1f974',
    '1f975',
    '1f976',
    '1f978',
    '1f979',
    '1f97a',
    '1f9d0',
    '2764',
    '1f49b',
    '1f49a',
    '1f499',
    '1f49c',
    '1f90e',
    '1f5a4',
    '1f44d',
    '1f44f',
    '1f64f',
    '1f44e',
    '1f448',
    '1f449',
    '1f64c',
    '270a',
    '270c',
    '1f64b',
    '1f91d',
    '1f44a',
    '1f680'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/dataBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "banners",
    ()=>banners
]);
const banners = [
    {
        image: '/imgs/banner1.png',
        title: 'Giao diện Dark Mode',
        description: 'Thư giãn và bảo vệ mắt với chế độ giao diện tối mới trên Zalo',
        buttonText: 'Thử ngay'
    },
    {
        image: '/imgs/banner2.png',
        title: 'Kinh doanh hiệu quả với zBusiness Pro',
        description: 'Bán hàng chuyên nghiệp với Nhân Business và Bộ công cụ kinh doanh, mở khoá tầm năng tiếp cận khách hàng trên Zalo',
        buttonText: 'Tìm hiểu ngay'
    },
    {
        image: '/imgs/banner3.png',
        title: 'Nhắn tin nhiều hơn ,soạn thảo ít hơn',
        description: 'Sử dụng Tin Nhắn Nhanh để lưu sẵn các tin nhắn thường dùng và gửi nhanh trong hội thoại bất kỳ'
    },
    {
        image: '/imgs/banner4.png',
        title: 'Trải nghiệm xuyên suốt',
        description: 'Kết nối và giải quyết công việc trên mọi thiết bị dữ liệu luôn được đồng bộ'
    },
    {
        image: '/imgs/banner5.png',
        title: 'Gửi File nặng?',
        description: 'Đã có Zalo "xử" hết '
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/uploadStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/uploadStore.ts
// 👇 KHAI BÁO KIỂU CHO GLOBAL
__turbopack_context__.s([
    "clearProgress",
    ()=>clearProgress,
    "getProgress",
    ()=>getProgress,
    "setProgress",
    ()=>setProgress
]);
// Khởi tạo nếu chưa có
globalThis.uploadProgressMap = globalThis.uploadProgressMap || new Map();
const setProgress = (id, percent)=>{
    if (globalThis.uploadProgressMap) {
        globalThis.uploadProgressMap.set(id, percent);
    }
};
const getProgress = (id)=>{
    const map = globalThis.uploadProgressMap;
    if (!map) return -1;
    return map.has(id) ? map.get(id) ?? 0 : -1;
};
const clearProgress = (id)=>{
    globalThis.uploadProgressMap?.delete(id);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/onesignal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUserTags",
    ()=>addUserTags,
    "ensureSubscribed",
    ()=>ensureSubscribed,
    "getUserId",
    ()=>getUserId,
    "initOneSignal",
    ()=>initOneSignal,
    "loginOneSignal",
    ()=>loginOneSignal,
    "subscribeNotification",
    ()=>subscribeNotification,
    "waitForOneSignalReady",
    ()=>waitForOneSignalReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-onesignal/dist/index.js [app-client] (ecmascript)");
;
let __inited = false;
async function initOneSignal() {
    if (__inited) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
        appId: String(("TURBOPACK compile-time value", "12119819-aca3-4965-86fe-633ab89cd21a") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ONESIGNAL_APP_ID || '').trim(),
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
            enable: true,
            prenotify: false,
            showCredit: false,
            text: {
                'tip.state.unsubscribed': 'Subscribe to notifications',
                'tip.state.subscribed': "You're subscribed to notifications",
                'tip.state.blocked': 'You have blocked notifications',
                'message.prenotify': 'Click to subscribe to notifications',
                'message.action.subscribing': 'Subscribing...',
                'message.action.subscribed': 'Thanks for subscribing!',
                'message.action.resubscribed': 'You are subscribed to notifications',
                'message.action.unsubscribed': 'You will not receive notifications',
                'dialog.main.title': 'Manage Site Notifications',
                'dialog.main.button.subscribe': 'SUBSCRIBE',
                'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
                'dialog.blocked.title': 'Unblock Notifications',
                'dialog.blocked.message': 'Follow these instructions to allow notifications:'
            }
        },
        enable: true,
        serviceWorkerPath: '/OneSignalSDKWorker.js',
        serviceWorkerUpdaterPath: '/OneSignalSDKUpdaterWorker.js'
    });
    __inited = true;
}
async function subscribeNotification() {
    const permission = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Notifications.requestPermission();
    return permission;
}
async function getUserId() {
    const userId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
    return userId;
}
async function addUserTags(tags) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.addTags(tags);
}
async function loginOneSignal(externalId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].login(externalId);
    } catch  {}
}
async function ensureSubscribed() {
    try {
        const id = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
        if (id) return id;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Notifications.requestPermission();
        for(let i = 0; i < 5; i++){
            const cur = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
            if (cur) return cur;
            await new Promise((r)=>setTimeout(r, 800));
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
    } catch  {
        return null;
    }
}
async function waitForOneSignalReady() {
    const max = 30;
    for(let i = 0; i < max; i++){
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.OneSignal) return;
        await new Promise((r)=>setTimeout(r, 200));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1f68d9be._.js.map