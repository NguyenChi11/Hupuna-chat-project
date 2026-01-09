(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/(chatPopup)/ChatInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "default",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// React Icons hi2 – Đỉnh cao nhất 2025
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICIcon1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICIcon1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICIconImageZalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICIconImageZalo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$MicIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/MicIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CreatePollModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/CreateReminderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ConfirmModal.tsx [app-client] (ecmascript)");
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
;
;
function ChatInput({ socket, onToggleEmojiPicker, isListening, onVoiceInput, editableRef, onInputEditable, onKeyDownEditable, onPasteEditable, onFocusEditable, onSendMessage, onSelectImage, onSelectFile, onAttachFromFolder, attachments, onRemoveAttachment, onClearAttachments, isUploading = false, uploadingCount = 0, overallUploadPercent = 0 }) {
    _s();
    const { currentUser, selectedChat, isGroup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const myRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInput.useMemo[myRole]": ()=>{
            if (!isGroup) return 'MEMBER';
            const group = selectedChat;
            if (!group.members || !Array.isArray(group.members)) return 'MEMBER';
            const myId = String(currentUser._id || currentUser?.id || '');
            const member = group.members.find({
                "ChatInput.useMemo[myRole].member": (m)=>{
                    const mId = typeof m === 'string' ? m : m._id || m.id;
                    return String(mId) === myId;
                }
            }["ChatInput.useMemo[myRole].member"]);
            if (member && typeof member !== 'string') {
                return member.role || 'MEMBER';
            }
            return 'MEMBER';
        }
    }["ChatInput.useMemo[myRole]"], [
        isGroup,
        selectedChat,
        currentUser
    ]);
    const canClearHistory = !isGroup || isGroup && myRole === 'OWNER';
    const getId = (u)=>{
        const obj = u;
        if (obj && (obj._id != null || obj.id != null)) return String(obj._id ?? obj.id);
        return String(u ?? '');
    };
    const roomId = isGroup ? getId(selectedChat) : [
        getId(currentUser),
        getId(selectedChat)
    ].sort().join('_');
    const [showCreatePoll, setShowCreatePoll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateNote, setShowCreateNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createLoading, setCreateLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tagsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tagsDragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        active: false,
        startX: 0,
        startScroll: 0
    });
    const onTagsPointerDown = (e)=>{
        const el = tagsContainerRef.current;
        if (!el) return;
        tagsDragRef.current.active = true;
        tagsDragRef.current.startX = e.clientX;
        tagsDragRef.current.startScroll = el.scrollLeft;
        tagsDragRef.current.pid = e.pointerId;
        el.setPointerCapture(e.pointerId);
    };
    const onTagsPointerMove = (e)=>{
        if (!tagsDragRef.current.active) return;
        const el = tagsContainerRef.current;
        if (!el) return;
        const dx = e.clientX - tagsDragRef.current.startX;
        el.scrollLeft = tagsDragRef.current.startScroll - dx;
        e.preventDefault();
    };
    const onTagsPointerUp = (e)=>{
        const el = tagsContainerRef.current;
        tagsDragRef.current.active = false;
        if (el && typeof tagsDragRef.current.pid === 'number') {
            try {
                el.releasePointerCapture(tagsDragRef.current.pid);
            } catch  {}
        }
    };
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
                    socket?.emit('send_message', {
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
                        socket?.emit('send_message', {
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
                    socket?.emit('send_message', {
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
                    // Notify
                    const notify = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])({
                        roomId,
                        sender: String(currentUser._id),
                        type: 'notify',
                        content: `${currentUser.name} tạo lịch hẹn mới: "${content.trim()}"`,
                        timestamp: Date.now(),
                        replyToMessageId: createRes._id
                    });
                    if (notify?.success) {
                        socket?.emit('send_message', {
                            ...sockBase,
                            _id: notify._id,
                            type: 'notify',
                            content: `${currentUser.name} tạo lịch hẹn mới: "${content.trim()}"`,
                            timestamp: Date.now(),
                            replyToMessageId: createRes._id
                        });
                    }
                }
                setShowCreateNote(false);
            }
        } catch (error) {
            console.error('Failed to create reminder:', error);
        } finally{
            setCreateLoading(false);
        }
    };
    const [showFlashPicker, setShowFlashPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flashFolders, setFlashFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFlashFolder, setSelectedFlashFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [kvItems, setKvItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [slashOpen, setSlashOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slashQuery, setSlashQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [slashSelectedIndex, setSlashSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showFolderDashboard, setShowFolderDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingSaveMessage, setPendingSaveMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMobileActions, setShowMobileActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileActionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleMobileActionsBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const allowFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [hasContent, setHasContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUpdatingPopup, setShowUpdatingPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmClear, setShowConfirmClear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReportConfirm, setShowReportConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- TAGS LOGIC ---
    const TAG_COLORS = {
        'bg-red-500': '#ef4444',
        'bg-pink-500': '#ec4899',
        'bg-orange-400': '#fb923c',
        'bg-yellow-400': '#facc15',
        'bg-green-500': '#22c55e',
        'bg-teal-500': '#14b8a6',
        'bg-blue-500': '#3b82f6',
        'bg-purple-500': '#a855f7'
    };
    const [userTags, setUserTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTagIds, setSelectedTagIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const tagStorageKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInput.useMemo[tagStorageKey]": ()=>{
            if (!selectedChat?._id || !currentUser?._id) return '';
            return `chatTags:${currentUser._id}:${selectedChat._id}`;
        }
    }["ChatInput.useMemo[tagStorageKey]"], [
        selectedChat?._id,
        currentUser?._id
    ]);
    // Load User Tags
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const loadUserTags = {
                "ChatInput.useEffect.loadUserTags": async ()=>{
                    if (!currentUser?._id) return;
                    // 1. From currentUser prop if available (via context)
                    if (currentUser.userTags && Array.isArray(currentUser.userTags)) {
                        setUserTags(currentUser.userTags);
                    }
                    // 2. Or fetch fresh
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
                        const row = data && data.row || (Array.isArray(data?.data) ? data.data[0] : null);
                        if (row && Array.isArray(row.userTags)) {
                            setUserTags(row.userTags);
                        }
                    } catch  {}
                }
            }["ChatInput.useEffect.loadUserTags"];
            loadUserTags();
            const handleUserTagsUpdated = {
                "ChatInput.useEffect.handleUserTagsUpdated": (e)=>{
                    const ev = e;
                    if (ev.detail && String(ev.detail.userId) === String(currentUser?._id)) {
                        setUserTags(ev.detail.tags || []);
                    }
                }
            }["ChatInput.useEffect.handleUserTagsUpdated"];
            window.addEventListener('userTagsUpdated', handleUserTagsUpdated);
            return ({
                "ChatInput.useEffect": ()=>window.removeEventListener('userTagsUpdated', handleUserTagsUpdated)
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        currentUser?._id
    ]);
    // Load Selected Tags for Chat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (!tagStorageKey) return;
            // 1. Try from selectedChat prop
            const fromServer = selectedChat.tags || selectedChat.tagsBy?.[String(currentUser._id)] || [];
            if (Array.isArray(fromServer) && fromServer.length > 0) {
                setSelectedTagIds(fromServer.filter({
                    "ChatInput.useEffect": (x)=>typeof x === 'string'
                }["ChatInput.useEffect"]));
            } else {
                // 2. Local storage
                try {
                    const raw = localStorage.getItem(tagStorageKey);
                    if (raw) {
                        const arr = JSON.parse(raw);
                        if (Array.isArray(arr)) setSelectedTagIds(arr);
                    } else {
                        setSelectedTagIds([]);
                    }
                } catch  {
                    setSelectedTagIds([]);
                }
            }
        }
    }["ChatInput.useEffect"], [
        tagStorageKey,
        selectedChat
    ]);
    // Listen for chat tag updates (from ChatItem or Sidebar)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const handler = {
                "ChatInput.useEffect.handler": (ev)=>{
                    try {
                        const anyEv = ev;
                        const detail = anyEv.detail || {};
                        if (String(detail.userId) !== String(currentUser._id)) return;
                        if (String(detail.roomId) !== String(selectedChat?._id)) return;
                        const arr = Array.isArray(detail.tags) ? detail.tags.filter({
                            "ChatInput.useEffect.handler": (x)=>typeof x === 'string'
                        }["ChatInput.useEffect.handler"]) : [];
                        setSelectedTagIds(arr);
                    } catch  {}
                }
            }["ChatInput.useEffect.handler"];
            window.addEventListener('chatTagsUpdated', handler);
            return ({
                "ChatInput.useEffect": ()=>window.removeEventListener('chatTagsUpdated', handler)
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        currentUser._id,
        selectedChat?._id
    ]);
    const handleToggleTag = async (tagId)=>{
        if (!tagStorageKey) return;
        const newTags = selectedTagIds.includes(tagId) ? selectedTagIds.filter((id)=>id !== tagId) : [
            ...selectedTagIds,
            tagId
        ];
        setSelectedTagIds(newTags);
        // Update local storage
        try {
            localStorage.setItem(tagStorageKey, JSON.stringify(newTags));
        } catch  {}
        // Dispatch event to update other components
        window.dispatchEvent(new CustomEvent('chatTagsUpdated', {
            detail: {
                userId: currentUser._id,
                roomId: selectedChat?._id,
                tags: newTags
            }
        }));
        // API Update
        try {
            const isGroupChat = isGroup;
            const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
            const payload = isGroupChat ? {
                action: 'updateTags',
                _id: String(currentUser._id),
                conversationId: String(selectedChat?._id),
                data: {
                    tags: newTags
                }
            } : {
                action: 'updateTags',
                currentUserId: String(currentUser._id),
                roomId: String(selectedChat?._id),
                data: {
                    tags: newTags
                }
            };
            await fetch(apiRoute, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        } catch (e) {
            console.error('Failed to update tags', e);
        }
    };
    const handleShowUpdatingPopup = ()=>{
        setShowUpdatingPopup(true);
        window.setTimeout(()=>setShowUpdatingPopup(false), 1500);
    };
    const checkContent = ()=>{
        if (editableRef.current) {
            const text = editableRef.current.innerText || '';
            setHasContent(text.trim().length > 0);
        } else {
            setHasContent(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            checkContent();
        }
    }["ChatInput.useEffect"], []);
    const handleSendWrapper = ()=>{
        // if (isUploading) return; // 🔥 Cho phép chat khi đang upload
        onSendMessage();
        // Optimistically update state as parent usually clears input
        setHasContent(false);
        setTimeout(checkContent, 100); // Double check
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (!showMobileActions) return;
            const onDoc = {
                "ChatInput.useEffect.onDoc": (e)=>{
                    const target = e.target;
                    if (mobileActionsRef.current && target && mobileActionsRef.current.contains(target)) return;
                    if (toggleMobileActionsBtnRef.current && target && toggleMobileActionsBtnRef.current.contains(target)) return;
                    setShowMobileActions(false);
                    try {
                        window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                            detail: {
                                open: false
                            }
                        }));
                    } catch  {}
                }
            }["ChatInput.useEffect.onDoc"];
            document.addEventListener('mousedown', onDoc, true);
            document.addEventListener('touchstart', onDoc, true);
            return ({
                "ChatInput.useEffect": ()=>{
                    document.removeEventListener('mousedown', onDoc, true);
                    document.removeEventListener('touchstart', onDoc, true);
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        showMobileActions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (!showMobileActions && pendingFocusRef.current) {
                pendingFocusRef.current = false;
                const el = editableRef.current;
                if (el) {
                    try {
                        requestAnimationFrame({
                            "ChatInput.useEffect": ()=>{
                                try {
                                    el.focus();
                                    const range = document.createRange();
                                    range.selectNodeContents(el);
                                    range.collapse(false);
                                    const sel = window.getSelection();
                                    sel?.removeAllRanges();
                                    sel?.addRange(range);
                                } catch  {}
                                setTimeout({
                                    "ChatInput.useEffect": ()=>{
                                        try {
                                            el.focus();
                                        } catch  {}
                                    }
                                }["ChatInput.useEffect"], 120);
                            }
                        }["ChatInput.useEffect"]);
                    } catch  {}
                }
            }
        }
    }["ChatInput.useEffect"], [
        showMobileActions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const onVisibilityChange = {
                "ChatInput.useEffect.onVisibilityChange": ()=>{
                    if (document.hidden) {
                        allowFocusRef.current = false;
                        try {
                            editableRef.current?.blur?.();
                        } catch  {}
                    }
                }
            }["ChatInput.useEffect.onVisibilityChange"];
            document.addEventListener('visibilitychange', onVisibilityChange);
            return ({
                "ChatInput.useEffect": ()=>document.removeEventListener('visibilitychange', onVisibilityChange)
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], []);
    const handleSelectFlashFolder = (f)=>{
        setSelectedFlashFolder(f);
        try {
            localStorage.setItem(`chatFlashActiveFolder:${roomId}`, JSON.stringify(f));
        } catch  {}
        setShowFlashPicker(false);
    };
    const handleToggleMobileActions = ()=>{
        if (showMobileActions) {
            setShowMobileActions(false);
            try {
                window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                    detail: {
                        open: false
                    }
                }));
            } catch  {}
            return;
        }
        const el = editableRef.current;
        const isFocused = document.activeElement === el;
        const vv = window.visualViewport;
        const hasKeyboard = isFocused || vv && vv.height < window.innerHeight * 0.75;
        if (hasKeyboard) {
            try {
                if (isFocused) el?.blur();
            } catch  {}
            if (vv && typeof vv.addEventListener === 'function') {
                const startH = vv.height;
                let opened = false;
                const open = ()=>{
                    if (opened) return;
                    opened = true;
                    setShowMobileActions(true);
                    try {
                        window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                            detail: {
                                open: true
                            }
                        }));
                    } catch  {}
                };
                const onResize = ()=>{
                    if (vv.height - startH > 40) {
                        try {
                            vv.removeEventListener('resize', onResize);
                        } catch  {}
                        window.clearTimeout(timer);
                        open();
                    }
                };
                vv.addEventListener('resize', onResize);
                const timer = window.setTimeout(()=>{
                    try {
                        vv.removeEventListener('resize', onResize);
                    } catch  {}
                    open();
                }, 500);
                return;
            }
            setTimeout(()=>{
                setShowMobileActions(true);
                try {
                    window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                        detail: {
                            open: true
                        }
                    }));
                } catch  {}
            }, 150);
            return;
        }
        setShowMobileActions(true);
        try {
            window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                detail: {
                    open: true
                }
            }));
        } catch  {}
    };
    const updateSlashState = ()=>{
        const text = editableRef.current ? String(editableRef.current.innerText || '') : '';
        const m = text.match(/\/\s*([\w-]*)$/);
        const q = m ? m[1] : '';
        setSlashQuery(q);
        const shouldOpen = /\//.test(text);
        setSlashOpen(shouldOpen);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const handleOutsideClick = {
                "ChatInput.useEffect.handleOutsideClick": (e)=>{
                    if (document.activeElement !== editableRef.current) return;
                    const target = e.target;
                    if (containerRef.current && containerRef.current.contains(target)) return;
                    try {
                        editableRef.current?.blur();
                    } catch  {}
                }
            }["ChatInput.useEffect.handleOutsideClick"];
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('touchstart', handleOutsideClick);
            return ({
                "ChatInput.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleOutsideClick);
                    document.removeEventListener('touchstart', handleOutsideClick);
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "jsx-820bcd66933fca31" + " " + "relative w-full p-2 bg-gradient-to-t from-white via-white to-gray-50/50 md:bg-white md:border md:border-gray-200 md:rounded-xl md:px-1 md:py-2 md:pt-0",
        children: [
            attachments && attachments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-820bcd66933fca31" + " " + "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "flex items-center justify-between mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-xs text-gray-600",
                                children: [
                                    attachments.length,
                                    " ",
                                    attachments.length === 1 ? 'đính kèm' : 'đính kèm'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClearAttachments,
                                className: "jsx-820bcd66933fca31" + " " + "text-xs text-red-600 hover:underline cursor-pointer",
                                children: "Xóa tất cả"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 734,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 730,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "flex gap-2 overflow-x-auto no-scrollbar py-1",
                        children: attachments.map((att, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 bg-white",
                                children: [
                                    att.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: att.previewUrl,
                                        alt: "",
                                        fill: true,
                                        sizes: "80px",
                                        className: "object-cover",
                                        unoptimized: true,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 742,
                                        columnNumber: 19
                                    }, this) : att.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: att.previewUrl,
                                        muted: true,
                                        playsInline: true,
                                        className: "jsx-820bcd66933fca31" + " " + "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 744,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + " rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group cursor-pointer border border-gray-200 hover:border-blue-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-820bcd66933fca31" + " " + "p-3 rounded-xl bg-gradient-to-br from-blue-500 text-white shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiDocumentText"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 747,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-820bcd66933fca31" + " " + "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-820bcd66933fca31" + " " + "text-sm font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors",
                                                        children: att.fileName || 'Tệp'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-820bcd66933fca31" + " " + "text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider",
                                                        children: [
                                                            ".",
                                                            att.fileName?.split('.').pop()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                        lineNumber: 754,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 750,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 746,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRemoveAttachment(idx),
                                        "aria-label": "Xóa",
                                        className: "jsx-820bcd66933fca31" + " " + "absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 765,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 760,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowReportConfirm(true),
                                        "aria-label": "Báo xấu",
                                        className: "jsx-820bcd66933fca31" + " " + "group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiShieldCheck"], {
                                            className: "w-7 h-7 text-gray-500 group-hover:text-red-600 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 772,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 767,
                                        columnNumber: 17
                                    }, this),
                                    canClearHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowConfirmClear(true),
                                        "aria-label": "Xóa lịch sử",
                                        className: "jsx-820bcd66933fca31" + " " + `p-2 rounded-full cursor-pointer text-gray-700  ${isUploading ? 'opacity-50 pointer-events-none grayscale' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiTrash"], {
                                            className: "w-7 h-7 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 782,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 775,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 740,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 738,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 729,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-820bcd66933fca31" + " " + "hidden md:flex items-center mt-1 gap-2 mb-0  rounded-xl bg-white ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            try {
                                editableRef.current?.blur?.();
                            } catch  {}
                            setTimeout(()=>onToggleEmojiPicker(), 100);
                        },
                        "aria-label": "Chọn emoji",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiFaceSmile"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 801,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        "aria-label": "Gửi ảnh hoặc video",
                        className: "jsx-820bcd66933fca31" + " " + " rounded-lg cursor-pointer p-1 hover:bg-gray-100 transition-all duration-200 text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiImageOn"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*,video/*",
                                onChange: (e)=>{
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    files.forEach((f)=>onSelectImage(f));
                                    e.target.value = '';
                                },
                                multiple: true,
                                className: "jsx-820bcd66933fca31" + " " + "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 808,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 803,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        "aria-label": "Gửi file",
                        className: "jsx-820bcd66933fca31" + " " + " rounded-lg cursor-pointer p-1 hover:bg-gray-100 transition-all duration-200 text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiFileOn"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                multiple: true,
                                onChange: (e)=>{
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    files.forEach((f)=>onSelectFile(f));
                                    e.target.value = '';
                                },
                                className: "jsx-820bcd66933fca31" + " " + "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 825,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowUpdatingPopup,
                        "aria-label": "Nhập bằng giọng nói",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCreditCard2"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 841,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowUpdatingPopup,
                        "aria-label": "Chọn Zalo",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiInstagram"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 848,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowUpdatingPopup,
                        "aria-label": "Chỉnh sửa Zalo",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiEdit"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 855,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 850,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowUpdatingPopup,
                        "aria-label": "Gửi Zalo",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiPen"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 862,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 857,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowUpdatingPopup,
                        "aria-label": "Chọn Zalo",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCircleMore"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 869,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 864,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 790,
                columnNumber: 7
            }, this),
            userTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tagsContainerRef,
                onPointerDown: onTagsPointerDown,
                onPointerMove: onTagsPointerMove,
                onPointerUp: onTagsPointerUp,
                onPointerCancel: onTagsPointerUp,
                className: "jsx-820bcd66933fca31" + " " + "flex items-center gap-2 overflow-x-auto custom-scrollbar w-full p-1 whitespace-nowrap overscroll-x-contain x-scroll-touch select-none cursor-grab active:cursor-grabbing",
                children: userTags.map((tag)=>{
                    const isSelected = selectedTagIds.includes(tag.id);
                    const colorHex = TAG_COLORS[tag.color] || '#9ca3af';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleToggleTag(tag.id),
                        style: {
                            backgroundColor: isSelected ? colorHex : 'white',
                            borderColor: colorHex,
                            color: isSelected ? '#ffffff' : colorHex
                        },
                        className: "jsx-820bcd66933fca31" + " " + `
                  cursor-pointer flex-none px-2.5 py-1 rounded-[0.25rem] text-xs font-semibold border transition-all duration-200 shadow-sm active:scale-95
                  ${isSelected ? 'shadow-md' : 'hover:shadow'}
                `,
                        children: tag.label
                    }, tag.id, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 886,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 874,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-820bcd66933fca31" + " " + "flex items-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            try {
                                editableRef.current?.blur?.();
                            } catch  {}
                            setTimeout(()=>onToggleEmojiPicker(), 100);
                        },
                        "aria-label": "Chọn emoji",
                        className: "jsx-820bcd66933fca31" + " " + "md:hidden group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiFaceSmile"], {
                            className: "w-7 h-7 text-gray-500 group-hover:text-yellow-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 918,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "relative flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: editableRef,
                                contentEditable: true,
                                inputMode: "text",
                                role: "textbox",
                                "aria-multiline": "true",
                                onClick: ()=>{
                                    setShowMobileActions(false);
                                    try {
                                        window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                            detail: {
                                                open: false
                                            }
                                        }));
                                    } catch  {}
                                // Keep caret at the click position by letting browser handle selection
                                },
                                onInput: ()=>{
                                    onInputEditable();
                                    updateSlashState();
                                    checkContent();
                                },
                                onKeyDown: (e)=>{
                                    const text = editableRef.current ? String(editableRef.current.innerText || '') : '';
                                    const suggestions = kvItems.filter((it)=>it.key.toLowerCase().startsWith((slashQuery || '').toLowerCase()));
                                    if (slashOpen && suggestions.length > 0) {
                                        if (e.key === 'ArrowDown') {
                                            e.preventDefault();
                                            setSlashSelectedIndex((prev)=>(prev + 1) % suggestions.length);
                                            return;
                                        }
                                        if (e.key === 'ArrowUp') {
                                            e.preventDefault();
                                            setSlashSelectedIndex((prev)=>(prev - 1 + suggestions.length) % suggestions.length);
                                            return;
                                        }
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            const chosen = suggestions[Math.max(0, Math.min(slashSelectedIndex, suggestions.length - 1))];
                                            if (chosen && editableRef.current) {
                                                const replaced = text.replace(/\/\s*[\w-]*$/, chosen.value);
                                                editableRef.current.innerText = replaced;
                                                try {
                                                    const range = document.createRange();
                                                    range.selectNodeContents(editableRef.current);
                                                    range.collapse(false);
                                                    const sel = window.getSelection();
                                                    sel?.removeAllRanges();
                                                    sel?.addRange(range);
                                                } catch  {}
                                                setSlashOpen(false);
                                                setSlashSelectedIndex(0);
                                                onInputEditable();
                                                return;
                                            }
                                        }
                                        if (e.key === 'Escape') {
                                            e.preventDefault();
                                            setSlashOpen(false);
                                            setSlashSelectedIndex(0);
                                            return;
                                        }
                                    }
                                    // if (e.key === 'Enter' && !e.shiftKey && isUploading) {
                                    //   e.preventDefault();
                                    //   return;
                                    // }
                                    onKeyDownEditable(e);
                                    updateSlashState();
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        if (attachments && attachments.length > 0) return;
                                        try {
                                            const el = editableRef.current;
                                            if (el) {
                                                el.focus();
                                                const range = document.createRange();
                                                range.selectNodeContents(el);
                                                range.collapse(false);
                                                const sel = window.getSelection();
                                                sel?.removeAllRanges();
                                                sel?.addRange(range);
                                            }
                                        } catch  {}
                                    }
                                },
                                onFocus: ()=>{
                                    onFocusEditable();
                                    updateSlashState();
                                    setShowMobileActions(false);
                                },
                                onPaste: (e)=>{
                                    onPasteEditable(e);
                                    updateSlashState();
                                },
                                style: {
                                    overscrollBehavior: 'contain'
                                },
                                "data-placeholder": "Nhập tin nhắn...",
                                className: "jsx-820bcd66933fca31" + " " + "min-h-10 max-h-40 px-2 py-2 bg-white/90   focus:outline-none  transition-all duration-300 text-[0.875rem] md:text-[1rem] text-gray-800 overflow-auto custom-scrollbar w-full max-w-full break-words whitespace-pre-wrap"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 922,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "pointer-events-none absolute inset-0 flex items-center px-2 py-4 text-gray-400 select-none text-[0.875rem] md:text-[1rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-820bcd66933fca31" + " " + "flex items-center gap-2",
                                    children: "Nhập tin nhắn..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 921,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "flex items-center gap-1",
                        children: hasContent || attachments && attachments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onTouchStart: (e)=>e.preventDefault(),
                                    onClick: ()=>{
                                        handleSendWrapper();
                                        if (attachments && attachments.length > 0) return;
                                        if (!document.hidden && allowFocusRef.current) {
                                            allowFocusRef.current = true;
                                            try {
                                                requestAnimationFrame(()=>{
                                                    const el = editableRef.current;
                                                    if (el) {
                                                        el.focus();
                                                        const range = document.createRange();
                                                        range.selectNodeContents(el);
                                                        range.collapse(false);
                                                        const sel = window.getSelection();
                                                        sel?.removeAllRanges();
                                                        sel?.addRange(range);
                                                    }
                                                });
                                            } catch  {}
                                        }
                                    },
                                    "aria-label": "Gửi tin nhắn",
                                    className: "jsx-820bcd66933fca31" + " " + `lg:hidden p-2 rounded-full cursor-pointer text-blue-600 hover:bg-blue-50 transition-all duration-300 active:scale-90 group`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPaperAirplane"], {
                                        className: "w-7 h-7 -rotate-12 group-hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onMouseDown: (e)=>e.preventDefault(),
                                    onTouchStart: (e)=>e.preventDefault(),
                                    onClick: ()=>{
                                        handleSendWrapper();
                                        if (attachments && attachments.length > 0) return;
                                        if (!document.hidden && allowFocusRef.current) {
                                            allowFocusRef.current = true;
                                            try {
                                                requestAnimationFrame(()=>{
                                                    const el = editableRef.current;
                                                    if (el) {
                                                        el.focus();
                                                        const range = document.createRange();
                                                        range.selectNodeContents(el);
                                                        range.collapse(false);
                                                        const sel = window.getSelection();
                                                        sel?.removeAllRanges();
                                                        sel?.addRange(range);
                                                    }
                                                });
                                            } catch  {}
                                        }
                                    },
                                    "aria-label": "Gửi tin nhắn",
                                    className: "jsx-820bcd66933fca31" + " " + `hidden lg:block p-2 rounded-full cursor-pointer text-blue-600 hover:bg-blue-50 transition-all duration-300 active:scale-90 group`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPaperAirplane"], {
                                        className: "w-7 h-7 -rotate-12 group-hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-820bcd66933fca31" + " " + "hidden md:flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                try {
                                                    editableRef.current?.blur?.();
                                                } catch  {}
                                                setTimeout(()=>onToggleEmojiPicker(), 100);
                                            },
                                            "aria-label": "Chọn emoji",
                                            className: "jsx-820bcd66933fca31" + " " + "group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiFaceSmile"], {
                                                className: "w-7 h-7 text-gray-500 group-hover:text-yellow-500 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1091,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const el = editableRef.current;
                                                if (!el) return;
                                                el.innerText = '👍';
                                                onInputEditable();
                                                handleSendWrapper();
                                            },
                                            "aria-label": "Gửi like",
                                            className: "jsx-820bcd66933fca31" + " " + `p-2 rounded-full cursor-pointer text-gray-700  ${isUploading ? 'opacity-50 pointer-events-none grayscale' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/imgs/like.png",
                                                width: 24,
                                                height: 24,
                                                alt: "Like Zalo",
                                                className: "w-7 h-7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1116,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1090,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-820bcd66933fca31" + " " + "md:hidden flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            ref: toggleMobileActionsBtnRef,
                                            onClick: handleToggleMobileActions,
                                            "aria-label": "Mở thêm hành động",
                                            className: "jsx-820bcd66933fca31" + " " + "block rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 transition-all duration-300 active:scale-90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICIcon1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "w-11 h-11"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1126,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onVoiceInput,
                                            "aria-label": "Nhập bằng giọng nói",
                                            className: "jsx-820bcd66933fca31" + " " + ` rounded-full cursor-pointer transition-all duration-300 active:scale-90 ${isListening ? 'text-red-500 animate-pulse bg-red-50' : 'text-gray-500 hover:bg-gray-100'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$MicIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "w-11 h-11 text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1135,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            "aria-label": "Gửi ảnh hoặc video",
                                            className: "jsx-820bcd66933fca31" + " " + " rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 transition-all duration-300 active:scale-90",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICIconImageZalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-11 h-11"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*,video/*",
                                                    onChange: (e)=>{
                                                        const files = e.target.files ? Array.from(e.target.files) : [];
                                                        files.forEach((f)=>onSelectImage(f));
                                                        e.target.value = '';
                                                    },
                                                    multiple: true,
                                                    className: "jsx-820bcd66933fca31" + " " + "sr-only"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                    lineNumber: 1142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1026,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 907,
                columnNumber: 7
            }, this),
            showMobileActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mobileActionsRef,
                className: "jsx-820bcd66933fca31" + " " + "lg:hidden w-full grid grid-cols-4 gap-2 items-center justify-between mx-auto mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        "aria-label": "Gửi ảnh hoặc video",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200  shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhoto"], {
                                        className: "w-6 h-6 text-blue-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Ảnh/Video"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*,video/*",
                                onChange: (e)=>{
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    files.forEach((f)=>onSelectImage(f));
                                    e.target.value = '';
                                    setShowMobileActions(false);
                                    try {
                                        window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                            detail: {
                                                open: false
                                            }
                                        }));
                                    } catch  {}
                                },
                                multiple: true,
                                className: "jsx-820bcd66933fca31" + " " + "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1176,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        "aria-label": "Gửi file",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPaperClip"], {
                                        className: "w-6 h-6 text-green-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200 rotate-12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "File"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                multiple: true,
                                onChange: (e)=>{
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    files.forEach((f)=>onSelectFile(f));
                                    e.target.value = '';
                                    setShowMobileActions(false);
                                    try {
                                        window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                            detail: {
                                                open: false
                                            }
                                        }));
                                    } catch  {}
                                },
                                className: "jsx-820bcd66933fca31" + " " + "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1192,
                        columnNumber: 11
                    }, this),
                    isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowCreatePoll(true);
                            setShowMobileActions(false);
                            try {
                                window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                    detail: {
                                        open: false
                                    }
                                }));
                            } catch  {}
                        },
                        "aria-label": "Bình chọn",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 hover:from-indigo-200 hover:to-blue-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChartBar"], {
                                        className: "w-6 h-6 text-blue-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1227,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1225,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Bình chọn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1229,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1214,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowCreateNote(true);
                            setShowMobileActions(false);
                            try {
                                window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                    detail: {
                                        open: false
                                    }
                                }));
                            } catch  {}
                        },
                        "aria-label": "Nhắc hẹn",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-indigo-100 to-red-600 hover:from-indigo-200 hover:to-blue-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiClock"], {
                                        className: "w-6 h-6 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Nhắc hẹn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onVoiceInput();
                            setShowMobileActions(false);
                            try {
                                window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                    detail: {
                                        open: false
                                    }
                                }));
                            } catch  {}
                        },
                        "aria-label": "Nhập bằng giọng nói",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + `relative w-12 h-12 mb-3 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${isListening ? 'bg-gradient-to-br from-red-500 to-pink-600 ring-4 ring-red-300/50 scale-110' : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMicrophone"], {
                                        className: `w-6 h-6 ${isListening ? 'text-white' : 'text-gray-700'} drop-shadow-md group-hover:scale-110 transition-transform duration-200`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1269,
                                        columnNumber: 15
                                    }, this),
                                    isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full bg-red-500/30 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Voice"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1276,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            });
                        },
                        "aria-label": "Chat nhanh",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 hover:from-violet-200 hover:to-purple-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLightningBolt"], {
                                        className: "w-6 h-6 text-yellow-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1287,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Chat nhanh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            });
                        },
                        "aria-label": "Báo xấu",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiShieldCheck"], {
                                        className: "w-6 h-6 text-red-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1300,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Báo xấu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1302,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1291,
                        columnNumber: 11
                    }, this),
                    canClearHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            });
                        },
                        "aria-label": "Xóa lịch sử",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-slate-100 to-gray-100 hover:from-slate-200 hover:to-gray-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiTrash"], {
                                        className: "w-6 h-6 text-gray-700 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1313,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1314,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1312,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Xóa lịch sử"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1316,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1305,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            }),
                        "aria-label": "Vị trí",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                                        className: "w-6 h-6 text-rose-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Vị trí"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1328,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            }),
                        "aria-label": "Danh thiếp",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 hover:from-teal-200 hover:to-cyan-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiIdentification"], {
                                        className: "w-6 h-6 text-teal-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1338,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Danh thiếp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1340,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            }),
                        "aria-label": "Vẽ hình",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-purple-100 to-fuchsia-100 hover:from-purple-200 hover:to-fuchsia-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPencil"], {
                                        className: "w-6 h-6 text-purple-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Vẽ hình"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1351,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1342,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>showToast({
                                type: 'info',
                                message: 'Chức năng đang hoàn thiện'
                            }),
                        "aria-label": "Vẽ hình",
                        className: "jsx-820bcd66933fca31" + " " + "group relative cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-slate-100 to-gray-100 hover:from-slate-200 hover:to-gray-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-820bcd66933fca31" + " " + "text-xs font-black text-gray-700 drop-shadow-md group-hover:scale-110 transition-transform duration-200",
                                        children: "@GIF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1362,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1358,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "@GIF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1353,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1161,
                columnNumber: 9
            }, this),
            showConfirmClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
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
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1370,
                columnNumber: 9
            }, this),
            showReportConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
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
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1399,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "820bcd66933fca31",
                children: "[contenteditable].jsx-820bcd66933fca31:empty~div.jsx-820bcd66933fca31>span.jsx-820bcd66933fca31{opacity:1}[contenteditable].jsx-820bcd66933fca31:not(:empty)~div.jsx-820bcd66933fca31>span.jsx-820bcd66933fca31,[contenteditable].jsx-820bcd66933fca31:focus~div.jsx-820bcd66933fca31>span.jsx-820bcd66933fca31{opacity:0}[contenteditable].jsx-820bcd66933fca31:focus~div.jsx-820bcd66933fca31>span.jsx-820bcd66933fca31{transition:opacity .3s}"
            }, void 0, false, void 0, this),
            slashOpen && kvItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-820bcd66933fca31" + " " + "absolute left-4 bottom-20 z-40 w-64 bg-white rounded-xl shadow-xl border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "px-3 py-2 border-b text-xs text-gray-500",
                        children: "Gợi ý Chat nhanh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1444,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "max-h-48 overflow-y-auto",
                        children: kvItems.filter((it)=>it.key.toLowerCase().startsWith((slashQuery || '').toLowerCase())).map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (!editableRef.current) return;
                                    editableRef.current.focus();
                                    try {
                                        const text = String(editableRef.current.innerText || '');
                                        const replaced = text.replace(/\/\s*[\w-]*$/, it.value);
                                        editableRef.current.innerText = replaced;
                                        const range = document.createRange();
                                        range.selectNodeContents(editableRef.current);
                                        range.collapse(false);
                                        const sel = window.getSelection();
                                        sel?.removeAllRanges();
                                        sel?.addRange(range);
                                        setSlashOpen(false);
                                        setSlashSelectedIndex(0);
                                        onInputEditable();
                                    } catch  {}
                                },
                                className: "jsx-820bcd66933fca31" + " " + `w-full text-left px-3 py-2 text-sm flex items-center gap-2 ${idx === slashSelectedIndex ? 'bg-indigo-50' : 'hover:bg-gray-50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-820bcd66933fca31" + " " + "text-indigo-600",
                                        children: [
                                            "/",
                                            it.key
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-820bcd66933fca31" + " " + "text-gray-500 truncate",
                                        children: it.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1472,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, it.key, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1449,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1445,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1443,
                columnNumber: 9
            }, this),
            showFlashPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-820bcd66933fca31" + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-820bcd66933fca31" + " " + "bg-white w-full max-w-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "px-4 py-3 bg-gray-50 border-b flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-820bcd66933fca31" + " " + "text-sm font-semibold text-gray-800",
                                    children: "Chọn thư mục ChatFlash"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFlashPicker(false),
                                    className: "jsx-820bcd66933fca31" + " " + "p-2 rounded-full cursor-pointer hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1482,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "p-3",
                            children: flashFolders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "text-center text-gray-500 py-8 text-sm",
                                children: "Chưa có thư mục"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1493,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "space-y-2",
                                children: flashFolders.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectFlashFolder(f),
                                        className: "jsx-820bcd66933fca31" + " " + "w-full text-left px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiFolder"], {
                                                className: "w-4 h-4 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1502,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-820bcd66933fca31" + " " + "truncate",
                                                children: f.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1503,
                                                columnNumber: 23
                                            }, this),
                                            selectedFlashFolder?.id === f.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-820bcd66933fca31" + " " + "ml-auto text-xs text-indigo-600",
                                                children: "Đang chọn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, f.id, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1497,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1495,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1491,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                    lineNumber: 1481,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1480,
                columnNumber: 9
            }, this),
            showUpdatingPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-820bcd66933fca31" + " " + "fixed inset-0 z-[9999] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setShowUpdatingPopup(false),
                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 bg-black/40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1518,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-820bcd66933fca31" + " " + "relative bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "px-5 py-4 text-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-820bcd66933fca31" + " " + "text-base font-bold text-gray-900",
                                    children: "Đang cập nhật"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1521,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-820bcd66933fca31" + " " + "text-sm text-gray-500",
                                    children: "Tính năng đang được cập nhật."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1522,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUpdatingPopup(false),
                                    className: "jsx-820bcd66933fca31" + " " + "cursor-pointer mt-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition",
                                    children: "Đóng"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1523,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1520,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1519,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1517,
                columnNumber: 9
            }, this),
            showCreatePoll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreatePoll,
                onClose: ()=>setShowCreatePoll(false),
                onCreate: handleCreatePoll
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1535,
                columnNumber: 9
            }, this),
            showCreateNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreateNote,
                onClose: ()=>setShowCreateNote(false),
                onCreate: handleCreateNote,
                createLoading: createLoading
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1539,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
        lineNumber: 724,
        columnNumber: 5
    }, this);
}
_s(ChatInput, "QDPBgW2ADb3OI56lsftd+XtYkpU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_%28chatPopup%29_ChatInput_tsx_e3ee3b58._.js.map