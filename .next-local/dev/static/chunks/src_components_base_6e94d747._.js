(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/base/ChatItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
// React Icons – Bộ hiện đại nhất 2025
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
function ChatItem({ item, isGroup, selectedChat, onSelectChat, onChatAction, currentUserId, categoryTags = [], userTags = [], onOpenTagManager }) {
    _s();
    const CATEGORY_TAGS = categoryTags;
    const USER_TAGS = userTags;
    const isSelected = selectedChat?._id === item._id;
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const longPressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const longPressTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            setImgError(false);
        }
    }["ChatItem.useEffect"], [
        item.avatar
    ]);
    const unreadCount = item.unreadCount || 0;
    const isPinned = !!item.isPinned;
    const isHidden = !!item.isHidden;
    const [chatCategories, setChatCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const storageKey = `chatCategories:${String(currentUserId)}:${String(item._id)}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            try {
                const fromServer = item.categories || item.categoriesBy?.[String(currentUserId)] || [];
                if (Array.isArray(fromServer) && fromServer.length > 0) {
                    setChatCategories(fromServer.filter({
                        "ChatItem.useEffect": (x)=>typeof x === 'string'
                    }["ChatItem.useEffect"]));
                } else {
                    const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(storageKey) : "TURBOPACK unreachable";
                    if (raw) {
                        const arr = JSON.parse(raw);
                        if (Array.isArray(arr)) setChatCategories(arr.filter({
                            "ChatItem.useEffect": (x)=>typeof x === 'string'
                        }["ChatItem.useEffect"]));
                    }
                }
            } catch  {}
        }
    }["ChatItem.useEffect"], [
        currentUserId,
        item,
        storageKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            const handler = {
                "ChatItem.useEffect.handler": (ev)=>{
                    try {
                        const anyEv = ev;
                        const detail = anyEv.detail || {};
                        if (String(detail.userId) !== String(currentUserId)) return;
                        if (String(detail.roomId) !== String(item._id)) return;
                        const arr = Array.isArray(detail.categories) ? detail.categories.filter({
                            "ChatItem.useEffect.handler": (x)=>typeof x === 'string'
                        }["ChatItem.useEffect.handler"]) : [];
                        setChatCategories(arr);
                        try {
                            localStorage.setItem(storageKey, JSON.stringify(arr));
                        } catch  {}
                    } catch  {}
                }
            }["ChatItem.useEffect.handler"];
            window.addEventListener('chatCategoriesUpdated', handler);
            return ({
                "ChatItem.useEffect": ()=>{
                    window.removeEventListener('chatCategoriesUpdated', handler);
                }
            })["ChatItem.useEffect"];
        }
    }["ChatItem.useEffect"], [
        currentUserId,
        item._id,
        storageKey
    ]);
    const [chatTags, setChatTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const storageKeyTags = `chatTags:${String(currentUserId)}:${String(item._id)}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            try {
                const fromServer = item.tags || item.tagsBy?.[String(currentUserId)] || [];
                if (Array.isArray(fromServer) && fromServer.length > 0) {
                    setChatTags(fromServer.filter({
                        "ChatItem.useEffect": (x)=>typeof x === 'string'
                    }["ChatItem.useEffect"]));
                } else {
                    const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(storageKeyTags) : "TURBOPACK unreachable";
                    if (raw) {
                        const arr = JSON.parse(raw);
                        if (Array.isArray(arr)) setChatTags(arr.filter({
                            "ChatItem.useEffect": (x)=>typeof x === 'string'
                        }["ChatItem.useEffect"]));
                    }
                }
            } catch  {}
        }
    }["ChatItem.useEffect"], [
        currentUserId,
        item,
        storageKeyTags
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            const handler = {
                "ChatItem.useEffect.handler": (ev)=>{
                    try {
                        const anyEv = ev;
                        const detail = anyEv.detail || {};
                        if (String(detail.userId) !== String(currentUserId)) return;
                        if (String(detail.roomId) !== String(item._id)) return;
                        const arr = Array.isArray(detail.tags) ? detail.tags.filter({
                            "ChatItem.useEffect.handler": (x)=>typeof x === 'string'
                        }["ChatItem.useEffect.handler"]) : [];
                        setChatTags(arr);
                        try {
                            localStorage.setItem(storageKeyTags, JSON.stringify(arr));
                        } catch  {}
                    } catch  {}
                }
            }["ChatItem.useEffect.handler"];
            window.addEventListener('chatTagsUpdated', handler);
            return ({
                "ChatItem.useEffect": ()=>{
                    window.removeEventListener('chatTagsUpdated', handler);
                }
            })["ChatItem.useEffect"];
        }
    }["ChatItem.useEffect"], [
        currentUserId,
        item._id,
        storageKeyTags
    ]);
    const toggleTag = (id)=>{
        setChatTags((prev)=>{
            const next = prev.includes(id) ? prev.filter((x)=>x !== id) : [
                ...prev,
                id
            ];
            try {
                localStorage.setItem(storageKeyTags, JSON.stringify(next));
            } catch  {}
            const isGroupChat = isGroup;
            const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
            const payload = isGroupChat ? {
                action: 'updateTags',
                _id: String(currentUserId),
                conversationId: String(item._id),
                data: {
                    tags: next
                }
            } : {
                action: 'updateTags',
                currentUserId: String(currentUserId),
                roomId: String(item._id),
                data: {
                    tags: next
                }
            };
            try {
                fetch(apiRoute, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }).catch(()=>{});
            } catch  {}
            return next;
        });
    };
    const [activeGroupCall, setActiveGroupCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            if (!isGroup) {
                setActiveGroupCall(false);
                return;
            }
            try {
                const raw = localStorage.getItem('ACTIVE_GROUP_CALL_ROOMS');
                const arr = raw ? JSON.parse(raw) : [];
                const has = Array.isArray(arr) && arr.map(String).includes(String(item._id));
                setActiveGroupCall(!!has);
            } catch  {
                setActiveGroupCall(false);
            }
            const handler = {
                "ChatItem.useEffect.handler": (e)=>{
                    const d = e.detail || {};
                    const rooms = Array.isArray(d.rooms) ? d.rooms.map(String) : [];
                    const has = rooms.includes(String(item._id));
                    setActiveGroupCall(!!has);
                }
            }["ChatItem.useEffect.handler"];
            window.addEventListener('activeGroupCallsUpdated', handler);
            return ({
                "ChatItem.useEffect": ()=>window.removeEventListener('activeGroupCallsUpdated', handler)
            })["ChatItem.useEffect"];
        }
    }["ChatItem.useEffect"], [
        isGroup,
        item._id
    ]);
    const toggleCategory = (id)=>{
        setChatCategories((prev)=>{
            const next = prev.includes(id) ? [] : [
                id
            ];
            try {
                localStorage.setItem(storageKey, JSON.stringify(next));
            } catch  {}
            const isGroupChat = isGroup;
            const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
            const payload = isGroupChat ? {
                action: 'updateCategories',
                _id: String(currentUserId),
                conversationId: String(item._id),
                data: {
                    categories: next
                }
            } : {
                action: 'updateCategories',
                currentUserId: String(currentUserId),
                roomId: String(item._id),
                data: {
                    categories: next
                }
            };
            try {
                fetch(apiRoute, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }).catch(()=>{});
            } catch  {}
            return next;
        });
    };
    // Tối ưu: Gộp logic lấy tên + avatar char
    const displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ChatItem.useMemo[displayName]": ()=>{
            if (isGroup) {
                const group = item;
                if (group.name?.trim()) return group.name.trim();
                const names = group.members?.map({
                    "ChatItem.useMemo[displayName]": (m)=>m?.name
                }["ChatItem.useMemo[displayName]"]).filter(Boolean).slice(0, 3).join(', ');
                return names || 'Nhóm trống';
            }
            const user = item;
            return user.nicknames?.[currentUserId] || user.name || user.username || 'Người dùng';
        }
    }["ChatItem.useMemo[displayName]"], [
        item,
        isGroup,
        currentUserId
    ]);
    const lastMessage = item.lastMessage || (isGroup ? 'Nhóm mới tạo' : 'Bắt đầu trò chuyện');
    const timeDisplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeAgo"])(item.lastMessageAt);
    const PRESENCE_THRESHOLD_MS = 5 * 60 * 1000;
    const presenceOnline = (()=>{
        if (isGroup) return undefined;
        const u = item;
        const ls = u.lastSeen ?? null;
        if (ls != null) return Date.now() - ls <= PRESENCE_THRESHOLD_MS;
        return !!u.online;
    })();
    const sanitizeUrl = (u)=>{
        if (!u) return '';
        const s = String(u).trim();
        return s.replace(/^[('"]+/, '').replace(/[)'"]+$/, '');
    };
    const avatarSrc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ChatItem.useMemo[avatarSrc]": ()=>sanitizeUrl((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(item.avatar))
    }["ChatItem.useMemo[avatarSrc]"], [
        item.avatar
    ]);
    const resolvedAvatarSrc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ChatItem.useMemo[resolvedAvatarSrc]": ()=>{
            const s = avatarSrc;
            if (!s) return '/logo/avata.webp';
            try {
                const u = new URL(s);
                const ok = u.protocol === 'https:' && u.hostname === 'files.hupuna.vn' && u.pathname.startsWith('/api/files/') || u.protocol === 'http:' && u.hostname === '117.4.242.30' && u.port === '8090' && u.pathname.startsWith('/api/files/') || u.protocol === 'https:' && u.hostname === 'cdn.jsdelivr.net' || u.protocol === 'https:' && u.hostname === 'mega.nz' && u.pathname.startsWith('/file/');
                return ok ? s : '/logo/avata.webp';
            } catch  {
                return '/logo/avata.webp';
            }
        }
    }["ChatItem.useMemo[resolvedAvatarSrc]"], [
        avatarSrc
    ]);
    // Context menu thông minh
    const handleContextMenu = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const x = e.clientX;
        const y = e.clientY;
        const menuWidth = 240;
        const finalX = x + menuWidth > window.innerWidth ? window.innerWidth - menuWidth - 16 : x + 12;
        const isBottomHalf = y > window.innerHeight / 2;
        setMenuPosition({
            x: finalX,
            y: y,
            align: isBottomHalf ? 'bottom' : 'top'
        });
        setShowMenu(true);
    };
    const clearLongPressTimer = ()=>{
        if (longPressTimerRef.current != null) {
            clearTimeout(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
    };
    const handleTouchStart = (e)=>{
        clearLongPressTimer();
        longPressTriggeredRef.current = false;
        const t = e.touches && e.touches[0];
        const x0 = t ? t.clientX : 0;
        const y0 = t ? t.clientY : 0;
        longPressTimerRef.current = window.setTimeout(()=>{
            const menuWidth = 240;
            const finalX = x0 + menuWidth > window.innerWidth ? window.innerWidth - menuWidth - 16 : x0 + 12;
            const isBottomHalf = y0 > window.innerHeight / 2;
            setMenuPosition({
                x: finalX,
                y: y0,
                align: isBottomHalf ? 'bottom' : 'top'
            });
            setShowMenu(true);
            longPressTriggeredRef.current = true;
        }, 500);
    };
    const handleTouchEnd = (e)=>{
        const triggered = longPressTriggeredRef.current;
        clearLongPressTimer();
        if (triggered) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    const handleTouchMove = ()=>{
        clearLongPressTimer();
    };
    const handleAction = (type)=>{
        setShowMenu(false);
        onChatAction(item._id, type, type === 'pin' ? !isPinned : !isHidden, isGroup);
    };
    // Click outside để đóng menu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatItem.useEffect": ()=>{
            if (!showMenu) return;
            const close = {
                "ChatItem.useEffect.close": (e)=>{
                    if (menuRef.current && !menuRef.current.contains(e.target)) {
                        setShowMenu(false);
                    }
                }
            }["ChatItem.useEffect.close"];
            document.addEventListener('mousedown', close);
            return ({
                "ChatItem.useEffect": ()=>document.removeEventListener('mousedown', close)
            })["ChatItem.useEffect"];
        }
    }["ChatItem.useEffect"], [
        showMenu
    ]);
    const [showTagSelector, setShowTagSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tagMenuPos, setTagMenuPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTagExpanded, setIsTagExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>onSelectChat(item),
                onContextMenu: handleContextMenu,
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd,
                onTouchCancel: clearLongPressTimer,
                onTouchMove: handleTouchMove,
                className: `
          group relative mx-1 rounded-[0.25rem] transition-all duration-300 cursor-pointer
          ${isSelected ? 'bg-blue-100 shadow-xl' : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50 hover:shadow-lg'}
          ${isHidden ? 'opacity-60' : ''}
        `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 md:gap-2 py-[0.5rem] md:py-1 px-2 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `
                w-12 h-12  rounded-4xl overflow-hidden ring-2 ring-white shadow-2xl flex items-center justify-center text-white font-bold text-2xl
                ${isGroup ? 'bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500' : 'bg-gradient-to-br from-indigo-500 to-blue-600'}
              `,
                                            children: item.avatar && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: resolvedAvatarSrc,
                                                alt: displayName,
                                                width: 64,
                                                height: 64,
                                                className: "w-full h-full object-cover",
                                                onError: ()=>setImgError(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo/avata.webp",
                                                alt: displayName,
                                                width: 64,
                                                height: 64,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute bottom-0 right-0 w-3 md:w-4
               h-3 md:h-4 rounded-full border-2 md:border-3 border-white shadow-lg
                ${presenceOnline ? 'bg-green-400' : 'bg-gray-400'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-1 -right-1 p-1 bg-white rounded-2xl shadow-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserGroup"], {
                                                className: "w-4 h-4 text-purple-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 432,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-2 -left-2 p-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl animate-pulse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineMapPin"], {
                                                className: "w-4 h-4 text-white rotate-12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 439,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                chatCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: chatCategories.map((cat)=>{
                                            const found = CATEGORY_TAGS.find((c)=>c.id === cat);
                                            if (!found) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 px-1 py-0.5 rounded-full text-[10px] font-medium bg-white/80 border border-gray-200 text-gray-700 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-2 h-2 rounded-full ${found.color}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate max-w-[1.75rem]",
                                                        children: found.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 450,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/ChatItem.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 ml-1 transition-colors duration-150 border-b pb-2 border-gray-200 lg:border-b-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: `
                 text-[1rem] md:text-[1.125rem] font-medium truncate max-w-[9rem]
                  ${unreadCount > 0 ? 'text-gray-900' : 'text-gray-500'}
                `,
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500 flex items-center gap-1",
                                            children: timeDisplay
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `
                  text-[0.875rem] md:text-[1rem] truncate max-w-[12rem]
                  ${unreadCount > 0 ? 'font-semibold text-gray-800' : 'text-gray-600'}
                `,
                                                        children: item.isRecall ? 'Tin nhắn đã được thu hồi' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMessagePreview"])(lastMessage)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, this),
                                                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-6 h-6 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-600 rounded-full shadow-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-white",
                                                                children: unreadCount > 99 ? '99+' : unreadCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this),
                                            activeGroupCall && isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-green-500 text-xs rounded-md px-1.5 py-0.5 text-white inline-block mt-1",
                                                children: "Cuộc gọi đang diễn ra"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 499,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this),
                                (chatTags.length > 0 || showTagSelector) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-1 mt-2 relative z-10 w-full",
                                    children: [
                                        (isTagExpanded ? chatTags : chatTags.slice(0, 3)).map((tagId)=>{
                                            const found = USER_TAGS.find((t)=>t.id === tagId);
                                            if (!found) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-block px-1.5 py-0.5 mb-[0.25rem] text-[10px] font-bold text-white rounded-[0.125rem] shadow-sm ${found.color} whitespace-nowrap`,
                                                children: found.label
                                            }, tagId, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 513,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        !isTagExpanded && chatTags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setIsTagExpanded(true);
                                            },
                                            className: "inline-flex items-center justify-center px-1 py-0.5 mb-[0.25rem] text-[10px] bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-[0.125rem] transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisHorizontal"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 529,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 522,
                                            columnNumber: 19
                                        }, this),
                                        isTagExpanded && chatTags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setIsTagExpanded(false);
                                            },
                                            className: "inline-flex items-center justify-center px-1 py-0.5 mb-[0.25rem] text-[10px] bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-[0.125rem] transition-colors",
                                            title: "Thu gọn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronUp"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 541,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 533,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    if (showTagSelector) {
                                                        setShowTagSelector(false);
                                                    } else {
                                                        const rect = e.currentTarget.getBoundingClientRect();
                                                        const isBottomHalf = rect.bottom > window.innerHeight / 2;
                                                        setTagMenuPos({
                                                            x: rect.left,
                                                            y: isBottomHalf ? rect.top - 4 : rect.bottom + 4,
                                                            align: isBottomHalf ? 'bottom' : 'top'
                                                        });
                                                        setShowTagSelector(true);
                                                    }
                                                },
                                                className: `cursor-pointer p-0.5 rounded-[0.1  25rem] hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors ${chatTags.length > 0 ? 'opacity-0 group-hover:opacity-100' : ''} ${showTagSelector ? 'opacity-100 bg-gray-200 text-gray-600' : ''}`,
                                                title: "Thêm thẻ tag",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 545,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/ChatItem.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/ChatItem.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/base/ChatItem.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            showMenu && menuPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[9998] ",
                        onClick: ()=>setShowMenu(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/ChatItem.tsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: menuRef,
                        style: {
                            top: menuPosition.align === 'bottom' ? 'auto' : menuPosition.y,
                            bottom: menuPosition.align === 'bottom' ? window.innerHeight - menuPosition.y : 'auto',
                            left: menuPosition.x,
                            position: 'fixed'
                        },
                        className: `z-[9999] w-60 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in duration-200 ${menuPosition.align === 'bottom' ? 'slide-in-from-bottom-2' : 'slide-in-from-top-2'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAction('pin'),
                                className: "flex cursor-pointer items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors gap-3 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineMapPin"], {
                                        className: `w-5 h-5 ${isPinned ? 'text-orange-500 rotate-45' : 'text-gray-400 group-hover:text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 596,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 text-left text-gray-700 font-medium text-sm",
                                        children: isPinned ? 'Bỏ ghim' : 'Ghim lên đầu'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this),
                                    isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                        className: "w-4 h-4 text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 602,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAction('hide'),
                                className: "flex cursor-pointer items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors gap-3 group border-t border-gray-100",
                                children: [
                                    isHidden ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEye"], {
                                        className: "w-5 h-5 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 611,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                        className: "w-5 h-5 text-gray-400 group-hover:text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 613,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 text-left text-gray-700 font-medium text-sm",
                                        children: isHidden ? 'Hiện lại' : 'Ẩn trò chuyện'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this),
                                    isHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                        className: "w-4 h-4 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 618,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 text-xs text-gray-500",
                                        children: "Theo thẻ phân loại"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 621,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-30 overflow-auto custom-scrollbar",
                                        children: CATEGORY_TAGS.map((cat)=>{
                                            const checked = chatCategories.includes(cat.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleCategory(cat.id),
                                                className: "flex cursor-pointer items-center w-full px-4 py-2 hover:bg-gray-50 transition-colors gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block w-3.5 h-3.5 rounded-sm ${cat.color} border border-white`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-left text-gray-700 text-sm",
                                                        children: cat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: checked,
                                                        readOnly: true,
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, cat.id, true, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 626,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Theo thẻ tags"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowMenu(false);
                                                    setShowTagSelector(true);
                                                },
                                                className: "text-xs text-blue-600 hover:text-blue-700 font-medium",
                                                children: "+ Thêm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 640,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-30 overflow-auto custom-scrollbar",
                                        children: USER_TAGS.map((tag)=>{
                                            const checked = chatTags.includes(tag.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleTag(tag.id),
                                                className: "flex cursor-pointer items-center w-full px-4 py-2 hover:bg-gray-50 transition-colors gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block w-3.5 h-3.5 rounded-sm ${tag.color} border border-white`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-left text-gray-700 text-sm",
                                                        children: tag.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: checked,
                                                        readOnly: true,
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, tag.id, true, {
                                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                                lineNumber: 656,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 652,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                lineNumber: 639,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/ChatItem.tsx",
                        lineNumber: 579,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showTagSelector && tagMenuPos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[9998]",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setShowTagSelector(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/ChatItem.tsx",
                        lineNumber: 674,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: tagMenuPos.align === 'bottom' ? 'auto' : tagMenuPos.y,
                            bottom: tagMenuPos.align === 'bottom' ? window.innerHeight - tagMenuPos.y : 'auto',
                            left: tagMenuPos.x,
                            position: 'fixed'
                        },
                        className: "z-[9999] w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1 max-h-48 overflow-y-auto custom-scrollbar",
                                children: [
                                    USER_TAGS.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 text-center py-2",
                                        children: "Chưa có thẻ nào"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ChatItem.tsx",
                                        lineNumber: 692,
                                        columnNumber: 42
                                    }, this),
                                    USER_TAGS.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleTag(tag.id),
                                            className: "flex items-center w-full gap-2 px-2 py-1.5 hover:bg-gray-50 rounded text-left transition-colors group/item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-3 h-3 rounded-full ${tag.color} shadow-sm`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-xs font-medium text-gray-700 truncate",
                                                    children: tag.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 19
                                                }, this),
                                                chatTags.includes(tag.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                                    className: "w-3.5 h-3.5 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, tag.id, true, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 694,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                lineNumber: 691,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 p-1 bg-gray-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowTagSelector(false);
                                        onOpenTagManager?.();
                                    },
                                    className: "flex items-center justify-center w-full gap-1 px-2 py-1.5 text-xs text-blue-600 font-bold hover:bg-blue-100 rounded transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ChatItem.tsx",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this),
                                        " Quản lý thẻ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/ChatItem.tsx",
                                    lineNumber: 706,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/ChatItem.tsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/ChatItem.tsx",
                        lineNumber: 681,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
_s(ChatItem, "ua++S1lSCbPQKwQzTjDBOqR2/2Y=");
_c = ChatItem;
var _c;
__turbopack_context__.k.register(_c, "ChatItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/SidebarMobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarMobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MessageFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SidebarMobileMenu({ isOpen, onClose, filterType, setFilterType, counts, onOpenCreateGroup, onOpenGlobalFolder, buttonRef, onlyGroups = false, onlyPersonal = false }) {
    _s();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarMobileMenu.useEffect": ()=>{
            const handleClickOutside = {
                "SidebarMobileMenu.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                        onClose();
                    }
                }
            }["SidebarMobileMenu.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "SidebarMobileMenu.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["SidebarMobileMenu.useEffect"];
        }
    }["SidebarMobileMenu.useEffect"], [
        isOpen,
        onClose,
        buttonRef
    ]);
    if (!isOpen) return null;
    const filters = counts.hidden > 0 ? [
        'all',
        'group',
        'personal',
        'unread',
        'read',
        'hidden'
    ] : [
        'all',
        'group',
        'personal',
        'unread',
        'read'
    ];
    let displayedFilters = filters;
    if (onlyGroups) {
        displayedFilters = filters.filter((f)=>f !== 'personal');
    } else if (onlyPersonal) {
        displayedFilters = filters.filter((f)=>f !== 'group');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "absolute top-12 right-0 z-50 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-1 animate-in fade-in zoom-in-95 duration-200 origin-top-right",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-0.5",
            children: [
                !onlyPersonal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        onOpenCreateGroup();
                        onClose();
                    },
                    className: "w-full cursor-pointer flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-5 h-5 text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Tạo nhóm mới"
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-1 border-t border-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-semibold text-gray-400 px-4 py-2 uppercase tracking-wider",
                    children: "Bộ lọc tin nhắn"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                displayedFilters.map((filter)=>{
                    const { label, icon: Icon, color } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_CONFIG"][filter];
                    const isActive = filterType === filter;
                    const count = counts[filter];
                    // Map colors for active state
                    const activeTextClass = {
                        indigo: 'text-indigo-600',
                        blue: 'text-blue-600',
                        green: 'text-emerald-600',
                        purple: 'text-purple-600',
                        pink: 'text-pink-600',
                        gray: 'text-gray-600'
                    }[color] || 'text-gray-600';
                    const activeBgClass = {
                        indigo: 'bg-indigo-50',
                        blue: 'bg-blue-50',
                        green: 'bg-emerald-50',
                        purple: 'bg-purple-50',
                        pink: 'bg-pink-50',
                        gray: 'bg-gray-50'
                    }[color] || 'bg-gray-50';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setFilterType(filter);
                            onClose();
                        },
                        className: `
                w-full cursor-pointer flex items-center justify-between px-4 py-2.5 transition-colors text-sm
                ${isActive ? `${activeBgClass} ${activeTextClass} font-medium` : 'text-gray-600 hover:bg-gray-50'}
              `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `w-5 h-5 ${isActive ? activeTextClass : 'text-gray-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `
                  text-xs px-2 py-0.5 rounded-full font-medium
                  ${isActive ? 'bg-white/60' : 'bg-gray-100 text-gray-600'}
                `,
                                children: count > 99 ? '99+' : count
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this)
                        ]
                    }, filter, true, {
                        fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/base/SidebarMobileMenu.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(SidebarMobileMenu, "lbfKxozlpk19p2tUpYavRIkbEU0=");
_c = SidebarMobileMenu;
var _c;
__turbopack_context__.k.register(_c, "SidebarMobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "default",
    ()=>Sidebar,
    "formatMessagePreview",
    ()=>formatMessagePreview,
    "parseMentions",
    ()=>parseMentions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$ChatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/ChatItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$SearchResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/SearchResults.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$SidebarMobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/SidebarMobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
// React Icons – Bộ hiện đại nhất 2025
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$RoomSearchResultsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/RoomSearchResultsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$ComingSoonModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/ComingSoonModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$CategoryManagerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/CategoryManagerModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$TagManagerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/TagManagerModal.tsx [app-client] (ecmascript)");
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
const getChatDisplayName = (chat, currentUserId)=>{
    const maybeGroup = chat;
    const isGroupChat = maybeGroup.isGroup === true || Array.isArray(maybeGroup.members);
    if (isGroupChat) {
        return (maybeGroup.name || '').trim() || 'Nhóm';
    }
    const user = chat;
    if (currentUserId && user.nicknames?.[currentUserId]) {
        return user.nicknames[currentUserId].trim();
    }
    return (user.name || user.username || 'Người dùng').trim();
};
const formatMessagePreview = (content, maxLength = 50)=>{
    if (!content) return '';
    // 1. Strip HTML first (nếu là tin nhắn rich text)
    const plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripHtml"])(content);
    // 2. Handle mentions
    const formatted = plain.replace(/@\[([^\]]+)\]\([^)]+\)/g, '@$1');
    if (formatted.length > maxLength) {
        return formatted.slice(0, maxLength) + '...';
    }
    return formatted;
};
const parseMentions = (text)=>{
    const mentionRegex = /@\[([^\]]+)\]\(([^)]+)\)/g;
    const mentions = [];
    let match;
    while((match = mentionRegex.exec(text)) !== null){
        mentions.push(match[2]);
    }
    return {
        mentions,
        displayText: text
    };
};
function Sidebar({ currentUser, groups, allUsers, searchTerm, setSearchTerm, setShowCreateGroupModal, selectedChat, onSelectChat, onChatAction, onNavigateToMessage, styleWidget = '', onlyGroups = false, onlyPersonal = false }) {
    _s();
    const [activeExtraTab, setActiveExtraTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('calendar');
    const currentUserId = currentUser._id;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [globalSearchResults, setGlobalSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        contacts: [],
        messages: []
    });
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isWidgetIframe = pathname === '/chat-iframe' || (pathname?.startsWith('/chat-iframe') ?? false);
    const [showGlobalFolder, setShowGlobalFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMobileMenu, setShowMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileMenuButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showComingSoon, setShowComingSoon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        title: '',
        desc: ''
    });
    const [roomResultsModal, setRoomResultsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showFilterDropdown, setShowFilterDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showCategoryManager, setShowCategoryManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userCategoryTags, setUserCategoryTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser?.categoryTags || []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
                    setShowFilterDropdown(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Sidebar.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            setUserCategoryTags(currentUser?.categoryTags || []);
        }
    }["Sidebar.useEffect"], [
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            async function loadUserData() {
                if (!currentUserId) return;
                try {
                    const res = await fetch('/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'getById',
                            _id: String(currentUserId)
                        })
                    });
                    const data = await res.json();
                    const row = data && data.row || (Array.isArray(data?.data) ? data.data[0] : null);
                    if (row) {
                        const cats = row.categoryTags || [];
                        setUserCategoryTags(Array.isArray(cats) ? cats : []);
                        const tags = row.userTags || [];
                        setUserTags(Array.isArray(tags) ? tags : []);
                    }
                } catch  {}
            }
            loadUserData();
        }
    }["Sidebar.useEffect"], [
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            function handleTagsUpdated(e) {
                const ev = e;
                const detail = ev.detail;
                if (!detail) return;
                if (String(detail.userId) !== String(currentUserId)) return;
                setUserCategoryTags(Array.isArray(detail.tags) ? detail.tags : []);
            }
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('userCategoryTagsUpdated', handleTagsUpdated);
            }
            return ({
                "Sidebar.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('userCategoryTagsUpdated', handleTagsUpdated);
                    }
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], [
        currentUserId
    ]);
    const [showTagManager, setShowTagManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTags, setSelectedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showTagFilterDropdown, setShowTagFilterDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userTags, setUserTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser?.userTags || []);
    const tagFilterDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            function handleClickOutsideTag(event) {
                if (tagFilterDropdownRef.current && !tagFilterDropdownRef.current.contains(event.target)) {
                    setShowTagFilterDropdown(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutsideTag);
            return ({
                "Sidebar.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutsideTag);
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            setUserTags(currentUser?.userTags || []);
        }
    }["Sidebar.useEffect"], [
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            function handleUserTagsUpdated(e) {
                const ev = e;
                const detail = ev.detail;
                if (!detail) return;
                if (String(detail.userId) !== String(currentUserId)) return;
                setUserTags(Array.isArray(detail.tags) ? detail.tags : []);
            }
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('userTagsUpdated', handleUserTagsUpdated);
            }
            return ({
                "Sidebar.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('userTagsUpdated', handleUserTagsUpdated);
                    }
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], [
        currentUserId
    ]);
    const getItemCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[getItemCategories]": (chat)=>{
            const serverCats = chat.categories || chat.categoriesBy?.[String(currentUserId)] || [];
            if (Array.isArray(serverCats) && serverCats.length > 0) return serverCats.filter({
                "Sidebar.useCallback[getItemCategories]": (x)=>typeof x === 'string'
            }["Sidebar.useCallback[getItemCategories]"]);
            try {
                const k = `chatCategories:${String(currentUserId)}:${String(chat._id)}`;
                const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(k) : "TURBOPACK unreachable";
                if (!raw) return [];
                const arr = JSON.parse(raw);
                if (Array.isArray(arr)) return arr.filter({
                    "Sidebar.useCallback[getItemCategories]": (x)=>typeof x === 'string'
                }["Sidebar.useCallback[getItemCategories]"]);
            } catch  {}
            return [];
        }
    }["Sidebar.useCallback[getItemCategories]"], [
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            try {
                const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('__return_room_results__') : "TURBOPACK unreachable";
                if (!raw) return;
                const data = JSON.parse(raw);
                if (data && data.origin === 'sidebar') {
                    setSearchTerm((data.keyword || '').toString());
                    setRoomResultsModal({
                        roomId: data.roomId,
                        roomName: data.roomName,
                        roomAvatar: data.roomAvatar,
                        isGroupChat: !!data.isGroupChat
                    });
                    localStorage.removeItem('__return_room_results__');
                }
            } catch  {}
        }
    }["Sidebar.useEffect"], [
        selectedChat
    ]);
    // === TẤT CẢ LOGIC GIỮ NGUYÊN NHƯ BẠN ĐÃ VIẾT ===
    const handleGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[handleGlobalSearch]": async (term)=>{
            if (!term.trim() || !currentUser) {
                setGlobalSearchResults({
                    contacts: [],
                    messages: []
                });
                return;
            }
            const normalizedTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(term);
            const hasDia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasDiacritics"])(term);
            let allChats = [
                ...groups,
                ...allUsers
            ];
            if (onlyGroups) {
                allChats = [
                    ...groups
                ];
            } else if (onlyPersonal) {
                allChats = [
                    ...allUsers
                ];
            }
            const contactResults = allChats.filter({
                "Sidebar.useCallback[handleGlobalSearch].contactResults": (c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(getChatDisplayName(c, String(currentUserId)), term)
            }["Sidebar.useCallback[handleGlobalSearch].contactResults"]).map({
                "Sidebar.useCallback[handleGlobalSearch].contactResults": (c)=>({
                        item: c,
                        score: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMatchScore"])(getChatDisplayName(c, String(currentUserId)), term)
                    })
            }["Sidebar.useCallback[handleGlobalSearch].contactResults"]).sort({
                "Sidebar.useCallback[handleGlobalSearch].contactResults": (a, b)=>{
                    if (b.score !== a.score) return b.score - a.score;
                    const aName = getChatDisplayName(a.item, String(currentUserId));
                    const bName = getChatDisplayName(b.item, String(currentUserId));
                    return aName.localeCompare(bName);
                }
            }["Sidebar.useCallback[handleGlobalSearch].contactResults"]).slice(0, 10).map({
                "Sidebar.useCallback[handleGlobalSearch].contactResults": (x)=>x.item
            }["Sidebar.useCallback[handleGlobalSearch].contactResults"]);
            try {
                const res = await fetch('/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'globalSearch',
                        data: {
                            userId: currentUser._id,
                            searchTerm: term,
                            limit: 200
                        }
                    })
                });
                const messageData = await res.json();
                const rawMessages = messageData.data || [];
                let messages = rawMessages;
                if (onlyGroups) {
                    messages = rawMessages.filter({
                        "Sidebar.useCallback[handleGlobalSearch]": (m)=>m.isGroupChat
                    }["Sidebar.useCallback[handleGlobalSearch]"]);
                } else if (onlyPersonal) {
                    messages = rawMessages.filter({
                        "Sidebar.useCallback[handleGlobalSearch]": (m)=>!m.isGroupChat
                    }["Sidebar.useCallback[handleGlobalSearch]"]);
                }
                const getMessageSearchText = {
                    "Sidebar.useCallback[handleGlobalSearch].getMessageSearchText": (m)=>{
                        if (m.type === 'file') return m.fileName || 'File';
                        if (m.type === 'image') return 'Hình ảnh';
                        if (m.type === 'video') return 'Video';
                        if (m.type === 'sticker') return 'Sticker';
                        return m.content || '';
                    }
                }["Sidebar.useCallback[handleGlobalSearch].getMessageSearchText"];
                messages = messages.filter({
                    "Sidebar.useCallback[handleGlobalSearch]": (m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(getMessageSearchText(m), term)
                }["Sidebar.useCallback[handleGlobalSearch]"]);
                messages = [
                    ...messages
                ].sort({
                    "Sidebar.useCallback[handleGlobalSearch]": (a, b)=>{
                        const sa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMatchScore"])(getMessageSearchText(a), term);
                        const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMatchScore"])(getMessageSearchText(b), term);
                        if (sb !== sa) return sb - sa;
                        return (b.timestamp || 0) - (a.timestamp || 0);
                    }
                }["Sidebar.useCallback[handleGlobalSearch]"]);
                setGlobalSearchResults({
                    contacts: contactResults,
                    messages: messages
                });
            } catch (e) {
                console.error('Global search error:', e);
                setGlobalSearchResults({
                    contacts: contactResults,
                    messages: []
                });
            }
        }
    }["Sidebar.useCallback[handleGlobalSearch]"], [
        currentUser,
        groups,
        allUsers,
        onlyGroups,
        onlyPersonal,
        currentUserId
    ]);
    const handleSearchChange = (value)=>{
        setSearchTerm(value);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (!value.trim()) {
            setGlobalSearchResults({
                contacts: [],
                messages: []
            });
            setIsSearching(false);
            return;
        }
        setIsSearching(true);
        debounceRef.current = setTimeout(()=>{
            handleGlobalSearch(value);
            setIsSearching(false);
        }, 400);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (searchTerm.trim() && globalSearchResults.contacts.length === 0 && globalSearchResults.messages.length === 0) {
                setIsSearching(true);
                void ({
                    "Sidebar.useEffect": async ()=>{
                        await handleGlobalSearch(searchTerm);
                        setIsSearching(false);
                    }
                })["Sidebar.useEffect"]();
            }
        }
    }["Sidebar.useEffect"], [
        searchTerm,
        globalSearchResults.contacts.length,
        globalSearchResults.messages.length,
        handleGlobalSearch
    ]);
    const regularMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[regularMessages]": ()=>globalSearchResults.messages
    }["Sidebar.useMemo[regularMessages]"], [
        globalSearchResults.messages
    ]);
    const fileMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[fileMessages]": ()=>globalSearchResults.messages
    }["Sidebar.useMemo[fileMessages]"], [
        globalSearchResults.messages
    ]);
    const groupedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[groupedMessages]": ()=>{
            const getRoomAvatar = {
                "Sidebar.useMemo[groupedMessages].getRoomAvatar": (roomId, isGroupChat)=>{
                    if (isGroupChat) {
                        const g = groups.find({
                            "Sidebar.useMemo[groupedMessages].getRoomAvatar.g": (gr)=>String(gr._id) === String(roomId)
                        }["Sidebar.useMemo[groupedMessages].getRoomAvatar.g"]);
                        return g?.avatar;
                    }
                    const parts = String(roomId).split('_');
                    const me = String(currentUserId);
                    const partnerId = parts[0] === me ? parts[1] : parts[1] === me ? parts[0] : parts.find({
                        "Sidebar.useMemo[groupedMessages].getRoomAvatar": (p)=>p !== me
                    }["Sidebar.useMemo[groupedMessages].getRoomAvatar"]);
                    const u = allUsers.find({
                        "Sidebar.useMemo[groupedMessages].getRoomAvatar.u": (x)=>String(x._id) === String(partnerId)
                    }["Sidebar.useMemo[groupedMessages].getRoomAvatar.u"]);
                    return u?.avatar;
                }
            }["Sidebar.useMemo[groupedMessages].getRoomAvatar"];
            const map = new Map();
            regularMessages.forEach({
                "Sidebar.useMemo[groupedMessages]": (msg)=>{
                    if (!msg.roomId) return;
                    const key = msg.roomId;
                    if (!map.has(key)) {
                        map.set(key, {
                            roomId: msg.roomId,
                            roomName: msg.roomName || 'Cuộc trò chuyện',
                            isGroupChat: msg.isGroupChat || false,
                            avatar: getRoomAvatar(msg.roomId, msg.isGroupChat || false),
                            messages: [],
                            latestTimestamp: msg.timestamp || Date.now()
                        });
                    }
                    map.get(key).messages.push(msg);
                }
            }["Sidebar.useMemo[groupedMessages]"]);
            return Array.from(map.values());
        }
    }["Sidebar.useMemo[groupedMessages]"], [
        regularMessages
    ]);
    const groupedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[groupedFiles]": ()=>{
            const getRoomAvatar = {
                "Sidebar.useMemo[groupedFiles].getRoomAvatar": (roomId, isGroupChat)=>{
                    if (isGroupChat) {
                        const g = groups.find({
                            "Sidebar.useMemo[groupedFiles].getRoomAvatar.g": (gr)=>String(gr._id) === String(roomId)
                        }["Sidebar.useMemo[groupedFiles].getRoomAvatar.g"]);
                        return g?.avatar;
                    }
                    const parts = String(roomId).split('_');
                    const me = String(currentUserId);
                    const partnerId = parts[0] === me ? parts[1] : parts[1] === me ? parts[0] : parts.find({
                        "Sidebar.useMemo[groupedFiles].getRoomAvatar": (p)=>p !== me
                    }["Sidebar.useMemo[groupedFiles].getRoomAvatar"]);
                    const u = allUsers.find({
                        "Sidebar.useMemo[groupedFiles].getRoomAvatar.u": (x)=>String(x._id) === String(partnerId)
                    }["Sidebar.useMemo[groupedFiles].getRoomAvatar.u"]);
                    return u?.avatar;
                }
            }["Sidebar.useMemo[groupedFiles].getRoomAvatar"];
            const map = new Map();
            fileMessages.forEach({
                "Sidebar.useMemo[groupedFiles]": (msg)=>{
                    if (!msg.roomId) return;
                    const key = msg.roomId;
                    if (!map.has(key)) {
                        map.set(key, {
                            roomId: msg.roomId,
                            roomName: msg.roomName || 'Cuộc trò chuyện',
                            isGroupChat: msg.isGroupChat || false,
                            avatar: getRoomAvatar(msg.roomId, msg.isGroupChat || false),
                            files: [],
                            latestTimestamp: msg.timestamp || Date.now()
                        });
                    }
                    map.get(key).files.push(msg);
                }
            }["Sidebar.useMemo[groupedFiles]"]);
            return Array.from(map.values());
        }
    }["Sidebar.useMemo[groupedFiles]"], [
        fileMessages
    ]);
    const hasSearchResults = globalSearchResults.contacts.length > 0 || globalSearchResults.messages.length > 0;
    const isSearchActive = searchTerm.trim().length > 0;
    const handleSelectContact = (contact)=>{
        onSelectChat(contact);
        setSearchTerm('');
        setGlobalSearchResults({
            contacts: [],
            messages: []
        });
    };
    const mixedChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[mixedChats]": ()=>{
            if (onlyGroups) {
                return [
                    ...groups
                ];
            }
            if (onlyPersonal) {
                return [
                    ...allUsers
                ];
            }
            return [
                ...groups,
                ...allUsers
            ];
        }
    }["Sidebar.useMemo[mixedChats]"], [
        groups,
        allUsers,
        onlyGroups,
        onlyPersonal,
        currentUserId
    ]);
    const categoriesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[categoriesMap]": ()=>{
            const map = new Map();
            mixedChats.forEach({
                "Sidebar.useMemo[categoriesMap]": (c)=>{
                    map.set(String(c._id), getItemCategories(c));
                }
            }["Sidebar.useMemo[categoriesMap]"]);
            return map;
        }
    }["Sidebar.useMemo[categoriesMap]"], [
        mixedChats,
        getItemCategories
    ]);
    const filteredAndSortedChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[filteredAndSortedChats]": ()=>{
            let filtered = mixedChats.filter({
                "Sidebar.useMemo[filteredAndSortedChats].filtered": (chat)=>{
                    const isHidden = chat.isHidden;
                    const displayName = getChatDisplayName(chat, String(currentUserId));
                    const matchesSearch = isSearchActive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(displayName, searchTerm) : true;
                    if (isSearchActive) return matchesSearch;
                    if (filterType === 'hidden') return isHidden && matchesSearch;
                    return !isHidden && matchesSearch;
                }
            }["Sidebar.useMemo[filteredAndSortedChats].filtered"]);
            if (!isSearchActive) {
                if (filterType === 'group') {
                    filtered = filtered.filter({
                        "Sidebar.useMemo[filteredAndSortedChats]": (c)=>c.isGroup === true || Array.isArray(c.members)
                    }["Sidebar.useMemo[filteredAndSortedChats]"]);
                } else if (filterType === 'personal') {
                    filtered = filtered.filter({
                        "Sidebar.useMemo[filteredAndSortedChats]": (c)=>!(c.isGroup === true || Array.isArray(c.members))
                    }["Sidebar.useMemo[filteredAndSortedChats]"]);
                } else if (filterType === 'unread') {
                    filtered = filtered.filter({
                        "Sidebar.useMemo[filteredAndSortedChats]": (c)=>(c.unreadCount || 0) > 0
                    }["Sidebar.useMemo[filteredAndSortedChats]"]);
                } else if (filterType === 'read') {
                    filtered = filtered.filter({
                        "Sidebar.useMemo[filteredAndSortedChats]": (c)=>(c.unreadCount || 0) === 0
                    }["Sidebar.useMemo[filteredAndSortedChats]"]);
                }
            }
            if (!isSearchActive && filterType !== 'hidden') {
            // no-op, handled above
            }
            filtered.sort({
                "Sidebar.useMemo[filteredAndSortedChats]": (a, b)=>{
                    const timeA = a.lastMessageAt || 0;
                    const timeB = b.lastMessageAt || 0;
                    const aPinned = a.isPinned || false;
                    const bPinned = b.isPinned || false;
                    if (aPinned && !bPinned) return -1;
                    if (!aPinned && bPinned) return 1;
                    if (timeA === 0 && timeB === 0) {
                        return getChatDisplayName(a).localeCompare(getChatDisplayName(b));
                    }
                    return timeB - timeA;
                }
            }["Sidebar.useMemo[filteredAndSortedChats]"]);
            if (selectedCategories.length > 0) {
                filtered = filtered.filter({
                    "Sidebar.useMemo[filteredAndSortedChats]": (c)=>{
                        const cats = categoriesMap.get(String(c._id)) || [];
                        return cats.some({
                            "Sidebar.useMemo[filteredAndSortedChats]": (cat)=>selectedCategories.includes(cat)
                        }["Sidebar.useMemo[filteredAndSortedChats]"]);
                    }
                }["Sidebar.useMemo[filteredAndSortedChats]"]);
            }
            if (selectedTags.length > 0) {
                filtered = filtered.filter({
                    "Sidebar.useMemo[filteredAndSortedChats]": (c)=>{
                        const tags = c.tags || c.tagsBy?.[String(currentUserId)] || [];
                        // Fallback local storage
                        if (!tags || tags.length === 0) {
                            try {
                                const k = `chatTags:${String(currentUserId)}:${String(c._id)}`;
                                const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(k) : "TURBOPACK unreachable";
                                if (raw) {
                                    const arr = JSON.parse(raw);
                                    if (Array.isArray(arr)) {
                                        return arr.some({
                                            "Sidebar.useMemo[filteredAndSortedChats]": (t)=>selectedTags.includes(t)
                                        }["Sidebar.useMemo[filteredAndSortedChats]"]);
                                    }
                                }
                            } catch  {}
                        }
                        return tags.some({
                            "Sidebar.useMemo[filteredAndSortedChats]": (t)=>selectedTags.includes(t)
                        }["Sidebar.useMemo[filteredAndSortedChats]"]);
                    }
                }["Sidebar.useMemo[filteredAndSortedChats]"]);
            }
            return filtered;
        }
    }["Sidebar.useMemo[filteredAndSortedChats]"], [
        mixedChats,
        searchTerm,
        filterType,
        isSearchActive,
        selectedCategories,
        categoriesMap,
        selectedTags,
        currentUserId
    ]);
    const filterCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[filterCounts]": ()=>{
            const visible = mixedChats.filter({
                "Sidebar.useMemo[filterCounts].visible": (c)=>!c.isHidden
            }["Sidebar.useMemo[filterCounts].visible"]);
            const hidden = mixedChats.filter({
                "Sidebar.useMemo[filterCounts].hidden": (c)=>c.isHidden
            }["Sidebar.useMemo[filterCounts].hidden"]);
            const groupVisible = visible.filter({
                "Sidebar.useMemo[filterCounts].groupVisible": (c)=>c.isGroup === true || Array.isArray(c.members)
            }["Sidebar.useMemo[filterCounts].groupVisible"]);
            const personalVisible = visible.filter({
                "Sidebar.useMemo[filterCounts].personalVisible": (c)=>!(c.isGroup === true || Array.isArray(c.members))
            }["Sidebar.useMemo[filterCounts].personalVisible"]);
            return {
                all: visible.length,
                unread: visible.filter({
                    "Sidebar.useMemo[filterCounts]": (c)=>(c.unreadCount || 0) > 0
                }["Sidebar.useMemo[filterCounts]"]).length,
                read: visible.filter({
                    "Sidebar.useMemo[filterCounts]": (c)=>(c.unreadCount || 0) === 0
                }["Sidebar.useMemo[filterCounts]"]).length,
                group: groupVisible.length,
                personal: personalVisible.length,
                hidden: hidden.length
            };
        }
    }["Sidebar.useMemo[filterCounts]"], [
        mixedChats
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (filterType === 'hidden' && filterCounts.hidden === 0) {
                setFilterType('all');
            }
        }
    }["Sidebar.useEffect"], [
        filterType,
        filterCounts.hidden
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        id: "left-sidebar-container",
        className: "relative flex flex-col h-[100dvh] lg:h-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 border-r border-gray-200 w-full lg:w-[20rem] shadow-2xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-400 shadow-2xl lg:bg-white lg:shadow-none mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pb-3 pt-3 lg:px-2 lg:py-3 ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 lg:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMagnifyingGlass"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 lg:text-gray-500 pointer-events-none  transition-colors duration-300 group-focus-within:text-[#0068ff] group-focus-within:opacity-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                            lineNumber: 616,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: searchInputRef,
                                            type: "text",
                                            placeholder: "Tìm kiếm",
                                            value: searchTerm,
                                            onChange: (e)=>handleSearchChange(e.target.value),
                                            className: "w-full pl-11 pr-10 py-1 bg-transparent rounded-xl focus:outline-none focus:bg-white transition-all duration-300 text-base text-white placeholder-white/70 focus:text-gray-800 focus:placeholder-gray-500 lg:pl-10 lg:py-2 lg:bg-[#EAEDF0] lg:rounded-md lg:text-sm lg:text-gray-900 lg:placeholder-gray-500 lg:focus:ring-1 lg:focus:ring-[#0068ff]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                            lineNumber: 618,
                                            columnNumber: 15
                                        }, this),
                                        searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSearchTerm('');
                                                setGlobalSearchResults({
                                                    contacts: [],
                                                    messages: []
                                                });
                                            },
                                            className: "absolute cursor-pointer right-3 lg:right-2 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-6 lg:h-6 rounded-full bg-white/20 hover:bg-white/30 group-focus-within:bg-gray-300 group-focus-within:hover:bg-gray-400 lg:bg-transparent lg:hover:bg-gray-200 lg:group-focus-within:bg-transparent transition-all duration-300 flex items-center justify-center active:scale-95",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiXMark"], {
                                                className: "w-4 h-4 text-white group-focus-within:text-gray-600 lg:text-gray-500 transition-colors duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 636,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this),
                                !isWidgetIframe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 lg:gap-1",
                                    children: [
                                        !onlyPersonal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCreateGroupModal(true),
                                            className: "cursor-pointer w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-3xl backdrop-blur-sm lg:bg-transparent lg:hover:bg-gray-100 lg:rounded-md transition-all active:scale-95 group",
                                            title: "Tạo nhóm mới",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                    className: "w-4 h-4 text-white lg:hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:block relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserGroup"], {
                                                            className: "w-5 h-5 text-gray-600 group-hover:text-[#0068ff] transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute -top-1 -right-1 text-[10px] text-gray-600 font-bold",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                            lineNumber: 644,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    ref: mobileMenuButtonRef,
                                                    onClick: ()=>setShowMobileMenu(!showMobileMenu),
                                                    className: "cursor-pointer p-1 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-3xl backdrop-blur-sm lg:bg-transparent lg:hover:bg-gray-100 lg:rounded-md transition-all active:scale-95 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                            className: "w-5 h-5 text-white text-sm lg:hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                                            lineNumber: 666,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                            className: "hidden lg:block w-5 h-5 text-gray-600 group-hover:text-[#0068ff] transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                                            lineNumber: 668,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$SidebarMobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    isOpen: showMobileMenu,
                                                    onClose: ()=>setShowMobileMenu(false),
                                                    filterType: filterType,
                                                    setFilterType: setFilterType,
                                                    counts: filterCounts,
                                                    onOpenCreateGroup: ()=>setShowCreateGroupModal(true),
                                                    onOpenGlobalFolder: ()=>setShowGlobalFolder(true),
                                                    buttonRef: mobileMenuButtonRef,
                                                    onlyGroups: onlyGroups,
                                                    onlyPersonal: onlyPersonal
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                    lineNumber: 642,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/Sidebar.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 bg-white border-b border-gray-200 select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterType('all'),
                                        className: `relative py-3 text-sm font-medium transition-colors cursor-pointer ${filterType === 'all' || filterType === 'group' && onlyGroups || filterType === 'personal' && onlyPersonal ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`,
                                        children: [
                                            "Tất cả",
                                            (filterType === 'all' || filterType === 'group' && onlyGroups || filterType === 'personal' && onlyPersonal) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 704,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterType('unread'),
                                        className: `relative py-3 text-sm font-medium transition-colors cursor-pointer ${filterType === 'unread' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`,
                                        children: [
                                            "Chưa đọc",
                                            filterType === 'unread' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                        lineNumber: 707,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: tagFilterDropdownRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowTagFilterDropdown(!showTagFilterDropdown),
                                                className: `flex items-center gap-1 text-sm font-medium py-3 transition-colors cursor-pointer ${selectedTags.length > 0 ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`,
                                                children: [
                                                    "Tags",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronDown"], {
                                                        className: `w-4 h-4 transition-transform duration-200 ${showTagFilterDropdown ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 722,
                                                columnNumber: 15
                                            }, this),
                                            showTagFilterDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-[-5.7rem] top-full mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 pb-2 text-xs text-gray-500",
                                                        children: "Theo thẻ tags"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-64 overflow-auto custom-scrollbar",
                                                        children: userTags.map((tag)=>{
                                                            const checked = selectedTags.includes(tag.id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedTags((prev)=>checked ? prev.filter((x)=>x !== tag.id) : [
                                                                            ...prev,
                                                                            tag.id
                                                                        ]);
                                                                },
                                                                className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-block w-3.5 h-3.5 rounded-sm ${tag.color} border border-white shadow-sm`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                        lineNumber: 747,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex-1 text-left text-sm text-gray-800",
                                                                        children: tag.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                        lineNumber: 750,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: checked,
                                                                        readOnly: true,
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                        lineNumber: 751,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, tag.id, true, {
                                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                lineNumber: 740,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t mt-2 pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setShowTagManager(true);
                                                                setShowTagFilterDropdown(false);
                                                            },
                                                            className: "w-full p-1 text-sm text-[#0068ff] hover:bg-gray-50 cursor-pointer",
                                                            children: "Quản lý thẻ tags"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 734,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                        lineNumber: 721,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: filterDropdownRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilterDropdown(!showFilterDropdown),
                                                className: `flex items-center gap-1 text-sm font-medium py-3 transition-colors cursor-pointer ${selectedCategories.length > 0 ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`,
                                                children: [
                                                    "Phân loại",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronDown"], {
                                                        className: `w-4 h-4 transition-transform duration-200 ${showFilterDropdown ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 772,
                                                columnNumber: 15
                                            }, this),
                                            showFilterDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 pb-2 text-xs text-gray-500",
                                                        children: "Theo thẻ phân loại"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-64 overflow-auto",
                                                        children: userCategoryTags.map((cat)=>{
                                                            const checked = selectedCategories.includes(cat.id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedCategories((prev)=>checked ? prev.filter((x)=>x !== cat.id) : [
                                                                            ...prev,
                                                                            cat.id
                                                                        ]);
                                                                },
                                                                className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-block w-3.5 h-3.5 rounded-sm ${cat.color} border border-white shadow-sm`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex-1 text-left text-sm text-gray-800",
                                                                        children: cat.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: checked,
                                                                        readOnly: true,
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, cat.id, true, {
                                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t mt-2 pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setShowCategoryManager(true);
                                                                setShowFilterDropdown(false);
                                                            },
                                                            className: "w-full p-1  text-sm text-[#0068ff] hover:bg-gray-50 cursor-pointer",
                                                            children: "Quản lý thẻ phân loại"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/Sidebar.tsx",
                                                            lineNumber: 810,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                                        lineNumber: 809,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                                lineNumber: 785,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/Sidebar.tsx",
                                        lineNumber: 771,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 688,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this),
            onlyGroups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-around px-2 py-3 bg-white border-b border-gray-200 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowComingSoon({
                                isOpen: true,
                                title: 'Lịch nhóm',
                                desc: 'Tính năng Lịch nhóm đang được phát triển để giúp bạn quản lý thời gian hiệu quả hơn.'
                            }),
                        className: `flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 mx-1 ${activeExtraTab === 'calendar' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCalendarDays"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 843,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium leading-none",
                                children: "Lịch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 829,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowComingSoon({
                                isOpen: true,
                                title: 'Nhắc hẹn',
                                desc: 'Tính năng Nhắc hẹn sẽ sớm ra mắt để bạn không bỏ lỡ bất kỳ sự kiện quan trọng nào.'
                            }),
                        className: `flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 mx-1 ${activeExtraTab === 'reminder' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiClock"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium leading-none",
                                children: "Nhắc hẹn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 861,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowComingSoon({
                                isOpen: true,
                                title: 'Nhóm Offline',
                                desc: 'Tính năng Nhóm Offline đang được xây dựng để kết nối mọi người dễ dàng hơn.'
                            }),
                        className: `flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 mx-1 ${activeExtraTab === 'offline' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserGroup"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 877,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium leading-none",
                                children: "Nhóm Offline"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 863,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 828,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-b from-white/80 to-gray-50/80 custom-scrollbar",
                children: isSearchActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$SearchResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeTab: activeTab,
                    setActiveTab: setActiveTab,
                    isSearching: isSearching,
                    hasResults: hasSearchResults,
                    contacts: globalSearchResults.contacts,
                    groupedMessages: groupedMessages,
                    groupedFiles: groupedFiles,
                    fileMessages: fileMessages,
                    searchTerm: searchTerm,
                    onSelectContact: handleSelectContact,
                    onNavigateToMessage: (msg)=>{
                        onNavigateToMessage(msg, searchTerm);
                    // Giữ nguyên searchTerm và danh sách kết quả để không bị mất
                    },
                    currentUserId: String(currentUserId),
                    onOpenRoomResults: (rid, rname, isGroup, avatar)=>setRoomResultsModal({
                            roomId: rid,
                            roomName: rname,
                            isGroupChat: isGroup,
                            roomAvatar: avatar
                        })
                }, void 0, false, {
                    fileName: "[project]/src/components/base/Sidebar.tsx",
                    lineNumber: 886,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: filteredAndSortedChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full text-center px-8 text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 bg-gray-100 rounded-full mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChatBubbleLeftRight"], {
                                    className: "w-16 h-16 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/Sidebar.tsx",
                                    lineNumber: 911,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 910,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-medium text-gray-500",
                                children: [
                                    filterType === 'unread' && 'Không có tin nhắn chưa đọc',
                                    filterType === 'read' && 'Không có tin nhắn đã đọc',
                                    filterType === 'hidden' && 'Không có cuộc trò chuyện ẩn',
                                    filterType === 'all' && 'Bắt đầu một cuộc trò chuyện mới!'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 913,
                                columnNumber: 17
                            }, this),
                            filterType === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-2 text-gray-400",
                                children: "Nhấn vào nút tạo nhóm để bắt đầu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 919,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 909,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `space-y-1 pb-20 ${styleWidget}`,
                        children: filteredAndSortedChats.map((item)=>{
                            const isGroupItem = item.isGroup === true || Array.isArray(item.members);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$ChatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                item: item,
                                isGroup: isGroupItem,
                                selectedChat: selectedChat,
                                onSelectChat: onSelectChat,
                                onChatAction: onChatAction,
                                currentUserId: String(currentUserId),
                                categoryTags: userCategoryTags,
                                userTags: userTags,
                                onOpenTagManager: ()=>setShowTagManager(true)
                            }, item._id, false, {
                                fileName: "[project]/src/components/base/Sidebar.tsx",
                                lineNumber: 926,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/Sidebar.tsx",
                        lineNumber: 922,
                        columnNumber: 15
                    }, this)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 884,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 947,
                columnNumber: 7
            }, this),
            roomResultsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$RoomSearchResultsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!roomResultsModal,
                roomId: roomResultsModal.roomId,
                roomName: roomResultsModal.roomName,
                roomAvatar: roomResultsModal.roomAvatar,
                isGroupChat: roomResultsModal.isGroupChat,
                keyword: searchTerm,
                allUsers: allUsers,
                anchorToParent: true,
                onClose: ()=>setRoomResultsModal(null),
                onNavigateToMessage: (m, kw)=>{
                    onNavigateToMessage(m, kw);
                    setRoomResultsModal(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 950,
                columnNumber: 9
            }, this),
            showComingSoon.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$ComingSoonModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showComingSoon.isOpen,
                onClose: ()=>setShowComingSoon({
                        ...showComingSoon,
                        isOpen: false
                    }),
                title: showComingSoon.title,
                description: showComingSoon.desc
            }, void 0, false, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 967,
                columnNumber: 9
            }, this),
            showCategoryManager && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$CategoryManagerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCategoryManager,
                onClose: ()=>setShowCategoryManager(false),
                currentUserId: String(currentUserId),
                currentUser: currentUser,
                groups: groups,
                allUsers: allUsers
            }, void 0, false, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 975,
                columnNumber: 9
            }, this),
            showTagManager && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$TagManagerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showTagManager,
                onClose: ()=>setShowTagManager(false),
                currentUserId: String(currentUserId),
                currentUser: currentUser,
                groups: groups,
                allUsers: allUsers
            }, void 0, false, {
                fileName: "[project]/src/components/base/Sidebar.tsx",
                lineNumber: 985,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/Sidebar.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "pwSWfyKUkZ4m0sqH+OXQrRcOSiE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonBase",
    ()=>ButtonBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ButtonBase = ({ children, className = 'text-white bg-green-500 hover:bg-green-700', style, onClick, type = 'button', title, disabled = false, ...rest })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        title: title,
        className: `${className} flex items-center cursor-pointer justify-center gap-2 py-[0.5rem] px-[1.25rem] text-md font-medium rounded-md`,
        style: {
            ...style,
            backgroundColor: disabled ? '#CECECE' : '',
            cursor: disabled ? 'not-allowed' : ''
        },
        disabled: disabled,
        onClick: onClick,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/base/button.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ButtonBase;
var _c;
__turbopack_context__.k.register(_c, "ButtonBase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// confirmAlert.tsx
__turbopack_context__.s([
    "confirmAlert",
    ()=>confirmAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
;
function confirmAlert(options) {
    const { title = 'Xác nhận', message, okText = 'Đồng ý', cancelText = 'Hủy', onOk, onCancel } = options;
    // Lớp phủ bóng + container (giữ nguyên như cũ)
    const container = document.createElement('div');
    container.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/30';
    document.body.appendChild(container);
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoot"])(container);
    const close = ()=>{
        root.unmount();
        container.remove();
    };
    const AlertBox = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm animate-in fade-in zoom-in duration-200",
            onClick: (e)=>e.stopPropagation(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-5 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiInformationCircle"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/alert.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/alert.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/alert.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/alert.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 text-lg leading-relaxed",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/alert.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/alert.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 px-6 pb-6",
                        children: [
                            cancelText !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonBase"], {
                                onClick: ()=>{
                                    close();
                                    onCancel?.();
                                },
                                className: "flex-1 py-4 text-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiXMark"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/alert.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    cancelText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/alert.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonBase"], {
                                onClick: ()=>{
                                    close();
                                    onOk?.();
                                },
                                className: "flex-1 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheckCircle"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/alert.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    okText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/alert.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/alert.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/base/alert.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/base/alert.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, this);
    root.render(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertBox, {}, void 0, false, {
        fileName: "[project]/src/components/base/alert.tsx",
        lineNumber: 80,
        columnNumber: 15
    }, this));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/RoleBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoleBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
function RoleBadge({ role, className = '', showIcon = true }) {
    if (role === 'OWNER') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm flex items-center gap-1 ${className}`,
            children: [
                showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCrown"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/RoleBadge.tsx",
                    lineNumber: 17,
                    columnNumber: 22
                }, this),
                "Trưởng nhóm"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/RoleBadge.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    if (role === 'ADMIN') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm flex items-center gap-1 ${className}`,
            children: [
                showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserShield"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/RoleBadge.tsx",
                    lineNumber: 27,
                    columnNumber: 22
                }, this),
                "Phó nhóm"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/RoleBadge.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c = RoleBadge;
var _c;
__turbopack_context__.k.register(_c, "RoleBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/ModalMembers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupMembersModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$zalo$292f$home$2f$CreateGroupModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(zalo)/home/CreateGroupModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$RoleBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/RoleBadge.tsx [app-client] (ecmascript)");
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
// 🔥 Helper function để normalize ID
function normalizeId(value) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    if (typeof value === 'object' && value !== null) {
        if ('_id' in value) return normalizeId(value._id);
        if ('id' in value) return normalizeId(value.id);
    }
    return String(value);
}
// 🔥 Helper function để so sánh ID
function compareIds(id1, id2) {
    const normalized1 = normalizeId(id1);
    const normalized2 = normalizeId(id2);
    if (normalized1 === normalized2) return true;
    // So sánh cả dạng number
    const num1 = Number(normalized1);
    const num2 = Number(normalized2);
    if (!isNaN(num1) && !isNaN(num2) && num1 === num2) return true;
    return false;
}
function GroupMembersModal({ members, onClose, isOpen, groupName, currentUser, allUsers, conversationId, reLoad, onMembersAdded, onMemberRemoved, onRoleChange, sendNotifyMessage, lastUpdated }) {
    _s();
    const isDesktop = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
    const [showCreateGroupModal, setShowCreateGroupModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [localMembers, setLocalMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAction, setLoadingAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingNicknameMember, setEditingNicknameMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 🔥 Tạo user map với nhiều key formats
    const userMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "GroupMembersModal.useMemo[userMap]": ()=>{
            const map = new Map();
            // Add current user
            if (currentUser) {
                const currentId = normalizeId(currentUser._id || currentUser.id);
                if (currentId) {
                    map.set(currentId, currentUser);
                    // Thêm key dạng number nếu có thể
                    if (!isNaN(Number(currentId))) {
                        map.set(String(Number(currentId)), currentUser);
                    }
                }
            }
            // Add all users
            allUsers.forEach({
                "GroupMembersModal.useMemo[userMap]": (user)=>{
                    const userId = normalizeId(user._id || user.id);
                    if (userId) {
                        map.set(userId, user);
                        // Thêm key dạng number nếu có thể
                        if (!isNaN(Number(userId))) {
                            map.set(String(Number(userId)), user);
                        }
                    }
                }
            }["GroupMembersModal.useMemo[userMap]"]);
            return map;
        }
    }["GroupMembersModal.useMemo[userMap]"], [
        currentUser,
        allUsers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupMembersModal.useEffect": ()=>{
            const enriched = (members || []).map({
                "GroupMembersModal.useEffect.enriched": (m)=>{
                    const raw = m;
                    const memberId = normalizeId(raw._id ?? raw.id);
                    console.log(`[ModalMembers] Process member ${memberId}:`, {
                        name: raw.name,
                        role: raw.role,
                        addedBy: raw.addedBy,
                        rawObject: raw
                    });
                    if (!memberId) {
                        console.warn('⚠️ Member without ID:', raw);
                        return null;
                    }
                    const baseRole = raw.role ?? 'MEMBER';
                    const baseJoinedAt = typeof raw.joinedAt === 'number' ? raw.joinedAt : Date.now();
                    // 🔥 Tìm user info trong userMap
                    let foundUser = userMap.get(memberId);
                    // Thử tìm với number format nếu chưa có
                    if (!foundUser && !isNaN(Number(memberId))) {
                        foundUser = userMap.get(String(Number(memberId)));
                    }
                    const myId = normalizeId(currentUser._id || currentUser.id);
                    const originalName = raw.name || foundUser?.name || 'Thành viên';
                    // 🔥 Use nickname from Group Member Data (Global) or Personal Nickname (Local)
                    const nickname = raw.nickname || foundUser?.nicknames?.[myId];
                    const name = nickname || originalName;
                    const avatar = raw.avatar || foundUser?.avatar;
                    return {
                        _id: memberId,
                        name,
                        avatar,
                        role: baseRole,
                        joinedAt: baseJoinedAt,
                        addedBy: raw.addedBy,
                        originalName
                    };
                }
            }["GroupMembersModal.useEffect.enriched"]).filter(Boolean);
            // 🔥 Deduplicate members by ID
            const uniqueMembersMap = new Map();
            enriched.forEach({
                "GroupMembersModal.useEffect": (m)=>{
                    const id = normalizeId(m._id || m.id);
                    if (!uniqueMembersMap.has(id)) {
                        uniqueMembersMap.set(id, m);
                    }
                }
            }["GroupMembersModal.useEffect"]);
            setLocalMembers(Array.from(uniqueMembersMap.values()));
        }
    }["GroupMembersModal.useEffect"], [
        members,
        allUsers,
        userMap,
        currentUser,
        conversationId,
        lastUpdated
    ]);
    if (!isOpen) return null;
    const myId = normalizeId(currentUser._id || currentUser.id);
    const myMemberInfo = localMembers.find((m)=>compareIds(m._id || m.id, myId));
    const myRole = myMemberInfo?.role || 'MEMBER';
    const canKick = (targetRole)=>{
        if (myRole === 'OWNER') return true;
        if (myRole === 'ADMIN' && targetRole === 'MEMBER') return true;
        return false;
    };
    const canPromote = (targetRole)=>myRole === 'OWNER' && targetRole === 'MEMBER';
    const canDemote = (targetRole)=>myRole === 'OWNER' && targetRole === 'ADMIN';
    const handleOpenProfile = (targetUserId)=>{
        const id = normalizeId(targetUserId);
        router.push(`/profile/${id}`);
    };
    const handleOptimisticAddMember = (newUsers)=>{
        const newMembersFormatted = newUsers.map((u)=>({
                _id: normalizeId(u._id ?? u.id),
                name: u.name,
                avatar: u.avatar,
                role: 'MEMBER',
                joinedAt: Date.now(),
                addedBy: myId
            }));
        setLocalMembers((prev)=>[
                ...prev,
                ...newMembersFormatted
            ]);
        setShowCreateGroupModal(false);
        onMembersAdded(newUsers);
    };
    const handleAction = async (action, targetUserId)=>{
        if (!conversationId) return;
        setLoadingAction(targetUserId);
        const targetMember = localMembers.find((m)=>compareIds(m._id || m.id, targetUserId));
        const targetName = targetMember ? targetMember.name : 'Thành viên';
        try {
            const prevMembersSnapshot = [
                ...localMembers
            ];
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action === 'kick' ? {
                    conversationId,
                    targetUserId,
                    action: 'kickMember',
                    _id: myId
                } : {
                    conversationId,
                    targetUserId,
                    action: 'changeRole',
                    data: {
                        role: action === 'promote' ? 'ADMIN' : 'MEMBER'
                    },
                    _id: myId
                })
            });
            if (res.ok) {
                if (action === 'kick') {
                    setLocalMembers((prev)=>prev.filter((m)=>!compareIds(m._id || m.id, targetUserId)));
                    if (onMemberRemoved) onMemberRemoved(targetUserId, targetName);
                    // 🔥 Báo realtime để cập nhật sidebar & đóng phòng cho người bị kick
                    try {
                        const roomIdStr = String(conversationId || '');
                        const nextMembers = prevMembersSnapshot.filter((m)=>!compareIds(m._id || m.id, targetUserId));
                        const payloadMembers = nextMembers.map((m)=>({
                                _id: String(m._id || m.id || ''),
                                role: m.role,
                                name: m.name,
                                avatar: m.avatar
                            }));
                        const prevMembers = prevMembersSnapshot.map((m)=>({
                                _id: String(m._id || m.id || '')
                            }));
                        const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                            transports: [
                                'websocket'
                            ],
                            withCredentials: false
                        });
                        sock.emit('group_members_updated', {
                            roomId: roomIdStr,
                            members: payloadMembers,
                            prevMembers,
                            sender: myId,
                            senderName: currentUser.name,
                            groupName
                        });
                        setTimeout(()=>sock.disconnect(), 500);
                    } catch  {}
                } else if (action === 'promote' || action === 'demote') {
                    const newRole = action === 'promote' ? 'ADMIN' : 'MEMBER';
                    setLocalMembers((prev)=>prev.map((m)=>compareIds(m._id || m.id, targetUserId) ? {
                                ...m,
                                role: newRole
                            } : m));
                    onRoleChange?.(targetUserId, targetName, newRole);
                }
                reLoad?.();
            } else {
                toast({
                    type: 'error',
                    message: 'Thao tác thất bại',
                    duration: 3000
                });
            }
        } catch  {
            toast({
                type: 'error',
                message: 'Lỗi mạng, vui lòng thử lại',
                duration: 3000
            });
        } finally{
            setLoadingAction(null);
        }
    };
    const handleLeaveGroup = async ()=>{
        if (!conversationId) return;
        try {
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'leaveGroup',
                    conversationId,
                    _id: myId
                })
            });
            if (!res.ok) throw new Error('Leave failed');
            const actorName = currentUser.name || 'Một thành viên';
            const text = `${actorName} đã rời nhóm`;
            try {
                await sendNotifyMessage?.(text);
            } catch  {}
            try {
                const roomIdStr = String(conversationId);
                const nextMembers = localMembers.filter((m)=>!compareIds(m._id || m.id, myId));
                const payloadMembers = nextMembers.map((m)=>({
                        _id: String(m._id || m.id || ''),
                        role: m.role,
                        name: m.name,
                        avatar: m.avatar
                    }));
                const prevMembers = localMembers.map((m)=>({
                        _id: String(m._id || m.id || '')
                    }));
                const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                sock.emit('group_members_updated', {
                    roomId: roomIdStr,
                    members: payloadMembers,
                    prevMembers,
                    sender: myId,
                    senderName: currentUser.name,
                    groupName
                });
                setTimeout(()=>sock.disconnect(), 500);
            } catch  {}
            setLocalMembers((prev)=>prev.filter((m)=>!compareIds(m._id || m.id, myId)));
            reLoad?.();
            onClose();
        } catch  {
            toast({
                type: 'error',
                message: 'Rời nhóm thất bại',
                duration: 3000
            });
        }
    };
    const searchUser = localMembers.filter((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(item.name || '', searchTerm));
    const displayMembers = searchUser.filter((m)=>{
        if (activeTab === 'all') return true;
        if (activeTab === 'admin') return m.role === 'OWNER' || m.role === 'ADMIN';
        // TODO: Implement invited and blocked lists when data is available
        if (activeTab === 'invited') return false;
        if (activeTab === 'blocked') return false;
        return true;
    });
    const existingMemberIds = localMembers.map((m)=>normalizeId(m._id || m.id));
    const setNickname = async (targetId, nickname)=>{
        if (!conversationId) return;
        try {
            // 1. Call API
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'updateMemberNickname',
                    conversationId,
                    targetUserId: targetId,
                    data: {
                        nickname
                    }
                })
            });
            if (!res.ok) throw new Error('Failed to update nickname');
            // 2. Optimistic Update Local State
            const v = String(nickname || '').trim();
            setLocalMembers((prev)=>prev.map((m)=>{
                    if (compareIds(m._id || m.id, targetId)) {
                        const foundUser = userMap.get(normalizeId(targetId)) || userMap.get(String(Number(targetId)));
                        const globalNickname = foundUser?.nicknames?.[myId];
                        const originalName = m.originalName || foundUser?.name || m.name;
                        const resolvedName = v || globalNickname || originalName;
                        return {
                            ...m,
                            name: resolvedName || 'Thành viên',
                            nickname: v
                        };
                    }
                    return m;
                }));
            // 3. Emit Socket Event for real-time update
            try {
                const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                socket.emit('room_nickname_updated', {
                    roomId: conversationId,
                    targetUserId: targetId,
                    nickname: v
                });
                setTimeout(()=>socket.disconnect(), 500);
            } catch  {}
            // 4. Reload data
            reLoad?.();
            // 5. Send Notification
            if (sendNotifyMessage) {
                const actorName = currentUser.name || 'Một thành viên';
                const targetMember = localMembers.find((m)=>compareIds(m._id || m.id, targetId));
                const foundUser = userMap.get(normalizeId(targetId)) || userMap.get(String(Number(targetId)));
                const targetName = foundUser?.name || targetMember?.name || 'Thành viên';
                let msg = '';
                if (v) {
                    msg = `${actorName} đã đặt biệt danh cho ${targetName} là "${v}".`;
                } else {
                    msg = `${actorName} đã xóa biệt danh của ${targetName}.`;
                }
                sendNotifyMessage(msg);
            }
        } catch  {
            toast({
                type: 'error',
                message: 'Cập nhật biệt danh thất bại',
                duration: 3000
            });
        }
    };
    const modalNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-50 flex items-stretch justify-center ${isDesktop ? 'bg-black/20' : 'bg-black/40'} backdrop-blur-sm sm:px-0`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white w-full h-full rounded-none overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-none bg-blue-400 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onClose,
                                                className: "p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M15 19l-7-7 7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold",
                                                children: "Thành viên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 437,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowCreateGroupModal(true),
                                                className: "p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95",
                                                title: "Thêm thành viên",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserPlus"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowSearch((v)=>!v),
                                                className: "p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95",
                                                title: "Tìm kiếm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSearch"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSearch"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/90 focus:outline-none focus:bg-white focus:text-gray-900 transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            placeholder: "Tìm kiếm thành viên",
                                            className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/15 text-white  focus:outline-none focus:bg-white focus:text-gray-900 transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col min-h-0  bg-white sm:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 px-4 border-b border-gray-200 overflow-x-auto custom-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('all'),
                                        className: `cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'all' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`,
                                        children: "Tất cả"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('admin'),
                                        className: `cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'admin' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`,
                                        children: "Trưởng và phó nhóm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('invited'),
                                        className: `cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'invited' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`,
                                        children: "Đã mời"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('blocked'),
                                        className: `cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'blocked' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`,
                                        children: "Đã chặn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            editingNicknameMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-gray-100 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Đặt biệt danh"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setEditingNicknameMember(null),
                                                    className: "p-2 hover:bg-gray-100 rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                                        className: "w-6 h-6 text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                            lineNumber: 523,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-gray-600",
                                                    children: [
                                                        "Đặt biệt danh cho ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: editingNicknameMember.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 39
                                                        }, this),
                                                        " trong nhóm này."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    autoFocus: true,
                                                    defaultValue: editingNicknameMember.currentVal || editingNicknameMember.name,
                                                    className: "w-full px-4 py-3 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-[#0088ff] focus:ring-2 focus:ring-[#0088ff]/30",
                                                    placeholder: "Nhập biệt danh...",
                                                    onKeyDown: (e)=>{
                                                        if (e.key === 'Enter') {
                                                            setNickname(editingNicknameMember.id, e.currentTarget.value);
                                                            setEditingNicknameMember(null);
                                                        }
                                                    },
                                                    id: "nickname-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 justify-end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setEditingNicknameMember(null),
                                                            className: "px-6 py-3 text-gray-600 font-medium rounded-2xl hover:bg-gray-100",
                                                            children: "Hủy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                const val = document.getElementById('nickname-input')?.value;
                                                                setNickname(editingNicknameMember.id, val);
                                                                setEditingNicknameMember(null);
                                                            },
                                                            className: "px-6 py-3 bg-[#0088ff] text-white font-medium rounded-2xl hover:bg-[#0070d9] transition-colors",
                                                            children: "Lưu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-4 py-4 custom-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-500 uppercase tracking-wide",
                                                children: "Danh sách thành viên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 573,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-[#0088ff]",
                                                children: displayMembers.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 574,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            displayMembers.map((member)=>{
                                                const memberId = normalizeId(member._id || member.id);
                                                const memberRole = member.role;
                                                const isMe = compareIds(memberId, myId);
                                                const isLoading = loadingAction === memberId;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-center justify-between gap-4 py-3 px-3 rounded-2xl hover:bg-gray-50 transition-colors relative group ${isLoading ? 'opacity-60' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full overflow-hidden flex-shrink-0 cursor-pointer",
                                                                    onClick: ()=>handleOpenProfile(memberId),
                                                                    children: member.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(member.avatar),
                                                                        alt: member.name,
                                                                        width: 48,
                                                                        height: 48,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/logo/avata.webp",
                                                                        alt: member.name,
                                                                        width: 48,
                                                                        height: 48,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                        lineNumber: 604,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: " min-w-0 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-medium text-gray-900",
                                                                                    children: member.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                    lineNumber: 617,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-2.5  py-1 bg-[#0088ff]/10 text-[#0088ff] rounded-full text-xs font-medium",
                                                                                    children: "Bạn"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: " gap-3 flex ",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$RoleBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                role: member.role
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                lineNumber: 627,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                            lineNumber: 626,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        member.addedBy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: compareIds(member.addedBy, myId) ? 'Thêm bởi bạn' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    'Thêm bởi ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: (()=>{
                                                                                            const adder = userMap.get(normalizeId(member.addedBy));
                                                                                            if (!adder) console.warn('[ModalMembers] Unknown adder:', member.addedBy);
                                                                                            return adder?.name || 'Người dùng';
                                                                                        })()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                        lineNumber: 636,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                            lineNumber: 630,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                    lineNumber: 615,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 21
                                                        }, this),
                                                        !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setOpenMenuId(openMenuId === memberId ? null : memberId),
                                                                    className: "p-2 rounded-full cursor-pointer hover:bg-gray-200 active:scale-95",
                                                                    title: "Thêm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                                        className: "w-5 h-5 text-gray-700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                        lineNumber: 657,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 25
                                                                }, this),
                                                                openMenuId === memberId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "fixed inset-0 z-10",
                                                                            onClick: ()=>setOpenMenuId(null)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                            lineNumber: 661,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-20 overflow-hidden",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        const currentRoomNick = String(member.nickname || '');
                                                                                        setEditingNicknameMember({
                                                                                            id: memberId,
                                                                                            name: member.name,
                                                                                            currentVal: currentRoomNick
                                                                                        });
                                                                                        setOpenMenuId(null);
                                                                                    },
                                                                                    className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                                                                                    children: "Đặt biệt danh"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                    lineNumber: 663,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                !isMe && canPromote(memberRole) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmAlert"])({
                                                                                            title: 'Bổ nhiệm làm Phó nhóm',
                                                                                            message: `Bổ nhiệm ${member.name} làm Phó nhóm?`,
                                                                                            okText: 'Bổ nhiệm',
                                                                                            onOk: ()=>handleAction('promote', memberId)
                                                                                        });
                                                                                        setOpenMenuId(null);
                                                                                    },
                                                                                    className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                                                                                    children: "Bổ nhiệm làm Phó nhóm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                    lineNumber: 695,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                !isMe && canDemote(memberRole) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmAlert"])({
                                                                                            title: 'Hủy quyền Phó nhóm',
                                                                                            message: `Hủy quyền Phó nhóm ${member.name}?`,
                                                                                            okText: 'Có',
                                                                                            onOk: ()=>handleAction('demote', memberId)
                                                                                        });
                                                                                        setOpenMenuId(null);
                                                                                    },
                                                                                    className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                                                                                    children: "Bãi nhiệm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                    lineNumber: 711,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                !isMe && canKick(memberRole) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmAlert"])({
                                                                                            title: 'Xóa thành viên',
                                                                                            message: `Xóa ${member.name} khỏi nhóm?`,
                                                                                            okText: 'Xóa',
                                                                                            onOk: ()=>handleAction('kick', memberId)
                                                                                        });
                                                                                        setOpenMenuId(null);
                                                                                    },
                                                                                    className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600",
                                                                                    children: "Xóa khỏi nhóm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                                    lineNumber: 727,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                            lineNumber: 662,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 23
                                                        }, this),
                                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-white/70 rounded-2xl flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 border-4 border-[#0088ff] border-t-transparent rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, memberId, true, {
                                                    fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            displayMembers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-20 text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSearch"], {
                                                        className: "w-20 h-20 mx-auto mb-6 opacity-30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-medium",
                                                        children: "Không tìm thấy thành viên"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                                lineNumber: 759,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/base/ModalMembers.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/ModalMembers.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/base/ModalMembers.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            showCreateGroupModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$zalo$292f$home$2f$CreateGroupModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mode: "add",
                conversationId: conversationId,
                existingMemberIds: existingMemberIds,
                currentUser: currentUser,
                allUsers: allUsers,
                onClose: ()=>setShowCreateGroupModal(false),
                reLoad: reLoad,
                onMembersAdded: handleOptimisticAddMember,
                onGroupCreated: ()=>setShowCreateGroupModal(false)
            }, void 0, false, {
                fileName: "[project]/src/components/base/ModalMembers.tsx",
                lineNumber: 772,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/ModalMembers.tsx",
        lineNumber: 422,
        columnNumber: 5
    }, this);
    const target = isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
    return isDesktop && target ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalNode, target) : modalNode;
}
_s(GroupMembersModal, "QAjcEjowL411TTnqFKcpAWvtpyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GroupMembersModal;
var _c;
__turbopack_context__.k.register(_c, "GroupMembersModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/PinMessageTitleModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PinMessageTitleModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function PinMessageTitleModal({ onClose, onConfirm }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        onConfirm(title);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-800 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                                    className: "w-5 h-5 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                "Ghim tin nhắn"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "cursor-pointer p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiXMark"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-3",
                            children: "Bạn có thể đặt tiêu đề cho tin nhắn ghim này (tùy chọn):"
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: title,
                            onChange: (e)=>setTitle(e.target.value),
                            placeholder: "Nhập tiêu đề...",
                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm",
                                    children: "Ghim"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/base/PinMessageTitleModal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PinMessageTitleModal, "MYNoGbxGn41vHCoLeDH6SYxb4UA=");
_c = PinMessageTitleModal;
var _c;
__turbopack_context__.k.register(_c, "PinMessageTitleModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/PinnedMessageListModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ui/base/PinnedMessageListModal.tsx
__turbopack_context__.s([
    "default",
    ()=>PinnedMessageListModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
// React Icons – chuẩn Zalo, đẹp, nhẹ
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
function PinnedMessageListModal({ messages, onClose, onJumpToMessage, onGetSenderName, onGetContentDisplay, onUnpinMessage, hasMore, onLoadMore, loadingMore }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-md h-[82vh] max-h-[40rem] sm:max-h-[50rem] mx-4 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-amber-50 sticky top-0 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "flex items-center gap-2.5 text-lg font-bold text-yellow-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                                    className: "w-6 h-6 text-yellow-600 rotate-45"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                "Tin nhắn đã ghim",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 px-2.5 py-0.5 bg-yellow-200 text-yellow-800 text-xs font-bold rounded-full",
                                    children: messages.length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 cursor-pointer rounded-full hover:bg-white/80 transition-all hover:scale-110",
                            title: "Đóng",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiXMark"], {
                                className: "w-6 h-6 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar",
                    children: [
                        messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16 text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                                    className: "w-16 h-16 mx-auto mb-4 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base",
                                    children: "Chưa có tin nhắn nào được ghim"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this) : messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    onJumpToMessage(msg._id);
                                    onClose();
                                },
                                className: "relative group p-4 bg-gradient-to-r from-yellow-50 to-white rounded-xl border border-yellow-200 hover:border-yellow-400 hover:shadow-md cursor-pointer transition-all duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-yellow-800 text-sm",
                                                        children: onGetSenderName(msg.sender)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[0.6875rem] px-2 py-0.5 rounded-md font-semibold ${msg.type === 'poll' ? 'bg-yellow-100 text-yellow-800' : msg.type === 'reminder' ? 'bg-blue-100 text-blue-800' : msg.type === 'image' ? 'bg-pink-100 text-pink-800' : msg.type === 'video' ? 'bg-blue-100 text-blue-800' : msg.type === 'file' ? 'bg-gray-100 text-gray-800' : msg.type === 'sticker' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-700'}`,
                                                        children: msg.pinnedTitle || (msg.type === 'poll' ? 'Bình chọn' : msg.type === 'reminder' ? 'Lịch hẹn' : msg.type === 'image' ? 'Ảnh' : msg.type === 'video' ? 'Video' : msg.type === 'file' ? 'File' : msg.type === 'sticker' ? 'Sticker' : 'Tin nhắn')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 whitespace-nowrap",
                                                        children: new Date(msg.timestamp).toLocaleDateString('vi-VN', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onUnpinMessage(msg);
                                                        },
                                                        className: "px-2 py-1 text-[0.74rem] rounded-lg border border-red-300 text-red-700 hover:bg-red-50 cursor-pointer whitespace-nowrap",
                                                        children: "Bỏ ghim"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    msg.isRecalled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500 italic",
                                        children: "đã thu hồi tin nhắn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: msg.type === 'image' && msg.fileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative  overflow-hidden border border-gray-200 shadow-sm w-full max-w-[2rem]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl),
                                                        alt: "Ảnh",
                                                        width: 320,
                                                        height: 240,
                                                        className: "w-full h-full object-cover",
                                                        unoptimized: String(msg.fileUrl).includes('mega.nz')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 25
                                                }, this),
                                                msg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-sm text-gray-700 line-clamp-3 leading-relaxed",
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 23
                                        }, this) : msg.type === 'video' && msg.fileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative rounded-xl overflow-hidden border border-gray-200 shadow-sm w-full max-w-[6rem] bg-black",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl),
                                                            className: "w-full h-full object-cover",
                                                            muted: true,
                                                            playsInline: true,
                                                            preload: "metadata"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-6 h-6 rounded-full bg-white/80 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    className: "w-5 h-5 text-gray-800",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M8 5v14l11-7z",
                                                                        fill: "currentColor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 25
                                                }, this),
                                                msg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-sm text-gray-700 line-clamp-3 leading-relaxed",
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                            lineNumber: 152,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-700 line-clamp-3 leading-relaxed",
                                            children: onGetContentDisplay(msg)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                            lineNumber: 174,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false),
                                    msg.type === 'text' && !msg.isRecalled && (()=>{
                                        const linkMatch = (msg.content || '').match(/(https?:\/\/|www\.)\S+/i);
                                        if (!linkMatch) return null;
                                        const raw = linkMatch[0];
                                        const href = raw.startsWith('http') ? raw : `https://${raw}`;
                                        const hostname = (()=>{
                                            try {
                                                return new URL(href).hostname.replace('www.', '');
                                            } catch  {
                                                return 'Website';
                                            }
                                        })();
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 rounded-xl shadow-xl bg-white overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    window.open(href, '_blank');
                                                },
                                                className: "w-full text-left p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500 text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLink"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-purple-600 truncate",
                                                                children: raw
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-0.5",
                                                                children: hostname
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                                lineNumber: 198,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                            lineNumber: 197,
                                            columnNumber: 23
                                        }, this);
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-xl ring-2 ring-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, msg._id, true, {
                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)),
                        hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLoadMore,
                                disabled: loadingMore,
                                className: "px-3 py-1.5 text-xs rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-800 hover:bg-yellow-100 cursor-pointer disabled:opacity-60",
                                children: loadingMore ? 'Đang tải...' : 'Xem thêm'
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 text-center text-xs text-gray-400 border-t border-gray-100 bg-gray-50",
                    children: "Nhấn vào tin nhắn để nhảy đến vị trí gốc"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/base/PinnedMessageListModal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = PinnedMessageListModal;
var _c;
__turbopack_context__.k.register(_c, "PinnedMessageListModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_base_6e94d747._.js.map