module.exports = [
"[project]/src/app/(zalo)/home/CreateGroupModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>CreateGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCreateGroupModal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCreateGroupModal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
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
;
function CreateGroupModal({ currentUser, allUsers, onClose, onGroupCreated, mode = 'create', conversationId, existingMemberIds = [], reLoad, onMembersAdded }) {
    const inheritedExistingIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (existingMemberIds && existingMemberIds.length > 0) {
            return existingMemberIds.map(String);
        }
        try {
            const w = window;
            const arr = w.__createGroupInitialMemberIds;
            if (Array.isArray(arr) && arr.length > 0) {
                return arr.map(String);
            }
        } catch  {}
        return [];
    }, [
        existingMemberIds
    ]);
    const { groupName, setGroupName, searchTerm, setSearchTerm, selectedMembers, loading, error, groupedUsers, sortedGroupKeys, handleMemberToggle, handleSubmit, avatarPreview, handleAvatarChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCreateGroupModal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCreateGroupModal"])({
        currentUser,
        allUsers,
        mode,
        conversationId,
        existingMemberIds: inheritedExistingIds,
        reLoad,
        onMembersAdded,
        onGroupCreated,
        onClose
    });
    const [imgError, setImgError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setImgError(false);
    }, [
        avatarPreview
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return ()=>{
            try {
                const w = window;
                w.__createGroupInitialMemberIds = null;
            } catch  {}
        };
    }, []);
    const selectedUsers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>allUsers.filter((u)=>selectedMembers.includes(String(u._id))), [
        allUsers,
        selectedMembers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm sm:px-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sm:mx-[0.5rem] bg-white w-full h-full sm:w-full sm:max-w-2xl  sm:max-h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 py-3 bg-white  border-b border-gray-100 sm:border-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "sm:hidden p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start justify-center flex-1 sm:flex-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold leading-tight",
                                            children: mode === 'create' ? 'Nhóm mới' : 'Thêm thành viên'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 font-medium sm:hidden",
                                            children: [
                                                "Đã chọn: ",
                                                selectedMembers.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "hidden sm:block p-2.5 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200 active:scale-90",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col min-h-0 bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-b border-gray-100",
                            children: [
                                mode === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-12 h-12 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "w-full h-full rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden border border-gray-200",
                                                title: "Đổi ảnh nhóm",
                                                children: [
                                                    avatarPreview && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: avatarPreview,
                                                        alt: "Group Avatar",
                                                        width: 48,
                                                        height: 48,
                                                        className: "w-full h-full object-cover",
                                                        onError: ()=>setImgError(true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCamera"], {
                                                        className: "w-6 h-6 text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        className: "hidden",
                                                        onChange: handleAvatarChange
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 relative border-b-2 focus-within:border-[#0068ff] border-gray-200 transition-colors pb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: groupName,
                                                    onChange: (e)=>setGroupName(e.target.value),
                                                    placeholder: "Đặt tên nhóm",
                                                    className: "w-full py-2 bg-transparent focus:outline-none text-lg font-medium placeholder:text-gray-400 pr-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiFaceSmile"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        selectedMembers.length >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: loading,
                                            className: "p-1 rounded-full hover:bg-blue-50 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                className: "w-6 h-6 text-[#0068ff]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                lineNumber: 174,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMagnifyingGlass"], {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            placeholder: "Tìm tên...",
                                            className: "w-full pl-12 pr-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0068ff] text-base placeholder:text-gray-500 transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiXCircle"], {
                                            className: "w-6 h-6 text-red-600 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-red-700",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 custom-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "hidden  font-semibold text-sm text-gray-600 mb-3 md:flex items-center",
                                    children: [
                                        mode === 'create' ? 'Danh sách bạn bè' : 'Thành viên có thể thêm',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full text-xs",
                                            children: selectedMembers.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                sortedGroupKeys.map((letter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2",
                                        children: groupedUsers[letter].map((user)=>{
                                            const userIdStr = String(user._id);
                                            const isAlreadyMember = existingMemberIds.includes(userIdStr);
                                            const isSelected = selectedMembers.includes(userIdStr);
                                            const isMe = userIdStr === String(currentUser._id);
                                            const displayName = String(user.nicknames?.[String(currentUser._id)] || '').trim() || String(user.name || user.username || 'Người dùng').trim();
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `flex items-center p-3 mb-1 cursor-pointer transition-colors justify-between rounded-2xl
                          ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'} ${mode === 'add' && isAlreadyMember || isMe ? 'bg-gray-50 opacity-60 cursor-not-allowed' : ''}
                                                `,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "sm:w-10 sm:h-10 w-10 h-10 mr-3 rounded-full overflow-hidden sm:ring-4 ring-2 ring-white shadow-md",
                                                                children: user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(user.avatar),
                                                                    alt: "",
                                                                    width: 48,
                                                                    height: 48,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/logo/avata.webp",
                                                                    alt: "",
                                                                    width: 48,
                                                                    height: 48,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "sm:text-sm font-semibold text-gray-900 px-1",
                                                                            children: displayName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs px-1 font-medium ${user.online ? 'text-green-600' : 'text-gray-500'}`,
                                                                        children: user.online ? 'Đang hoạt động' : user.lastSeen ? `Hoạt động ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTimeAgo"])(user.lastSeen)} trước` : 'Hoạt động gần đây'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    isAlreadyMember && mode === 'add' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-400 font-medium",
                                                                        children: "Đã tham gia"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 25
                                                            }, this),
                                                            isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-400 font-medium px-1",
                                                                children: "Bạn"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center justify-center w-6 h-6 mr-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: isSelected,
                                                                disabled: mode === 'add' && isAlreadyMember || isMe,
                                                                onChange: ()=>handleMemberToggle(userIdStr),
                                                                className: "peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-[#0573ff] checked:border-[#0573ff] transition-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "absolute w-3.5 h-3.5 text-white hidden peer-checked:block pointer-events-none",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: "3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, user._id, true, {
                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, letter, false, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)),
                                sortedGroupKeys.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-10 opacity-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Không tìm thấy kết quả"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                (selectedUsers.length > 0 || mode === 'create') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-2 bg-white border-t border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto custom-scrollbar pb-1 pt-2",
                        children: [
                            mode === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-shrink-0 cursor-default opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm",
                                    children: currentUser.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(currentUser.avatar),
                                        alt: currentUser.name,
                                        width: 40,
                                        height: 40,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 314,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gradient-to-br from-[#0068ff] to-[#00a0e9] text-white font-bold flex items-center justify-center text-lg",
                                        children: currentUser.name?.charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 322,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 312,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                lineNumber: 311,
                                columnNumber: 17
                            }, this),
                            selectedUsers.filter((u)=>mode !== 'create' || String(u._id) !== String(currentUser._id)).map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-shrink-0 cursor-pointer group",
                                    onClick: ()=>handleMemberToggle(String(user._id)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm transition-opacity",
                                            children: user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(user.avatar),
                                                alt: String(user.nicknames?.[String(currentUser._id)] || '').trim() || String(user.name || user.username || 'Người dùng').trim(),
                                                width: 40,
                                                height: 40,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                lineNumber: 340,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo/avata.webp",
                                                alt: "",
                                                width: 48,
                                                height: 48,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                lineNumber: 351,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-1 -right-1 bg-gray-100 rounded-full text-gray-500 ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiXCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                                lineNumber: 361,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                            lineNumber: 360,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, user._id, true, {
                                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                    lineNumber: 333,
                                    columnNumber: 19
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-white border-t border-gray-200 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 py-3 cursor-pointer text-base font-medium text-gray-600 bg-transparent hover:bg-gray-100 rounded-2xl transition-all duration-200 active:scale-95",
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: loading || selectedMembers.length === 0,
                            className: `flex-1 py-3 text-base font-bold text-white rounded-2xl cursor-pointer transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5 shadow-md
      ${loading || selectedMembers.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0068ff] hover:bg-[#005edc] shadow-[#0068ff]/50'}`,
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Đang xử lý..."
                            }, void 0, false) : mode === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Tạo nhóm",
                                    selectedMembers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-sm font-normal opacity-90",
                                        children: [
                                            "(",
                                            selectedMembers.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 396,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Thêm",
                                    selectedMembers.filter((id)=>!existingMemberIds.includes(id)).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-sm font-normal opacity-90",
                                        children: [
                                            "(",
                                            selectedMembers.filter((id)=>!existingMemberIds.includes(id)).length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                                        lineNumber: 403,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(zalo)/home/CreateGroupModal.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(zalo)/home/ChatInfoPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ChatInfoPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$ModalMembers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/ModalMembers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatInfoPopup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatInfoPopup.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaPreviewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MediaPreviewModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$UserAvatarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/UserAvatarSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ChatQuickActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ChatQuickActions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupDangerZone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/GroupDangerZone.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupMembersSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/GroupMembersSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReminderSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PollSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ItemDropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ItemDropdownMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$RenameGroupModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/RenameGroupModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ConfirmGroupActionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ConfirmGroupActionModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReminderList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PinnedMessagesList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PinnedMessagesList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PollList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupInviteLinkSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/GroupInviteLinkSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PinnedMessagesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PinnedMessagesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PopupProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/PopupProfile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$SuccessModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/SuccessModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ConfirmModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$AddToGroupModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/AddToGroupModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CommonGroupsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CommonGroupsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupAvatarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/GroupAvatarSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$CropImageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/CropImageModal.tsx [app-ssr] (ecmascript)");
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
function ChatInfoPopup({ onClose, onShowCreateGroup, onMembersAdded, members, onJumpToMessage, onMemberRemoved, onRoleChange, onChatAction, reLoad, onLeftGroup, onRefresh, sendNotifyMessage, lastUpdated, initialSection, groups = [] }) {
    const { messages, currentUser, allUsers, chatName, isGroup, selectedChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatContext"])();
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [openMember, setOpenMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [groupAvatar, setGroupAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isGroup ? selectedChat.avatar : undefined);
    const [isGroupAvatarUploading, setIsGroupAvatarUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(chatName || '');
    const [isRenameModalOpen, setIsRenameModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [renameInput, setRenameInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [previewMedia, setPreviewMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmAction, setConfirmAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReminderOpen, setIsReminderOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPinnedMessagesOpen, setIsPinnedMessagesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPollOpen, setIsPollOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const avatarInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAssetsModalOpen, setIsAssetsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assetsTab, setAssetsTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('media');
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBestFriend, setIsBestFriend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [callAlertEnabled, setCallAlertEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [autoDeletePolicy, setAutoDeletePolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('off');
    const [cropOpen, setCropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cropSrc, setCropSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cropFileName, setCropFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('group-avatar.jpg');
    const [pendingReset, setPendingReset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAutoDeleteModal, setShowAutoDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmClear, setShowConfirmClear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReportConfirm, setShowReportConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showAddToGroupModal, setShowAddToGroupModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCommonGroupsModal, setShowCommonGroupsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const commonGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isGroup || !selectedChat || !groups) return [];
        const partnerId = String(selectedChat._id);
        return groups.filter((g)=>{
            if (!Array.isArray(g.members)) return false;
            return g.members.some((m)=>{
                const mId = typeof m === 'string' ? m : m._id || m.id;
                return String(mId) === partnerId;
            });
        });
    }, [
        groups,
        selectedChat,
        isGroup
    ]);
    const myId = String(currentUser._id || currentUser?.id || '');
    const myRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isGroup || !members) return 'MEMBER';
        const member = members.find((m)=>String(m._id || m.id) === myId);
        return member?.role || 'MEMBER';
    }, [
        members,
        myId,
        isGroup
    ]);
    const [editingPersonalNickname, setEditingPersonalNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingSelfNickname, setEditingSelfNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const canLeaveGroup = isGroup;
    const canDisbandGroup = isGroup && myRole === 'OWNER';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setGroupName(chatName || '');
    }, [
        chatName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialSection === 'reminder') {
            setIsReminderOpen(true);
            setIsPollOpen(false);
            setOpenMember(false);
        } else if (initialSection === 'poll') {
            setIsPollOpen(true);
            setIsReminderOpen(false);
            setOpenMember(false);
        } else if (initialSection === 'members') {
            setIsReminderOpen(false);
            setIsPollOpen(false);
            if (isGroup) setOpenMember(true);
            else setOpenMember(false);
        }
    }, [
        initialSection,
        isGroup
    ]);
    const { localIsPinned, localIsHidden, openItems, activeMenuId, setActiveMenuId, handleChatActionClick, toggleItem, closeMenu, mediaList, mediaGroups, fileList, fileGroups, linkList, linkGroups, mediaTotal, fileTotal, linkTotal, isMediaExpanded, isFileExpanded, isLinkExpanded, fetchAssets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatInfoPopup$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatInfoPopup"])({
        selectedChat,
        isGroup,
        messages,
        currentUser,
        onChatAction
    });
    const openAddToGroupModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowAddToGroupModal(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mediaList.length === 0) {
            void fetchAssets('media', false);
        }
    }, [
        mediaList.length,
        fetchAssets
    ]);
    const latestImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...mediaList
        ].filter((m)=>m.type === 'image').sort((a, b)=>(b.timestamp || 0) - (a.timestamp || 0)).slice(0, 4), [
        mediaList
    ]);
    const getOneToOneRoomId = (user1Id, user2Id)=>{
        return [
            user1Id,
            user2Id
        ].sort().join('_');
    };
    const roomId = isGroup ? String(selectedChat._id) : getOneToOneRoomId(String(currentUser._id), String(selectedChat._id));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const k = `roomMuted:${roomId}:${String(currentUser._id)}`;
            const v = localStorage.getItem(k) === 'true';
            setIsMuted(v);
        } catch  {}
    }, [
        roomId,
        currentUser._id
    ]);
    const [partnerNicknameOverride, setPartnerNicknameOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isGroup ? '' : String(selectedChat.nicknames?.[myId] || ''));
    const [selfNicknameOverride, setSelfNicknameOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const partnerId = String(selectedChat._id);
        return String(currentUser.nicknames?.[partnerId] || '');
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGroup) return;
        setPartnerNicknameOverride(String(selectedChat.nicknames?.[myId] || ''));
    }, [
        isGroup,
        selectedChat,
        myId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGroup) return;
        const partnerId = String(selectedChat._id);
        (async ()=>{
            try {
                const res = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'getById',
                        _id: String(currentUser._id)
                    })
                });
                const data = await res.json();
                const doc = data?.row ?? data;
                const nn = doc?.nicknames?.[partnerId] ?? '';
                setSelfNicknameOverride(String(nn || ''));
            } catch  {}
        })();
    }, [
        isGroup,
        selectedChat,
        currentUser._id
    ]);
    const handleToggleMediaExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        void fetchAssets('media', !isMediaExpanded);
    }, [
        fetchAssets,
        isMediaExpanded
    ]);
    const handleToggleFileExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        void fetchAssets('file', !isFileExpanded);
    }, [
        fetchAssets,
        isFileExpanded
    ]);
    const handleToggleLinkExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        void fetchAssets('link', !isLinkExpanded);
    }, [
        fetchAssets,
        isLinkExpanded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGroup) return;
        try {
            const partnerId = String(selectedChat._id);
            const bfRaw = localStorage.getItem(`best_friend_${partnerId}`);
            setIsBestFriend(bfRaw ? bfRaw === '1' : false);
            const callRaw = localStorage.getItem(`call_alert_${roomId}`);
            setCallAlertEnabled(callRaw ? callRaw === '1' : true);
            const adRaw = localStorage.getItem(`auto_delete_${roomId}`);
            const val = adRaw === '24h' ? '24h' : adRaw === '7d' ? '7d' : 'off';
            setAutoDeletePolicy(val);
        } catch  {}
    }, [
        isGroup,
        selectedChat,
        roomId
    ]);
    const handleChangeGroupAvatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        const file = e.target.files?.[0];
        if (!file || !isGroup) return;
        try {
            const inputEl = e.target;
            const reader = new FileReader();
            reader.onload = ()=>{
                setCropSrc(String(reader.result || ''));
                setCropFileName(file.name || 'group-avatar.jpg');
                setPendingReset(()=>()=>{
                        inputEl.value = '';
                    });
                setCropOpen(true);
            };
            reader.readAsDataURL(file);
        } catch  {}
    }, [
        isGroup,
        selectedChat,
        currentUser._id,
        currentUser.name,
        reLoad,
        sendNotifyMessage
    ]);
    const handleRenameGroup = ()=>{
        setRenameInput(groupName);
        setIsRenameModalOpen(true);
    };
    const handleSubmitRenameGroup = async ()=>{
        if (!isGroup || renameInput.trim() === groupName) {
            setIsRenameModalOpen(false);
            return;
        }
        try {
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'renameGroup',
                    conversationId: selectedChat._id,
                    data: {
                        name: renameInput.trim()
                    }
                })
            });
            if (!res.ok) throw new Error();
            setGroupName(renameInput.trim());
            setIsRenameModalOpen(false);
            try {
                const actorName = currentUser.name || 'Một thành viên';
                const text = `${actorName} đã đổi tên nhóm thành "${renameInput.trim()}".`;
                await sendNotifyMessage?.(text);
            } catch  {}
            try {
                const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                const roomIdStr = String(selectedChat._id);
                const membersArr = (members || []).map((m)=>({
                        _id: String(m._id ?? m.id ?? '')
                    }));
                sock.emit('group_renamed', {
                    roomId: roomIdStr,
                    groupName: renameInput.trim(),
                    members: membersArr,
                    sender: String(currentUser._id),
                    senderName: currentUser.name
                });
                setTimeout(()=>sock.disconnect(), 500);
            } catch  {}
            reLoad?.();
        } catch  {
            alert('Đổi tên nhóm thất bại.');
        }
    };
    const handleLeaveGroup = async ()=>{
        // Logic giống cũ, rút gọn
        try {
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'leaveGroup',
                    conversationId: selectedChat._id,
                    _id: currentUser._id
                })
            });
            if (!res.ok) throw new Error();
            const name = currentUser.name || 'Một thành viên';
            const text = `${name} đã rời nhóm`;
            await sendNotifyMessage?.(text);
            try {
                const roomIdStr = String(selectedChat._id);
                const myIdStr = String(currentUser._id);
                const nextMembers = (members || []).filter((m)=>{
                    const id = String(m._id ?? m.id ?? '');
                    return id !== myIdStr;
                });
                const payloadMembers = nextMembers.map((m)=>({
                        _id: String(m._id ?? m.id ?? ''),
                        role: m.role,
                        name: m.name,
                        avatar: m.avatar
                    }));
                const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                sock.emit('group_members_updated', {
                    roomId: roomIdStr,
                    members: payloadMembers,
                    sender: myIdStr,
                    senderName: currentUser.name
                });
                setTimeout(()=>sock.disconnect(), 500);
            } catch  {}
            reLoad?.();
            onLeftGroup?.();
            onClose();
        } catch  {
            alert('Rời nhóm thất bại.');
        }
    };
    const handleDisbandGroup = async ()=>{
        try {
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'disbandGroup',
                    conversationId: selectedChat._id,
                    _id: currentUser._id
                })
            });
            if (!res.ok) throw new Error();
            onClose();
            onLeftGroup?.();
            reLoad?.();
        } catch  {
            alert('Giải tán nhóm thất bại.');
        }
    };
    const handleGenerateInviteLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!isGroup) throw new Error('Not a group');
        const groupId = selectedChat._id;
        const res = await fetch('/api/groups/invite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'generate',
                groupId
            })
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
            throw new Error(data.message || 'Tạo link thất bại');
        }
        return data.inviteCode;
    }, [
        isGroup,
        selectedChat
    ]);
    const handleRegenerateInviteLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!isGroup) throw new Error('Not a group');
        const groupId = selectedChat._id;
        const res = await fetch('/api/groups/invite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'regenerate',
                groupId
            })
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
            throw new Error(data.message || 'Tạo link mới thất bại');
        }
        reLoad?.();
        return data.inviteCode;
    }, [
        isGroup,
        selectedChat,
        reLoad
    ]);
    const handleUpdateNicknameForPartner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (nickname, options)=>{
        if (!selectedChat?._id || !currentUser?._id) return;
        try {
            const v = String(nickname || '').trim();
            setPartnerNicknameOverride(v);
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'updateNickname',
                    roomId: selectedChat._id,
                    currentUserId: currentUser._id,
                    data: {
                        nickname: v
                    }
                })
            });
            const ok = res.ok;
            if (!ok) throw new Error();
            try {
                const room = getOneToOneRoomId(String(currentUser._id), String(selectedChat._id));
                window.dispatchEvent(new CustomEvent('roomNicknamesUpdated', {
                    detail: {
                        roomId: room,
                        targetUserId: String(selectedChat._id),
                        nickname: v
                    }
                }));
            } catch  {}
            if (sendNotifyMessage && !options?.silent) {
                const actorName = currentUser.name || 'Bạn';
                const targetName = selectedChat.name || selectedChat.username || 'Người dùng';
                const msg = v ? `${actorName} đã đặt biệt danh cho ${targetName} là "${v}".` : `${actorName} đã xóa biệt danh của ${targetName}.`;
                void sendNotifyMessage(msg);
            }
        } catch  {
            setPartnerNicknameOverride(String(selectedChat.nicknames?.[myId] || selectedChat.name || ''));
            alert('Cập nhật biệt danh thất bại');
        }
    }, [
        selectedChat,
        currentUser,
        sendNotifyMessage,
        myId
    ]);
    const handleUpdateNicknameForMe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (nickname)=>{
        if (!selectedChat?._id || !currentUser?._id) return;
        try {
            const partnerId = String(selectedChat._id);
            const v = String(nickname || '').trim();
            setSelfNicknameOverride(v);
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'updateNickname',
                    roomId: currentUser._id,
                    currentUserId: selectedChat._id,
                    data: {
                        nickname: v
                    }
                })
            });
            const ok = res.ok;
            if (!ok) throw new Error();
            try {
                const room = getOneToOneRoomId(String(currentUser._id), String(partnerId));
                window.dispatchEvent(new CustomEvent('roomNicknamesUpdated', {
                    detail: {
                        roomId: room,
                        targetUserId: String(currentUser._id),
                        nickname: v
                    }
                }));
            } catch  {}
            if (sendNotifyMessage) {
                const actorName = currentUser.name || 'Bạn';
                const msg = v ? `${actorName} đã đặt biệt danh của chính mình là "${v}".` : `${actorName} đã xóa biệt danh của chính mình.`;
                void sendNotifyMessage(msg);
            }
        } catch  {
            const partnerId = String(selectedChat._id);
            setSelfNicknameOverride(String(currentUser.nicknames?.[partnerId] || currentUser.name || ''));
            alert('Cập nhật biệt danh thất bại');
        }
    }, [
        selectedChat,
        currentUser,
        sendNotifyMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isReminderOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsReminderOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 580,
                columnNumber: 9
            }, this) : isPinnedMessagesOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PinnedMessagesList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsPinnedMessagesOpen(false),
                onJumpToMessage: onJumpToMessage
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 582,
                columnNumber: 9
            }, this) : isPollOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsPollOpen(false),
                onRefresh: onRefresh
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full bg-gray-50 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-400 to-indigo-700 text-white p-3 flex items-center justify-between shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200 block sm:hidden",
                                        "aria-label": "Quay lại",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 590,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Tùy chọn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200",
                                    "aria-label": "Đóng",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 605,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 600,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                        lineNumber: 588,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3  bg-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-5",
                                    children: [
                                        isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupAvatarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            isGroup: isGroup,
                                            groupAvatar: groupAvatar,
                                            groupName: groupName,
                                            chatName: chatName,
                                            isGroupAvatarUploading: isGroupAvatarUploading,
                                            avatarInputRef: avatarInputRef,
                                            onChangeGroupAvatar: handleChangeGroupAvatar,
                                            onRenameGroup: handleRenameGroup,
                                            myRole: myRole
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 616,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$UserAvatarSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            userName: partnerNicknameOverride || selectedChat.nicknames?.[myId] || selectedChat.name || selectedChat.username || 'Người dùng',
                                            userAvatar: selectedChat.avatar,
                                            onUpdateNickname: handleUpdateNicknameForPartner
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 628,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ChatQuickActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            isGroup: isGroup,
                                            localIsPinned: localIsPinned,
                                            localIsHidden: localIsHidden,
                                            onPinToggle: ()=>handleChatActionClick('pin'),
                                            onHideToggle: ()=>handleChatActionClick('hide'),
                                            onCreateGroup: ()=>{
                                                onShowCreateGroup();
                                                onClose();
                                            },
                                            onOpenMembers: ()=>setOpenMember(true),
                                            onSearchMessages: ()=>{
                                                try {
                                                    const ev = new CustomEvent('openRoomSearch', {
                                                        detail: {
                                                            roomId
                                                        }
                                                    });
                                                    window.dispatchEvent(ev);
                                                } catch  {}
                                            },
                                            onChangeWallpaper: ()=>{
                                                alert('Tính năng đổi hình nền sẽ sớm có mặt.');
                                            },
                                            isMuted: isMuted,
                                            onToggleMute: ()=>{
                                                const next = !isMuted;
                                                setIsMuted(next);
                                                try {
                                                    const k = `roomMuted:${roomId}:${String(currentUser._id)}`;
                                                    localStorage.setItem(k, String(next));
                                                    const evt = new CustomEvent('roomMutedChanged', {
                                                        detail: {
                                                            roomId,
                                                            muted: next
                                                        }
                                                    });
                                                    window.dispatchEvent(evt);
                                                } catch  {}
                                            },
                                            onOpenProfile: ()=>{
                                                if (!isGroup) {
                                                    const partnerId = String(selectedChat._id);
                                                    if (partnerId) router.push(`/profile/${partnerId}`);
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 641,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 613,
                                    columnNumber: 15
                                }, this),
                                isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white  border border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-all",
                                        title: "Thêm mô tả nhóm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                children: "Thêm mô tả nhóm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 689,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                className: "w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 690,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 685,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 684,
                                    columnNumber: 17
                                }, this),
                                !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow-sm border border-gray-100 overflow-hidden mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const partnerId = String(selectedChat._id);
                                                    const name = selectedChat.name || selectedChat.username || 'Người dùng';
                                                    setEditingPersonalNickname({
                                                        id: partnerId,
                                                        name,
                                                        currentVal: partnerNicknameOverride
                                                    });
                                                },
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiEdit"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Đổi tên gọi nhớ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 698,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 py-4 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiStar"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Đánh dấu bạn thân"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 720,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "relative inline-flex items-center cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "sr-only peer",
                                                                checked: isBestFriend,
                                                                onChange: ()=>{
                                                                    alert('Chức năng đang được hoàn thiện');
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 723,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 717,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>alert('Chức năng đang được hoàn thiện'),
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiBookmarkCheck"], {
                                                                className: "w-6 h-6 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Nhật ký chung"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 736,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 697,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 696,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white  shadow-sm border border-gray-200 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsAssetsModalOpen(true);
                                                void fetchAssets('media', true);
                                                void fetchAssets('file', true);
                                                void fetchAssets('link', true);
                                            },
                                            className: "cursor-pointer w-full py-4 px-5 flex items-center justify-between hover:bg-gray-50 transition-all duration-200 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiImageOn"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[1.125rem] md:text-[1rem] text-gray-900",
                                                            children: "Ảnh, file, link"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 751,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-5 pr-1 pb-2 border-t border-gray-100",
                                            children: latestImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-5 gap-[0.125rem] mt-2",
                                                children: [
                                                    latestImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative aspect-square rounded-[0.25rem] overflow-hidden bg-gray-100 cursor-pointer group",
                                                            onClick: ()=>{
                                                                setAssetsTab('media');
                                                                setIsAssetsModalOpen(true);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    width: 200,
                                                                    height: 200,
                                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(img.url),
                                                                    alt: "Ảnh",
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ItemDropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    itemUrl: img.url,
                                                                    itemId: img.id,
                                                                    fileName: img.fileName,
                                                                    activeMenuId: activeMenuId,
                                                                    onClose: closeMenu,
                                                                    onJumpToMessage: onJumpToMessage,
                                                                    onShareById: (mid)=>{
                                                                        try {
                                                                            const evt = new CustomEvent('shareMessage', {
                                                                                detail: {
                                                                                    messageId: mid
                                                                                }
                                                                            });
                                                                            window.dispatchEvent(evt);
                                                                        } catch  {}
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, img.id, true, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative aspect-square rounded-[0.25rem] overflow-hidden bg-gray-100 cursor-pointer group flex items-center justify-center",
                                                        onClick: ()=>{
                                                            setAssetsTab('media');
                                                            setIsAssetsModalOpen(true);
                                                            void fetchAssets('media', true);
                                                            void fetchAssets('file', true);
                                                            void fetchAssets('link', true);
                                                        },
                                                        title: "Xem tất cả ảnh, file, link",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiPlay1"], {
                                                            className: "w-4 h-4 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 814,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 803,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 769,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: "Chưa có ảnh nào"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 818,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 767,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onOpen: ()=>setIsReminderOpen(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PinnedMessagesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onOpen: ()=>setIsPinnedMessagesOpen(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 19
                                                }, this),
                                                isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onOpen: ()=>setIsPollOpen(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 822,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 750,
                                    columnNumber: 15
                                }, this),
                                !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow-sm border border-gray-100 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    try {
                                                        const w = window;
                                                        w.__createGroupInitialMemberIds = [
                                                            String(selectedChat._id)
                                                        ];
                                                    } catch  {}
                                                    onShowCreateGroup();
                                                },
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiCirclePlus"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: [
                                                                    "Tạo nhóm với ",
                                                                    selectedChat.name || selectedChat.username || 'Người dùng'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 832,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    openAddToGroupModal();
                                                },
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between   hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineUsergroupAdd"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800 ",
                                                                children: [
                                                                    "Thêm ",
                                                                    selectedChat.name || selectedChat.username || 'Người dùng',
                                                                    " vào nhóm"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 858,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 862,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 850,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowCommonGroupsModal(true),
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiUser"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Xem nhóm chung"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 864,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 831,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 830,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white space-y-2",
                                    children: [
                                        isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupMembersSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            isGroup: isGroup,
                                            groupName: groupName,
                                            membersCount: selectedChat.members.length,
                                            onOpenMembers: ()=>setOpenMember(true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this),
                                        isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupInviteLinkSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            groupId: selectedChat._id,
                                            inviteCode: selectedChat.inviteCode,
                                            onGenerateLink: handleGenerateInviteLink,
                                            onRegenerateLink: handleRegenerateInviteLink
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 888,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white  shadow-sm border border-gray-100 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 py-4 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiMapPin"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Ghim trò chuyện"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 901,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "relative inline-flex items-center cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "sr-only peer",
                                                                checked: localIsPinned,
                                                                onChange: ()=>handleChatActionClick('pin')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 911,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 898,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 py-4 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiUnread"], {
                                                                className: "w-5 h-5 text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Ẩn trò chuyện"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 918,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 916,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "relative inline-flex items-center cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "sr-only peer",
                                                                checked: localIsHidden,
                                                                onChange: ()=>handleChatActionClick('hide')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 922,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 928,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 929,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 921,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 915,
                                                columnNumber: 19
                                            }, this),
                                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 py-4 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiBellOn"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 935,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Báo cuộc gọi đến"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "relative inline-flex items-center cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "sr-only peer",
                                                                checked: callAlertEnabled,
                                                                onChange: ()=>{
                                                                    alert('Chức năng đang được hoàn thiện');
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 939,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 948,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 933,
                                                columnNumber: 21
                                            }, this),
                                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>alert('Chức năng đang được hoàn thiện'),
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiSettings"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 958,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Cài đặt cá nhân"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 953,
                                                columnNumber: 21
                                            }, this),
                                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>alert('Chức năng đang được hoàn thiện'),
                                                // onClick={() => setShowAutoDeleteModal(true)}
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiAlarmOn"], {
                                                                className: "w-5 h-5 text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                                children: "Tin nhắn tự xóa"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-gray-600",
                                                        children: autoDeletePolicy === 'off' ? 'Không tự xóa' : autoDeletePolicy === '24h' ? '24 giờ' : '7 ngày'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 965,
                                                columnNumber: 21
                                            }, this),
                                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowReportConfirm(true),
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiCircleInfo"], {
                                                            className: "w-5 h-5 text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                            children: "Báo xấu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 986,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 984,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 980,
                                                columnNumber: 21
                                            }, this),
                                            (!isGroup || isGroup && myRole === 'OWNER') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                // onClick={() => setShowConfirmClear(true)}
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiTrash"], {
                                                            className: "w-5 h-5 text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 996,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                            children: "Xóa lịch sử"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 997,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 995,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 991,
                                                columnNumber: 21
                                            }, this),
                                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>alert('Chức năng đang được hoàn thiện'),
                                                className: "cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiNoWaitingSign"], {
                                                            className: "w-5 h-5 text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[1.125rem] md:text-[1rem] text-gray-800",
                                                            children: "Quản lý chặn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 897,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 896,
                                    columnNumber: 15
                                }, this),
                                isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$GroupDangerZone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    canLeaveGroup: canLeaveGroup,
                                    canDisbandGroup: canDisbandGroup,
                                    onLeaveClick: ()=>setConfirmAction('leave'),
                                    onDisbandClick: ()=>setConfirmAction('disband')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 586,
                columnNumber: 9
            }, this),
            isProfileOpen && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PopupProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isProfileOpen,
                onClose: ()=>setIsProfileOpen(false),
                user: selectedChat
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1028,
                columnNumber: 9
            }, this),
            showAutoDeleteModal && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4",
                onClick: ()=>setShowAutoDeleteModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[25rem] bg-white rounded-lg shadow-2xl h-auto max-h-[90vh] overflow-hidden no-scrollbar relative flex flex-col",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900",
                                    children: "Tin nhắn tự xóa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAutoDeleteModal(false),
                                    className: "text-gray-500 hover:text-gray-700 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1045,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1039,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setAutoDeletePolicy('off');
                                        try {
                                            localStorage.setItem(`auto_delete_${roomId}`, 'off');
                                        } catch  {}
                                        setShowAutoDeleteModal(false);
                                    },
                                    className: `w-full cursor-pointer px-4 py-3 rounded-xl text-left ${autoDeletePolicy === 'off' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`,
                                    children: "Không tự xóa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setAutoDeletePolicy('24h');
                                        try {
                                            localStorage.setItem(`auto_delete_${roomId}`, '24h');
                                        } catch  {}
                                        setShowAutoDeleteModal(false);
                                    },
                                    className: `w-full cursor-pointer px-4 py-3 rounded-xl text-left ${autoDeletePolicy === '24h' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`,
                                    children: "24 giờ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1061,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setAutoDeletePolicy('7d');
                                        try {
                                            localStorage.setItem(`auto_delete_${roomId}`, '7d');
                                        } catch  {}
                                        setShowAutoDeleteModal(false);
                                    },
                                    className: `w-full cursor-pointer px-4 py-3 rounded-xl text-left ${autoDeletePolicy === '7d' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`,
                                    children: "7 ngày"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1073,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1048,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                    lineNumber: 1035,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1031,
                columnNumber: 9
            }, this),
            openMember && isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$ModalMembers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                allUsers: allUsers,
                currentUser: currentUser,
                isOpen: openMember,
                onClose: ()=>setOpenMember(false),
                members: members || [],
                groupName: chatName,
                onMembersAdded: onMembersAdded,
                conversationId: selectedChat._id,
                onMemberRemoved: onMemberRemoved,
                onRoleChange: onRoleChange,
                sendNotifyMessage: sendNotifyMessage,
                lastUpdated: lastUpdated
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1091,
                columnNumber: 9
            }, this),
            editingPersonalNickname && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-md px-4",
                onClick: ()=>setEditingPersonalNickname(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[400px] bg-white rounded-lg shadow-2xl h-auto max-h-[90vh] overflow-hidden no-scrollbar relative flex flex-col",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900",
                                    children: "Đặt biệt danh"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingPersonalNickname(null),
                                    className: "text-gray-500 hover:text-gray-700 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Đặt biệt danh cho ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: editingPersonalNickname.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 35
                                        }, this),
                                        " trong cuộc trò chuyện này."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    autoFocus: true,
                                    defaultValue: editingPersonalNickname.currentVal || editingPersonalNickname.name,
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-[0.5rem] focus:outline-none",
                                    placeholder: "Nhập biệt danh...",
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            const v = (e.currentTarget.value || '').trim();
                                            void handleUpdateNicknameForPartner(v);
                                            setEditingPersonalNickname(null);
                                        }
                                    },
                                    id: "personal-nickname-input"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setEditingPersonalNickname(null),
                                            className: "px-4 py-2 cursor-pointer text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors",
                                            children: "Hủy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 1145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const val = document.getElementById('personal-nickname-input')?.value;
                                                const v = String(val || '').trim();
                                                void handleUpdateNicknameForPartner(v);
                                                setEditingPersonalNickname(null);
                                            },
                                            className: "px-4 py-2 cursor-pointer bg-blue-500 text-white font-bold rounded-[0.5rem] hover:bg-blue-600 transition-all shadow-lg shadow-blue-200",
                                            children: "Lưu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1125,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                    lineNumber: 1112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1108,
                columnNumber: 9
            }, this),
            showAddToGroupModal && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$AddToGroupModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAddToGroupModal,
                onClose: ()=>setShowAddToGroupModal(false),
                currentUser: currentUser,
                selectedChat: selectedChat,
                onShowCreateGroup: ()=>{
                    if (window.innerWidth < 768) {
                        setShowAddToGroupModal(false);
                        setTimeout(()=>onShowCreateGroup(), 300);
                    } else {
                        onShowCreateGroup();
                    }
                },
                reLoad: reLoad
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1168,
                columnNumber: 9
            }, this),
            showCommonGroupsModal && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CommonGroupsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCommonGroupsModal,
                onClose: ()=>setShowCommonGroupsModal(false),
                groups: commonGroups,
                partner: selectedChat,
                onShowCreateGroup: ()=>{
                    if (window.innerWidth < 768) {
                        setShowCommonGroupsModal(false);
                        setTimeout(()=>{
                            try {
                                const w = window;
                                w.__createGroupInitialMemberIds = [
                                    String(selectedChat._id)
                                ];
                            } catch  {}
                            onShowCreateGroup();
                        }, 300);
                    } else {
                        try {
                            const w = window;
                            w.__createGroupInitialMemberIds = [
                                String(selectedChat._id)
                            ];
                        } catch  {}
                        onShowCreateGroup();
                    }
                },
                onShowAddToGroup: ()=>{
                    setShowCommonGroupsModal(false);
                    setTimeout(()=>setShowAddToGroupModal(true), 300);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1185,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$SuccessModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showSuccessModal,
                onClose: ()=>setShowSuccessModal(false),
                title: "Thành công",
                description: "Đã thêm thành viên vào nhóm thành công."
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1214,
                columnNumber: 7
            }, this),
            showConfirmClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmModal"], {
                title: "Xóa lịch sử",
                message: "Bạn có chắc muốn xóa toàn bộ lịch sử trò chuyện?",
                onCancel: ()=>setShowConfirmClear(false),
                onConfirm: async ()=>{
                    setShowConfirmClear(false);
                    try {
                        const res = await fetch('/api/messages', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'clearHistory',
                                roomId
                            })
                        });
                        if (res.ok) {
                            showToast({
                                type: 'success',
                                message: 'Đã xóa lịch sử trò chuyện'
                            });
                            try {
                                window.dispatchEvent(new CustomEvent('chatHistoryCleared', {
                                    detail: {
                                        roomId
                                    }
                                }));
                            } catch  {}
                            try {
                                onRefresh?.();
                            } catch  {}
                        } else {
                            showToast({
                                type: 'error',
                                message: 'Xóa lịch sử thất bại'
                            });
                        }
                    } catch  {
                        showToast({
                            type: 'error',
                            message: 'Lỗi khi xóa lịch sử'
                        });
                    }
                },
                confirmText: "Xóa",
                variant: "danger"
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1221,
                columnNumber: 9
            }, this),
            showReportConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmModal"], {
                title: "Báo xấu",
                message: "Bạn có muốn báo cáo cuộc trò chuyện này?",
                onCancel: ()=>setShowReportConfirm(false),
                onConfirm: async ()=>{
                    setShowReportConfirm(false);
                    try {
                        await fetch('/api/messages', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'create',
                                data: {
                                    roomId,
                                    sender: currentUser._id,
                                    type: 'notify',
                                    content: 'Bạn đã báo xấu cuộc trò chuyện này'
                                }
                            })
                        });
                        showToast({
                            type: 'success',
                            message: 'Đã gửi báo xấu'
                        });
                    } catch  {
                        showToast({
                            type: 'error',
                            message: 'Gửi báo xấu thất bại'
                        });
                    }
                },
                confirmText: "Báo xấu",
                variant: "warning"
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1253,
                columnNumber: 9
            }, this),
            editingSelfNickname && !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-gray-800",
                                    children: "Đặt biệt danh của bạn"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1286,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingSelfNickname(null),
                                    className: "p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1291,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1287,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1285,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Biệt danh của bạn sẽ hiển thị với ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: selectedChat.name || 'đối phương'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 51
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    autoFocus: true,
                                    defaultValue: editingSelfNickname.currentVal || editingSelfNickname.name,
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500",
                                    placeholder: "Nhập biệt danh...",
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            const v = (e.currentTarget.value || '').trim();
                                            void handleUpdateNicknameForMe(v);
                                            setEditingSelfNickname(null);
                                        }
                                    },
                                    id: "self-nickname-input"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setEditingSelfNickname(null),
                                            className: "px-4 py-2 text-gray-600 cursor-pointer font-medium hover:bg-gray-100 rounded-xl transition-colors",
                                            children: "Hủy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const val = document.getElementById('self-nickname-input')?.value;
                                                const v = String(val || '').trim();
                                                void handleUpdateNicknameForMe(v);
                                                setEditingSelfNickname(null);
                                            },
                                            className: "px-4 py-2 cursor-pointer  bg-blue-500 text-white font-bold rounded-[0.5rem] hover:bg-blue-600 transition-all shadow-lg shadow-blue-200",
                                            children: "Lưu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1294,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                    lineNumber: 1284,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1283,
                columnNumber: 9
            }, this),
            isRenameModalOpen && isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$RenameGroupModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isRenameModalOpen,
                renameInput: renameInput,
                onChangeInput: setRenameInput,
                onClose: ()=>setIsRenameModalOpen(false),
                onSubmit: handleSubmitRenameGroup
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1337,
                columnNumber: 9
            }, this),
            confirmAction && isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ConfirmGroupActionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                confirmAction: confirmAction,
                onCancel: ()=>setConfirmAction(null),
                onConfirmLeave: handleLeaveGroup,
                onConfirmDisband: handleDisbandGroup
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1347,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaPreviewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                media: previewMedia,
                chatName: chatName,
                isGroup: isGroup,
                roomId: roomId,
                onClose: ()=>setPreviewMedia(null)
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1355,
                columnNumber: 7
            }, this),
            isAssetsModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth >= 1024 ? "TURBOPACK unreachable" : 'fixed inset-0'} z-50 flex flex-col bg-white`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-400 text-white p-3 flex items-center justify-between shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAssetsModalOpen(false),
                                    className: "p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1373,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1369,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Ảnh, file, link"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                    lineNumber: 1375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                            lineNumber: 1368,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                        lineNumber: 1367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-white border-b border-gray-200 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAssetsTab('media'),
                                className: `cursor-pointer px-3 py-1.5 rounded-full text-sm font-semibold ${assetsTab === 'media' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`,
                                children: "Ảnh"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 1379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAssetsTab('file'),
                                className: ` cursor-pointer px-3 py-1.5 rounded-full text-sm font-semibold ${assetsTab === 'file' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`,
                                children: "File"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 1387,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAssetsTab('link'),
                                className: `cursor-pointer px-3 py-1.5 rounded-full text-sm font-semibold ${assetsTab === 'link' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`,
                                children: "Link"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 1395,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                        lineNumber: 1378,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            assetsTab === 'media' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-4",
                                children: (mediaGroups && mediaGroups.length > 0 ? mediaGroups : [
                                    {
                                        dateLabel: '',
                                        items: mediaList
                                    }
                                ]).map((group, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            group.dateLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-gray-500 mb-2",
                                                children: group.dateLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1418,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 sm:grid-cols-4 gap-3",
                                                children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `relative aspect-square rounded-xl cursor-pointer ${item.type === 'video' ? ' w-full h-full flex gap-2' : ''}  group bg-gray-100 ${activeMenuId === item.id ? 'z-50' : 'z-0'}`,
                                                        onClick: ()=>{
                                                            const mediaType = item.type === 'video' ? 'video' : 'image';
                                                            setPreviewMedia({
                                                                url: item.url,
                                                                type: mediaType
                                                            });
                                                        },
                                                        children: [
                                                            item.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(item.url),
                                                                        className: "w-full h-full object-cover pointer-events-none",
                                                                        preload: "metadata"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                        lineNumber: 1434,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 flex items-center justify-center opacity-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiPlay"], {
                                                                                className: "w-5 h-5 text-blue-600 ml-0.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                                lineNumber: 1441,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1440,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                        lineNumber: 1439,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1433,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                width: 200,
                                                                height: 200,
                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(item.url),
                                                                alt: "Media",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1446,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `cursor-pointer absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-200 z-10 ${activeMenuId === item.id ? 'opacity-100 ring-2 ring-blue-500' : 'opacity-0 group-hover:opacity-100'} hover:bg-white hover:scale-110`,
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setActiveMenuId(activeMenuId === item.id ? null : item.id);
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 text-gray-700",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "5",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1466,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1467,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "19",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1468,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1465,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1454,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ItemDropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                itemUrl: item.url,
                                                                itemId: item.id,
                                                                fileName: item.fileName,
                                                                activeMenuId: activeMenuId,
                                                                onClose: closeMenu,
                                                                onJumpToMessage: onJumpToMessage,
                                                                onShareById: (mid)=>{
                                                                    try {
                                                                        const evt = new CustomEvent('shareMessage', {
                                                                            detail: {
                                                                                messageId: mid
                                                                            }
                                                                        });
                                                                        window.dispatchEvent(evt);
                                                                    } catch  {}
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 1422,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1420,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${group.dateLabel}-${gi}`, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1416,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 1406,
                                columnNumber: 15
                            }, this),
                            assetsTab === 'file' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-4",
                                children: (fileGroups && fileGroups.length > 0 ? fileGroups : [
                                    {
                                        dateLabel: '',
                                        items: fileList
                                    }
                                ]).map((g, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            g.dateLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-gray-500 mb-2",
                                                children: g.dateLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1497,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: g.items.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group cursor-pointer border border-gray-200 hover:border-blue-300",
                                                        onClick: ()=>window.open(file.url, '_blank'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-6 h-6",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                        lineNumber: 1507,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1505,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors",
                                                                    children: file.fileName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1511,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1510,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `cursor-pointer p-2 rounded-full  bg-white/90 backdrop-blur-sm shadow-md transition-all duration-200 z-10 ${activeMenuId === file.id ? 'opacity-100 ring-2 ring-blue-500' : 'opacity-0 group-hover:opacity-100'} hover:bg-white hover:scale-110`,
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setActiveMenuId(activeMenuId === file.id ? null : file.id);
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 text-gray-700",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "5",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1527,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1528,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "19",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1529,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1526,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1515,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ItemDropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                itemUrl: file.url,
                                                                itemId: file.id,
                                                                fileName: file.fileName,
                                                                activeMenuId: activeMenuId,
                                                                onClose: closeMenu,
                                                                onJumpToMessage: onJumpToMessage,
                                                                onShareById: (mid)=>{
                                                                    try {
                                                                        const evt = new CustomEvent('shareMessage', {
                                                                            detail: {
                                                                                messageId: mid
                                                                            }
                                                                        });
                                                                        window.dispatchEvent(evt);
                                                                    } catch  {}
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1532,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, file.id, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 1500,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1498,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, `${g.dateLabel}-${gi}`, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1496,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 1493,
                                columnNumber: 15
                            }, this),
                            assetsTab === 'link' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-4",
                                children: (linkGroups && linkGroups.length > 0 ? linkGroups : [
                                    {
                                        dateLabel: '',
                                        items: linkList
                                    }
                                ]).map((g, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            g.dateLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold text-gray-500 mb-2",
                                                children: g.dateLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1559,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: g.items.map((link)=>{
                                                    const href = link.url.startsWith('http') ? link.url : `https://${link.url}`;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group cursor-pointer border border-gray-200 hover:border-purple-300",
                                                        onClick: ()=>window.open(href, '_blank'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500 text-white shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-6 h-6",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3.9 12a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-5-5zm7-3h2a3 3 0 0 1 0 6h-2a3 3 0 0 1 0-6z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                        lineNumber: 1571,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1570,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1569,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-purple-600 truncate group-hover:underline transition-all",
                                                                    children: link.url
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1575,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1574,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `cursor-pointer p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md transition-all duration-200 z-10 ${activeMenuId === link.id ? 'opacity-100 ring-2 ring-purple-500' : 'opacity-0 group-hover:opacity-100'} hover:bg-white hover:scale-110`,
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setActiveMenuId(activeMenuId === link.id ? null : link.id);
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 text-gray-700",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "5",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1591,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1592,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "19",
                                                                            cy: "12",
                                                                            r: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                            lineNumber: 1593,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                    lineNumber: 1590,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1579,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ItemDropdownMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                itemUrl: link.url,
                                                                itemId: link.id,
                                                                activeMenuId: activeMenuId,
                                                                onClose: closeMenu,
                                                                onJumpToMessage: onJumpToMessage,
                                                                onShareById: (mid)=>{
                                                                    try {
                                                                        const evt = new CustomEvent('shareMessage', {
                                                                            detail: {
                                                                                messageId: mid
                                                                            }
                                                                        });
                                                                        window.dispatchEvent(evt);
                                                                    } catch  {}
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                                lineNumber: 1596,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, link.id, true, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                        lineNumber: 1564,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                                lineNumber: 1560,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, `${g.dateLabel}-${gi}`, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                        lineNumber: 1558,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                                lineNumber: 1555,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                        lineNumber: 1404,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1364,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$CropImageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: cropOpen,
                src: cropSrc,
                onClose: ()=>setCropOpen(false),
                onConfirm: async (file)=>{
                    if (!isGroup) return;
                    setIsGroupAvatarUploading(true);
                    try {
                        const groupId = selectedChat._id;
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('roomId', String(groupId));
                        formData.append('sender', String(currentUser._id));
                        formData.append('type', 'image');
                        formData.append('folderName', `GroupAvatar_${groupId}`);
                        formData.append('skipSaveMessage', 'true');
                        const uploadRes = await fetch(`/api/upload?uploadId=group-avatar-${groupId}-${Date.now()}`, {
                            method: 'POST',
                            body: formData
                        });
                        const uploadJson = await uploadRes.json();
                        if (!uploadRes.ok || !uploadJson?.success || !uploadJson?.link) throw new Error('Upload failed');
                        const updateRes = await fetch('/api/groups', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'updateAvatar',
                                conversationId: groupId,
                                data: {
                                    avatar: uploadJson.link
                                }
                            })
                        });
                        if (!updateRes.ok) throw new Error('Update failed');
                        setGroupAvatar(uploadJson.link);
                        try {
                            const actorName = currentUser.name || 'Một thành viên';
                            const text = `${actorName} đã đổi ảnh đại diện nhóm.`;
                            await sendNotifyMessage?.(text);
                        } catch  {}
                        reLoad?.();
                    } catch  {
                        alert('Cập nhật ảnh nhóm thất bại. Vui lòng thử lại.');
                    } finally{
                        setIsGroupAvatarUploading(false);
                        pendingReset?.();
                        setCropOpen(false);
                        setCropSrc(null);
                    }
                },
                aspectRatio: 1,
                circle: true,
                fileName: cropFileName,
                outputType: "image/jpeg",
                quality: 0.92
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatInfoPopup.tsx",
                lineNumber: 1621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(zalo)/home/ChatPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ChatWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$zalo$292f$home$2f$ChatInfoPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(zalo)/home/ChatInfoPopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$ModalMembers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/ModalMembers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PinMessageTitleModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/PinMessageTitleModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/ChatHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$PinnedMessagesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/PinnedMessagesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$EmojiStickerPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/EmojiStickerPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ReplyBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/ReplyBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MentionMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MentionMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ChatInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/ChatInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MessageList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaPreviewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MediaPreviewModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MessageContextMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatMentions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatMentions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatUpload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatUpload.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatVoiceInput$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatVoiceInput.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatMembers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatMembers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatNotifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$SearchMessageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/SearchMessageModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatInput$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/chatInput.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/chatMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ShareMessageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/ShareMessageModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageMobileContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/MessageMobileContextMenu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const PRESENCE_THRESHOLD_MS = 5 * 60 * 1000;
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
;
;
const STICKERS = [
    'https://cdn-icons-png.flaticon.com/512/9408/9408176.png',
    'https://cdn-icons-png.flaticon.com/512/9408/9408201.png'
];
const SCROLL_BUMP_PX = 80;
const BUTTON_SHOW_THRESHOLD_PX = 60;
const getId = (u)=>{
    if (!u) return '';
    if (typeof u === 'string') return u;
    if ('_id' in u && u._id != null) return String(u._id);
    if ('id' in u && u.id != null) return String(u.id);
    return '';
};
function ChatWindow({ selectedChat, currentUser, allUsers, onShowCreateGroup, reLoad, onChatAction, scrollToMessageId, onScrollComplete, roomSearchKeyword, setRoomSearchKeyword, onBackFromChat, groups, socket }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatInfoInitialSection, setChatInfoInitialSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMember, setOpenMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [socketInstance, setSocketInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const markedReadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialScrolledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const jumpLoadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isAtBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pickerTab, setPickerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('emoji');
    const [highlightedMsgId, setHighlightedMsgId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showScrollDown, setShowScrollDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingNewCount, setPendingNewCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const pendingNewCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasScrolledUpRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const syncLocalReadBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const myId = String(currentUser._id || '');
        if (!myId) return;
        setMessages((prev)=>prev.map((m)=>{
                const arr = Array.isArray(m.readBy) ? m.readBy : [];
                if (arr.some((id)=>String(id) === myId)) return m;
                return {
                    ...m,
                    readBy: [
                        ...arr,
                        myId
                    ]
                };
            }));
    }, [
        currentUser._id
    ]);
    const isGroup = 'isGroup' in selectedChat && selectedChat.isGroup === true;
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [, setPinnedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [allPinnedMessages, setAllPinnedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showPinnedList, setShowPinnedList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const PINNED_PAGE_SIZE = 10;
    const [pinnedSkip, setPinnedSkip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pinnedTotal, setPinnedTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pinnedLoading, setPinnedLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewMedia, setPreviewMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingMessageId, setEditingMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editContent, setEditContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''); // Lưu nội dung đang chỉnh sửa
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [oldestTs, setOldestTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialLoading, setInitialLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const reminderScheduledIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const reminderTimersByIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pollScheduledIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const pollTimersByIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageToShare, setMessageToShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // call ticker được xử lý ở HomePage
    const getOneToOneRoomId = (user1Id, user2Id)=>{
        return [
            user1Id,
            user2Id
        ].sort().join('_');
    };
    const roomId = isGroup ? getId(selectedChat) : getOneToOneRoomId(getId(currentUser), getId(selectedChat));
    const [roomMuted, setRoomMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roomCallActiveLocal, setRoomCallActiveLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roomCallTypeLocal, setRoomCallTypeLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('voice');
    const [roomParticipantsLocal, setRoomParticipantsLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Trạng thái cuộc gọi toàn cục (đọc từ layout thông qua localStorage + event)
    // Chỉ dùng để ẩn banner khi ĐANG có popup cuộc gọi nổi hoặc đang đổ chuông,
    // tránh hiển thị "Tham gia lại" đè lên UI cuộc gọi chính.
    const [globalCallActive, setGlobalCallActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalCallConnecting, setGlobalCallConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalIncoming, setGlobalIncoming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const k = `roomMuted:${roomId}:${String(currentUser._id)}`;
            const v = localStorage.getItem(k) === 'true';
            setRoomMuted(v);
        } catch  {}
    }, [
        roomId,
        currentUser._id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('CURRENT_ROOM_ID', String(roomId));
            const ev = new CustomEvent('currentRoomChanged', {
                detail: {
                    roomId: String(roomId)
                }
            });
            window.dispatchEvent(ev);
        } catch  {}
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const a = localStorage.getItem(`livekit_room_${roomId}_active`) === 'true';
            const tRaw = localStorage.getItem(`livekit_room_${roomId}_type`);
            const t = tRaw === 'video' ? 'video' : 'voice';
            const pRaw = localStorage.getItem(`livekit_room_${roomId}_participants`);
            const p = pRaw ? JSON.parse(pRaw) : [];
            setRoomCallActiveLocal(!!a);
            setRoomCallTypeLocal(t);
            setRoomParticipantsLocal(Array.isArray(p) ? p.map((x)=>String(x)) : []);
        } catch  {}
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const d = e.detail || {};
            if (String(d.roomId) !== String(roomId)) return;
            setRoomCallActiveLocal(!!d.active);
            setRoomCallTypeLocal(d.type === 'video' ? 'video' : 'voice');
            setRoomParticipantsLocal(Array.isArray(d.participants) ? d.participants.map((x)=>String(x)) : []);
        };
        window.addEventListener('roomCallStateChanged', handler);
        return ()=>window.removeEventListener('roomCallStateChanged', handler);
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            setGlobalIncoming(localStorage.getItem('GLOBAL_INCOMING_CALL') === '1');
            setGlobalCallActive(localStorage.getItem('GLOBAL_CALL_ACTIVE') === '1');
            setGlobalCallConnecting(localStorage.getItem('GLOBAL_CALL_CONNECTING') === '1');
        } catch  {}
        const handler = (e)=>{
            const d = e.detail || {};
            setGlobalCallActive(!!d.active);
            setGlobalCallConnecting(!!d.connecting);
            setGlobalIncoming(!!d.incoming);
        };
        window.addEventListener('globalCallStatusChanged', handler);
        return ()=>window.removeEventListener('globalCallStatusChanged', handler);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const d = e.detail;
            if (!d) return;
            if (String(d.roomId) !== String(roomId)) return;
            setRoomMuted(!!d.muted);
        };
        window.addEventListener('roomMutedChanged', handler);
        return ()=>window.removeEventListener('roomMutedChanged', handler);
    }, [
        roomId
    ]);
    // useCallSession được xử lý toàn cục ở HomePage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesRef.current = messages;
    }, [
        messages
    ]);
    const chatName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isGroup) return selectedChat.name;
        const user = selectedChat;
        const myId = String(currentUser._id || currentUser?.id || '');
        return user.nicknames?.[myId] || user.name || user.username || 'Người dùng';
    }, [
        selectedChat,
        isGroup,
        currentUser
    ]);
    const [showSearchSidebar, setShowSearchSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatAvatar = selectedChat.avatar;
    const handleJumpToMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (messageId)=>{
        jumpLoadingRef.current = true;
        scrollLockUntilRef.current = Date.now() + 1800;
        const container = messagesContainerRef.current;
        if (!container) {
            console.error('❌ [JUMP] Container not found');
            jumpLoadingRef.current = false;
            return;
        }
        isAtBottomRef.current = false;
        const computeTopInContainer = (el, parent)=>{
            const elRect = el.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();
            return parent.scrollTop + (elRect.top - parentRect.top);
        };
        const isFullyVisible = (el, parent)=>{
            const cTop = parent.scrollTop;
            const cBottom = cTop + parent.clientHeight;
            const eTop = computeTopInContainer(el, parent);
            const eBottom = eTop + el.clientHeight;
            return eTop >= cTop && eBottom <= cBottom;
        };
        const centerElement = (el)=>{
            try {
                const elTopInContainer = computeTopInContainer(el, container);
                const rawTarget = elTopInContainer - container.clientHeight / 2 + el.clientHeight / 2;
                const maxScroll = Math.max(0, container.scrollHeight - container.clientHeight);
                const targetTop = Math.max(0, Math.min(rawTarget, maxScroll));
                container.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
            } catch  {}
        };
        const scrollToElement = (elementId, attempt = 0)=>{
            const element = messagesContainerRef.current?.querySelector(`[id="${elementId}"]`) || document.getElementById(elementId);
            if (element) {
                try {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest'
                    });
                } catch  {}
                centerElement(element);
                setHighlightedMsgId(messageId);
                setTimeout(()=>setHighlightedMsgId(null), 2500);
                setTimeout(()=>{
                    const e = messagesContainerRef.current?.querySelector(`[id="${elementId}"]`) || document.getElementById(elementId);
                    if (e && !isFullyVisible(e, container)) {
                        centerElement(e);
                    }
                    jumpLoadingRef.current = false;
                    scrollLockUntilRef.current = 0;
                }, 320);
                return true;
            }
            if (attempt < 15) {
                setTimeout(()=>scrollToElement(elementId, attempt + 1), 200);
                return false;
            }
            console.warn('❌ [JUMP] Element not found after 10 attempts');
            jumpLoadingRef.current = false;
            return false;
        };
        const existingElement = document.getElementById(`msg-${messageId}`);
        if (existingElement) {
            scrollToElement(`msg-${messageId}`);
            return;
        }
        const messageInState = messages.find((m)=>String(m._id) === String(messageId));
        if (messageInState) {
            setTimeout(()=>scrollToElement(`msg-${messageId}`), 100);
            return;
        }
        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'getById',
                    _id: messageId
                })
            });
            const result = await response.json();
            const targetMessage = result?.row?.row || result?.row;
            if (!targetMessage || String(targetMessage.roomId) !== String(roomId)) {
                console.error('❌ [JUMP] Message not found or wrong room');
                alert('Không tìm thấy tin nhắn này trong cuộc trò chuyện.');
                jumpLoadingRef.current = false;
                return;
            }
            const targetTs = Number(targetMessage.timestamp);
            const [olderRes, newerRes] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                    limit: 100,
                    sortOrder: 'desc',
                    extraFilters: {
                        timestamp: {
                            $lte: targetTs
                        }
                    }
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                    limit: 50,
                    sortOrder: 'asc',
                    extraFilters: {
                        timestamp: {
                            $gt: targetTs
                        }
                    }
                })
            ]);
            const olderMessages = Array.isArray(olderRes.data) ? olderRes.data : [];
            const newerMessages = Array.isArray(newerRes.data) ? newerRes.data : [];
            const olderAsc = olderMessages.reverse();
            const allNewMessages = [
                ...olderAsc,
                ...newerMessages
            ];
            const existingIds = new Set(messages.map((m)=>String(m._id)));
            const messagesToAdd = allNewMessages.filter((m)=>!existingIds.has(String(m._id)));
            if (messagesToAdd.length > 0) {
                setMessages((prev)=>{
                    const combined = [
                        ...prev,
                        ...messagesToAdd
                    ];
                    combined.sort((a, b)=>{
                        const ta = Number(a.timestamp) || 0;
                        const tb = Number(b.timestamp) || 0;
                        return ta - tb;
                    });
                    return combined;
                });
                const minTimestamp = Math.min(...messagesToAdd.map((m)=>Number(m.timestamp)));
                setOldestTs((prev)=>Math.min(minTimestamp, prev ?? Infinity));
                setHasMore(olderMessages.length === 100);
            }
            setTimeout(()=>{
                scrollToElement(`msg-${messageId}`);
            }, 300);
        } catch (error) {
            console.error('❌ [JUMP] Error:', error);
            alert('Có lỗi xảy ra khi tải tin nhắn.');
            jumpLoadingRef.current = false;
            scrollLockUntilRef.current = 0;
        }
    }, [
        roomId,
        messages,
        oldestTs
    ]);
    // Mobile inline search state
    const [mobileSearchTerm, setMobileSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobileSearchResults, setMobileSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isMobileSearching, setIsMobileSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileCurrentResultIndex, setMobileCurrentResultIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const mobileSearchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleRejoinCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            const ev = new CustomEvent('startCall', {
                detail: {
                    type: roomCallTypeLocal,
                    roomId,
                    isGroup: isGroup,
                    selectedChat: selectedChat
                }
            });
            window.dispatchEvent(ev);
        } catch  {}
    }, [
        roomCallTypeLocal,
        roomId,
        isGroup,
        selectedChat
    ]);
    const hasAutoSearchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isMobile = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
    const isLgOnly = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
    const scrollLockUntilRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mobileSelectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const mobileSelectedMsgIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileCurrentIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const closingSearchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [mobileSearchHasMore, setMobileSearchHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const MOBILE_SEARCH_LIMIT = 200;
    const mobileSearchResultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mobileCurrentIndexRef.current = mobileCurrentResultIndex;
    }, [
        mobileCurrentResultIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mobileSearchResultsRef.current = mobileSearchResults;
    }, [
        mobileSearchResults
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (closingSearchRef.current) return;
        if (roomSearchKeyword && roomSearchKeyword.trim() && scrollToMessageId && !showSearchSidebar) {
            setShowSearchSidebar(true);
        }
    }, [
        roomSearchKeyword,
        scrollToMessageId,
        isMobile,
        showSearchSidebar
    ]);
    const fetchMobileSearchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (query, append = false)=>{
        if (!query.trim() || !roomId) {
            setMobileSearchResults([]);
            setMobileCurrentResultIndex(-1);
            setMobileSearchHasMore(false);
            return;
        }
        setIsMobileSearching(true);
        try {
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
                        }
                    },
                    skip: append ? mobileSearchResultsRef.current.length : 0,
                    limit: MOBILE_SEARCH_LIMIT,
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
            const sorted = filtered.slice().sort((a, b)=>Number(a.timestamp) - Number(b.timestamp));
            const merged = append ? [
                ...mobileSearchResultsRef.current,
                ...sorted
            ] : sorted;
            setMobileSearchResults(merged);
            setMobileSearchHasMore(raw.length === MOBILE_SEARCH_LIMIT);
            if (merged.length > 0) {
                const selectedId = mobileSelectedMsgIdRef.current;
                if (mobileSelectingRef.current && selectedId) {
                    const idx = merged.findIndex((m)=>String(m._id) === String(selectedId));
                    if (idx >= 0) {
                        setMobileCurrentResultIndex(idx);
                    } else {
                        const prevIdx = mobileCurrentIndexRef.current;
                        const safeIdx = Math.max(0, Math.min(merged.length - 1, prevIdx));
                        setMobileCurrentResultIndex(safeIdx);
                    }
                    mobileSelectingRef.current = false;
                    mobileSelectedMsgIdRef.current = null;
                } else if (mobileCurrentIndexRef.current === -1) {
                    const lastIdx = merged.length - 1;
                    setMobileCurrentResultIndex(lastIdx);
                } else {
                    const prevIdx = mobileCurrentIndexRef.current;
                    const safeIdx = Math.max(0, Math.min(merged.length - 1, prevIdx));
                    setMobileCurrentResultIndex(safeIdx);
                }
            } else {
                setMobileCurrentResultIndex(-1);
            }
        } catch (error) {
            console.error('Fetch search results error:', error);
            setMobileSearchResults([]);
            setMobileCurrentResultIndex(-1);
            setMobileSearchHasMore(false);
        } finally{
            setIsMobileSearching(false);
        }
    }, [
        roomId,
        handleJumpToMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (closingSearchRef.current) return;
        if (isMobile && roomSearchKeyword && roomSearchKeyword.trim() && !hasAutoSearchedRef.current && !showSearchSidebar) //TURBOPACK unreachable
        ;
    }, [
        roomSearchKeyword,
        isMobile,
        fetchMobileSearchResults,
        showSearchSidebar
    ]);
    // Mobile: Debounced search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handler = undefined;
    }, [
        mobileSearchTerm,
        isMobile,
        roomSearchKeyword,
        fetchMobileSearchResults
    ]);
    // Mobile: Navigation handlers
    const handlePreviousResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (mobileSearchResults.length === 0) return;
        const newIndex = mobileCurrentResultIndex <= 0 ? mobileSearchResults.length - 1 : mobileCurrentResultIndex - 1;
        setMobileCurrentResultIndex(newIndex);
        mobileSelectingRef.current = true;
        mobileSelectedMsgIdRef.current = mobileSearchResults[newIndex]._id;
        handleJumpToMessage(mobileSearchResults[newIndex]._id);
        setTimeout(()=>{
            mobileSelectingRef.current = false;
            mobileSelectedMsgIdRef.current = null;
        }, 1200);
    }, [
        mobileSearchResults,
        mobileCurrentResultIndex
    ]);
    const handleNextResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (mobileSearchResultsRef.current.length === 0) return;
        if (mobileCurrentResultIndex >= mobileSearchResultsRef.current.length - 1) {
            if (mobileSearchHasMore) {
                await fetchMobileSearchResults(mobileSearchTerm, true);
                const len = mobileSearchResultsRef.current.length;
                const idx = Math.min(mobileCurrentResultIndex + 1, len - 1);
                setMobileCurrentResultIndex(idx);
                mobileSelectingRef.current = true;
                mobileSelectedMsgIdRef.current = mobileSearchResultsRef.current[idx]._id;
                handleJumpToMessage(mobileSearchResultsRef.current[idx]._id);
                setTimeout(()=>{
                    mobileSelectingRef.current = false;
                    mobileSelectedMsgIdRef.current = null;
                }, 1200);
            } else {
                const idx = 0;
                setMobileCurrentResultIndex(idx);
                mobileSelectingRef.current = true;
                mobileSelectedMsgIdRef.current = mobileSearchResultsRef.current[idx]._id;
                handleJumpToMessage(mobileSearchResultsRef.current[idx]._id);
                setTimeout(()=>{
                    mobileSelectingRef.current = false;
                    mobileSelectedMsgIdRef.current = null;
                }, 1200);
            }
            return;
        }
        const idx = mobileCurrentResultIndex + 1;
        setMobileCurrentResultIndex(idx);
        mobileSelectingRef.current = true;
        mobileSelectedMsgIdRef.current = mobileSearchResultsRef.current[idx]._id;
        handleJumpToMessage(mobileSearchResultsRef.current[idx]._id);
        setTimeout(()=>{
            mobileSelectingRef.current = false;
            mobileSelectedMsgIdRef.current = null;
        }, 1200);
    }, [
        mobileSearchHasMore,
        mobileCurrentResultIndex,
        mobileSearchTerm,
        fetchMobileSearchResults
    ]);
    // Reset mobile search when sidebar closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        showSearchSidebar,
        isMobile,
        setRoomSearchKeyword
    ]);
    const presenceInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isGroup) return {
            online: undefined,
            text: ''
        };
        const partnerId = getId(selectedChat);
        const partner = allUsers.find((u)=>String(u._id) === String(partnerId));
        const lastSeen = partner?.lastSeen ?? null;
        const now = Date.now();
        const online = lastSeen != null ? now - lastSeen <= PRESENCE_THRESHOLD_MS : !!partner?.online;
        const text = online ? 'Đang hoạt động' : lastSeen ? `Hoạt động ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTimeAgo"])(lastSeen)} trước` : 'Hoạt động gần đây';
        return {
            online,
            text
        };
    }, [
        isGroup,
        selectedChat,
        allUsers
    ]);
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((force = false)=>{
        if (!force && (showSearchSidebar || scrollLockUntilRef.current && Date.now() < scrollLockUntilRef.current)) {
            return;
        }
        if (jumpLoadingRef.current) return;
        const el = messagesContainerRef.current;
        if (!el) return;
        el.scrollTop = el.scrollHeight;
        const end = messagesEndRef.current;
        if (end && typeof end.scrollIntoView === 'function') {
            end.scrollIntoView({
                block: 'end'
            });
        }
        setPendingNewCount(0);
        pendingNewCountRef.current = 0;
        hasScrolledUpRef.current = false;
        setShowScrollDown(false);
    }, [
        showSearchSidebar
    ]);
    const ensureBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        scrollToBottom();
        setTimeout(scrollToBottom, 0);
        setTimeout(scrollToBottom, 100);
        setTimeout(scrollToBottom, 300);
    }, [
        scrollToBottom
    ]);
    const sendMessageProcess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (msgData)=>{
        try {
            if (msgData._id) {
                const newId = String(msgData._id);
                setMessages((prev)=>{
                    const next = [
                        ...prev,
                        {
                            ...msgData,
                            _id: newId
                        }
                    ];
                    return sortMessagesAsc(next);
                });
                ensureBottom();
                const socketData = {
                    ...msgData,
                    _id: newId,
                    roomId,
                    sender: currentUser._id,
                    senderName: currentUser.name,
                    isGroup: isGroup,
                    receiver: isGroup ? null : getId(selectedChat),
                    members: isGroup ? selectedChat.members : []
                };
                socketRef.current?.emit('send_message', socketData);
                setReplyingTo(null);
            } else {
                const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMessageApi"])({
                    ...msgData,
                    roomId
                });
                if (json.success && typeof json._id === 'string') {
                    const newId = json._id;
                    setMessages((prev)=>{
                        const next = [
                            ...prev,
                            {
                                ...msgData,
                                _id: newId
                            }
                        ];
                        return sortMessagesAsc(next);
                    });
                    ensureBottom();
                    const socketData = {
                        ...msgData,
                        _id: newId,
                        roomId,
                        sender: currentUser._id,
                        senderName: currentUser.name,
                        isGroup: isGroup,
                        receiver: isGroup ? null : getId(selectedChat),
                        members: isGroup ? selectedChat.members : []
                    };
                    socketRef.current?.emit('send_message', socketData);
                    setReplyingTo(null);
                }
            }
        } catch (error) {
            console.error('Save message error:', error);
        }
    }, [
        roomId,
        currentUser,
        isGroup,
        selectedChat,
        ensureBottom
    ]);
    // điều khiển mic/camera/cuộc gọi xử lý ở HomePage
    const handleVoiceCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            window.dispatchEvent(new CustomEvent('startCall', {
                detail: {
                    type: 'voice',
                    roomId,
                    isGroup,
                    selectedChat
                }
            }));
        } catch  {}
    }, [
        roomId,
        isGroup,
        selectedChat
    ]);
    const handleVideoCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            window.dispatchEvent(new CustomEvent('startCall', {
                detail: {
                    type: 'video',
                    roomId,
                    isGroup,
                    selectedChat
                }
            }));
        } catch  {}
    }, [
        roomId,
        isGroup,
        selectedChat
    ]);
    // Removed local startCall listener. Calls are handled globally in HomePage.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            try {
                const d = e.detail || {};
                if (d && d.roomId) {
                // optional: verify roomId matches current room if needed
                }
            } catch  {}
            setShowPopup(false);
            setShowSearchSidebar(true);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
        window.addEventListener('openRoomSearch', handler);
        return ()=>window.removeEventListener('openRoomSearch', handler);
    }, [
        isMobile,
        setShowPopup,
        setShowSearchSidebar
    ]);
    // timer cuộc gọi xử lý ở HomePage
    // Ring tone handled inside useCallSession
    const sortMessagesAsc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((list)=>{
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
        return list.slice().sort(cmp);
    }, []);
    const sendNotifyMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (text, replyToMessageId)=>{
        const newMsg = {
            roomId: roomId,
            sender: currentUser._id,
            content: text,
            type: 'notify',
            timestamp: Date.now(),
            replyToMessageId
        };
        await sendMessageProcess(newMsg);
    }, [
        roomId,
        currentUser._id,
        sendMessageProcess
    ]);
    const schedulePollAutoLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg)=>{
        // Chỉ người tạo poll mới được set timer auto-lock để tránh duplicate notification
        if (!compareIds(msg.sender, currentUser._id)) return;
        const idStr = String(msg._id);
        const existing = pollTimersByIdRef.current.get(idStr);
        if (existing) {
            clearTimeout(existing);
            pollTimersByIdRef.current.delete(idStr);
            pollScheduledIdsRef.current.delete(idStr);
        }
        const endAt = msg.pollEndAt;
        const locked = !!msg.isPollLocked;
        if (typeof endAt !== 'number' || locked) return;
        const now = Date.now();
        const delay = Math.max(0, endAt - now);
        const timerId = window.setTimeout(async ()=>{
            const latest = messagesRef.current.find((x)=>String(x._id) === idStr);
            if (!latest || latest.isRecalled || latest.isPollLocked) {
                pollScheduledIdsRef.current.delete(idStr);
                const t = pollTimersByIdRef.current.get(idStr);
                if (t) {
                    clearTimeout(t);
                    pollTimersByIdRef.current.delete(idStr);
                }
                return;
            }
            let latestEndAt = latest.pollEndAt;
            try {
                const r = await fetch('/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'getById',
                        _id: latest._id
                    })
                });
                const j = await r.json();
                const srv = j && (j.row?.row || j.row);
                const srvEndAt = srv && srv.pollEndAt;
                if (typeof srvEndAt === 'number' || srvEndAt === null) {
                    latestEndAt = srvEndAt;
                }
            } catch  {}
            const now2 = Date.now();
            if (typeof latestEndAt === 'number' && latestEndAt > now2) {
                const newDelay = Math.max(0, latestEndAt - now2);
                const newTimer = window.setTimeout(async ()=>{
                    const latest2 = messagesRef.current.find((x)=>String(x._id) === idStr);
                    if (!latest2 || latest2.isRecalled || latest2.isPollLocked) {
                        pollScheduledIdsRef.current.delete(idStr);
                        const t2 = pollTimersByIdRef.current.get(idStr);
                        if (t2) {
                            clearTimeout(t2);
                            pollTimersByIdRef.current.delete(idStr);
                        }
                        return;
                    }
                    const timeStr2 = new Date(latestEndAt).toLocaleString('vi-VN');
                    const now3 = Date.now();
                    const updateData = {
                        isPollLocked: true,
                        pollLockedAt: now3,
                        editedAt: now3,
                        timestamp: now3
                    };
                    try {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tryLockPollApi"])(String(latest2._id), updateData);
                        if (result.success && result.modifiedCount && result.modifiedCount > 0) {
                            socketRef.current?.emit('edit_message', {
                                _id: latest2._id,
                                roomId,
                                ...updateData
                            });
                            await sendNotifyMessage(`Bình chọn đã tự động khóa: "${String(latest2.content || latest2.pollQuestion || '')}" (kết thúc lúc ${timeStr2})`, String(latest2._id));
                        }
                    } catch  {}
                    pollScheduledIdsRef.current.delete(idStr);
                    pollTimersByIdRef.current.delete(idStr);
                }, newDelay);
                pollTimersByIdRef.current.set(idStr, newTimer);
                return;
            }
            const timeStr = new Date(latestEndAt || now2).toLocaleString('vi-VN');
            const updateData = {
                isPollLocked: true,
                pollLockedAt: now2,
                editedAt: now2,
                timestamp: now2
            };
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tryLockPollApi"])(String(latest._id), updateData);
                if (result.success && result.modifiedCount && result.modifiedCount > 0) {
                    socketRef.current?.emit('edit_message', {
                        _id: latest._id,
                        roomId,
                        ...updateData
                    });
                    await sendNotifyMessage(`Bình chọn đã tự động khóa: "${String(latest.content || latest.pollQuestion || '')}" (kết thúc lúc ${timeStr})`, String(latest._id));
                }
            } catch  {}
            pollScheduledIdsRef.current.delete(idStr);
            pollTimersByIdRef.current.delete(idStr);
        }, delay);
        pollTimersByIdRef.current.set(idStr, timerId);
        pollScheduledIdsRef.current.add(idStr);
    }, [
        roomId,
        sendNotifyMessage,
        currentUser._id
    ]);
    const { uploadingFiles, handleUploadAndSend } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatUpload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatUpload"])({
        roomId,
        currentUser,
        selectedChat,
        isGroup,
        sendMessageProcess,
        setMessages,
        onScrollBottom: scrollToBottom
    });
    const uploadingValues = Object.values(uploadingFiles);
    const hasUploading = uploadingValues.length > 0;
    const overallUploadPercent = hasUploading ? uploadingValues.reduce((sum, v)=>sum + v, 0) / uploadingValues.length : 0;
    const uploadingCount = uploadingValues.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = messagesContainerRef.current;
        if (!el) return;
        const latest = messages[messages.length - 1];
        const mine = latest && String(latest.sender) === String(currentUser._id);
        const should = mine || uploadingCount > 0;
        if (initialLoading) return;
        if (jumpLoadingRef.current) return;
        // Nếu người dùng đã cuộn lên (không ở cuối) hoặc đang tải thêm tin cũ, không auto-scroll
        const userScrolledUp = hasScrolledUpRef.current && !isAtBottomRef.current;
        if (!should || userScrolledUp || loadingMore) return;
        scrollToBottom();
        setTimeout(scrollToBottom, 0);
        setTimeout(scrollToBottom, 250);
    }, [
        messages.length,
        uploadingCount,
        currentUser._id,
        scrollToBottom,
        loadingMore
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = messagesContainerRef.current;
        if (!el) return;
        const imgs = Array.from(el.querySelectorAll('img'));
        const handler = ()=>{
            const locked = !!scrollLockUntilRef.current && Date.now() < scrollLockUntilRef.current;
            if (isAtBottomRef.current && !locked && !showSearchSidebar && !initialLoading) {
                scrollToBottom();
            }
        };
        imgs.forEach((img)=>img.addEventListener('load', handler, {
                once: true
            }));
        return ()=>{
            imgs.forEach((img)=>img.removeEventListener('load', handler));
        };
    }, [
        messages.length,
        scrollToBottom,
        showSearchSidebar
    ]);
    const { memberCount, activeMembers, handleMemberRemoved, handleRoleChange, handleMembersAdded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatMembers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatMembers"])({
        selectedChat,
        isGroup,
        currentUser,
        sendNotifyMessage
    });
    const { showMentionMenu, mentionSuggestions, selectedMentionIndex, mentionMenuRef, editableRef, getPlainTextFromEditable, parseMentions, handleInputChangeEditable, handleKeyDownEditable, selectMention, setShowMentionMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatMentions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatMentions"])({
        allUsers,
        activeMembers,
        currentUser
    });
    const dismissKeyboardAndScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            document.activeElement?.blur?.();
        } catch  {}
        try {
            editableRef.current?.blur?.();
        } catch  {}
        scrollToBottom();
        setTimeout(scrollToBottom, 0);
        setTimeout(scrollToBottom, 150);
    }, [
        editableRef,
        scrollToBottom
    ]);
    // Thêm option @all khi là nhóm
    const ALL_MENTION_ID = '__ALL__';
    const mentionSuggestionsWithAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isGroup) return mentionSuggestions;
        const allOption = {
            _id: ALL_MENTION_ID,
            name: 'All',
            avatar: undefined
        };
        // Tránh trùng nếu đã có trong list
        if (mentionSuggestions.some((u)=>u._id === ALL_MENTION_ID)) return mentionSuggestions;
        return [
            ...mentionSuggestions,
            allOption
        ];
    }, [
        isGroup,
        mentionSuggestions
    ]);
    // Kết hợp keydown: vừa xử lý mention menu, vừa gửi tin nhắn với Enter
    const handleKeyDownCombined = (e)=>{
        // Đầu tiên cho hook xử lý (ArrowUp/Down, Enter để chọn mention, Escape...)
        handleKeyDownEditable(e);
        // Nếu mention menu đang mở, không xử lý gửi tin nhắn
        if (showMentionMenu) return;
        const el = editableRef.current;
        if (!el) return;
        const plain = String(el.innerText || '');
        const trimmed = plain.trim();
        // Toggle Chat nhanh theo '/key'
        if (e.key === 'Enter' && !e.shiftKey && trimmed === '/key') {
            e.preventDefault();
            try {
                localStorage.setItem(`chatFlashEnabled:${roomId}`, 'true');
            } catch  {}
            el.innerText = '';
            handleInputChangeEditable();
            return;
        }
        if (e.key === ' ' && trimmed === '/key') {
            try {
                localStorage.setItem(`chatFlashEnabled:${roomId}`, 'false');
            } catch  {}
        }
        // Enter (không Shift) để gửi tin nhắn
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            let expanded = plain;
            try {
                const activeRaw = localStorage.getItem(`chatFlashActiveFolder:${roomId}`);
                const active = activeRaw ? JSON.parse(activeRaw) : null;
                const fid = active?.id;
                const enabled = localStorage.getItem(`chatFlashEnabled:${roomId}`) === 'true';
                if (fid && enabled) {
                    const kvRaw = localStorage.getItem(`chatFlashKV:${roomId}:${fid}`);
                    const arr = kvRaw ? JSON.parse(kvRaw) : [];
                    const map = new Map((Array.isArray(arr) ? arr : []).map((x)=>[
                            String(x.key),
                            String(x.value)
                        ]));
                    expanded = String(expanded).replace(/(^|\s)\/\s*([\w-]+)/g, (m, p1, k)=>{
                        const v = map.get(k);
                        return v != null ? p1 + v : m;
                    });
                }
            } catch  {}
            if (expanded !== plain) {
                el.innerText = expanded;
                try {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false);
                    const sel = window.getSelection();
                    sel?.removeAllRanges();
                    sel?.addRange(range);
                } catch  {}
                handleInputChangeEditable();
                return;
            }
            void handleSendMessage();
        }
    };
    // ✅ FIXED VERSION - Đặt trong ChatWindow.tsx
    const handleToggleReaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (msg, emoji)=>{
        const myId = String(currentUser._id);
        const old = msg.reactions || {};
        // Clean up và toggle reaction
        const cleaned = Object.fromEntries(Object.entries(old).map(([k, arr])=>[
                k,
                (Array.isArray(arr) ? arr : []).filter((id)=>String(id) !== myId)
            ]));
        const had = Array.isArray(old[emoji]) && old[emoji].includes(myId);
        const next = {
            ...cleaned
        };
        const arr = Array.isArray(next[emoji]) ? next[emoji] : [];
        next[emoji] = had ? arr.filter((id)=>String(id) !== myId) : [
            ...arr,
            myId
        ];
        // 1. ✅ Optimistic Update UI ngay lập tức
        setMessages((prev)=>prev.map((m)=>String(m._id) === String(msg._id) ? {
                    ...m,
                    reactions: next
                } : m));
        // 2. ✅ Tạo payload đầy đủ cho socket
        const socketPayload = {
            _id: msg._id,
            roomId,
            reactions: next,
            // Thêm thông tin để server có thể broadcast đầy đủ
            sender: currentUser._id,
            senderName: currentUser.name,
            isGroup: isGroup,
            receiver: isGroup ? null : getId(selectedChat),
            members: isGroup ? selectedChat.members : []
        };
        // 3. ✅ Emit socket với error handling tốt hơn
        try {
            if (socketRef.current?.connected) {
                socketRef.current.emit('toggle_reaction', socketPayload);
            } else {
                // Fallback: reconnect và emit
                const tempSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                    transports: [
                        'websocket'
                    ],
                    withCredentials: false
                });
                tempSocket.on('connect', ()=>{
                    tempSocket.emit('toggle_reaction', socketPayload);
                    setTimeout(()=>tempSocket.disconnect(), 500);
                });
            }
        } catch (error) {
            console.error('❌ Socket emit error:', error);
        }
        // 4. ✅ Gọi API để persist vào DB
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMessageApi"])(String(msg._id), {
                reactions: next
            });
        } catch (error) {
            console.error('❌ API update error:', error);
            // Rollback nếu API fail
            setMessages((prev)=>prev.map((m)=>String(m._id) === String(msg._id) ? {
                        ...m,
                        reactions: old
                    } : m));
        }
    }, [
        currentUser._id,
        currentUser.name,
        roomId,
        isGroup,
        selectedChat
    ]);
    const handleContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, msg)=>{
        e.preventDefault();
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const menuWidth = 200;
        const senderId = (()=>{
            const idA = msg.sender?._id;
            const idB = msg.sender?.id;
            return String(idA ?? idB ?? msg.sender ?? '');
        })();
        const isMe = senderId === String(currentUser._id);
        const isText = msg.type === 'text';
        const isRecalled = !!msg.isRecalled;
        const canShare = !isRecalled;
        const canPin = !isRecalled;
        const canReply = !isRecalled;
        const canEdit = isMe && isText && !isRecalled;
        const canCopy = isText && !isRecalled;
        const canDownload = !!msg.fileUrl && (msg.type === 'image' || msg.type === 'file' || msg.type === 'sticker');
        const canRecall = isMe && !isRecalled;
        const itemCount = [
            canShare,
            canPin,
            canReply,
            canEdit,
            canCopy,
            canDownload,
            canRecall
        ].filter(Boolean).length;
        const ITEM_H = 36;
        const PADDING = 8;
        const menuHeight = Math.max(ITEM_H + PADDING, itemCount * (ITEM_H + 4) + PADDING);
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;
        let placement = 'below';
        let x;
        let y;
        if (isText) {
            x = e.clientX - menuWidth / 2;
            y = e.clientY - menuHeight / 2;
        } else {
            x = rect.left + rect.width / 2 - menuWidth / 2;
            y = rect.top + rect.height / 2 - menuHeight / 2;
        }
        if (x + menuWidth > viewportW) x = viewportW - menuWidth - 8;
        if (x < 8) x = 8;
        if (y + menuHeight > viewportH) {
            y = Math.max(8, viewportH - menuHeight - 8);
            placement = 'above';
        }
        if (y < 8) y = 8;
        setContextMenu({
            visible: true,
            x,
            y,
            placement,
            message: msg
        });
    }, [
        currentUser._id
    ]);
    const handleMobileLongPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg, el, startX, startY)=>{
        try {
            const rect = el.getBoundingClientRect();
            const menuHeight = 260;
            const viewportH = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 800;
            const viewportW = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 600;
            const kind = String(msg.type || '');
            const isVisual = kind === 'image';
            const collapsedHeight = Math.floor(viewportH * (isVisual ? 0.5 : 0.34));
            const effectiveHeight = isVisual ? collapsedHeight : Math.min(rect.height, collapsedHeight);
            try {
                el.scrollIntoView({
                    behavior: 'auto',
                    block: 'center'
                });
            } catch  {}
            const heavy = effectiveHeight > viewportH * 0.3;
            const medium = effectiveHeight > viewportH * 0.22;
            const baseTopRatio = heavy ? 0.12 : medium ? 0.16 : 0.2;
            const baseTop = Math.floor(viewportH * baseTopRatio);
            const safeBottomGap = 20;
            const clamp = (v, minV, maxV)=>Math.max(minV, Math.min(v, maxV));
            const maxTop = viewportH - effectiveHeight - menuHeight - safeBottomGap;
            const focusTop = clamp(baseTop, 8, maxTop);
            const placement = 'below';
            const yBelow = focusTop + effectiveHeight + 16;
            let patchedMsg = msg;
            try {
                const idx = messages.findIndex((m)=>String(m._id) === String(msg._id));
                const kind = String(msg.type || '');
                const isMedia = kind === 'image' || kind === 'video';
                const isFileNonVideo = kind === 'file' && !(msg.fileUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(String(msg.fileUrl)));
                if (idx >= 0 && (isMedia || isFileNonVideo)) {
                    const senderId = (()=>{
                        const idA = msg.sender?._id;
                        const idB = msg.sender?.id;
                        return String(idA ?? idB ?? msg.sender ?? '');
                    })();
                    const group = [
                        messages[idx]
                    ];
                    for(let k = idx + 1; k < messages.length; k += 1){
                        const next = messages[k];
                        if (next.isRecalled) break;
                        const nextKind = String(next.type || '');
                        const nextIsMedia = nextKind === 'image' || nextKind === 'video';
                        const nextIsFileNonVideo = nextKind === 'file' && !(next.fileUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(String(next.fileUrl)));
                        if (isMedia ? !nextIsMedia : !nextIsFileNonVideo) break;
                        const nextSenderId = (()=>{
                            const idA = next.sender?._id;
                            const idB = next.sender?.id;
                            return String(idA ?? idB ?? next.sender ?? '');
                        })();
                        const dt = Math.abs(Number(next.timestamp) - Number(group[group.length - 1].timestamp));
                        if (nextSenderId !== senderId || dt > 120000) break;
                        group.push(next);
                    }
                    if (group.length > 1) {
                        const items = group.map((m)=>({
                                id: String(m._id),
                                content: m.content || '',
                                type: m.type === 'video' ? 'video' : m.type === 'image' ? 'image' : 'file',
                                fileUrl: String(m.fileUrl || m.previewUrl || ''),
                                fileName: m.fileName
                            }));
                        patchedMsg = {
                            ...msg,
                            batchItems: items
                        };
                    }
                }
            } catch  {}
            setContextMenu({
                visible: true,
                x: Math.floor(viewportW / 2),
                y: Math.max(8, yBelow),
                placement,
                message: patchedMsg,
                focusTop,
                focusHeight: effectiveHeight
            });
        } catch  {}
    }, [
        messages
    ]);
    const closeContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setContextMenu(null);
    }, []);
    const { playMessageSound, showMessageNotification, flashTabTitle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatNotifications"])({
        chatName
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu?.visible) return;
        const handleClickOutside = (e)=>{
            const target = e.target;
            const contextMenuElement = document.querySelector('[data-context-menu="true"]');
            if (contextMenuElement && contextMenuElement.contains(target)) {
                return;
            }
            closeContextMenu();
        };
        setTimeout(()=>{
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        contextMenu,
        closeContextMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu?.visible) return;
        const el = document.querySelector('[data-context-menu="true"]');
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const pad = 8;
        let x = contextMenu.x;
        let y = contextMenu.y;
        let placement = contextMenu.placement ?? 'below';
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (x + rect.width + pad > vw) {
            x = vw - rect.width - pad;
        }
        if (x < pad) {
            x = pad;
        }
        if (y + rect.height + pad > vh) {
            y = Math.max(pad, y - rect.height);
            placement = 'above';
        }
        if (y < pad) {
            y = pad;
        }
        if (x !== contextMenu.x || y !== contextMenu.y || placement !== contextMenu.placement) {
            setContextMenu({
                ...contextMenu,
                x,
                y,
                placement
            });
        }
    }, [
        contextMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu?.visible) return;
        const container = messagesContainerRef.current;
        if (!container) return;
        const closeOnScroll = ()=>{
            closeContextMenu();
        };
        container.addEventListener('scroll', closeOnScroll, {
            passive: true
        });
        return ()=>container.removeEventListener('scroll', closeOnScroll);
    }, [
        contextMenu,
        closeContextMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scrollToMessageId) return;
        initialScrolledRef.current = true;
        setTimeout(()=>{
            handleJumpToMessage(scrollToMessageId);
            if (typeof onScrollComplete === 'function') onScrollComplete();
        }, 50);
    }, [
        scrollToMessageId,
        handleJumpToMessage,
        onScrollComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = messagesContainerRef.current;
        if (!container) return;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!initialScrolledRef.current && messages.length > 0 && !jumpLoadingRef.current && !scrollToMessageId) {
            container.scrollTop = container.scrollHeight;
            initialScrolledRef.current = true;
        }
    }, [
        messages.length,
        roomId,
        scrollToMessageId,
        isMobile,
        showSearchSidebar
    ]);
    // 🔥 USEMEMO: Phân loại tin nhắn
    const messagesGrouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupMessagesByDate"])(messages), [
        messages
    ]);
    const [messageToPin, setMessageToPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPinTitleModal, setShowPinTitleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const executePinMessage = async (message, newPinnedStatus, pinnedTitle)=>{
        const cleanTitle = pinnedTitle?.trim();
        // 1. Cập nhật trạng thái local trước (Optimistic update)
        const updatedMessage = {
            ...message,
            isPinned: newPinnedStatus,
            pinnedTitle: cleanTitle,
            pinnedAt: newPinnedStatus ? Date.now() : null
        };
        setPinnedMessage(newPinnedStatus ? updatedMessage : null);
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'togglePin',
                    messageId: message._id,
                    data: {
                        isPinned: newPinnedStatus,
                        pinnedTitle: cleanTitle
                    }
                })
            });
            if (res.ok) {
                // 2. Cập nhật danh sách messages và pinnedMessage
                setMessages((prev)=>prev.map((m)=>m._id === message._id ? {
                            ...m,
                            isPinned: newPinnedStatus,
                            pinnedTitle: cleanTitle,
                            pinnedAt: newPinnedStatus ? Date.now() : null
                        } : m));
                setAllPinnedMessages((prev)=>{
                    const updatedMsg = {
                        ...message,
                        isPinned: newPinnedStatus,
                        pinnedTitle: cleanTitle,
                        editedAt: Date.now(),
                        pinnedAt: newPinnedStatus ? Date.now() : null
                    };
                    const withoutDup = prev.filter((m)=>String(m._id) !== String(message._id));
                    const next = newPinnedStatus ? [
                        updatedMsg,
                        ...withoutDup
                    ] : withoutDup;
                    return next.sort((a, b)=>Number(b.pinnedAt ?? 0) - Number(a.pinnedAt ?? 0));
                });
                // 2.2. Bắn socket ngay để cập nhật realtime cho tất cả client
                socketRef.current?.emit('edit_message', {
                    _id: message._id,
                    roomId,
                    isPinned: newPinnedStatus,
                    pinnedTitle: cleanTitle,
                    pinnedAt: newPinnedStatus ? Date.now() : null
                });
                // 🔥 BƯỚC MỚI: GỬI THÔNG BÁO VÀO NHÓM
                const action = newPinnedStatus ? 'đã ghim' : 'đã bỏ ghim';
                const senderName = currentUser.name || 'Một thành viên';
                let notificationText = '';
                // Tạo nội dung thông báo dựa trên loại tin nhắn
                if (message.type === 'text') {
                    notificationText = `${senderName} ${action} một tin nhắn văn bản.`;
                } else if (message.type === 'image') {
                    notificationText = `${senderName} ${action} một hình ảnh.`;
                } else if (message.type === 'file') {
                    notificationText = `${senderName} ${action} tệp tin "${message.fileName || 'file'}".`;
                } else if (message.type === 'poll') {
                    notificationText = `${senderName} ${action} một bình chọn.`;
                } else {
                    notificationText = `${senderName} ${action} một tin nhắn.`;
                }
                if (newPinnedStatus && cleanTitle) {
                    notificationText += ` Tiêu đề: "${cleanTitle}"`;
                }
                await sendNotifyMessage(notificationText);
            // 🔥 END BƯỚC MỚI
            } else {
                // Nếu API fail, roll back local state
                setPinnedMessage(message.isPinned ? message : null);
                console.error('API togglePin failed');
            }
        } catch (error) {
            console.error('Ghim tin nhắn thất bại', error);
            // 3. Roll back trạng thái local nếu có lỗi mạng/server
            setPinnedMessage(message.isPinned ? message : null);
        }
    };
    const handlePinMessage = async (message)=>{
        if (message.isPinned) {
            executePinMessage(message, false);
        } else {
            setMessageToPin(message);
            setShowPinTitleModal(true);
        }
    };
    //useEffect ghim tin nhắn
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0) {
            const currentlyPinned = messages.find((m)=>m.isPinned);
            setPinnedMessage(currentlyPinned || null);
        } else {
            setPinnedMessage(null);
        }
    }, [
        messages
    ]);
    const loadMoreMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!roomId || loadingMore || !hasMore || oldestTs == null) return;
        const container = messagesContainerRef.current;
        setLoadingMore(true);
        setShowScrollDown(true);
        const prevHeight = container ? container.scrollHeight : 0;
        let added = false;
        try {
            const LIMIT = 20;
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                limit: LIMIT,
                before: oldestTs,
                sortOrder: 'desc'
            });
            const raw = Array.isArray(data.data) ? data.data : [];
            const existing = new Set(messages.map((m)=>String(m._id)));
            const toAddDesc = raw.filter((m)=>!existing.has(String(m._id)));
            const toAddAsc = toAddDesc.slice().reverse();
            if (toAddAsc.length > 0) {
                setMessages((prev)=>[
                        ...toAddAsc,
                        ...prev
                    ]);
                const newOldest = toAddAsc[0]?.timestamp ?? oldestTs;
                setOldestTs(newOldest ?? oldestTs);
                added = true;
            }
            setHasMore(raw.length === LIMIT);
            if (container && !jumpLoadingRef.current) {
                setTimeout(()=>{
                    const newHeight = container.scrollHeight;
                    const delta = newHeight - prevHeight;
                    container.scrollTop = delta + SCROLL_BUMP_PX;
                }, 0);
            }
        } catch (e) {
            console.error('Load more messages error:', e);
            setHasMore(false);
        } finally{
            setLoadingMore(false);
        }
        return added;
    }, [
        roomId,
        loadingMore,
        hasMore,
        oldestTs,
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = messagesContainerRef.current;
        if (!el) return;
        const handler = ()=>{
            if (el.scrollTop <= 50 && !jumpLoadingRef.current && !showSearchSidebar && initialScrolledRef.current && !initialLoading) {
                void loadMoreMessages();
            }
            const bottomGap = el.scrollHeight - el.scrollTop - el.clientHeight;
            const atBottom = bottomGap <= SCROLL_BUMP_PX;
            isAtBottomRef.current = atBottom;
            if (!atBottom && bottomGap > BUTTON_SHOW_THRESHOLD_PX) {
                hasScrolledUpRef.current = true;
            }
            if (atBottom && !loadingMore) {
                hasScrolledUpRef.current = false;
                setPendingNewCount(0);
                pendingNewCountRef.current = 0;
            }
            setShowScrollDown(hasScrolledUpRef.current || pendingNewCountRef.current > 0 || loadingMore);
        };
        el.addEventListener('scroll', handler);
        return ()=>el.removeEventListener('scroll', handler);
    }, [
        loadMoreMessages,
        loadingMore
    ]);
    const handleReplyTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        setReplyingTo(message);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scrollToMessageId) return;
        const timer = setTimeout(()=>{
            void handleJumpToMessage(scrollToMessageId);
            onScrollComplete?.();
        }, 0);
        return ()=>clearTimeout(timer);
    }, [
        scrollToMessageId,
        initialLoading,
        oldestTs,
        messages.length,
        handleJumpToMessage,
        onScrollComplete
    ]);
    // Khi giao diện footer thay đổi (mở emoji, reply, mention...), cuộn xuống để tránh bị che
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
        // Thêm delay nhỏ để đảm bảo DOM đã cập nhật height của footer
        setTimeout(scrollToBottom, 50);
        setTimeout(scrollToBottom, 150);
    }, [
        showEmojiPicker,
        pickerTab,
        replyingTo,
        showMentionMenu,
        attachments.length,
        scrollToBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = ()=>{
            scrollToBottom();
            setTimeout(scrollToBottom, 50);
            setTimeout(scrollToBottom, 150);
        };
        window.addEventListener('mobileActionsToggle', handler);
        return ()=>window.removeEventListener('mobileActionsToggle', handler);
    }, [
        scrollToBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const anyE = e;
            const d = anyE.detail || {};
            if (String(d.roomId) !== String(roomId)) return;
            setMessages([]);
            setAllPinnedMessages([]);
            setHasMore(false);
            setOldestTs(null);
        };
        window.addEventListener('chatHistoryCleared', handler);
        return ()=>window.removeEventListener('chatHistoryCleared', handler);
    }, [
        roomId
    ]);
    const { isListening, handleVoiceInput } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatVoiceInput$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatVoiceInput"])({
        editableRef,
        handleInputChangeEditable
    });
    const onEmojiClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((emoji)=>{
        if (!editableRef.current) return;
        const toString = (input)=>{
            const raw = typeof input === 'string' ? input : input.emoji;
            const hexLike = /^[0-9a-fA-F-]+$/;
            if (hexLike.test(raw)) {
                const codePoints = raw.split('-').map((h)=>parseInt(h, 16)).filter((n)=>!Number.isNaN(n));
                if (codePoints.length > 0) return String.fromCodePoint(...codePoints);
            }
            return raw;
        };
        const editable = editableRef.current;
        const value = toString(emoji);
        editable.focus();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatInput$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertTextAtCursor"])(editable, value);
        handleInputChangeEditable();
    }, [
        editableRef,
        handleInputChangeEditable
    ]);
    const handleSendSticker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (url)=>{
        ensureBottom();
        const newMsg = {
            roomId,
            sender: currentUser._id,
            fileUrl: url,
            type: 'sticker',
            timestamp: Date.now()
        };
        await sendMessageProcess(newMsg);
        setShowEmojiPicker(false);
    }, [
        roomId,
        currentUser._id,
        sendMessageProcess,
        ensureBottom
    ]);
    const fetchPinnedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setPinnedLoading(true);
            const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPinnedMessagesApi"])(roomId, {
                limit: PINNED_PAGE_SIZE,
                skip: 0
            });
            const arr = json.data || [];
            setAllPinnedMessages(arr);
            const totalRaw = json.total;
            const total = typeof totalRaw === 'number' ? totalRaw : null;
            setPinnedTotal(total);
            setPinnedSkip(arr.length);
        } catch (error) {
            console.error('Fetch Pinned messages error:', error);
            setAllPinnedMessages([]);
            setPinnedTotal(null);
            setPinnedSkip(0);
        } finally{
            setPinnedLoading(false);
        }
    }, [
        roomId,
        PINNED_PAGE_SIZE
    ]);
    const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setInitialLoading(true);
            const targetCount = 20;
            const batchSize = 50;
            let beforeTs = undefined;
            let lastBatchLen = 0;
            const map = new Map();
            const isContent = (t)=>{
                const s = String(t || '');
                return s === 'text' || s === 'image' || s === 'video';
            };
            while(true){
                const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                    limit: batchSize,
                    sortOrder: 'desc',
                    before: beforeTs
                });
                const raw = Array.isArray(resp.data) ? resp.data : [];
                lastBatchLen = raw.length;
                if (raw.length === 0) break;
                raw.forEach((m)=>{
                    const id = String(m._id);
                    if (!map.has(id)) map.set(id, m);
                });
                const descProbe = Array.from(map.values()).sort((a, b)=>{
                    const ta = Number(a.serverTimestamp ?? a.timestamp) || 0;
                    const tb = Number(b.serverTimestamp ?? b.timestamp) || 0;
                    if (tb !== ta) return tb - ta;
                    const ia = String(a._id || '');
                    const ib = String(b._id || '');
                    return ib.localeCompare(ia);
                });
                const contentCount = descProbe.reduce((acc, m)=>acc + (isContent(m.type) ? 1 : 0), 0);
                const minBatchTs = raw.reduce((min, m)=>{
                    const ts = Number(m.serverTimestamp ?? m.timestamp) || 0;
                    return min === null || ts < min ? ts : min;
                }, null);
                beforeTs = typeof minBatchTs === 'number' ? minBatchTs : undefined;
                if (contentCount >= targetCount) break;
                if (raw.length < batchSize) break;
            }
            const desc = Array.from(map.values()).sort((a, b)=>{
                const ta = Number(a.serverTimestamp ?? a.timestamp) || 0;
                const tb = Number(b.serverTimestamp ?? b.timestamp) || 0;
                if (tb !== ta) return tb - ta;
                const ia = String(a._id || '');
                const ib = String(b._id || '');
                return ib.localeCompare(ia);
            });
            const asc = desc.slice().reverse();
            setMessages(asc);
            try {
                const rawPending = localStorage.getItem(`pendingUploads:${roomId}`);
                const arr = rawPending ? JSON.parse(rawPending) : [];
                if (Array.isArray(arr) && arr.length > 0) {
                    setMessages((prev)=>{
                        const existing = new Set(prev.map((m)=>String(m._id)));
                        const toAdd = arr.filter((x)=>!existing.has(String(x.tempId))).map((x)=>({
                                _id: x.tempId,
                                roomId,
                                sender: currentUser._id,
                                senderModel: currentUser,
                                type: x.type,
                                fileUrl: x.fileUrl,
                                fileName: x.fileName,
                                timestamp: Date.now(),
                                content: x.caption,
                                isSending: true
                            }));
                        const combined = [
                            ...prev,
                            ...toAdd
                        ];
                        combined.sort((a, b)=>{
                            const ta = Number(a.timestamp) || 0;
                            const tb = Number(b.timestamp) || 0;
                            return ta - tb;
                        });
                        return combined;
                    });
                }
            } catch  {}
            const first = asc[0]?.timestamp ?? null;
            setOldestTs(first ?? null);
            setHasMore(lastBatchLen >= batchSize || asc.length > 0);
            setInitialLoading(false);
        } catch (error) {
            console.error('Fetch messages error:', error);
            setMessages([]);
            setHasMore(false);
            setOldestTs(null);
            setInitialLoading(false);
        }
    }, [
        roomId
    ]);
    const loadMorePinnedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (pinnedLoading) return;
        const total = pinnedTotal ?? 0;
        if (total > 0 && allPinnedMessages.length >= total) return;
        try {
            setPinnedLoading(true);
            const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPinnedMessagesApi"])(roomId, {
                limit: PINNED_PAGE_SIZE,
                skip: pinnedSkip
            });
            const arr = json.data || [];
            if (arr.length > 0) {
                setAllPinnedMessages((prev)=>{
                    const existing = new Set(prev.map((m)=>String(m._id)));
                    const merged = [
                        ...prev,
                        ...arr.filter((m)=>!existing.has(String(m._id)))
                    ];
                    return merged.sort((a, b)=>Number(b.pinnedAt ?? 0) - Number(a.pinnedAt ?? 0));
                });
                setPinnedSkip((s)=>s + arr.length);
            }
            const totalRaw = json.total;
            const totalNext = typeof totalRaw === 'number' ? totalRaw : pinnedTotal;
            setPinnedTotal(totalNext);
        } catch (e) {
            console.error('Load more pinned messages error:', e);
        } finally{
            setPinnedLoading(false);
        }
    }, [
        pinnedLoading,
        pinnedTotal,
        allPinnedMessages.length,
        roomId,
        PINNED_PAGE_SIZE,
        pinnedSkip
    ]);
    // Chỉ load lại dữ liệu khi roomId thay đổi (tránh gọi API lại khi click cùng một group nhiều lần)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roomId) return;
        setMessages([]);
        void fetchMessages();
        setAllPinnedMessages([]);
        setPinnedSkip(0);
        setPinnedTotal(null);
        void fetchPinnedMessages();
        initialScrolledRef.current = false;
    }, [
        roomId,
        fetchMessages,
        fetchPinnedMessages
    ]);
    // Đồng bộ tin nhắn khi mở lại cùng phòng (selectedChat thay đổi nhưng roomId giữ nguyên)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roomId) return;
        void fetchMessages();
    }, [
        selectedChat,
        roomId,
        fetchMessages
    ]);
    const [nicknamesStamp, setNicknamesStamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const allUsersMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        const myId = String(currentUser?._id || '');
        let roomNickMap = {};
        try {
            const raw = roomId && myId ? localStorage.getItem(`roomNicknames:${roomId}:${myId}`) : null;
            roomNickMap = raw ? JSON.parse(raw) : {};
        } catch  {}
        if (currentUser) {
            const myRoomNick = roomNickMap[String(currentUser._id)];
            const name = myRoomNick || currentUser.name || 'Bạn';
            if (currentUser._id) map.set(String(currentUser._id), name);
        }
        if (Array.isArray(allUsers)) {
            allUsers.forEach((user)=>{
                const nickname = roomNickMap[String(user._id)] || user.nicknames?.[myId];
                const displayName = nickname || user.name;
                if (displayName) {
                    if (user._id) map.set(String(user._id), displayName);
                }
            });
        }
        if (isGroup && Array.isArray(activeMembers)) {
            activeMembers.forEach((mem)=>{
                const memUser = mem;
                // 🔥 Use nickname from Group Member Data (Global) or Personal Nickname (Local)
                const nickname = mem.nickname || memUser.nicknames?.[myId];
                const displayName = nickname || memUser.name || 'Thành viên';
                if (mem._id) map.set(String(mem._id), displayName);
            });
        }
        return map;
    }, [
        currentUser,
        allUsers,
        isGroup,
        activeMembers,
        roomId,
        nicknamesStamp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const d = e.detail || {};
            const type = d.type === 'video' ? 'video' : 'image';
            const myId = String(currentUser._id);
            const senderNick = allUsersMap.get(myId) || currentUser.name;
            if (type === 'image' && typeof d.imageDataUrl === 'string') {
                try {
                    const dataUrl = d.imageDataUrl;
                    const arr = dataUrl.split(',');
                    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
                    const bstr = atob(arr[1]);
                    let n = bstr.length;
                    const u8arr = new Uint8Array(n);
                    while(n--)u8arr[n] = bstr.charCodeAt(n);
                    const blob = new Blob([
                        u8arr
                    ], {
                        type: mime
                    });
                    const file = new File([
                        blob
                    ], 'edited.jpg', {
                        type: mime
                    });
                    const previewUrl = URL.createObjectURL(blob);
                    setAttachments((prev)=>[
                            ...prev,
                            {
                                file,
                                type: 'image',
                                previewUrl,
                                fileName: 'edited.jpg'
                            }
                        ]);
                    dismissKeyboardAndScroll();
                } catch  {}
            } else if (type === 'video' && typeof d.originalUrl === 'string') {
                (async ()=>{
                    try {
                        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(d.originalUrl));
                        const blob = await res.blob();
                        const mime = blob.type || 'video/mp4';
                        const file = new File([
                            blob
                        ], 'edited.mp4', {
                            type: mime
                        });
                        const previewUrl = URL.createObjectURL(blob);
                        setAttachments((prev)=>[
                                ...prev,
                                {
                                    file,
                                    type: 'video',
                                    previewUrl,
                                    fileName: 'edited.mp4',
                                    videoCropConfig: d.videoCropConfig || null
                                }
                            ]);
                        dismissKeyboardAndScroll();
                    } catch  {}
                })();
            }
        };
        window.addEventListener('sendEditedMedia', handler);
        return ()=>window.removeEventListener('sendEditedMedia', handler);
    }, [
        currentUser._id,
        allUsersMap,
        handleUploadAndSend,
        dismissKeyboardAndScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const anyE = e;
            const d = anyE.detail || {};
            if (String(d.roomId) !== String(roomId)) return;
            setNicknamesStamp((s)=>s + 1);
            if (isGroup && d.targetUserId) {
                try {
                    const nick = typeof d.nickname === 'string' ? d.nickname : '';
                    socketRef.current?.emit('room_nickname_updated', {
                        roomId,
                        targetUserId: String(d.targetUserId),
                        nickname: nick
                    });
                } catch  {}
            }
        };
        window.addEventListener('roomNicknamesUpdated', handler);
        return ()=>window.removeEventListener('roomNicknamesUpdated', handler);
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roomId) return;
        if (!socketRef.current || !socketRef.current.connected) {
            socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            setSocketInstance(socketRef.current);
        }
        socketRef.current.on('receive_message', (data)=>{
            if (String(data.roomId) !== String(roomId)) return;
            setMessages((prev)=>{
                const id = String(data._id);
                const exists = prev.some((m)=>String(m._id) === id);
                if (exists) {
                    const next = prev.map((m)=>String(m._id) === id ? {
                            ...m,
                            ...data
                        } : m);
                    return sortMessagesAsc(next);
                }
                const map = new Map();
                [
                    ...prev,
                    data
                ].forEach((m)=>map.set(String(m._id), m));
                const unique = Array.from(map.values()).sort((a, b)=>{
                    const ta = Number(a.serverTimestamp ?? a.timestamp) || 0;
                    const tb = Number(b.serverTimestamp ?? b.timestamp) || 0;
                    if (ta !== tb) return ta - tb;
                    const ia = String(a._id || '');
                    const ib = String(b._id || '');
                    if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
                    if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
                    return ia.localeCompare(ib);
                });
                return unique;
            });
            if (data.type === 'poll') {
                const endAt = data.pollEndAt;
                const locked = !!data.isPollLocked;
                if (typeof endAt === 'number' && !locked) {
                    schedulePollAutoLock(data);
                }
            }
            if (data.sender !== currentUser._id && !roomMuted) {
                playMessageSound();
                showMessageNotification(data);
                flashTabTitle();
            }
            const locked = !!scrollLockUntilRef.current && Date.now() < scrollLockUntilRef.current;
            const elMeasure = messagesContainerRef.current;
            const gap = elMeasure ? elMeasure.scrollHeight - elMeasure.scrollTop - elMeasure.clientHeight : 0;
            const atBottomNow = gap <= SCROLL_BUMP_PX;
            const iconShowingNow = !atBottomNow && gap > BUTTON_SHOW_THRESHOLD_PX;
            const shouldScroll = !locked && (data.sender === currentUser._id || !iconShowingNow);
            if (shouldScroll) {
                scrollToBottom();
                setTimeout(scrollToBottom, 0);
                setTimeout(scrollToBottom, 150);
                setTimeout(scrollToBottom, 300);
                setPendingNewCount(0);
                pendingNewCountRef.current = 0;
                hasScrolledUpRef.current = false;
                setShowScrollDown(false);
                if (data.sender !== currentUser._id) {
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markAsReadApi"])(roomId, String(currentUser._id));
                    syncLocalReadBy();
                    try {
                        socketRef.current?.emit('messages_read', {
                            roomId,
                            userId: String(currentUser._id)
                        });
                    } catch  {}
                }
            } else {
                if (data.sender !== currentUser._id) {
                    setPendingNewCount((c)=>{
                        const next = c + 1;
                        pendingNewCountRef.current = next;
                        return next;
                    });
                    setShowScrollDown(hasScrolledUpRef.current || pendingNewCountRef.current > 0);
                    if (atBottomNow) {
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markAsReadApi"])(roomId, String(currentUser._id));
                        syncLocalReadBy();
                        try {
                            socketRef.current?.emit('messages_read', {
                                roomId,
                                userId: String(currentUser._id)
                            });
                        } catch  {}
                    }
                }
            }
        });
        socketRef.current.on('room_nickname_updated', (payload)=>{
            if (String(payload.roomId) !== String(roomId)) return;
            // 🔥 Reload data to get updated nicknames
            reLoad?.();
        });
        socketRef.current.on('room_nicknames_state', (payload)=>{
            if (String(payload.roomId) !== String(roomId)) return;
            try {
                const myId = String(currentUser._id || '');
                const key = `roomNicknames:${roomId}:${myId}`;
                const incoming = payload.map || {};
                localStorage.setItem(key, JSON.stringify(incoming));
            } catch  {}
            setNicknamesStamp((s)=>s + 1);
        });
        socketRef.current.on('reaction_updated', (data)=>{
            if (String(data.roomId) === String(roomId)) {
                setMessages((prevMessages)=>prevMessages.map((msg)=>String(msg._id) === String(data._id) ? {
                            ...msg,
                            reactions: data.reactions
                        } : msg));
            }
        });
        socketRef.current.on('messages_read', (payload)=>{
            if (String(payload.roomId) !== String(roomId)) return;
            const viewerId = String(payload.userId || '');
            const myId = String(currentUser._id || '');
            if (!viewerId || compareIds(viewerId, myId)) return;
            const lastMine = [
                ...messagesRef.current
            ].slice().reverse().find((m)=>compareIds(m.sender, myId) && !m.isRecalled);
            if (!lastMine) return;
            setMessages((prev)=>prev.map((m)=>{
                    if (String(m._id) !== String(lastMine._id)) return m;
                    const existing = new Set((m.readBy || []).map((x)=>String(x)));
                    if (!existing.has(viewerId)) {
                        return {
                            ...m,
                            readBy: [
                                ...existing,
                                viewerId
                            ]
                        };
                    }
                    return m;
                }));
        });
        // 🔥 Listener cho room_nickname_updated
        socketRef.current.on('room_nickname_updated', (data)=>{
            if (String(data.roomId) === String(roomId)) {
                reLoad?.();
                setNicknamesStamp(Date.now());
            }
        });
        // 🔥 LISTENER CHO edit_message
        socketRef.current.on('edit_message', (data)=>{
            if (String(data.roomId) === String(roomId)) {
                setMessages((prevMessages)=>{
                    const updated = prevMessages.map((msg)=>String(msg._id) === String(data._id) ? {
                            ...msg,
                            content: data.content ?? msg.content,
                            editedAt: data.editedAt,
                            originalContent: data.originalContent || msg.originalContent || msg.content,
                            reminderAt: data.reminderAt ?? msg.reminderAt,
                            reminderNote: data.reminderNote ?? msg.reminderNote,
                            pollQuestion: data.pollQuestion ?? msg.pollQuestion,
                            pollOptions: data.pollOptions ?? msg.pollOptions,
                            pollVotes: data.pollVotes ?? msg.pollVotes,
                            isPollLocked: data.isPollLocked ?? msg.isPollLocked,
                            pollLockedAt: data.pollLockedAt ?? msg.pollLockedAt,
                            pollAllowMultiple: data.pollAllowMultiple ?? msg.pollAllowMultiple,
                            pollAllowAddOptions: data.pollAllowAddOptions ?? msg.pollAllowAddOptions,
                            pollHideVoters: data.pollHideVoters ?? msg.pollHideVoters,
                            pollHideResultsUntilVote: data.pollHideResultsUntilVote ?? msg.pollHideResultsUntilVote,
                            pollEndAt: data.pollEndAt !== undefined ? data.pollEndAt : msg.pollEndAt,
                            timestamp: data.timestamp ?? msg.timestamp,
                            isPinned: typeof data.isPinned === 'boolean' ? data.isPinned : msg.isPinned,
                            pinnedAt: typeof data.pinnedAt !== 'undefined' ? data.pinnedAt : msg.pinnedAt,
                            reactions: data.reactions ?? msg.reactions
                        } : msg);
                    const sorted = [
                        ...updated
                    ].sort((a, b)=>{
                        const ta = Number(a.serverTimestamp ?? a.timestamp) || 0;
                        const tb = Number(b.serverTimestamp ?? b.timestamp) || 0;
                        if (ta !== tb) return ta - tb;
                        const ia = String(a._id || '');
                        const ib = String(b._id || '');
                        if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
                        if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
                        return ia.localeCompare(ib);
                    });
                    return sorted;
                });
                if (typeof data.isPinned === 'boolean') {
                    setAllPinnedMessages((prev)=>{
                        const latest = messagesRef.current.find((m)=>String(m._id) === String(data._id));
                        const updatedMsg = latest ? {
                            ...latest,
                            content: data.content ?? latest.content,
                            pollQuestion: data.pollQuestion ?? latest.pollQuestion,
                            pollOptions: data.pollOptions ?? latest.pollOptions,
                            pollVotes: data.pollVotes ?? latest.pollVotes,
                            isPollLocked: data.isPollLocked ?? latest.isPollLocked,
                            pollLockedAt: data.pollLockedAt ?? latest.pollLockedAt,
                            timestamp: data.timestamp ?? latest.timestamp,
                            editedAt: data.editedAt ?? latest.editedAt,
                            isPinned: data.isPinned,
                            pinnedTitle: data.pinnedTitle ?? latest.pinnedTitle,
                            pinnedAt: typeof data.pinnedAt !== 'undefined' ? data.pinnedAt : latest.pinnedAt
                        } : {
                            _id: data._id,
                            roomId,
                            sender: currentUser._id,
                            content: data.content || '',
                            type: 'text',
                            timestamp: data.timestamp || Date.now(),
                            editedAt: data.editedAt || Date.now(),
                            isPinned: data.isPinned,
                            pinnedTitle: data.pinnedTitle,
                            pinnedAt: typeof data.pinnedAt !== 'undefined' ? data.pinnedAt : Date.now()
                        };
                        const withoutDup = prev.filter((m)=>String(m._id) !== String(data._id));
                        const next = data.isPinned ? [
                            updatedMsg,
                            ...withoutDup
                        ] : withoutDup;
                        return next.sort((a, b)=>Number(b.pinnedAt ?? 0) - Number(a.pinnedAt ?? 0));
                    });
                }
                const idStr = String(data._id);
                const t = reminderTimersByIdRef.current.get(idStr);
                if (t) {
                    clearTimeout(t);
                    reminderTimersByIdRef.current.delete(idStr);
                    reminderScheduledIdsRef.current.delete(idStr);
                }
                const now = Date.now();
                const at = typeof data.reminderAt === 'number' ? data.reminderAt : undefined;
                if (typeof at === 'number') {
                    const delay = Math.max(0, at - now);
                    const timerId = window.setTimeout(async ()=>{
                        const latest = messagesRef.current.find((x)=>String(x._id) === idStr);
                        if (!latest || latest.isRecalled) {
                            reminderScheduledIdsRef.current.delete(idStr);
                            const old = reminderTimersByIdRef.current.get(idStr);
                            if (old) {
                                clearTimeout(old);
                                reminderTimersByIdRef.current.delete(idStr);
                            }
                            return;
                        }
                        let latestAt = latest.reminderAt || latest.timestamp;
                        try {
                            const r = await fetch('/api/messages', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    action: 'getById',
                                    _id: latest._id
                                })
                            });
                            const j = await r.json();
                            const srv = j && (j.row?.row || j.row);
                            const srvAt = srv && srv.reminderAt;
                            if (typeof srvAt === 'number') {
                                latestAt = srvAt;
                            }
                        } catch  {}
                        const now3 = Date.now();
                        if (latestAt > now3) {
                            const newDelay = Math.max(0, latestAt - now3);
                            const newTimer = window.setTimeout(async ()=>{
                                const latest2 = messagesRef.current.find((x)=>String(x._id) === idStr);
                                if (!latest2 || latest2.isRecalled) {
                                    reminderScheduledIdsRef.current.delete(idStr);
                                    const t2 = reminderTimersByIdRef.current.get(idStr);
                                    if (t2) {
                                        clearTimeout(t2);
                                        reminderTimersByIdRef.current.delete(idStr);
                                    }
                                    return;
                                }
                                const latestAt2 = latest2.reminderAt || latest2.timestamp;
                                const timeStr2 = new Date(latestAt2).toLocaleString('vi-VN');
                                try {
                                    const res2 = await fetch('/api/messages', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            action: 'update',
                                            field: '_id',
                                            value: latest2._id,
                                            data: {
                                                reminderFired: true
                                            }
                                        })
                                    });
                                    const json2 = await res2.json();
                                    if (json2?.success) {
                                        await sendNotifyMessage(`Đến giờ lịch hẹn: "${latest2.content || ''}" lúc ${timeStr2}`, String(latest2._id));
                                    }
                                } catch  {}
                                reminderScheduledIdsRef.current.delete(idStr);
                                reminderTimersByIdRef.current.delete(idStr);
                            }, newDelay);
                            reminderTimersByIdRef.current.set(idStr, newTimer);
                            return;
                        }
                        const timeStr = new Date(latestAt).toLocaleString('vi-VN');
                        try {
                            const res = await fetch('/api/messages', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    action: 'update',
                                    field: '_id',
                                    value: latest._id,
                                    data: {
                                        reminderFired: true
                                    }
                                })
                            });
                            const json = await res.json();
                            if (json?.success) {
                                await sendNotifyMessage(`Đến giờ lịch hẹn: "${latest.content || ''}" lúc ${timeStr}`, String(latest._id));
                            }
                        } catch  {}
                        reminderScheduledIdsRef.current.delete(idStr);
                        reminderTimersByIdRef.current.delete(idStr);
                    }, delay);
                    reminderTimersByIdRef.current.set(idStr, timerId);
                    reminderScheduledIdsRef.current.add(idStr);
                }
                const tPoll = pollTimersByIdRef.current.get(idStr);
                if (tPoll) {
                    clearTimeout(tPoll);
                    pollTimersByIdRef.current.delete(idStr);
                    pollScheduledIdsRef.current.delete(idStr);
                }
                const endAt = data.pollEndAt;
                const shouldSchedule = typeof endAt === 'number' && !data.isPollLocked;
                if (shouldSchedule) {
                    const existingMsg = messagesRef.current.find((m)=>String(m._id) === idStr);
                    const composed = existingMsg ? {
                        ...existingMsg,
                        pollEndAt: endAt,
                        isPollLocked: data.isPollLocked
                    } : {
                        _id: data._id,
                        roomId: data.roomId,
                        pollEndAt: endAt,
                        isPollLocked: data.isPollLocked
                    };
                    schedulePollAutoLock(composed);
                }
            // Không re-fetch để tránh reload, cập nhật cục bộ qua socket
            }
        });
        socketRef.current.on('edit_message', (data)=>{
            if (String(data.roomId) === String(roomId)) {
                setMessages((prevMessages)=>{
                    const updated = prevMessages.map((msg)=>String(msg._id) === String(data._id) ? {
                            ...msg,
                            content: data.newContent ?? data.content ?? msg.content,
                            editedAt: data.editedAt,
                            originalContent: data.originalContent || msg.originalContent || msg.content,
                            timestamp: typeof data.timestamp === 'number' ? data.timestamp : msg.timestamp
                        } : msg);
                    return updated;
                });
                const idStr = String(data._id);
                const t = reminderTimersByIdRef.current.get(idStr);
                if (t) {
                    clearTimeout(t);
                    reminderTimersByIdRef.current.delete(idStr);
                    reminderScheduledIdsRef.current.delete(idStr);
                }
            // Không re-fetch để tránh reload, cập nhật cục bộ qua socket
            }
        });
        socketRef.current.on('message_recalled', (data)=>{
            if (data.roomId === roomId) {
                setMessages((prevMessages)=>prevMessages.map((msg)=>msg._id === data._id ? {
                            ...msg,
                            isRecalled: true
                        } : msg));
                const idStr = String(data._id);
                const t = reminderTimersByIdRef.current.get(idStr);
                if (t) {
                    clearTimeout(t);
                    reminderTimersByIdRef.current.delete(idStr);
                    reminderScheduledIdsRef.current.delete(idStr);
                }
                const tp = pollTimersByIdRef.current.get(idStr);
                if (tp) {
                    clearTimeout(tp);
                    pollTimersByIdRef.current.delete(idStr);
                }
                pollScheduledIdsRef.current.delete(idStr);
            // Không re-fetch để tránh reload, cập nhật cục bộ qua socket
            }
        });
        socketRef.current.on('message_deleted', (data)=>{
            if (data.roomId === roomId) {
                setMessages((prevMessages)=>prevMessages.filter((msg)=>msg._id !== data._id));
                const idStr = String(data._id);
                const t = reminderTimersByIdRef.current.get(idStr);
                if (t) {
                    clearTimeout(t);
                    reminderTimersByIdRef.current.delete(idStr);
                }
                reminderScheduledIdsRef.current.delete(idStr);
                const tp = pollTimersByIdRef.current.get(idStr);
                if (tp) {
                    clearTimeout(tp);
                    pollTimersByIdRef.current.delete(idStr);
                }
                pollScheduledIdsRef.current.delete(idStr);
                void fetchMessages();
            }
        });
        socketRef.current.emit('join_room', roomId);
        socketRef.current.emit('join_user', {
            userId: String(currentUser._id)
        });
        return ()=>{
            try {
                socketRef.current?.off('receive_message');
                socketRef.current?.off('room_nickname_updated');
                socketRef.current?.off('room_nicknames_state');
                socketRef.current?.off('reaction_updated');
                socketRef.current?.off('messages_read');
                socketRef.current?.off('edit_message');
                socketRef.current?.off('message_recalled');
                socketRef.current?.off('message_deleted');
            } catch  {}
            setSocketInstance(null);
        };
    }, [
        roomId,
        currentUser._id,
        playMessageSound,
        showMessageNotification,
        fetchMessages,
        sendNotifyMessage,
        socket
    ]);
    // Socket call events và ring tone được xử lý ở HomePage
    // pendingIncomingCall được xử lý ở HomePage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messages.forEach((m)=>{
            const idStr = String(m._id);
            const scheduled = pollScheduledIdsRef.current.has(idStr);
            const endAt = m.pollEndAt;
            const locked = !!m.isPollLocked;
            if (typeof endAt === 'number' && !locked && !scheduled) {
                schedulePollAutoLock(m);
            }
            if ((endAt == null || locked) && scheduled) {
                const tp = pollTimersByIdRef.current.get(idStr);
                if (tp) {
                    clearTimeout(tp);
                    pollTimersByIdRef.current.delete(idStr);
                }
                pollScheduledIdsRef.current.delete(idStr);
            }
        });
    }, [
        messages,
        schedulePollAutoLock
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = footerRef.current;
        if (!el) return;
        const allowDefault = (target)=>{
            const t = target;
            if (!t) return false;
            return !!(t.closest('[contenteditable="true"]') || t.closest('.overflow-y-auto'));
        };
        const onTouchMove = (e)=>{
            if (allowDefault(e.target)) return;
            e.preventDefault();
        };
        const onWheel = (e)=>{
            if (allowDefault(e.target)) return;
            e.preventDefault();
        };
        el.addEventListener('touchmove', onTouchMove, {
            passive: false
        });
        el.addEventListener('wheel', onWheel, {
            passive: false
        });
        return ()=>{
            el.removeEventListener('touchmove', onTouchMove);
            el.removeEventListener('wheel', onWheel);
        };
    }, []);
    const handleRecallMessage = async (messageId)=>{
        if (!confirm('Bạn có chắc chắn muốn thu hồi tin nhắn này?')) return;
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recallMessageApi"])(roomId, messageId);
            if (data.success) {
                setMessages((prev)=>prev.map((m)=>m._id === messageId ? {
                            ...m,
                            isRecalled: true
                        } : m));
                const socketData = {
                    _id: messageId,
                    roomId,
                    sender: currentUser._id,
                    isGroup: isGroup,
                    receiver: isGroup ? null : getId(selectedChat),
                    members: isGroup ? selectedChat.members : [],
                    type: 'recall',
                    content: 'đã thu hồi tin nhắn',
                    timestamp: Date.now()
                };
                socketRef.current?.emit('recall_message', socketData);
            } else if (data.message) {
                alert('Không thể thu hồi: ' + data.message);
            }
        } catch (error) {
            console.error('Recall error:', error);
        }
    };
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!roomId || !currentUser) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markAsReadApi"])(roomId, getId(currentUser));
            markedReadRef.current = roomId;
            try {
                socketRef.current?.emit('messages_read', {
                    roomId,
                    userId: getId(currentUser)
                });
            } catch  {}
        } catch (error) {
            console.error('Mark as read failed:', error);
        }
    }, [
        roomId,
        currentUser,
        reLoad
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roomId || !currentUser) return;
        if (markedReadRef.current === roomId) return;
        void markAsRead();
        syncLocalReadBy();
    }, [
        roomId,
        currentUser,
        markAsRead
    ]);
    // Removed polling for read status - using socket 'messages_read' instead
    // Đóng mention menu khi click bên ngoài
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (mentionMenuRef.current && !mentionMenuRef.current.contains(e.target)) {
                setShowMentionMenu(false);
            }
        };
        if (showMentionMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        showMentionMenu,
        mentionMenuRef,
        setShowMentionMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            const target = e.target;
            const footerEl = footerRef.current;
            const inputEl = editableRef.current;
            if (!inputEl) return;
            const active = document.activeElement === inputEl;
            if (!active) return;
            if (footerEl && target && footerEl.contains(target)) return;
            try {
                inputEl.blur();
            } catch  {}
            setShowEmojiPicker(false);
        };
        document.addEventListener('mousedown', handler, true);
        document.addEventListener('touchstart', handler, true);
        return ()=>{
            document.removeEventListener('mousedown', handler, true);
            document.removeEventListener('touchstart', handler, true);
        };
    }, [
        editableRef,
        footerRef,
        setShowEmojiPicker
    ]);
    const handleToggleEmojiPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            editableRef.current?.blur?.();
        } catch  {}
        setTimeout(()=>setShowEmojiPicker((prev)=>!prev), 120);
    }, [
        editableRef,
        setShowEmojiPicker
    ]);
    const getSenderName = (sender)=>{
        const id = normalizeId(sender);
        // 1. Ưu tiên tìm trong map (đã có nickname)
        const direct = allUsersMap.get(id);
        if (direct) return direct;
        const asNumber = Number(id);
        if (!Number.isNaN(asNumber)) {
            const numericKey = String(asNumber);
            const val = allUsersMap.get(numericKey);
            if (val) return val;
        }
        // 2. Fallback nếu là object (user lạ chưa có trong list?)
        if (typeof sender === 'object' && sender && 'name' in sender && sender.name) {
            return sender.name;
        }
        return 'Người dùng';
    };
    const handleSendMessage = async ()=>{
        if (!editableRef.current) return;
        const plainText = getPlainTextFromEditable().trim();
        const hasAtt = attachments.length > 0;
        if (!plainText && !hasAtt) return;
        const { mentions, displayText } = parseMentions(plainText);
        let expandedText = displayText;
        try {
            const activeRaw = localStorage.getItem(`chatFlashActiveFolder:${roomId}`);
            const active = activeRaw ? JSON.parse(activeRaw) : null;
            const fid = active?.id;
            const enabled = localStorage.getItem(`chatFlashEnabled:${roomId}`) === 'true';
            if (fid && enabled) {
                const kvRaw = localStorage.getItem(`chatFlashKV:${roomId}:${fid}`);
                const arr = kvRaw ? JSON.parse(kvRaw) : [];
                const map = new Map((Array.isArray(arr) ? arr : []).map((x)=>[
                        String(x.key),
                        String(x.value)
                    ]));
                expandedText = String(expandedText).replace(/(^|\s)\/([\w-]+)/g, (m, p1, k)=>{
                    const v = map.get(k);
                    return v != null ? p1 + v : m;
                });
            }
        } catch  {}
        const repliedUserName = replyingTo ? getSenderName(replyingTo.sender) : undefined;
        const ALL_MENTION_ID = '__ALL__';
        // Expand mentions: nếu có @all thì thêm toàn bộ member IDs
        const expandedMentionIds = new Set();
        mentions.forEach((id)=>{
            if (id === ALL_MENTION_ID) {
                activeMembers.forEach((mem)=>{
                    const memId = String(mem._id || mem.id || '');
                    if (memId) expandedMentionIds.add(memId);
                });
            } else {
                expandedMentionIds.add(id);
            }
        });
        const finalMentions = Array.from(expandedMentionIds);
        if (editableRef.current) {
            editableRef.current.innerHTML = '';
        }
        // 🔥 Clear attachments ngay lập tức để tránh upload trùng nếu user ấn gửi tiếp
        let currentAttachments = [];
        if (hasAtt) {
            currentAttachments = [
                ...attachments
            ];
            setAttachments([]);
        }
        if (plainText) {
            // Lấy nickname hiện tại của người gửi
            const myId = String(currentUser._id);
            const senderNick = allUsersMap.get(myId) || currentUser.name;
            const textMsg = {
                roomId,
                sender: currentUser._id,
                senderName: senderNick,
                content: expandedText,
                type: 'text',
                timestamp: Date.now(),
                replyToMessageId: replyingTo?._id,
                replyToMessageName: repliedUserName,
                mentions: finalMentions.length > 0 ? finalMentions : undefined
            };
            await sendMessageProcess(textMsg);
        }
        if (hasAtt) {
            const myId = String(currentUser._id);
            const senderNick = allUsersMap.get(myId) || currentUser.name;
            const batchId = `batch_${Date.now()}_${Math.random().toString(36).slice(2)}`;
            currentAttachments.forEach((att)=>{
                handleUploadAndSend(att.file, att.type, undefined, replyingTo?._id, undefined, senderNick, batchId, att.videoCropConfig || null).then(()=>{
                    try {
                        URL.revokeObjectURL(att.previewUrl);
                    } catch  {}
                });
            });
        }
        try {
            const el = editableRef.current;
            if (el) {
                // 🔥 Fix: Nếu có attachment (hasAtt), blur để đóng keyboard trên mobile/tablet
                if (hasAtt) {
                    dismissKeyboardAndScroll();
                } else {
                    // Nếu chỉ gửi text, focus lại input để user gõ tiếp
                    el.focus();
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false);
                    const sel = window.getSelection();
                    sel?.removeAllRanges();
                    sel?.addRange(range);
                }
            }
        } catch  {}
    };
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
    const getSenderInfo = (sender)=>{
        const senderId = normalizeId(sender);
        // 1. Check currentUser trước
        if (compareIds(currentUser._id, senderId)) {
            return {
                _id: senderId,
                name: currentUser.name || 'Bạn',
                avatar: currentUser.avatar ?? null
            };
        }
        // 2. Ưu tiên lấy tên từ map (đã xử lý nickname)
        const mapName = allUsersMap.get(senderId) || allUsersMap.get(String(Number(senderId)));
        // 3. Tìm user object để lấy avatar
        const foundUser = allUsers.find((u)=>compareIds(u._id || u.id, senderId));
        const foundMember = isGroup && Array.isArray(activeMembers) ? activeMembers.find((m)=>compareIds(m._id || m.id, senderId)) : null;
        const userObj = foundUser || foundMember;
        const senderObj = typeof sender === 'object' && sender !== null ? sender : null;
        const finalName = mapName || userObj?.name || senderObj?.name || 'Người dùng';
        const finalAvatar = userObj?.avatar || senderObj?.avatar || null;
        return {
            _id: senderId,
            name: finalName,
            avatar: finalAvatar
        };
    };
    // Render tin nhắn với highlight mentions + link clickable + search keyword
    const renderMessageContent = (content, mentionedUserIds, isMe, searchKeyword)=>{
        if (!content) return null;
        // Check if content looks like HTML (from Rich Text Editor)
        // ReactQuill typically wraps content in <p>, <div>, <ul>, <ol>, etc.
        const isHtml = /<[a-z][\s\S]*>/i.test(content);
        if (isHtml) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rich-text-content [&>p]:mb-1 [&>p]:mt-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4",
                dangerouslySetInnerHTML: {
                    __html: content
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                lineNumber: 2846,
                columnNumber: 9
            }, this);
        }
        const highlightKeyword = (text, keyword)=>{
            if (!keyword || !keyword.trim() || !text) return text;
            const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildAccentInsensitiveRegex"])(keyword);
            const parts = text.split(regex);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: parts.map((part, i)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                        className: "bg-yellow-200 text-yellow-900 px-0.5 rounded font-medium",
                        children: part
                    }, i, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                        lineNumber: 2861,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: part
                    }, i, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                        lineNumber: 2865,
                        columnNumber: 15
                    }, this))
            }, void 0, false);
        };
        const parts = content.split(/(@\[[^\]]+\]\([^)]+\))/g);
        return parts.map((part, index)=>{
            const mentionMatch = part.match(/@\[([^\]]+)\]\(([^)]+)\)/);
            if (mentionMatch) {
                const [, displayName, userId] = mentionMatch;
                const isMentioningMe = userId === String(currentUser._id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-semibold px-1 rounded ${isMentioningMe ? 'bg-yellow-300 text-yellow-900' : isMe ? 'bg-blue-300 text-blue-900' : 'bg-gray-300 text-gray-900'}`,
                    children: [
                        "@",
                        displayName
                    ]
                }, `m-${index}`, true, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 2881,
                    columnNumber: 11
                }, this);
            }
            const linkRegex = /(https?:\/\/|www\.)\S+/gi;
            const nodes = [];
            let lastIndex = 0;
            let match;
            const text = part;
            while((match = linkRegex.exec(text)) !== null){
                const start = match.index;
                const end = start + match[0].length;
                if (start > lastIndex) {
                    const beforeLink = text.slice(lastIndex, start);
                    nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: highlightKeyword(beforeLink, searchKeyword)
                    }, `t-${index}-${lastIndex}`, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                        lineNumber: 2906,
                        columnNumber: 22
                    }, this));
                }
                const url = match[0];
                const href = url.startsWith('http') ? url : `https://${url}`;
                nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: href,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-blue-600 hover:underline break-all",
                    children: highlightKeyword(url, searchKeyword)
                }, `a-${index}-${start}`, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 2911,
                    columnNumber: 11
                }, this));
                lastIndex = end;
            }
            if (lastIndex < text.length) {
                const remaining = text.slice(lastIndex);
                nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: highlightKeyword(remaining, searchKeyword)
                }, `t-${index}-${lastIndex}-end`, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 2925,
                    columnNumber: 20
                }, this));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: nodes
            }, `p-${index}`, false, {
                fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                lineNumber: 2927,
                columnNumber: 14
            }, this);
        });
    };
    const chatContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            currentUser,
            allUsers,
            selectedChat,
            messages,
            isGroup,
            chatName
        }), [
        currentUser,
        allUsers,
        selectedChat,
        messages,
        isGroup,
        chatName
    ]);
    const handleSaveEdit = async (messageId, newContent)=>{
        if (!newContent.trim()) return;
        const originalMessage = messages.find((m)=>m._id === messageId);
        if (!originalMessage) return;
        const editedAtTimestamp = Date.now();
        const originalContentText = originalMessage.originalContent || originalMessage.content || '';
        // 1. Optimistic Update
        setMessages((prev)=>prev.map((m)=>m._id === messageId ? {
                    ...m,
                    content: newContent,
                    editedAt: editedAtTimestamp,
                    originalContent: originalContentText
                } : m));
        setEditingMessageId(null);
        // 2. Gọi API Backend
        try {
            await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'editMessage',
                    data: {
                        messageId,
                        newContent
                    }
                })
            });
            // 3. EMIT SOCKET EVENT
            const myId = String(currentUser._id);
            const senderNick = allUsersMap.get(myId) || currentUser.name;
            const socketData = {
                _id: messageId,
                roomId: roomId,
                newContent: newContent,
                editedAt: editedAtTimestamp,
                originalContent: originalContentText,
                sender: currentUser._id,
                senderName: senderNick,
                isGroup: isGroup,
                receiver: isGroup ? null : getId(selectedChat),
                members: isGroup ? selectedChat.members : []
            };
            socketRef.current?.emit('edit_message', socketData);
        } catch (e) {
            console.error('❌ [CLIENT] Chỉnh sửa thất bại:', e);
            alert('Lỗi khi lưu chỉnh sửa.');
            setMessages((prev)=>prev.map((m)=>m._id === messageId ? originalMessage : m));
        }
    };
    const handleShareMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        setMessageToShare(message);
        setShowShareModal(true);
    }, []);
    const handleShareToRooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (targetRoomIds, message, attachedText)=>{
        try {
            let shareContent = '';
            const originalSenderName = getSenderName(message.sender);
            if (message.type === 'text') shareContent = message.content || '';
            const batchItems = message.batchItems || [];
            const safeGroups = Array.isArray(groups) ? groups : [];
            for (const targetRoomId of targetRoomIds){
                const isGroupChat = safeGroups.some((g)=>String(g._id) === String(targetRoomId));
                const myId = String(currentUser._id);
                const senderNick = allUsersMap.get(myId) || currentUser.name;
                const newMsg = {
                    roomId: targetRoomId,
                    sender: currentUser._id,
                    type: message.type,
                    content: message.type === 'text' ? shareContent : message.content,
                    fileUrl: message.fileUrl,
                    fileName: message.fileName,
                    timestamp: Date.now(),
                    // Thêm metadata về shared message
                    sharedFrom: {
                        messageId: String(message._id),
                        originalSender: originalSenderName,
                        originalRoomId: String(message.roomId)
                    }
                };
                if (attachedText && attachedText.trim()) {
                    const textMsg = {
                        roomId: targetRoomId,
                        sender: currentUser._id,
                        senderName: senderNick,
                        content: attachedText.trim(),
                        type: 'text',
                        timestamp: Date.now()
                    };
                    const resText = await fetch('/api/messages', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'create',
                            data: textMsg
                        })
                    });
                    const jsonText = await resText.json();
                    if (jsonText.success && typeof jsonText._id === 'string') {
                        const sockBaseText = isGroupChat ? {
                            roomId: targetRoomId,
                            sender: currentUser._id,
                            senderName: senderNick,
                            isGroup: true,
                            receiver: null,
                            members: safeGroups.find((g)=>String(g._id) === String(targetRoomId))?.members || []
                        } : {
                            roomId: targetRoomId,
                            sender: currentUser._id,
                            senderName: senderNick,
                            isGroup: false,
                            receiver: targetRoomId.split('_').find((id)=>id !== String(currentUser._id)),
                            members: []
                        };
                        socketRef.current?.emit('send_message', {
                            ...sockBaseText,
                            ...textMsg,
                            _id: jsonText._id
                        });
                    }
                }
                if (batchItems.length > 0) {
                    const batchId = `${String(message._id)}-${Date.now()}`;
                    for (const item of batchItems){
                        const itemMsg = {
                            roomId: targetRoomId,
                            sender: currentUser._id,
                            type: item.type,
                            content: item.type === 'text' ? item.content : undefined,
                            fileUrl: item.fileUrl,
                            fileName: item.fileName,
                            timestamp: Date.now(),
                            batchId,
                            sharedFrom: {
                                messageId: String(item.id || message._id),
                                originalSender: originalSenderName,
                                originalRoomId: String(message.roomId)
                            }
                        };
                        const resItem = await fetch('/api/messages', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'create',
                                data: itemMsg
                            })
                        });
                        const jsonItem = await resItem.json();
                        if (jsonItem.success && typeof jsonItem._id === 'string') {
                            const sockBase = isGroupChat ? {
                                roomId: targetRoomId,
                                sender: currentUser._id,
                                senderName: senderNick,
                                isGroup: true,
                                receiver: null,
                                members: safeGroups.find((g)=>String(g._id) === String(targetRoomId))?.members || []
                            } : {
                                roomId: targetRoomId,
                                sender: currentUser._id,
                                senderName: senderNick,
                                isGroup: false,
                                receiver: targetRoomId.split('_').find((id)=>id !== String(currentUser._id)),
                                members: []
                            };
                            socketRef.current?.emit('send_message', {
                                ...sockBase,
                                ...itemMsg,
                                _id: jsonItem._id
                            });
                        }
                    }
                } else {
                    const res = await fetch('/api/messages', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'create',
                            data: newMsg
                        })
                    });
                    const json = await res.json();
                    if (json.success && typeof json._id === 'string') {
                        const sockBase = isGroupChat ? {
                            roomId: targetRoomId,
                            sender: currentUser._id,
                            senderName: senderNick,
                            isGroup: true,
                            receiver: null,
                            members: safeGroups.find((g)=>String(g._id) === String(targetRoomId))?.members || []
                        } : {
                            roomId: targetRoomId,
                            sender: currentUser._id,
                            senderName: senderNick,
                            isGroup: false,
                            receiver: targetRoomId.split('_').find((id)=>id !== String(currentUser._id)),
                            members: []
                        };
                        socketRef.current?.emit('send_message', {
                            ...sockBase,
                            ...newMsg,
                            _id: json._id
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Share message error:', error);
            throw error;
        }
    }, [
        currentUser,
        groups,
        getSenderName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = async (e)=>{
            try {
                const d = e.detail || {};
                const mid = String(d.messageId || '');
                if (!mid) return;
                const local = messages.find((mm)=>String(mm._id) === mid);
                if (local) {
                    handleShareMessage(local);
                    return;
                }
                try {
                    const r = await fetch('/api/messages', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'getById',
                            _id: mid
                        })
                    });
                    const j = await r.json();
                    const row = j && (j.row?.row || j.row);
                    if (row && String(row.roomId) === roomId) {
                        handleShareMessage(row);
                    }
                } catch  {}
            } catch  {}
        };
        window.addEventListener('shareMessage', handler);
        return ()=>window.removeEventListener('shareMessage', handler);
    }, [
        messages,
        handleShareMessage,
        roomId
    ]);
    // 🔥 Listen for local nickname updates and emit to socket
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleLocalNicknameUpdate = (e)=>{
            const detail = e.detail;
            if (detail && String(detail.roomId) === String(roomId)) {
                socketRef.current?.emit('room_nickname_updated', detail);
            }
        };
        window.addEventListener('roomNicknamesUpdated', handleLocalNicknameUpdate);
        return ()=>window.removeEventListener('roomNicknamesUpdated', handleLocalNicknameUpdate);
    }, [
        roomId
    ]);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const applyViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const vv = window.visualViewport;
        if (!vv) return;
        const root = document.documentElement;
        root.style.setProperty('--vvh', `${vv.height}px`);
        root.style.setProperty('--vvw', `${vv.width}px`);
        root.style.setProperty('--vvTop', `${vv.offsetTop || 0}px`);
        root.style.setProperty('--vvLeft', `${vv.offsetLeft || 0}px`);
    }, []);
    // Fix keyboard overlapping on mobile using VisualViewport API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleVisualViewport = ()=>{
            if (!viewportRef.current || !window.visualViewport) return;
            const vv = window.visualViewport;
            window.scrollTo(0, 0);
            viewportRef.current.style.height = `${vv.height}px`;
            scrollToBottom();
        };
        const vv = window.visualViewport;
        if (vv) {
            vv.addEventListener('resize', handleVisualViewport);
            vv.addEventListener('scroll', handleVisualViewport);
            handleVisualViewport();
        }
        return ()=>{
            if (vv) {
                vv.removeEventListener('resize', handleVisualViewport);
                vv.removeEventListener('scroll', handleVisualViewport);
            }
        };
    }, [
        scrollToBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const vv = undefined;
        const onResize = undefined;
        const onScrollVV = undefined;
        const onWindowResize = undefined;
        const onFocusIn = undefined;
        const onFocusOut = undefined;
        const onMobileActionsToggle = undefined;
    }, [
        isMobile,
        applyViewport
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatProvider"], {
        value: chatContextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            ref: viewportRef,
            className: `flex ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'h-full'} bg-gray-700 overflow-hidden no-scrollbar`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col h-full relative bg-gray-100 transition-all duration-300 ${showPopup ? 'md:w-[calc(100%-21.875rem)] lg:w-full xl:w-[calc(100%-21.875rem)]' : 'w-full'} border-r border-gray-200`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            chatName: chatName,
                            isGroup: isGroup,
                            memberCount: memberCount,
                            showPopup: showPopup,
                            onTogglePopup: ()=>setShowPopup((prev)=>!prev),
                            onOpenMembers: ()=>{
                                if (isGroup) {
                                    setChatInfoInitialSection('members');
                                    setShowPopup(true);
                                } else {
                                    const partnerId = getId(selectedChat);
                                    if (partnerId) router.push(`/profile/${partnerId}`);
                                }
                            },
                            showSearchSidebar: showSearchSidebar,
                            onToggleSearchSidebar: ()=>setShowSearchSidebar((prev)=>{
                                    const next = !prev;
                                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                    ;
                                    return next;
                                }),
                            avatar: chatAvatar,
                            onBackFromChat: onBackFromChat,
                            presenceText: !isGroup ? presenceInfo.text : undefined,
                            presenceOnline: !isGroup ? presenceInfo.online : undefined,
                            onVoiceCall: handleVoiceCall,
                            onVideoCall: handleVideoCall,
                            isMobile: isMobile,
                            isSearchActive: isMobile && showSearchSidebar,
                            initialKeyword: roomSearchKeyword || null,
                            onSearchTermChange: setMobileSearchTerm,
                            searchInputRef: mobileSearchInputRef,
                            onCloseSearch: ()=>{
                                closingSearchRef.current = true;
                                setShowSearchSidebar(false);
                                setMobileSearchTerm('');
                                setMobileSearchResults([]);
                                setMobileCurrentResultIndex(-1);
                                hasAutoSearchedRef.current = false;
                                if (setRoomSearchKeyword) setRoomSearchKeyword(null);
                                setTimeout(()=>{
                                    closingSearchRef.current = false;
                                }, 300);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                            lineNumber: 3301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$PinnedMessagesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            allPinnedMessages: allPinnedMessages,
                            showPinnedList: showPinnedList,
                            onOpenPinnedList: ()=>setShowPinnedList(true),
                            onClosePinnedList: ()=>setShowPinnedList(false),
                            onJumpToMessage: handleJumpToMessage,
                            getSenderName: getSenderName,
                            onUnpinMessage: handlePinMessage,
                            onLoadMorePinned: loadMorePinnedMessages,
                            pinnedHasMore: (pinnedTotal ?? 0) > allPinnedMessages.length,
                            pinnedLoading: pinnedLoading,
                            isSidebarOpen: showPopup || !isMobile && showSearchSidebar
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                            lineNumber: 3358,
                            columnNumber: 11
                        }, this),
                        isGroup && roomCallActiveLocal && !globalIncoming && !globalCallConnecting && !globalCallActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed z-[2000] left-6 top-6 w-[90vw] max-w-[560px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-0 shadow-2xl ring-1 ring-black/10 bg-white/5 backdrop-blur",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-3 py-2 bg-black/70 text-white rounded-t-xl select-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Cuộc gọi nhóm đang diễn ra"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                lineNumber: 3383,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: roomCallTypeLocal === 'video' ? 'Video' : 'Thoại'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                lineNumber: 3384,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                        lineNumber: 3382,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-b-xl pt-2 p-2 relative bg-black/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg overflow-hidden bg-black/30 text-white px-3 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm mb-2",
                                                    children: "Cuộc gọi nhóm đang diễn ra"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                    lineNumber: 3388,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "cursor-pointer px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition",
                                                    onClick: handleRejoinCall,
                                                    children: "Tham gia lại"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                    lineNumber: 3389,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                            lineNumber: 3387,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                        lineNumber: 3386,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                lineNumber: 3381,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                            lineNumber: 3380,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: messagesContainerRef,
                            className: "relative flex-1 overflow-y-auto overflow-x-hidden p-4 pb-0 bg-gray-100 flex flex-col custom-scrollbar overscroll-y-contain",
                            children: [
                                (initialLoading || loadingMore) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0 z-20 flex items-center justify-center py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                            lineNumber: 3408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: initialLoading ? 'Đang tải tin nhắn...' : 'Đang tải thêm...'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                            lineNumber: 3409,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onShareMessage: handleShareMessage,
                                    messagesGrouped: messagesGrouped,
                                    messages: messages,
                                    currentUser: currentUser,
                                    allUsersMap: allUsersMap,
                                    uploadingFiles: uploadingFiles,
                                    highlightedMsgId: highlightedMsgId,
                                    isGroup: isGroup,
                                    onContextMenu: handleContextMenu,
                                    onMobileLongPress: handleMobileLongPress,
                                    isMobile: isMobile,
                                    onReplyMessage: handleReplyTo,
                                    onJumpToMessage: handleJumpToMessage,
                                    getSenderInfo: getSenderInfo,
                                    renderMessageContent: (content, mentionedUserIds, isMe)=>renderMessageContent(content, mentionedUserIds, isMe, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : roomSearchKeyword),
                                    onOpenMedia: (url, type)=>setPreviewMedia({
                                            url,
                                            type
                                        }),
                                    editingMessageId: editingMessageId,
                                    setEditingMessageId: setEditingMessageId,
                                    editContent: editContent,
                                    setEditContent: setEditContent,
                                    onSaveEdit: handleSaveEdit,
                                    onRefresh: fetchMessages,
                                    onPinMessage: handlePinMessage,
                                    onToggleReaction: handleToggleReaction,
                                    contextMenu: contextMenu,
                                    isSidebarOpen: !isMobile && (showPopup || showSearchSidebar),
                                    onOpenChatInfoSection: (section)=>{
                                        if ("TURBOPACK compile-time truthy", 1) {
                                            setChatInfoInitialSection(section);
                                            setShowPopup(true);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3414,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef,
                                    className: "h-8 sm:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3450,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                            lineNumber: 3402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToBottom(true),
                            "aria-label": "Cuộn xuống cuối",
                            className: `absolute cursor-pointer hover:bg-gray-100 md:bottom-35 bottom-45   right-4 z-5 rounded-full bg-white border border-gray-200 shadow-lg p-3 transition-all ${showScrollDown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronDoubleDown"], {
                                        className: "w-6 h-6 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                        lineNumber: 3461,
                                        columnNumber: 15
                                    }, this),
                                    pendingNewCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-6  w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center",
                                        children: pendingNewCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                        lineNumber: 3463,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                lineNumber: 3460,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                            lineNumber: 3453,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: footerRef,
                            className: "bg-white p-0  border-t rounded-t-xl border-gray-200 relative space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$EmojiStickerPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    showEmojiPicker: showEmojiPicker,
                                    pickerTab: pickerTab,
                                    setPickerTab: setPickerTab,
                                    onEmojiClick: (unicode)=>onEmojiClick({
                                            emoji: unicode
                                        }),
                                    stickers: STICKERS,
                                    onSelectSticker: handleSendSticker
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3473,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ReplyBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    replyingTo: replyingTo,
                                    getSenderName: getSenderName,
                                    onCancel: ()=>setReplyingTo(null)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3482,
                                    columnNumber: 13
                                }, this),
                                isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MentionMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    showMentionMenu: showMentionMenu,
                                    mentionSuggestions: mentionSuggestionsWithAll,
                                    selectedMentionIndex: selectedMentionIndex,
                                    mentionMenuRef: mentionMenuRef,
                                    onSelectMention: selectMention
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3486,
                                    columnNumber: 15
                                }, this),
                                isMobile && mobileSearchResults.length > 0 && mobileSearchTerm.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-4 py-2 bg-gray-100 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-gray-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                        lineNumber: 3499,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                    lineNumber: 3498,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600 font-medium",
                                                    children: [
                                                        "Kết quả thứ ",
                                                        mobileCurrentResultIndex >= 0 ? mobileCurrentResultIndex + 1 : 0,
                                                        "/",
                                                        mobileSearchResults.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                    lineNumber: 3506,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                            lineNumber: 3497,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handlePreviousResult,
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
                                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                            lineNumber: 3518,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                        lineNumber: 3517,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                    lineNumber: 3512,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleNextResult,
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
                                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                            lineNumber: 3527,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                        lineNumber: 3526,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                                    lineNumber: 3521,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                            lineNumber: 3511,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3496,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ChatInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    socket: socketInstance,
                                    showEmojiPicker: showEmojiPicker,
                                    onToggleEmojiPicker: handleToggleEmojiPicker,
                                    isListening: isListening,
                                    onVoiceInput: handleVoiceInput,
                                    editableRef: editableRef,
                                    onInputEditable: handleInputChangeEditable,
                                    onKeyDownEditable: handleKeyDownCombined,
                                    onSendMessageData: sendMessageProcess,
                                    onPasteEditable: (e)=>{
                                        const items = Array.from(e.clipboardData?.items || []);
                                        const fileItems = items.filter((it)=>it.kind === 'file' && (it.type.startsWith('image/') || it.type.startsWith('video/')));
                                        if (fileItems.length > 0) {
                                            e.preventDefault();
                                            fileItems.forEach((it)=>{
                                                const f = it.getAsFile();
                                                if (f) {
                                                    const isVid = f.type.startsWith('video/') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(f.name);
                                                    const isImg = f.type.startsWith('image/');
                                                    const t = isVid ? 'video' : isImg ? 'image' : 'file';
                                                    const url = URL.createObjectURL(f);
                                                    setAttachments((prev)=>[
                                                            ...prev,
                                                            {
                                                                file: f,
                                                                type: t,
                                                                previewUrl: url,
                                                                fileName: f.name
                                                            }
                                                        ]);
                                                }
                                            });
                                            dismissKeyboardAndScroll();
                                            return;
                                        }
                                        e.preventDefault();
                                        const text = e.clipboardData.getData('text/plain');
                                        document.execCommand('insertText', false, text);
                                        handleInputChangeEditable();
                                    },
                                    onSendMessage: handleSendMessage,
                                    onSelectImage: (file)=>{
                                        const isVideo = file.type.startsWith('video/') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(file.name);
                                        const msgType = isVideo ? 'video' : 'image';
                                        const url = URL.createObjectURL(file);
                                        setAttachments((prev)=>[
                                                ...prev,
                                                {
                                                    file,
                                                    type: msgType,
                                                    previewUrl: url,
                                                    fileName: file.name
                                                }
                                            ]);
                                        dismissKeyboardAndScroll();
                                    },
                                    onSelectFile: (file)=>{
                                        const isVideo = file.type.startsWith('video/') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVideoFile"])(file.name);
                                        const msgType = isVideo ? 'video' : 'file';
                                        const url = URL.createObjectURL(file);
                                        setAttachments((prev)=>[
                                                ...prev,
                                                {
                                                    file,
                                                    type: msgType,
                                                    previewUrl: url,
                                                    fileName: file.name
                                                }
                                            ]);
                                        dismissKeyboardAndScroll();
                                    },
                                    onAttachFromFolder: async (att)=>{
                                        const remoteUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProxyUrl"])(att.url);
                                        const name = att.fileName || (att.type === 'image' ? 'image.jpg' : att.type === 'video' ? 'video.mp4' : 'file');
                                        const placeholder = new File([
                                            new Blob([])
                                        ], name, {
                                            type: 'application/octet-stream'
                                        });
                                        const placeholderItem = {
                                            file: placeholder,
                                            type: att.type,
                                            previewUrl: remoteUrl,
                                            fileName: name
                                        };
                                        setAttachments((prev)=>[
                                                ...prev,
                                                placeholderItem
                                            ]);
                                        dismissKeyboardAndScroll();
                                        try {
                                            const res = await fetch(remoteUrl);
                                            const blob = await res.blob();
                                            const mime = blob.type || (att.type === 'image' ? 'image/jpeg' : att.type === 'video' ? 'video/mp4' : 'application/octet-stream');
                                            const realFile = new File([
                                                blob
                                            ], name, {
                                                type: mime
                                            });
                                            const previewUrl = URL.createObjectURL(blob);
                                            setAttachments((prev)=>prev.map((item)=>item.previewUrl === remoteUrl ? {
                                                        file: realFile,
                                                        type: att.type,
                                                        previewUrl,
                                                        fileName: name
                                                    } : item));
                                        } catch  {}
                                    },
                                    onFocusEditable: ()=>{
                                        setShowEmojiPicker(false);
                                        scrollToBottom();
                                        setTimeout(scrollToBottom, 0);
                                        setTimeout(scrollToBottom, 200);
                                        try {
                                            editableRef.current?.scrollIntoView({
                                                block: 'end'
                                            });
                                        } catch  {}
                                    },
                                    attachments: attachments.map((a)=>({
                                            previewUrl: a.previewUrl,
                                            type: a.type,
                                            fileName: a.fileName
                                        })),
                                    onRemoveAttachment: (index)=>{
                                        setAttachments((prev)=>{
                                            const next = [
                                                ...prev
                                            ];
                                            const [removed] = next.splice(index, 1);
                                            if (removed) {
                                                try {
                                                    URL.revokeObjectURL(removed.previewUrl);
                                                } catch  {}
                                            }
                                            return next;
                                        });
                                    },
                                    onClearAttachments: ()=>{
                                        setAttachments((prev)=>{
                                            prev.forEach((a)=>{
                                                try {
                                                    URL.revokeObjectURL(a.previewUrl);
                                                } catch  {}
                                            });
                                            return [];
                                        });
                                    },
                                    isUploading: hasUploading,
                                    uploadingCount: uploadingCount,
                                    overallUploadPercent: overallUploadPercent
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                                    lineNumber: 3533,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                            lineNumber: 3471,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3296,
                    columnNumber: 9
                }, this),
                showPopup && isLgOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": "true",
                    className: "hidden lg:block lg:fixed lg:inset-0 lg:bg-transparent z-10",
                    onClick: ()=>{
                        setShowPopup(false);
                        setChatInfoInitialSection(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3652,
                    columnNumber: 11
                }, this),
                showPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "right-sidebar-container",
                    className: "fixed inset-0 md:relative md:inset-auto md:w-[21.875rem] lg:fixed lg:inset-y-0 lg:right-0 lg:w-[21.875rem] lg:z-20 xl:relative xl:inset-auto xl:w-[21.875rem] h-full z-10 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$zalo$292f$home$2f$ChatInfoPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>{
                            setShowPopup(false);
                            setChatInfoInitialSection(null);
                        },
                        onShowCreateGroup: onShowCreateGroup,
                        onMembersAdded: handleMembersAdded,
                        members: activeMembers,
                        onMemberRemoved: handleMemberRemoved,
                        onRoleChange: handleRoleChange,
                        onJumpToMessage: handleJumpToMessage,
                        onChatAction: onChatAction,
                        reLoad: reLoad,
                        onLeftGroup: onBackFromChat,
                        onRefresh: fetchMessages,
                        sendNotifyMessage: (text)=>sendNotifyMessage(text),
                        lastUpdated: nicknamesStamp,
                        initialSection: chatInfoInitialSection,
                        groups: groups
                    }, void 0, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                        lineNumber: 3666,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3662,
                    columnNumber: 11
                }, this),
                showSearchSidebar && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 sm:static sm:inset-auto sm:w-[21.875rem] h-full z-10 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$SearchMessageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: showSearchSidebar,
                        onClose: ()=>{
                            setShowSearchSidebar(false);
                            if (setRoomSearchKeyword) setRoomSearchKeyword(null);
                        },
                        roomId: roomId,
                        onJumpToMessage: handleJumpToMessage,
                        getSenderName: getSenderName,
                        initialKeyword: roomSearchKeyword || null,
                        onKeywordClear: ()=>{
                            if (setRoomSearchKeyword) setRoomSearchKeyword(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                        lineNumber: 3691,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3690,
                    columnNumber: 11
                }, this),
                showPinTitleModal && messageToPin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$PinMessageTitleModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClose: ()=>{
                        setShowPinTitleModal(false);
                        setMessageToPin(null);
                    },
                    onConfirm: (title)=>{
                        executePinMessage(messageToPin, true, title);
                        setShowPinTitleModal(false);
                        setMessageToPin(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3709,
                    columnNumber: 11
                }, this),
                showShareModal && messageToShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$ShareMessageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: showShareModal,
                    onClose: ()=>{
                        setShowShareModal(false);
                        setMessageToShare(null);
                    },
                    message: messageToShare,
                    currentUser: currentUser,
                    allUsers: allUsers,
                    groups: groups,
                    onShare: handleShareToRooms
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3723,
                    columnNumber: 11
                }, this),
                openMember && isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$ModalMembers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    conversationId: selectedChat._id,
                    currentUser: currentUser,
                    reLoad: reLoad,
                    isOpen: openMember,
                    onClose: ()=>setOpenMember(false),
                    members: activeMembers,
                    groupName: chatName,
                    allUsers: allUsers,
                    onMembersAdded: handleMembersAdded,
                    onMemberRemoved: handleMemberRemoved,
                    onRoleChange: handleRoleChange,
                    sendNotifyMessage: (text)=>sendNotifyMessage(text),
                    lastUpdated: nicknamesStamp
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3738,
                    columnNumber: 11
                }, this),
                contextMenu && contextMenu.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MessageContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        contextMenu: contextMenu,
                        currentUserId: String(currentUser._id),
                        onClose: closeContextMenu,
                        onPinMessage: handlePinMessage,
                        onRecallMessage: handleRecallMessage,
                        setEditingMessageId: setEditingMessageId,
                        setEditContent: setEditContent,
                        closeContextMenu: closeContextMenu,
                        onReplyMessage: handleReplyTo,
                        onShareMessage: handleShareMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                        lineNumber: 3758,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                }, void 0, false),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$MediaPreviewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    media: previewMedia,
                    chatName: chatName,
                    isGroup: isGroup,
                    roomId: roomId,
                    onClose: ()=>setPreviewMedia(null),
                    onShareMessage: handleShareMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
                    lineNumber: 3788,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
            lineNumber: 3292,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(zalo)/home/ChatPopup.tsx",
        lineNumber: 3291,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(zalo)/home/GlobalSearchModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalSearchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$SearchHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/SearchHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$SearchTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/SearchTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$ContactResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/ContactResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$MessageResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/MessageResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$FileResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/FileResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$SearchEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(search)/SearchEmptyState.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function GlobalSearchModal({ results, searchTerm, onClose, onSearch, allUsers, onNavigateToMessage, onSelectContact }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [localSearchTerm, setLocalSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchTerm);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Keep the useMemo for processing messages
    const { regularMessages, fileMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!results?.messages || !Array.isArray(results.messages)) {
            return {
                regularMessages: [],
                fileMessages: []
            };
        }
        const regular = [];
        const files = [];
        results.messages.forEach((msg)=>{
            if (msg.type === 'file' || msg.type === 'image' || msg.type === 'video') {
                files.push(msg);
            } else {
                regular.push(msg);
            }
        });
        return {
            regularMessages: regular,
            fileMessages: files
        };
    }, [
        results?.messages
    ]);
    const groupedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!regularMessages || regularMessages.length === 0) return [];
        const groups = new Map();
        regularMessages.forEach((msg)=>{
            if (!msg || !msg.roomId) return;
            const key = msg.roomId;
            if (!groups.has(key)) {
                groups.set(key, {
                    roomId: msg.roomId,
                    roomName: msg.roomName || 'Cuộc trò chuyện',
                    roomAvatar: msg.isGroupChat ? undefined : allUsers?.find((u)=>u._id === msg.partnerId)?.avatar,
                    isGroupChat: msg.isGroupChat || false,
                    partnerId: msg.partnerId,
                    messages: [],
                    latestTimestamp: msg.timestamp || Date.now()
                });
            }
            const group = groups.get(key);
            group.messages.push(msg);
            if (msg.timestamp && msg.timestamp > group.latestTimestamp) {
                group.latestTimestamp = msg.timestamp;
            }
        });
        return Array.from(groups.values()).sort((a, b)=>b.latestTimestamp - a.latestTimestamp);
    }, [
        regularMessages,
        allUsers
    ]);
    const groupedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!fileMessages || fileMessages.length === 0) return [];
        const groups = new Map();
        fileMessages.forEach((msg)=>{
            if (!msg || !msg.roomId) return;
            const key = msg.roomId;
            if (!groups.has(key)) {
                groups.set(key, {
                    roomId: msg.roomId,
                    roomName: msg.roomName || 'Cuộc trò chuyện',
                    roomAvatar: msg.isGroupChat ? undefined : allUsers?.find((u)=>u._id === msg.partnerId)?.avatar,
                    isGroupChat: msg.isGroupChat || false,
                    files: [],
                    latestTimestamp: msg.timestamp || Date.now()
                });
            }
            const group = groups.get(key);
            group.files.push(msg);
            if (msg.timestamp && msg.timestamp > group.latestTimestamp) {
                group.latestTimestamp = msg.timestamp;
            }
        });
        return Array.from(groups.values()).sort((a, b)=>b.latestTimestamp - a.latestTimestamp);
    }, [
        fileMessages,
        allUsers
    ]);
    const tabs = [
        {
            key: 'all',
            label: 'Tất cả',
            count: (results?.contacts?.length || 0) + groupedMessages.length + groupedFiles.length
        },
        {
            key: 'contacts',
            label: 'Liên hệ',
            count: results?.contacts?.length || 0
        },
        {
            key: 'messages',
            label: 'Tin nhắn',
            count: groupedMessages.length
        },
        {
            key: 'files',
            label: 'File',
            count: groupedFiles.length
        }
    ];
    const hasResults = (results?.contacts?.length || 0) > 0 || (results?.messages?.length || 0) > 0;
    // Update localSearchTerm when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalSearchTerm(searchTerm);
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6 sm:p-4",
        onClick: (e)=>e.target === e.currentTarget && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl w-full max-w-2xl h-full sm:h-[40rem] max-h-[calc(100vh-3rem)] sm:max-h-[40rem] flex flex-col overflow-hidden border border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$SearchHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    searchTerm: localSearchTerm,
                    onSearch: onSearch,
                    onClose: onClose,
                    isSearching: isSearching,
                    onSearchingChange: setIsSearching
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$SearchTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    activeTab: activeTab,
                    tabs: tabs,
                    onTabChange: setActiveTab,
                    searchTerm: localSearchTerm
                }, void 0, false, {
                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$SearchEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isSearching: isSearching,
                            searchTerm: localSearchTerm,
                            hasResults: hasResults
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        hasResults && !isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                (activeTab === 'all' || activeTab === 'contacts') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$ContactResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    contacts: results.contacts || [],
                                    searchTerm: localSearchTerm,
                                    onSelectContact: onSelectContact
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                (activeTab === 'all' || activeTab === 'messages') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$MessageResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    groupedMessages: groupedMessages,
                                    searchTerm: localSearchTerm,
                                    allUsers: allUsers,
                                    onNavigateToMessage: (msg)=>onNavigateToMessage(msg, localSearchTerm)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this),
                                (activeTab === 'all' || activeTab === 'files') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$search$292f$FileResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    groupedFiles: groupedFiles,
                                    searchTerm: localSearchTerm,
                                    onNavigateToMessage: (msg)=>onNavigateToMessage(msg, localSearchTerm)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none px-4 py-3 bg-[#f7f9fc] border-t text-[0.6875rem] text-gray-500 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Nhấn",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-1.5 py-0.5 bg-white border border-gray-300 rounded shadow-sm font-mono text-[0.625rem]",
                                    children: "ESC"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                "để đóng cửa sổ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "Tìm kiếm nhanh trong Zalo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(zalo)/home/GlobalSearchModal.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(zalo)/home/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$home$292f$HomeDesktop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(home)/HomeDesktop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$home$292f$HomeMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(home)/HomeMobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$home$292f$HomeOverlays$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(home)/HomeOverlays.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHomePage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useHomePage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$onesignal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/onesignal.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function HomePage() {
    const { currentUser, isLoading, allUsers, groups, selectedChat, searchTerm, setSearchTerm, showCreateGroupModal, setShowCreateGroupModal, showGlobalSearchModal, globalSearchTerm, globalSearchResults, scrollToMessageId, setScrollToMessageId, roomSearchKeyword, setRoomSearchKeyword, handleOpenGlobalSearch, handleGlobalSearch, handleSelectContact, handleNavigateToMessage, fetchAllData, handleChatAction, handleSelectChat, setSelectedChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHomePage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHomePage"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const run = async ()=>{
            if (!currentUser || !currentUser._id) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$onesignal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForOneSignalReady"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$onesignal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeNotification"])();
            const subId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$onesignal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSubscribed"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$onesignal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginOneSignal"])(String(currentUser._id));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$onesignal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUserTags"])({
                userId: String(currentUser._id)
            });
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (subId) {
                try {
                    await fetch('/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            action: 'addOneSignalSub',
                            currentUserId: String(currentUser._id),
                            data: {
                                subId: String(subId)
                            }
                        })
                    });
                } catch  {}
            }
        };
        void run();
    }, [
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // no-op
    }, [
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedChat) {
            try {
                const raw = localStorage.getItem('__return_room_results__');
                if (raw) {
                    const data = JSON.parse(raw);
                    if (data && data.origin === 'global') {
                        if (!showGlobalSearchModal) {
                            handleOpenGlobalSearch();
                        }
                    }
                }
            } catch  {}
        }
    }, [
        selectedChat,
        showGlobalSearchModal,
        handleOpenGlobalSearch
    ]);
    if (isLoading || !currentUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center bg-white",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/(zalo)/home/page.tsx",
            lineNumber: 99,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-full font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$home$292f$HomeDesktop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onNavigateToMessage: handleNavigateToMessage,
                currentUser: currentUser,
                groups: groups,
                allUsers: allUsers,
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm,
                setShowCreateGroupModal: setShowCreateGroupModal,
                selectedChat: selectedChat,
                onSelectChat: handleSelectChat,
                onBackFromChat: ()=>setSelectedChat(null),
                onChatAction: handleChatAction,
                scrollToMessageId: scrollToMessageId,
                onScrollComplete: ()=>setScrollToMessageId(null),
                roomSearchKeyword: roomSearchKeyword,
                setRoomSearchKeyword: setRoomSearchKeyword,
                fetchAllData: fetchAllData,
                onShowGlobalSearch: handleOpenGlobalSearch
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$home$292f$HomeMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentUser: currentUser,
                groups: groups,
                allUsers: allUsers,
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm,
                setShowCreateGroupModal: setShowCreateGroupModal,
                selectedChat: selectedChat,
                onSelectChat: handleSelectChat,
                onBackFromChat: ()=>setSelectedChat(null),
                onChatAction: handleChatAction,
                scrollToMessageId: scrollToMessageId,
                onScrollComplete: ()=>{
                    setScrollToMessageId(null);
                    setRoomSearchKeyword(null);
                },
                roomSearchKeyword: roomSearchKeyword,
                setRoomSearchKeyword: setRoomSearchKeyword,
                fetchAllData: fetchAllData,
                onShowGlobalSearch: handleOpenGlobalSearch,
                onNavigateToMessage: handleNavigateToMessage
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$home$292f$HomeOverlays$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentUser: currentUser,
                allUsers: allUsers,
                showGlobalSearchModal: showGlobalSearchModal,
                globalSearchTerm: globalSearchTerm,
                globalSearchResults: globalSearchResults,
                onCloseGlobalSearch: handleOpenGlobalSearch,
                onSearch: handleGlobalSearch,
                onNavigateToMessage: handleNavigateToMessage,
                onSelectContact: handleSelectContact,
                showCreateGroupModal: showCreateGroupModal,
                onCloseCreateGroup: ()=>setShowCreateGroupModal(false),
                // Sau khi tạo nhóm:
                // - Đóng modal
                // - Nếu có group mới trả về -> auto chọn group đó để mở giao diện chat
                onGroupCreated: (group)=>{
                    if (group) {
                        setSelectedChat(group);
                    }
                    setShowCreateGroupModal(false);
                },
                reLoad: fetchAllData
            }, void 0, false, {
                fileName: "[project]/src/app/(zalo)/home/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(zalo)/home/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_%28zalo%29_home_8de49e25._.js.map