(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>UserAvatarSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function UserAvatarSection({ userName, userAvatar, onUpdateNickname }) {
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userName);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserAvatarSection.useEffect": ()=>{
            setEditName(userName);
        }
    }["UserAvatarSection.useEffect"], [
        userName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserAvatarSection.useEffect": ()=>{
            if (isEditing) {
                inputRef.current?.focus();
            }
        }
    }["UserAvatarSection.useEffect"], [
        isEditing
    ]);
    const handleSave = async ()=>{
        const newVal = editName.trim();
        const oldVal = (userName || '').trim();
        if (newVal !== oldVal || newVal === '') {
            try {
                setIsSaving(true);
                await onUpdateNickname?.(newVal, {
                    silent: true
                });
            } finally{
                setIsSaving(false);
            }
        }
        setIsEditing(false);
    };
    const handleCancel = ()=>{
        setEditName(userName);
        setIsEditing(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-gray-200 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl",
                        children: userAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            width: 100,
                            height: 100,
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(userAvatar),
                            alt: userName,
                            className: "w-full h-full object-cover",
                            onError: (e)=>{
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo/avata.webp",
                            alt: userName,
                            width: 40,
                            height: 40,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full ring-4 ring-transparent group-hover:ring-blue-300/30 transition-all duration-500 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-center relative group/name w-full flex justify-center",
                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            value: editName,
                            onChange: (e)=>setEditName(e.target.value),
                            className: "text-xl font-bold text-gray-900 text-center border-b-2 border-blue-500 focus:outline-none bg-transparent min-w-[9.375rem] max-w-[15.625rem]",
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') handleSave();
                                if (e.key === 'Escape') handleCancel();
                            },
                            disabled: isSaving
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: isSaving,
                            className: `p-1 rounded-full transition-colors cursor-pointer ${isSaving ? 'bg-green-100 text-green-500 opacity-70' : 'hover:bg-green-100 text-green-500'}`,
                            children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-5 inline-block border-2 border-green-500 border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCancel,
                            disabled: isSaving,
                            className: "p-1 rounded-full hover:bg-red-100 text-red-500 transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 group/edit cursor-pointer",
                    onClick: ()=>onUpdateNickname && setIsEditing(true),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900 tracking-tight truncate max-w-[15.625rem]",
                        children: userName || 'Người dùng'
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-gray-500 font-medium",
                children: "Đang trò chuyện riêng"
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(UserAvatarSection, "KlXpVOXf6ZRXyir6gY9UFOjbTT4=");
_c = UserAvatarSection;
var _c;
__turbopack_context__.k.register(_c, "UserAvatarSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ChatQuickActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
;
function ChatQuickActions({ isGroup, localIsPinned, localIsHidden, onPinToggle, onHideToggle, onCreateGroup, onOpenMembers, onSearchMessages, onChangeWallpaper, isMuted, onToggleMute, onOpenProfile }) {
    if (isGroup) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around items-center ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSearchMessages,
                    className: "cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl ",
                    title: "Tìm tin nhắn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all  group-hover:shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiSearch"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-gray-700",
                            children: "Tìm tin nhắn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onOpenMembers,
                    className: "cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl transition-all duration-300 active:scale-95",
                    title: "Thêm thành viên",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all  group-hover:shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuUserRoundPlus"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-gray-700",
                            children: "Thêm thành viên"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onToggleMute,
                    className: "cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-full transition-all duration-300 active:scale-95",
                    title: isMuted ? 'Bật thông báo' : 'Tắt thông báo',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-1 rounded-3xl transition-all duration-300  group-hover:shadow-lg ${isMuted ? 'bg-red-100 text-red-600 ring-2 ring-red-200' : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'}`,
                            children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiBellOn"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                                lineNumber: 73,
                                columnNumber: 24
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiBellOn"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                                lineNumber: 73,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-xs font-medium ${isMuted ? 'text-red-700' : 'text-gray-700'}`,
                            children: isMuted ? 'Đã tắt' : 'Tắt thông báo'
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-around items-center ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSearchMessages,
                className: "cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl transition-all duration-300 hover:bg-gray-50 active:scale-95",
                title: "Tìm tin nhắn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all group-hover:shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiSearch"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-gray-700",
                        children: "Tìm tin nhắn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onOpenProfile,
                className: "cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl transition-all duration-300  active:scale-95",
                title: "Trang cá nhân",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all group-hover:shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiUser"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-gray-700",
                        children: "Trang cá nhân"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggleMute,
                className: "cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-full transition-all duration-300 active:scale-95",
                title: isMuted ? 'Bật thông báo' : 'Tắt thông báo',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-1 rounded-full transition-all duration-300  group-hover:shadow-lg ${isMuted ? 'bg-red-100 text-red-600 ring-2 ring-red-200' : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'}`,
                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiBellOn"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 117,
                            columnNumber: 22
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiBellOn"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                            lineNumber: 117,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-medium ${isMuted ? 'text-red-700' : 'text-gray-700'}`,
                        children: isMuted ? 'Đã tắt' : 'Tắt thông báo'
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c = ChatQuickActions;
var _c;
__turbopack_context__.k.register(_c, "ChatQuickActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupDangerZone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
;
;
function GroupDangerZone({ canLeaveGroup, canDisbandGroup, onLeaveClick, onDisbandClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            canLeaveGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onLeaveClick,
                className: "w-full px-5 py-4 flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group cursor-pointer mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiLogout"], {
                        className: "w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[1.125rem] md:text-[1rem] text-red-500 font-medium group-hover:text-red-600 transition-colors",
                        children: "Rời nhóm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            canDisbandGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onDisbandClick,
                    className: "w-full px-5 py-4 flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiTrash"], {
                            className: "w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1.125rem] md:text-[1rem] text-red-500 font-medium group-hover:text-red-600 transition-colors",
                            children: "Giải tán nhóm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true);
}
_c = GroupDangerZone;
var _c;
__turbopack_context__.k.register(_c, "GroupDangerZone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>GroupMembersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Group members section component
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
function GroupMembersSection({ isGroup, membersCount, onOpenMembers }) {
    if (!isGroup) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onOpenMembers,
            className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl  text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineUserGroup"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[1.125rem] md:text-[1rem] text-gray-900",
                            children: [
                                "Xem thành viên ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: [
                                        "(",
                                        membersCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
                                    lineNumber: 25,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineArrowRight"], {
                    className: "w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = GroupMembersSection;
var _c;
__turbopack_context__.k.register(_c, "GroupMembersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ReminderSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ReminderSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
function ReminderSection({ onOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white   border border-gray-100 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "cursor-pointer w-full px-5 py-4 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group",
            onClick: onOpen,
            title: "Xem danh sách nhắc hẹn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " rounded-xl   ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCalendarDate"], {
                        className: "w-5 h-5 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base text-[1.125rem] md:text-[1rem] text-gray-900 group-hover:text-amber-600 transition-colors",
                        children: "Lịch hẹn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto text-gray-400 group-hover:text-amber-600 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                        className: "w-4 h-4 text-gray-400 group-hover:text-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/ReminderSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ReminderSection;
var _c;
__turbopack_context__.k.register(_c, "ReminderSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/PollSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>PollSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
function PollSection({ onOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white  border border-gray-100 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "cursor-pointer w-full px-5 py-4 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group",
            onClick: onOpen,
            title: "Xem danh sách bình chọn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " rounded-xl  text-gray-500  ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiWavePulse1"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base text-[1.125rem] md:text-[1rem] text-gray-900 group-hover:text-indigo-600 transition-colors",
                        children: "Bình chọn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto text-gray-400 group-hover:text-indigo-600 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                        className: "w-4 h-4 text-gray-400 group-hover:text-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/PollSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PollSection;
var _c;
__turbopack_context__.k.register(_c, "PollSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ItemDropdownMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
;
function ItemDropdownMenu({ itemUrl, itemId, fileName, activeMenuId, onClose, onJumpToMessage, onRemoveFromFolder, onShareById }) {
    if (activeMenuId !== itemId) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 cursor-default",
                onClick: (e)=>{
                    e.stopPropagation();
                    onClose();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 right-0 z-50 w-40 bg-white rounded-md shadow-xl border border-gray-200 py-1 animate-in fade-in zoom-in duration-100 origin-top-right",
                children: [
                    typeof onShareById === 'function' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            try {
                                onShareById(itemId);
                            } finally{
                                onClose();
                            }
                        },
                        className: "cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineShare"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            "Chia sẻ tin nhắn"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    itemUrl && itemUrl.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: itemUrl,
                        download: fileName || 'download',
                        onClick: (e)=>{
                            e.stopPropagation();
                            onClose();
                        },
                        target: "_blank",
                        rel: "noreferrer",
                        className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className: "w-4 h-4 text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            "Tải xuống"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    onRemoveFromFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "my-1 border-gray-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onRemoveFromFolder(itemId);
                                    onClose();
                                },
                                className: "cursor-pointer w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        className: "w-4 h-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M8 2a1 1 0 00-1 1v1H5a1 1 0 100 2h10a1 1 0 100-2h-2V3a1 1 0 00-1-1H8zm-3 6a1 1 0 011 1v7a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 112 0v7a3 3 0 01-3 3H8a3 3 0 01-3-3V9a1 1 0 011-1zm4 1a1 1 0 10-2 0v6a1 1 0 102 0V9zm3-1a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    "Loại khỏi folder"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ItemDropdownMenu;
var _c;
__turbopack_context__.k.register(_c, "ItemDropdownMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>RenameGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
;
function RenameGroupModal({ isOpen, renameInput, onChangeInput, onClose, onSubmit }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative cursor-pointer px-6 pt-8 pb-6 bg-blue-400 text-white text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold",
                            children: "Đổi tên nhóm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-white/80",
                            children: "Tất cả thành viên sẽ thấy tên nhóm mới"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: renameInput,
                                    onChange: (e)=>onChangeInput(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' && renameInput.trim()) {
                                            e.preventDefault();
                                            onSubmit();
                                        }
                                    },
                                    autoFocus: true,
                                    placeholder: "Nhập tên nhóm mới...",
                                    className: "w-full pl-3 pr-12 py-2 bg-[#EAEDF0] rounded-md focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0068ff] transition-all duration-300 text-sm text-gray-900 placeholder-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                renameInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xs text-gray-500 text-center",
                            children: [
                                "Nhấn ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-2 py-1 bg-gray-100 rounded text-xs font-medium",
                                    children: "Enter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 18
                                }, this),
                                " để lưu nhanh"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 px-6 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "cursor-pointer flex-1 py-3.5 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-200 active:scale-95",
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onSubmit,
                            disabled: !renameInput.trim(),
                            className: `flex-1 py-3.5 cursor-pointer text-base font-bold text-white rounded-2xl shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2
              ${!renameInput.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 shadow-blue-300'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                "Lưu tên nhóm"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = RenameGroupModal;
var _c;
__turbopack_context__.k.register(_c, "RenameGroupModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmGroupActionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
function ConfirmGroupActionModal({ confirmAction, onCancel, onConfirmLeave, onConfirmDisband }) {
    if (!confirmAction) return null;
    const isLeave = confirmAction === 'leave';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl border border-gray-100 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900",
                            children: isLeave ? 'Rời khỏi nhóm?' : 'Giải tán nhóm?'
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-gray-100 mx-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: isLeave ? 'Bạn sẽ không còn nhận được tin nhắn từ nhóm này nữa. Bạn vẫn có thể tham gia lại nếu được mời.' : 'Toàn bộ thành viên sẽ bị xóa khỏi nhóm và lịch sử trò chuyện sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-gray-100 mx-4 mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 px-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCancel,
                            className: "cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: isLeave ? onConfirmLeave : onConfirmDisband,
                            className: "cursor-pointer px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors flex items-center gap-2",
                            children: isLeave ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineUserMinus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    "Rời nhóm"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiTrash"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    "Giải tán nhóm"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ConfirmGroupActionModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmGroupActionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateReminderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function CreateReminderModal({ isOpen, onClose, onCreate, createLoading }) {
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateTime, setDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [repeat, setRepeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [showRepeatSheet, setShowRepeatSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDateSheet, setShowDateSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDesktop = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
    const defaultDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateReminderModal.useMemo[defaultDateTime]": ()=>{
            const now = new Date();
            const pad = {
                "CreateReminderModal.useMemo[defaultDateTime].pad": (n)=>String(n).padStart(2, '0')
            }["CreateReminderModal.useMemo[defaultDateTime].pad"];
            const y = now.getFullYear();
            const m = pad(now.getMonth() + 1);
            const d = pad(now.getDate());
            const hh = pad(now.getHours());
            const mm = pad(now.getMinutes());
            return `${y}-${m}-${d}T${hh}:${mm}`;
        }
    }["CreateReminderModal.useMemo[defaultDateTime]"], []);
    const dtLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateReminderModal.useMemo[dtLabel]": ()=>{
            const raw = dateTime || defaultDateTime;
            const ms = Date.parse(raw);
            if (Number.isNaN(ms)) return 'Chọn thời gian';
            const dateObj = new Date(ms);
            return dateObj.toLocaleString('vi-VN', {
                hour12: false
            });
        }
    }["CreateReminderModal.useMemo[dtLabel]"], [
        dateTime,
        defaultDateTime
    ]);
    const repeatLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateReminderModal.useMemo[repeatLabel]": ()=>{
            switch(repeat){
                case 'daily':
                    return 'Hàng ngày';
                case 'weekly':
                    return 'Hàng tuần';
                case 'monthly':
                    return 'Hàng tháng';
                default:
                    return 'Không lặp lại';
            }
        }
    }["CreateReminderModal.useMemo[repeatLabel]"], [
        repeat
    ]);
    const canSubmit = content.trim().length > 0 && (dateTime || defaultDateTime).trim().length > 0;
    if (!isOpen) return null;
    const modalNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-stretch justify-center ${isDesktop ? 'bg-black/20' : 'bg-black/50'} backdrop-blur-sm`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full h-full rounded-none overflow-hidden animate-in fade-in duration-200 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 pb-3 bg-gray-100 text-black w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: " cursor-pointer top-3 left-3 p-2 ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl ",
                                        children: "Tạo nhắc hẹn mới"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const finalDt = dateTime || defaultDateTime;
                                    onCreate({
                                        content,
                                        dateTime: finalDt,
                                        repeat
                                    });
                                    setContent('');
                                    setDateTime('');
                                    setRepeat('none');
                                },
                                disabled: createLoading,
                                className: `px-4 py-2 font-bold transition-all duration-200 
                ${canSubmit && !createLoading ? 'text-blue-500 cursor-pointer active:opacity-70' : 'text-gray-400 cursor-not-allowed opacity-50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-blue-500 justify-end ",
                                    children: "Xong"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 py-4 space-y-2 flex-1 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-3 py-3  border-b border-gray-300 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-rose-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiBellAlert"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: content,
                                    onChange: (e)=>setContent(e.target.value),
                                    className: "flex-1 bg-transparent outline-none text-lg",
                                    placeholder: "Nhập tiêu đề nhắc hẹn...",
                                    type: "text"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left px-3 py-3 border-b border-gray-300  flex items-center gap-3 cursor-pointer active:scale-[0.99]",
                            onClick: ()=>setShowDateSheet(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiClock"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-800 text-[15px]",
                                        children: dtLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left px-3 py-3 border-b border-gray-300 flex items-center gap-3 cursor-pointer active:scale-[0.99]",
                            onClick: ()=>setShowRepeatSheet(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCalendarDays"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-800 text-[15px]",
                                            children: "Chọn kiểu lặp lại"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-xs",
                                            children: repeatLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                showRepeatSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[10000] flex items-end bg-black/40",
                    onClick: ()=>setShowRepeatSheet(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white rounded-t-2xl p-4",
                        onClick: (e)=>{
                            e.stopPropagation();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "Chọn kiểu lặp lại"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowRepeatSheet(false),
                                        className: "px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer",
                                        children: "Xong"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    {
                                        key: 'none',
                                        label: 'Không lặp lại'
                                    },
                                    {
                                        key: 'daily',
                                        label: 'Hàng ngày'
                                    },
                                    {
                                        key: 'weekly',
                                        label: 'Hàng tuần'
                                    },
                                    {
                                        key: 'monthly',
                                        label: 'Hàng tháng'
                                    }
                                ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                name: "repeat",
                                                checked: repeat === opt.key,
                                                onChange: ()=>setRepeat(opt.key)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, opt.key, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this),
                showDateSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[10000] flex items-end bg-black/40",
                    onClick: ()=>setShowDateSheet(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white rounded-t-2xl p-4 space-y-3",
                        onClick: (e)=>{
                            e.stopPropagation();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local",
                                    value: dateTime || defaultDateTime,
                                    onChange: (e)=>setDateTime(e.target.value),
                                    className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDateSheet(false),
                                    className: "px-3 py-2 rounded-xl bg-blue-600 text-white font-semibold cursor-pointer",
                                    children: "Chọn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
    const target = isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
    return isDesktop && target ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalNode, target) : modalNode;
}
_s(CreateReminderModal, "AZnNpkPDPpaTqJgr+hpA2lNCoWs=");
_c = CreateReminderModal;
var _c;
__turbopack_context__.k.register(_c, "CreateReminderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReminderDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function ReminderDetailModal({ isOpen, message, onClose, onRefresh }) {
    _s();
    const { selectedChat, currentUser, isGroup, allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const roomId = (()=>{
        const me = String(currentUser._id);
        const other = String(selectedChat._id);
        return isGroup ? other : [
            me,
            other
        ].sort().join('_');
    })();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateTime, setDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [repeat, setRepeat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRepeatSheet, setShowRepeatSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDateSheet, setShowDateSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDesktop = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
    const originalContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[originalContent]": ()=>String(message?.content || '')
    }["ReminderDetailModal.useMemo[originalContent]"], [
        message
    ]);
    const originalDateTimeISO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[originalDateTimeISO]": ()=>{
            if (!message) return '';
            const at = message.reminderAt || message.timestamp;
            return new Date(at - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        }
    }["ReminderDetailModal.useMemo[originalDateTimeISO]"], [
        message
    ]);
    const originalRepeat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[originalRepeat]": ()=>{
            if (!message) return 'none';
            return message.reminderRepeat || 'none';
        }
    }["ReminderDetailModal.useMemo[originalRepeat]"], [
        message
    ]);
    const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[isValid]": ()=>{
            const dt = Date.parse(dateTime);
            return Boolean(content.trim()) && !Number.isNaN(dt);
        }
    }["ReminderDetailModal.useMemo[isValid]"], [
        content,
        dateTime
    ]);
    const isDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[isDirty]": ()=>{
            return content.trim() !== originalContent.trim() || dateTime !== originalDateTimeISO || repeat !== originalRepeat;
        }
    }["ReminderDetailModal.useMemo[isDirty]"], [
        content,
        dateTime,
        repeat,
        originalContent,
        originalDateTimeISO,
        originalRepeat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReminderDetailModal.useEffect": ()=>{
            if (!message) return;
            setContent(String(message.content || ''));
            const at = message.reminderAt || message.timestamp;
            const isoLocal = new Date(at - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16);
            setDateTime(isoLocal);
            setRepeat(message.reminderRepeat || 'none');
            setEditing(false);
            setMenuOpen(false);
        }
    }["ReminderDetailModal.useEffect"], [
        message
    ]);
    const dtLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[dtLabel]": ()=>{
            const ms = Date.parse(dateTime);
            if (Number.isNaN(ms)) return '';
            const dateObj = new Date(ms);
            return dateObj.toLocaleString('vi-VN', {
                hour12: false
            });
        }
    }["ReminderDetailModal.useMemo[dtLabel]"], [
        dateTime
    ]);
    const repeatLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[repeatLabel]": ()=>{
            switch(repeat){
                case 'daily':
                    return 'Hàng ngày';
                case 'weekly':
                    return 'Hàng tuần';
                case 'monthly':
                    return 'Hàng tháng';
                default:
                    return 'Không lặp lại';
            }
        }
    }["ReminderDetailModal.useMemo[repeatLabel]"], [
        repeat
    ]);
    const creatorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderDetailModal.useMemo[creatorInfo]": ()=>{
            if (!message) return {
                name: '',
                avatar: null
            };
            const raw = message.sender;
            const sid = typeof raw === 'object' && raw ? String(raw._id || raw.id || '') : String(raw || '');
            const members = isGroup ? selectedChat.members || [] : [];
            const member = members.find({
                "ReminderDetailModal.useMemo[creatorInfo].member": (m)=>String(m._id || m.id || '') === sid
            }["ReminderDetailModal.useMemo[creatorInfo].member"]);
            const userAll = (allUsers || []).find({
                "ReminderDetailModal.useMemo[creatorInfo].userAll": (u)=>String(u._id || u.id || '') === sid
            }["ReminderDetailModal.useMemo[creatorInfo].userAll"]);
            const senderObj = typeof raw === 'object' && raw ? raw : undefined;
            const finalAvatar = member?.avatar || userAll?.avatar || senderObj?.avatar || null;
            const finalNameRaw = senderObj?.name || member?.name || userAll?.name || '';
            const finalName = sid && String(currentUser._id) === sid ? 'Bạn' : finalNameRaw || 'Người dùng';
            return {
                name: finalName,
                avatar: finalAvatar
            };
        }
    }["ReminderDetailModal.useMemo[creatorInfo]"], [
        message,
        isGroup,
        selectedChat,
        allUsers,
        currentUser._id
    ]);
    if (!isOpen || !message) return null;
    const handleSave = async ()=>{
        const dt = Date.parse(dateTime);
        if (!content.trim() || Number.isNaN(dt)) return;
        setSaving(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(message._id), {
                content: content.trim(),
                reminderAt: dt,
                reminderFired: false,
                reminderRepeat: repeat
            });
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            const receiver = isGroup ? null : String(selectedChat._id);
            const members = isGroup ? selectedChat.members || [] : [];
            socket.emit('edit_message', {
                _id: message._id,
                roomId,
                sender: String(currentUser._id),
                senderName: currentUser.name,
                isGroup,
                receiver,
                members,
                content: content.trim(),
                newContent: content.trim(),
                editedAt: Date.now(),
                originalContent: message.content,
                reminderAt: dt,
                reminderFired: false,
                reminderRepeat: repeat
            });
            const name = currentUser.name;
            const timeStr = new Date(dt).toLocaleString('vi-VN');
            const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'notify',
                content: `${name} đã chỉnh sửa lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
                timestamp: Date.now(),
                replyToMessageId: String(message._id)
            });
            if (notifyRes?.success && typeof notifyRes._id === 'string') {
                socket.emit('send_message', {
                    _id: notifyRes._id,
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members,
                    type: 'notify',
                    content: `${name} đã chỉnh sửa lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
                    timestamp: Date.now(),
                    replyToMessageId: String(message._id)
                });
            }
            socket.disconnect();
            if (onRefresh) {
                onRefresh();
            }
            onClose();
        } catch (error) {
            console.error('❌ Lỗi khi lưu lịch hẹn:', error);
            alert('Không thể lưu lịch hẹn. Vui lòng thử lại.');
        } finally{
            setSaving(false);
        }
    };
    const handleRecall = async ()=>{
        const ok = confirm('Bạn có chắc muốn xóa vĩnh viễn lịch hẹn này?');
        if (!ok) return;
        setSaving(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMessageApi"])(String(message._id));
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            const receiver = isGroup ? null : String(selectedChat._id);
            const members = isGroup ? selectedChat.members || [] : [];
            socket.emit('message_deleted', {
                _id: message._id,
                roomId,
                sender: String(currentUser._id),
                senderName: currentUser.name,
                isGroup,
                receiver,
                members,
                type: 'delete',
                timestamp: Date.now()
            });
            const name = currentUser.name;
            const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'notify',
                content: `${name} đã xóa lịch hẹn: "${String(message.content || '')}"`,
                timestamp: Date.now(),
                replyToMessageId: String(message._id)
            });
            if (notifyRes?.success && typeof notifyRes._id === 'string') {
                socket.emit('send_message', {
                    _id: notifyRes._id,
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members,
                    type: 'notify',
                    content: `${name} đã xóa lịch hẹn: "${String(message.content || '')}"`,
                    timestamp: Date.now(),
                    replyToMessageId: String(message._id)
                });
            }
            socket.disconnect();
            onClose();
        } catch (error) {
            console.error('❌ Lỗi khi xóa lịch hẹn:', error);
            alert('Không thể xóa lịch hẹn. Vui lòng thử lại.');
        } finally{
            setSaving(false);
        }
    };
    const modalNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-stretch justify-center ${isDesktop ? 'bg-black/20' : 'bg-black/50'} backdrop-blur-sm`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full h-full rounded-none overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-gray-100 text-black w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        disabled: saving,
                                        className: "p-2 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-5 h-5 md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-2xl ",
                                        children: editing ? 'Sửa nhắc hẹn' : 'Chi tiết nhắc hẹn'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditing(true),
                                        className: "p-2 rounded-xl hover:bg-gray-200 cursor-pointer",
                                        title: "Sửa",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlinePencil"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMenuOpen((v)=>!v),
                                                className: "p-2 rounded-xl hover:bg-gray-200 cursor-pointer",
                                                title: "Thêm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this),
                                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMenuOpen(false);
                                                            setEditing(true);
                                                        },
                                                        className: "w-full px-4 py-2 text-left hover:bg-gray-50",
                                                        children: "Sửa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMenuOpen(false);
                                                            handleRecall();
                                                        },
                                                        className: "w-full px-4 py-2 text-left text-red-600 hover:bg-red-50",
                                                        children: "Xóa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                lineNumber: 285,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: saving || !isDirty || !isValid,
                                className: `px-4 py-1.5 font-bold cursor-pointer ${saving || !isDirty || !isValid ? 'text-gray-400' : 'text-blue-600'}`,
                                children: "Xong"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl",
                                    children: creatorInfo.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 32,
                                        height: 32,
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(creatorInfo.avatar),
                                        alt: creatorInfo.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 327,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo/avata.webp",
                                            alt: creatorInfo.name || 'User',
                                            width: 38,
                                            height: 38,
                                            className: "w-full h-full rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 336,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 335,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-800 text-xl",
                                        children: creatorInfo.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3 px-4 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiBellAlert"], {
                                            className: "w-6 h-6 text-rose-600 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex-1 min-w-0 text-xl text-gray-800 whitespace-pre-wrap break-words",
                                            children: content
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-4 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineClock"], {
                                            className: "w-6 h-6 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-800 text-xl",
                                                    children: dtLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500 text-lg",
                                                    children: [
                                                        "Lặp: ",
                                                        repeatLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl",
                                        children: creatorInfo.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            width: 32,
                                            height: 32,
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(creatorInfo.avatar),
                                            alt: creatorInfo.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 370,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center",
                                            children: (creatorInfo.name || 'N').charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 378,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-800 text-xl",
                                            children: creatorInfo.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 384,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 367,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiBellAlert"], {
                                        className: "w-6 h-6 text-rose-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: content,
                                        onChange: (e)=>setContent(e.target.value),
                                        className: "flex-1 bg-transparent outline-none text-[15px]",
                                        placeholder: "Nhập tiêu đề nhắc hẹn...",
                                        type: "text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 389,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full text-left flex items-center gap-3 px-4 py-4 cursor-pointer",
                                onClick: ()=>setShowDateSheet(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineClock"], {
                                        className: "w-6 h-6 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-800 text-xl",
                                            children: dtLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full text-left flex items-center gap-3 px-4 py-4 cursor-pointer",
                                onClick: ()=>setShowRepeatSheet(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineClock"], {
                                        className: "w-6 h-6 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-800 text-[15px]",
                                                children: "Chọn kiểu lặp lại"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                lineNumber: 412,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-500 text-xs",
                                                children: repeatLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                lineNumber: 413,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 411,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 406,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                        lineNumber: 366,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                    lineNumber: 365,
                    columnNumber: 11
                }, this),
                showRepeatSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[10000] flex items-end bg-black/40",
                    onClick: ()=>setShowRepeatSheet(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white rounded-t-2xl p-4",
                        onClick: (e)=>{
                            e.stopPropagation();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "Chọn kiểu lặp lại"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowRepeatSheet(false),
                                        className: "px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer",
                                        children: "Xong"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 430,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 428,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    {
                                        key: 'none',
                                        label: 'Không lặp lại'
                                    },
                                    {
                                        key: 'daily',
                                        label: 'Hàng ngày'
                                    },
                                    {
                                        key: 'weekly',
                                        label: 'Hàng tuần'
                                    },
                                    {
                                        key: 'monthly',
                                        label: 'Hàng tháng'
                                    }
                                ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                name: "repeat",
                                                checked: repeat === opt.key,
                                                onChange: ()=>setRepeat(opt.key)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                lineNumber: 448,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                                lineNumber: 454,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, opt.key, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                        lineNumber: 444,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 437,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                        lineNumber: 422,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this),
                showDateSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[10000] flex items-end bg:black/40",
                    onClick: ()=>setShowDateSheet(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white rounded-t-2xl p-4 space-y-3",
                        onClick: (e)=>{
                            e.stopPropagation();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local",
                                    value: dateTime,
                                    onChange: (e)=>setDateTime(e.target.value),
                                    className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                    lineNumber: 471,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDateSheet(false),
                                    className: "px-3 py-2 rounded-xl bg-blue-600 text-white font-semibold cursor-pointer",
                                    children: "Chọn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                    lineNumber: 479,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                                lineNumber: 478,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                        lineNumber: 464,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
                    lineNumber: 463,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
            lineNumber: 258,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
    const target = isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
    return isDesktop && target ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalNode, target) : modalNode;
}
_s(ReminderDetailModal, "f2ZAQu8EyD9cp2rmexVxgr+3PY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"]
    ];
});
_c = ReminderDetailModal;
var _c;
__turbopack_context__.k.register(_c, "ReminderDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ReminderList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReminderList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ReminderList({ onClose, embedded = false }) {
    _s();
    const { selectedChat, currentUser, isGroup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReminderList.useMemo[roomId]": ()=>{
            const me = String(currentUser._id);
            const other = String(selectedChat._id);
            return isGroup ? other : [
                me,
                other
            ].sort().join('_');
        }
    }["ReminderList.useMemo[roomId]"], [
        isGroup,
        selectedChat,
        currentUser
    ]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detailMsg, setDetailMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 🔥 Track ID của menu đang mở
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map()); // 🔥 Refs cho các menu
    const [create, setCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReminderList.useCallback[load]": async ()=>{
            try {
                setLoading(true);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                    limit: 200,
                    sortOrder: 'desc',
                    extraFilters: {
                        type: 'reminder',
                        isRecalled: {
                            $ne: true
                        }
                    }
                });
                const data = Array.isArray(res.data) ? res.data : [];
                setItems(data);
            } catch (error) {
                console.error('❌ Lỗi khi tải danh sách lịch hẹn:', error);
            } finally{
                setLoading(false);
            }
        }
    }["ReminderList.useCallback[load]"], [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReminderList.useEffect": ()=>{
            void load();
        }
    }["ReminderList.useEffect"], [
        load
    ]);
    // 🔥 CLOSE MENU KHI CLICK BÊN NGOÀI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReminderList.useEffect": ()=>{
            const handleClickOutside = {
                "ReminderList.useEffect.handleClickOutside": (event)=>{
                    if (!openMenuId) return;
                    const menuElement = menuRefs.current.get(openMenuId);
                    if (menuElement && !menuElement.contains(event.target)) {
                        setOpenMenuId(null);
                    }
                }
            }["ReminderList.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "ReminderList.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["ReminderList.useEffect"];
        }
    }["ReminderList.useEffect"], [
        openMenuId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReminderList.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socket.emit('join_room', roomId);
            socket.on('receive_message', {
                "ReminderList.useEffect": (data)=>{
                    if (data.roomId !== roomId || data.type !== 'reminder') return;
                    setItems({
                        "ReminderList.useEffect": (prev)=>{
                            const map = new Map();
                            [
                                ...prev,
                                data
                            ].forEach({
                                "ReminderList.useEffect": (m)=>map.set(String(m._id), m)
                            }["ReminderList.useEffect"]);
                            return Array.from(map.values()).sort({
                                "ReminderList.useEffect": (a, b)=>Number(b.timestamp) - Number(a.timestamp)
                            }["ReminderList.useEffect"]);
                        }
                    }["ReminderList.useEffect"]);
                }
            }["ReminderList.useEffect"]);
            socket.on('message_edited', {
                "ReminderList.useEffect": (data)=>{
                    if (data.roomId !== roomId) return;
                    setItems({
                        "ReminderList.useEffect": (prev)=>prev.map({
                                "ReminderList.useEffect": (m)=>String(m._id) === String(data._id) ? {
                                        ...m,
                                        content: data.content,
                                        editedAt: data.editedAt,
                                        originalContent: data.originalContent || m.originalContent || m.content,
                                        reminderAt: data.reminderAt ?? m.reminderAt,
                                        reminderNote: data.reminderNote ?? m.reminderNote
                                    } : m
                            }["ReminderList.useEffect"])
                    }["ReminderList.useEffect"]);
                    void load();
                }
            }["ReminderList.useEffect"]);
            socket.on('edit_message', {
                "ReminderList.useEffect": (data)=>{
                    if (data.roomId !== roomId) return;
                    setItems({
                        "ReminderList.useEffect": (prev)=>prev.map({
                                "ReminderList.useEffect": (m)=>String(m._id) === String(data._id) ? {
                                        ...m,
                                        content: data.newContent,
                                        editedAt: data.editedAt,
                                        originalContent: data.originalContent || m.originalContent || m.content
                                    } : m
                            }["ReminderList.useEffect"])
                    }["ReminderList.useEffect"]);
                    void load();
                }
            }["ReminderList.useEffect"]);
            socket.on('message_recalled', {
                "ReminderList.useEffect": (data)=>{
                    if (data.roomId !== roomId) return;
                    setItems({
                        "ReminderList.useEffect": (prev)=>prev.filter({
                                "ReminderList.useEffect": (m)=>String(m._id) !== String(data._id)
                            }["ReminderList.useEffect"])
                    }["ReminderList.useEffect"]);
                    void load();
                }
            }["ReminderList.useEffect"]);
            socket.on('message_deleted', {
                "ReminderList.useEffect": (data)=>{
                    if (data.roomId !== roomId) return;
                    setItems({
                        "ReminderList.useEffect": (prev)=>prev.filter({
                                "ReminderList.useEffect": (m)=>String(m._id) !== String(data._id)
                            }["ReminderList.useEffect"])
                    }["ReminderList.useEffect"]);
                    void load();
                }
            }["ReminderList.useEffect"]);
            return ({
                "ReminderList.useEffect": ()=>{
                    socket.disconnect();
                }
            })["ReminderList.useEffect"];
        }
    }["ReminderList.useEffect"], [
        roomId,
        load
    ]);
    const handleCreate = async ({ content, dateTime, note, repeat })=>{
        setCreate(true);
        const dt = Date.parse(dateTime);
        if (!content.trim() || Number.isNaN(dt)) {
            alert('Vui lòng nhập đầy đủ thông tin hợp lệ');
            return;
        }
        try {
            const createRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'reminder',
                content: content.trim(),
                timestamp: Date.now(),
                reminderAt: dt,
                reminderNote: note?.trim() || '',
                reminderFired: false,
                reminderRepeat: repeat || 'none'
            });
            if (createRes?.success) {
                const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const sockBase = {
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members
                };
                if (typeof createRes._id === 'string') {
                    socket.emit('send_message', {
                        ...sockBase,
                        _id: createRes._id,
                        type: 'reminder',
                        content: content.trim(),
                        timestamp: Date.now(),
                        reminderAt: dt,
                        reminderNote: note?.trim() || '',
                        reminderFired: false,
                        reminderRepeat: repeat || 'none'
                    });
                }
                const timeStr = new Date(dt).toLocaleString('vi-VN');
                const myName = currentUser.name;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: `${myName} đã tạo lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
                    timestamp: Date.now()
                });
                if (notifyRes?.success && typeof notifyRes._id === 'string') {
                    socket.emit('send_message', {
                        ...sockBase,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: `${myName} đã tạo lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
                        timestamp: Date.now()
                    });
                }
                socket.disconnect();
                await load();
            } else {
                alert('Tạo lịch hẹn thất bại. Vui lòng kiểm tra kết nối máy chủ.');
            }
            setCreate(false);
        } catch (error) {
            console.error('❌ Lỗi khi tạo lịch hẹn:', error);
            alert('Không thể tạo lịch hẹn. Vui lòng thử lại.');
        }
        setShowCreate(false);
    };
    const handleDelete = async (item)=>{
        const ok = confirm('Xóa vĩnh viễn lịch hẹn này?');
        if (!ok) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMessageApi"])(String(item._id));
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socket.emit('message_deleted', {
                _id: item._id,
                roomId
            });
            socket.disconnect();
            setOpenMenuId(null); // 🔥 Đóng menu sau khi xóa
            await load();
        } catch (error) {
            console.error('❌ Lỗi khi xóa lịch hẹn:', error);
            alert('Không thể xóa lịch hẹn. Vui lòng thử lại.');
        }
    };
    const handleEdit = (item)=>{
        setDetailMsg(item);
        setOpenMenuId(null); // 🔥 Đóng menu khi mở modal edit
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col h-full bg-gray-50 overflow-hidden",
            children: [
                !embedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-400 text-white p-3 flex items-center justify-between shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold",
                            children: "Danh sách lịch hẹn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCreate(true),
                                    className: "px-3 py-2 cursor-pointer rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegClock"], {}, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                    lineNumber: 277,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 p-5",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-500 py-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 300,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2",
                                    children: "Đang tải..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                            lineNumber: 299,
                            columnNumber: 15
                        }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCalendarOutline"], {
                                        className: "w-[8.125rem] h-[8.125rem] text-blue-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                        lineNumber: 306,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-sm text-gray-500",
                                    children: "Chưa có lịch hẹn nào được chia sẻ trong cuộc hội thoại này"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCreate(true),
                                        className: "px-3 py-2 cursor-pointer hover:bg-blue-400 transition-all duration-200 flex items-center gap-2 bg-blue-300 rounded-lg ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegClock"], {}, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                lineNumber: 316,
                                                columnNumber: 21
                                            }, this),
                                            " Tạo lịch hẹn mới"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                        lineNumber: 312,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : items.map((it)=>{
                            const itemId = String(it._id);
                            const at = typeof it.reminderAt === 'number' ? it.reminderAt : it.timestamp;
                            const timeStr = new Date(at).toLocaleString('vi-VN');
                            const sender = it.sender;
                            const senderName = typeof sender === 'object' && sender ? sender.name || '' : '';
                            const repeat = it.reminderRepeat || 'none';
                            const repeatLabel = repeat === 'daily' ? 'Hàng ngày' : repeat === 'weekly' ? 'Hàng tuần' : repeat === 'monthly' ? 'Hàng tháng' : 'Không lặp lại';
                            const isMenuOpen = openMenuId === itemId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-semibold text-gray-900 truncate",
                                                    children: it.content || 'Lịch hẹn'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegClock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        timeStr
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "Lặp: ",
                                                        repeatLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 25
                                                }, this),
                                                it.reminderNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded-lg truncate",
                                                    children: String(it.reminderNote)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 27
                                                }, this) : null,
                                                senderName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-2",
                                                    children: [
                                                        "Tạo bởi ",
                                                        senderName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 39
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                            lineNumber: 346,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: (el)=>{
                                                if (el) menuRefs.current.set(itemId, el);
                                                else menuRefs.current.delete(itemId);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setOpenMenuId(isMenuOpen ? null : itemId),
                                                    className: "p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer",
                                                    "aria-label": "Mở menu",
                                                    title: "Thêm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                        className: "w-5 h-5 text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 25
                                                }, this),
                                                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-10 animate-in fade-in slide-in-from-top-2 duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEdit(it),
                                                            className: "w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 31
                                                                }, this),
                                                                "Xem chi tiết"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEdit(it),
                                                            className: "w-full px-4 py-2.5 text-left text-sm text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 31
                                                                }, this),
                                                                "Chỉnh sửa"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDelete(it),
                                                            className: "w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 31
                                                                }, this),
                                                                "Xóa"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                            lineNumber: 361,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                    lineNumber: 345,
                                    columnNumber: 21
                                }, this)
                            }, itemId, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                                lineNumber: 341,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: showCreate,
                    onClose: ()=>setShowCreate(false),
                    onCreate: handleCreate,
                    createLoading: create
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: !!detailMsg,
                    message: detailMsg,
                    onClose: ()=>setDetailMsg(null),
                    onRefresh: load
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
                    lineNumber: 438,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ReminderList.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ReminderList, "coGDVe4888Gyz43oIK6yl09+N5A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"]
    ];
});
_c = ReminderList;
var _c;
__turbopack_context__.k.register(_c, "ReminderList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/CreatePollModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>CreatePollModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CreatePollModal({ isOpen, onClose, onCreate }) {
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '',
        ''
    ]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const maxOptions = 10;
    const isDesktop = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
    const [allowMultiple, setAllowMultiple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowAddOptions, setAllowAddOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hideVoters, setHideVoters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hideResultsUntilVote, setHideResultsUntilVote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [endAt, setEndAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deadlineOpen, setDeadlineOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deadlineMode, setDeadlineMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(endAt ? 'time' : 'none');
    const [deadlineInput, setDeadlineInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handleAddOption = ()=>{
        setOptions((prev)=>prev.length >= maxOptions ? prev : [
                ...prev,
                ''
            ]);
    };
    const handleChangeOption = (index, value)=>{
        setOptions((prev)=>prev.map((o, i)=>i === index ? value : o));
    };
    const handleSubmit = async ()=>{
        const trimmedQuestion = question.trim();
        const raw = options.map((o)=>o.trim()).filter((o)=>o);
        const lowerSet = Array.from(new Set(raw.map((o)=>o.toLowerCase())));
        const unique = lowerSet.map((lo)=>raw.find((x)=>x.toLowerCase() === lo));
        if (!trimmedQuestion || unique.length < 2) return;
        setSaving(true);
        try {
            await onCreate({
                question: trimmedQuestion,
                options: unique,
                pollAllowMultiple: allowMultiple,
                pollAllowAddOptions: allowAddOptions,
                pollHideVoters: hideVoters,
                pollHideResultsUntilVote: hideResultsUntilVote,
                pollEndAt: endAt ?? null
            });
            setQuestion('');
            setOptions([
                '',
                ''
            ]);
            setAllowMultiple(true);
            setAllowAddOptions(true);
            setHideVoters(false);
            setHideResultsUntilVote(false);
            setEndAt(null);
            setDeadlineMode('none');
            setDeadlineInput('');
            setDeadlineOpen(false);
        } finally{
            setSaving(false);
        }
    };
    const modalNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-stretch justify-center ${isDesktop ? 'bg-black/20' : 'bg-black/50'} backdrop-blur-sm`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full h-full rounded-none overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " px-4 pt-3 pb-2  text-black bg-gray-50 flex-shrink-0 border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        disabled: saving,
                                        className: " cursor-pointer  ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl ",
                                            children: "Tạo bình chọn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: saving || !question.trim() || new Set(options.map((o)=>o.trim()).filter((o)=>o).map((o)=>o.toLowerCase())).size < 2,
                                className: " cursor-pointer hover:text-blue-700 text-blue-500 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: " justify-end gap-2",
                                    children: saving ? 'Đang tạo...' : 'Tạo'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Câu hỏi *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: question,
                            onChange: (e)=>setQuestion(e.target.value),
                            rows: 3,
                            placeholder: "Đặt câu hỏi bình chọn",
                            className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tùy chọn *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: `Phương án ${idx + 1}`,
                                    type: "text",
                                    value: opt,
                                    onChange: (e)=>handleChangeOption(idx, e.target.value),
                                    className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
                                }, idx, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddOption,
                                    disabled: options.length >= maxOptions,
                                    className: "cursor-pointer px-4 py-2 mb-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: "Thêm lựa chọn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs px-4 text-gray-500",
                                    children: [
                                        "Cần tối thiểu 2 lựa chọn. Tối đa ",
                                        maxOptions,
                                        " lựa chọn."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        (()=>{
                            const raw = options.map((o)=>o.trim()).filter((o)=>o);
                            const uniqueCount = new Set(raw.map((o)=>o.toLowerCase())).size;
                            const notEnough = uniqueCount < 2;
                            const hasDup = uniqueCount !== raw.length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    notEnough && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs px-4 text-gray-500",
                                        children: "Cần ít nhất 2 lựa chọn hợp lệ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                        lineNumber: 152,
                                        columnNumber: 31
                                    }, this),
                                    hasDup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs px-4 text-gray-500",
                                        children: "Các lựa chọn trùng lặp sẽ được tự loại bỏ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true);
                        })(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 pt-4 border-t border-gray-200 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Đặt thời hạn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: endAt ? new Date(endAt).toLocaleString('vi-VN') : 'Không có thời hạn'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setDeadlineOpen(true);
                                                setDeadlineMode(endAt ? 'time' : 'none');
                                                setDeadlineInput(endAt ? new Date(endAt).toISOString().slice(0, 16) : new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString().slice(0, 16));
                                            },
                                            className: "cursor-pointer px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-semibold",
                                            children: "Thiết lập"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Ẩn người bình chọn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setHideVoters((v)=>!v),
                                            className: `cursor-pointer w-12 h-6 rounded-full transition ${hideVoters ? 'bg-blue-600' : 'bg-gray-300'}`,
                                            "aria-pressed": hideVoters,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block ml-0.5  w-5 h-5 bg-white rounded-full transform transition ${hideVoters ? 'translate-x-6' : 'translate-x-0'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Ẩn kết quả khi chưa bình chọn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setHideResultsUntilVote((v)=>!v),
                                            className: `cursor-pointer w-12 h-6 rounded-full transition ${hideResultsUntilVote ? 'bg-blue-600' : 'bg-gray-300'}`,
                                            "aria-pressed": hideResultsUntilVote,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block ml-0.5 w-5 h-5 bg-white rounded-full transform transition ${hideResultsUntilVote ? 'translate-x-6' : 'translate-x-0'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Chọn nhiều phương án"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAllowMultiple((v)=>!v),
                                            className: `cursor-pointer w-12 h-6 rounded-full transition ${allowMultiple ? 'bg-blue-600' : 'bg-gray-300'}`,
                                            "aria-pressed": allowMultiple,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block ml-0.5 w-5 h-5 bg-white rounded-full transform transition ${allowMultiple ? 'translate-x-6' : 'translate-x-0'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Có thể thêm phương án"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setAllowAddOptions((v)=>!v),
                                            className: `cursor-pointer w-12 h-6 rounded-full transition ${allowAddOptions ? 'bg-blue-600' : 'bg-gray-300'}`,
                                            "aria-pressed": allowAddOptions,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block ml-0.5 w-5 h-5 bg-white rounded-full transform transition ${allowAddOptions ? 'translate-x-6' : 'translate-x-0'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                deadlineOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/10",
                            onClick: ()=>setDeadlineOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border-t border-gray-200 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-800",
                                            children: "Đặt thời hạn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDeadlineOpen(false),
                                            className: "cursor-pointer text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    checked: deadlineMode === 'none',
                                                    onChange: ()=>setDeadlineMode('none')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                "Không giới hạn thời gian"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    checked: deadlineMode === 'time',
                                                    onChange: ()=>setDeadlineMode('time')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this),
                                                "Chọn thời điểm kết thúc"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        deadlineMode === 'time' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "datetime-local",
                                            value: deadlineInput,
                                            onChange: (e)=>setDeadlineInput(e.target.value),
                                            className: "w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (deadlineMode === 'none') {
                                                            setEndAt(null);
                                                            setDeadlineOpen(false);
                                                            return;
                                                        }
                                                        const dt = Date.parse(deadlineInput);
                                                        if (!Number.isNaN(dt)) {
                                                            setEndAt(dt);
                                                            setDeadlineOpen(false);
                                                        }
                                                    },
                                                    className: "flex-1 cursor-pointer py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm",
                                                    children: "Xong"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDeadlineOpen(false),
                                                    className: "flex-1 cursor-pointer py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-sm",
                                                    children: "Hủy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/CreatePollModal.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
    const target = isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
    return isDesktop && target ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalNode, target) : modalNode;
}
_s(CreatePollModal, "jBB5dKD2wZotKnP3VE+L9o7Agqo=");
_c = CreatePollModal;
var _c;
__turbopack_context__.k.register(_c, "CreatePollModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/PollDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>PollDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICTrash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICTrash.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function PollDetailModal({ isOpen, message, onClose, onRefresh }) {
    _s();
    const { selectedChat, currentUser, isGroup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const roomId = (()=>{
        const me = String(currentUser._id);
        const other = String(selectedChat._id);
        return isGroup ? other : [
            me,
            other
        ].sort().join('_');
    })();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const myId = String(currentUser._id);
    const isDesktop = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
    const votesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[votesMap]": ()=>message?.pollVotes || {}
    }["PollDetailModal.useMemo[votesMap]"], [
        message
    ]);
    const mySelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[mySelected]": ()=>{
            const arr = [];
            (message?.pollOptions || []).forEach({
                "PollDetailModal.useMemo[mySelected]": (opt)=>{
                    const vs = Array.isArray(votesMap[opt]) ? votesMap[opt] : [];
                    if (vs.includes(myId)) arr.push(opt);
                }
            }["PollDetailModal.useMemo[mySelected]"]);
            return arr;
        }
    }["PollDetailModal.useMemo[mySelected]"], [
        votesMap,
        message,
        myId
    ]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newOption, setNewOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVotersPanel, setShowVotersPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [allowMultiple, setAllowMultiple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allowAddOptions, setAllowAddOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hideVoters, setHideVoters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hideResultsUntilVote, setHideResultsUntilVote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editEndAt, setEditEndAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deadlineOpen, setDeadlineOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deadlineMode, setDeadlineMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [deadlineInput, setDeadlineInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const canLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[canLock]": ()=>{
            if (!message) return false;
            const sender = message.sender;
            const senderId = typeof sender === 'object' && sender ? String(sender._id) : String(sender);
            return senderId === String(currentUser._id);
        }
    }["PollDetailModal.useMemo[canLock]"], [
        message,
        currentUser._id
    ]);
    const endAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[endAt]": ()=>message?.pollEndAt ? Number(message.pollEndAt) : null
    }["PollDetailModal.useMemo[endAt]"], [
        message
    ]);
    const isEnded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[isEnded]": ()=>endAt ? Date.now() >= endAt : false
    }["PollDetailModal.useMemo[isEnded]"], [
        endAt
    ]);
    const isLocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[isLocked]": ()=>!!(message?.isPollLocked || isEnded)
    }["PollDetailModal.useMemo[isLocked]"], [
        message?.isPollLocked,
        isEnded
    ]);
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[members]": ()=>isGroup ? selectedChat.members || [] : []
    }["PollDetailModal.useMemo[members]"], [
        isGroup,
        selectedChat
    ]);
    const memberMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[memberMap]": ()=>{
            const map = new Map();
            members.forEach({
                "PollDetailModal.useMemo[memberMap]": (m)=>{
                    const id = String(m._id || m.id || '');
                    if (id) map.set(id, {
                        name: m.name,
                        avatar: m.avatar
                    });
                }
            }["PollDetailModal.useMemo[memberMap]"]);
            return map;
        }
    }["PollDetailModal.useMemo[memberMap]"], [
        members
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PollDetailModal.useEffect": ()=>{
            if (!message) return;
            const q = String(message.content || message.pollQuestion || '');
            const opts = Array.isArray(message.pollOptions) ? message.pollOptions : [];
            setQuestion(q);
            setOptions(opts);
            setEditing(false);
            setSelected(mySelected);
            setAdding(false);
            setNewOption('');
            setAllowMultiple(!!message.pollAllowMultiple);
            setAllowAddOptions(!!message.pollAllowAddOptions);
            setHideVoters(!!message.pollHideVoters);
            setHideResultsUntilVote(!!message.pollHideResultsUntilVote);
            setEditEndAt(message.pollEndAt ? Number(message.pollEndAt) : null);
        }
    }["PollDetailModal.useEffect"], [
        message,
        mySelected
    ]);
    const handleAddOption = ()=>{
        setAdding(true);
    };
    const handleAddOptionEditing = ()=>{
        setOptions((prev)=>[
                ...prev,
                ''
            ]);
    };
    const handleRemoveOptionEditing = (index)=>{
        setOptions((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handleChangeOption = (index, value)=>{
        setOptions((prev)=>prev.map((o, i)=>i === index ? value : o));
    };
    const handleSave = async ()=>{
        if (!message) return;
        if (!canLock) return;
        const cleanOptions = options.map((o)=>o.trim()).filter((o)=>o);
        if (!question.trim() || cleanOptions.length < 2) return;
        setSaving(true);
        try {
            const now = Date.now();
            const prevVotes = message.pollVotes || {};
            const nextVotes = {};
            cleanOptions.forEach((opt)=>{
                const arr = Array.isArray(prevVotes[opt]) ? prevVotes[opt] : [];
                nextVotes[opt] = arr;
            });
            const updatePayload = {
                content: question.trim(),
                pollQuestion: question.trim(),
                pollOptions: cleanOptions,
                pollVotes: nextVotes,
                pollAllowMultiple: allowMultiple,
                pollAllowAddOptions: allowAddOptions,
                pollHideVoters: hideVoters,
                pollHideResultsUntilVote: hideResultsUntilVote,
                pollEndAt: editEndAt,
                editedAt: now,
                timestamp: now
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(message._id), updatePayload);
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socket.once('connect', async ()=>{
                socket.emit('join_room', roomId);
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                socket.emit('edit_message', {
                    _id: message._id,
                    roomId,
                    ...updatePayload,
                    originalContent: message.content,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    members,
                    receiver
                });
                socket.emit('message_edited', {
                    _id: message._id,
                    roomId,
                    ...updatePayload,
                    originalContent: message.content,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    members,
                    receiver
                });
                const who = currentUser.name || 'Ai đó';
                const notifyText = `${who} đã chỉnh sửa bình chọn: "${question.trim()}"`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(message._id)
                });
                if (notifyRes?.success) {
                    socket.emit('send_message', {
                        roomId,
                        sender: String(currentUser._id),
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(message._id)
                    });
                }
                setTimeout(()=>socket.disconnect(), 300);
            });
            if (onRefresh) {
                await onRefresh();
            }
            onClose();
        } finally{
            setSaving(false);
        }
    };
    const toggleSelect = (opt)=>{
        if (isLocked) return;
        const allowMultiple = !!message?.pollAllowMultiple;
        setSelected((prev)=>{
            const has = prev.includes(opt);
            if (allowMultiple) return has ? prev.filter((o)=>o !== opt) : [
                ...prev,
                opt
            ];
            return has ? [] : [
                opt
            ];
        });
    };
    const previewVotesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[previewVotesMap]": ()=>{
            const out = {};
            (message?.pollOptions || []).forEach({
                "PollDetailModal.useMemo[previewVotesMap]": (opt)=>{
                    const base = Array.isArray(votesMap[opt]) ? [
                        ...votesMap[opt]
                    ] : [];
                    const withoutMe = base.filter({
                        "PollDetailModal.useMemo[previewVotesMap].withoutMe": (u)=>u !== myId
                    }["PollDetailModal.useMemo[previewVotesMap].withoutMe"]);
                    const nowSelected = selected.includes(opt);
                    out[opt] = nowSelected ? [
                        ...withoutMe,
                        myId
                    ] : withoutMe;
                }
            }["PollDetailModal.useMemo[previewVotesMap]"]);
            return out;
        }
    }["PollDetailModal.useMemo[previewVotesMap]"], [
        message,
        votesMap,
        selected,
        myId
    ]);
    const votersSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[votersSet]": ()=>{
            const s = new Set();
            (message?.pollOptions || []).forEach({
                "PollDetailModal.useMemo[votersSet]": (opt)=>{
                    const arr = Array.isArray(previewVotesMap[opt]) ? previewVotesMap[opt] : [];
                    arr.forEach({
                        "PollDetailModal.useMemo[votersSet]": (id)=>s.add(String(id))
                    }["PollDetailModal.useMemo[votersSet]"]);
                }
            }["PollDetailModal.useMemo[votersSet]"]);
            return s;
        }
    }["PollDetailModal.useMemo[votersSet]"], [
        message,
        previewVotesMap
    ]);
    const totalVotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[totalVotes]": ()=>{
            let total = 0;
            (message?.pollOptions || []).forEach({
                "PollDetailModal.useMemo[totalVotes]": (opt)=>{
                    const arr = Array.isArray(previewVotesMap[opt]) ? previewVotesMap[opt] : [];
                    total += arr.length;
                }
            }["PollDetailModal.useMemo[totalVotes]"]);
            return total;
        }
    }["PollDetailModal.useMemo[totalVotes]"], [
        message,
        previewVotesMap
    ]);
    const notVotedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollDetailModal.useMemo[notVotedIds]": ()=>{
            const s = new Set();
            members.forEach({
                "PollDetailModal.useMemo[notVotedIds]": (m)=>{
                    const id = String(m._id || m.id || '');
                    if (id) s.add(id);
                }
            }["PollDetailModal.useMemo[notVotedIds]"]);
            votersSet.forEach({
                "PollDetailModal.useMemo[notVotedIds]": (id)=>s.delete(id)
            }["PollDetailModal.useMemo[notVotedIds]"]);
            return Array.from(s);
        }
    }["PollDetailModal.useMemo[notVotedIds]"], [
        members,
        votersSet
    ]);
    const handleConfirmVote = async ()=>{
        if (!message) return;
        if (isLocked) return;
        const prevVotes = message.pollVotes || {};
        const nextVotes = {};
        (message.pollOptions || []).forEach((opt)=>{
            const arr = Array.isArray(prevVotes[opt]) ? [
                ...prevVotes[opt]
            ] : [];
            const filtered = arr.filter((u)=>u !== myId);
            nextVotes[opt] = filtered;
        });
        selected.forEach((opt)=>{
            const arr = Array.isArray(nextVotes[opt]) ? nextVotes[opt] : [];
            if (!arr.includes(myId)) nextVotes[opt] = [
                ...arr,
                myId
            ];
        });
        setSaving(true);
        try {
            const now = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(message._id), {
                pollVotes: nextVotes,
                editedAt: now,
                timestamp: now
            });
            // 🔥 EMIT SOCKET EVENT ĐỂ CẬP NHẬT REALTIME
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socket.once('connect', async ()=>{
                socket.emit('join_room', roomId);
                socket.emit('edit_message', {
                    _id: message._id,
                    roomId,
                    pollVotes: nextVotes,
                    editedAt: now,
                    timestamp: now
                });
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const who = message.pollHideVoters ? 'Một thành viên' : currentUser.name || 'Ai đó';
                const opted = selected.join(', ');
                const notifyText = `${who} đã bình chọn:  ${opted} trong bình chọn: "${question}"`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: myId,
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(message._id)
                });
                if (notifyRes?.success) {
                    socket.emit('send_message', {
                        roomId,
                        sender: myId,
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(message._id)
                    });
                }
                setTimeout(()=>socket.disconnect(), 300);
            });
            if (onRefresh) {
                await onRefresh();
            }
            onClose();
        } finally{
            setSaving(false);
        }
    };
    const handleAddOptionConfirm = async ()=>{
        if (!message) return;
        if (isLocked) return;
        const text = newOption.trim();
        if (!text) return;
        if (options.map((o)=>o.toLowerCase()).includes(text.toLowerCase())) {
            setAdding(false);
            setNewOption('');
            return;
        }
        const nextOptions = [
            ...options,
            text
        ];
        setSaving(true);
        try {
            const now = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(message._id), {
                pollOptions: nextOptions,
                editedAt: now,
                timestamp: now
            });
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socket.once('connect', async ()=>{
                socket.emit('join_room', roomId);
                socket.emit('edit_message', {
                    _id: message._id,
                    roomId,
                    pollOptions: nextOptions,
                    editedAt: now,
                    timestamp: now
                });
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const who = message.pollHideVoters ? 'Một thành viên' : currentUser.name || 'Ai đó';
                const notifyText = `${who} đã thêm lựa chọn "${text}" trong bình chọn: "${question}"`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(message._id)
                });
                if (notifyRes?.success) {
                    socket.emit('send_message', {
                        roomId,
                        sender: String(currentUser._id),
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(message._id)
                    });
                }
                setTimeout(()=>socket.disconnect(), 300);
            });
            if (onRefresh) {
                await onRefresh();
            }
            setOptions(nextOptions);
            setAdding(false);
            setNewOption('');
        } finally{
            setSaving(false);
        }
    };
    const handleToggleLock = async ()=>{
        if (!message || !canLock) return;
        const currentlyLocked = message.isPollLocked || isEnded;
        const nextLockedState = !currentlyLocked;
        if (!nextLockedState && message.pollEndAt != null) return;
        setSaving(true);
        try {
            const now = Date.now();
            const updateData = nextLockedState ? {
                isPollLocked: true,
                pollLockedAt: now,
                editedAt: now,
                timestamp: now
            } : {
                isPollLocked: false,
                editedAt: now,
                timestamp: now
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(message._id), updateData);
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socket.emit('edit_message', {
                _id: message._id,
                roomId,
                ...updateData
            });
            const name = currentUser.name;
            if (nextLockedState) {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members2 = isGroup ? selectedChat.members || [] : [];
                const endStr = new Date(now).toLocaleString('vi-VN');
                const notifyText = `${name} đã khóa bình chọn: "${String(message.content || message.pollQuestion || '')}" (kết thúc lúc ${endStr})`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(message._id)
                });
                if (notifyRes?.success) {
                    socket.emit('send_message', {
                        roomId,
                        sender: String(currentUser._id),
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members: members2,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(message._id)
                    });
                }
            } else {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members2 = isGroup ? selectedChat.members || [] : [];
                const notifyText = `${name} đã mở khóa bình chọn: "${String(message.content || message.pollQuestion || '')}"`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(message._id)
                });
                if (notifyRes?.success) {
                    socket.emit('send_message', {
                        roomId,
                        sender: String(currentUser._id),
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members: members2,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(message._id)
                    });
                }
            }
            socket.disconnect();
            if (onRefresh) {
                await onRefresh();
            }
            onClose();
        } finally{
            setSaving(false);
        }
    };
    if (!isOpen || !message) return null;
    const modalNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-stretch justify-center ${isDesktop ? 'bg-black/20' : 'bg-black/50'} backdrop-blur-sm`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full h-full rounded-none overflow-hidden flex flex-col relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 pt-3 pb-2 bg-white text-black border-b border-gray-200 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        disabled: saving,
                                        className: "cursor-pointer p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl",
                                            children: "Bình chọn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMenuOpen((v)=>!v),
                                        className: "p-2 rounded-xl hover:bg-gray-100 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-2xl z-[100]",
                                        children: canLock && !(message.pollEndAt != null && isEnded) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setMenuOpen(false);
                                                        setEditing(true);
                                                    },
                                                    className: "w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                                    children: "Chỉnh sửa bình chọn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setMenuOpen(false);
                                                        handleToggleLock();
                                                    },
                                                    className: "w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800 cursor-pointer",
                                                    children: message.isPollLocked || isEnded ? 'Mở khóa bình chọn' : 'Khóa bình chọn'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 521,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                        lineNumber: 519,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-5 space-y-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",
                    children: (()=>{
                        const showResults = !(message?.pollHideResultsUntilVote && mySelected.length === 0);
                        return !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[1rem] text-gray-800 whitespace-pre-wrap break-words",
                                    children: question
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 552,
                                    columnNumber: 17
                                }, this),
                                isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[1rem] text-gray-500 mt-1",
                                    children: [
                                        "Kết thúc lúc",
                                        ' ',
                                        new Date(endAt || message.pollLockedAt || message.editedAt || message.timestamp).toLocaleString('vi-VN')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 554,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-2 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-xs text-gray-500",
                                            children: message.pollAllowMultiple ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiListBullet"], {
                                                        className: "w-3.5 h-3.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Chọn nhiều phương án"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheckCircle"], {
                                                        className: "w-3.5 h-3.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Chọn 1 phương án"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, this),
                                        message.pollHideVoters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                                    className: "w-3.5 h-3.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Ẩn người bình chọn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 576,
                                            columnNumber: 21
                                        }, this),
                                        message.pollAllowAddOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                                    className: "w-3.5 h-3.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Cho phép thêm phương án"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 582,
                                            columnNumber: 21
                                        }, this),
                                        message.pollHideResultsUntilVote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                                    className: "w-3.5 h-3.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Ẩn kết quả khi chưa bình chọn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 588,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 594,
                                    columnNumber: 17
                                }, this),
                                message?.pollHideVoters || !showResults ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowVotersPanel(true),
                                    className: "cursor-pointer text-sm text-blue-600 hover:underline mt-2",
                                    children: `${votersSet.size} người đã bình chọn`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 596,
                                    columnNumber: 19
                                }, this),
                                !showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-2",
                                    children: "Bình chọn để xem kết quả"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 603,
                                    columnNumber: 34
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 mt-2",
                                    children: options.map((opt, idx)=>{
                                        const votedCount = Array.isArray(previewVotesMap[opt]) ? previewVotesMap[opt].length : 0;
                                        const active = selected.includes(opt);
                                        const arr = Array.isArray(previewVotesMap[opt]) ? previewVotesMap[opt] : [];
                                        const lastUid = arr.length ? String(arr[arr.length - 1]) : '';
                                        const lastInfo = lastUid ? memberMap.get(lastUid) : undefined;
                                        // const showResults = ... (already defined in outer scope)
                                        const percent = showResults && totalVotes > 0 ? votedCount / totalVotes * 100 : 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleSelect(opt),
                                            disabled: isLocked,
                                            className: `w-full cursor-pointer relative bg-gray-100 overflow-hidden px-4 py-3 rounded-xl  text-left transition-colors ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${active ? 'bg-blue-200' : 'bg-blue-200'}`,
                                                    style: {
                                                        width: `${percent}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 relative z-10 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex items-center justify-center w-5 h-5 rounded-full border ${active ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400'}`,
                                                            children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 40
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 min-w-0 text-[1rem] leading-relaxed break-words whitespace-pre-wrap",
                                                            children: opt
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 27
                                                        }, this),
                                                        showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: votedCount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 31
                                                                }, this),
                                                                !message?.pollHideVoters && lastUid ? lastInfo?.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200",
                                                                    title: lastInfo?.name,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(lastInfo.avatar),
                                                                        alt: "",
                                                                        width: 24,
                                                                        height: 24,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                                        lineNumber: 647,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 35
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    title: lastInfo?.name,
                                                                    className: "w-6 h-6 rounded-full border-2 border-white bg-blue-500 text-white flex items-center justify-center font-bold text-[10px]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/logo/avata.webp",
                                                                        alt: "",
                                                                        width: 64,
                                                                        height: 64,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                                        lineNumber: 660,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 35
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 617,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 604,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3",
                                    children: !adding ? message?.pollAllowAddOptions && !isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAddOption,
                                        className: "cursor-pointer px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-sm",
                                        children: "+ Thêm phương án"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                        lineNumber: 680,
                                        columnNumber: 23
                                    }, this) : null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: newOption,
                                                onChange: (e)=>setNewOption(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleAddOptionConfirm();
                                                    }
                                                },
                                                className: "flex-1 px-3 py-2 bg-gray-50 outline-none border-2 border-gray-200 rounded-2xl",
                                                placeholder: "Nhập lựa chọn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                lineNumber: 689,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddOptionConfirm,
                                                disabled: isLocked,
                                                className: "px-2 py-2 cursor-pointer bg-blue-600 text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                lineNumber: 701,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setAdding(false);
                                                    setNewOption('');
                                                },
                                                className: "px-2 py-2 text-red-600 cursor-pointer bg-red-50 rounded-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICTrash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                lineNumber: 708,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                        lineNumber: 688,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 677,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Câu hỏi *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 723,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: question,
                                    onChange: (e)=>setQuestion(e.target.value),
                                    rows: 3,
                                    className: "w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 724,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Tùy chọn *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 730,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: opt,
                                                    onChange: (e)=>handleChangeOption(idx, e.target.value),
                                                    className: "flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRemoveOptionEditing(idx),
                                                    className: "px-3 py-2 cursor-pointer  text-red-600  disabled:opacity-50 disabled:cursor-not-allowed",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICTrash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "w-10 h-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 733,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 731,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddOptionEditing,
                                    className: "cursor-pointer px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-sm",
                                    children: "+ Thêm lựa chọn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 750,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true);
                    })()
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-6 pt-2 border-t border-gray-200 flex-shrink-0",
                    children: !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleConfirmVote,
                        disabled: saving || isLocked,
                        className: `w-full cursor-pointer py-3.5 rounded-2xl font-semibold ${selected.length > 0 && !isLocked ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`,
                        children: "Bình chọn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                        lineNumber: 855,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setEditing(false);
                                    if (message) {
                                        const q = String(message.content || message.pollQuestion || '');
                                        const opts = Array.isArray(message.pollOptions) ? message.pollOptions : [];
                                        setQuestion(q);
                                        setOptions(opts);
                                    }
                                },
                                disabled: saving,
                                className: "flex-1 cursor-pointer py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-2xl",
                                children: "Hủy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                lineNumber: 868,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: saving,
                                className: "flex-1 cursor-pointer py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl",
                                children: "Lưu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                lineNumber: 883,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                        lineNumber: 867,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                    lineNumber: 853,
                    columnNumber: 9
                }, this),
                showVotersPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/10",
                            onClick: ()=>{
                                setShowVotersPanel(false);
                                setActiveTab('');
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                            lineNumber: 895,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 bg-white h-[50vh] rounded-t-2xl shadow-2xl border-t border-gray-200 z-[100] ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pt-3 pb-2 flex gap-2 overflow-x-auto whitespace-nowrap custom-scrollbar",
                                    children: [
                                        (message.pollOptions || []).map((opt)=>{
                                            const cnt = Array.isArray(previewVotesMap[opt]) ? previewVotesMap[opt].length : 0;
                                            const active = activeTab === opt || !activeTab && opt === (message.pollOptions || [])[0];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab(opt),
                                                className: `flex items-center shrink-0 text-sm cursor-pointer px-2 ${active ? 'border-b border-black text-black' : 'text-black'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: opt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 916,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1",
                                                        children: [
                                                            "(",
                                                            cnt,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, opt, true, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                lineNumber: 909,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('__none__'),
                                            className: `shrink-0 px-3 py-2 text-sm cursor-pointer whitespace-nowrap ${activeTab === '__none__' ? 'border-b border-black text-black' : 'text-black'}`,
                                            children: "Chưa bình chọn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 922,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 max-h-[40vh] overflow-y-auto",
                                    children: (()=>{
                                        const ids = activeTab === '__none__' ? notVotedIds : (Array.isArray(previewVotesMap[activeTab]) ? previewVotesMap[activeTab] : []).map((x)=>String(x));
                                        if (ids.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "px-1 text-sm text-gray-500",
                                            children: "Chưa có ai"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 940,
                                            columnNumber: 48
                                        }, this);
                                        return ids.map((uid)=>{
                                            const info = memberMap.get(String(uid));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 px-2 py-2",
                                                children: [
                                                    info?.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            width: 25,
                                                            height: 25,
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(info.avatar),
                                                            alt: info?.name || String(uid),
                                                            className: " w-full h-full object-cover rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/logo/avata.webp",
                                                            alt: info?.name || 'User',
                                                            width: 56,
                                                            height: 56,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                            lineNumber: 957,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: info?.name || String(uid)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, uid, true, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                lineNumber: 944,
                                                columnNumber: 23
                                            }, this);
                                        });
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 932,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                            lineNumber: 902,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                deadlineOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/10",
                            onClick: ()=>setDeadlineOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                            lineNumber: 977,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border-t border-gray-200 p-4 z-[110]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-800",
                                            children: "Đặt thời hạn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 980,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDeadlineOpen(false),
                                            className: "cursor-pointer text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                lineNumber: 982,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 981,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 979,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    checked: deadlineMode === 'none',
                                                    onChange: ()=>setDeadlineMode('none')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 19
                                                }, this),
                                                "Không giới hạn thời gian"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 986,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    checked: deadlineMode === 'time',
                                                    onChange: ()=>setDeadlineMode('time')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 19
                                                }, this),
                                                "Chọn thời điểm kết thúc"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 990,
                                            columnNumber: 17
                                        }, this),
                                        deadlineMode === 'time' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "datetime-local",
                                            value: deadlineInput,
                                            onChange: (e)=>setDeadlineInput(e.target.value),
                                            className: "w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 995,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (deadlineMode === 'none') {
                                                            setEditEndAt(null);
                                                            setDeadlineOpen(false);
                                                            return;
                                                        }
                                                        const dt = Date.parse(deadlineInput);
                                                        if (!Number.isNaN(dt)) {
                                                            setEditEndAt(dt);
                                                            setDeadlineOpen(false);
                                                        }
                                                    },
                                                    className: "flex-1 cursor-pointer py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm",
                                                    children: "Xong"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 1003,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDeadlineOpen(false),
                                                    className: "flex-1 cursor-pointer py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-sm",
                                                    children: "Hủy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                                    lineNumber: 985,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
                            lineNumber: 978,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
            lineNumber: 500,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/PollDetailModal.tsx",
        lineNumber: 495,
        columnNumber: 5
    }, this);
    const target = isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
    return isDesktop && target ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(modalNode, target) : modalNode;
}
_s(PollDetailModal, "kQQKpEHQ+ldq7oTC73bRTDY3uh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"]
    ];
});
_c = PollDetailModal;
var _c;
__turbopack_context__.k.register(_c, "PollDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/PollList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>PollList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CreatePollModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PollDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function PollList({ onClose, onRefresh, embedded = false }) {
    _s();
    // ✅ BỎ DÒNG NÀY - Không cần nữa
    // const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL as string | undefined;
    const { selectedChat, currentUser, isGroup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PollList.useMemo[roomId]": ()=>{
            const me = String(currentUser._id);
            const other = String(selectedChat._id);
            return isGroup ? other : [
                me,
                other
            ].sort().join('_');
        }
    }["PollList.useMemo[roomId]"], [
        isGroup,
        selectedChat,
        currentUser
    ]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detailMsg, setDetailMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PollList.useCallback[load]": async ()=>{
            try {
                setLoading(true);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                    limit: 200,
                    sortOrder: 'desc',
                    extraFilters: {
                        type: 'poll',
                        isRecalled: {
                            $ne: true
                        }
                    }
                });
                const data = Array.isArray(res.data) ? res.data : [];
                setItems(data);
            } catch  {} finally{
                setLoading(false);
            }
        }
    }["PollList.useCallback[load]"], [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PollList.useEffect": ()=>{
            void load();
        }
    }["PollList.useEffect"], [
        load
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PollList.useEffect": ()=>{
            const handleClickOutside = {
                "PollList.useEffect.handleClickOutside": (event)=>{
                    if (!openMenuId) return;
                    const menuElement = menuRefs.current.get(openMenuId);
                    if (menuElement && !menuElement.contains(event.target)) {
                        setOpenMenuId(null);
                    }
                }
            }["PollList.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "PollList.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["PollList.useEffect"];
        }
    }["PollList.useEffect"], [
        openMenuId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PollList.useEffect": ()=>{
            socketRef.current?.disconnect();
            // ✅ DÙNG resolveSocketUrl() thống nhất
            socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socketRef.current.emit('join_room', roomId);
            socketRef.current.on('receive_message', {
                "PollList.useEffect": (data)=>{
                    if (String(data.roomId) !== String(roomId) || data.type !== 'poll') return;
                    setItems({
                        "PollList.useEffect": (prev)=>{
                            const map = new Map();
                            [
                                ...prev,
                                data
                            ].forEach({
                                "PollList.useEffect": (m)=>map.set(String(m._id), m)
                            }["PollList.useEffect"]);
                            return Array.from(map.values()).sort({
                                "PollList.useEffect": (a, b)=>Number(b.timestamp) - Number(a.timestamp)
                            }["PollList.useEffect"]);
                        }
                    }["PollList.useEffect"]);
                }
            }["PollList.useEffect"]);
            socketRef.current.on('message_edited', {
                "PollList.useEffect": (data)=>{
                    if (String(data.roomId) !== String(roomId)) return;
                    setItems({
                        "PollList.useEffect": (prev)=>{
                            const updated = prev.map({
                                "PollList.useEffect.updated": (m)=>String(m._id) === String(data._id) ? {
                                        ...m,
                                        content: data.content ?? m.content,
                                        editedAt: data.editedAt ?? m.editedAt,
                                        pollQuestion: data.pollQuestion ?? m.pollQuestion,
                                        pollOptions: data.pollOptions ?? m.pollOptions,
                                        pollVotes: data.pollVotes ?? m.pollVotes,
                                        isPollLocked: data.isPollLocked ?? m.isPollLocked,
                                        pollLockedAt: data.pollLockedAt ?? m.pollLockedAt,
                                        pollAllowMultiple: data.pollAllowMultiple ?? m.pollAllowMultiple,
                                        pollAllowAddOptions: data.pollAllowAddOptions ?? m.pollAllowAddOptions,
                                        pollHideVoters: data.pollHideVoters ?? m.pollHideVoters,
                                        pollHideResultsUntilVote: data.pollHideResultsUntilVote ?? m.pollHideResultsUntilVote,
                                        pollEndAt: typeof data.pollEndAt !== 'undefined' ? data.pollEndAt : m.pollEndAt,
                                        timestamp: data.timestamp ?? m.timestamp,
                                        isPinned: typeof data.isPinned === 'boolean' ? data.isPinned : m.isPinned
                                    } : m
                            }["PollList.useEffect.updated"]);
                            return updated.sort({
                                "PollList.useEffect": (a, b)=>Number(b.timestamp) - Number(a.timestamp)
                            }["PollList.useEffect"]);
                        }
                    }["PollList.useEffect"]);
                }
            }["PollList.useEffect"]);
            socketRef.current.on('edit_message', {
                "PollList.useEffect": (data)=>{
                    if (String(data.roomId) !== String(roomId)) return;
                    setItems({
                        "PollList.useEffect": (prev)=>prev.map({
                                "PollList.useEffect": (m)=>String(m._id) === String(data._id) ? {
                                        ...m,
                                        ...data,
                                        content: data.newContent || data.content || m.content,
                                        editedAt: data.editedAt,
                                        originalContent: m.originalContent || m.content
                                    } : m
                            }["PollList.useEffect"])
                    }["PollList.useEffect"]);
                }
            }["PollList.useEffect"]);
            socketRef.current.on('message_deleted', {
                "PollList.useEffect": (data)=>{
                    if (String(data.roomId) !== String(roomId)) return;
                    setItems({
                        "PollList.useEffect": (prev)=>prev.filter({
                                "PollList.useEffect": (m)=>String(m._id) !== String(data._id)
                            }["PollList.useEffect"])
                    }["PollList.useEffect"]);
                }
            }["PollList.useEffect"]);
            socketRef.current.on('message_pinned', {
                "PollList.useEffect": (data)=>{
                    if (String(data.roomId) !== String(roomId)) return;
                    setItems({
                        "PollList.useEffect": (prev)=>prev.map({
                                "PollList.useEffect": (m)=>String(m._id) === String(data._id) ? {
                                        ...m,
                                        isPinned: !!data.isPinned
                                    } : m
                            }["PollList.useEffect"])
                    }["PollList.useEffect"]);
                }
            }["PollList.useEffect"]);
            return ({
                "PollList.useEffect": ()=>{
                    socketRef.current?.disconnect();
                    socketRef.current = null;
                }
            })["PollList.useEffect"];
        }
    }["PollList.useEffect"], [
        roomId,
        load
    ]); // ✅ BỎ SOCKET_URL khỏi dependencies
    const handleCreate = async ({ question, options, pollAllowMultiple, pollAllowAddOptions, pollHideVoters, pollHideResultsUntilVote, pollEndAt })=>{
        const q = question.trim();
        const raw = options.map((o)=>o.trim()).filter((o)=>o);
        const lowers = Array.from(new Set(raw.map((o)=>o.toLowerCase())));
        const unique = lowers.map((lo)=>raw.find((x)=>x.toLowerCase() === lo));
        if (!q || unique.length < 2) return;
        try {
            const createRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'poll',
                content: q,
                timestamp: Date.now(),
                pollQuestion: q,
                pollOptions: unique,
                pollVotes: {},
                isPollLocked: false,
                pollAllowMultiple,
                pollAllowAddOptions,
                pollHideVoters,
                pollHideResultsUntilVote,
                pollEndAt: pollEndAt ?? null
            });
            if (createRes?.success) {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const sockBase = {
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members
                };
                const name = currentUser.name;
                if (typeof createRes._id === 'string') {
                    socketRef.current?.emit('send_message', {
                        ...sockBase,
                        _id: createRes._id,
                        type: 'poll',
                        content: q,
                        timestamp: Date.now(),
                        pollQuestion: q,
                        pollOptions: unique,
                        pollVotes: {},
                        isPollLocked: false,
                        pollAllowMultiple,
                        pollAllowAddOptions,
                        pollHideVoters,
                        pollHideResultsUntilVote,
                        pollEndAt: pollEndAt ?? null
                    });
                    const notify = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                        roomId,
                        sender: String(currentUser._id),
                        type: 'notify',
                        content: `${name} tạo cuộc bình chọn mới: "${q}"`,
                        timestamp: Date.now(),
                        replyToMessageId: createRes._id
                    });
                    if (notify?.success) {
                        socketRef.current?.emit('send_message', {
                            ...sockBase,
                            _id: notify._id,
                            type: 'notify',
                            content: `${name} tạo cuộc bình chọn mới: "${q}"`,
                            timestamp: Date.now(),
                            replyToMessageId: createRes._id
                        });
                    }
                }
            }
        } catch  {}
        setShowCreate(false);
    };
    const canLock = (item)=>{
        const sender = item.sender;
        const senderId = typeof sender === 'object' && sender ? String(sender._id) : String(sender);
        const isCreator = senderId === String(currentUser._id);
        return isCreator;
    };
    const handleToggleLock = async (item)=>{
        if (!canLock(item)) return;
        const next = !item.isPollLocked;
        if (!next && item.pollEndAt != null) return;
        try {
            const now = Date.now();
            const name = currentUser.name;
            const updateData = next ? {
                isPollLocked: true,
                pollLockedAt: now,
                editedAt: now,
                timestamp: now
            } : {
                isPollLocked: false,
                editedAt: now,
                timestamp: now
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(item._id), updateData);
            socketRef.current?.emit('edit_message', {
                _id: item._id,
                roomId,
                ...updateData
            });
            if (next) {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const endStr = new Date(now).toLocaleString('vi-VN');
                const notifyText = `${name} đã khóa bình chọn: "${String(item.content || item.pollQuestion || '')}" (kết thúc lúc ${endStr})`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(item._id)
                });
                if (notifyRes?.success) {
                    socketRef.current?.emit('send_message', {
                        roomId,
                        sender: String(currentUser._id),
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(item._id)
                    });
                }
            } else {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const notifyText = `${name} đã mở khóa bình chọn: "${String(item.content || item.pollQuestion || '')}"`;
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(item._id)
                });
                if (notifyRes?.success) {
                    socketRef.current?.emit('send_message', {
                        roomId,
                        sender: String(currentUser._id),
                        senderName: currentUser.name,
                        isGroup,
                        receiver,
                        members,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: notifyText,
                        timestamp: now,
                        replyToMessageId: String(item._id)
                    });
                }
            }
            if (onRefresh) {
                await onRefresh();
            }
        } catch  {}
    };
    const handleTogglePin = async (item)=>{
        const next = !item.isPinned;
        setItems((prev)=>prev.map((m)=>String(m._id) === String(item._id) ? {
                    ...m,
                    isPinned: next
                } : m));
        try {
            const now = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(item._id), {
                isPinned: next,
                editedAt: now
            });
            socketRef.current?.emit('edit_message', {
                _id: item._id,
                roomId,
                isPinned: next,
                editedAt: now
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(item._id), {
                isPinned: next
            });
            socketRef.current?.emit('pin_message', {
                _id: item._id,
                roomId,
                isPinned: next
            });
            const receiver = isGroup ? null : String(selectedChat._id);
            const members = isGroup ? selectedChat.members || [] : [];
            const who = currentUser.name || 'Ai đó';
            const action = next ? 'đã ghim' : 'đã bỏ ghim';
            const notifyText = `${who} ${action} một bình chọn: "${String(item.content || item.pollQuestion || '')}"`;
            const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'notify',
                content: notifyText,
                timestamp: now,
                replyToMessageId: String(item._id)
            });
            if (notifyRes?.success) {
                socketRef.current?.emit('send_message', {
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members,
                    _id: notifyRes._id,
                    type: 'notify',
                    content: notifyText,
                    timestamp: now,
                    replyToMessageId: String(item._id)
                });
            }
        } catch  {
            setItems((prev)=>prev.map((m)=>String(m._id) === String(item._id) ? {
                        ...m,
                        isPinned: !next
                    } : m));
        }
    };
    const handleEdit = (item)=>{
        setDetailMsg(item);
        setOpenMenuId(null);
    };
    const getUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PollList.useCallback[getUserInfo]": (userId)=>{
            if (String(userId) === String(currentUser._id)) return currentUser;
            if (isGroup) {
                const members = selectedChat.members || [];
                const member = members.find({
                    "PollList.useCallback[getUserInfo].member": (m)=>{
                        const typed = m;
                        return String(typed._id || typed.id) === String(userId);
                    }
                }["PollList.useCallback[getUserInfo].member"]);
                if (member) return member;
            } else {
                const other = selectedChat;
                if (String(other._id) === String(userId)) return other;
            }
            return null;
        }
    }["PollList.useCallback[getUserInfo]"], [
        currentUser,
        isGroup,
        selectedChat
    ]);
    const formatTime = (ts)=>{
        try {
            // Format: 21/10 lúc 09:39
            const d = new Date(ts);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const hour = String(d.getHours()).padStart(2, '0');
            const minute = String(d.getMinutes()).padStart(2, '0');
            return `${day}/${month} lúc ${hour}:${minute}`;
        } catch  {
            return '';
        }
    };
    const getVotesCount = (item, option)=>{
        const v = item.pollVotes || {};
        const arr = v[option] || [];
        return arr.length;
    };
    const getVotersForOption = (item, option)=>{
        const v = item.pollVotes || {};
        const arr = v[option] || [];
        return arr;
    };
    const didIVote = (item, option)=>{
        const myId = String(currentUser._id);
        const v = item.pollVotes || {};
        const arr = v[option] || [];
        return arr.includes(myId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full bg-gray-50 overflow-hidden",
                children: [
                    !embedded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-800",
                                children: "Bình chọn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCreate(true),
                                        className: "p-2 cursor-pointer rounded-full hover:bg-gray-100 text-blue-600 transition-all duration-200",
                                        title: "Tạo bình chọn mới",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 2,
                                            stroke: "currentColor",
                                            className: "w-6 h-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 4.5v15m7.5-7.5h-15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                lineNumber: 475,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                        lineNumber: 462,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "p-2 cursor-pointer rounded-full hover:bg-gray-100 text-gray-500 transition-all duration-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                        lineNumber: 458,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 bg-gray-100 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 max-w-2xl mx-auto",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-500 py-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                        lineNumber: 495,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2",
                                        children: "Đang tải..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                        lineNumber: 496,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                lineNumber: 494,
                                columnNumber: 15
                            }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center py-20 text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-16 h-16 mb-4 opacity-50",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1.5,
                                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                            lineNumber: 501,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                        lineNumber: 500,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Chưa có bình chọn nào"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                        lineNumber: 508,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                lineNumber: 499,
                                columnNumber: 15
                            }, this) : items.map((it)=>{
                                const itemId = String(it._id);
                                const sender = it.sender;
                                const senderId = typeof sender === 'object' ? String(sender._id) : String(sender);
                                const senderInfo = getUserInfo(senderId) || (typeof sender === 'object' ? sender : null);
                                const senderName = senderInfo?.name || 'Ai đó';
                                const senderAvatar = senderInfo?.avatar;
                                const isMenuOpen = openMenuId === itemId;
                                const locked = !!it.isPollLocked;
                                const totalVotes = Object.values(it.pollVotes || {}).flat().length;
                                const uniqueVoters = new Set(Object.values(it.pollVotes || {}).flat()).size;
                                const hasVoted = Object.values(it.pollVotes || {}).some((arr)=>arr.includes(String(currentUser._id)));
                                const showResults = !(it.pollHideResultsUntilVote && !hasVoted);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-200",
                                                            children: senderAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(senderAvatar),
                                                                alt: senderName,
                                                                width: 40,
                                                                height: 40,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/logo/avata.webp",
                                                                alt: senderName,
                                                                width: 40,
                                                                height: 40,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                            lineNumber: 534,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-gray-900 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            senderName,
                                                                                            " ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-normal text-gray-500",
                                                                                                children: "tạo một bình chọn"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                                lineNumber: 558,
                                                                                                columnNumber: 48
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                        lineNumber: 557,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-500 border border-gray-200",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                                                                                className: "w-3 h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                                lineNumber: 562,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            "Đã khóa"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                        lineNumber: 561,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 556,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-400 mt-0.5",
                                                                                children: formatTime(it.timestamp)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 567,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setOpenMenuId(isMenuOpen ? null : itemId),
                                                                                className: "p-1 cursor-pointer text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                    lineNumber: 574,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 570,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                ref: (el)=>{
                                                                                    if (el) menuRefs.current.set(itemId, el);
                                                                                    else menuRefs.current.delete(itemId);
                                                                                },
                                                                                className: "absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20 py-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleEdit(it),
                                                                                        className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                                                                                        children: "Xem chi tiết"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                        lineNumber: 586,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleTogglePin(it),
                                                                                        className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                                                                                        children: it.isPinned ? 'Bỏ ghim' : 'Ghim bình chọn'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                        lineNumber: 592,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    canLock(it) && !(it.pollEndAt != null && Date.now() >= Number(it.pollEndAt)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleToggleLock(it),
                                                                                        className: "cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600",
                                                                                        children: locked ? 'Mở khóa bình chọn' : 'Khóa bình chọn'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                        lineNumber: 599,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 579,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                        lineNumber: 569,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base font-medium text-gray-900 mb-2 leading-snug truncate",
                                                            children: it.content || it.pollQuestion || 'Bình chọn'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-0.5 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                    children: it.pollAllowMultiple ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiListBullet"], {
                                                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Chọn nhiều phương án"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheckCircle"], {
                                                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 628,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Chọn 1 phương án"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                lineNumber: 629,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 27
                                                                }, this),
                                                                it.pollHideVoters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                                                            className: "w-3.5 h-3.5 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 635,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Ẩn người bình chọn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 636,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 29
                                                                }, this),
                                                                it.pollAllowAddOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                                                            className: "w-3.5 h-3.5 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 641,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Cho phép thêm phương án"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 642,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 29
                                                                }, this),
                                                                it.pollHideResultsUntilVote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                                                            className: "w-3.5 h-3.5 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Ẩn kết quả khi chưa bình chọn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 648,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 mb-3 cursor-pointer",
                                                            onClick: ()=>handleEdit(it),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-blue-500 font-medium hover:underline",
                                                                    children: showResults ? `${uniqueVoters} người đã bình chọn` : 'Bình chọn để xem kết quả'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 text-blue-500",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M19 9l-7 7-7-7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                        lineNumber: 658,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: (it.pollOptions || []).map((opt, idx)=>{
                                                                const voters = getVotersForOption(it, opt);
                                                                const count = voters.length;
                                                                const voted = didIVote(it, opt);
                                                                const percent = showResults && totalVotes > 0 ? count / totalVotes * 100 : 0;
                                                                // Get avatars of voters (max 3)
                                                                const voterAvatars = voters.slice(0, 3).map((uid)=>{
                                                                    const u = getUserInfo(uid);
                                                                    return u ? {
                                                                        id: uid,
                                                                        avatar: u.avatar,
                                                                        name: u.name
                                                                    } : {
                                                                        id: uid,
                                                                        avatar: null,
                                                                        name: 'User'
                                                                    };
                                                                });
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>handleEdit(it),
                                                                    className: `group relative overflow-hidden bg-gray-100 rounded-lg p-3 cursor-pointer transition-all duration-200
                                               
                                             
                                            `,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${voted ? 'bg-blue-200' : 'bg-blue-200'}`,
                                                                            style: {
                                                                                width: `${percent}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex items-center justify-between gap-3 z-10",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-sm  `,
                                                                                    children: opt
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                    lineNumber: 694,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                !it.pollHideVoters && showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center -space-x-2",
                                                                                    children: [
                                                                                        voterAvatars.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200",
                                                                                                title: u.name,
                                                                                                children: u.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(u.avatar),
                                                                                                    alt: "",
                                                                                                    width: 24,
                                                                                                    height: 24,
                                                                                                    className: "w-full h-full object-cover"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                                    lineNumber: 706,
                                                                                                    columnNumber: 45
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    src: "/logo/avata.webp",
                                                                                                    alt: "",
                                                                                                    width: 24,
                                                                                                    height: 24,
                                                                                                    className: "w-full h-full object-cover"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                                    lineNumber: 714,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            }, i, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                                lineNumber: 700,
                                                                                                columnNumber: 41
                                                                                            }, this)),
                                                                                        count > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-6 h-6 rounded-full border-2 border-white bg-gray-700 text-white text-[10px] flex items-center justify-center font-bold",
                                                                                            children: [
                                                                                                "+",
                                                                                                count - 3
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                            lineNumber: 725,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        count > 0 && count <= 3 && voterAvatars.length < count && // Fallback if we can't find users for all votes
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-6 h-6 rounded-full border-2 border-white bg-gray-300 text-gray-600 text-[10px] flex items-center justify-center font-bold",
                                                                                            children: count
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                            lineNumber: 731,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                    lineNumber: 698,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                it.pollHideVoters && showResults && count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-500 font-medium",
                                                                                    children: [
                                                                                        count,
                                                                                        " lượt"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                                    lineNumber: 738,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                            lineNumber: 693,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, `${itemId}-${idx}`, true, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 31
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                            lineNumber: 532,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(it),
                                                disabled: false,
                                                className: `w-full cursor-pointer py-2.5 rounded-lg font-medium transition-colors text-sm
                                ${locked ? 'bg-gray-100 text-gray-500 cursor-default' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200'}`,
                                                children: locked ? 'Đã khóa bình chọn' : it.pollVotes && Object.values(it.pollVotes).some((arr)=>arr.includes(String(currentUser._id))) ? 'Đổi bình chọn' : 'Bình chọn'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                                lineNumber: 750,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                            lineNumber: 749,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, itemId, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                                    lineNumber: 527,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreate,
                onClose: ()=>setShowCreate(false),
                onCreate: handleCreate
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!detailMsg,
                message: detailMsg,
                onClose: ()=>setDetailMsg(null)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/PollList.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PollList, "3lzvK6bBSvL0RXE8MWporPuhFho=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"]
    ];
});
_c = PollList;
var _c;
__turbopack_context__.k.register(_c, "PollList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PinnedMessagesList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICPin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICPin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PollList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReminderList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CreatePollModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
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
function PinnedMessagesList({ onClose, onJumpToMessage }) {
    _s();
    const { selectedChat, currentUser, isGroup, allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PinnedMessagesList.useMemo[roomId]": ()=>{
            const me = String(currentUser._id);
            const other = String(selectedChat._id);
            return isGroup ? other : [
                me,
                other
            ].sort().join('_');
        }
    }["PinnedMessagesList.useMemo[roomId]"], [
        isGroup,
        selectedChat,
        currentUser
    ]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pinned');
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateMenu, setShowCreateMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreatePoll, setShowCreatePoll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateNote, setShowCreateNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createLoading, setCreateLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeMenuId, setActiveMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- Socket Connection (for sending messages) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedMessagesList.useEffect": ()=>{
            socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            return ({
                "PinnedMessagesList.useEffect": ()=>{
                    socketRef.current?.disconnect();
                }
            })["PinnedMessagesList.useEffect"];
        }
    }["PinnedMessagesList.useEffect"], []);
    // --- Load Pinned Messages ---
    const loadPinned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PinnedMessagesList.useCallback[loadPinned]": async ()=>{
            try {
                setLoading(true);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                    limit: 200,
                    sortOrder: 'desc',
                    extraFilters: {
                        isPinned: true,
                        isRecalled: {
                            $ne: true
                        }
                    }
                });
                const data = Array.isArray(res.data) ? res.data : [];
                setItems(data);
            } catch (error) {
                console.error('❌ Lỗi khi tải danh sách tin nhắn đã ghim:', error);
            } finally{
                setLoading(false);
            }
        }
    }["PinnedMessagesList.useCallback[loadPinned]"], [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedMessagesList.useEffect": ()=>{
            if (activeTab === 'pinned') {
                void loadPinned();
            }
        }
    }["PinnedMessagesList.useEffect"], [
        loadPinned,
        activeTab
    ]);
    const getSender = (msg)=>{
        if (typeof msg.sender === 'object') return msg.sender;
        return allUsers.find((u)=>String(u._id) === String(msg.sender)) || {};
    };
    // --- Handlers ---
    const handleCreatePoll = async ({ question, options, pollAllowMultiple, pollAllowAddOptions, pollHideVoters, pollHideResultsUntilVote, pollEndAt })=>{
        const q = question.trim();
        if (!q) return;
        try {
            const createRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'poll',
                content: q,
                timestamp: Date.now(),
                pollQuestion: q,
                pollOptions: options,
                pollVotes: {},
                isPollLocked: false,
                pollAllowMultiple,
                pollAllowAddOptions,
                pollHideVoters,
                pollHideResultsUntilVote,
                pollEndAt: pollEndAt ?? null
            });
            if (createRes?.success) {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const sockBase = {
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members
                };
                if (typeof createRes._id === 'string') {
                    socketRef.current?.emit('send_message', {
                        ...sockBase,
                        _id: createRes._id,
                        type: 'poll',
                        content: q,
                        timestamp: Date.now(),
                        pollQuestion: q,
                        pollOptions: options,
                        pollVotes: {},
                        isPollLocked: false,
                        pollAllowMultiple,
                        pollAllowAddOptions,
                        pollHideVoters,
                        pollHideResultsUntilVote,
                        pollEndAt: pollEndAt ?? null
                    });
                    // Notify
                    const notify = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                        roomId,
                        sender: String(currentUser._id),
                        type: 'notify',
                        content: `${currentUser.name} tạo cuộc bình chọn mới: "${q}"`,
                        timestamp: Date.now(),
                        replyToMessageId: createRes._id
                    });
                    if (notify?.success) {
                        socketRef.current?.emit('send_message', {
                            ...sockBase,
                            _id: notify._id,
                            type: 'notify',
                            content: `${currentUser.name} tạo cuộc bình chọn mới: "${q}"`,
                            timestamp: Date.now(),
                            replyToMessageId: createRes._id
                        });
                    }
                }
                setShowCreatePoll(false);
                if (activeTab !== 'poll') setActiveTab('poll');
            }
        } catch (error) {
            console.error('Failed to create poll:', error);
        }
    };
    const handleCreateNote = async ({ content, dateTime, note, repeat })=>{
        setCreateLoading(true);
        const dt = Date.parse(dateTime);
        if (!content.trim() || Number.isNaN(dt)) {
            alert('Vui lòng nhập đầy đủ thông tin hợp lệ');
            setCreateLoading(false);
            return;
        }
        try {
            const createRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                roomId,
                sender: String(currentUser._id),
                type: 'reminder',
                content: content.trim(),
                timestamp: Date.now(),
                reminderAt: dt,
                reminderNote: note?.trim() || '',
                reminderFired: false,
                reminderRepeat: repeat || 'none'
            });
            if (createRes?.success) {
                const receiver = isGroup ? null : String(selectedChat._id);
                const members = isGroup ? selectedChat.members || [] : [];
                const sockBase = {
                    roomId,
                    sender: String(currentUser._id),
                    senderName: currentUser.name,
                    isGroup,
                    receiver,
                    members
                };
                if (typeof createRes._id === 'string') {
                    socketRef.current?.emit('send_message', {
                        ...sockBase,
                        _id: createRes._id,
                        type: 'reminder',
                        content: content.trim(),
                        timestamp: Date.now(),
                        reminderAt: dt,
                        reminderNote: note?.trim() || '',
                        reminderFired: false,
                        reminderRepeat: repeat || 'none'
                    });
                }
                // Notify
                const timeStr = new Date(dt).toLocaleString('vi-VN');
                const notifyRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    roomId,
                    sender: String(currentUser._id),
                    type: 'notify',
                    content: `${currentUser.name} đã tạo lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
                    timestamp: Date.now()
                });
                if (notifyRes?.success && typeof notifyRes._id === 'string') {
                    socketRef.current?.emit('send_message', {
                        ...sockBase,
                        _id: notifyRes._id,
                        type: 'notify',
                        content: `${currentUser.name} đã tạo lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
                        timestamp: Date.now()
                    });
                }
                setShowCreateNote(false);
                if (activeTab !== 'note') setActiveTab('note');
            } else {
                alert('Tạo lịch hẹn thất bại. Vui lòng kiểm tra kết nối máy chủ.');
            }
        } catch (error) {
            console.error('❌ Lỗi khi tạo lịch hẹn:', error);
            alert('Không thể tạo lịch hẹn. Vui lòng thử lại.');
        } finally{
            setCreateLoading(false);
        }
    };
    const handleUnpin = async (messageId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["togglePinMessageApi"])(messageId, false);
            setItems((prev)=>prev.filter((item)=>item._id !== messageId));
            setActiveMenuId(null);
        } catch (error) {
            console.error('Failed to unpin message:', error);
        }
    };
    const handleJump = (messageId)=>{
        if (onJumpToMessage) {
            onJumpToMessage(messageId);
            onClose();
        }
        setActiveMenuId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-gray-50 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-500 text-white p-3 flex items-center justify-between shadow-sm sticky top-0 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 cursor-pointer hover:bg-white/20 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-lg",
                                children: "Bảng tin nhóm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCreateMenu(!showCreateMenu),
                                className: "p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            showCreateMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50 animate-fade-in",
                                children: [
                                    isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowCreateMenu(false);
                                            setShowCreatePoll(true);
                                        },
                                        className: "cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm",
                                        children: "Tạo bình chọn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowCreateMenu(false);
                                            setShowCreateNote(true);
                                        },
                                        className: "cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm",
                                        children: "Tạo ghi chú"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-1 flex items-center border-b border-gray-200 sticky top-[0] z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab('pinned'),
                        className: `flex-1 text-center py-3 border-b-2 font-medium text-sm cursor-pointer transition-colors ${activeTab === 'pinned' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:bg-gray-50'}`,
                        children: "Tin nhắn đã ghim"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab('poll'),
                        className: `flex-1 text-center py-3 border-b-2 font-medium text-sm cursor-pointer transition-colors ${activeTab === 'poll' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:bg-gray-50'}`,
                        children: "Bình chọn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab('note'),
                        className: `flex-1 text-center py-3 border-b-2 font-medium text-sm cursor-pointer transition-colors ${activeTab === 'note' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:bg-gray-50'}`,
                        children: "Ghi chú"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden relative",
                children: [
                    activeTab === 'pinned' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-y-auto p-4 space-y-4 custom-scrollbar",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-gray-500",
                            children: "Đang tải..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                            lineNumber: 370,
                            columnNumber: 15
                        }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full gap-4 text-center p-8 opacity-70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICPin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "w-16 h-16 text-blue-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                            lineNumber: 374,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 bg-blue-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 376,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                            lineNumber: 375,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                    lineNumber: 373,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-sm",
                                    children: "Bấm giữ một tin nhắn và chọn Ghim để gây chú ý cho cả nhóm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                    lineNumber: 379,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                            lineNumber: 372,
                            columnNumber: 15
                        }, this) : items.map((msg)=>{
                            const sender = getSender(msg);
                            const pinnedAt = msg.pinnedAt || msg.timestamp;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg p-3 shadow-sm border border-gray-100 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICPin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-700",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-gray-900",
                                                                    children: "Tin nhắn đã ghim"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400",
                                                                children: pinnedAt ? new Date(pinnedAt).toLocaleString('vi-VN', {
                                                                    day: '2-digit',
                                                                    month: '2-digit',
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                }) : ''
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 390,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "cursor-pointer text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setActiveMenuId(activeMenuId === msg._id ? null : msg._id);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiDotsHorizontal"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 25
                                                    }, this),
                                                    activeMenuId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fixed inset-0 z-10",
                                                                onClick: ()=>setActiveMenuId(null)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-20 overflow-hidden py-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            handleJump(msg._id);
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Di chuyển đến tin nhắn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                            lineNumber: 431,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            handleUnpin(msg._id);
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Xóa ghim"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 410,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                        lineNumber: 389,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-3 border-l-[3px] border-blue-500 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-sm text-gray-900",
                                                    children: sender.name || 'Người gửi'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 450,
                                                columnNumber: 23
                                            }, this),
                                            msg.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " w-20 h-20 rounded-md overflow-hidden relative bg-gray-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(String(msg.fileUrl || msg.content)) || '/imgs/img1.JPEG',
                                                        alt: "Image",
                                                        width: 200,
                                                        height: 200,
                                                        className: "object-cover w-auto h-auto",
                                                        unoptimized: String(msg.fileUrl || msg.content).includes('mega.nz')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 456,
                                                columnNumber: 25
                                            }, this) : msg.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(String(msg.fileUrl || msg.content)) || 'https://www.w3schools.com/html/mov_bbb.mp4',
                                                    controls: true,
                                                    className: "w-full max-w-[200px] rounded-md bg-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 469,
                                                columnNumber: 25
                                            }, this) : msg.type === 'file' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 flex items-center gap-2 p-2 bg-gray-50 rounded-md border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-700 truncate",
                                                            children: msg.fileName || 'File đính kèm'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 480,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-800 line-clamp-3 whitespace-pre-wrap",
                                                children: msg.content || 'Tin nhắn không có nội dung'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                                lineNumber: 498,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                        lineNumber: 449,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, msg._id, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                                lineNumber: 387,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this),
                    activeTab === 'poll' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        embedded: true,
                        onClose: onClose
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 510,
                        columnNumber: 34
                    }, this),
                    activeTab === 'note' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        embedded: true,
                        onClose: onClose
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                        lineNumber: 512,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreatePoll,
                onClose: ()=>setShowCreatePoll(false),
                onCreate: handleCreatePoll
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreateNote,
                onClose: ()=>setShowCreateNote(false),
                onCreate: handleCreateNote,
                createLoading: createLoading
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_s(PinnedMessagesList, "dknpoddzvNKjtZQvoVgK3xzrO9s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"]
    ];
});
_c = PinnedMessagesList;
var _c;
__turbopack_context__.k.register(_c, "PinnedMessagesList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>GroupInviteLinkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Modal({ show, type, message, onClose, onConfirm }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e3636f235cc88d75" + " " + "fixed inset-0 bg-white/30 bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e3636f235cc88d75" + " " + "bg-white rounded-lg shadow-xl max-w-md w-full animate-[scale-in_0.2s_ease-out]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e3636f235cc88d75" + " " + "flex items-center justify-between p-4 border-b border-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e3636f235cc88d75" + " " + "flex items-center gap-2",
                                children: [
                                    type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e3636f235cc88d75" + " " + "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheckCircle"], {
                                            className: "w-5 h-5 text-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e3636f235cc88d75" + " " + "w-8 h-8 bg-red-100 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-5 h-5 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    type === 'confirm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e3636f235cc88d75" + " " + "w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiExclamationCircle"], {
                                            className: "w-5 h-5 text-yellow-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-e3636f235cc88d75" + " " + "text-lg font-semibold",
                                        children: [
                                            type === 'success' && 'Thành công',
                                            type === 'error' && 'Lỗi',
                                            type === 'confirm' && 'Xác nhận'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "jsx-e3636f235cc88d75" + " " + "text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e3636f235cc88d75" + " " + "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-e3636f235cc88d75" + " " + "text-gray-700",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e3636f235cc88d75" + " " + "flex gap-2 p-4 border-t border-gray-300 bg-gray-50",
                        children: type === 'confirm' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "jsx-e3636f235cc88d75" + " " + "flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConfirm,
                                    className: "jsx-e3636f235cc88d75" + " " + "flex-1 px-4 py-2 hover:cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                                    children: "Xác nhận"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "jsx-e3636f235cc88d75" + " " + "flex-1 px-4 py-2 bg-blue-600 hover:cursor-pointer text-white rounded hover:bg-blue-700 transition-colors",
                            children: "Đóng"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e3636f235cc88d75",
                children: "@keyframes scale-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Modal;
function GroupInviteLinkSection({ inviteCode: initialCode, onGenerateLink, onRegenerateLink }) {
    _s();
    const [inviteCode, setInviteCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCode || '');
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        type: 'success',
        message: ''
    });
    const inviteLink = inviteCode ? `${window.location.origin}/invite/${inviteCode}` : '';
    const showModal = (type, message)=>{
        setModal({
            show: true,
            type,
            message
        });
    };
    const closeModal = ()=>{
        setModal({
            show: false,
            type: 'success',
            message: ''
        });
    };
    const handleGenerateLink = async ()=>{
        setIsGenerating(true);
        try {
            const code = await onGenerateLink();
            setInviteCode(code);
        } catch (error) {
            console.error('Generate link error:', error);
            showModal('error', 'Tạo link mời thất bại');
        } finally{
            setIsGenerating(false);
        }
    };
    const handleRegenerateLink = async ()=>{
        setIsGenerating(true);
        try {
            const code = await onRegenerateLink();
            setInviteCode(code);
            showModal('success', 'Đã tạo link mời mới');
        } catch (error) {
            console.error('Regenerate link error:', error);
            showModal('error', 'Tạo link mới thất bại');
        } finally{
            setIsGenerating(false);
        }
    };
    const handleConfirmRegenerate = ()=>{
        closeModal();
        handleRegenerateLink();
    };
    const handleCopyLink = async ()=>{
        if (!inviteLink) return;
        try {
            await navigator.clipboard.writeText(inviteLink);
            setIsCopied(true);
            setTimeout(()=>setIsCopied(false), 2000);
        } catch  {
            // Fallback
            const input = document.createElement('input');
            input.value = inviteLink;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            setIsCopied(true);
            setTimeout(()=>setIsCopied(false), 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white  border border-gray-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-gray-100 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiLink"], {
                                    className: "w-5 h-5 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                    children: "Link nhóm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 space-y-3",
                        children: !inviteCode ? // Chưa có link
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mb-4",
                                    children: "Tạo link mời để chia sẻ với bạn bè"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGenerateLink,
                                    disabled: isGenerating,
                                    className: "px-4 py-2 hover:cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isGenerating ? 'Đang tạo...' : 'Tạo link mời'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this) : // Đã có link
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: inviteLink,
                                            readOnly: true,
                                            className: "flex-1 px-3 py-2 border-none outline-none rounded-lg bg-gray-50 text-sm text-gray-700 select-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCopyLink,
                                            className: "p-2 hover:bg-gray-100 hover:cursor-pointer rounded-lg transition flex-shrink-0",
                                            title: "Sao chép link",
                                            children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheck"], {
                                                className: "w-5 h-5 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiFloppyDisk"], {
                                                className: "w-5 h-5 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>showModal('confirm', 'Tạo link mới sẽ vô hiệu hóa link cũ. Bạn có chắc chắn?'),
                                            disabled: isGenerating,
                                            className: "p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0 hover:cursor-pointer disabled:opacity-50",
                                            title: "Tạo link mới",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiRefresh"], {
                                                className: `w-5 h-5 text-gray-600 ${isGenerating ? 'animate-spin' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "💡 Mọi người có link này có thể tham gia nhóm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                show: modal.show,
                type: modal.type,
                message: modal.message,
                onClose: closeModal,
                onConfirm: modal.type === 'confirm' ? handleConfirmRegenerate : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GroupInviteLinkSection, "1pitDLsUPmr8M8dAeX5OCYr7PBk=");
_c1 = GroupInviteLinkSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "GroupInviteLinkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>PinnedMessagesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function PinnedMessagesSection({ onOpen }) {
    _s();
    const { selectedChat, currentUser, isGroup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PinnedMessagesSection.useMemo[roomId]": ()=>{
            const me = String(currentUser._id);
            const other = String(selectedChat._id);
            return isGroup ? other : [
                me,
                other
            ].sort().join('_');
        }
    }["PinnedMessagesSection.useMemo[roomId]"], [
        isGroup,
        selectedChat,
        currentUser
    ]);
    const [latestPinned, setLatestPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PinnedMessagesSection.useEffect": ()=>{
            const load = {
                "PinnedMessagesSection.useEffect.load": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readPinnedMessagesApi"])(roomId, {
                            limit: 1
                        });
                        if (res.data && res.data.length > 0) {
                            setLatestPinned(res.data[0]);
                        } else {
                            setLatestPinned(null);
                        }
                    } catch (error) {
                        console.error('Failed to load pinned message preview:', error);
                    }
                }
            }["PinnedMessagesSection.useEffect.load"];
            void load();
        }
    }["PinnedMessagesSection.useEffect"], [
        roomId
    ]);
    const getPreviewContent = (msg)=>{
        if (msg.type === 'image') return '[Hình ảnh]';
        if (msg.type === 'video') return '[Video]';
        if (msg.type === 'file') return '[File] ' + (msg.fileName || '');
        if (msg.type === 'poll') return '[Bình chọn] ' + (msg.pollQuestion || msg.content);
        return msg.content || 'Tin nhắn đã ghim';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "cursor-pointer w-full px-5 py-4 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group",
            onClick: onOpen,
            title: "Xem danh sách tin nhắn đã ghim",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiMapPin"], {
                        className: "w-5 h-5 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-[1.125rem] md:text-[1rem] text-gray-900 group-hover:text-amber-600 transition-colors",
                            children: "Tin nhắn đã ghim"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        latestPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 truncate mt-0.5 max-w-[200px]",
                            children: getPreviewContent(latestPinned)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto text-gray-400 group-hover:text-amber-600 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                        className: "w-4 h-4 text-gray-400 group-hover:text-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(PinnedMessagesSection, "2+fQiM/ojm2N0g+ETTcuNgq/O/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"]
    ];
});
_c = PinnedMessagesSection;
var _c;
__turbopack_context__.k.register(_c, "PinnedMessagesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$SuccessModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/SuccessModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function AddToGroupModal({ isOpen, onClose, currentUser, selectedChat, onShowCreateGroup, reLoad }) {
    _s();
    const [myGroupsQuick, setMyGroupsQuick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [addToGroupLoading, setAddToGroupLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addToGroupError, setAddToGroupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [groupSearch, setGroupSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedGroupIds, setSelectedGroupIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const maxSelectGroups = 5;
    const fetchMyGroupsQuick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AddToGroupModal.useCallback[fetchMyGroupsQuick]": async ()=>{
            try {
                const res = await fetch('/api/groups', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'readGroups',
                        _id: currentUser._id
                    })
                });
                const data = await res.json();
                const list = Array.isArray(data.data) ? data.data : [];
                setMyGroupsQuick(list);
            } catch  {}
        }
    }["AddToGroupModal.useCallback[fetchMyGroupsQuick]"], [
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddToGroupModal.useEffect": ()=>{
            if (isOpen) {
                setAddToGroupError('');
                setGroupSearch('');
                setSelectedGroupIds([]);
                void fetchMyGroupsQuick();
            }
        }
    }["AddToGroupModal.useEffect"], [
        isOpen,
        fetchMyGroupsQuick
    ]);
    const filteredGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddToGroupModal.useMemo[filteredGroups]": ()=>{
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(groupSearch.trim());
            if (!q) return myGroupsQuick;
            const hasDia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasDiacritics"])(groupSearch.trim());
            return myGroupsQuick.filter({
                "AddToGroupModal.useMemo[filteredGroups]": (g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(String(g.name || ''), groupSearch.trim())
            }["AddToGroupModal.useMemo[filteredGroups]"]);
        }
    }["AddToGroupModal.useMemo[filteredGroups]"], [
        groupSearch,
        myGroupsQuick
    ]);
    const toggleSelectGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AddToGroupModal.useCallback[toggleSelectGroup]": (groupId)=>{
            setAddToGroupError('');
            setSelectedGroupIds({
                "AddToGroupModal.useCallback[toggleSelectGroup]": (prev)=>{
                    if (prev.includes(groupId)) return prev.filter({
                        "AddToGroupModal.useCallback[toggleSelectGroup]": (id)=>id !== groupId
                    }["AddToGroupModal.useCallback[toggleSelectGroup]"]);
                    if (prev.length >= maxSelectGroups) {
                        setAddToGroupError(`Chỉ chọn tối đa ${maxSelectGroups} nhóm`);
                        return prev;
                    }
                    return [
                        ...prev,
                        groupId
                    ];
                }
            }["AddToGroupModal.useCallback[toggleSelectGroup]"]);
        }
    }["AddToGroupModal.useCallback[toggleSelectGroup]"], [
        maxSelectGroups
    ]);
    const handleBatchAddToSelectedGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups]": async ()=>{
            if (selectedGroupIds.length === 0) return;
            setAddToGroupLoading(true);
            setAddToGroupError('');
            try {
                const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                const targetId = String(selectedChat._id);
                for (const gid of selectedGroupIds){
                    const res = await fetch('/api/groups', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'addMembers',
                            conversationId: gid,
                            newMembers: [
                                targetId
                            ],
                            _id: currentUser._id
                        })
                    });
                    const json = await res.json();
                    if (!json.success) {
                        setAddToGroupError('Một số nhóm thêm thất bại');
                    } else {
                        const g = myGroupsQuick.find({
                            "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups]": (x)=>String(x._id) === String(gid)
                        }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups]"]) || null;
                        const prevRaw = Array.isArray(g?.members) ? g.members : [];
                        const prevIds = prevRaw.map({
                            "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].prevIds": (m)=>typeof m === 'string' ? String(m) : String(m._id || m.id || '')
                        }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].prevIds"]).filter({
                            "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].prevIds": (v)=>!!v
                        }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].prevIds"]);
                        const nextIds = Array.from(new Set([
                            ...prevIds,
                            targetId
                        ]));
                        const prevMembersPayload = prevIds.map({
                            "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].prevMembersPayload": (id)=>({
                                    _id: id
                                })
                        }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].prevMembersPayload"]);
                        const nextMembersPayload = nextIds.map({
                            "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].nextMembersPayload": (id)=>({
                                    _id: id
                                })
                        }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups].nextMembersPayload"]);
                        sock.emit('group_members_updated', {
                            roomId: String(gid),
                            members: nextMembersPayload,
                            prevMembers: prevMembersPayload,
                            sender: String(currentUser._id),
                            senderName: currentUser.name,
                            groupName: g?.name
                        });
                    }
                }
                setTimeout({
                    "AddToGroupModal.useCallback[handleBatchAddToSelectedGroups]": ()=>sock.disconnect()
                }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups]"], 500);
                setShowSuccessModal(true);
                reLoad?.();
                onClose();
            } catch  {
                setAddToGroupError('Lỗi kết nối');
            } finally{
                setAddToGroupLoading(false);
            }
        }
    }["AddToGroupModal.useCallback[handleBatchAddToSelectedGroups]"], [
        selectedGroupIds,
        selectedChat,
        reLoad,
        onClose,
        currentUser._id,
        currentUser.name,
        myGroupsQuick
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-white md:bg-black/50 md:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white md:rounded-2xl shadow-2xl w-full h-full md:h-[45rem] md:max-w-md overflow-hidden flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-gray-100 bg-gray-50 flex-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-gray-800",
                                            children: "Thêm vào nhóm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                                className: "w-5 h-5 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: [
                                        "Đã chọn: ",
                                        selectedGroupIds.length,
                                        "/",
                                        maxSelectGroups
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-b border-gray-100 flex-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: groupSearch,
                                onChange: (e)=>setGroupSearch(e.target.value),
                                placeholder: "Nhập tên nhóm",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                try {
                                    const w = window;
                                    w.__createGroupInitialMemberIds = [
                                        String(selectedChat._id)
                                    ];
                                } catch  {}
                                onShowCreateGroup();
                                onClose();
                            },
                            className: "cursor-pointer w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all flex-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                            className: "w-5 h-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-800",
                                            children: [
                                                "Tạo nhóm với ",
                                                selectedChat.name || selectedChat.username || 'Người dùng'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                    className: "w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-2 overflow-y-auto flex-1 custom-scrollbar",
                            children: [
                                filteredGroups.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: "Chưa có nhóm nào"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this) : filteredGroups.map((g)=>{
                                    const isAlreadyMember = Array.isArray(g.members) && g.members.some((m)=>{
                                        const mId = typeof m === 'string' ? m : m._id || m.id;
                                        return String(mId) === String(selectedChat._id);
                                    });
                                    const selected = selectedGroupIds.includes(String(g._id));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (isAlreadyMember || addToGroupLoading) return;
                                            toggleSelectGroup(String(g._id));
                                        },
                                        disabled: addToGroupLoading || isAlreadyMember,
                                        className: `w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors cursor-pointer ${isAlreadyMember ? 'opacity-50 cursor-not-allowed bg-gray-50' : selected ? 'bg-blue-50' : 'hover:bg-gray-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-6 h-6 rounded-full border flex items-center justify-center ${isAlreadyMember ? 'bg-blue-400 border-blue-400' : selected ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}`,
                                                    children: (selected || isAlreadyMember) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 text-white",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M20 6L9 17l-5-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full overflow-hidden bg-gray-100",
                                                    children: g.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(g.avatar),
                                                        alt: "",
                                                        width: 36,
                                                        height: 36,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 font-bold",
                                                        children: String(g.name || 'N').charAt(0).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center items-start min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[1.3rem]  text-gray-800 truncate max-w-[15rem]",
                                                            children: g.name || 'Nhóm'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[1rem] text-gray-500",
                                                            children: isAlreadyMember ? 'Đã tham gia' : `${Array.isArray(g.members) ? g.members.length : 0} tv`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                            lineNumber: 206,
                                            columnNumber: 21
                                        }, this)
                                    }, g._id, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this);
                                }),
                                addToGroupError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-red-600",
                                    children: addToGroupError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                    lineNumber: 252,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-gray-100 flex-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: selectedGroupIds.length === 0 || addToGroupLoading,
                                onClick: handleBatchAddToSelectedGroups,
                                className: `w-full px-4 py-2 rounded-xl font-bold ${selectedGroupIds.length === 0 || addToGroupLoading ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`,
                                children: addToGroupLoading ? 'Đang thêm...' : 'Thêm vào nhóm'
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$SuccessModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showSuccessModal,
                onClose: ()=>setShowSuccessModal(false),
                title: "Thành công",
                description: "Đã thêm thành viên vào nhóm thành công."
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AddToGroupModal, "ffxmXNhi9ADkldoo1jogHS21uek=");
_c = AddToGroupModal;
var _c;
__turbopack_context__.k.register(_c, "AddToGroupModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/CommonGroupsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommonGroupsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$group$292f$CommonGroupsMobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(group)/CommonGroupsMobile.tsx [app-client] (ecmascript)");
;
;
function CommonGroupsModal({ isOpen, onClose, groups, partner, onShowCreateGroup, onShowAddToGroup }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] bg-white md:bg-black/50 md:flex md:items-center md:justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white md:rounded-2xl shadow-2xl w-full h-full md:h-[45rem] md:max-w-md overflow-hidden flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$group$292f$CommonGroupsMobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                groups: groups,
                partner: partner,
                onBack: onClose,
                onShowCreateGroup: onShowCreateGroup,
                onShowAddToGroup: onShowAddToGroup
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/CommonGroupsModal.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/(chatPopup)/components/CommonGroupsModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/CommonGroupsModal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = CommonGroupsModal;
var _c;
__turbopack_context__.k.register(_c, "CommonGroupsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>GroupAvatarSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$RoleBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/RoleBadge.tsx [app-client] (ecmascript)");
;
;
;
;
;
function GroupAvatarSection({ isGroup, groupAvatar, groupName, chatName, isGroupAvatarUploading, avatarInputRef, onChangeGroupAvatar, onRenameGroup, myRole }) {
    // if (!isGroup) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center mb-2 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>avatarInputRef.current?.click(),
                        className: "cursor-pointer relative block focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full transition-all duration-300",
                        disabled: isGroupAvatarUploading,
                        title: "Nhấn để thay đổi ảnh nhóm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-full overflow-hidden shadow-2xl p-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-full overflow-hidden bg-gray-200",
                                    children: [
                                        groupAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            width: 100,
                                            height: 100,
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(groupAvatar),
                                            alt: chatName || 'Avatar nhóm',
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                            onError: (e)=>{
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full h-full flex items-center justify-center text-4xl font-bold text-white ${groupAvatar ? 'hidden' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                width: 40,
                                                height: 40,
                                                src: "/logo/avata.webp",
                                                alt: chatName || 'Avatar nhóm',
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 rounded-full flex flex-col items-center justify-center transition-all duration-300
              ${isGroupAvatarUploading ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100'}`,
                                children: isGroupAvatarUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-sm font-medium",
                                            children: "Đang cập nhật..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-8 h-8 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-xs font-medium",
                                            children: "Đổi ảnh"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>avatarInputRef.current?.click(),
                        className: "absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white shadow-lg  hover:bg-gray-50 transition",
                        title: "Đổi ảnh nhóm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-gray-700",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        ref: avatarInputRef,
                        className: "hidden",
                        onChange: onChangeGroupAvatar
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex items-center gap-3 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-medium text-gray-900 tracking-tight truncate max-w-[10rem]",
                        children: groupName || 'Nhóm chat'
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRenameGroup,
                        className: "cursor-pointer p-1 rounded-xl  bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 hover:shadow-md active:scale-95",
                        title: "Đổi tên nhóm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiEdit"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            isGroup && myRole && myRole !== 'MEMBER' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$RoleBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    role: myRole
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = GroupAvatarSection;
var _c;
__turbopack_context__.k.register(_c, "GroupAvatarSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ReactionButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactionButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICSmile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICSmile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const EMOJIS = [
    '👍',
    '❤️',
    '😂',
    '😮',
    '😢',
    '😡'
];
function ReactionButton({ isMine, onPick, visible, className = '' }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sideCls = isMine ? 'right-full mr-3' : 'left-full ml-3';
    const pickerSideCls = isMine ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-3/4';
    // const pickerSideCls = isMine ? 'right-0' : 'left-0 -translate-x-';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        absolute top-1/2 -translate-y-1/2 z-20 ${sideCls}
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        transition-opacity duration-150
        ${className}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative inline-flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        setOpen((v)=>!v);
                    },
                    className: "w-8 h-8 hover:cursor-pointer rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-base hover:scale-110 active:scale-95 transition-all",
                    "aria-label": "Thả cảm xúc",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICSmile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReactionButton.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReactionButton.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute ${pickerSideCls} z-50 bottom-full mb-2 flex items-center gap-1 px-3 py-2 bg-white rounded-full shadow-xl border border-gray-200 transition-all ${open ? 'opacity-100 visible pointer-events-auto scale-100' : 'opacity-0 invisible pointer-events-none scale-95'} origin-bottom whitespace-nowrap overflow-x-auto no-scrollbar max-w-[calc(100vw-64px)] sm:max-w-[20rem]`,
                    children: EMOJIS.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setOpen(false);
                                onPick(emoji);
                            },
                            className: "w-9 h-9 flex items-center justify-center text-xl rounded-full hover:bg-gray-100 active:scale-90 transition-transform",
                            "aria-label": emoji,
                            children: emoji
                        }, emoji, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReactionButton.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReactionButton.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ReactionButton.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/(chatPopup)/components/ReactionButton.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ReactionButton, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = ReactionButton;
var _c;
__turbopack_context__.k.register(_c, "ReactionButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ReadStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ReadStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICTickDouble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICTickDouble.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ReadStatus({ message, isGroup, isRecalled, isMine, isLast, myId, allUsersMap, getSenderInfo, isMobile, isUploading }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //   const shouldOpen = !!isMobile || (typeof window !== 'undefined' && window.innerWidth <= 1024);
    if (!isMine || !isLast || isRecalled) return null;
    if (isUploading) return null;
    const readBy = message.readBy || [];
    if (!isGroup) {
        const seen = readBy.some((id)=>String(id) !== String(myId));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center bg-gray-400 text-[0.75rem] mt-2 text-white px-2 py-0.5 rounded-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICTickDouble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: " w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                seen ? 'Đã xem' : 'Đã gửi'
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    const readers = readBy.filter((id)=>String(id) !== String(myId));
    const names = readers.map((id)=>allUsersMap.get(String(id)) || 'Người dùng');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex mt-2 cursor-pointer",
                title: readers.length > 0 ? names.join(', ') : undefined,
                onClick: ()=>{
                    setOpen(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-1",
                    children: readers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 bg-gray-400 text-[0.75rem] text-white px-2 py-0.5 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICTickDouble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "w-4 h-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            "Đã gửi"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            readers.slice(0, 6).map((id, idx)=>{
                                const info = getSenderInfo(id);
                                const key = `${message._id}-reader-${idx}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 rounded-full bg-gray-300 overflow-hidden ring-1 ring-white flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: info.avatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(info.avatar) : '/logo/avata.webp',
                                        alt: info.name,
                                        width: 16,
                                        height: 16,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this)
                                }, key, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                    lineNumber: 83,
                                    columnNumber: 19
                                }, this);
                            }),
                            readers.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-full bg-gray-200 text-gray-700 text-[0.625rem] flex items-center justify-center ring-1 ring-white flex-shrink-0",
                                children: [
                                    "+",
                                    readers.length - 6
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            open && readers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[9998]",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-[11.25rem] max-w-[18rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl pointer-events-auto",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2 pb-2 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Đã xem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                readers.length,
                                                " người"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1.5 max-h-48 overflow-y-auto",
                                    children: readers.map((id, idx)=>{
                                        const info = getSenderInfo(id);
                                        const displayName = info.name || allUsersMap.get(String(id)) || 'Người dùng';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 rounded-full bg-gray-300 overflow-hidden ring-1 ring-white flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: info.avatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(info.avatar) : '/logo/avata.webp',
                                                        alt: displayName,
                                                        width: 16,
                                                        height: 16,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-700",
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `${message._id}-reader-name-${idx}`, true, {
                                            fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReadStatus.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
_s(ReadStatus, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = ReadStatus;
var _c;
__turbopack_context__.k.register(_c, "ReadStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/(chatPopup)/components/ReminderCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReminderCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
;
;
;
;
function timeDisplay(date) {
    const today = new Date();
    const sameDay = today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate();
    const timeStr = date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const dateStr = date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    return sameDay ? `Hôm nay lúc ${timeStr}` : `${dateStr} lúc ${timeStr}`;
}
function ReminderCard({ variant, title, date, senderName, senderAvatar, isMe = false, highlighted = false, onOpen }) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (variant === 'due') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-[18rem] p-4 bg-white rounded-2xl border border-gray-200 shadow-sm text-center ${highlighted ? 'ring-2 ring-yellow-300' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineClock"], {
                        className: "w-7 h-7 text-red-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base font-semibold text-gray-900 truncate",
                    children: [
                        "Nhắc hẹn: ",
                        title || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-0.5",
                    children: timeDisplay(date)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpen,
                        className: "w-[10rem] cursor-pointer px-4 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 font-bold text-sm uppercase transition-all",
                        children: "MỞ LỊCH"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full max-w-[18rem] ${highlighted ? 'ring-2 ring-yellow-300' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 p-3 border-b border-gray-100 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full overflow-hidden flex-shrink-0",
                        children: senderAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(senderAvatar),
                            width: 24,
                            height: 24,
                            className: "object-cover w-full h-full",
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo/avata.webp",
                                alt: "",
                                width: 64,
                                height: 64,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-700",
                        children: [
                            isMe ? 'Bạn' : senderName,
                            " đã tạo một nhắc hẹn"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-4 gap-4 items-center cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center min-w-[50px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500 text-xs font-bold uppercase tracking-wider",
                                children: [
                                    "THG ",
                                    month
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl text-gray-800 font-normal leading-none mt-1",
                                children: day
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-gray-900 truncate",
                                children: title || 'Không có tiêu đề'
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: timeDisplay(date)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/components/ReminderCard.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c = ReminderCard;
var _c;
__turbopack_context__.k.register(_c, "ReminderCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_%28chatPopup%29_components_74cc4bb8._.js.map