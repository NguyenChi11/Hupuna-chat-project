(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/(chatPopup)/MessageList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
// Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReminderDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/PollDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReactionButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReactionButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICShareMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ICShareMessage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReadStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReadStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/(chatPopup)/components/ReminderCard.tsx [app-client] (ecmascript)");
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
function MessageList({ messagesGrouped, messages, currentUser, allUsersMap, uploadingFiles, highlightedMsgId, isGroup, onContextMenu, onMobileLongPress, onReplyMessage, onJumpToMessage, getSenderInfo, renderMessageContent, onOpenMedia, editingMessageId, setEditingMessageId, editContent, setEditContent, onSaveEdit, onRefresh, onPinMessage, onToggleReaction, contextMenu, scrollManagedExternally = false, isSidebarOpen = false, isMobile = false, onShareMessage, onOpenChatInfoSection }) {
    _s();
    const [, setTimeVisibleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedOriginalId, setExpandedOriginalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeMoreId, setActiveMoreId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailMsg, setDetailMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reactionDetail, setReactionDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const longPressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const longPressTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [mobileCollapsedId, setMobileCollapsedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swipeState, setSwipeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: null,
        dx: 0
    });
    const [longPressActiveId, setLongPressActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedNotifyGroups, setExpandedNotifyGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const swipeStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        id: null,
        isMe: false
    });
    // Đóng menu reaction/folder khi click ra ngoài
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageList.useEffect": ()=>{
            const handleClickOutside = {
                "MessageList.useEffect.handleClickOutside": (event)=>{
                    if (activeMoreId) {
                        const activeWrapper = document.getElementById(`msg-${activeMoreId}`);
                        if (activeWrapper && !activeWrapper.contains(event.target)) {
                            setActiveMoreId(null);
                        }
                    }
                }
            }["MessageList.useEffect.handleClickOutside"];
            const handleVisibilityChange = {
                "MessageList.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) setActiveMoreId(null);
                }
            }["MessageList.useEffect.handleVisibilityChange"];
            const handleWindowBlur = {
                "MessageList.useEffect.handleWindowBlur": ()=>{
                    setActiveMoreId(null);
                }
            }["MessageList.useEffect.handleWindowBlur"];
            const handleKeyDown = {
                "MessageList.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') setActiveMoreId(null);
                }
            }["MessageList.useEffect.handleKeyDown"];
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('visibilitychange', handleVisibilityChange);
            window.addEventListener('blur', handleWindowBlur);
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "MessageList.useEffect": ()=>{
                    document.removeEventListener('click', handleClickOutside);
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    window.removeEventListener('blur', handleWindowBlur);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["MessageList.useEffect"];
        }
    }["MessageList.useEffect"], [
        activeMoreId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageList.useEffect": ()=>{
            if (!contextMenu?.visible) setMobileCollapsedId(null);
        }
    }["MessageList.useEffect"], [
        contextMenu
    ]);
    const formatTimestamp = (ts)=>{
        const d = new Date(ts);
        const now = new Date();
        const sameDay = d.toDateString() === now.toDateString();
        return sameDay ? d.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit'
        }) : d.toLocaleString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };
    const formatTimeMarker = (ts)=>{
        const d = new Date(ts);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const sameDate = (a, b)=>a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
        const timeLabel = d.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        const dateLabel = sameDate(d, today) ? 'Hôm nay' : sameDate(d, yesterday) ? 'Hôm qua' : d.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        return `${timeLabel} ${dateLabel}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageList.useEffect": ()=>{
            if (scrollManagedExternally || !highlightedMsgId) return;
            // Đợi DOM render xong
            setTimeout({
                "MessageList.useEffect": ()=>{
                    const element = document.getElementById(`msg-${highlightedMsgId}`);
                    if (element) {
                        // Scroll với nhiều fallback
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'nearest'
                        });
                        // Fallback cho mobile
                        setTimeout({
                            "MessageList.useEffect": ()=>{
                                element.scrollIntoView({
                                    behavior: 'auto',
                                    block: 'center'
                                });
                            }
                        }["MessageList.useEffect"], 100);
                    }
                }
            }["MessageList.useEffect"], 100);
        }
    }["MessageList.useEffect"], [
        highlightedMsgId,
        scrollManagedExternally
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            Array.from(messagesGrouped.entries()).map(([dateKey, msgs])=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center my-4 sticky top-1 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-1 text-xs font-medium text-gray-600 bg-gray-50/90 rounded-full shadow",
                                children: dateKey
                            }, void 0, false, {
                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const consumedIds = new Set();
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: msgs.map((msg, index)=>{
                                    if (consumedIds.has(msg._id)) return null;
                                    const isLastMsg = msg._id === messages[messages.length - 1]?._id;
                                    const senderInfo = getSenderInfo(msg.sender);
                                    const isMe = String(senderInfo._id) === String(currentUser._id);
                                    const repliedToMsg = msg.replyToMessageId ? messages.find((m)=>m._id === msg.replyToMessageId) : null;
                                    const uploadProgress = uploadingFiles[msg._id];
                                    const sendingFlag = !!msg.isSending;
                                    const blobFlag = typeof msg.fileUrl === 'string' && msg.fileUrl.startsWith('blob:');
                                    const isEditing = msg._id === editingMessageId;
                                    const isEdited = msg.editedAt && !isEditing;
                                    const isRecalled = msg.isRecalled;
                                    const isVideo = msg.type === 'video' || msg.fileUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(msg.fileUrl);
                                    const isMediaOrFile = msg.type === 'image' || msg.type === 'video' || msg.type === 'file' && !isVideo;
                                    const isUploading = isMediaOrFile && (uploadProgress !== undefined || sendingFlag || blobFlag);
                                    const reactions = msg.reactions || {};
                                    const myId = String(currentUser._id);
                                    const hasReactions = Object.values(reactions).some((arr)=>(arr || []).length > 0);
                                    // Group detection
                                    const prevMsg = index > 0 ? msgs[index - 1] : null;
                                    let isGrouped = false;
                                    if (prevMsg && prevMsg.type !== 'notify') {
                                        const prevSender = getSenderInfo(prevMsg.sender);
                                        const now = Number(msg.serverTimestamp ?? msg.timestamp) || 0;
                                        const prev = Number(prevMsg.serverTimestamp ?? prevMsg.timestamp) || 0;
                                        if (prevSender._id === senderInfo._id && now - prev < 5 * 60 * 1000) {
                                            isGrouped = true;
                                        }
                                    }
                                    const nowTs = Number(msg.serverTimestamp ?? msg.timestamp) || 0;
                                    const prevTs = prevMsg != null ? Number(prevMsg.serverTimestamp ?? prevMsg.timestamp) || 0 : null;
                                    const showTimeMarker = prevTs != null && nowTs - prevTs >= 30 * 60 * 1000;
                                    const timeMarkerNode = showTimeMarker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center my-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-4 py-2 text-white  text-xs font-medium  bg-gray-400/60 rounded-full shadow",
                                            children: formatTimeMarker(nowTs)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 279,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                        lineNumber: 278,
                                        columnNumber: 23
                                    }, this) : null;
                                    const unreadDividerNode = null;
                                    const nextMsg = index < msgs.length - 1 ? msgs[index + 1] : null;
                                    let isEndOfGroup = true;
                                    if (nextMsg && nextMsg.type !== 'notify') {
                                        const nextSender = getSenderInfo(nextMsg.sender);
                                        const now = Number(msg.serverTimestamp ?? msg.timestamp) || 0;
                                        const next = Number(nextMsg.serverTimestamp ?? nextMsg.timestamp) || 0;
                                        if (nextSender._id === senderInfo._id && next - now < 5 * 60 * 1000) {
                                            isEndOfGroup = false;
                                        }
                                    }
                                    const canGroupMedia = !isRecalled && (msg.type === 'image' || msg.type === 'video');
                                    if (canGroupMedia) {
                                        const mediaGroup = [
                                            msg
                                        ];
                                        const groupBatchId = msg.batchId;
                                        for(let k = index + 1; k < msgs.length; k++){
                                            const next = msgs[k];
                                            if (next.isRecalled) break;
                                            if (!(next.type === 'image' || next.type === 'video')) break;
                                            const nextSender = getSenderInfo(next.sender);
                                            const dt = Math.abs(Number(next.timestamp) - Number(mediaGroup[mediaGroup.length - 1].timestamp));
                                            const nextBatchId = next.batchId;
                                            if ((groupBatchId || nextBatchId) && groupBatchId !== nextBatchId) break;
                                            if (nextSender._id !== senderInfo._id || dt > 120000) break;
                                            mediaGroup.push(next);
                                        }
                                        if (mediaGroup.length > 1) {
                                            mediaGroup.slice(1).forEach((m)=>consumedIds.add(m._id));
                                            const lastInGroup = mediaGroup[mediaGroup.length - 1];
                                            const isMeGroup = String(senderInfo._id) === String(currentUser._id);
                                            const groupIsLast = lastInGroup._id === messages[messages.length - 1]?._id;
                                            const nextIdx = index + mediaGroup.length;
                                            const nextAfterGroup = nextIdx < msgs.length ? msgs[nextIdx] : null;
                                            let endRun = true;
                                            if (nextAfterGroup && nextAfterGroup.type !== 'notify') {
                                                const nextSender = getSenderInfo(nextAfterGroup.sender);
                                                const lastTs = Number(lastInGroup.serverTimestamp ?? lastInGroup.timestamp) || 0;
                                                const nextTs = Number(nextAfterGroup.serverTimestamp ?? nextAfterGroup.timestamp) || 0;
                                                if (nextSender._id === senderInfo._id && nextTs - lastTs < 5 * 60 * 1000) {
                                                    endRun = false;
                                                }
                                            }
                                            const groupUploading = mediaGroup.some((mm)=>{
                                                const up = uploadingFiles[mm._id] !== undefined;
                                                const sending = !!mm.isSending;
                                                const blob = typeof mm.fileUrl === 'string' && mm.fileUrl.startsWith('blob:');
                                                return up || sending || blob;
                                            });
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    unreadDividerNode,
                                                    timeMarkerNode,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: `msg-${msg._id}`,
                                                        className: `
                      w-full  sm:max-w-[23rem]
                      flex gap-2 group relative
                      ${isMeGroup ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'}
                      ${isGrouped ? 'mt-2' : 'mt-4'}
                      ${groupIsLast ? 'mb-8' : ''}
                    `,
                                                        children: [
                                                            !isMeGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${isGrouped ? 'opacity-0' : ''} flex-shrink-0`,
                                                                children: senderInfo.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-9 h-9 rounded-full overflow-hidden flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        width: 38,
                                                                        height: 38,
                                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(senderInfo.avatar),
                                                                        alt: senderInfo.name,
                                                                        className: "w-full h-full object-cover",
                                                                        unoptimized: String(senderInfo.avatar).includes('mega.nz')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 367,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 37
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/logo/avata.webp",
                                                                        alt: senderInfo.name || 'User',
                                                                        width: 38,
                                                                        height: 38,
                                                                        className: "w-full h-full rounded-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 37
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex flex-col min-w-0 ${isMeGroup ? 'items-end' : 'items-start'}`,
                                                                children: [
                                                                    isGroup && !isGrouped && !isRecalled && !isMeGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm mb-1 px-2 py-1 bg-white rounded-[2rem] ${isMeGroup ? 'text-gray-600' : 'text-gray-600'}`,
                                                                        children: allUsersMap.get(senderInfo._id) || senderInfo.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 391,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: ` px-0 py-0 rounded-lg shadow-none max-w-[70vw] sm:max-w-[22rem] mt-1 bg-transparent relative ${hasReactions ? 'mb-4' : ''}`,
                                                                        style: isMobile && swipeState.id === msg._id ? {
                                                                            transform: `translateX(${Math.max(-100, Math.min(100, swipeState.dx))}px)`
                                                                        } : undefined,
                                                                        onClick: ()=>{
                                                                            setActiveMoreId(msg._id);
                                                                            setReactionDetail(null);
                                                                        },
                                                                        onTouchStart: (e)=>{
                                                                            try {
                                                                                if (isRecalled) return;
                                                                                longPressTriggeredRef.current = false;
                                                                                if (longPressTimerRef.current != null) {
                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                    longPressTimerRef.current = null;
                                                                                }
                                                                                const t = e.touches && e.touches[0];
                                                                                const x0 = t ? t.clientX : 0;
                                                                                const y0 = t ? t.clientY : 0;
                                                                                const el = e.currentTarget;
                                                                                swipeStartRef.current = {
                                                                                    x: x0,
                                                                                    y: y0,
                                                                                    id: msg._id,
                                                                                    isMe: isMeGroup
                                                                                };
                                                                                setSwipeState({
                                                                                    id: null,
                                                                                    dx: 0
                                                                                });
                                                                                setLongPressActiveId(msg._id);
                                                                                longPressTimerRef.current = window.setTimeout(()=>{
                                                                                    longPressTriggeredRef.current = true;
                                                                                    setActiveMoreId(msg._id);
                                                                                    setReactionDetail(null);
                                                                                    onMobileLongPress?.(msg, el, x0, y0);
                                                                                }, 420);
                                                                            } catch  {}
                                                                        },
                                                                        onTouchEnd: (e)=>{
                                                                            try {
                                                                                if (longPressTimerRef.current != null) {
                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                    longPressTimerRef.current = null;
                                                                                }
                                                                                setLongPressActiveId(null);
                                                                                if (longPressTriggeredRef.current) {
                                                                                    e.preventDefault();
                                                                                    e.stopPropagation();
                                                                                }
                                                                                if (isMobile && swipeStartRef.current.id === msg._id) {
                                                                                    const okDir = swipeStartRef.current.isMe ? swipeState.dx < -64 : swipeState.dx > 64;
                                                                                    if (okDir) {
                                                                                        onReplyMessage?.(msg);
                                                                                    }
                                                                                    setSwipeState({
                                                                                        id: null,
                                                                                        dx: 0
                                                                                    });
                                                                                    swipeStartRef.current = {
                                                                                        x: 0,
                                                                                        y: 0,
                                                                                        id: null,
                                                                                        isMe: false
                                                                                    };
                                                                                }
                                                                            } catch  {}
                                                                        },
                                                                        onTouchMove: (e)=>{
                                                                            try {
                                                                                if (longPressTimerRef.current != null) {
                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                    longPressTimerRef.current = null;
                                                                                }
                                                                                setLongPressActiveId(null);
                                                                                if (!isMobile) return;
                                                                                const t = e.touches && e.touches[0];
                                                                                const x = t ? t.clientX : 0;
                                                                                const y = t ? t.clientY : 0;
                                                                                const dx = x - swipeStartRef.current.x;
                                                                                const dy = y - swipeStartRef.current.y;
                                                                                if (swipeStartRef.current.id === msg._id) {
                                                                                    const horizontal = Math.abs(dx) > 8 && Math.abs(dy) < 24;
                                                                                    if (horizontal) {
                                                                                        const dirOk = swipeStartRef.current.isMe ? dx < 0 : dx > 0;
                                                                                        setSwipeState({
                                                                                            id: msg._id,
                                                                                            dx: dirOk ? dx : 0
                                                                                        });
                                                                                        e.preventDefault();
                                                                                    }
                                                                                }
                                                                            } catch  {}
                                                                        },
                                                                        onTouchCancel: ()=>{
                                                                            try {
                                                                                if (longPressTimerRef.current != null) {
                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                    longPressTimerRef.current = null;
                                                                                }
                                                                                setLongPressActiveId(null);
                                                                                if (isMobile && swipeStartRef.current.id === msg._id) {
                                                                                    setSwipeState({
                                                                                        id: null,
                                                                                        dx: 0
                                                                                    });
                                                                                    swipeStartRef.current = {
                                                                                        x: 0,
                                                                                        y: 0,
                                                                                        id: null,
                                                                                        isMe: false
                                                                                    };
                                                                                }
                                                                            } catch  {}
                                                                        },
                                                                        children: [
                                                                            !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            const batchMsg = {
                                                                                                ...msg,
                                                                                                batchItems: mediaGroup.map((m)=>({
                                                                                                        id: m._id,
                                                                                                        content: m.content || '',
                                                                                                        type: m.type === 'video' ? 'video' : 'image',
                                                                                                        fileUrl: m.fileUrl || m.previewUrl,
                                                                                                        fileName: m.fileName
                                                                                                    }))
                                                                                            };
                                                                                            onShareMessage(batchMsg);
                                                                                        },
                                                                                        className: `absolute cursor-pointer top-1/2 -translate-y-1/2 p-1.5 bg-white/90 rounded-full shadow hover:bg-indigo-50 ${isMeGroup ? 'right-full mr-2' : 'left-full ml-2'}`,
                                                                                        "aria-label": "Chia sẻ nhóm media",
                                                                                        title: "Chia sẻ nhóm media",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICShareMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            className: "w-4 h-4 text-indigo-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 514,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 493,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    isMobile && swipeState.id === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `absolute top-1/2 -translate-y-1/2 ${isMeGroup ? 'left-full ml-2' : 'right-full mr-2'}`,
                                                                                        style: {
                                                                                            opacity: Math.min(Math.abs(swipeState.dx) / 64, 1)
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "p-2 bg-white rounded-full shadow border border-gray-200",
                                                                                            children: isMeGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowUturnLeft"], {
                                                                                                className: "w-5 h-5 text-blue-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 523,
                                                                                                columnNumber: 47
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowUturnRight"], {
                                                                                                className: "w-5 h-5 text-blue-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 525,
                                                                                                columnNumber: 47
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 521,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 517,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                onContextMenu(e, msg);
                                                                                            },
                                                                                            className: `absolute cursor-pointer top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMeGroup ? 'right-full mr-10' : 'left-full ml-10'} opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`,
                                                                                            "aria-label": "Mở menu",
                                                                                            title: "Thêm",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                                                                className: "w-4 h-4 text-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 541,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 532,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false),
                                                                                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReactionButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        isMine: isMeGroup,
                                                                                        visible: activeMoreId === msg._id,
                                                                                        onPick: (emoji)=>{
                                                                                            onToggleReaction?.(msg, emoji);
                                                                                            setActiveMoreId(null);
                                                                                        },
                                                                                        className: `${isMeGroup ? 'right-full mr-18' : 'left-full ml-18'} ${activeMoreId === msg._id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 546,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `inline-grid gap-1 rounded-xl overflow-hidden ${isSidebarOpen ? 'sm:grid-cols-[6rem_6rem]' : 'sm:grid-cols-[10rem_10rem]'} grid-cols-[8rem_8rem]`,
                                                                                children: mediaGroup.map((m, idx)=>{
                                                                                    const isVid = m.type === 'video' || m.fileUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(m.fileUrl);
                                                                                    const url = String(m.fileUrl || m.previewUrl || '');
                                                                                    const prog = uploadingFiles[m._id];
                                                                                    const sendingFallback = !!m.isSending;
                                                                                    const blobFallback = String(url).startsWith('blob:');
                                                                                    const up = prog !== undefined || sendingFallback || blobFallback;
                                                                                    const isOddTotal = mediaGroup.length % 2 !== 0;
                                                                                    const isLastItem = idx === mediaGroup.length - 1;
                                                                                    const shouldSpan = isOddTotal && isLastItem;
                                                                                    return isVid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        id: `msg-${m._id}`,
                                                                                        className: `relative bg-black rounded-[0.25rem] overflow-hidden cursor-pointer h-[8rem] ${shouldSpan ? 'col-span-2 w-full' : 'w-[8rem]'}  ${isSidebarOpen ? shouldSpan ? 'sm:w-full sm:h-[6rem] aspect-square' : 'sm:w-[6rem] sm:h-[6rem] aspect-square' : shouldSpan ? 'sm:w-full sm:h-[10rem] sm:aspect-video aspect-square' : 'sm:aspect-video aspect-square sm:h-[10rem] sm:w-[10rem]'} ${highlightedMsgId === m._id ? 'ring-2 ring-yellow-300' : ''} ${longPressActiveId === m._id ? 'ring-2 ring-blue-300 scale-[0.98] transition-transform' : ''}`,
                                                                                        onClick: ()=>!up && onOpenMedia(String(m.fileUrl), 'video'),
                                                                                        onContextMenu: (e)=>{
                                                                                            e.preventDefault();
                                                                                            e.stopPropagation();
                                                                                            onContextMenu(e, m);
                                                                                        },
                                                                                        onTouchStart: (e)=>{
                                                                                            try {
                                                                                                e.stopPropagation();
                                                                                                if (m.isRecalled) return;
                                                                                                longPressTriggeredRef.current = false;
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                const t = e.touches && e.touches[0];
                                                                                                const x0 = t ? t.clientX : 0;
                                                                                                const y0 = t ? t.clientY : 0;
                                                                                                const el = e.currentTarget;
                                                                                                swipeStartRef.current = {
                                                                                                    x: x0,
                                                                                                    y: y0,
                                                                                                    id: msg._id,
                                                                                                    isMe: isMeGroup
                                                                                                };
                                                                                                setSwipeState({
                                                                                                    id: null,
                                                                                                    dx: 0
                                                                                                });
                                                                                                setLongPressActiveId(m._id);
                                                                                                longPressTimerRef.current = window.setTimeout(()=>{
                                                                                                    longPressTriggeredRef.current = true;
                                                                                                    setActiveMoreId(m._id);
                                                                                                    setReactionDetail(null);
                                                                                                    onMobileLongPress?.(m, el, x0, y0);
                                                                                                }, 420);
                                                                                            } catch  {}
                                                                                        },
                                                                                        onTouchEnd: (e)=>{
                                                                                            try {
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                setLongPressActiveId(null);
                                                                                                if (longPressTriggeredRef.current) {
                                                                                                    e.preventDefault();
                                                                                                    e.stopPropagation();
                                                                                                }
                                                                                            } catch  {}
                                                                                        },
                                                                                        onTouchMove: ()=>{
                                                                                            try {
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                setLongPressActiveId(null);
                                                                                            } catch  {}
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                                                                                                className: "w-full h-full object-cover",
                                                                                                playsInline: true,
                                                                                                preload: "metadata"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 643,
                                                                                                columnNumber: 43
                                                                                            }, this),
                                                                                            !up && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute inset-0 flex items-center justify-center opacity-100",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlay"], {
                                                                                                        className: "w-5 h-5 text-blue-600 ml-0.5"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 653,
                                                                                                        columnNumber: 49
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 652,
                                                                                                    columnNumber: 47
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 651,
                                                                                                columnNumber: 45
                                                                                            }, this),
                                                                                            up && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute inset-0 bg-black/60 text-white flex items-center justify-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-6 h-6 border-2 border-white/60 border-t-transparent rounded-full animate-spin"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                            lineNumber: 660,
                                                                                                            columnNumber: 49
                                                                                                        }, this),
                                                                                                        prog !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-sm font-semibold",
                                                                                                            children: [
                                                                                                                Math.round(prog),
                                                                                                                "%"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                            lineNumber: 662,
                                                                                                            columnNumber: 51
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 659,
                                                                                                    columnNumber: 47
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 658,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        ]
                                                                                    }, `${m._id}-${idx}`, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 578,
                                                                                        columnNumber: 41
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        id: `msg-${m._id}`,
                                                                                        className: `relative rounded-[0.25rem] overflow-hidden cursor-pointer hover:bg-gray-100 shadow-sm h-[8rem] ${shouldSpan ? 'col-span-2 w-full' : 'w-[8rem]'} ${isSidebarOpen ? shouldSpan ? 'sm:w-full sm:h-[6rem]' : 'sm:w-[6rem] sm:h-[6rem]' : shouldSpan ? 'sm:w-full sm:h-[10rem]' : 'sm:w-[10rem] sm:h-[10rem]'} ${highlightedMsgId === m._id ? 'ring-2 ring-yellow-300' : ''} ${longPressActiveId === m._id ? 'ring-2 ring-blue-300 scale-[0.98] transition-transform' : ''}`,
                                                                                        onClick: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            if (!up) onOpenMedia(String(m.fileUrl || m.previewUrl || ''), 'image');
                                                                                        },
                                                                                        onContextMenu: (e)=>{
                                                                                            e.preventDefault();
                                                                                            e.stopPropagation();
                                                                                            onContextMenu(e, m);
                                                                                        },
                                                                                        onTouchStart: (e)=>{
                                                                                            try {
                                                                                                e.stopPropagation();
                                                                                                if (m.isRecalled) return;
                                                                                                longPressTriggeredRef.current = false;
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                const t = e.touches && e.touches[0];
                                                                                                const x0 = t ? t.clientX : 0;
                                                                                                const y0 = t ? t.clientY : 0;
                                                                                                const el = e.currentTarget;
                                                                                                swipeStartRef.current = {
                                                                                                    x: x0,
                                                                                                    y: y0,
                                                                                                    id: msg._id,
                                                                                                    isMe: isMeGroup
                                                                                                };
                                                                                                setSwipeState({
                                                                                                    id: null,
                                                                                                    dx: 0
                                                                                                });
                                                                                                setLongPressActiveId(m._id);
                                                                                                longPressTimerRef.current = window.setTimeout(()=>{
                                                                                                    longPressTriggeredRef.current = true;
                                                                                                    setActiveMoreId(m._id);
                                                                                                    setReactionDetail(null);
                                                                                                    onMobileLongPress?.(m, el, x0, y0);
                                                                                                }, 420);
                                                                                            } catch  {}
                                                                                        },
                                                                                        onTouchEnd: (e)=>{
                                                                                            try {
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                setLongPressActiveId(null);
                                                                                                if (longPressTriggeredRef.current) {
                                                                                                    e.preventDefault();
                                                                                                    e.stopPropagation();
                                                                                                }
                                                                                            } catch  {}
                                                                                        },
                                                                                        onTouchMove: ()=>{
                                                                                            try {
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                setLongPressActiveId(null);
                                                                                            } catch  {}
                                                                                        },
                                                                                        children: [
                                                                                            String(url).startsWith('blob:') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                width: 600,
                                                                                                height: 600,
                                                                                                src: url,
                                                                                                alt: "Ảnh",
                                                                                                className: "w-full h-full object-cover"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 740,
                                                                                                columnNumber: 45
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                width: 600,
                                                                                                height: 600,
                                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                                                                                                alt: "Ảnh",
                                                                                                className: "w-full h-full object-cover"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 748,
                                                                                                columnNumber: 45
                                                                                            }, this),
                                                                                            up && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute inset-0 bg-black/70 flex items-center justify-center",
                                                                                                children: (()=>{
                                                                                                    const size = 40;
                                                                                                    const stroke = 4;
                                                                                                    const r = (size - stroke) / 2;
                                                                                                    const c = 2 * Math.PI * r;
                                                                                                    const p = Math.max(0, Math.min(100, Number(prog || 0)));
                                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-col items-center",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                            width: size,
                                                                                                            height: size,
                                                                                                            viewBox: `0 0 ${size} ${size}`,
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                                    cx: size / 2,
                                                                                                                    cy: size / 2,
                                                                                                                    r: r,
                                                                                                                    stroke: "rgba(255,255,255,0.3)",
                                                                                                                    strokeWidth: stroke,
                                                                                                                    fill: "none"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                    lineNumber: 768,
                                                                                                                    columnNumber: 55
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                                    cx: size / 2,
                                                                                                                    cy: size / 2,
                                                                                                                    r: r,
                                                                                                                    stroke: "white",
                                                                                                                    strokeWidth: stroke,
                                                                                                                    fill: "none",
                                                                                                                    strokeDasharray: c,
                                                                                                                    strokeDashoffset: c - p / 100 * c,
                                                                                                                    strokeLinecap: "round",
                                                                                                                    transform: `rotate(-90 ${size / 2} ${size / 2})`
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                    lineNumber: 776,
                                                                                                                    columnNumber: 55
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                            lineNumber: 767,
                                                                                                            columnNumber: 53
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 766,
                                                                                                        columnNumber: 51
                                                                                                    }, this);
                                                                                                })()
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 758,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        ]
                                                                                    }, `${m._id}-${idx}`, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 671,
                                                                                        columnNumber: 41
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 562,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            (()=>{
                                                                                const items = Object.entries(reactions).map(([emoji, arr])=>({
                                                                                        emoji,
                                                                                        count: (arr || []).length,
                                                                                        mine: (arr || []).includes(myId),
                                                                                        users: (arr || []).map((id)=>allUsersMap.get(String(id)) || 'Người dùng')
                                                                                    })).filter((x)=>x.count > 0).sort((a, b)=>b.count - a.count);
                                                                                if (items.length === 0) return null;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `absolute ${isMeGroup ? 'right-2 -mr-1' : 'left-2 -ml-1'} bottom-1 flex items-center gap-1`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center bg-white rounded-full shadow-lg border border-gray-200",
                                                                                            children: [
                                                                                                items.slice(0, 3).map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        onClick: (e)=>{
                                                                                                            e.stopPropagation();
                                                                                                            setReactionDetail(reactionDetail?.msgId === msg._id && reactionDetail?.emoji === it.emoji ? null : {
                                                                                                                msgId: msg._id,
                                                                                                                emoji: it.emoji
                                                                                                            });
                                                                                                        },
                                                                                                        className: `flex items-center gap-0.5 py-0.5 rounded-full text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 active:scale-95 ${it.mine ? 'bg-blue-50' : 'bg-transparent'}`,
                                                                                                        title: `${it.count} người`,
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-lg leading-none",
                                                                                                                children: it.emoji
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 830,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            it.count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: `text-xs font-medium ${it.mine ? 'text-blue-600' : 'text-gray-600'}`,
                                                                                                                children: it.count
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 832,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, `${msg._id}-react-group-${idx}`, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 816,
                                                                                                        columnNumber: 45
                                                                                                    }, this)),
                                                                                                items.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "px-2 text-xs text-gray-500 font-medium",
                                                                                                    children: [
                                                                                                        "+",
                                                                                                        items.length - 3
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 841,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 814,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 846,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 811,
                                                                                    columnNumber: 39
                                                                                }, this);
                                                                            })(),
                                                                            reactionDetail && reactionDetail.msgId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "fixed inset-0 z-30",
                                                                                        onClick: ()=>setReactionDetail(null)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 852,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        ref: (el)=>{
                                                                                            if (el && reactionDetail.msgId === msg._id) {
                                                                                                const rect = el.parentElement?.getBoundingClientRect();
                                                                                                if (rect) {
                                                                                                    const spaceBelow = window.innerHeight - rect.bottom;
                                                                                                    const spaceAbove = rect.top;
                                                                                                    const popoverHeight = 250;
                                                                                                    if (spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
                                                                                                        el.style.bottom = '100%';
                                                                                                        el.style.top = 'auto';
                                                                                                        el.style.marginBottom = '0.625rem';
                                                                                                        el.style.marginTop = '0';
                                                                                                    } else {
                                                                                                        el.style.top = '100%';
                                                                                                        el.style.bottom = 'auto';
                                                                                                        el.style.marginTop = '0.625rem';
                                                                                                        el.style.marginBottom = '0';
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        className: `absolute ${isMeGroup ? 'right-2' : 'left-2'} z-40`,
                                                                                        children: (()=>{
                                                                                            const users = (reactions[reactionDetail.emoji] || []).map((id)=>allUsersMap.get(String(id)) || String(id));
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "min-w-[11.25rem] max-w-[15rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl animate-in fade-in zoom-in-95 duration-200",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-2 mb-2 pb-2 border-b border-gray-100",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-2xl",
                                                                                                                children: reactionDetail.emoji
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 884,
                                                                                                                columnNumber: 49
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-sm font-semibold text-gray-700",
                                                                                                                children: [
                                                                                                                    users.length,
                                                                                                                    " người"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 885,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 883,
                                                                                                        columnNumber: 47
                                                                                                    }, this),
                                                                                                    users.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                        className: "space-y-1.5 max-h-48 overflow-y-auto",
                                                                                                        children: users.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                className: "text-sm text-gray-700 py-1 hover:text-blue-600 transition-colors",
                                                                                                                children: name
                                                                                                            }, `${msg._id}-user-group-${idx}`, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 892,
                                                                                                                columnNumber: 53
                                                                                                            }, this))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 890,
                                                                                                        columnNumber: 49
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-sm text-gray-500 py-1",
                                                                                                        children: "Chưa có ai"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 901,
                                                                                                        columnNumber: 49
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 882,
                                                                                                columnNumber: 45
                                                                                            }, this);
                                                                                        })()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 853,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true),
                                                                            endRun && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `text-xs mt-2 ${isMeGroup ? 'text-gray-700' : 'text-gray-500'}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-block px-2 py-1 bg-white rounded-[2rem]",
                                                                                    children: formatTimestamp(Number(lastInGroup.serverTimestamp ?? lastInGroup.timestamp) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 911,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 910,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReadStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        message: lastInGroup,
                                                                        isGroup: isGroup,
                                                                        isRecalled: !!lastInGroup.isRecalled,
                                                                        isMine: isMeGroup,
                                                                        isLast: groupIsLast,
                                                                        myId: myId,
                                                                        allUsersMap: allUsersMap,
                                                                        getSenderInfo: getSenderInfo,
                                                                        isMobile: isMobile,
                                                                        isUploading: groupUploading
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, `group-${msg._id}`, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `group-${msg._id}-frag`, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 349,
                                                columnNumber: 27
                                            }, this);
                                        }
                                    }
                                    const canGroupFiles = !isRecalled && msg.type === 'file' && !isVideo;
                                    if (canGroupFiles) {
                                        const fileGroup = [
                                            msg
                                        ];
                                        for(let k = index + 1; k < msgs.length; k++){
                                            const next = msgs[k];
                                            if (next.isRecalled) break;
                                            const nextIsFile = next.type === 'file' && !(next.fileUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(next.fileUrl));
                                            if (!nextIsFile) break;
                                            const nextSender = getSenderInfo(next.sender);
                                            const dt = Math.abs(Number(next.timestamp) - Number(fileGroup[fileGroup.length - 1].timestamp));
                                            if (nextSender._id !== senderInfo._id || dt > 120000) break;
                                            fileGroup.push(next);
                                        }
                                        if (fileGroup.length > 1) {
                                            fileGroup.slice(1).forEach((m)=>consumedIds.add(m._id));
                                            const lastInGroup = fileGroup[fileGroup.length - 1];
                                            const isMeGroup = String(senderInfo._id) === String(currentUser._id);
                                            const groupIsLast = lastInGroup._id === messages[messages.length - 1]?._id;
                                            const nextIdx = index + fileGroup.length;
                                            const nextAfterGroup = nextIdx < msgs.length ? msgs[nextIdx] : null;
                                            let endRun = true;
                                            if (nextAfterGroup && nextAfterGroup.type !== 'notify') {
                                                const nextSender = getSenderInfo(nextAfterGroup.sender);
                                                const lastTs = Number(lastInGroup.serverTimestamp ?? lastInGroup.timestamp) || 0;
                                                const nextTs = Number(nextAfterGroup.serverTimestamp ?? nextAfterGroup.timestamp) || 0;
                                                if (nextSender._id === senderInfo._id && nextTs - lastTs < 5 * 60 * 1000) {
                                                    endRun = false;
                                                }
                                            }
                                            const groupUploading = fileGroup.some((mm)=>{
                                                const up = uploadingFiles[mm._id] !== undefined;
                                                const sending = !!mm.isSending;
                                                const blob = typeof mm.fileUrl === 'string' && mm.fileUrl.startsWith('blob:');
                                                return up || sending || blob;
                                            });
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    unreadDividerNode,
                                                    timeMarkerNode,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: `msg-${msg._id}`,
                                                        className: `
                      w-full  sm:max-w-[23rem]
                      flex gap-2 group relative
                      ${isMeGroup ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'}
                      ${isGrouped ? 'mt-2' : 'mt-4'}
                      ${groupIsLast ? 'mb-8' : ''}
                    `,
                                                        children: [
                                                            !isMeGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${isGrouped ? 'opacity-0' : ''} flex-shrink-0`,
                                                                children: senderInfo.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-9 h-9 rounded-full overflow-hidden flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        width: 38,
                                                                        height: 38,
                                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(senderInfo.avatar),
                                                                        alt: senderInfo.name,
                                                                        className: "w-full h-full object-cover",
                                                                        unoptimized: String(senderInfo.avatar).includes('mega.nz')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1003,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 1002,
                                                                    columnNumber: 37
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/logo/avata.webp",
                                                                        alt: senderInfo.name || 'User',
                                                                        width: 38,
                                                                        height: 38,
                                                                        className: "w-full h-full rounded-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1014,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 37
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1000,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex flex-col min-w-0 ${isMeGroup ? '' : 'items-start'}`,
                                                                children: [
                                                                    isGroup && !isGrouped && !isRecalled && !isMeGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm  px-2  ${isMeGroup ? 'text-gray-600' : 'text-gray-600'}`,
                                                                        children: allUsersMap.get(senderInfo._id) || senderInfo.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1027,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `py-2 rounded-lg max-w-[70vw] sm:max-w-[18rem] mt-1  relative ${hasReactions ? 'mb-4' : ''}`,
                                                                        onClick: ()=>{
                                                                            setActiveMoreId(msg._id);
                                                                            setReactionDetail(null);
                                                                        },
                                                                        children: [
                                                                            !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                onContextMenu(e, msg);
                                                                                            },
                                                                                            className: `absolute top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMeGroup ? 'right-full mr-2' : 'left-full ml-2'} opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`,
                                                                                            "aria-label": "Mở menu",
                                                                                            title: "Thêm",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                                                                className: "w-4 h-4 text-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 1051,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 1042,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false),
                                                                                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReactionButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        isMine: isMeGroup,
                                                                                        visible: activeMoreId === msg._id,
                                                                                        onPick: (emoji)=>{
                                                                                            onToggleReaction?.(msg, emoji);
                                                                                            setActiveMoreId(null);
                                                                                        },
                                                                                        className: `${isMeGroup ? 'right-full mr-10' : 'left-full ml-10'} ${activeMoreId === msg._id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 1056,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: fileGroup.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        id: `msg-${m._id}`,
                                                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(String(m.fileUrl || ''), true),
                                                                                        download: m.fileName || 'download',
                                                                                        target: "_blank",
                                                                                        rel: "noreferrer",
                                                                                        className: `relative flex items-center bg-white gap-3 p-2 rounded-xl border cursor-pointer ${highlightedMsgId === m._id ? 'bg-yellow-50 border-yellow-300' : 'border-gray-200 hover:bg-gray-50'} ${longPressActiveId === m._id ? 'ring-2 ring-blue-300 scale-[0.98] transition-transform' : ''}`,
                                                                                        onClick: (e)=>{
                                                                                            const prog = uploadingFiles[m._id];
                                                                                            if (prog !== undefined) e.preventDefault();
                                                                                        },
                                                                                        onContextMenu: (e)=>{
                                                                                            e.preventDefault();
                                                                                            e.stopPropagation();
                                                                                            onContextMenu(e, m);
                                                                                        },
                                                                                        onTouchStart: (e)=>{
                                                                                            try {
                                                                                                if (m.isRecalled) return;
                                                                                                longPressTriggeredRef.current = false;
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                const t = e.touches && e.touches[0];
                                                                                                const x0 = t ? t.clientX : 0;
                                                                                                const y0 = t ? t.clientY : 0;
                                                                                                const el = e.currentTarget;
                                                                                                setLongPressActiveId(m._id);
                                                                                                longPressTimerRef.current = window.setTimeout(()=>{
                                                                                                    longPressTriggeredRef.current = true;
                                                                                                    setActiveMoreId(m._id);
                                                                                                    setReactionDetail(null);
                                                                                                    onMobileLongPress?.(m, el, x0, y0);
                                                                                                }, 420);
                                                                                            } catch  {}
                                                                                        },
                                                                                        onTouchEnd: (e)=>{
                                                                                            try {
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                setLongPressActiveId(null);
                                                                                                if (longPressTriggeredRef.current) {
                                                                                                    e.preventDefault();
                                                                                                    e.stopPropagation();
                                                                                                }
                                                                                            } catch  {}
                                                                                        },
                                                                                        onTouchMove: ()=>{
                                                                                            try {
                                                                                                if (longPressTimerRef.current != null) {
                                                                                                    clearTimeout(longPressTimerRef.current);
                                                                                                    longPressTimerRef.current = null;
                                                                                                }
                                                                                                setLongPressActiveId(null);
                                                                                            } catch  {}
                                                                                        },
                                                                                        "aria-disabled": uploadingFiles[m._id] !== undefined ? true : undefined,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "p-2 bg-blue-600 rounded-xl",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineDocumentText"], {
                                                                                                    className: "w-5 h-5 text-white"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 1141,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 1140,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex-1 min-w-0",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-sm font-semibold text-gray-800 truncate",
                                                                                                        children: m.fileName || 'Tệp đính kèm'
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1144,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-xs text-gray-500 truncate",
                                                                                                        children: "Nhấn để tải xuống"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1147,
                                                                                                        columnNumber: 43
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 1143,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            uploadingFiles[m._id] !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute inset-0 bg-black/60 text-white flex items-center justify-center",
                                                                                                children: (()=>{
                                                                                                    const size = 32;
                                                                                                    const stroke = 3;
                                                                                                    const r = (size - stroke) / 2;
                                                                                                    const c = 2 * Math.PI * r;
                                                                                                    const p = Math.max(0, Math.min(100, Number(uploadingFiles[m._id] || 0)));
                                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-col items-center",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                width: size,
                                                                                                                height: size,
                                                                                                                viewBox: `0 0 ${size} ${size}`,
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                                        cx: size / 2,
                                                                                                                        cy: size / 2,
                                                                                                                        r: r,
                                                                                                                        stroke: "rgba(255,255,255,0.35)",
                                                                                                                        strokeWidth: stroke,
                                                                                                                        fill: "none"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                        lineNumber: 1160,
                                                                                                                        columnNumber: 53
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                                        cx: size / 2,
                                                                                                                        cy: size / 2,
                                                                                                                        r: r,
                                                                                                                        stroke: "white",
                                                                                                                        strokeWidth: stroke,
                                                                                                                        fill: "none",
                                                                                                                        strokeDasharray: c,
                                                                                                                        strokeDashoffset: c - p / 100 * c,
                                                                                                                        strokeLinecap: "round",
                                                                                                                        transform: `rotate(-90 ${size / 2} ${size / 2})`
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                        lineNumber: 1168,
                                                                                                                        columnNumber: 53
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1159,
                                                                                                                columnNumber: 51
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-xs font-semibold mt-1",
                                                                                                                children: [
                                                                                                                    Math.round(p),
                                                                                                                    "%"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1181,
                                                                                                                columnNumber: 51
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1158,
                                                                                                        columnNumber: 49
                                                                                                    }, this);
                                                                                                })()
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 1150,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        ]
                                                                                    }, `${m._id}-${idx}`, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 1074,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1072,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            (()=>{
                                                                                const items = Object.entries(reactions).map(([emoji, arr])=>({
                                                                                        emoji,
                                                                                        count: (arr || []).length,
                                                                                        mine: (arr || []).includes(myId),
                                                                                        users: (arr || []).map((id)=>allUsersMap.get(String(id)) || 'Người dùng')
                                                                                    })).filter((x)=>x.count > 0).sort((a, b)=>b.count - a.count);
                                                                                if (items.length === 0) return null;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `absolute ${isMeGroup ? 'right-2 -mr-1' : 'left-2 -ml-1'} bottom-1 flex items-center gap-1`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center bg-white rounded-full shadow-lg border border-gray-200",
                                                                                            children: [
                                                                                                items.slice(0, 3).map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        onClick: (e)=>{
                                                                                                            e.stopPropagation();
                                                                                                            setReactionDetail(reactionDetail?.msgId === msg._id && reactionDetail?.emoji === it.emoji ? null : {
                                                                                                                msgId: msg._id,
                                                                                                                emoji: it.emoji
                                                                                                            });
                                                                                                        },
                                                                                                        className: `flex items-center gap-0.5 py-0.5 rounded-full text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 active:scale-95 ${it.mine ? 'bg-blue-50' : 'bg-transparent'}`,
                                                                                                        title: `${it.count} người`,
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-lg leading-none",
                                                                                                                children: it.emoji
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1221,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            it.count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: `text-xs font-medium ${it.mine ? 'text-blue-600' : 'text-gray-600'}`,
                                                                                                                children: it.count
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1223,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, `${msg._id}-react-filegroup-${idx}`, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1207,
                                                                                                        columnNumber: 45
                                                                                                    }, this)),
                                                                                                items.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "px-2 text-xs text-gray-500 font-medium",
                                                                                                    children: [
                                                                                                        "+",
                                                                                                        items.length - 3
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 1232,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 1205,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 1237,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1202,
                                                                                    columnNumber: 39
                                                                                }, this);
                                                                            })(),
                                                                            reactionDetail && reactionDetail.msgId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "fixed inset-0 z-30",
                                                                                        onClick: ()=>setReactionDetail(null)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 1243,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        ref: (el)=>{
                                                                                            if (el && reactionDetail.msgId === msg._id) {
                                                                                                const rect = el.parentElement?.getBoundingClientRect();
                                                                                                if (rect) {
                                                                                                    const spaceBelow = window.innerHeight - rect.bottom;
                                                                                                    const spaceAbove = rect.top;
                                                                                                    const popoverHeight = 250;
                                                                                                    if (spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
                                                                                                        el.style.bottom = '100%';
                                                                                                        el.style.top = 'auto';
                                                                                                        el.style.marginBottom = '0.625rem';
                                                                                                        el.style.marginTop = '0';
                                                                                                    } else {
                                                                                                        el.style.top = '100%';
                                                                                                        el.style.bottom = 'auto';
                                                                                                        el.style.marginTop = '0.625rem';
                                                                                                        el.style.marginBottom = '0';
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        className: `absolute ${isMeGroup ? 'right-2' : 'left-2'} z-40`,
                                                                                        children: (()=>{
                                                                                            const users = (reactions[reactionDetail.emoji] || []).map((id)=>allUsersMap.get(String(id)) || String(id));
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "min-w-[11.25rem] max-w-[15rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl animate-in fade-in zoom-in-95 duration-200",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-2 mb-2 pb-2 border-b border-gray-100",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-2xl",
                                                                                                                children: reactionDetail.emoji
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1275,
                                                                                                                columnNumber: 49
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-sm font-semibold text-gray-700",
                                                                                                                children: [
                                                                                                                    users.length,
                                                                                                                    " người"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1276,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1274,
                                                                                                        columnNumber: 47
                                                                                                    }, this),
                                                                                                    users.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                        className: "space-y-1.5 max-h-48 overflow-y-auto",
                                                                                                        children: users.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                className: "text-sm text-gray-700 py-1 hover:text-blue-600 transition-colors",
                                                                                                                children: name
                                                                                                            }, `${msg._id}-user-filegroup-${idx}`, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 1283,
                                                                                                                columnNumber: 53
                                                                                                            }, this))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1281,
                                                                                                        columnNumber: 49
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-sm text-gray-500 py-1",
                                                                                                        children: "Chưa có ai"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 1292,
                                                                                                        columnNumber: 49
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 1273,
                                                                                                columnNumber: 45
                                                                                            }, this);
                                                                                        })()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 1244,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true),
                                                                            endRun && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `text-xs mt-2 block ${isMeGroup ? 'text-gray-700' : 'text-gray-500'} flex items-center gap-2`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: formatTimestamp(Number(lastInGroup.serverTimestamp ?? lastInGroup.timestamp) || 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1304,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1301,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1031,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReadStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        message: lastInGroup,
                                                                        isGroup: isGroup,
                                                                        isRecalled: !!lastInGroup.isRecalled,
                                                                        isMine: isMeGroup,
                                                                        isLast: groupIsLast,
                                                                        myId: myId,
                                                                        allUsersMap: allUsersMap,
                                                                        getSenderInfo: getSenderInfo,
                                                                        isMobile: isMobile,
                                                                        isUploading: groupUploading
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1315,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1025,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, `group-file-${msg._id}`, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `group-file-${msg._id}-frag`, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 985,
                                                columnNumber: 27
                                            }, this);
                                        }
                                    }
                                    // Notify message
                                    if (msg.type === 'notify') {
                                        const isCall = !!msg.callType;
                                        const rawContentLower = (msg.content || '').toLowerCase();
                                        const isReminder = rawContentLower.includes('đến giờ lịch hẹn') || rawContentLower.includes('đã tạo lịch hẹn');
                                        if (!isCall && !isReminder) {
                                            const prev = index > 0 ? msgs[index - 1] : null;
                                            const prevIsNotify = prev?.type === 'notify';
                                            const prevIsCall = prevIsNotify && !!prev.callType;
                                            const prevContentLower = (prev?.content || '').toLowerCase();
                                            const prevIsReminder = prevIsNotify && (prevContentLower.includes('đến giờ lịch hẹn') || prevContentLower.includes('đã tạo lịch hẹn'));
                                            if (prevIsNotify && !prevIsCall && !prevIsReminder) {
                                            // Skip grouping check if previous was a non-call notify
                                            } else {
                                                const notifyGroup = [
                                                    msg
                                                ];
                                                for(let k = index + 1; k < msgs.length; k++){
                                                    const next = msgs[k];
                                                    if (next.type !== 'notify') break;
                                                    const nextIsCall = !!next.callType;
                                                    const nextContentLower = (next.content || '').toLowerCase();
                                                    const nextIsReminder = nextContentLower.includes('đến giờ lịch hẹn') || nextContentLower.includes('đã tạo lịch hẹn');
                                                    if (nextIsCall || nextIsReminder) break;
                                                    notifyGroup.push(next);
                                                }
                                                if (notifyGroup.length >= 3) {
                                                    const groupId = msg._id;
                                                    const isExpanded = expandedNotifyGroups.has(groupId);
                                                    if (!isExpanded) {
                                                        notifyGroup.slice(1).forEach((m)=>consumedIds.add(m._id));
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center my-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newSet = new Set(expandedNotifyGroups);
                                                                    newSet.add(groupId);
                                                                    setExpandedNotifyGroups(newSet);
                                                                },
                                                                className: "px-4 py-1.5 bg-white text-xs font-medium text-blue-600 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all cursor-pointer",
                                                                children: "Xem cập nhật trước"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1377,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, `group-notify-${groupId}`, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1376,
                                                            columnNumber: 33
                                                        }, this);
                                                    }
                                                }
                                            }
                                        }
                                        if (msg.callType) {
                                            // Group consecutive call notify messages and collapse if many
                                            const prev = index > 0 ? msgs[index - 1] : null;
                                            const prevIsNotify = prev?.type === 'notify';
                                            const prevIsCall = prevIsNotify && !!prev.callType;
                                            if (!prevIsCall) {
                                                const callGroup = [
                                                    msg
                                                ];
                                                for(let k = index + 1; k < msgs.length; k++){
                                                    const next = msgs[k];
                                                    if (next.type !== 'notify') break;
                                                    const nextIsCall = !!next.callType;
                                                    if (!nextIsCall) break;
                                                    callGroup.push(next);
                                                }
                                                if (callGroup.length >= 3) {
                                                    const groupId = msg._id;
                                                    const isExpanded = expandedNotifyGroups.has(groupId);
                                                    if (!isExpanded) {
                                                        callGroup.slice(1).forEach((m)=>consumedIds.add(m._id));
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center my-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newSet = new Set(expandedNotifyGroups);
                                                                    newSet.add(groupId);
                                                                    setExpandedNotifyGroups(newSet);
                                                                },
                                                                className: "px-4 py-1.5 bg-white text-xs font-medium text-blue-600 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all cursor-pointer",
                                                                children: "Xem thông báo cuộc gọi trước"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1415,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, `group-notify-call-${groupId}`, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1414,
                                                            columnNumber: 33
                                                        }, this);
                                                    }
                                                }
                                            }
                                            const callType = msg.callType === 'video' ? 'video' : 'voice';
                                            const calleeId = msg.calleeId || '';
                                            const status = msg.callStatus || 'answered';
                                            const dur = Number(msg.callDurationSec || 0);
                                            const incoming = String(currentUser._id) === String(calleeId);
                                            const iconType = callType === 'video' ? status === 'rejected' || status === 'timeout' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiVideoCamera"], {
                                                className: "w-4 h-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1441,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiVideoCamera"], {
                                                className: "w-4 h-4 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1443,
                                                columnNumber: 31
                                            }, this) : status === 'rejected' || status === 'timeout' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                                className: "w-4 h-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1446,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhone"], {
                                                className: "w-4 h-4 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1448,
                                                columnNumber: 29
                                            }, this);
                                            const iconDir = incoming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowDown"], {
                                                className: "w-4 h-4 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1451,
                                                columnNumber: 27
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowUp"], {
                                                className: "w-4 h-4 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1453,
                                                columnNumber: 27
                                            }, this);
                                            const title = `Cuộc gọi ${callType === 'video' ? 'video' : 'thoại'} ${incoming ? 'đến' : 'đi'}`;
                                            const detail = status === 'answered' ? `${Math.floor(dur / 60)} phút ${Math.floor(dur % 60)} giây` : status === 'rejected' ? 'Bị từ chối' : incoming ? 'Nhỡ' : 'Không phản hồi';
                                            const dt = new Date(msg.timestamp);
                                            const today = new Date();
                                            const yesterday = new Date();
                                            yesterday.setDate(today.getDate() - 1);
                                            const sameDate = (a, b)=>a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
                                            const dateLabel = sameDate(dt, today) ? 'Hôm nay' : sameDate(dt, yesterday) ? 'Hôm qua' : dt.toLocaleDateString('vi-VN', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric'
                                            });
                                            const timeLabel = dt.toLocaleTimeString('vi-VN', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            });
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    unreadDividerNode,
                                                    timeMarkerNode,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: `msg-${msg._id}`,
                                                        "data-message-id": msg._id,
                                                        className: "flex justify-center my-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `px-4 p-1.5  bg-white rounded-full max-w-[80vw]  sm:max-w-[28rem] overflow-hidden ${highlightedMsgId === msg._id ? 'bg-yellow-50' : 'bg-gray-100'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    iconType,
                                                                    iconDir,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-500 truncate",
                                                                                children: `${title} – ${detail}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1495,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-500 truncate",
                                                                                children: ` ${dateLabel} • ${timeLabel}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1496,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1494,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1491,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1488,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, msg._id, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1482,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `notify-call-${msg._id}-frag`, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1479,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        const related = msg.replyToMessageId ? messages.find((m)=>m._id === msg.replyToMessageId) : null;
                                        const rawDisplay = msg.content || '';
                                        const rawLower = rawDisplay.trim().toLowerCase();
                                        const isJoinByLink = rawLower.includes('tham gia nhóm');
                                        let display = rawDisplay;
                                        if (!isJoinByLink && isMe) {
                                            const myName = currentUser.name || '';
                                            const trimmedLower = display.trim().toLowerCase();
                                            if (!trimmedLower.startsWith('bạn') && myName && display.startsWith(myName)) {
                                                display = 'Bạn' + display.slice(myName.length);
                                            } else if (display.startsWith('Một thành viên')) {
                                                display = 'Bạn' + display.slice('Một thành viên'.length);
                                            }
                                        }
                                        const contentLower = display.toLowerCase();
                                        const isCreate = contentLower.includes('đã tạo lịch hẹn');
                                        const isDue = contentLower.includes('đến giờ lịch hẹn');
                                        const isEdit = contentLower.includes('đã chỉnh sửa') || contentLower.includes('chỉnh sửa');
                                        const isDelete = contentLower.includes('đã xóa') || contentLower.includes('xóa');
                                        const isPoll = related?.type === 'poll' || contentLower.includes('bình chọn');
                                        const isPin = contentLower.includes('ghim');
                                        // Group actions
                                        const isInvite = contentLower.includes('đã thêm') || contentLower.includes('mời') && contentLower.includes('vào nhóm');
                                        const isLeave = contentLower.includes('đã rời nhóm');
                                        const isPromote = contentLower.includes('bổ nhiệm') || contentLower.includes('phó nhóm');
                                        const isDemote = contentLower.includes('hủy quyền phó nhóm') || contentLower.includes('bãi nhiệm');
                                        const isKick = contentLower.includes('ra khỏi nhóm') || contentLower.includes('xóa khỏi nhóm');
                                        const isCreateGroup = contentLower.includes('tạo nhóm');
                                        const isRenameGroup = contentLower.includes('đổi tên nhóm') || contentLower.includes('đã đổi tên nhóm');
                                        const isNickname = contentLower.includes('biệt danh');
                                        const isChangeAvatar = contentLower.includes('ảnh đại diện') || contentLower.includes('đổi ảnh');
                                        const icon = isDue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineClock"], {
                                            className: "w-4 h-4 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1574,
                                            columnNumber: 25
                                        }, this) : isCreate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineClock"], {
                                            className: "w-4 h-4 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 25
                                        }, this) : isPoll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiChartBar"], {
                                            className: "w-4 h-4 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1578,
                                            columnNumber: 25
                                        }, this) : isPin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiMapPin"], {
                                            className: "w-4 h-4 text-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1580,
                                            columnNumber: 25
                                        }, this) : isRenameGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPencil"], {
                                            className: "w-4 h-4 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 25
                                        }, this) : isNickname ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPencil"], {
                                            className: "w-4 h-4 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1584,
                                            columnNumber: 25
                                        }, this) : isChangeAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPhoto"], {
                                            className: "w-4 h-4 text-pink-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1586,
                                            columnNumber: 25
                                        }, this) : isInvite ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserPlus"], {
                                            className: "w-4 h-4 text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1588,
                                            columnNumber: 25
                                        }, this) : isLeave ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineLogout"], {
                                            className: "w-4 h-4 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1590,
                                            columnNumber: 25
                                        }, this) : isPromote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiShieldCheck"], {
                                            className: "w-4 h-4 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 25
                                        }, this) : isDemote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserMinus"], {
                                            className: "w-4 h-4 text-yellow-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1594,
                                            columnNumber: 25
                                        }, this) : isKick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserMinus"], {
                                            className: "w-4 h-4 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1596,
                                            columnNumber: 25
                                        }, this) : isCreateGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiUserGroup"], {
                                            className: "w-4 h-4 text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1598,
                                            columnNumber: 25
                                        }, this) : null;
                                        const nameLabel = senderInfo.name || '';
                                        // Hiển thị rõ tên người join bằng link (clickable) — luôn ưu tiên tên thật
                                        let displayNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 truncate",
                                            children: display
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1602,
                                            columnNumber: 58
                                        }, this);
                                        if (isJoinByLink) {
                                            const actualName = String(senderInfo._id) === String(currentUser._id) ? currentUser.name || nameLabel : nameLabel;
                                            const needle = 'đã tham gia nhóm';
                                            const idx = rawLower.indexOf(needle);
                                            const tail = idx > -1 ? rawDisplay.slice(idx) : 'đã tham gia nhóm qua link mời';
                                            displayNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/profile/${senderInfo._id}`,
                                                        className: "text-blue-600 hover:underline",
                                                        children: actualName || 'Một thành viên'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1613,
                                                        columnNumber: 29
                                                    }, this),
                                                    ` ${tail}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        const pillNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                unreadDividerNode,
                                                timeMarkerNode,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `msg-${msg._id}`,
                                                    className: `flex justify-center mt-3 ${isLastMsg ? 'mb-4' : 'mb-3'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `px-4 p-1.5  bg-white rounded-full max-w-[80vw]  sm:max-w-[28rem] overflow-hidden ${highlightedMsgId === msg._id ? 'bg-yellow-50' : 'bg-gray-100'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                icon,
                                                                displayNode
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1632,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1629,
                                                        columnNumber: 29
                                                    }, this)
                                                }, `pill-${msg._id}`, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                    lineNumber: 1624,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, `pill-${msg._id}-frag`, true, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1621,
                                            columnNumber: 25
                                        }, this);
                                        if (isDue) {
                                            if (related?.type === 'reminder') {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                    children: [
                                                        pillNode,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex justify-center -mt-2 ${isLastMsg ? 'mb-4' : ''}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "due",
                                                                title: related.content || '',
                                                                date: new Date(related.reminderAt || related.timestamp),
                                                                onOpen: ()=>{
                                                                    if (!isMobile) onOpenChatInfoSection?.('reminder');
                                                                    setDetailMsg(related);
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1646,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1645,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, `notify-${msg._id}-due`, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 29
                                                }, this);
                                            }
                                            const inlineAt = msg.reminderAt;
                                            const inlineContent = msg.reminderContent || msg.content || '';
                                            const inlineNote = msg.reminderNote;
                                            const stub = {
                                                _id: msg.replyToMessageId || String(msg._id),
                                                roomId: String(msg.roomId || ''),
                                                sender: msg.sender,
                                                content: inlineContent,
                                                type: 'reminder',
                                                timestamp: Number(msg.timestamp) || Date.now(),
                                                reminderAt: typeof inlineAt === 'number' ? inlineAt : undefined,
                                                reminderNote: inlineNote,
                                                reminderRepeat: msg.reminderRepeat
                                            };
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    pillNode,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex justify-center -mt-2 ${isLastMsg ? 'mb-4' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            variant: "due",
                                                            title: inlineContent || '',
                                                            date: typeof inlineAt === 'number' && inlineAt ? new Date(inlineAt) : new Date(Number(msg.timestamp) || Date.now()),
                                                            onOpen: ()=>{
                                                                if (!isMobile) onOpenChatInfoSection?.('reminder');
                                                                setDetailMsg(stub);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1680,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1679,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `notify-${msg._id}-due-inline`, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1677,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        if (related?.type === 'reminder' && isCreate) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center my-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "create",
                                                    title: related.content || '',
                                                    date: new Date(related.reminderAt || related.timestamp),
                                                    senderName: senderInfo.name,
                                                    senderAvatar: senderInfo.avatar,
                                                    isMe: isMe
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                    lineNumber: 1700,
                                                    columnNumber: 29
                                                }, this)
                                            }, `notify-${msg._id}-create`, false, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1699,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        if (related?.type === 'reminder' && (isEdit || isDelete)) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    pillNode,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center -mt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setDetailMsg(related),
                                                            className: "z-10 -mt-1 px-5 py-1.5 bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition-all uppercase tracking-wide cursor-pointer",
                                                            children: "XEM CHI TIẾT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1717,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1716,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `notify-${msg._id}-reminder`, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1714,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        if (isCreate || isEdit || isDelete) {
                                            const inlineAt = msg.reminderAt;
                                            const inlineContent = msg.reminderContent || '';
                                            const inlineNote = msg.reminderNote;
                                            if (typeof inlineAt === 'number' && inlineContent) {
                                                const stub = {
                                                    _id: msg.replyToMessageId || String(msg._id),
                                                    roomId: String(msg.roomId || ''),
                                                    sender: msg.sender,
                                                    content: inlineContent,
                                                    type: 'reminder',
                                                    timestamp: Number(msg.timestamp) || Date.now(),
                                                    reminderAt: inlineAt,
                                                    reminderNote: inlineNote,
                                                    reminderRepeat: msg.reminderRepeat
                                                };
                                                if (isCreate) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center my-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            variant: "create",
                                                            title: inlineContent || '',
                                                            date: new Date(inlineAt),
                                                            senderName: senderInfo.name,
                                                            senderAvatar: senderInfo.avatar,
                                                            isMe: isMe
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1749,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, `notify-${msg._id}-create-inline`, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1748,
                                                        columnNumber: 31
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                    children: [
                                                        pillNode,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex justify-center -mt-2 ${isLastMsg ? 'mb-4' : ''}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setDetailMsg(stub),
                                                                className: "z-10 -mt-1 px-5 py-1.5 bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition-all uppercase tracking-wide cursor-pointer",
                                                                children: "XEM CHI TIẾT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1765,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1764,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, `notify-${msg._id}-reminder-inline`, true, {
                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                    lineNumber: 1762,
                                                    columnNumber: 29
                                                }, this);
                                            }
                                        }
                                        if (related?.type === 'poll') {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    pillNode,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center -mt-2 mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                if (!isMobile) onOpenChatInfoSection?.('poll');
                                                                setDetailMsg(related);
                                                            },
                                                            className: "text-xs text-blue-600 hover:underline hover:cursor-pointer",
                                                            children: "Xem"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1781,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1780,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `notify-${msg._id}-poll`, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1778,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        return pillNode;
                                    }
                                    if (msg.type === 'reminder') {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                timeMarkerNode,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `msg-${msg._id}`,
                                                    className: "flex justify-center mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>setDetailMsg(msg),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            variant: "message",
                                                            title: msg.content || '',
                                                            date: new Date(msg.reminderAt || msg.timestamp),
                                                            senderName: senderInfo.name,
                                                            senderAvatar: senderInfo.avatar,
                                                            isMe: isMe,
                                                            highlighted: highlightedMsgId === msg._id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 1803,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1802,
                                                        columnNumber: 29
                                                    }, this)
                                                }, msg._id, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                    lineNumber: 1801,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, `reminder-${msg._id}-frag`, true, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1799,
                                            columnNumber: 25
                                        }, this);
                                    }
                                    if (msg.type === 'poll') {
                                        const myId = String(currentUser._id);
                                        const options = Array.isArray(msg.pollOptions) ? msg.pollOptions : [];
                                        const votes = msg.pollVotes || {};
                                        const locked = !!msg.isPollLocked;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                timeMarkerNode,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `msg-${msg._id}`,
                                                    className: `flex justify-center mt-3 ${isLastMsg ? 'mb-4' : 'mb-3'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-full max-w-[18rem] p-3 rounded-2xl border shadow-sm ${highlightedMsgId === msg._id ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-200'}`,
                                                        onClick: ()=>setDetailMsg(msg),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 min-w-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-semibold text-gray-900 break-words truncate",
                                                                            children: msg.content || msg.pollQuestion || 'Bình chọn'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 1837,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1836,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                onPinMessage?.(msg);
                                                                            },
                                                                            className: "px-2 py-1 text-xs font-semibold rounded-lg    border-blue-200 text-blue-600 hover:bg-blue-50 hover:cursor-pointer",
                                                                            children: msg.isPinned ? 'Bỏ ghim' : 'Ghim'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 1843,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1841,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1835,
                                                                columnNumber: 31
                                                            }, this),
                                                            locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-2",
                                                                children: [
                                                                    "Kết thúc lúc",
                                                                    ' ',
                                                                    new Date(msg.pollLockedAt || msg.editedAt || msg.timestamp).toLocaleString('vi-VN')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1857,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-0.5 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                        children: msg.pollAllowMultiple ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiListBullet"], {
                                                                                    className: "w-3.5 h-3.5 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1866,
                                                                                    columnNumber: 39
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Chọn nhiều phương án"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1867,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiCheckCircle"], {
                                                                                    className: "w-3.5 h-3.5 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1871,
                                                                                    columnNumber: 39
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Chọn 1 phương án"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1872,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1863,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.pollHideVoters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEyeSlash"], {
                                                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1878,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Ẩn người bình chọn"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1879,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1877,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    msg.pollAllowAddOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlus"], {
                                                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1884,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Cho phép thêm phương án"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1885,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1883,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    msg.pollHideResultsUntilVote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 text-xs text-gray-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLockClosed"], {
                                                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1890,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Ẩn kết quả khi chưa bình chọn"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 1891,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 1889,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1862,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setDetailMsg(msg),
                                                                className: "text-xs text-blue-600 hover:underline mt-1",
                                                                children: (()=>{
                                                                    const userIds = new Set();
                                                                    let totalVotes = 0;
                                                                    let hasVoted = false;
                                                                    (msg.pollOptions || []).forEach((opt)=>{
                                                                        const arr = Array.isArray(votes[opt]) ? votes[opt] : [];
                                                                        totalVotes += arr.length;
                                                                        arr.forEach((id)=>userIds.add(String(id)));
                                                                        if (arr.includes(myId)) hasVoted = true;
                                                                    });
                                                                    const showResults = !(msg.pollHideResultsUntilVote && !hasVoted);
                                                                    if (!showResults) return 'Bình chọn để xem kết quả';
                                                                    if (msg.pollHideVoters) {
                                                                        return `${totalVotes} lượt bình chọn`;
                                                                    }
                                                                    return `${userIds.size} người bình chọn, ${totalVotes} lượt bình chọn`;
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1895,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 space-y-2",
                                                                children: (()=>{
                                                                    const totalVotes = options.reduce((acc, opt)=>{
                                                                        const arr = Array.isArray(votes[opt]) ? votes[opt] : [];
                                                                        return acc + arr.length;
                                                                    }, 0);
                                                                    const hasVoted = options.some((opt)=>{
                                                                        const arr = Array.isArray(votes[opt]) ? votes[opt] : [];
                                                                        return arr.includes(myId);
                                                                    });
                                                                    const showResults = !(msg.pollHideResultsUntilVote && !hasVoted);
                                                                    return options.map((opt, idx)=>{
                                                                        const arr = Array.isArray(votes[opt]) ? votes[opt] : [];
                                                                        const count = arr.length;
                                                                        const voted = arr.includes(myId);
                                                                        const percent = showResults && totalVotes > 0 ? count / totalVotes * 100 : 0;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                if (!isMobile) onOpenChatInfoSection?.('poll');
                                                                                setDetailMsg(msg);
                                                                            },
                                                                            className: `w-full cursor-pointer bg-gray-100  relative overflow-hidden px-2 py-1 rounded-[5px]  text-left transition-colors
                                   
                                  `,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${voted ? 'bg-blue-200' : 'bg-blue-200'}`,
                                                                                    style: {
                                                                                        width: `${percent}%`
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1948,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between  relative z-10",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "truncate text-[12px]",
                                                                                            children: opt
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 1953,
                                                                                            columnNumber: 43
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm",
                                                                                            children: showResults ? count : ''
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 1954,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 1952,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, `${String(msg._id)}-${idx}`, true, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 1937,
                                                                            columnNumber: 39
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1918,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        if (!isMobile) onOpenChatInfoSection?.('poll');
                                                                        setDetailMsg(msg);
                                                                    },
                                                                    className: "w-full cursor-pointer px-2 py-1 mt-1 text-blue-600 border border-blue-300 rounded-xl hover:bg-blue-50 font-semibold text-sm",
                                                                    children: locked ? 'Xem lựa chọn' : 'Đổi lựa chọn'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 1962,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 1961,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 1831,
                                                        columnNumber: 29
                                                    }, this)
                                                }, msg._id, false, {
                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                    lineNumber: 1826,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, `poll-${msg._id}-frag`, true, {
                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                            lineNumber: 1824,
                                            columnNumber: 25
                                        }, this);
                                    }
                                    const senderName = allUsersMap.get(senderInfo._id) || senderInfo.name;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: [
                                            unreadDividerNode,
                                            timeMarkerNode,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: `msg-${msg._id}`,
                                                onContextMenu: (e)=>{
                                                    e.preventDefault();
                                                    onContextMenu(e, msg);
                                                },
                                                className: `
                  w-full sm:max-w-[36rem] lg:max-w-[46rem]
                  flex gap-2 group relative
                  ${isMe ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'}
                  ${isGrouped ? 'mt-2' : 'mt-2'}
                  ${isLastMsg ? 'mb-8' : ''}
                  ${highlightedMsgId === msg._id ? 'bg-yellow-50 rounded-xl' : ''}
                `,
                                                children: [
                                                    !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${isGrouped ? 'opacity-0' : ''} flex-shrink-0`,
                                                        children: senderInfo.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-9 h-9 rounded-full overflow-hidden flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                width: 38,
                                                                height: 38,
                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(senderInfo.avatar),
                                                                alt: senderInfo.name,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 2007,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 2006,
                                                            columnNumber: 33
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/logo/avata.webp",
                                                                alt: senderInfo.name || 'User',
                                                                width: 38,
                                                                height: 38,
                                                                className: "w-full h-full rounded-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 2017,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                            lineNumber: 2016,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 2004,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex flex-col min-w-0 ${isMe ? 'items-end' : 'items-start'}`,
                                                        children: [
                                                            isEdited && !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] px-1 text-blue-500 hover:underline hover:cursor-pointer",
                                                                onClick: ()=>setExpandedOriginalId((prev)=>prev === msg._id ? null : msg._id),
                                                                children: expandedOriginalId === msg._id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Ẩn chỉnh sửa"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 2036,
                                                                    columnNumber: 67
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Đã chỉnh sửa"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 2036,
                                                                    columnNumber: 89
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 2032,
                                                                columnNumber: 31
                                                            }, this),
                                                            repliedToMsg && (()=>{
                                                                const url = String(repliedToMsg.fileUrl || repliedToMsg.previewUrl || '');
                                                                const isVid = repliedToMsg.type === 'video' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(repliedToMsg.fileName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(url);
                                                                const isImg = repliedToMsg.type === 'image' || /\.(jpg|jpeg|png|gif|webp|bmp|svg|avif)$/i.test(String(repliedToMsg.fileName || url || ''));
                                                                const label = repliedToMsg.isRecalled ? 'Tin nhắn đã bị thu hồi' : repliedToMsg.type === 'file' ? repliedToMsg.fileName || '[File]' : repliedToMsg.type === 'image' ? '[Ảnh]' : repliedToMsg.type === 'video' ? '[Video]' : repliedToMsg.type === 'sticker' ? '[Sticker]' : repliedToMsg.type === 'reminder' ? repliedToMsg.content || '[Nhắc nhở]' : repliedToMsg.content || 'Tin nhắn';
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>onJumpToMessage(repliedToMsg._id),
                                                                    className: "max-w-[88vw] sm:max-w-[26rem] lg:max-w-[34rem] px-3 py-2 mb-1 mt-2 text-xs bg-gray-100 border-l-2 border-blue-500 rounded-xl cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-blue-600",
                                                                            children: msg.replyToMessageName || senderName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 2070,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                !repliedToMsg.isRecalled && (isImg || isVid) && (isImg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                                                                                    alt: "Ảnh",
                                                                                    width: 40,
                                                                                    height: 40,
                                                                                    className: "w-10 h-10 rounded-md object-cover border border-blue-200",
                                                                                    unoptimized: String(url).includes('mega.nz')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2077,
                                                                                    columnNumber: 43
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative w-10 h-10 bg-black rounded-md overflow-hidden border border-blue-200",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(url),
                                                                                            className: "w-full h-full object-cover",
                                                                                            muted: true,
                                                                                            playsInline: true,
                                                                                            preload: "metadata"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 2087,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-5 h-5 rounded-full bg-white/80 flex items-center justify-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    className: "w-3.5 h-3.5 text-gray-800",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        d: "M8 5v14l11-7z",
                                                                                                        fill: "currentColor"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2097,
                                                                                                        columnNumber: 51
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 2096,
                                                                                                    columnNumber: 49
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 2095,
                                                                                                columnNumber: 47
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 2094,
                                                                                            columnNumber: 45
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2086,
                                                                                    columnNumber: 43
                                                                                }, this)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "truncate text-gray-600",
                                                                                    children: label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2103,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 2073,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                    lineNumber: 2066,
                                                                    columnNumber: 35
                                                                }, this);
                                                            })(),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `  
                  px-4 py-2 rounded-lg shadow-md max-w-[70vw] ${!isRecalled && msg.type === 'text' && isSidebarOpen && !isMobile ? 'sm:max-w-[26rem] lg:max-w-[32rem]' : 'sm:max-w-[34rem] lg:max-w-[38rem]'} break-words mt-1
                  ${!isRecalled && (isVideo || msg.type === 'sticker' || msg.type === 'file' || msg.type === 'image') ? '!bg-transparent shadow-none' : isMe ? 'bg-blue-100 text-white' : 'bg-white text-gray-800 '}
                      ${!isGrouped && isMe ? 'rounded-tr-md' : ''}
                      ${!isGrouped && !isMe ? 'rounded-tl-md' : ''}
                      ${isRecalled ? '!bg-gray-200 !text-gray-500 italic !px-4 !py-2 !max-w-[92vw] sm:!max-w-[34rem] lg:!max-w-[44rem]' : ''}
                      ${!isRecalled && (isVideo || msg.type === 'sticker' || msg.type === 'file' || msg.type === 'image') ? '!p-0 !shadow-none ' : ''}
                    ${!isRecalled && msg.type === 'image' ? '!p-0' : ''}
                    ${!isRecalled && msg.type === 'file' ? '!p-0' : ''}
                  relative ${hasReactions ? 'mb-4' : ''}
                  ${contextMenu?.visible && String(contextMenu.message._id) === String(msg._id) ? 'z-[9998]' : ''}
                  ${longPressActiveId === msg._id ? 'ring-2 ring-blue-300 scale-[0.98]' : ''}
                  `,
                                                                style: isMobile && swipeState.id === msg._id ? {
                                                                    transform: `translateX(${Math.max(-100, Math.min(100, swipeState.dx))}px)`
                                                                } : undefined,
                                                                onClick: ()=>{
                                                                    setTimeVisibleId((prev)=>prev === msg._id ? null : msg._id);
                                                                    setActiveMoreId(msg._id);
                                                                    setReactionDetail(null);
                                                                },
                                                                onTouchStart: (e)=>{
                                                                    try {
                                                                        if (isRecalled) return;
                                                                        longPressTriggeredRef.current = false;
                                                                        if (longPressTimerRef.current != null) {
                                                                            clearTimeout(longPressTimerRef.current);
                                                                            longPressTimerRef.current = null;
                                                                        }
                                                                        const t = e.touches && e.touches[0];
                                                                        const x0 = t ? t.clientX : 0;
                                                                        const y0 = t ? t.clientY : 0;
                                                                        const el = e.currentTarget;
                                                                        swipeStartRef.current = {
                                                                            x: x0,
                                                                            y: y0,
                                                                            id: msg._id,
                                                                            isMe
                                                                        };
                                                                        setSwipeState({
                                                                            id: null,
                                                                            dx: 0
                                                                        });
                                                                        setLongPressActiveId(msg._id);
                                                                        longPressTimerRef.current = window.setTimeout(()=>{
                                                                            longPressTriggeredRef.current = true;
                                                                            setActiveMoreId(msg._id);
                                                                            setReactionDetail(null);
                                                                            if (isMobile && msg.type === 'text') {
                                                                                setMobileCollapsedId(msg._id);
                                                                            }
                                                                            onMobileLongPress?.(msg, el, x0, y0);
                                                                        }, 420);
                                                                    } catch  {}
                                                                },
                                                                onTouchEnd: (e)=>{
                                                                    try {
                                                                        if (longPressTimerRef.current != null) {
                                                                            clearTimeout(longPressTimerRef.current);
                                                                            longPressTimerRef.current = null;
                                                                        }
                                                                        setLongPressActiveId(null);
                                                                        if (longPressTriggeredRef.current) {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                        }
                                                                        if (isMobile && swipeStartRef.current.id === msg._id) {
                                                                            const okDir = swipeStartRef.current.isMe ? swipeState.dx < -64 : swipeState.dx > 64;
                                                                            if (okDir) {
                                                                                onReplyMessage?.(msg);
                                                                            }
                                                                            setSwipeState({
                                                                                id: null,
                                                                                dx: 0
                                                                            });
                                                                            swipeStartRef.current = {
                                                                                x: 0,
                                                                                y: 0,
                                                                                id: null,
                                                                                isMe: false
                                                                            };
                                                                        }
                                                                    } catch  {}
                                                                },
                                                                onTouchMove: (e)=>{
                                                                    try {
                                                                        if (longPressTimerRef.current != null) {
                                                                            clearTimeout(longPressTimerRef.current);
                                                                            longPressTimerRef.current = null;
                                                                        }
                                                                        setLongPressActiveId(null);
                                                                        if (!isMobile) return;
                                                                        const t = e.touches && e.touches[0];
                                                                        const x = t ? t.clientX : 0;
                                                                        const y = t ? t.clientY : 0;
                                                                        const dx = x - swipeStartRef.current.x;
                                                                        const dy = y - swipeStartRef.current.y;
                                                                        if (swipeStartRef.current.id === msg._id) {
                                                                            const horizontal = Math.abs(dx) > 8 && Math.abs(dy) < 24;
                                                                            if (horizontal) {
                                                                                const dirOk = swipeStartRef.current.isMe ? dx < 0 : dx > 0;
                                                                                setSwipeState({
                                                                                    id: msg._id,
                                                                                    dx: dirOk ? dx : 0
                                                                                });
                                                                                e.preventDefault();
                                                                            }
                                                                        }
                                                                    } catch  {}
                                                                },
                                                                onTouchCancel: ()=>{
                                                                    try {
                                                                        if (longPressTimerRef.current != null) {
                                                                            clearTimeout(longPressTimerRef.current);
                                                                            longPressTimerRef.current = null;
                                                                        }
                                                                        setLongPressActiveId(null);
                                                                        if (isMobile && swipeStartRef.current.id === msg._id) {
                                                                            setSwipeState({
                                                                                id: null,
                                                                                dx: 0
                                                                            });
                                                                            swipeStartRef.current = {
                                                                                x: 0,
                                                                                y: 0,
                                                                                id: null,
                                                                                isMe: false
                                                                            };
                                                                        }
                                                                    } catch  {}
                                                                },
                                                                children: [
                                                                    !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            (msg.type === 'image' || msg.type === 'video') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: (e)=>{
                                                                                    e.preventDefault();
                                                                                    onShareMessage(msg);
                                                                                },
                                                                                className: `absolute top-1/2 -translate-y-1/2  cursor-pointer p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMe ? 'right-full mr-2' : 'left-full ml-2'} opacity-100 pointer-events-auto`,
                                                                                "aria-label": "Chia sẻ",
                                                                                title: "Chia sẻ",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ICShareMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-4 h-4 text-indigo-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2240,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2231,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            isMobile && swipeState.id === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `absolute top-1/2 -translate-y-1/2 ${isMe ? 'left-full ml-2' : 'right-full mr-2'}`,
                                                                                style: {
                                                                                    opacity: Math.min(Math.abs(swipeState.dx) / 64, 1)
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-2 bg-white rounded-full shadow border border-gray-200",
                                                                                    children: isMe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowUturnLeft"], {
                                                                                        className: "w-5 h-5 text-blue-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2250,
                                                                                        columnNumber: 43
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiArrowUturnRight"], {
                                                                                        className: "w-5 h-5 text-blue-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2252,
                                                                                        columnNumber: 43
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2248,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2244,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            onContextMenu(e, msg);
                                                                                        },
                                                                                        className: `absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMe ? 'right-full mr-10' : 'left-full ml-10'} opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`,
                                                                                        "aria-label": "Mở menu",
                                                                                        title: "Thêm",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiEllipsisVertical"], {
                                                                                            className: "w-4 h-4 text-gray-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 2268,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2259,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReactionButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        isMine: isMe,
                                                                                        visible: activeMoreId === msg._id,
                                                                                        onPick: (emoji)=>{
                                                                                            onToggleReaction?.(msg, emoji);
                                                                                            setActiveMoreId(null);
                                                                                        },
                                                                                        className: `absolute top-1/2 -translate-y-1/2  ${isMe ? 'right-full mr-18' : 'left-full ml-18'} ${activeMoreId === msg._id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'} transition-opacity duration-200`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2270,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                        ]
                                                                    }, void 0, true),
                                                                    !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            (()=>{
                                                                                const items = Object.entries(reactions).map(([emoji, arr])=>({
                                                                                        emoji,
                                                                                        count: (arr || []).length,
                                                                                        mine: (arr || []).includes(myId),
                                                                                        users: (arr || []).map((id)=>allUsersMap.get(String(id)) || 'Người dùng')
                                                                                    })).filter((x)=>x.count > 0).sort((a, b)=>b.count - a.count);
                                                                                if (items.length === 0) return null;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `
                                  absolute ${isMe ? 'right-2 -mr-1' : 'left-2 -ml-1'} 
                                  -bottom-4 
                                  flex items-center gap-1
                                `,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center",
                                                                                            children: [
                                                                                                items.slice(0, 3).map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        onClick: (e)=>{
                                                                                                            e.stopPropagation();
                                                                                                            setReactionDetail(reactionDetail?.msgId === msg._id && reactionDetail?.emoji === it.emoji ? null : {
                                                                                                                msgId: msg._id,
                                                                                                                emoji: it.emoji
                                                                                                            });
                                                                                                        },
                                                                                                        className: `
                                          flex items-center gap-0.5 py-0.5 rounded-full text-sm cursor-pointer
                                          transition-all duration-200 hover:bg-gray-100 active:scale-95
                                          ${it.mine ? 'bg-blue-50' : 'bg-transparent'}
                                        `,
                                                                                                        title: `${it.count} người`,
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-lg leading-none",
                                                                                                                children: it.emoji
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 2327,
                                                                                                                columnNumber: 47
                                                                                                            }, this),
                                                                                                            it.count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: `text-xs font-medium ${it.mine ? 'text-blue-600' : 'text-gray-600'}`,
                                                                                                                children: it.count
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 2329,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, `${msg._id}-react-${idx}`, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2309,
                                                                                                        columnNumber: 45
                                                                                                    }, this)),
                                                                                                items.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "px-2 text-xs text-gray-500 font-medium",
                                                                                                    children: [
                                                                                                        "+",
                                                                                                        items.length - 3
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 2338,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 2307,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 2344,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2300,
                                                                                    columnNumber: 39
                                                                                }, this);
                                                                            })(),
                                                                            reactionDetail && reactionDetail.msgId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "fixed inset-0 z-30",
                                                                                        onClick: ()=>setReactionDetail(null)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2351,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        ref: (el)=>{
                                                                                            if (el && reactionDetail.msgId === msg._id) {
                                                                                                const rect = el.parentElement?.getBoundingClientRect();
                                                                                                if (rect) {
                                                                                                    const spaceBelow = window.innerHeight - rect.bottom;
                                                                                                    const spaceAbove = rect.top;
                                                                                                    const popoverHeight = 250;
                                                                                                    if (spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
                                                                                                        el.style.bottom = '100%';
                                                                                                        el.style.top = 'auto';
                                                                                                        el.style.marginBottom = '0.625rem';
                                                                                                        el.style.marginTop = '0';
                                                                                                    } else {
                                                                                                        el.style.top = '100%';
                                                                                                        el.style.bottom = 'auto';
                                                                                                        el.style.marginTop = '0.625rem';
                                                                                                        el.style.marginBottom = '0';
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        className: `
                                    absolute ${isMe ? 'right-2' : 'left-2'} 
                                    z-40
                                  `,
                                                                                        children: (()=>{
                                                                                            const users = (reactions[reactionDetail.emoji] || []).map((id)=>allUsersMap.get(String(id)) || String(id));
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "min-w-[11.25rem] max-w-[15rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl animate-in fade-in zoom-in-95 duration-200",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-2 mb-2 pb-2 border-b border-gray-100",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-2xl",
                                                                                                                children: reactionDetail.emoji
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 2389,
                                                                                                                columnNumber: 49
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-sm font-semibold text-gray-700",
                                                                                                                children: [
                                                                                                                    users.length,
                                                                                                                    " người"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 2390,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2388,
                                                                                                        columnNumber: 47
                                                                                                    }, this),
                                                                                                    users.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                        className: "space-y-1.5 max-h-48 overflow-y-auto",
                                                                                                        children: users.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                className: "text-sm text-gray-700 py-1 hover:text-blue-600 transition-colors",
                                                                                                                children: name
                                                                                                            }, `${msg._id}-user-${idx}`, false, {
                                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                                lineNumber: 2397,
                                                                                                                columnNumber: 53
                                                                                                            }, this))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2395,
                                                                                                        columnNumber: 49
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-sm text-gray-500 py-1",
                                                                                                        children: "Chưa có ai"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2406,
                                                                                                        columnNumber: 49
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 2387,
                                                                                                columnNumber: 45
                                                                                            }, this);
                                                                                        })()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2353,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                        ]
                                                                    }, void 0, true),
                                                                    isGroup && !isGrouped && !isRecalled && !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm inline-block  ${msg.type === 'image' || msg.type === 'video' || msg.type === 'file' ? ' px-2 py-1 bg-white rounded-[2rem] mb-1' : 'py-1'} ${isMe ? 'text-gray-600' : 'text-gray-600'}`,
                                                                        children: senderName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2418,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.type === 'text' && !isRecalled && !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `relative text-[0.875rem] ${isSidebarOpen && !isMobile ? 'md:text-[0.875rem]' : 'md:text-[1rem]'} leading-relaxed text-black whitespace-pre-wrap select-none lg:select-text`,
                                                                        style: isMobile && contextMenu?.visible && String(contextMenu.message._id) === String(msg._id) && mobileCollapsedId === msg._id ? {
                                                                            maxHeight: 'calc(var(--vvh) * 0.42)',
                                                                            overflow: 'hidden'
                                                                        } : undefined,
                                                                        children: [
                                                                            renderMessageContent(msg.content || '', msg.mentions, isMe),
                                                                            isMobile && contextMenu?.visible && String(contextMenu.message._id) === String(msg._id) && mobileCollapsedId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center pointer-events-none",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-x-0 bottom-8 h-16 bg-gradient-to-t from-white/95 to-transparent"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2446,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>{
                                                                                            setMobileCollapsedId(null);
                                                                                            try {
                                                                                                document.dispatchEvent(new MouseEvent('mousedown', {
                                                                                                    bubbles: true
                                                                                                }));
                                                                                            } catch  {}
                                                                                        },
                                                                                        className: "pointer-events-auto mb-2 px-3 py-1 rounded-full bg-white/90 border border-gray-200 text-sm text-blue-600 shadow hover:bg-blue-50 active:scale-95",
                                                                                        children: "Xem thêm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2447,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2445,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            (()=>{
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
                                                                                    className: `mt-2 rounded-xl border ${isMe ? 'border-white/30' : 'border-gray-200'} bg-white overflow-hidden`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>window.open(href, '_blank'),
                                                                                        className: "w-full text-left p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "p-2.5 rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500 text-white",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiLink"], {
                                                                                                    className: "w-5 h-5"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 2481,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 2480,
                                                                                                columnNumber: 43
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex-1 min-w-0",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-sm font-semibold text-purple-600 truncate",
                                                                                                        children: raw
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2484,
                                                                                                        columnNumber: 45
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-xs text-gray-500 mt-0.5",
                                                                                                        children: hostname
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2485,
                                                                                                        columnNumber: 45
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 2483,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2476,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2473,
                                                                                    columnNumber: 39
                                                                                }, this);
                                                                            })()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2427,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.type === 'text' && !isRecalled && isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm leading-relaxed",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: typeof editContent === 'string' ? editContent : msg.content || '',
                                                                                onChange: (e)=>setEditContent?.(e.target.value),
                                                                                className: `w-full p-2 rounded-xl border ${isMe ? ' text-gray-800' : ' text-gray-800'}`,
                                                                                rows: 3
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2496,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `mt-2 flex gap-2 ${isMe ? 'justify-end' : 'justify-start'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>{
                                                                                            setEditingMessageId?.(null);
                                                                                            setEditContent?.('');
                                                                                        },
                                                                                        className: "px-3 py-1.5 cursor-pointer rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 hover:cursor-pointer",
                                                                                        children: "Hủy"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2503,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>{
                                                                                            const content = typeof editContent === 'string' ? editContent : msg.content || '';
                                                                                            onSaveEdit?.(msg._id, content);
                                                                                        },
                                                                                        className: "px-3 py-1.5 cursor-pointer rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer",
                                                                                        children: "Lưu"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2512,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2502,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2495,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.type === 'image' && msg.fileUrl && !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "  rounded-[0.25rem] overflow-hidden cursor-pointer shadow-md max-w-[50vw] sm:max-w-[10rem] select-none lg:select-auto",
                                                                        onClick: ()=>!isUploading && onOpenMedia(String(msg.fileUrl), 'image'),
                                                                        style: {
                                                                            WebkitTouchCallout: 'none'
                                                                        },
                                                                        children: [
                                                                            String(msg.fileUrl).startsWith('blob:') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                width: 600,
                                                                                height: 600,
                                                                                src: String(msg.fileUrl),
                                                                                alt: "Ảnh",
                                                                                className: "w-full h-full object-cover",
                                                                                draggable: false
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2534,
                                                                                columnNumber: 37
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl),
                                                                                alt: "Ảnh",
                                                                                width: 600,
                                                                                height: 600,
                                                                                className: "w-full h-full object-cover",
                                                                                unoptimized: String(msg.fileUrl).includes('mega.nz'),
                                                                                draggable: false
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2543,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/70 flex items-center justify-center",
                                                                                children: (()=>{
                                                                                    const size = 40;
                                                                                    const stroke = 4;
                                                                                    const r = (size - stroke) / 2;
                                                                                    const c = 2 * Math.PI * r;
                                                                                    const p = Math.max(0, Math.min(100, Number(uploadProgress || 0)));
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col items-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: size,
                                                                                            height: size,
                                                                                            viewBox: `0 0 ${size} ${size}`,
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: size / 2,
                                                                                                    cy: size / 2,
                                                                                                    r: r,
                                                                                                    stroke: "rgba(255,255,255,0.3)",
                                                                                                    strokeWidth: stroke,
                                                                                                    fill: "none"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 2565,
                                                                                                    columnNumber: 47
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    cx: size / 2,
                                                                                                    cy: size / 2,
                                                                                                    r: r,
                                                                                                    stroke: "white",
                                                                                                    strokeWidth: stroke,
                                                                                                    fill: "none",
                                                                                                    strokeDasharray: c,
                                                                                                    strokeDashoffset: c - p / 100 * c,
                                                                                                    strokeLinecap: "round",
                                                                                                    transform: `rotate(-90 ${size / 2} ${size / 2})`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                    lineNumber: 2573,
                                                                                                    columnNumber: 47
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                            lineNumber: 2564,
                                                                                            columnNumber: 45
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2563,
                                                                                        columnNumber: 43
                                                                                    }, this);
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2555,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2528,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.type === 'image' && !isRecalled && msg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `mt-2 text-sm leading-relaxed px-2 text-gray-700`,
                                                                        children: renderMessageContent(msg.content || '', msg.mentions, isMe)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2595,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isVideo && msg.fileUrl && !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative rounded-[0.25rem] overflow-hidden cursor-pointer shadow-lg max-w-[70vw] sm:max-w-[18rem] aspect-video bg-black select-none lg:select-auto",
                                                                        onClick: ()=>!isUploading && onOpenMedia(String(msg.fileUrl), 'video'),
                                                                        style: {
                                                                            WebkitTouchCallout: 'none'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl),
                                                                                className: "w-full h-full object-cover m-[0.125rem]",
                                                                                playsInline: true,
                                                                                preload: "metadata"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2607,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 flex items-center justify-center opacity-100",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiPlay"], {
                                                                                        className: "w-7 h-7 text-blue-600 ml-1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2617,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2616,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2615,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/60 flex items-center justify-center text-white",
                                                                                children: uploadProgress !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        Math.round(uploadProgress),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 border-2 border-white/60 border-t-transparent rounded-full animate-spin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2626,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2622,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2602,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isVideo && !isRecalled && msg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `px-2 mt-2 text-sm leading-relaxed text-gray-700`,
                                                                        children: renderMessageContent(msg.content || '', msg.mentions, isMe)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2634,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.type === 'file' && msg.fileUrl && !isVideo && !isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProxyUrl"])(msg.fileUrl, true),
                                                                        download: msg.fileName || 'download',
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "relative flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl max-w-[70vw] sm:max-w-[18rem] shadow-sm hover:bg-gray-50 select-none lg:select-text",
                                                                        onClick: (e)=>{
                                                                            if (isUploading) e.preventDefault();
                                                                        },
                                                                        "aria-disabled": isUploading ? true : undefined,
                                                                        draggable: false,
                                                                        style: {
                                                                            WebkitTouchCallout: 'none'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-2 bg-blue-600 rounded-xl",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineDocumentText"], {
                                                                                    className: "w-6 h-6 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                    lineNumber: 2655,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2654,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-semibold text-gray-800 truncate",
                                                                                        children: msg.fileName || 'Tệp đính kèm'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2659,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500 truncate",
                                                                                        children: "Nhấn để tải xuống"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2662,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2658,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/60 text-white flex items-center justify-center rounded-2xl",
                                                                                children: (()=>{
                                                                                    const size = 32;
                                                                                    const stroke = 3;
                                                                                    const r = (size - stroke) / 2;
                                                                                    const c = 2 * Math.PI * r;
                                                                                    const p = Math.max(0, Math.min(100, Number(uploadProgress || 0)));
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                width: size,
                                                                                                height: size,
                                                                                                viewBox: `0 0 ${size} ${size}`,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                        cx: size / 2,
                                                                                                        cy: size / 2,
                                                                                                        r: r,
                                                                                                        stroke: "rgba(255,255,255,0.35)",
                                                                                                        strokeWidth: stroke,
                                                                                                        fill: "none"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2675,
                                                                                                        columnNumber: 47
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                        cx: size / 2,
                                                                                                        cy: size / 2,
                                                                                                        r: r,
                                                                                                        stroke: "white",
                                                                                                        strokeWidth: stroke,
                                                                                                        fill: "none",
                                                                                                        strokeDasharray: c,
                                                                                                        strokeDashoffset: c - p / 100 * c,
                                                                                                        strokeLinecap: "round",
                                                                                                        transform: `rotate(-90 ${size / 2} ${size / 2})`
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                        lineNumber: 2683,
                                                                                                        columnNumber: 47
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 2674,
                                                                                                columnNumber: 45
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs font-semibold mt-1",
                                                                                                children: [
                                                                                                    Math.round(p),
                                                                                                    "%"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                                lineNumber: 2696,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                        lineNumber: 2673,
                                                                                        columnNumber: 43
                                                                                    }, this);
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2665,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2641,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.type === 'file' && !isRecalled && msg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `mt-2 text-sm leading-relaxed px-2 text-gray-700`,
                                                                        children: renderMessageContent(msg.content || '', msg.mentions, isMe)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2705,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isRecalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm italic opacity-70",
                                                                        children: "đã thu hồi tin nhắn"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2710,
                                                                        columnNumber: 46
                                                                    }, this),
                                                                    isEdited && !isRecalled && msg.originalContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: " border-gray-300 ",
                                                                        children: expandedOriginalId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs border-t-[1px] border-t-gray-300  text-gray-500 space-y-1 flex items-center justify-between",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `p-1 m-1 whitespace-pre-wrap pt-2 pb-1 rounded w-full ${isMe ? 'bg-white' : ''}`,
                                                                                children: msg.originalContent
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                                lineNumber: 2717,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 2716,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2714,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isEndOfGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-xs mt-1 ${isMe ? 'text-gray-700' : 'text-gray-500'}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: msg.type === 'text' ? undefined : 'inline-block px-2 py-1 bg-white rounded-[2rem]',
                                                                            children: formatTimestamp(Number(msg.serverTimestamp ?? msg.timestamp) || 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                            lineNumber: 2728,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                        lineNumber: 2727,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 2110,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReadStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                message: msg,
                                                                isGroup: isGroup,
                                                                isRecalled: isRecalled,
                                                                isMine: isMe,
                                                                isLast: isLastMsg,
                                                                myId: myId,
                                                                allUsersMap: allUsersMap,
                                                                getSenderInfo: getSenderInfo,
                                                                isMobile: isMobile,
                                                                isUploading: (()=>{
                                                                    const up = uploadingFiles[msg._id] !== undefined;
                                                                    const sending = !!msg.isSending;
                                                                    const blob = typeof msg.fileUrl === 'string' && msg.fileUrl.startsWith('blob:');
                                                                    const isMediaOrFile = msg.type === 'image' || msg.type === 'video' || msg.type === 'file' && !isVideo;
                                                                    return isMediaOrFile && (up || sending || blob);
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                                lineNumber: 2743,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                        lineNumber: 2030,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, msg._id, true, {
                                                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                                lineNumber: 1986,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, `${msg._id}-frag`, true, {
                                        fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                                        lineNumber: 1983,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false);
                        })()
                    ]
                }, dateKey, true, {
                    fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$ReminderDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!detailMsg,
                message: detailMsg,
                onClose: ()=>setDetailMsg(null)
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                lineNumber: 2773,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f28$chatPopup$292f$components$2f$PollDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!detailMsg && detailMsg.type === 'poll',
                message: detailMsg && detailMsg.type === 'poll' ? detailMsg : null,
                onClose: ()=>setDetailMsg(null),
                onRefresh: onRefresh
            }, void 0, false, {
                fileName: "[project]/src/components/(chatPopup)/MessageList.tsx",
                lineNumber: 2774,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MessageList, "TKpj53WFkpxmgIHqUQObRyZ1Vjw=");
_c = MessageList;
var _c;
__turbopack_context__.k.register(_c, "MessageList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_%28chatPopup%29_MessageList_tsx_02088d1d._.js.map