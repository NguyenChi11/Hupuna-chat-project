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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
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
;
function ChatInput({ socket, onToggleEmojiPicker, isListening, onVoiceInput, editableRef, onInputEditable, onKeyDownEditable, onPasteEditable, onFocusEditable, onSendMessage, onSendMessageData, onSelectImage, onSelectFile, onAttachFromFolder, attachments, onRemoveAttachment, onClearAttachments, isUploading = false, uploadingCount = 0, overallUploadPercent = 0 }) {
    _s();
    const { currentUser, selectedChat, isGroup, allUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatContext"])();
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
    const [showContactCardModal, setShowContactCardModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contactCardSearch, setContactCardSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeContactCategory, setActiveContactCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedContactCardIds, setSelectedContactCardIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const contactCategoryBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contactCategoryDragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        active: false,
        startX: 0,
        startScrollLeft: 0,
        moved: false
    });
    const myId = String(currentUser._id || '');
    const [categoryTags, setCategoryTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const loadCategoryTags = {
                "ChatInput.useEffect.loadCategoryTags": async ()=>{
                    if (!currentUser?._id) return;
                    if (Array.isArray(currentUser.categoryTags)) {
                        setCategoryTags(currentUser.categoryTags.filter({
                            "ChatInput.useEffect.loadCategoryTags": (x)=>!!x && typeof x.id === 'string'
                        }["ChatInput.useEffect.loadCategoryTags"]));
                    }
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
                        if (row && Array.isArray(row.categoryTags)) {
                            setCategoryTags(row.categoryTags.filter({
                                "ChatInput.useEffect.loadCategoryTags": (x)=>!!x && typeof x === 'object' && typeof x.id === 'string'
                            }["ChatInput.useEffect.loadCategoryTags"]));
                        }
                    } catch  {}
                }
            }["ChatInput.useEffect.loadCategoryTags"];
            loadCategoryTags();
            const handleUserCategoryTagsUpdated = {
                "ChatInput.useEffect.handleUserCategoryTagsUpdated": (e)=>{
                    const ev = e;
                    if (ev.detail && String(ev.detail.userId) === String(currentUser?._id)) {
                        setCategoryTags(Array.isArray(ev.detail.tags) ? ev.detail.tags : []);
                    }
                }
            }["ChatInput.useEffect.handleUserCategoryTagsUpdated"];
            window.addEventListener('userCategoryTagsUpdated', handleUserCategoryTagsUpdated);
            return ({
                "ChatInput.useEffect": ()=>window.removeEventListener('userCategoryTagsUpdated', handleUserCategoryTagsUpdated)
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        currentUser?._id,
        currentUser?.categoryTags
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (activeContactCategory === 'all') return;
            if (categoryTags.some({
                "ChatInput.useEffect": (t)=>t.id === activeContactCategory
            }["ChatInput.useEffect"])) return;
            setActiveContactCategory('all');
        }
    }["ChatInput.useEffect"], [
        activeContactCategory,
        categoryTags
    ]);
    const handleContactCategoryPointerDown = (e)=>{
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        const el = contactCategoryBarRef.current;
        if (!el) return;
        contactCategoryDragRef.current = {
            active: true,
            startX: e.clientX,
            startScrollLeft: el.scrollLeft,
            moved: false
        };
        try {
            el.setPointerCapture(e.pointerId);
        } catch  {}
    };
    const handleContactCategoryPointerMove = (e)=>{
        const el = contactCategoryBarRef.current;
        const drag = contactCategoryDragRef.current;
        if (!el || !drag.active) return;
        const dx = e.clientX - drag.startX;
        if (!drag.moved && Math.abs(dx) > 4) {
            contactCategoryDragRef.current = {
                ...drag,
                moved: true
            };
        }
        el.scrollLeft = drag.startScrollLeft - dx;
    };
    const handleContactCategoryPointerEnd = (e)=>{
        const el = contactCategoryBarRef.current;
        const drag = contactCategoryDragRef.current;
        if (!drag.active) return;
        contactCategoryDragRef.current = {
            ...drag,
            active: false
        };
        try {
            el?.releasePointerCapture(e.pointerId);
        } catch  {}
    };
    const handleContactCategoryClickCapture = (e)=>{
        if (!contactCategoryDragRef.current.moved) return;
        e.preventDefault();
        e.stopPropagation();
        contactCategoryDragRef.current = {
            ...contactCategoryDragRef.current,
            moved: false
        };
    };
    const getContactDisplayName = (u)=>{
        const nick = u.nicknames && typeof u.nicknames === 'object' ? u.nicknames[myId] : '';
        return String(nick || u.name || u.username || 'Người dùng').trim();
    };
    const getContactCategories = (u)=>{
        const by = u.categoriesBy?.[myId] || u.categories || [];
        if (!Array.isArray(by)) return [];
        return by.filter((x)=>typeof x === 'string' && x.length > 0);
    };
    const filteredContactUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInput.useMemo[filteredContactUsers]": ()=>{
            const term = String(contactCardSearch || '').trim();
            const active = activeContactCategory;
            const base = Array.isArray(allUsers) ? allUsers : [];
            const filtered = base.filter({
                "ChatInput.useMemo[filteredContactUsers].filtered": (u)=>{
                    if (!u || typeof u !== 'object') return false;
                    if (u.isHidden) return false;
                    if (active !== 'all') {
                        const cats = getContactCategories(u);
                        if (!cats.includes(active)) return false;
                    }
                    if (!term) return true;
                    const displayName = getContactDisplayName(u);
                    const username = String(u.username || '');
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(displayName, term) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(username, term);
                }
            }["ChatInput.useMemo[filteredContactUsers].filtered"]);
            filtered.sort({
                "ChatInput.useMemo[filteredContactUsers]": (a, b)=>getContactDisplayName(a).localeCompare(getContactDisplayName(b), 'vi')
            }["ChatInput.useMemo[filteredContactUsers]"]);
            return filtered;
        }
    }["ChatInput.useMemo[filteredContactUsers]"], [
        allUsers,
        contactCardSearch,
        activeContactCategory,
        myId
    ]);
    const groupedContactUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatInput.useMemo[groupedContactUsers]": ()=>{
            const map = new Map();
            filteredContactUsers.forEach({
                "ChatInput.useMemo[groupedContactUsers]": (u)=>{
                    const name = getContactDisplayName(u);
                    const keyRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(name || '').trim();
                    const ch = keyRaw ? keyRaw[0].toUpperCase() : '#';
                    const key = /[A-Z]/.test(ch) ? ch : '#';
                    const arr = map.get(key) || [];
                    arr.push(u);
                    map.set(key, arr);
                }
            }["ChatInput.useMemo[groupedContactUsers]"]);
            const keys = Array.from(map.keys()).sort({
                "ChatInput.useMemo[groupedContactUsers].keys": (a, b)=>a === '#' ? 1 : b === '#' ? -1 : a.localeCompare(b)
            }["ChatInput.useMemo[groupedContactUsers].keys"]);
            return keys.map({
                "ChatInput.useMemo[groupedContactUsers]": (k)=>({
                        key: k,
                        users: map.get(k) || []
                    })
            }["ChatInput.useMemo[groupedContactUsers]"]);
        }
    }["ChatInput.useMemo[groupedContactUsers]"], [
        filteredContactUsers
    ]);
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
    const handleSendContactCard = async ()=>{
        const ids = selectedContactCardIds.map((x)=>String(x)).filter(Boolean);
        if (ids.length === 0) return;
        const base = Array.isArray(allUsers) ? allUsers : [];
        const selectedUsers = ids.map((id)=>base.find((u)=>String(u._id) === String(id))).filter((u)=>!!u);
        if (selectedUsers.length === 0) return;
        try {
            for (const selectedUser of selectedUsers){
                const payload = {
                    roomId,
                    sender: String(currentUser._id),
                    type: 'contact',
                    timestamp: Date.now(),
                    contactCard: {
                        _id: String(selectedUser._id),
                        name: getContactDisplayName(selectedUser),
                        username: selectedUser.username,
                        avatar: selectedUser.avatar
                    }
                };
                if (onSendMessageData) {
                    await onSendMessageData(payload);
                } else {
                    const createRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMessageApi"])(payload);
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
                                ...payload,
                                _id: createRes._id
                            });
                        }
                    }
                }
            }
        } finally{
            setShowContactCardModal(false);
            setSelectedContactCardIds([]);
            setContactCardSearch('');
            setActiveContactCategory('all');
        }
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
                                lineNumber: 944,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClearAttachments,
                                className: "jsx-820bcd66933fca31" + " " + "text-xs text-red-600 hover:underline cursor-pointer",
                                children: "Xóa tất cả"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 947,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 943,
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
                                        lineNumber: 955,
                                        columnNumber: 19
                                    }, this) : att.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: att.previewUrl,
                                        muted: true,
                                        playsInline: true,
                                        className: "jsx-820bcd66933fca31" + " " + "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 957,
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
                                                    lineNumber: 961,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 960,
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
                                                        lineNumber: 964,
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
                                                        lineNumber: 967,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 963,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 959,
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
                                            lineNumber: 978,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 973,
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
                                            lineNumber: 985,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 980,
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
                                            lineNumber: 995,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 988,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 953,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 951,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 942,
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
                            lineNumber: 1014,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1004,
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
                                lineNumber: 1020,
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
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1016,
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
                                lineNumber: 1037,
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
                                lineNumber: 1038,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1033,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowContactCardModal(true),
                        "aria-label": "Gửi danh thiếp",
                        className: "jsx-820bcd66933fca31" + " " + `rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCreditCard2"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1054,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1049,
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
                            lineNumber: 1061,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1056,
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
                            lineNumber: 1068,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1063,
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
                            lineNumber: 1075,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1070,
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
                            lineNumber: 1082,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1077,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1003,
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
                        lineNumber: 1099,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1087,
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
                            lineNumber: 1131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1121,
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
                                lineNumber: 1135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "pointer-events-none absolute inset-0 flex items-center px-2 py-4 text-gray-400 select-none text-[0.875rem] md:text-[1rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-820bcd66933fca31" + " " + "flex items-center gap-2",
                                    children: "Nhập tin nhắn..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1235,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1134,
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
                                        lineNumber: 1269,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1242,
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
                                        lineNumber: 1298,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1271,
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
                                                lineNumber: 1314,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1304,
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
                                                lineNumber: 1329,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1316,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1303,
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
                                                lineNumber: 1339,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1333,
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
                                                lineNumber: 1348,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1341,
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
                                                    lineNumber: 1354,
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
                                                    lineNumber: 1355,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1350,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1120,
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
                                        lineNumber: 1381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1383,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Ảnh/Video"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1387,
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
                                lineNumber: 1389,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1378,
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
                                        lineNumber: 1407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "File"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1410,
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
                                lineNumber: 1411,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1405,
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
                                        lineNumber: 1439,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1440,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1438,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Bình chọn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1442,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1427,
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
                                        lineNumber: 1458,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1459,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1457,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Nhắc hẹn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1461,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1446,
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
                                        lineNumber: 1482,
                                        columnNumber: 15
                                    }, this),
                                    isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full bg-red-500/30 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1487,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1475,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Voice"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1489,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1464,
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
                                        lineNumber: 1499,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1500,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1498,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Chat nhanh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1502,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1491,
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
                                        lineNumber: 1512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1513,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1511,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Báo xấu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1504,
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
                                        lineNumber: 1526,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1527,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1525,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Xóa lịch sử"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1529,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1518,
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
                                        lineNumber: 1538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1539,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Vị trí"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1541,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1532,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowMobileActions(false);
                            try {
                                window.dispatchEvent(new CustomEvent('mobileActionsToggle', {
                                    detail: {
                                        open: false
                                    }
                                }));
                            } catch  {}
                            setShowContactCardModal(true);
                        },
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
                                        lineNumber: 1556,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1557,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Danh thiếp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1559,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1544,
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
                                        lineNumber: 1567,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1568,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1566,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "Vẽ hình"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1570,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1561,
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
                                        lineNumber: 1578,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31" + " " + "absolute inset-0 rounded-full shadow-inner shadow-white/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1581,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1577,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-820bcd66933fca31" + " " + "text-sm font-medium text-gray-800",
                                children: "@GIF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1583,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1572,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1374,
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
                lineNumber: 1589,
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
                lineNumber: 1618,
                columnNumber: 9
            }, this),
            showContactCardModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>{
                    setShowContactCardModal(false);
                    setSelectedContactCardIds([]);
                    setContactCardSearch('');
                    setActiveContactCategory('all');
                },
                className: "jsx-820bcd66933fca31" + " " + "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-0 md:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-820bcd66933fca31" + " " + "w-full  md:max-w-[46rem] bg-white md:rounded-2xl shadow-2xl overflow-hidden h-full md:max-h-[90vh] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-820bcd66933fca31" + " " + "text-lg font-bold text-gray-900",
                                    children: "Gửi danh thiếp"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1662,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowContactCardModal(false);
                                        setSelectedContactCardIds([]);
                                        setContactCardSearch('');
                                        setActiveContactCategory('all');
                                    },
                                    "aria-label": "Đóng",
                                    className: "jsx-820bcd66933fca31" + " " + "p-2 rounded-full cursor-pointer hover:bg-gray-100 text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1673,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1663,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1661,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "px-4 sm:px-6 py-4 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-820bcd66933fca31" + " " + "flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSearch"], {
                                            className: "w-5 h-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: contactCardSearch,
                                            onChange: (e)=>setContactCardSearch(e.target.value),
                                            placeholder: "Tìm danh thiếp theo tên",
                                            className: "jsx-820bcd66933fca31" + " " + "w-full outline-none text-sm text-gray-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1680,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1678,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: contactCategoryBarRef,
                                    onPointerDown: handleContactCategoryPointerDown,
                                    onPointerMove: handleContactCategoryPointerMove,
                                    onPointerUp: handleContactCategoryPointerEnd,
                                    onPointerCancel: handleContactCategoryPointerEnd,
                                    onLostPointerCapture: handleContactCategoryPointerEnd,
                                    onClickCapture: handleContactCategoryClickCapture,
                                    style: {
                                        touchAction: 'pan-x',
                                        WebkitOverflowScrolling: 'touch'
                                    },
                                    className: "jsx-820bcd66933fca31" + " " + "mt-4 flex items-center gap-2 overflow-x-auto w-full whitespace-nowrap custom-scrollbar select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveContactCategory('all'),
                                            className: "jsx-820bcd66933fca31" + " " + `px-4 py-2 mb-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${activeContactCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                            children: "Tất cả"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                            lineNumber: 1699,
                                            columnNumber: 17
                                        }, this),
                                        categoryTags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveContactCategory(t.id),
                                                className: "jsx-820bcd66933fca31" + " " + `px-4 py-2 mb-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${activeContactCategory === t.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                children: t.label
                                            }, t.id, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1710,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1688,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1677,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "flex-1 overflow-y-auto",
                            children: groupedContactUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "py-12 text-center text-sm text-gray-500",
                                children: "Không tìm thấy liên hệ phù hợp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1727,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "py-2",
                                children: groupedContactUsers.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-820bcd66933fca31",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-820bcd66933fca31" + " " + "px-4 sm:px-6 py-2 text-sm font-bold text-gray-700",
                                                children: g.key
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1732,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-820bcd66933fca31" + " " + "space-y-1 px-2 sm:px-4 pb-2",
                                                children: g.users.map((u)=>{
                                                    const idStr = String(u._id || '');
                                                    const isSelected = selectedContactCardIds.includes(idStr);
                                                    const displayName = getContactDisplayName(u);
                                                    const sub = String(u.username || '');
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (!idStr) return;
                                                            setSelectedContactCardIds((prev)=>prev.includes(idStr) ? prev.filter((x)=>x !== idStr) : [
                                                                    ...prev,
                                                                    idStr
                                                                ]);
                                                        },
                                                        className: "jsx-820bcd66933fca31" + " " + "w-full flex items-center gap-3 px-2 py-2 rounded-xl cursor-pointer hover:bg-gray-50 active:scale-[0.99] transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-820bcd66933fca31" + " " + `w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-blue-600' : 'border-gray-300'}`,
                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-820bcd66933fca31" + " " + "w-3 h-3 rounded-full bg-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                    lineNumber: 1755,
                                                                    columnNumber: 48
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                lineNumber: 1750,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-820bcd66933fca31" + " " + "w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shrink-0",
                                                                children: u.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(u.avatar),
                                                                    alt: "",
                                                                    width: 40,
                                                                    height: 40,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                    lineNumber: 1760,
                                                                    columnNumber: 35
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/logo/avata.webp",
                                                                    alt: "",
                                                                    width: 40,
                                                                    height: 40,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                    lineNumber: 1768,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                lineNumber: 1758,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-820bcd66933fca31" + " " + "flex-1 min-w-0 text-left",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-820bcd66933fca31" + " " + "text-sm font-semibold text-gray-900 truncate",
                                                                        children: displayName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                        lineNumber: 1779,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    sub ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-820bcd66933fca31" + " " + "text-sm text-gray-500 truncate",
                                                                        children: sub
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                        lineNumber: 1780,
                                                                        columnNumber: 40
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                                lineNumber: 1778,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, String(u._id), true, {
                                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                        lineNumber: 1740,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1733,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, g.key, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1731,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1729,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1725,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "px-4 sm:px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowContactCardModal(false);
                                        setSelectedContactCardIds([]);
                                        setContactCardSearch('');
                                        setActiveContactCategory('all');
                                    },
                                    className: "jsx-820bcd66933fca31" + " " + "px-5 py-2 rounded-xl bg-gray-100 text-gray-800 font-semibold cursor-pointer hover:bg-gray-200 transition",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1793,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendContactCard,
                                    disabled: selectedContactCardIds.length === 0,
                                    className: "jsx-820bcd66933fca31" + " " + `px-5 py-2 rounded-xl font-semibold transition ${selectedContactCardIds.length > 0 ? 'bg-blue-600 text-white cursor-pointer hover:bg-blue-700' : 'bg-blue-200 text-white cursor-not-allowed'}`,
                                    children: `Gửi danh thiếp${selectedContactCardIds.length > 0 ? ` (${selectedContactCardIds.length})` : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1804,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1792,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                    lineNumber: 1657,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1648,
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
                        lineNumber: 1835,
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
                                        lineNumber: 1862,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-820bcd66933fca31" + " " + "text-gray-500 truncate",
                                        children: it.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1863,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, it.key, true, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1840,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1836,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1834,
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
                                    lineNumber: 1874,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFlashPicker(false),
                                    className: "jsx-820bcd66933fca31" + " " + "p-2 rounded-full cursor-pointer hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1879,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1875,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1873,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-820bcd66933fca31" + " " + "p-3",
                            children: flashFolders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-820bcd66933fca31" + " " + "text-center text-gray-500 py-8 text-sm",
                                children: "Chưa có thư mục"
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1884,
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
                                                lineNumber: 1893,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-820bcd66933fca31" + " " + "truncate",
                                                children: f.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1894,
                                                columnNumber: 23
                                            }, this),
                                            selectedFlashFolder?.id === f.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-820bcd66933fca31" + " " + "ml-auto text-xs text-indigo-600",
                                                children: "Đang chọn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                                lineNumber: 1896,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, f.id, true, {
                                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                        lineNumber: 1888,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                lineNumber: 1886,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1882,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                    lineNumber: 1872,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1871,
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
                        lineNumber: 1909,
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
                                    lineNumber: 1912,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-820bcd66933fca31" + " " + "text-sm text-gray-500",
                                    children: "Tính năng đang được cập nhật."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1913,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUpdatingPopup(false),
                                    className: "jsx-820bcd66933fca31" + " " + "cursor-pointer mt-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition",
                                    children: "Đóng"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                                    lineNumber: 1914,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                            lineNumber: 1911,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                        lineNumber: 1910,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1908,
                columnNumber: 9
            }, this),
            showCreatePoll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreatePollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreatePoll,
                onClose: ()=>setShowCreatePoll(false),
                onCreate: handleCreatePoll
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1926,
                columnNumber: 9
            }, this),
            showCreateNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$CreateReminderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreateNote,
                onClose: ()=>setShowCreateNote(false),
                onCreate: handleCreateNote,
                createLoading: createLoading
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
                lineNumber: 1930,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/(chatPopup)/ChatInput.tsx",
        lineNumber: 937,
        columnNumber: 5
    }, this);
}
_s(ChatInput, "XK+VdqcMCodMjXfupdnOFV1f6w8=", false, function() {
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