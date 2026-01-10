module.exports = [
"[project]/src/components/(chatPopup)/SearchResults.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>SearchResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
// React Icons – Bộ hiện đại nhất 2025
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// === TABS SIÊU ĐẸP ===
const SearchTabs = ({ activeTab, setActiveTab, contactsCount, messagesCount })=>{
    const tabs = [
        {
            key: 'all',
            label: 'Tất cả',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMagnifyingGlass"],
            count: contactsCount + messagesCount
        },
        {
            key: 'contacts',
            label: 'Liên hệ',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUser"],
            count: contactsCount
        },
        {
            key: 'messages',
            label: 'Tin nhắn',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChatBubbleLeftRight"],
            count: messagesCount
        }
    ];
    const formatCount = (n)=>n >= 99 ? '99+' : String(n);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-nowrap border-b border-gray-200 bg-white sticky top-0 z-5 -mx-4 px-4 ",
        children: tabs.map((tab)=>{
            const isActive = activeTab === tab.key;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab(tab.key),
                className: `flex-shrink-0 flex cursor-pointer items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition-all relative ${isActive ? 'text-[#0088ff]' : 'text-gray-600 hover:text-gray-900'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-3 right-3 h-0.5 bg-[#0088ff] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                        lineNumber: 105,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, tab.key, true, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 97,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// === HIGHLIGHT TEXT ĐẸP NHƯ ZALO 2025 ===
const HighlightText = ({ text, keyword })=>{
    if (!keyword.trim() || !text) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-gray-800",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 115,
        columnNumber: 40
    }, ("TURBOPACK compile-time value", void 0));
    const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildAccentInsensitiveRegex"])(keyword);
    const parts = text.split(regex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: parts.map((part, i)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: " text-blue-600 md:text-blue-700 rounded ",
                children: part
            }, i, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 122,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-800",
                children: part
            }, i, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 126,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// === LOADING & EMPTY STATE ===
const LoadingState = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-16 text-gray-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-medium",
                children: "Đang tìm kiếm..."
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 139,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 137,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const EmptyState = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-20 text-center text-gray-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 bg-gray-100 rounded-full mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMagnifyingGlass"], {
                    className: "w-20 h-20 text-gray-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                    lineNumber: 146,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-semibold text-gray-500",
                children: "Không tìm thấy kết quả"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 148,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm mt-2",
                children: "Thử tìm với từ khóa khác nhé!"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 149,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 144,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// === FORMAT TIME ===
const formatTime = (timestamp)=>{
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    if (days === 1) return 'Hôm qua';
    if (days < 7) return `${days} ngày trước`;
    return date.toLocaleDateString('vi-VN');
};
// === SECTIONS ===
const ContactsSection = ({ contacts, searchTerm, onSelectContact, currentUserId })=>{
    if (contacts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-3 p-2 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm font-bold text-gray-800",
                    children: [
                        "Liên hệ (",
                        contacts.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            contacts.map((contact)=>{
                const isGroup = Boolean(contact.isGroup);
                let displayName = String(contact.name || contact.username || 'Người dùng').trim();
                if (!isGroup && currentUserId) {
                    const user = contact;
                    if (user.nicknames?.[currentUserId]) {
                        displayName = user.nicknames[currentUserId];
                    }
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSelectContact(contact),
                    className: "w-full cursor-pointer flex items-center gap-4 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all active:scale-98 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-3xl overflow-hidden ring-2 ring-white shadow-xl",
                                    children: contact.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(contact.avatar),
                                        width: 56,
                                        height: 56,
                                        alt: "",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 206,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo/avata.webp",
                                        alt: displayName,
                                        width: 64,
                                        height: 64,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-1 -right-1 p-1.5 bg-purple-600 rounded-full shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUsers"], {
                                        className: "w-3 h-3 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left border-b border-gray-200 pb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " text-gray-900",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightText, {
                                        text: displayName,
                                        keyword: searchTerm
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 flex items-center gap-2",
                                    children: [
                                        isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUsers"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                            lineNumber: 235,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUser"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                            lineNumber: 235,
                                            columnNumber: 62
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isGroup ? 'Nhóm chat' : 'Liên hệ cá nhân'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, contact._id, true, {
                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MessagesSection = ({ groupedMessages, searchTerm, onNavigateToMessage, onClearSearch, onOpenRoomResults })=>{
    if (groupedMessages.length === 0) return null;
    const formatCount = (n)=>n >= 99 ? '99+' : String(n);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " bg-white px-2 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-2 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm font-bold text-gray-800",
                    children: [
                        "Tin nhắn (",
                        formatCount(groupedMessages.reduce((a, g)=>a + g.messages.length, 0)),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            groupedMessages.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white flex overflow-hidden border-y border-gray-100 py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 flex  gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-3xl overflow-hidden ring-2 ring-white shadow-xl",
                                        children: group.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(group.avatar),
                                            width: 56,
                                            height: 56,
                                            alt: "",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo/avata.webp",
                                            alt: group.roomName,
                                            width: 64,
                                            height: 64,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    group.isGroupChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-2 -right-1 p-1.5 bg-emerald-700 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUsers"], {
                                            className: "w-3 h-3 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-200",
                                children: [
                                    group.messages.slice(0, 1).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onNavigateToMessage(msg);
                                                onClearSearch();
                                            },
                                            className: "w-full  cursor-pointer px-5 text-left hover:bg-gray-50 transition-all flex items-start gap-4 active:scale-99",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: " justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0 ",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex  justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: " text-gray-900 text-lg w-[14rem] md:w-[10rem] truncate",
                                                                                    children: group.roomName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                                    lineNumber: 316,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between gap-2",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-600",
                                                                                        children: group.isGroupChat ? 'Nhóm' : 'Chat cá nhân'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                                        lineNumber: 318,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                                    lineNumber: 317,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                            lineNumber: 315,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiClock"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                                    lineNumber: 323,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                formatTime(msg.timestamp)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                            lineNumber: 322,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-gray-800",
                                                                children: msg.senderName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 line-clamp-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightText, {
                                                            text: msg.type === 'file' ? msg.fileName || 'File' : msg.type === 'image' ? 'Hình ảnh' : msg.type === 'video' ? 'Video' : msg.type === 'sticker' ? 'Sticker' : msg.content || 'Tin nhắn',
                                                            keyword: searchTerm
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, msg._id, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (onOpenRoomResults) {
                                                onOpenRoomResults(group.roomId, group.roomName, group.isGroupChat, group.avatar);
                                            } else {
                                                onNavigateToMessage(group.messages[0]);
                                            }
                                            onClearSearch();
                                        },
                                        className: "flex px-5 py-3 items-center gap-1 text-[1rem]  hover:text-blue-700 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "",
                                                children: [
                                                    formatCount(group.messages.length),
                                                    " kết quả phù hợp"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, group.roomId, true, {
                    fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function SearchResults({ activeTab, setActiveTab, isSearching, hasResults, contacts, groupedMessages, searchTerm, onSelectContact, onNavigateToMessage, currentUserId, onOpenRoomResults }) {
    const handleClearSearch = ()=>{
    // Gọi từ Sidebar
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchTabs, {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                contactsCount: contacts.length,
                messagesCount: groupedMessages.reduce((a, g)=>a + g.messages.length, 0)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingState, {}, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 398,
                columnNumber: 23
            }, this),
            !isSearching && !hasResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {}, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 399,
                columnNumber: 39
            }, this),
            !isSearching && hasResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3  bg-gray-200",
                children: [
                    (activeTab === 'all' || activeTab === 'contacts') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactsSection, {
                        contacts: contacts,
                        searchTerm: searchTerm,
                        onSelectContact: onSelectContact,
                        currentUserId: currentUserId
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                        lineNumber: 403,
                        columnNumber: 13
                    }, this),
                    (activeTab === 'all' || activeTab === 'messages') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessagesSection, {
                        groupedMessages: groupedMessages,
                        searchTerm: searchTerm,
                        onNavigateToMessage: onNavigateToMessage,
                        onClearSearch: handleClearSearch,
                        onOpenRoomResults: onOpenRoomResults
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                        lineNumber: 411,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/SearchResults.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/MessageFilter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILTER_CONFIG",
    ()=>FILTER_CONFIG,
    "default",
    ()=>MessageFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Icons – Bộ hiện đại nhất
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const FILTER_CONFIG = {
    all: {
        label: 'Tất cả',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChatBubbleLeftRight"],
        color: 'indigo'
    },
    group: {
        label: 'Nhóm',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUsers"],
        color: 'purple'
    },
    personal: {
        label: 'Cá nhân',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUserCircle"],
        color: 'pink'
    },
    unread: {
        label: 'Chưa đọc',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEnvelope"],
        color: 'blue'
    },
    read: {
        label: 'Đã đọc',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEnvelopeOpen"],
        color: 'green'
    },
    hidden: {
        label: 'Ẩn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEyeSlash"],
        color: 'gray'
    }
};
function MessageFilter({ filterType, setFilterType, counts }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " bg-gradient-to-b from-white via-white to-gray-50/50 border-b border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 overflow-x-auto custom-scrollbar pb-3 pt-1",
            children: filters.map((filter)=>{
                const { label, icon: Icon, color } = FILTER_CONFIG[filter];
                const isActive = filterType === filter;
                const count = counts[filter];
                // Màu gradient theo từng filter
                const gradientFrom = {
                    indigo: 'from-indigo-500',
                    blue: 'from-blue-500',
                    green: 'from-emerald-500',
                    purple: 'from-purple-500',
                    pink: 'from-pink-500',
                    gray: 'from-gray-500'
                }[color];
                const gradientTo = {
                    indigo: 'to-purple-600',
                    blue: 'to-cyan-600',
                    green: 'to-teal-600',
                    purple: 'to-fuchsia-600',
                    pink: 'to-rose-600',
                    gray: 'to-slate-600'
                }[color];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setFilterType(filter),
                    className: `
                relative flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm
                transition-all duration-300 transform hover:scale-105 active:scale-95
                shadow-lg hover:shadow-2xl flex-shrink-0 min-w-fit
                ${isActive ? `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white shadow-${color}-500/30` : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200'}
              `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this),
                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `
                    min-w-[1.6rem] px-2 py-0.5 text-xs font-bold rounded-full
                    ${isActive ? 'bg-white/30 text-white backdrop-blur-sm' : 'bg-gray-200 text-gray-700'}
                  `,
                            children: count > 99 ? '99+' : count
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
                            lineNumber: 88,
                            columnNumber: 17
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/40 rounded-full blur-md"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-t-full shadow-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
                            lineNumber: 103,
                            columnNumber: 17
                        }, this)
                    ]
                }, filter, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/MessageFilter.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/MediaEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>MediaEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-advanced-cropper/dist/index.esm-bundler.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function MediaEditor({ mediaUrl, mediaType = 'image', chatName, onClose, onSend }) {
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isHD, setIsHD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Crop state
    const [currentMedia, setCurrentMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mediaUrl);
    // For video, we store crop config instead of blob
    const [videoCropConfig, setVideoCropConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCropping, setIsCropping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDrawing, setIsDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [brushColor, setBrushColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('#ff3b30');
    const [brushSize, setBrushSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const [isPointerDown, setIsPointerDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [strokes, setStrokes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [constrainToMedia, setConstrainToMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cropperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [videoMeta, setVideoMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [displayRect, setDisplayRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTexting, setIsTexting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [textColor, setTextColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('#ffffff');
    const [textSize, setTextSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [textEntries, setTextEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draggingTextId, setDraggingTextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [selectedTextId, setSelectedTextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [containerSize, setContainerSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const croppedVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const updateSize = ()=>{
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };
        const observer = new ResizeObserver(updateSize);
        observer.observe(containerRef.current);
        updateSize(); // Initial check
        return ()=>observer.disconnect();
    }, []);
    const generateVideoPoster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Helper to capture from a video element
        const capture = (video)=>{
            try {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                if (!ctx) return null;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                return canvas.toDataURL('image/jpeg', 0.92);
            } catch (e) {
                console.warn('Failed to capture video frame (likely CORS):', e);
                return null;
            }
        };
        // Try using the existing video ref first
        if (videoRef.current && videoRef.current.videoWidth && videoRef.current.videoHeight) {
            const result = capture(videoRef.current);
            if (result) return result;
        }
        // Fallback: create a new video element with crossOrigin
        try {
            const v = document.createElement('video');
            v.crossOrigin = 'anonymous'; // Important for CORS
            v.muted = true;
            v.playsInline = true;
            await new Promise((resolve, reject)=>{
                v.addEventListener('loadeddata', ()=>resolve(), {
                    once: true
                });
                v.addEventListener('error', reject, {
                    once: true
                });
                v.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia);
                v.load();
            });
            // Ensure we have a frame (sometimes loadeddata is enough, but seek might be safer if black)
            if (v.currentTime === 0) {
                v.currentTime = 0.1;
                await new Promise((r)=>v.addEventListener('seeked', r, {
                        once: true
                    }));
            }
            return capture(v);
        } catch (e) {
            console.error('Failed to generate video poster fallback:', e);
            return null;
        }
    }, [
        currentMedia
    ]);
    const ensureCanvasSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const c = canvasRef.current;
        const container = containerRef.current;
        if (!c || !container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (c.width !== w) c.width = w;
        if (c.height !== h) c.height = h;
    }, []);
    const computeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((containerW, containerH, mediaW, mediaH)=>{
        const imgAspect = mediaW / mediaH;
        const containerAspect = containerW / containerH;
        if (imgAspect > containerAspect) {
            const dw = containerW;
            const dh = containerW / imgAspect;
            const dy = (containerH - dh) / 2;
            const rdw = Math.round(dw);
            const rdh = Math.round(dh);
            const rdy = Math.round(dy);
            setDisplayRect({
                x: 0,
                y: rdy,
                width: rdw,
                height: rdh
            });
        } else {
            const dh = containerH;
            const dw = containerH * imgAspect;
            const dx = (containerW - dw) / 2;
            const rdh = Math.round(dh);
            const rdw = Math.round(dw);
            const rdx = Math.round(dx);
            setDisplayRect({
                x: rdx,
                y: 0,
                width: rdw,
                height: rdh
            });
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isCropping) return;
        const ref = cropperRef.current;
        if (!ref) return;
        const state = ref.getState();
        if (!state) return;
        ref.setState({
            ...state,
            transforms: {
                ...state.transforms || {},
                rotate: rotation
            }
        });
    }, [
        zoom,
        rotation,
        isCropping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        if (mediaType === 'image') {
            const im = new window.Image();
            im.onload = ()=>computeRect(container.clientWidth, container.clientHeight, im.naturalWidth || im.width, im.naturalHeight || im.height);
            im.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia);
        }
    }, [
        computeRect,
        currentMedia,
        mediaType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        const v = videoRef.current;
        if (!container || !v || mediaType !== 'video') return;
        if (v.videoWidth && v.videoHeight) {
            computeRect(container.clientWidth, container.clientHeight, v.videoWidth, v.videoHeight);
        }
    }, [
        computeRect,
        mediaType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mediaType !== 'video') return;
        if (!videoCropConfig || !videoCropConfig.croppedAreaPixels) return;
        const { width: cw, height: ch } = containerSize;
        if (cw <= 0 || ch <= 0) return;
        const { width: kw, height: kh } = videoCropConfig.croppedAreaPixels;
        const rotate = videoCropConfig.rotation || 0;
        if (rotate === 0) {
            const scale = Math.min(cw / kw, ch / kh);
            const dw = Math.round(kw * scale);
            const dh = Math.round(kh * scale);
            const dx = Math.round((cw - dw) / 2);
            const dy = Math.round((ch - dh) / 2);
            setDisplayRect({
                x: dx,
                y: dy,
                width: dw,
                height: dh
            });
        } else {
            setDisplayRect({
                x: 0,
                y: 0,
                width: cw,
                height: ch
            });
        }
    }, [
        mediaType,
        videoCropConfig,
        containerSize
    ]);
    const drawStrokeSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, stroke)=>{
        if (stroke.points.length < 2) {
            const p = stroke.points[0];
            if (!p) return;
            ctx.beginPath();
            ctx.arc(p.x, p.y, stroke.size / 2, 0, Math.PI * 2);
            ctx.fillStyle = stroke.color;
            ctx.fill();
            return;
        }
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        const [p0, ...rest] = stroke.points;
        ctx.moveTo(p0.x, p0.y);
        for (const p of rest)ctx.lineTo(p.x, p.y);
        ctx.stroke();
    }, []);
    const redrawOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, c.width, c.height);
        if (displayRect && constrainToMedia) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(displayRect.x, displayRect.y, displayRect.width, displayRect.height);
            ctx.clip();
        }
        for (const s of strokes)drawStrokeSegment(ctx, s);
        if (displayRect && constrainToMedia) {
            ctx.restore();
        }
    }, [
        strokes,
        drawStrokeSegment,
        displayRect,
        constrainToMedia
    ]);
    const [videoPoster, setVideoPoster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ensureCanvasSize();
        redrawOverlay();
    }, [
        ensureCanvasSize,
        redrawOverlay,
        isDrawing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = ()=>{
            ensureCanvasSize();
            redrawOverlay();
        };
        window.addEventListener('resize', handler);
        return ()=>window.removeEventListener('resize', handler);
    }, [
        ensureCanvasSize,
        redrawOverlay
    ]);
    const pointerPos = (e)=>{
        const c = canvasRef.current;
        if (!c) return {
            x: 0,
            y: 0
        };
        const rect = c.getBoundingClientRect();
        if ('touches' in e && e.touches.length) {
            const t = e.touches[0];
            return {
                x: t.clientX - rect.left,
                y: t.clientY - rect.top
            };
        }
        const me = e;
        return {
            x: me.clientX - rect.left,
            y: me.clientY - rect.top
        };
    };
    const startDraw = (e)=>{
        if (!isDrawing) return;
        ensureCanvasSize();
        setIsPointerDown(true);
        const p = pointerPos(e);
        if (displayRect && constrainToMedia) {
            const outsideX = p.x < displayRect.x || p.x > displayRect.x + displayRect.width;
            const outsideY = p.y < displayRect.y || p.y > displayRect.y + displayRect.height;
            if (outsideX || outsideY) {
                return;
            }
        }
        let cp = p;
        if (displayRect && constrainToMedia) {
            const cx = Math.min(Math.max(p.x, displayRect.x), displayRect.x + displayRect.width);
            const cy = Math.min(Math.max(p.y, displayRect.y), displayRect.y + displayRect.height);
            cp = {
                x: cx,
                y: cy
            };
        }
        setStrokes((prev)=>[
                ...prev,
                {
                    color: brushColor,
                    size: brushSize,
                    points: [
                        cp
                    ]
                }
            ]);
    };
    const moveDraw = (e)=>{
        if (!isDrawing || !isPointerDown) return;
        const p = pointerPos(e);
        let cp = p;
        if (displayRect && constrainToMedia) {
            const cx = Math.min(Math.max(p.x, displayRect.x), displayRect.x + displayRect.width);
            const cy = Math.min(Math.max(p.y, displayRect.y), displayRect.y + displayRect.height);
            cp = {
                x: cx,
                y: cy
            };
        }
        setStrokes((prev)=>{
            if (!prev.length) return prev;
            const last = prev[prev.length - 1];
            const updated = {
                ...last,
                points: [
                    ...last.points,
                    cp
                ]
            };
            const next = [
                ...prev.slice(0, -1),
                updated
            ];
            return next;
        });
        redrawOverlay();
    };
    const endDraw = ()=>{
        if (!isDrawing) return;
        setIsPointerDown(false);
    };
    const handleSaveCrop = async ()=>{
        try {
            if (!cropperRef.current) return;
            if (mediaType === 'image') {
                const canvas = cropperRef.current.getCanvas();
                if (canvas) {
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
                    setCurrentMedia(dataUrl);
                    setIsCropping(false);
                    setRotation(0);
                    setZoom(1);
                }
            } else {
                // Video
                const state = cropperRef.current.getState();
                const coordinates = cropperRef.current.getCoordinates();
                if (state && coordinates) {
                    const baseW = containerRef.current?.clientWidth || coordinates.width;
                    const baseH = containerRef.current?.clientHeight || coordinates.height;
                    setVideoCropConfig({
                        crop: {
                            x: coordinates.left,
                            y: coordinates.top
                        },
                        zoom: 1,
                        rotation: state.transforms.rotate || 0,
                        croppedAreaPixels: {
                            x: coordinates.left,
                            y: coordinates.top,
                            width: coordinates.width,
                            height: coordinates.height
                        },
                        baseWidth: baseW,
                        baseHeight: baseH
                    });
                    setIsCropping(false);
                }
            }
        } catch (e) {
            console.error(e);
        }
    };
    const applyDrawing = async ()=>{
        try {
            const container = containerRef.current;
            const c = canvasRef.current;
            if (!container || !c || strokes.length === 0) {
                setIsDrawing(false);
                return;
            }
            if (mediaType === 'video') {
                setIsDrawing(false);
                return;
            }
            const img = await new Promise((resolve, reject)=>{
                const im = new window.Image();
                im.crossOrigin = 'anonymous';
                im.onload = ()=>resolve(im);
                im.onerror = reject;
                im.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia);
            });
            const w = container.clientWidth;
            const h = container.clientHeight;
            const out = document.createElement('canvas');
            out.width = w;
            out.height = h;
            const ctx = out.getContext('2d');
            const imgAspect = img.width / img.height;
            const containerAspect = w / h;
            if (imgAspect > containerAspect) {
                const dw = w;
                const dh = w / imgAspect;
                const dy = (h - dh) / 2;
                ctx.drawImage(img, 0, dy, dw, dh);
            } else {
                const dh = h;
                const dw = h * imgAspect;
                const dx = (w - dw) / 2;
                ctx.drawImage(img, dx, 0, dw, dh);
            }
            const overlay = c.getContext('2d');
            const copy = overlay.getImageData(0, 0, c.width, c.height);
            const tmp = document.createElement('canvas');
            tmp.width = c.width;
            tmp.height = c.height;
            const tctx = tmp.getContext('2d');
            tctx.putImageData(copy, 0, 0);
            ctx.drawImage(tmp, 0, 0, w, h);
            const dataUrl = out.toDataURL('image/jpeg', 0.92);
            setCurrentMedia(dataUrl);
            setIsDrawing(false);
            setStrokes([]);
            const ctxOverlay = c.getContext('2d');
            if (ctxOverlay) ctxOverlay.clearRect(0, 0, c.width, c.height);
        } catch (e) {
            setIsDrawing(false);
        }
    };
    const applyTextToImage = async ()=>{
        try {
            const container = containerRef.current;
            if (!container || mediaType === 'video' || textEntries.length === 0) return;
            const img = await new Promise((resolve, reject)=>{
                const im = new window.Image();
                im.crossOrigin = 'anonymous';
                im.onload = ()=>resolve(im);
                im.onerror = reject;
                im.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia);
            });
            const w = container.clientWidth;
            const h = container.clientHeight;
            const imgAspect = img.width / img.height;
            const containerAspect = w / h;
            const draw = (()=>{
                if (imgAspect > containerAspect) {
                    const dw = w;
                    const dh = w / imgAspect;
                    const dx = 0;
                    const dy = (h - dh) / 2;
                    return {
                        dx,
                        dy,
                        dw,
                        dh
                    };
                } else {
                    const dh = h;
                    const dw = h * imgAspect;
                    const dx = (w - dw) / 2;
                    const dy = 0;
                    return {
                        dx,
                        dy,
                        dw,
                        dh
                    };
                }
            })();
            const out = document.createElement('canvas');
            out.width = img.width;
            out.height = img.height;
            const ctx = out.getContext('2d');
            ctx.drawImage(img, 0, 0, out.width, out.height);
            const overlayCanvas = canvasRef.current;
            if (overlayCanvas) {
                const s = out.width / draw.dw;
                ctx.drawImage(overlayCanvas, draw.dx, draw.dy, draw.dw, draw.dh, 0, 0, out.width, out.height);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                for (const t of textEntries){
                    const tx = (t.x - draw.dx) * s;
                    const ty = (t.y - draw.dy) * s;
                    const fontSize = t.size * s;
                    ctx.fillStyle = t.color;
                    ctx.font = `${fontSize}px sans-serif`;
                    ctx.fillText(t.text, tx, ty);
                }
            }
            const dataUrl = out.toDataURL('image/jpeg', 0.92);
            setCurrentMedia(dataUrl);
            setTextEntries([]);
            setSelectedTextId(null);
        } catch  {}
    };
    const handleRestore = ()=>{
        setCurrentMedia(mediaUrl);
        setVideoCropConfig(null);
        setRotation(0);
        setZoom(1);
        setIsDrawing(false);
        setStrokes([]);
        setIsTexting(false);
        setTextEntries([]);
        setTextInput('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[10001] bg-black flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 flex items-center justify-between text-white bg-black border-b border-white/10",
                children: isCropping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsCropping(false),
                            className: "cursor-pointer p-2 -ml-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 528,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 527,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold",
                            children: "Cắt ảnh"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSaveCrop,
                            className: "p-2 -mr-2 text-blue-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCheck"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 532,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 531,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                    lineNumber: 526,
                    columnNumber: 11
                }, this) : isDrawing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsDrawing(false);
                                setStrokes([]);
                                const c = canvasRef.current;
                                const ctx = c?.getContext('2d');
                                if (c && ctx) ctx.clearRect(0, 0, c.width, c.height);
                            },
                            className: "cursor-pointer p-2 -ml-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 547,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold",
                            children: "Vẽ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 549,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: applyDrawing,
                            className: "cursor-pointer p-2 -mr-2 text-blue-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCheck"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 551,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                    lineNumber: 536,
                    columnNumber: 11
                }, this) : isTexting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsTexting(false);
                                setTextInput('');
                            },
                            className: "cursor-pointer p-2 -ml-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 563,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 556,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold",
                            children: "Văn bản"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 565,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const container = containerRef.current;
                                if (!container || !textInput.trim() || !displayRect) {
                                    setIsTexting(false);
                                    setTextInput('');
                                    return;
                                }
                                const id = Math.random().toString(36).slice(2);
                                setTextEntries((prev)=>[
                                        ...prev,
                                        {
                                            id,
                                            text: textInput.trim(),
                                            x: Math.round(displayRect.x + displayRect.width / 2),
                                            y: Math.round(displayRect.y + displayRect.height / 2),
                                            color: textColor,
                                            size: textSize
                                        }
                                    ]);
                                setIsTexting(false);
                                setTextInput('');
                            },
                            className: "cursor-pointer p-2 -mr-2 text-blue-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCheck"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 591,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 566,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                    lineNumber: 555,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "cursor-pointer p-2 -ml-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 597,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 596,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                currentMedia !== mediaUrl || videoCropConfig ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRestore,
                                    className: "cursor-pointer px-3 py-1 rounded-full bg-white/10 text-xs hover:bg-white/20",
                                    children: "Khôi phục"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 601,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer p-2",
                                    onClick: async ()=>{
                                        if (mediaType === 'video') {
                                            const poster = await generateVideoPoster();
                                            if (poster) setVideoPoster(poster);
                                        }
                                        setIsCropping(true);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCropSimple"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                        lineNumber: 618,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer p-2",
                                    onClick: ()=>setIsDrawing(true),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPen"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                        lineNumber: 621,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer p-2 font-serif text-xl font-bold",
                                    onClick: ()=>setIsTexting(true),
                                    children: "Aa"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this),
                                textEntries.length > 0 && mediaType === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: applyTextToImage,
                                    className: "cursor-pointer px-3 py-1 rounded-full bg-white/10 text-xs hover:bg-white/20",
                                    children: "Áp dụng văn bản"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 627,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 599,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                    lineNumber: 595,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                lineNumber: 524,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center bg-black overflow-hidden relative w-full h-full",
                ref: containerRef,
                children: isCropping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Cropper"], {
                        ref: cropperRef,
                        src: mediaType === 'video' ? videoPoster || '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia),
                        className: "w-full h-full object-contain",
                        stencilProps: {
                            aspectRatio: undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 646,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                    lineNumber: 645,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full flex items-center justify-center",
                    children: [
                        mediaType === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia),
                            alt: "Editing",
                            fill: true,
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 658,
                            columnNumber: 15
                        }, this) : null,
                        textEntries.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: t.x,
                                    top: t.y,
                                    transform: 'translate(-50%, -50%)',
                                    color: t.color,
                                    fontSize: `${t.size}px`,
                                    fontWeight: 700,
                                    cursor: 'grab',
                                    userSelect: 'none'
                                },
                                onMouseDown: (e)=>{
                                    setDraggingTextId(t.id);
                                    setDragOffset({
                                        x: e.clientX - t.x,
                                        y: e.clientY - t.y
                                    });
                                    setSelectedTextId(t.id);
                                },
                                onMouseMove: (e)=>{
                                    if (draggingTextId !== t.id) return;
                                    const nx = e.clientX - dragOffset.x;
                                    const ny = e.clientY - dragOffset.y;
                                    const cx = displayRect ? Math.min(Math.max(nx, displayRect.x), displayRect.x + displayRect.width) : nx;
                                    const cy = displayRect ? Math.min(Math.max(ny, displayRect.y), displayRect.y + displayRect.height) : ny;
                                    setTextEntries((prev)=>prev.map((it)=>it.id === t.id ? {
                                                ...it,
                                                x: cx,
                                                y: cy
                                            } : it));
                                },
                                onMouseUp: ()=>{
                                    if (draggingTextId === t.id) setDraggingTextId(null);
                                },
                                onTouchStart: (e)=>{
                                    const touch = e.touches[0];
                                    setDraggingTextId(t.id);
                                    setDragOffset({
                                        x: touch.clientX - t.x,
                                        y: touch.clientY - t.y
                                    });
                                    setSelectedTextId(t.id);
                                },
                                onTouchMove: (e)=>{
                                    if (draggingTextId !== t.id) return;
                                    const touch = e.touches[0];
                                    const nx = touch.clientX - dragOffset.x;
                                    const ny = touch.clientY - dragOffset.y;
                                    const cx = displayRect ? Math.min(Math.max(nx, displayRect.x), displayRect.x + displayRect.width) : nx;
                                    const cy = displayRect ? Math.min(Math.max(ny, displayRect.y), displayRect.y + displayRect.height) : ny;
                                    setTextEntries((prev)=>prev.map((it)=>it.id === t.id ? {
                                                ...it,
                                                x: cx,
                                                y: cy
                                            } : it));
                                },
                                onTouchEnd: ()=>{
                                    if (draggingTextId === t.id) setDraggingTextId(null);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative inline-block",
                                    children: [
                                        t.text,
                                        selectedTextId === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setTextEntries((prev)=>prev.filter((it)=>it.id !== t.id));
                                                setSelectedTextId(null);
                                            },
                                            className: "absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow",
                                            title: "Xóa",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                                lineNumber: 729,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                            lineNumber: 720,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 717,
                                    columnNumber: 17
                                }, this)
                            }, t.id, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 661,
                                columnNumber: 15
                            }, this)),
                        mediaType === 'video' && videoCropConfig && videoCropConfig.croppedAreaPixels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (()=>{
                                const { x, y, width: kw, height: kh } = videoCropConfig.croppedAreaPixels;
                                const { width: cw, height: ch } = containerSize;
                                const rotate = videoCropConfig.rotation || 0;
                                // If not rotated, we can play the video cropped
                                if (rotate === 0 && videoMeta && cw > 0 && ch > 0) {
                                    const scale = Math.min(cw / kw, ch / kh);
                                    const dw = kw * scale;
                                    const dh = kh * scale;
                                    const vw = videoMeta.width * scale;
                                    const vh = videoMeta.height * scale;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: dw,
                                            height: dh,
                                            overflow: 'hidden',
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia),
                                                autoPlay: !isMuted,
                                                loop: true,
                                                muted: isMuted,
                                                playsInline: true,
                                                "webkit-playsinline": "true",
                                                onLoadedMetadata: (e)=>{
                                                    const v = e.currentTarget;
                                                    if (!videoMeta || videoMeta.width !== v.videoWidth || videoMeta.height !== v.videoHeight) {
                                                        setVideoMeta({
                                                            width: v.videoWidth,
                                                            height: v.videoHeight
                                                        });
                                                    }
                                                },
                                                ref: croppedVideoRef,
                                                style: {
                                                    position: 'absolute',
                                                    left: -x * scale,
                                                    top: -y * scale,
                                                    width: vw,
                                                    height: vh,
                                                    maxWidth: 'none',
                                                    maxHeight: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                                lineNumber: 760,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const v = croppedVideoRef.current;
                                                    setIsMuted((prev)=>{
                                                        const next = !prev;
                                                        if (v) {
                                                            v.muted = next;
                                                            if (!next) v.play().catch(()=>{});
                                                        }
                                                        return next;
                                                    });
                                                },
                                                className: "absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs border border-white/20",
                                                title: isMuted ? 'Bật âm thanh' : 'Tắt âm thanh',
                                                children: isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                                lineNumber: 784,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                        lineNumber: 752,
                                        columnNumber: 23
                                    }, this);
                                }
                                // Fallback to static poster for rotated video or missing meta
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$advanced$2d$cropper$2f$dist$2f$index$2e$esm$2d$bundler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Cropper"], {
                                    src: videoPoster || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia),
                                    defaultCoordinates: {
                                        left: videoCropConfig.croppedAreaPixels.x,
                                        top: videoCropConfig.croppedAreaPixels.y,
                                        width: videoCropConfig.croppedAreaPixels.width,
                                        height: videoCropConfig.croppedAreaPixels.height
                                    },
                                    stencilProps: {
                                        movable: false,
                                        resizable: false
                                    },
                                    className: "w-full h-full object-contain pointer-events-none",
                                    backgroundClassName: "bg-black/95"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                    lineNumber: 807,
                                    columnNumber: 21
                                }, this);
                            })()
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 737,
                            columnNumber: 15
                        }, this),
                        mediaType === 'video' && !videoCropConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentMedia),
                                crossOrigin: "anonymous",
                                autoPlay: true,
                                loop: true,
                                muted: false,
                                controls: false,
                                ref: videoRef,
                                onLoadedMetadata: ()=>{
                                    const container = containerRef.current;
                                    const v = videoRef.current;
                                    if (!container || !v) return;
                                    setVideoMeta({
                                        width: v.videoWidth,
                                        height: v.videoHeight
                                    });
                                    computeRect(container.clientWidth, container.clientHeight, v.videoWidth, v.videoHeight);
                                    generateVideoPoster().then((p)=>{
                                        if (p) setVideoPoster(p);
                                    });
                                },
                                className: "max-w-full max-h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 828,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 827,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "absolute inset-0",
                            style: {
                                pointerEvents: isDrawing ? 'auto' : 'none'
                            },
                            onMouseDown: startDraw,
                            onMouseMove: moveDraw,
                            onMouseUp: endDraw,
                            onMouseLeave: endDraw,
                            onTouchStart: startDraw,
                            onTouchMove: moveDraw,
                            onTouchEnd: endDraw
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 850,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                    lineNumber: 656,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this),
            !isCropping && !isDrawing && !isTexting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 pb-8 flex flex-col gap-4 border-t border-white/10 bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center px-4 py-2 border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: `Nhập mô tả gửi ${chatName || '...'}`,
                                className: "w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 871,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 870,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 869,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsHD(!isHD),
                                className: `cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${isHD ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                children: [
                                    "HD",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] leading-none",
                                        children: "▼"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                        lineNumber: 889,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 882,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelected(!selected),
                                        className: "flex items-center gap-2 text-white text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `cursor-pointer w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected ? 'bg-blue-500 border-blue-500' : 'border-white/60'}`,
                                                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2.5 h-2.5 bg-white rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 32
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Chọn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                                lineNumber: 901,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                        lineNumber: 893,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: async ()=>{
                                            if (mediaType === 'image') {
                                                const hasStrokes = strokes.length > 0;
                                                const hasText = textEntries.length > 0;
                                                if (hasStrokes || hasText) {
                                                    await applyTextToImage();
                                                }
                                            }
                                            onSend?.({
                                                description,
                                                isHD,
                                                selected,
                                                imageDataUrl: mediaType === 'image' ? currentMedia : undefined,
                                                videoCropConfig
                                            });
                                            onClose();
                                        },
                                        className: "cursor-pointer w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoSend"], {
                                            className: "w-5 h-5 ml-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                            lineNumber: 924,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                        lineNumber: 904,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 892,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 881,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                lineNumber: 868,
                columnNumber: 9
            }, this),
            isTexting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 pb-8 flex flex-col gap-4 border-t border-white/10 bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center px-4 py-2 border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nhập văn bản",
                                className: "w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm",
                                value: textInput,
                                onChange: (e)=>setTextInput(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 934,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 933,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 932,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                            '#ffffff',
                            '#000000',
                            '#ff3b30',
                            '#ff9500',
                            '#ffcc00',
                            '#34c759',
                            '#5ac8fa',
                            '#007aff',
                            '#5856d6',
                            '#af52de'
                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTextColor(c),
                                className: `w-8 h-8 rounded-full border ${textColor === c ? 'ring-2 ring-white' : 'border-white/30'}`,
                                style: {
                                    backgroundColor: c
                                }
                            }, c, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 956,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 943,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-white",
                                children: "Kích thước"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 965,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 12,
                                max: 48,
                                step: 1,
                                value: textSize,
                                onChange: (e)=>setTextSize(Number(e.target.value)),
                                className: "flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 966,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 964,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                lineNumber: 931,
                columnNumber: 9
            }, this),
            isDrawing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 pb-8 flex flex-col gap-4 border-t border-white/10 bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setConstrainToMedia((v)=>!v),
                            className: `px-3 py-1.5 rounded-full text-xs font-medium ${constrainToMedia ? 'bg-white text-black' : 'bg-white/10 text-white'}`,
                            children: constrainToMedia ? 'Chỉ vẽ trong ảnh/video' : 'Vẽ toàn khung'
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                            lineNumber: 981,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 980,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                            '#ff3b30',
                            '#ff9500',
                            '#ffcc00',
                            '#34c759',
                            '#30d158',
                            '#5ac8fa',
                            '#007aff',
                            '#5856d6',
                            '#af52de',
                            '#ffffff',
                            '#000000'
                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setBrushColor(c),
                                className: `w-8 h-8 rounded-full border ${brushColor === c ? 'ring-2 ring-white' : 'border-white/30'}`,
                                style: {
                                    backgroundColor: c
                                }
                            }, c, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 1004,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 990,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-white",
                                children: "Độ đậm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 1013,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 2,
                                max: 24,
                                step: 1,
                                value: brushSize,
                                onChange: (e)=>setBrushSize(Number(e.target.value)),
                                className: "flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                                lineNumber: 1014,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                        lineNumber: 1012,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
                lineNumber: 979,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/MediaEditor.tsx",
        lineNumber: 522,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/MediaPreviewModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>MediaPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MediaEditor.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function MediaPreviewModal({ media, chatName, isGroup, onClose, roomId, onReply, onShare, onShareMessage, onJumpToMessage }) {
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>groups.flatMap((g)=>g.items), [
        groups
    ]);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(media);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const openedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showThumbnails, setShowThumbnails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrent(media);
        if (media) openedAtRef.current = Date.now();
        setZoom(1);
        setPosition({
            x: 0,
            y: 0
        });
    }, [
        media
    ]);
    const handleMouseDown = (e)=>{
        if (zoom <= 1) return;
        setIsDragging(true);
        dragStartRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
        e.preventDefault(); // Prevent text selection or image drag default
    };
    const handleMouseMove = (e)=>{
        if (!isDragging || !dragStartRef.current || zoom <= 1) return;
        setPosition({
            x: e.clientX - dragStartRef.current.x,
            y: e.clientY - dragStartRef.current.y
        });
    };
    const handleMouseUp = ()=>{
        setIsDragging(false);
        dragStartRef.current = null;
    };
    const handleTouchStart = (e)=>{
        if (zoom <= 1) return;
        setIsDragging(true);
        const touch = e.touches[0];
        dragStartRef.current = {
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        };
    };
    const handleTouchMove = (e)=>{
        if (!isDragging || !dragStartRef.current || zoom <= 1) return;
        const touch = e.touches[0];
        setPosition({
            x: touch.clientX - dragStartRef.current.x,
            y: touch.clientY - dragStartRef.current.y
        });
    };
    const handleTouchEnd = ()=>{
        setIsDragging(false);
        dragStartRef.current = null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchAll = async ()=>{
            if (!roomId) return;
            try {
                const res = await fetch('/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'readAssets',
                        roomId,
                        assetType: 'media',
                        limit: 5000
                    })
                });
                const json = await res.json();
                const gs = Array.isArray(json?.groups) ? json.groups : [];
                setGroups(gs);
            } catch  {}
        };
        fetchAll();
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setZoom(1);
        setPosition({
            x: 0,
            y: 0
        });
    }, [
        current?.url
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!current) return;
        const el = itemRefs.current[current.url];
        const list = listRef.current;
        if (el && list) {
            try {
                const isMobile = window.innerWidth < 768; // Simple check for mobile/tablet layout
                if (isMobile) {
                    // Horizontal scroll for mobile/bottom list
                    const targetLeft = el.offsetLeft - (list.clientWidth / 2 - el.clientWidth / 2);
                    list.scrollTo({
                        left: Math.max(0, targetLeft),
                        behavior: 'smooth'
                    });
                } else {
                    // Vertical scroll for desktop/sidebar list
                    const targetTop = el.offsetTop - (list.clientHeight / 2 - el.clientHeight / 2);
                    list.scrollTo({
                        top: Math.max(0, targetTop),
                        behavior: 'smooth'
                    });
                }
            } catch  {}
        }
    }, [
        current,
        items,
        showThumbnails
    ]);
    const [showMoreMenu, setShowMoreMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const moreMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
                setShowMoreMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleDownload = async ()=>{
        if (!current?.url) return;
        try {
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(current.url, true));
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = current.url.split('/').pop() || 'download';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err) {
            window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(current.url, true), '_blank');
        }
        setShowMoreMenu(false);
    };
    const handleShareFunc = ()=>{
        if (!current?.url) return;
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(current.url, true);
        if (onShareMessage && roomId) {
            const msg = {
                _id: current.id || Date.now().toString(),
                roomId: roomId,
                sender: 'unknown',
                type: current.type,
                fileUrl: current.url,
                timestamp: Date.now()
            };
            onShareMessage(msg);
            setShowMoreMenu(false);
            return;
        }
        if (onShare) onShare(url, current?.id);
        else if (navigator.share) {
            navigator.share({
                title: chatName || 'Media',
                url
            }).catch(()=>{});
        } else {
            try {
                navigator.clipboard.writeText(url);
            } catch  {}
        }
        setShowMoreMenu(false);
    };
    const handleCopyLink = ()=>{
        if (!current?.url) return;
        try {
            navigator.clipboard.writeText((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(current.url, true));
        } catch  {}
        setShowMoreMenu(false);
    };
    const handleEdit = ()=>{
        setIsEditing(true);
        setShowMoreMenu(false);
    };
    if (!current) return null;
    if (isEditing && current) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            mediaUrl: current.url,
            mediaType: current.type,
            chatName: chatName,
            onClose: ()=>setIsEditing(false),
            onSend: (data)=>{
                try {
                    const detail = {
                        type: current.type,
                        imageDataUrl: data?.videoCropConfig ? undefined : data?.imageDataUrl ?? undefined,
                        originalUrl: current.url,
                        videoCropConfig: data?.videoCropConfig ?? undefined
                    };
                    const ev = new CustomEvent('sendEditedMedia', {
                        detail
                    });
                    window.dispatchEvent(ev);
                } catch  {}
                setIsEditing(false);
                onClose();
            }
        }, void 0, false, {
            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
            lineNumber: 240,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center",
        onClick: (e)=>{
            if (e.target !== e.currentTarget) return;
            const sinceOpen = Date.now() - openedAtRef.current;
            if (sinceOpen < 200) return;
            onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-6xl mx-auto",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-3 text-white text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg sm:text-xl font-semibold truncate",
                        children: chatName || (isGroup ? 'Nhóm chat' : 'Cuộc trò chuyện')
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center min-h-screen md:py-16 py-12 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-full max-h-full overflow-hidden flex items-center justify-center",
                        onMouseDown: handleMouseDown,
                        onMouseMove: handleMouseMove,
                        onMouseUp: handleMouseUp,
                        onMouseLeave: handleMouseUp,
                        onTouchStart: handleTouchStart,
                        onTouchMove: handleTouchMove,
                        onTouchEnd: handleTouchEnd,
                        style: {
                            cursor: zoom > 1 ? isDragging ? 'grabbing' : 'grab' : 'default'
                        },
                        children: current.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in zoom-in-95 duration-300",
                            style: {
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                                transformOrigin: 'center center',
                                transition: isDragging ? 'none' : 'transform 0.2s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(current.url),
                                alt: "Xem ảnh lớn",
                                width: 1600,
                                height: 1200,
                                className: "max-h-[70vh] w-auto max-w-full object-contain rounded-md shadow-2xl select-none pointer-events-none",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                lineNumber: 301,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 293,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in duration-300 rounded-md overflow-hidden shadow-2xl",
                            style: {
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                                transformOrigin: 'center center',
                                transition: isDragging ? 'none' : 'transform 0.2s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(current.url),
                                controls: zoom <= 1,
                                autoPlay: true,
                                loop: true,
                                muted: false,
                                className: "max-h-[70vh] w-auto max-w-full rounded-md select-none",
                                playsInline: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                lineNumber: 319,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 311,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                items.length > 0 && showThumbnails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex absolute right-36 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg",
                                    onClick: ()=>{
                                        const el = listRef.current;
                                        if (el) el.scrollBy({
                                            top: -300,
                                            behavior: 'smooth'
                                        });
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronUp"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg",
                                    onClick: ()=>{
                                        const el = listRef.current;
                                        if (el) el.scrollBy({
                                            top: 300,
                                            behavior: 'smooth'
                                        });
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronDown"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 352,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg backdrop-blur-sm",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    const currentIndex = items.findIndex((it)=>it.url === current?.url);
                                    if (currentIndex > 0) {
                                        const prev = items[currentIndex - 1];
                                        setCurrent({
                                            id: prev.id,
                                            url: prev.url,
                                            type: prev.type
                                        });
                                    }
                                },
                                style: {
                                    visibility: items.findIndex((it)=>it.url === current?.url) > 0 ? 'visible' : 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                lineNumber: 357,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg backdrop-blur-sm",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    const currentIndex = items.findIndex((it)=>it.url === current?.url);
                                    if (currentIndex < items.length - 1) {
                                        const next = items[currentIndex + 1];
                                        setCurrent({
                                            id: next.id,
                                            url: next.url,
                                            type: next.type
                                        });
                                    }
                                },
                                style: {
                                    visibility: items.findIndex((it)=>it.url === current?.url) < items.length - 1 ? 'visible' : 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                lineNumber: 373,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 right-0 top-0 z-20 px-4 sm:px-6 py-2 bg-black/40 backdrop-blur-sm border-t border-white/10 text-white flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "md:hidden p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95",
                                    title: "Đóng",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium truncate md:max-w-[40vw] max-w-[50vw] text-center md:text-left",
                                    children: chatName || (isGroup ? 'Nhóm chat' : 'Cuộc trò chuyện')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer inline-flex p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        handleDownload();
                                    },
                                    title: "Tải xuống",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiDownload"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: moreMenuRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMoreMenu(!showMoreMenu),
                                            className: "p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95",
                                            title: "Thêm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiDotsHorizontal"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this),
                                        showMoreMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setZoom((z)=>Math.min(2.5, +(z + 0.2).toFixed(2))),
                                                    className: "cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMagnifyingGlassPlus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Phóng to"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setZoom((z)=>Math.max(0.5, +(z - 0.2).toFixed(2))),
                                                    className: "cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMagnifyingGlassMinus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Thu nhỏ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleEdit,
                                                    className: "cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPencil"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Chỉnh sửa ảnh"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleDownload,
                                                    className: "cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiSave"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Lưu về máy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleShareFunc,
                                                    className: "cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiShare"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Chia sẻ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCopyLink,
                                                    className: "cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiDuplicate"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "hidden md:inline-flex p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95",
                                    title: "Đóng",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 right-0 bottom-0 z-20 flex flex-col items-center justify-end bg-black/60 backdrop-blur-sm border-t border-white/10 pb-2",
                    children: [
                        groups.length > 0 && showThumbnails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full overflow-x-auto no-scrollbar py-2",
                            ref: listRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center justify-center gap-2 px-2 min-w-max mx-auto",
                                children: groups.map((g, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row gap-2",
                                        children: g.items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: (el)=>{
                                                    itemRefs.current[it.url] = el;
                                                },
                                                className: `relative rounded-md overflow-hidden border ${current && current.url === it.url ? 'border-blue-400' : 'border-transparent'} cursor-pointer w-16 h-16 shrink-0`,
                                                onClick: ()=>setCurrent({
                                                        id: it.id,
                                                        url: it.url,
                                                        type: it.type
                                                    }),
                                                children: [
                                                    it.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(it.url),
                                                        alt: "thumb",
                                                        width: 120,
                                                        height: 120,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(it.url),
                                                        className: "w-full h-full object-cover",
                                                        preload: "metadata"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 hover:bg-black/30 transition-opacity duration-300 flex items-center justify-center",
                                                        children: it.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPlay"], {
                                                            className: "w-6 h-6 text-white drop-shadow-lg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 51
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, it.id, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                                lineNumber: 494,
                                                columnNumber: 23
                                            }, this))
                                    }, `${g.dateLabel}-${gi}`, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 492,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                lineNumber: 490,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between w-full gap-4 px-5 sm:px-6 py-2 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `cursor-pointer p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95 ${showThumbnails ? 'bg-white/30' : ''}`,
                                        title: "Hiện/Ẩn danh sách",
                                        onClick: ()=>setShowThumbnails(!showThumbnails),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPhotograph"], {
                                            className: "w-6 h-6 md:w-5 md:h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95 ",
                                    title: "Chia sẻ",
                                    onClick: handleShareFunc,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegShareFromSquare"], {
                                        className: "w-6 h-6 md:w-4 md:h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
            lineNumber: 273,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/MediaPreviewModal.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/ChatHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
// React Icons - chuẩn Zalo, đẹp, nhẹ
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ChatHeader({ chatName, isGroup, memberCount, showPopup, onTogglePopup, onOpenMembers, showSearchSidebar, onToggleSearchSidebar, avatar, onBackFromChat, presenceText, presenceOnline, onVoiceCall, onVideoCall, isMobile = false, isSearchActive = false, initialKeyword = null, onSearchTermChange, onSearchFocus, searchInputRef }) {
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localSearchTerm, setLocalSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const hasAutoSearchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastInitialKeywordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const manualCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setImgError(false);
    }, [
        avatar
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const kw = (initialKeyword || '').trim();
        if (!kw) return;
        setLocalSearchTerm(kw);
        if (isMobile && isSearchActive) {
            if (lastInitialKeywordRef.current === kw && hasAutoSearchedRef.current) return;
            hasAutoSearchedRef.current = true;
            lastInitialKeywordRef.current = kw;
            setTimeout(()=>{
                searchInputRef?.current?.focus?.();
            }, 100);
            onSearchTermChange?.(kw);
        }
    }, [
        initialKeyword,
        isMobile,
        isSearchActive,
        onSearchTermChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMobile) return;
        if (isSearchActive) return;
        if (manualCloseRef.current) {
            manualCloseRef.current = false;
            hasAutoSearchedRef.current = false;
            lastInitialKeywordRef.current = null;
        // setLocalSearchTerm('');
        // onSearchTermChange?.('');
        }
    }, [
        isSearchActive,
        isMobile,
        onSearchTermChange
    ]);
    // Mobile: Show inline search bar when active
    if (isMobile && isSearchActive) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 px-2 py-2 bg-white border-b border-gray-200 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (isSearchActive) {
                            // Nếu đang tìm kiếm: Chỉ thoát chế độ tìm kiếm
                            manualCloseRef.current = true;
                            setLocalSearchTerm('');
                            onSearchTermChange?.('');
                            onToggleSearchSidebar?.();
                        } else {
                            // Nếu KHÔNG tìm kiếm: Gọi hàm quay lại danh sách chat
                            onBackFromChat?.();
                        }
                    },
                    className: "p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0",
                    title: "Quay lại",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiArrowLeft"], {
                        className: "w-5 h-5 text-gray-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiSearch"], {
                    className: "w-5 h-5 text-gray-500 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchInputRef,
                            type: "text",
                            value: localSearchTerm,
                            onChange: (e)=>{
                                setLocalSearchTerm(e.target.value);
                                onSearchTermChange?.(e.target.value);
                            },
                            onFocus: onSearchFocus,
                            placeholder: "Tìm kiếm...",
                            className: "w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        localSearchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setLocalSearchTerm('');
                                onSearchTermChange?.('');
                            },
                            className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiXMark"], {
                                className: "w-4 h-4 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    // Desktop/Normal header
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center cursor-pointer justify-between px-2 bg-blue-400  md:bg-white border-b border-gray-200 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-1 min-w-0",
                children: [
                    onBackFromChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBackFromChat,
                        className: "p-2 rounded-full   transition-colors lg:hidden cursor-pointer",
                        title: "Quay lại",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiArrowLeft"], {
                            className: "w-5 h-5 text-white md:text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
            w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md overflow-hidden ring-2 ring-white
            ${isGroup ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-gray-400 to-gray-600'}
          `,
                                children: avatar && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(avatar),
                                    alt: chatName,
                                    width: 40,
                                    height: 40,
                                    className: "w-full h-full object-cover",
                                    onError: ()=>setImgError(true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo/avata.webp",
                                    alt: chatName,
                                    width: 40,
                                    height: 40,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white shadow-sm ${presenceOnline ? 'bg-green-500' : 'bg-gray-400'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenMembers,
                        className: " cursor-pointer text-left md:hover:bg-gray-50 rounded-xl px-3 py-2 -ml-2 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-semibold text-white md:text-gray-900 truncate w-[150px] md:w-full md:max-w-[300px] text-base",
                                children: chatName
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white md:text-gray-500 flex items-center gap-1 mt-0.5",
                                children: isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUserGroup"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        memberCount,
                                        " thành viên"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: presenceText || 'Đang hoạt động'
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            typeof onVoiceCall === 'function' && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onVoiceCall,
                                className: "p-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-600 md:hover:bg-gray-100 text-white md:text-gray-600",
                                title: "Gọi thoại",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiPhone"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            typeof onVideoCall === 'function' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onVideoCall,
                                className: "p-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-600 md:hover:bg-gray-100 text-white md:text-gray-600",
                                title: "Gọi video",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiVideoOn"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (isMobile) {
                                // Mobile: Toggle inline search
                                if (onToggleSearchSidebar) onToggleSearchSidebar();
                            } else {
                                // Desktop: Toggle sidebar
                                if (showPopup) onTogglePopup();
                                if (onToggleSearchSidebar) onToggleSearchSidebar();
                            }
                        },
                        className: `
            p-2 rounded-full text-white md:text-gray-600 cursor-pointer transition-all duration-200
            ${showSearchSidebar || isSearchActive ? 'bg-blue-100 text-blue-600 shadow-sm' : 'hover:bg-gray-600 md:hover:bg-gray-100 text-gray-600'}
          `,
                        title: "Tìm kiếm tin nhắn",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiSearch"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (showSearchSidebar) onToggleSearchSidebar();
                            onTogglePopup();
                        },
                        className: `
            p-2 rounded-full text-white md:text-gray-600 cursor-pointer transition-all duration-200 relative
            ${showPopup ? 'bg-blue-100 text-blue-600 shadow-sm' : 'hover:bg-gray-600 md:hover:bg-gray-100 text-gray-600'}
          `,
                        title: "Thông tin trò chuyện",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            showPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                                lineNumber: 292,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/ChatHeader.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>PinnedMessagesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PinnedMessageListModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/PinnedMessageListModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function PinnedMessagesSection({ allPinnedMessages, showPinnedList, onOpenPinnedList, onClosePinnedList, onJumpToMessage, getSenderName, onUnpinMessage, onLoadMorePinned, pinnedHasMore, pinnedLoading, isSidebarOpen }) {
    const isEmpty = allPinnedMessages.length === 0 && !showPinnedList;
    const isVideoFile = (name)=>/\.(mp4|webm|mov|mkv|avi)$/i.test(String(name || ''));
    const isImageFile = (name)=>/\.(jpg|jpeg|png|gif|webp|bmp|svg|avif)$/i.test(String(name || ''));
    const renderPreview = (msg)=>{
        const url = String(msg.fileUrl || msg.previewUrl || '');
        const isVid = msg.type === 'video' || isVideoFile(msg.fileName) || isVideoFile(url);
        const isImg = msg.type === 'image' || isImageFile(msg.fileName) || isImageFile(url);
        if (isImg) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                alt: "Ảnh",
                width: 64,
                height: 64,
                className: "w-16 h-16 object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                lineNumber: 58,
                columnNumber: 14
            }, this);
        }
        if (isVid) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-16 h-16 bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                        className: "w-full h-full object-cover",
                        muted: true,
                        playsInline: true,
                        preload: "metadata"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-full bg-white/80 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-4 h-4 text-gray-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 5v14l11-7z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this);
        }
        const label = msg.pinnedTitle || (msg.type === 'file' ? msg.fileName || 'File' : msg.type === 'sticker' ? 'Sticker' : msg.type === 'poll' ? 'Bình chọn' : msg.type === 'reminder' ? 'Lịch hẹn' : msg.content || 'Tin nhắn');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 max-w-[12rem] px-2 py-2 text-xs text-gray-700 line-clamp-2",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
            lineNumber: 85,
            columnNumber: 12
        }, this);
    };
    const renderMiniPreview = (msg)=>{
        const url = String(msg.fileUrl || msg.previewUrl || '');
        const isVid = msg.type === 'video' || isVideoFile(msg.fileName) || isVideoFile(url);
        const isImg = msg.type === 'image' || isImageFile(msg.fileName) || isImageFile(url);
        if (isImg) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                alt: "Ảnh",
                width: 40,
                height: 40,
                className: "w-10 h-10 rounded-lg object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this);
        }
        if (isVid) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-10 h-10 rounded-lg overflow-hidden bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                        className: "w-full h-full object-cover",
                        muted: true,
                        playsInline: true,
                        preload: "metadata"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 rounded-full bg-white/80 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-3.5 h-3.5 text-gray-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 5v14l11-7z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    const getPinnedLabel = (msg)=>{
        if (msg.pinnedTitle && msg.pinnedTitle.trim()) return msg.pinnedTitle.trim();
        const content = msg.content?.trim();
        if (msg.type === 'image') return '[Hình ảnh]';
        if (msg.type === 'video') return '[Video]';
        if (msg.type === 'file') return '[Tệp]';
        if (msg.type === 'sticker') return '[Sticker]';
        if (msg.type === 'poll') return '[Bình chọn]';
        if (msg.type === 'reminder') return '[Lịch hẹn]';
        return content || '[Tin nhắn]';
    };
    const firstMsg = allPinnedMessages[0];
    const typeLabel = firstMsg ? getPinnedLabel(firstMsg) : '';
    const senderName = firstMsg ? getSenderName(firstMsg.sender) : '';
    const extraCount = allPinnedMessages.length > 1 ? allPinnedMessages.length - 1 : 0;
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openOptions, setOpenOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const filteredPinnedMessages = allPinnedMessages.filter((msg)=>{
        const rawContent = String(msg.content || '');
        const rawTitle = String(msg.pinnedTitle || '');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(rawContent, searchQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(rawTitle, searchQuery);
    });
    const [optionsPosition, setOptionsPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSidebarOpen) {
            setOpenDropdown(false);
            setOpenOptions(null);
        }
    }, [
        isSidebarOpen
    ]);
    const handleOpenOptions = (e, id)=>{
        e.stopPropagation();
        const buttonRect = e.currentTarget.getBoundingClientRect();
        // Tính toán vị trí hiển thị menu (ưu tiên hiển thị bên trái nút bấm để không bị tràn màn hình)
        setOptionsPosition({
            top: buttonRect.bottom + window.scrollY + 5,
            left: buttonRect.right + window.scrollX - 128
        });
        setOpenOptions(openOptions === id ? null : id);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const target = e.target;
            if (openDropdown && dropdownRef.current && !dropdownRef.current.contains(target)) {
                // Kiểm tra xem click có phải vào nút option hay menu option không
                // Nếu click vào menu option đang mở thì không đóng dropdown danh sách ghim
                if (openOptions && optionsRef.current && optionsRef.current.contains(target)) {
                    return;
                }
                // Nếu click ra ngoài dropdown danh sách ghim và không phải click vào menu option
                setOpenDropdown(false);
            }
            if (openOptions && optionsRef.current && !optionsRef.current.contains(target)) {
                setOpenOptions(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return ()=>document.removeEventListener('mousedown', handler);
    }, [
        openDropdown,
        openOptions
    ]);
    if (isEmpty) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            allPinnedMessages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group flex items-center justify-between gap-2 px-2 py-1 bg-white border border-gray-200 rounded-[0.5rem] shadow-sm hover:shadow-md hover:border-gray-300 select-none m-2 sm:m-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-1 min-w-0 cursor-pointer hover:bg-gray-50 rounded-lg p-1 transition-colors",
                        onClick: ()=>firstMsg && onJumpToMessage(firstMsg._id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 border border-blue-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChatBubbleLeftRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-0 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[0.875rem] md:text-[1rem] font-semibold text-gray-900 truncate",
                                        children: typeLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[0.875rem] md:text-[1rem] text-gray-600 truncate w-[10rem] md:w-[20rem]",
                                        children: senderName ? `Tin nhắn của ${senderName}` : 'Tin nhắn đã ghim'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            !isSidebarOpen && firstMsg && renderMiniPreview(firstMsg),
                            !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600",
                                        onClick: (e)=>handleOpenOptions(e, 'main-pinned'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    openOptions === 'main-pinned' && typeof document !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: optionsRef,
                                        style: {
                                            top: optionsPosition.top,
                                            left: optionsPosition.left
                                        },
                                        className: "fixed z-[9999] w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                if (firstMsg) onUnpinMessage(firstMsg);
                                                setOpenOptions(null);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiTrash"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 25
                                                }, this),
                                                "Bỏ ghim"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                            lineNumber: 219,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 214,
                                        columnNumber: 21
                                    }, this), document.body)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this),
                            !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-px bg-gray-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 236,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1.5 rounded-full border border-gray-300 bg-gray-50 text-gray-800 flex items-center gap-1.5 cursor-pointer",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    if (extraCount > 0) setOpenDropdown((v)=>!v);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        children: extraCount > 0 ? `+${extraCount}` : '+0'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronDown"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            openDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-40 bg-black/30",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setOpenDropdown(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this),
                            openDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: dropdownRef,
                                className: "absolute left-3 right-3 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-b border-gray-200 flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-semibold text-gray-900",
                                                        children: [
                                                            "Danh sách ghim (",
                                                            allPinnedMessages.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-sm font-medium text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setOpenDropdown(false);
                                                        },
                                                        children: [
                                                            "Thu gọn",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronUp"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMagnifyingGlass"], {
                                                            className: "h-4 w-4 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "block w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                                        placeholder: "Tìm kiếm ghim...",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        onClick: (e)=>e.stopPropagation()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[20rem] custom-scrollbar overflow-auto divide-y divide-gray-100",
                                        children: [
                                            filteredPinnedMessages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-8 text-center text-sm text-gray-500",
                                                children: "Không tìm thấy tin nhắn ghim nào"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                lineNumber: 293,
                                                columnNumber: 21
                                            }, this),
                                            filteredPinnedMessages.map((msg)=>{
                                                let label = getPinnedLabel(msg);
                                                // Nếu là tin nhắn text và không có tiêu đề riêng, đặt label là [Tin nhắn]
                                                // để dòng nội dung (msg.content) được hiển thị ở dòng dưới
                                                if (!msg.pinnedTitle && msg.type === 'text' && msg.content) {
                                                    label = '[Tin nhắn]';
                                                }
                                                const name = getSenderName(msg.sender);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-2xl",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setOpenDropdown(false);
                                                        onJumpToMessage(String(msg._id));
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 border border-blue-200 shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChatBubbleLeftRight"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-semibold text-gray-900 truncate",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 27
                                                                }, this),
                                                                msg.content && msg.content !== label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-700 truncate",
                                                                    children: msg.content
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500 truncate",
                                                                    children: name ? `Tin nhắn của ${name}` : 'Tin nhắn'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 25
                                                        }, this),
                                                        renderMiniPreview(msg),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "cursor-pointer p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600",
                                                                    onClick: (e)=>handleOpenOptions(e, String(msg._id)),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 27
                                                                }, this),
                                                                openOptions === String(msg._id) && typeof document !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    ref: optionsRef,
                                                                    style: {
                                                                        top: optionsPosition.top,
                                                                        left: optionsPosition.left
                                                                    },
                                                                    className: "fixed z-[9999] w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            onUnpinMessage(msg);
                                                                            setOpenOptions(null);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiTrash"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                                lineNumber: 352,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            "Bỏ ghim"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 31
                                                                }, this), document.body)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, String(msg._id), true, {
                                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            showPinnedList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PinnedMessageListModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                messages: allPinnedMessages,
                onClose: onClosePinnedList,
                onJumpToMessage: onJumpToMessage,
                onGetSenderName: getSenderName,
                hasMore: pinnedHasMore,
                onLoadMore: onLoadMorePinned,
                loadingMore: pinnedLoading,
                onGetContentDisplay: (msg)=>{
                    if (msg.type === 'poll') return `Bình chọn: ${msg.pollQuestion || msg.content || ''}`;
                    if (msg.type === 'reminder') return `Lịch hẹn: ${msg.content || ''}`;
                    if (msg.type === 'image') return 'Ảnh';
                    if (msg.type === 'video') return 'Video';
                    if (msg.type === 'file') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl, true),
                        download: msg.fileName || 'download',
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl max-w-[70vw] sm:max-w-[18rem] shadow-sm hover:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-blue-600 rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineDocumentText"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                    lineNumber: 393,
                                    columnNumber: 21
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 392,
                                columnNumber: 19
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800 truncate",
                                        children: msg.fileName || 'Tệp đính kèm'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 397,
                                        columnNumber: 21
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 truncate",
                                        children: "Nhấn để tải xuống"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                        lineNumber: 398,
                                        columnNumber: 21
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                                lineNumber: 396,
                                columnNumber: 19
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                        lineNumber: 385,
                        columnNumber: 17
                    }, void 0);
                    if (msg.type === 'sticker') return 'Sticker';
                    return msg.content?.trim() || '[Tin nhắn]';
                },
                onUnpinMessage: onUnpinMessage
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx",
                lineNumber: 370,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/(chatPopup)/EmojiFB.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmojiFB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getFbEmojiUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getFbEmojiUrl.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function EmojiFB({ unicode, size = 32 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getFbEmojiUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEmojiUrl"])(unicode),
        alt: "emoji",
        width: size,
        height: size,
        unoptimized: true
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/EmojiFB.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmojiStickerPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$EmojiFB$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/EmojiFB.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fbEmojis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/fbEmojis.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function EmojiStickerPicker({ showEmojiPicker, pickerTab, setPickerTab, onEmojiClick, stickers, onSelectSticker }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pickerHeight, setPickerHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(300);
    // Resize để Emoji FB responsive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            const h = entries[0].contentRect.height;
            if (h > 50) {
                setPickerHeight(h - 10);
            }
        });
        resizeObserver.observe(containerRef.current);
        return ()=>resizeObserver.disconnect();
    }, []);
    if (!showEmojiPicker) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-full left-0 right-0 sm:right-auto mb-2 bg-white shadow-xl border border-gray-200 rounded-xl z-50 w-full sm:w-80 lg:w-[28rem] xl:w-[32rem] max-w-[90vw] flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `flex-1 p-2 sm:p-3 cursor-pointer text-xs sm:text-sm font-medium ${pickerTab === 'emoji' ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-50'}`,
                    onClick: ()=>setPickerTab('emoji'),
                    children: "Emoji"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex-1 overflow-y-auto custom-scrollbar min-h-[18rem] max-h-[70vh] p-2",
                children: pickerTab === 'emoji' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: pickerHeight
                    },
                    className: "grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fbEmojis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FB_EMOJIS"].map((unicode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onEmojiClick(unicode),
                            className: "cursor-pointer flex items-center justify-center rounded hover:bg-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$EmojiFB$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                unicode: unicode,
                                size: 36
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                                lineNumber: 75,
                                columnNumber: 17
                            }, this)
                        }, unicode, false, {
                            fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2",
                    children: stickers.map((url, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            width: 40,
                            height: 40,
                            src: url,
                            className: "w-full h-16 object-contain cursor-pointer hover:bg-gray-100 rounded p-1",
                            onClick: ()=>onSelectSticker(url),
                            alt: "sticker"
                        }, idx, false, {
                            fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/ReplyBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReplyBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ReplyBanner({ replyingTo, getSenderName, onCancel }) {
    if (!replyingTo) return null;
    const url = String(replyingTo.fileUrl || replyingTo.previewUrl || '');
    const isVid = replyingTo.type === 'video' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(replyingTo.fileName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(url);
    const isImg = replyingTo.type === 'image' || /\.(jpg|jpeg|png|gif|webp|bmp|svg|avif)$/i.test(String(replyingTo.fileName || url || ''));
    const contentLabel = replyingTo.isRecalled ? 'đã thu hồi tin nhắn' : replyingTo.type === 'file' ? replyingTo.fileName || '[File]' : replyingTo.type === 'image' ? '[Ảnh]' : replyingTo.type === 'video' ? '[Video]' : replyingTo.type === 'sticker' ? '[Sticker]' : replyingTo.type === 'reminder' ? replyingTo.content || '[Nhắc nhở]' : replyingTo.content || 'Tin nhắn';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " bottom-full left-0 right-0 p-3 bg-gray-200 rounded-t-xl flex justify-between items-center text-sm text-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l-2 border-blue-400 pl-2 max-w-[15rem] sm:max-w-[80rem] overflow-hidden ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm  text-black ",
                        children: [
                            "Trả lời ",
                            getSenderName(replyingTo.sender)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-1",
                        children: [
                            !replyingTo.isRecalled && (isImg || isVid) && (isImg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                                alt: "Ảnh",
                                width: 40,
                                height: 40,
                                className: "w-10 h-10 rounded-md object-cover border border-blue-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-10 h-10 bg-black rounded-md overflow-hidden border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                                        className: "w-full h-full object-cover",
                                        muted: true,
                                        playsInline: true,
                                        preload: "metadata"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 rounded-full bg-white/80 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                className: "w-3.5 h-3.5 text-gray-800",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 5v14l11-7z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-700 w-full",
                                children: contentLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onCancel,
                className: "cursor-pointer text-gray-500 hover:text-gray-700 p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-5 h-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/ReplyBanner.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/MentionMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MentionMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function MentionMenu({ showMentionMenu, mentionSuggestions, selectedMentionIndex, mentionMenuRef, onSelectMention }) {
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedMentionIndex >= 0 && itemRefs.current[selectedMentionIndex]) {
            itemRefs.current[selectedMentionIndex]?.scrollIntoView({
                block: 'nearest'
            });
        }
    }, [
        selectedMentionIndex
    ]);
    if (!showMentionMenu || mentionSuggestions.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mentionMenuRef,
        onMouseDown: (e)=>e.preventDefault(),
        className: "absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-60 overflow-hidden z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-b bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-600 font-medium",
                    children: "Chọn người để đề cập"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-48 overflow-y-auto custom-scrollbar",
                children: mentionSuggestions.map((user, index)=>{
                    const member = user;
                    const userId = member.id ?? user._id;
                    const userName = user.name || 'User';
                    const userAvatar = user.avatar;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "button",
                        ref: (el)=>{
                            itemRefs.current[index] = el;
                        },
                        onClick: ()=>onSelectMention(user),
                        className: `w-full flex cursor-pointer items-center gap-3 p-3 hover:bg-blue-50 transition-colors ${index === selectedMentionIndex ? 'bg-blue-100' : ''}`,
                        children: [
                            userAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                width: 40,
                                height: 40,
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(userAvatar),
                                alt: userName,
                                className: "w-5 h-5 sm:w-10 sm:h-10 rounded-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white flex items-center justify-center font-semibold",
                                children: userName.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-gray-800 text-sm",
                                        children: userName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "@",
                                            userName.toLowerCase().replace(/\s+/g, '')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            index === selectedMentionIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className: "w-5 h-5 text-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this)
                        ]
                    }, userId, true, {
                        fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/MentionMenu.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/ChatInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/(chatPopup)/ChatInput.tsx'\n\nExpected '</', got '{'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/(chatPopup)/MessageContextMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
;
;
const getId = (u)=>{
    if (!u) return '';
    if (typeof u === 'string') return u;
    if (typeof u === 'object' && u !== null && '_id' in u && u._id != null) return String(u._id);
    if (typeof u === 'object' && u !== null && 'id' in u && u.id != null) return String(u.id);
    return '';
};
const MenuItem = ({ children, onClick, isRed = false, isAnchor = false, href = '#', download = '' })=>{
    const className = `cursor-pointer w-full text-left px-3 py-1 mb-1 hover:bg-gray-100 flex items-center gap-3 ${isRed ? 'text-red-500' : 'text-gray-700'}`;
    if (isAnchor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            download: download,
            onClick: onClick,
            target: "_blank",
            rel: "noreferrer",
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: className,
        type: "button",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MessageContextMenu = ({ contextMenu, currentUserId, onClose, onPinMessage, onRecallMessage, setEditingMessageId, setEditContent, closeContextMenu, onReplyMessage, onShareMessage })=>{
    if (!contextMenu || !contextMenu.visible) return null;
    const { x, y, message: msg, placement } = contextMenu;
    const isMe = getId(msg.sender) === currentUserId;
    const isText = msg.type === 'text';
    const isRecalled = msg.isRecalled;
    const canCopy = isText && !isRecalled;
    const canDownload = (msg.type === 'image' || msg.type === 'file' || msg.type === 'sticker') && msg.fileUrl;
    const canRecall = isMe && !isRecalled;
    const isCurrentlyPinned = msg.isPinned === true;
    const canEdit = isMe && isText && !isRecalled;
    const style = {
        top: y,
        left: x
    };
    const copyTextToClipboard = async (text)=>{
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch  {}
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.top = '0';
            ta.style.left = '0';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            if (ok) return true;
        } catch  {}
        try {
            const ta2 = document.createElement('input');
            ta2.value = text;
            ta2.style.position = 'fixed';
            ta2.style.top = '0';
            ta2.style.left = '0';
            ta2.style.opacity = '0';
            document.body.appendChild(ta2);
            ta2.focus();
            ta2.select();
            const ok2 = document.execCommand('copy');
            document.body.removeChild(ta2);
            if (ok2) return true;
        } catch  {}
        return false;
    };
    const animClass = placement === 'above' ? 'animate-in fade-in slide-in-from-bottom-2 duration-200' : 'animate-in fade-in slide-in-from-top-2 duration-200';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-context-menu": "true",
        className: `fixed z-[9999] bg-white space-y-2 rounded-lg shadow-2xl border border-gray-200 py-1 w-[200px] text-sm ${animClass}`,
        style: style,
        onContextMenu: (e)=>e.preventDefault(),
        children: [
            !isRecalled && onReplyMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                onClick: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    onReplyMessage(msg);
                    onClose();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRepeat"], {
                            size: 24,
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[1rem]",
                            children: "Trả lời"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                onClick: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    onShareMessage(msg);
                    onClose();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegShareFromSquare"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[1rem]",
                            children: "Chia sẻ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            canCopy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                onClick: async (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    const ok = await copyTextToClipboard(msg.content || '');
                    if (!ok) {
                        alert('Sao chép thất bại!');
                    }
                    onClose();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCopy"], {
                            className: "w-5 h-5 "
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1rem] ",
                            children: "Sao chép"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                onClick: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    onPinMessage(msg);
                    onClose();
                },
                children: isCurrentlyPinned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 flex gap-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPaperclip"], {
                            className: `text-red-600 w-5 h-5 `
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1rem]",
                            children: "Bỏ ghim tin nhắn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 228,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 226,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex gap-4 items-center ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPaperclip"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 232,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1rem]",
                            children: "Ghim tin nhắn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 233,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 231,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                onClick: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    if (setEditingMessageId && setEditContent && closeContextMenu) {
                        setEditingMessageId(msg._id);
                        setEditContent(msg.content || '');
                        closeContextMenu();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegPenToSquare"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1rem]",
                            children: "Chỉnh sửa"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            canDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                isAnchor: true,
                href: msg.fileUrl,
                download: msg.fileName || 'file_chat',
                onClick: (e)=>{
                    e.stopPropagation();
                    setTimeout(()=>onClose(), 100);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1rem]",
                            children: "Tải xuống"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            canRecall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                isRed: true,
                onClick: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    onRecallMessage(msg._id);
                    onClose();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrashCan"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1rem]",
                            children: "Thu hồi"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/MessageContextMenu.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MessageContextMenu;
}),
"[project]/src/components/(chatPopup)/SearchMessageModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$arrow$2d$right$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$arrow$2d$right$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/arrow-right-icon.svg.mjs { IMAGE => "[project]/public/icons/arrow-right-icon.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)'); // Reuse existing icon
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaPreviewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MediaPreviewModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const SearchSidebar = ({ isOpen, onClose, roomId, onJumpToMessage, getSenderName, initialKeyword, onKeywordClear, initialSelectedMessageId })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentResultIndex, setCurrentResultIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAutoSearchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastInitialKeywordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialSelectedIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [senderFilter, setSenderFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [previewMedia, setPreviewMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchSearchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (query)=>{
        if (!query.trim() || !roomId) {
            setSearchResults([]);
            return;
        }
        setIsSearching(true);
        try {
            const buildTsRange = ()=>{
                let fromMs;
                let toMs;
                if (startDate) {
                    const d = new Date(`${startDate}T00:00:00`);
                    if (!Number.isNaN(d.getTime())) fromMs = d.getTime();
                }
                if (endDate) {
                    const d = new Date(`${endDate}T23:59:59`);
                    if (!Number.isNaN(d.getTime())) toMs = d.getTime();
                }
                if (fromMs !== undefined || toMs !== undefined) {
                    const range = {};
                    if (fromMs !== undefined) range.$gte = fromMs;
                    if (toMs !== undefined) range.$lte = toMs;
                    return range;
                }
                return undefined;
            };
            const tsRange = buildTsRange();
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'read',
                    filters: {
                        roomId,
                        searchQuery: query.trim(),
                        isRecalled: {
                            $ne: true
                        },
                        isDeleted: {
                            $ne: true
                        },
                        type: {
                            $ne: 'notify'
                        },
                        ...tsRange ? {
                            timestamp: tsRange
                        } : {}
                    },
                    limit: 500,
                    sort: {
                        field: 'timestamp',
                        order: 'desc'
                    }
                })
            });
            const data = await res.json();
            const raw = Array.isArray(data?.data) ? data.data : [];
            const filtered = raw.filter((m)=>{
                const text = m.type === 'file' ? String(m.fileName || '') : m.type === 'sticker' ? '' : String(m.content || '');
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(text, query);
            });
            const results = filtered.slice().sort((a, b)=>Number(b.timestamp) - Number(a.timestamp));
            setSearchResults(results);
            setCurrentResultIndex((prev)=>{
                if (results.length === 0) return -1;
                return prev;
            });
        } catch (error) {
            console.error('Fetch search results error:', error);
            setSearchResults([]);
        } finally{
            setIsSearching(false);
        }
    }, [
        roomId,
        onJumpToMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const kw = (initialKeyword || '').trim();
        if (!isOpen || !kw) return;
        if (lastInitialKeywordRef.current === kw && hasAutoSearchedRef.current) return;
        setSearchTerm(kw);
        hasAutoSearchedRef.current = true;
        lastInitialKeywordRef.current = kw;
        initialSelectedIdRef.current = initialSelectedMessageId || null;
        setTimeout(()=>{
            inputRef.current?.focus();
        }, 100);
        fetchSearchResults(kw);
    }, [
        initialKeyword,
        initialSelectedMessageId,
        isOpen,
        fetchSearchResults
    ]);
    // Reset when sidebar closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            hasAutoSearchedRef.current = false;
            lastInitialKeywordRef.current = null;
            initialSelectedIdRef.current = null;
            setCurrentResultIndex(-1);
            if (onKeywordClear) {
                onKeywordClear();
            }
        }
    }, [
        isOpen,
        onKeywordClear
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialKeyword && searchTerm === initialKeyword && hasAutoSearchedRef.current) {
            return;
        }
        if (!searchTerm.trim()) {
            setSearchResults([]);
            setCurrentResultIndex(-1);
            return;
        }
        const handler = setTimeout(()=>{
            fetchSearchResults(searchTerm);
        }, 500);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        searchTerm,
        fetchSearchResults,
        initialKeyword
    ]);
    const senderOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const ids = new Set();
        const arr = [];
        searchResults.forEach((m)=>{
            const id = typeof m.sender === 'object' && m.sender ? String(m.sender._id) : String(m.sender || '');
            if (id && !ids.has(id)) {
                ids.add(id);
                const name = getSenderName(m.sender);
                arr.push({
                    id,
                    name
                });
            }
        });
        return arr.sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        searchResults,
        getSenderName
    ]);
    const filteredResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const startTs = startDate ? new Date(startDate + 'T00:00:00').getTime() : null;
        const endTs = endDate ? new Date(endDate + 'T23:59:59').getTime() : null;
        return searchResults.filter((m)=>{
            const sid = typeof m.sender === 'object' && m.sender ? String(m.sender._id) : String(m.sender || '');
            const passSender = senderFilter ? sid === senderFilter : true;
            const ts = Number(m.timestamp || 0);
            const passStart = startTs ? ts >= startTs : true;
            const passEnd = endTs ? ts <= endTs : true;
            return passSender && passStart && passEnd;
        });
    }, [
        searchResults,
        senderFilter,
        startDate,
        endDate
    ]);
    const sortedResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredResults.slice().sort((a, b)=>Number(b.timestamp) - Number(a.timestamp)), [
        filteredResults
    ]);
    const mediaResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>sortedResults.filter((m)=>(m.type === 'image' || m.type === 'video') && m.fileUrl).map((m)=>({
                url: String(m.fileUrl),
                type: m.type
            })), [
        sortedResults
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (sortedResults.length === 0) {
            setCurrentResultIndex(-1);
        }
    }, [
        sortedResults.length
    ]);
    if (!isOpen || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 1024) return null;
    const handleJump = (messageId, index)=>{
        if (index !== undefined) {
            setCurrentResultIndex(index);
        }
        onJumpToMessage(messageId);
        const isMobile = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            setTimeout(()=>{
                inputRef.current?.focus();
            }, 900);
        }
    };
    const handlePrevious = ()=>{
        if (sortedResults.length === 0) return;
        const newIndex = currentResultIndex <= 0 ? sortedResults.length - 1 : currentResultIndex - 1;
        setCurrentResultIndex(newIndex);
        handleJump(sortedResults[newIndex]._id, newIndex);
    };
    const handleNext = ()=>{
        if (sortedResults.length === 0) return;
        const newIndex = currentResultIndex >= sortedResults.length - 1 ? 0 : currentResultIndex + 1;
        setCurrentResultIndex(newIndex);
        handleJump(sortedResults[newIndex]._id, newIndex);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            fetchSearchResults(searchTerm);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            handlePrevious();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            handleNext();
        }
    };
    // Highlight keyword function
    const highlightKeyword = (text, keyword)=>{
        if (!keyword.trim() || !text) return text;
        const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildAccentInsensitiveRegex"])(keyword);
        const parts = text.split(regex);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: parts.map((part, i)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                    className: " text-blue-900 px-0.5 rounded font-medium",
                    children: part
                }, i, false, {
                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                    lineNumber: 265,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: part
                }, i, false, {
                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                    lineNumber: 269,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false);
    };
    return(// Sử dụng cơ chế fixed/static tương tự ChatInfoPopup
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white shadow-lg w-full sm:w-[21.875rem] flex flex-col h-full overflow-y-auto relative transition-transform duration-300 transform
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}` // Thêm hiệu ứng slide
        ,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-black",
                        children: "Tìm kiếm tin nhắn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "cursor-pointer p-2 hover:bg-gray-200 rounded-full",
                        title: "Đóng tìm kiếm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$arrow$2d$right$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$arrow$2d$right$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Close",
                            width: 24,
                            height: 24,
                            className: "w-6 h-6 rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-100 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nhập từ khóa tìm kiếm...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                onKeyDown: handleKeyDown,
                                className: "flex-1 border-b outline-none p-2  text-sm ",
                                ref: inputRef,
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fetchSearchResults(searchTerm),
                                className: "cursor-pointer bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors shrink-0",
                                disabled: isSearching || !searchTerm.trim(),
                                children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : 'Tìm'
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-2 items-center gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: senderFilter,
                                onChange: (e)=>setSenderFilter(e.target.value),
                                className: " cursor-pointer text-[1rem] border border-gray-300 rounded-lg px-2 py-1 text-sm flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Tất cả"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    senderOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            className: "cursor-pointer ",
                                            value: opt.id,
                                            children: opt.name || opt.id
                                        }, opt.id, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: startDate,
                                        onChange: (e)=>setStartDate(e.target.value),
                                        onInput: (e)=>setStartDate(e.target.value),
                                        className: "border border-gray-300 rounded-lg px-1 py-1 text-sm cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-xs",
                                        children: " → "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: endDate,
                                        onChange: (e)=>setEndDate(e.target.value),
                                        onInput: (e)=>setEndDate(e.target.value),
                                        className: "border border-gray-300 rounded-lg px-1 py-1 text-sm cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setStartDate('');
                                            setEndDate('');
                                        },
                                        className: "ml-1 px-2 py-1 text-xs rounded border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoReload"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50",
                children: [
                    isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-blue-500 text-sm",
                        children: "Đang tìm kiếm..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 381,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isSearching && searchTerm.trim() && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500 text-sm",
                        children: [
                            "Không tìm thấy tin nhắn nào khớp với: **",
                            searchTerm,
                            "**"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isSearching && !searchTerm.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-400 text-sm",
                        children: "Nhập từ khóa để tìm kiếm trong hội thoại này."
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    sortedResults.map((msg, index)=>{
                        const isRecalled = msg.isRecalled === true;
                        const contentDisplay = msg.type === 'file' ? msg.fileName || 'File' : msg.type === 'sticker' ? '[Sticker]' : String(msg.content || '');
                        const isCurrentResult = index === currentResultIndex;
                        // Lấy tên người gửi (sender được khai báo là string ID trong Message)
                        const senderName = getSenderName(msg.sender);
                        const d = new Date(msg.timestamp);
                        const today = new Date();
                        const yesterday = new Date();
                        yesterday.setDate(today.getDate() - 1);
                        const sameDate = (a, b)=>a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
                        const dateLabel = sameDate(d, today) ? 'Hôm nay' : sameDate(d, yesterday) ? 'Hôm qua' : d.toLocaleDateString('vi-VN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });
                        const timeLabel = d.toLocaleTimeString('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer transition-colors border ${isCurrentResult ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'}`,
                            onClick: ()=>handleJump(msg._id, index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-blue-600 font-semibold",
                                    children: [
                                        senderName,
                                        " • ",
                                        dateLabel,
                                        " • ",
                                        timeLabel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        msg.type === 'image' && msg.fileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(String(msg.fileUrl)),
                                                alt: "",
                                                width: 320,
                                                height: 240,
                                                className: "w-10 h-18 rounded-lg object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                                lineNumber: 432,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 431,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : msg.type === 'video' && msg.fileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-2xl overflow-hidden cursor-pointer shadow-lg max-w-[8vw] sm:max-w-[6rem] aspect-video bg-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(String(msg.fileUrl)),
                                                    className: "w-full h-full object-cover",
                                                    muted: true,
                                                    playsInline: true,
                                                    loop: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 bg-white/80 rounded-full flex items-center justify-center shadow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPlay"], {
                                                            className: "w-3 h-3 text-blue-600 "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 441,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm mt-1 line-clamp-2 ${isRecalled ? 'italic text-gray-500' : 'text-gray-800'}`,
                                            children: highlightKeyword(contentDisplay, searchTerm)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, msg._id, true, {
                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                            lineNumber: 418,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            searchResults.length > 0 && ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 1024 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 bg-gray-100 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePrevious,
                            className: "p-1.5 rounded cursor-pointer hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                            title: "Kết quả trước",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-gray-700",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                    lineNumber: 476,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                lineNumber: 475,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                            lineNumber: 470,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-600 font-medium min-w-[80px] text-center",
                            children: currentResultIndex >= 0 && currentResultIndex < sortedResults.length ? `Kết quả ${currentResultIndex + 1}/${sortedResults.length}` : `0/${sortedResults.length}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                            lineNumber: 479,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            className: "p-1.5 rounded cursor-pointer hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                            title: "Kết quả tiếp theo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-gray-700",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                    lineNumber: 490,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                            lineNumber: 484,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                    lineNumber: 469,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                lineNumber: 468,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            previewMedia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaPreviewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                media: previewMedia,
                chatName: undefined,
                isGroup: undefined,
                onClose: ()=>setPreviewMedia(null),
                roomId: roomId
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
                lineNumber: 497,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/SearchMessageModal.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = SearchSidebar;
}),
"[project]/src/components/(chatPopup)/ShareMessageModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ShareMessageModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ShareMessageModal({ isOpen, onClose, message, currentUser, allUsers, groups = [], onShare }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTargets, setSelectedTargets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attachedText, setAttachedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        const el = containerRef.current;
        if (!el) return;
        try {
            el.scrollTop = el.scrollHeight;
        } catch  {}
        try {
            inputRef.current?.scrollIntoView({
                block: 'end'
            });
        } catch  {}
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMobile(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen || !isMobile) return;
        const root = document.documentElement;
        const applyViewport = ()=>{
            const vv = window.visualViewport;
            if (!vv) return;
            root.style.setProperty('--vvh', `${vv.height}px`);
            root.style.setProperty('--vvw', `${vv.width}px`);
            root.style.setProperty('--vvTop', `${vv.offsetTop || 0}px`);
            root.style.setProperty('--vvLeft', `${vv.offsetLeft || 0}px`);
            if (viewportRef.current) {
                viewportRef.current.style.height = `${vv.height}px`;
            }
            scrollToBottom();
        };
        const vv = window.visualViewport;
        if (vv) {
            vv.addEventListener('resize', applyViewport);
            vv.addEventListener('scroll', applyViewport);
            applyViewport();
        }
        document.body.classList.add('vv-body-lock');
        return ()=>{
            if (vv) {
                vv.removeEventListener('resize', applyViewport);
                vv.removeEventListener('scroll', applyViewport);
            }
            document.body.classList.remove('vv-body-lock');
            root.style.removeProperty('--vvh');
            root.style.removeProperty('--vvw');
            root.style.removeProperty('--vvTop');
            root.style.removeProperty('--vvLeft');
        };
    }, [
        isOpen,
        isMobile
    ]);
    // Scroll input vào view khi focus
    const handleInputFocus = ()=>{
        setTimeout(()=>{
            scrollToBottom();
            inputRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300); // Đợi bàn phím xuất hiện
    };
    const shareTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const userTargets = allUsers.filter((u)=>u._id !== currentUser._id).map((u)=>({
                id: String(u._id),
                name: u.name || 'Người dùng',
                avatar: u.avatar,
                isGroup: false,
                type: 'user'
            }));
        const groupTargets = groups.map((g)=>({
                id: String(g._id),
                name: g.name || 'Nhóm',
                avatar: g.avatar,
                isGroup: true,
                type: 'group'
            }));
        return [
            ...groupTargets,
            ...userTargets
        ];
    }, [
        allUsers,
        groups,
        currentUser._id
    ]);
    const filteredTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchTerm.trim()) return shareTargets;
        return shareTargets.filter((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(t.name || '', searchTerm));
    }, [
        shareTargets,
        searchTerm
    ]);
    const toggleSelect = (targetId)=>{
        setSelectedTargets((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(targetId)) {
                newSet.delete(targetId);
            } else {
                newSet.add(targetId);
            }
            return newSet;
        });
    };
    const handleShare = async ()=>{
        if (selectedTargets.size === 0) return;
        setIsSharing(true);
        try {
            const targetRoomIds = Array.from(selectedTargets).map((targetId)=>{
                const target = shareTargets.find((t)=>t.id === targetId);
                if (target?.isGroup) {
                    return targetId;
                } else {
                    const ids = [
                        currentUser._id,
                        targetId
                    ].sort();
                    return `${ids[0]}_${ids[1]}`;
                }
            });
            await onShare(targetRoomIds, message, attachedText);
            setSelectedTargets(new Set());
            setSearchTerm('');
            setAttachedText('');
            onClose();
        } catch (error) {
            console.error('Share error:', error);
        } finally{
            setIsSharing(false);
        }
    };
    const renderMessagePreview = ()=>{
        const batchItems = message.batchItems || [];
        if (Array.isArray(batchItems) && batchItems.length > 1) {
            const items = batchItems.slice(0, 6);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-2",
                        children: [
                            batchItems.length,
                            " mục sẽ được chia sẻ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-10 gap-1",
                        children: items.map((it, idx)=>{
                            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(String(it.fileUrl || ''));
                            if (it.type === 'image') {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-[5rem] aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100",
                                    children: url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: url,
                                        alt: "Ảnh",
                                        width: 200,
                                        height: 200,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 204,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gray-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 206,
                                        columnNumber: 23
                                    }, this)
                                }, `share-preview-img-${idx}`, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 19
                                }, this);
                            }
                            if (it.type === 'video') {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-[5rem] aspect-square bg-black rounded-lg overflow-hidden border border-gray-100",
                                    children: [
                                        url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            src: url,
                                            preload: "metadata",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                            lineNumber: 218,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gray-900"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center opacity-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " rounded-full flex items-center justify-center shadow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPlay"], {
                                                    className: "w-3 h-3 text-blue-600 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                lineNumber: 223,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, `share-preview-vid-${idx}`, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 19
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-full aspect-square rounded-lg border border-gray-200 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineDocumentText"], {
                                    className: "w-6 h-6 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 235,
                                    columnNumber: 19
                                }, this)
                            }, `share-preview-other-${idx}`, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 231,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this);
        }
        if (message.type === 'text') {
            const text = (message.content || '').slice(0, 120) + ((message.content || '').length > 120 ? '...' : '');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-700 leading-relaxed",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                lineNumber: 245,
                columnNumber: 14
            }, this);
        }
        const mediaUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(message.fileUrl || message.previewUrl);
        if (message.type === 'image' && mediaUrl) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[5rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: mediaUrl,
                    alt: "Ảnh chia sẻ",
                    width: 300,
                    height: 200,
                    className: "w-full max-h-20 object-contain rounded-xl border border-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this);
        }
        if (message.type === 'video' && mediaUrl) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[7rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: mediaUrl,
                    controls: true,
                    preload: "metadata",
                    className: "w-full max-h-20 rounded-xl border border-gray-100 bg-black"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this);
        }
        if (message.type === 'file') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(message.fileUrl),
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl max-w-[70vw] sm:max-w-[18rem] shadow-sm hover:bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-blue-600 rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineDocumentText"], {
                            className: "w-6 h-6 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-800 truncate",
                                children: message.fileName || 'Tệp đính kèm'
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 truncate",
                                children: "Nhấn để tải xuống"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this);
        }
        if (message.type === 'sticker') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-700",
                children: "😊 Sticker"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                lineNumber: 298,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-700",
            children: "Tin nhắn"
        }, void 0, false, {
            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
            lineNumber: 300,
            columnNumber: 12
        }, this);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: viewportRef,
        className: `fixed inset-0 z-[10001] flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200 ${isMobile ? 'vv-fixed' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full h-full sm:w-full sm:h-auto sm:max-w-lg bg-white shadow-2xl flex flex-col sm:max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200 md:rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative p-1 bg-gray-200 text-black ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center px-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "top-4 right-4 hover:cursor-pointer  hover:bg-white/20 rounded-full transition-all duration-200 hover:rotate-90",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[1rem] ",
                                        children: "Chia sẻ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-black text-sm mt-0.5",
                                        children: [
                                            "Đã chọn: ",
                                            selectedTargets.size
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-1.5 px-3 bg-white border-b border-gray-300 pb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoSearch"], {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Tìm kiếm người dùng hoặc nhóm...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-1.5 bg-white",
                            children: selectedTargets.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center gap-2 text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-blue-600 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoCheckmark"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                selectedTargets.size,
                                                " đã chọn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 350,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pb-2",
                            children: filteredTargets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoSearch"], {
                                            className: "w-8 h-8 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                            lineNumber: 364,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Không tìm thấy kết quả"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mt-1",
                                        children: "Thử tìm kiếm với từ khóa khác"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 362,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: filteredTargets.map((target)=>{
                                    const isSelected = selectedTargets.has(target.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleSelect(target.id),
                                        className: `w-full  p-2 mb-2 flex items-center gap-4 transition-all hover:cursor-pointer duration-200 hover:bg-gray-50  border-transparent`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-shrink-0 flex items-center gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}`,
                                                        children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoCheckmark"], {
                                                            className: "w-5 h-5 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 42
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 rounded-full overflow-hidden transition-all duration-200`,
                                                        children: target.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(target.avatar),
                                                            alt: "",
                                                            width: 36,
                                                            height: 36,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/logo/avata.webp",
                                                            alt: target.name,
                                                            width: 64,
                                                            height: 64,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                lineNumber: 379,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 text-left min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-gray-800 truncate",
                                                        children: target.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 mt-0.5",
                                                        children: target.isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUsers"], {
                                                                    className: "w-4 h-4 text-purple-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-purple-600 font-medium",
                                                                    children: "Nhóm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUser"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Người dùng"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                lineNumber: 405,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, target.id, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 374,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-2 px-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 rounded-none sm:rounded-b-2xl",
                    children: selectedTargets.size === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-400 text-sm",
                        children: "Chưa chọn người nhận nào"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                        lineNumber: 433,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-700",
                                    children: [
                                        "Đã chọn (",
                                        selectedTargets.size,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 437,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-300",
                                children: Array.from(selectedTargets).map((targetId)=>{
                                    const target = shareTargets.find((t)=>t.id === targetId);
                                    if (!target) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex flex-col items-center gap-2 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg",
                                                        children: target.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(target.avatar),
                                                            alt: target.name,
                                                            width: 56,
                                                            height: 56,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/logo/avata.webp",
                                                            alt: target.name,
                                                            width: 56,
                                                            height: 56,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation(); // Ngăn click lan ra toggleSelect toàn bộ item
                                                            toggleSelect(targetId);
                                                        },
                                                        className: "absolute -top-[2px] cursor-pointer -right-1 w-5 h-5 bg-gray-400 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-200 opacity-100 hover:scale-110",
                                                        "aria-label": "Xóa khỏi danh sách chia sẻ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoClose"], {
                                                            className: "w-4 h-4 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 25
                                                    }, this),
                                                    target.isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -bottom-[2px] -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-3 border-white shadow-md",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiUsers"], {
                                                            className: "w-4.5 h-4.5 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                lineNumber: 448,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-700 max-w-[64px] truncate text-center mt-1",
                                                children: target.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                                lineNumber: 490,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, targetId, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 447,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-2 pb-3 mb-2 bg-white border-t border-gray-200",
                    style: {
                        paddingBottom: 'env(safe-area-inset-bottom)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2 bg-gradient-to-br from-gray-50 to-blue-50/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",
                                    children: "Nội dung chia sẻ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-2 rounded-xl border border-gray-200 shadow-sm  whitespace-pre-wrap break-words",
                                    children: renderMessagePreview()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    placeholder: "Nhập tin nhắn đính kèm (tùy chọn)",
                                    value: attachedText,
                                    onChange: (e)=>setAttachedText(e.target.value),
                                    onFocus: handleInputFocus,
                                    className: "w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleShare,
                                    disabled: selectedTargets.size === 0 || isSharing,
                                    className: "flex-1 px-4 py-4 hover:cursor-pointer bg-blue-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2",
                                    children: isSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoSend"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                        lineNumber: 530,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
            lineNumber: 310,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/ShareMessageModal.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>MessageMobileContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function MessageMobileContextMenu({ contextMenu, currentUserId, onClose, onPinMessage, onRecallMessage, onReplyMessage, onShareMessage, onToggleReaction, setEditingMessageId, setEditContent, closeContextMenu, iconSize = 35, reactionSize = 35 }) {
    const startYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const movedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const focusTop = contextMenu?.focusTop ?? undefined;
    const focusHeight = contextMenu?.focusHeight ?? undefined;
    const isVisible = !!contextMenu?.visible;
    const msg = contextMenu?.message;
    const x = contextMenu?.x ?? 0;
    const y = contextMenu?.y ?? 0;
    const placement = contextMenu?.placement ?? 'below';
    const getSenderId = (u)=>{
        try {
            if (!u) return '';
            if (typeof u === 'string') return String(u);
            const obj = u;
            const idA = obj && obj['_id'];
            const idB = obj && obj['id'];
            if (idA != null) return String(idA);
            if (idB != null) return String(idB);
        } catch  {}
        return '';
    };
    const isMe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const id = getSenderId(msg?.sender);
        return id === String(currentUserId);
    }, [
        msg,
        currentUserId
    ]);
    const isText = msg?.type === 'text';
    const isRecalled = !!msg?.isRecalled;
    const canCopy = isText && !isRecalled;
    const canDownload = !!msg?.fileUrl && (msg?.type === 'image' || msg?.type === 'file' || msg?.type === 'sticker' || msg?.type === 'video');
    const canRecall = isMe && !isRecalled;
    const isPinned = !!msg?.isPinned;
    const canEdit = isMe && isText && !isRecalled;
    const [imageDims, setImageDims] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const prevent = (e)=>{
            e.preventDefault();
        };
        document.addEventListener('touchmove', prevent, {
            passive: false
        });
        return ()=>{
            document.body.style.overflow = prev;
            document.removeEventListener('touchmove', prevent);
        };
    }, [
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setImageDims(null);
    }, [
        msg?.fileUrl,
        msg?.type
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        if (msg?.type !== 'image' || !msg?.fileUrl) return;
        try {
            const img = document.createElement('img');
            img.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl);
            img.decoding = 'async';
            img.onload = ()=>{
                const natW = img.naturalWidth || 0;
                const natH = img.naturalHeight || 0;
                if (natW > 0 && natH > 0) {
                    const viewportW = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 600;
                    const viewportH = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 800;
                    const targetH = typeof focusHeight === 'number' ? focusHeight : Math.floor(viewportH * 0.78);
                    const idealW = Math.floor(natW * targetH / natH);
                    const maxW = Math.floor(viewportW * 0.88);
                    const minW = 120;
                    const w = Math.max(minW, Math.min(idealW, maxW));
                    setImageDims({
                        w,
                        h: targetH
                    });
                }
            };
        } catch  {}
    }, [
        isVisible,
        msg?.type,
        msg?.fileUrl,
        focusHeight
    ]);
    const handleCopy = async ()=>{
        const text = msg?.content || '';
        if (!text) return;
        try {
            const anyWindow = window;
            if (navigator.clipboard && anyWindow.isSecureContext) {
                await navigator.clipboard.writeText(text);
                onClose();
                return;
            }
        } catch  {}
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.top = '0';
            ta.style.left = '0';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            if (ok) onClose();
        } catch  {}
    };
    if (!isVisible || !msg) return null;
    const panelStyle = {
        top: y,
        left: '50%',
        transform: 'translateX(-50%)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999]",
        onContextMenu: (e)=>e.preventDefault(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                onClick: onClose,
                onTouchStart: (e)=>{
                    const t = e.touches[0];
                    startYRef.current = t.clientY;
                    movedRef.current = false;
                },
                onTouchMove: (e)=>{
                    const t = e.touches[0];
                    const s = startYRef.current ?? t.clientY;
                    if (Math.abs(t.clientY - s) > 8) movedRef.current = true;
                },
                onTouchEnd: (e)=>{
                    const t = e.changedTouches[0];
                    const s = startYRef.current ?? t.clientY;
                    const dy = t.clientY - s;
                    if (dy > 60) onClose();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            msg.type === 'text' && typeof focusTop === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-1/2 -translate-x-1/2 z-[10000] w-[88vw] max-w-[22rem] px-2 animate-in fade-in zoom-in-95 duration-200",
                style: {
                    top: focusTop
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mx-auto rounded-2xl shadow-2xl border ${isMe ? 'bg-[#E5F1FF] border-blue-200' : 'bg-white border-gray-200'} px-4 py-3 text-[1rem] text-black relative`,
                    style: {
                        maxHeight: focusHeight ? `${focusHeight}px` : '32vh',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "whitespace-pre-wrap break-words",
                            children: msg.content || ''
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 bottom-0 h-8 pointer-events-none bg-gradient-to-t from-white/90 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this),
            msg.type === 'image' && msg.fileUrl && typeof focusTop === 'number' && (()=>{
                const viewportW = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 600;
                const fallbackW = Math.floor(viewportW * 0.88);
                const panelW = imageDims?.w ?? fallbackW;
                const panelStyleWidth = {
                    width: panelW
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed left-1/2 -translate-x-1/2 z-[10000] px-2 animate-in fade-in zoom-in-95 duration-200",
                    style: {
                        top: focusTop,
                        ...panelStyleWidth
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto rounded-2xl shadow-2xl border bg-white border-gray-200 p-2 relative",
                        style: {
                            height: focusHeight ? `${focusHeight}px` : '78vh'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl),
                                alt: msg.fileName || 'Ảnh',
                                fill: true,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                lineNumber: 237,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                            lineNumber: 236,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                        lineNumber: 232,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                    lineNumber: 228,
                    columnNumber: 13
                }, this);
            })(),
            msg.type === 'video' && msg.fileUrl && typeof focusTop === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-1/2 -translate-x-1/2 z-[10000] w-[88vw] max-w-[22rem] px-2 animate-in fade-in zoom-in-95 duration-200",
                style: {
                    top: focusTop
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto rounded-2xl shadow-2xl border bg-white border-gray-200 p-2 relative",
                    style: {
                        maxHeight: focusHeight ? `${focusHeight}px` : '34vh',
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl),
                                className: "w-full h-auto object-contain bg-black rounded-xl",
                                style: {
                                    maxHeight: '100%'
                                },
                                playsInline: true,
                                preload: "metadata"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPlay"], {
                                        className: "w-7 h-7 text-blue-600 ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                        lineNumber: 262,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            msg.type === 'file' && msg.fileUrl && typeof focusTop === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-1/2 -translate-x-1/2 z-[10000] w-[92vw] max-w-[24rem] px-2",
                style: {
                    top: focusTop
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto rounded-2xl shadow-2xl border bg-white border-gray-200 p-3 relative",
                    style: {
                        maxHeight: '38vh',
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-blue-600 rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineDownload"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800 truncate",
                                        children: msg.fileName || 'Tệp đính kèm'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 truncate",
                                        children: "Giữ để mở thêm hành động"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                        lineNumber: 278,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                    lineNumber: 274,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute z-[10001] ${placement === 'above' ? 'bottom-auto' : 'top-auto'} ${placement === 'above' ? '' : ''}`,
                "data-context-menu": "true",
                style: panelStyle,
                onMouseDown: (e)=>{
                    e.stopPropagation();
                },
                onClick: (e)=>{
                    e.stopPropagation();
                },
                onTouchStart: (e)=>{
                    e.stopPropagation();
                },
                children: [
                    !isRecalled && typeof onToggleReaction === 'function' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bottom-full bg-white rounded-xl p-2 mb-2 ",
                        onMouseDown: (e)=>e.stopPropagation(),
                        onClick: (e)=>e.stopPropagation(),
                        onTouchStart: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                '👍',
                                '❤️',
                                '😂',
                                '😮',
                                '😢',
                                '😡'
                            ].map((em)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onToggleReaction?.(msg, em);
                                        onClose();
                                    },
                                    "aria-label": `Biểu cảm ${em}`,
                                    title: `Biểu cảm ${em}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "leading-none",
                                        style: {
                                            fontSize: reactionSize
                                        },
                                        children: em
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                        lineNumber: 322,
                                        columnNumber: 19
                                    }, this)
                                }, em, false, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 313,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[92vw] max-w-[24rem] mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-1 animate-in fade-in zoom-in-95 duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1",
                            children: [
                                onReplyMessage && !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onReplyMessage(msg);
                                        onClose();
                                    },
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-blue-50 active:scale-95 transition-all",
                                    "aria-label": "Trả lời tin nhắn",
                                    title: "Trả lời tin nhắn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRepeat"], {
                                            size: 24,
                                            color: "#2563eb",
                                            className: "w-7 h-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Trả lời"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this),
                                !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onShareMessage(msg);
                                        onClose();
                                    },
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-indigo-50 active:scale-95 transition-all",
                                    "aria-label": "Chia sẻ tin nhắn",
                                    title: "Chia sẻ tin nhắn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegShareFromSquare"], {
                                            className: "w-7 h-7 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Chia sẻ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (setEditingMessageId && setEditContent) {
                                            setEditingMessageId(String(msg._id));
                                            setEditContent(String(msg.content || ''));
                                        }
                                        (closeContextMenu || onClose)();
                                    },
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl hover:bg-purple-50 active:scale-95 transition-all",
                                    "aria-label": "Chỉnh sửa tin nhắn",
                                    title: "Chỉnh sửa tin nhắn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegPenToSquare"], {
                                            className: "w-7 h-7  "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Chỉnh sửa"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                canCopy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCopy,
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl hover:bg-green-50 active:scale-95 transition-all",
                                    "aria-label": "Sao chép nội dung",
                                    title: "Sao chép nội dung",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCopy"], {
                                            className: "w-7 h-7 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Sao chép"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this),
                                !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onPinMessage(msg);
                                        onClose();
                                    },
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-amber-50 active:scale-95 transition-all",
                                    "aria-label": isPinned ? 'Bỏ ghim' : 'Ghim',
                                    title: isPinned ? 'Bỏ ghim' : 'Ghim',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPaperclip"], {
                                            className: `${isPinned ? 'text-amber-600' : 'text-red-600'}`,
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: isPinned ? 'Bỏ ghim' : 'Ghim'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                canDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: msg?.fileUrl,
                                    download: msg?.fileName || 'file_chat',
                                    onClick: ()=>setTimeout(onClose, 100),
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-teal-50 active:scale-95 transition-all",
                                    "aria-label": "Tải xuống",
                                    title: "Tải xuống",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {
                                            className: "w-7 h-7 text-blue-500 hover:text-blue-500 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Tải xuống"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this),
                                !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-orange-50 active:scale-95 transition-all",
                                    "aria-label": "Lưu vào thư mục",
                                    title: "Lưu vào thư mục",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFolderOpen"], {
                                            className: "w-7 h-7 text-orange-300 hover:text-orange-500 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Thư mục"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, this),
                                canRecall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onRecallMessage(String(msg?._id));
                                        onClose();
                                    },
                                    className: "flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-red-50 active:scale-95 transition-all",
                                    "aria-label": "Thu hồi tin nhắn",
                                    title: "Thu hồi tin nhắn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrashCan"], {
                                            className: "w-7 h-7 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] text-gray-800",
                                            children: "Thu hồi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_%28chatPopup%29_79b3ef77._.js.map