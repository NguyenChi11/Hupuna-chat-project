(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useCreateGroupModal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateGroupModal",
    ()=>useCreateGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useCreateGroupModal({ currentUser, allUsers, mode, conversationId, existingMemberIds = [], reLoad, onMembersAdded, onGroupCreated, onClose }) {
    _s();
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatarFile, setAvatarFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMembers, setSelectedMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCreateGroupModal.useState": ()=>{
            const currentUserId = String(currentUser._id);
            const initialSet = new Set([
                ...existingMemberIds.map(String),
                currentUserId
            ]);
            return Array.from(initialSet);
        }
    }["useCreateGroupModal.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleMemberToggle = (_id)=>{
        if (mode === 'add' && existingMemberIds.includes(_id)) return;
        setSelectedMembers((prev)=>prev.includes(_id) ? prev.filter((id)=>id !== _id) : [
                ...prev,
                _id
            ]);
    };
    const handleAvatarChange = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            setError('Vui lòng chọn file ảnh');
            return;
        }
        // Remove size limit
        // const MAX = 5 * 1024 * 1024; // 5MB
        // if (file.size > MAX) { ... }
        setAvatarFile(file);
        setAvatarPreview(URL.createObjectURL(file));
        setError('');
    };
    const groupedUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCreateGroupModal.useMemo[groupedUsers]": ()=>{
            let filtered = allUsers;
            if (searchTerm.trim()) {
                const norm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(searchTerm);
                filtered = allUsers.filter({
                    "useCreateGroupModal.useMemo[groupedUsers]": (u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(u.name || '').includes(norm)
                }["useCreateGroupModal.useMemo[groupedUsers]"]);
            }
            const sortedUsers = [
                ...filtered
            ].sort({
                "useCreateGroupModal.useMemo[groupedUsers].sortedUsers": (a, b)=>(a.name || '').localeCompare(b.name || '')
            }["useCreateGroupModal.useMemo[groupedUsers].sortedUsers"]);
            const groups = {};
            sortedUsers.forEach({
                "useCreateGroupModal.useMemo[groupedUsers]": (user)=>{
                    const firstLetter = (user.name?.charAt(0) || '#').toUpperCase();
                    const key = /^[A-Z]$/.test(firstLetter) ? firstLetter : '#';
                    if (!groups[key]) groups[key] = [];
                    groups[key].push(user);
                }
            }["useCreateGroupModal.useMemo[groupedUsers]"]);
            return groups;
        }
    }["useCreateGroupModal.useMemo[groupedUsers]"], [
        allUsers,
        searchTerm
    ]);
    const sortedGroupKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCreateGroupModal.useMemo[sortedGroupKeys]": ()=>{
            return Object.keys(groupedUsers).sort({
                "useCreateGroupModal.useMemo[sortedGroupKeys]": (a, b)=>{
                    if (a === '#') return 1;
                    if (b === '#') return -1;
                    return a.localeCompare(b);
                }
            }["useCreateGroupModal.useMemo[sortedGroupKeys]"]);
        }
    }["useCreateGroupModal.useMemo[sortedGroupKeys]"], [
        groupedUsers
    ]);
    const handleSubmit = async ()=>{
        if (mode === 'create' && !groupName.trim()) {
            setError('Vui lòng nhập tên nhóm');
            return;
        }
        const newMembersOnly = selectedMembers.filter((_id)=>!existingMemberIds.includes(_id));
        if (mode === 'add' && newMembersOnly.length === 0) {
            setError('Bạn chưa chọn thêm thành viên mới nào');
            return;
        }
        if (mode === 'create' && selectedMembers.length < 3) {
            setError('Nhóm phải có ít nhất 3 thành viên (bao gồm bạn)');
            return;
        }
        setLoading(true);
        setError('');
        try {
            let avatarUrl = '';
            if (mode === 'create' && avatarFile) {
                const uploadId = `group_avatar_${Date.now()}`;
                const formData = new FormData();
                formData.append('file', avatarFile);
                formData.append('roomId', 'new_group');
                formData.append('sender', String(currentUser._id));
                formData.append('type', 'image');
                formData.append('folderName', 'GroupAvatars');
                const uploadRes = await fetch(`/api/upload?uploadId=${uploadId}`, {
                    method: 'POST',
                    body: formData
                });
                const uploadJson = await uploadRes.json();
                if (uploadJson.success && uploadJson.link) {
                    avatarUrl = uploadJson.link;
                }
            }
            let bodyData;
            if (mode === 'create') {
                bodyData = {
                    action: 'createGroup',
                    data: {
                        name: groupName,
                        members: selectedMembers,
                        createdBy: currentUser._id,
                        avatar: avatarUrl || undefined
                    }
                };
            } else {
                bodyData = {
                    action: 'addMembers',
                    conversationId,
                    newMembers: newMembersOnly,
                    _id: String(currentUser._id)
                };
            }
            const res = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            });
            const result = await res.json();
            if (result.success) {
                // Chỉ reload lại dữ liệu khi thao tác thành công
                reLoad?.();
                if (mode === 'add' && onMembersAdded) {
                    const addedUsersFullInfo = allUsers.filter((u)=>newMembersOnly.includes(String(u._id)));
                    onMembersAdded(addedUsersFullInfo);
                    try {
                        const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                            transports: [
                                'websocket'
                            ],
                            withCredentials: false
                        });
                        const prevMembersPayload = (existingMemberIds || []).map((id)=>({
                                _id: String(id)
                            }));
                        const nextMembersPayload = newMembersOnly.map((id)=>({
                                _id: id,
                                role: 'MEMBER',
                                joinedAt: Date.now(),
                                addedBy: String(currentUser._id)
                            }));
                        sock.emit('group_members_updated', {
                            conversationId,
                            members: [
                                ...prevMembersPayload,
                                ...nextMembersPayload
                            ],
                            action: 'add'
                        });
                        setTimeout(()=>sock.disconnect(), 500);
                    } catch  {}
                    onGroupCreated();
                } else if (mode === 'create') {
                    const createdGroup = result.group;
                    onGroupCreated(createdGroup);
                    // 🔥 Emit socket để tất cả thành viên thấy nhóm mới ngay trên sidebar
                    try {
                        const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
                            transports: [
                                'websocket'
                            ],
                            withCredentials: false
                        });
                        const roomIdStr = String(createdGroup?._id || result?.groupId || '');
                        const membersRaw = createdGroup?.members || selectedMembers;
                        const membersPayload = Array.isArray(membersRaw) ? membersRaw.map((m)=>typeof m === 'object' && m?._id ? {
                                _id: String(m._id)
                            } : String(m)) : [];
                        sock.emit('group_created', {
                            roomId: roomIdStr,
                            members: membersPayload,
                            sender: currentUser._id,
                            senderName: currentUser.name,
                            groupName: createdGroup?.name || groupName
                        });
                        setTimeout(()=>sock.disconnect(), 500);
                    } catch  {}
                }
                onClose();
            } else {
                setError(result.error || 'Thực hiện thất bại');
            }
        } catch (err) {
            console.error(err);
            setError('Lỗi kết nối server');
        } finally{
            setLoading(false);
        }
    };
    return {
        groupName,
        setGroupName,
        searchTerm,
        setSearchTerm,
        selectedMembers,
        loading,
        error,
        groupedUsers,
        sortedGroupKeys,
        handleMemberToggle,
        handleSubmit,
        avatarFile,
        avatarPreview,
        handleAvatarChange
    };
}
_s(useCreateGroupModal, "iIKTNTJziHNJkmZHE14pCz6xMmk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChatInfoPopup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatInfoPopup",
    ()=>useChatInfoPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useChatInfoPopup({ selectedChat, isGroup, messages, currentUser, onChatAction }) {
    _s();
    const getId = (u)=>{
        if (!u) return '';
        if (typeof u === 'string') return u;
        if (typeof u === 'number') return String(u);
        if (typeof u === 'object' && u !== null) {
            if ('_id' in u && u._id != null) return String(u._id);
            if ('id' in u && u.id != null) return String(u.id);
        }
        return '';
    };
    const getOneToOneRoomId = (user1Id, user2Id)=>{
        return [
            user1Id,
            user2Id
        ].sort().join('_');
    };
    const currentRoomId = isGroup ? getId(selectedChat) : getOneToOneRoomId(getId(currentUser), getId(selectedChat));
    const { isPinned: initialIsPinned, isHidden: initialIsHidden } = selectedChat;
    // Trạng thái ghim / ẩn cục bộ (optimistic UI)
    const [localIsPinned, setLocalIsPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIsPinned === true);
    const [localIsHidden, setLocalIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIsHidden === true);
    // Accordion trạng thái mở/đóng cho từng mục
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Id của item đang mở menu "..."
    const [activeMenuId, setActiveMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cập nhật state cục bộ khi props thay đổi (theo phòng hiện tại)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatInfoPopup.useEffect": ()=>{
            setLocalIsPinned(initialIsPinned === true);
            setLocalIsHidden(initialIsHidden === true);
        }
    }["useChatInfoPopup.useEffect"], [
        currentRoomId,
        initialIsPinned,
        initialIsHidden
    ]);
    const handleChatActionClick = (actionType)=>{
        const targetId = isGroup ? currentRoomId : getId(selectedChat);
        if (actionType === 'pin') {
            const newState = !localIsPinned;
            setLocalIsPinned(newState);
            onChatAction(targetId, 'pin', newState, isGroup);
        } else if (actionType === 'hide') {
            const newState = !localIsHidden;
            setLocalIsHidden(newState);
            onChatAction(targetId, 'hide', newState, isGroup);
        }
    };
    const toggleItem = (item)=>{
        setOpenItems((prev)=>({
                ...prev,
                [item]: !prev[item]
            }));
    };
    const closeMenu = ()=>setActiveMenuId(null);
    const [mediaList, setMediaList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaGroups, setMediaGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileList, setFileList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileGroups, setFileGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkList, setLinkList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkGroups, setLinkGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaTotal, setMediaTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fileTotal, setFileTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [linkTotal, setLinkTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMediaExpanded, setIsMediaExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFileExpanded, setIsFileExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLinkExpanded, setIsLinkExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const assetsReqKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const flattenGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatInfoPopup.useCallback[flattenGroups]": (groups)=>groups.flatMap({
                "useChatInfoPopup.useCallback[flattenGroups]": (g)=>g.items ?? []
            }["useChatInfoPopup.useCallback[flattenGroups]"])
    }["useChatInfoPopup.useCallback[flattenGroups]"], []);
    const fetchAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatInfoPopup.useCallback[fetchAssets]": async (assetType, needAll)=>{
            const reqKey = assetsReqKeyRef.current;
            const postBody = {
                action: 'readAssets',
                roomId: currentRoomId,
                assetType,
                limit: needAll ? 5000 : 6
            };
            try {
                const res = await fetch('/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postBody)
                });
                const json = await res.json();
                if (assetsReqKeyRef.current !== reqKey) return;
                const groups = Array.isArray(json.groups) ? json.groups : [];
                if (assetType === 'media') {
                    const items = flattenGroups(groups);
                    const total = typeof json.total === 'number' ? json.total : items.length;
                    setMediaList(items.map({
                        "useChatInfoPopup.useCallback[fetchAssets]": (it)=>({
                                id: it.id,
                                url: it.url,
                                fileName: it.fileName,
                                type: it.type,
                                timestamp: it.timestamp
                            })
                    }["useChatInfoPopup.useCallback[fetchAssets]"]));
                    setMediaGroups(groups.map({
                        "useChatInfoPopup.useCallback[fetchAssets]": (g)=>({
                                dateLabel: String(g.dateLabel || ''),
                                items: (g.items || []).map({
                                    "useChatInfoPopup.useCallback[fetchAssets]": (it)=>({
                                            id: it.id,
                                            url: it.url,
                                            fileName: it.fileName,
                                            type: it.type,
                                            timestamp: it.timestamp
                                        })
                                }["useChatInfoPopup.useCallback[fetchAssets]"])
                            })
                    }["useChatInfoPopup.useCallback[fetchAssets]"]));
                    setMediaTotal(total);
                    setIsMediaExpanded(needAll);
                } else if (assetType === 'file') {
                    const items = flattenGroups(groups);
                    const total = typeof json.total === 'number' ? json.total : items.length;
                    setFileList(items.map({
                        "useChatInfoPopup.useCallback[fetchAssets]": (it)=>({
                                id: it.id,
                                url: it.url,
                                fileName: it.fileName || 'Tài liệu',
                                timestamp: it.timestamp
                            })
                    }["useChatInfoPopup.useCallback[fetchAssets]"]));
                    setFileGroups(groups.map({
                        "useChatInfoPopup.useCallback[fetchAssets]": (g)=>({
                                dateLabel: String(g.dateLabel || ''),
                                items: (g.items || []).map({
                                    "useChatInfoPopup.useCallback[fetchAssets]": (it)=>({
                                            id: it.id,
                                            url: it.url,
                                            fileName: it.fileName || 'Tài liệu',
                                            timestamp: it.timestamp
                                        })
                                }["useChatInfoPopup.useCallback[fetchAssets]"])
                            })
                    }["useChatInfoPopup.useCallback[fetchAssets]"]));
                    setFileTotal(total);
                    setIsFileExpanded(needAll);
                } else {
                    const items = flattenGroups(groups);
                    const total = typeof json.total === 'number' ? json.total : items.length;
                    setLinkList(items);
                    setLinkGroups(groups.map({
                        "useChatInfoPopup.useCallback[fetchAssets]": (g)=>({
                                dateLabel: String(g.dateLabel || ''),
                                items: (g.items || []).map({
                                    "useChatInfoPopup.useCallback[fetchAssets]": (it)=>({
                                            id: it.id,
                                            url: it.url,
                                            timestamp: it.timestamp
                                        })
                                }["useChatInfoPopup.useCallback[fetchAssets]"])
                            })
                    }["useChatInfoPopup.useCallback[fetchAssets]"]));
                    setLinkTotal(total);
                    setIsLinkExpanded(needAll);
                }
            } catch  {}
        }
    }["useChatInfoPopup.useCallback[fetchAssets]"], [
        currentRoomId,
        flattenGroups
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatInfoPopup.useEffect": ()=>{
            if (!Array.isArray(messages) || messages.length === 0) return;
            const latest = messages[messages.length - 1];
            const videoRegex = /(\.mp4|\.mov|\.mkv|\.webm|\.avi|\.m4v)$/i;
            const linkRegex = /(https?:\/\/|www\.)\S+/i;
            const isMediaMsg = latest.type === 'image' || latest.type === 'video' || latest.type === 'file' && (videoRegex.test(String(latest.fileUrl || '')) || videoRegex.test(String(latest.fileName || '')));
            const isFileMsg = latest.type === 'file' && !(videoRegex.test(String(latest.fileUrl || '')) || videoRegex.test(String(latest.fileName || '')));
            const isLinkMsg = latest.type === 'text' && linkRegex.test(String(latest.content || ''));
            if (isMediaMsg && openItems['Ảnh/Video']) void fetchAssets('media', isMediaExpanded);
            if (isFileMsg && openItems['File']) void fetchAssets('file', isFileExpanded);
            if (isLinkMsg && openItems['Link']) void fetchAssets('link', isLinkExpanded);
        }
    }["useChatInfoPopup.useEffect"], [
        messages,
        openItems,
        isMediaExpanded,
        isFileExpanded,
        isLinkExpanded,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatInfoPopup.useEffect": ()=>{
            if (openItems['Ảnh/Video'] && mediaList.length === 0) void fetchAssets('media', false);
        }
    }["useChatInfoPopup.useEffect"], [
        openItems,
        mediaList.length,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatInfoPopup.useEffect": ()=>{
            if (openItems['File'] && fileList.length === 0) void fetchAssets('file', false);
        }
    }["useChatInfoPopup.useEffect"], [
        openItems,
        fileList.length,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatInfoPopup.useEffect": ()=>{
            if (openItems['Link'] && linkList.length === 0) void fetchAssets('link', false);
        }
    }["useChatInfoPopup.useEffect"], [
        openItems,
        linkList.length,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatInfoPopup.useEffect": ()=>{
            assetsReqKeyRef.current += 1;
            setOpenItems({});
            setActiveMenuId(null);
            setMediaList([]);
            setMediaGroups([]);
            setFileList([]);
            setFileGroups([]);
            setLinkList([]);
            setLinkGroups([]);
            setMediaTotal(0);
            setFileTotal(0);
            setLinkTotal(0);
            setIsMediaExpanded(false);
            setIsFileExpanded(false);
            setIsLinkExpanded(false);
        }
    }["useChatInfoPopup.useEffect"], [
        currentRoomId
    ]);
    return {
        currentRoomId,
        localIsPinned,
        localIsHidden,
        openItems,
        activeMenuId,
        setActiveMenuId,
        handleChatActionClick,
        toggleItem,
        closeMenu,
        mediaList,
        mediaGroups,
        fileList,
        fileGroups,
        linkList,
        linkGroups,
        mediaTotal,
        fileTotal,
        linkTotal,
        isMediaExpanded,
        isFileExpanded,
        isLinkExpanded,
        fetchAssets
    };
}
_s(useChatInfoPopup, "pehjFaNif1+2BS2JXvk92jtrzIQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChatMentions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatMentions",
    ()=>useChatMentions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useChatMentions({ allUsers, activeMembers, currentUser, allUsersMap }) {
    _s();
    const [showMentionMenu, setShowMentionMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mentionQuery, setMentionQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mentionStartPos, setMentionStartPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMentionIndex, setSelectedMentionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const mentionMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getPlainTextFromEditable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMentions.useCallback[getPlainTextFromEditable]": ()=>{
            if (!editableRef.current) return '';
            const BLOCK_TAGS = new Set([
                'DIV',
                'P',
                'LI',
                'UL',
                'OL',
                'H1',
                'H2',
                'H3',
                'H4',
                'H5',
                'H6'
            ]);
            const traverse = {
                "useChatMentions.useCallback[getPlainTextFromEditable].traverse": (node)=>{
                    if (node.nodeType === Node.TEXT_NODE) {
                        return node.textContent || '';
                    }
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const el = node;
                        if (el.dataset && el.dataset.mention) {
                            const userId = el.dataset.userId;
                            const userName = el.dataset.userName;
                            return `@[${userName}](${userId})`;
                        }
                        if (el.tagName === 'BR') {
                            return '\n';
                        }
                        let out = '';
                        el.childNodes.forEach({
                            "useChatMentions.useCallback[getPlainTextFromEditable].traverse": (child)=>{
                                out += traverse(child);
                            }
                        }["useChatMentions.useCallback[getPlainTextFromEditable].traverse"]);
                        if (BLOCK_TAGS.has(el.tagName)) {
                            if (out && !out.endsWith('\n')) out += '\n';
                        }
                        return out;
                    }
                    return '';
                }
            }["useChatMentions.useCallback[getPlainTextFromEditable].traverse"];
            const text = traverse(editableRef.current);
            return text;
        }
    }["useChatMentions.useCallback[getPlainTextFromEditable]"], []);
    const getCursorPosition = ()=>{
        const selection = window.getSelection();
        if (!selection || !editableRef.current || selection.rangeCount === 0) return 0;
        const range = selection.getRangeAt(0);
        // Ensure the selection is actually inside our editable element
        if (!editableRef.current.contains(range.commonAncestorContainer)) {
            return 0;
        }
        try {
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(editableRef.current);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            return preCaretRange.toString().length;
        } catch (error) {
            console.error('Error getting cursor position:', error);
            return 0;
        }
    };
    const parseMentions = (text)=>{
        const mentionRegex = /@\[([^\]]+)\]\(([^)]+)\)/g;
        const mentions = [];
        let match;
        while((match = mentionRegex.exec(text)) !== null){
            mentions.push(match[2]); // userId
        }
        return {
            mentions,
            displayText: text
        };
    };
    const mentionSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChatMentions.useMemo[mentionSuggestions]": ()=>{
            const getName = {
                "useChatMentions.useMemo[mentionSuggestions].getName": (u)=>{
                    if (allUsersMap) {
                        const id = u._id || u.id;
                        const name = allUsersMap.get(String(id));
                        if (name) return name;
                    }
                    return u.name || u.name;
                }
            }["useChatMentions.useMemo[mentionSuggestions].getName"];
            const usersList = activeMembers.length > 0 ? activeMembers : allUsers;
            // Ensure current user is in the list
            const currentUserId = currentUser._id;
            const hasCurrentUser = usersList.some({
                "useChatMentions.useMemo[mentionSuggestions].hasCurrentUser": (u)=>{
                    const id = u._id || u.id;
                    return String(id) === String(currentUserId);
                }
            }["useChatMentions.useMemo[mentionSuggestions].hasCurrentUser"]);
            const finalUsersList = hasCurrentUser ? usersList : [
                ...usersList,
                currentUser
            ];
            if (!mentionQuery) return finalUsersList;
            const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(mentionQuery);
            const hasDia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasDiacritics"])(mentionQuery);
            return finalUsersList.filter({
                "useChatMentions.useMemo[mentionSuggestions]": (user)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(getName(user) || '', mentionQuery)
            }["useChatMentions.useMemo[mentionSuggestions]"]);
        }
    }["useChatMentions.useMemo[mentionSuggestions]"], [
        mentionQuery,
        activeMembers,
        allUsers,
        currentUser,
        allUsersMap
    ]);
    const handleInputChangeEditable = ()=>{
        if (!editableRef.current) return;
        const text = editableRef.current.textContent || '';
        const cursorPos = getCursorPosition();
        const textBeforeCursor = text.slice(0, cursorPos);
        const lastAtIndex = textBeforeCursor.lastIndexOf('@');
        if (lastAtIndex !== -1) {
            const textAfterAt = textBeforeCursor.slice(lastAtIndex + 1);
            if (textAfterAt.includes(' ') || textAfterAt.includes('\n')) {
                setShowMentionMenu(false);
                setMentionStartPos(null);
            } else {
                setShowMentionMenu(true);
                setMentionQuery(textAfterAt);
                setMentionStartPos(lastAtIndex);
                setSelectedMentionIndex(0);
            }
        } else {
            setShowMentionMenu(false);
            setMentionStartPos(null);
        }
    };
    const selectMention = (user)=>{
        if (mentionStartPos === null || !editableRef.current) return;
        const editable = editableRef.current;
        const userId = user._id;
        const userName = allUsersMap?.get(String(userId)) || user.name || 'User';
        const cursorPos = getCursorPosition();
        // Tạo span mention mới
        const mentionSpan = document.createElement('span');
        mentionSpan.contentEditable = 'false';
        mentionSpan.className = 'inline-flex items-center bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-sm font-medium mx-0.5';
        mentionSpan.dataset.mention = 'true';
        mentionSpan.dataset.userId = userId;
        mentionSpan.dataset.userName = userName;
        mentionSpan.textContent = `@${userName}`;
        // Helper: Tạo range theo vị trí text (dựa trên textContent)
        const createRangeFromOffsets = (start, end)=>{
            const range = document.createRange();
            let current = 0;
            let startNode = null;
            let startOffset = 0;
            let endNode = null;
            let endOffset = 0;
            const walker = (node)=>{
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent || '';
                    const next = current + text.length;
                    if (!startNode && start >= current && start <= next) {
                        startNode = node;
                        startOffset = start - current;
                    }
                    if (!endNode && end >= current && end <= next) {
                        endNode = node;
                        endOffset = end - current;
                    }
                    current = next;
                } else {
                    node.childNodes.forEach((child)=>{
                        if (!endNode) {
                            const done = walker(child);
                            if (done) return;
                        }
                    });
                }
                return !!endNode;
            };
            walker(editable);
            if (!startNode || !endNode) return null;
            range.setStart(startNode, startOffset);
            range.setEnd(endNode, endOffset);
            return range;
        };
        const range = createRangeFromOffsets(mentionStartPos, cursorPos);
        if (!range) {
            // Fallback: chèn mention ở cuối nếu không tính được range
            editable.appendChild(mentionSpan);
            const spaceNode = document.createTextNode(' ');
            editable.appendChild(spaceNode);
            const sel = window.getSelection();
            if (sel) {
                const caretRange = document.createRange();
                caretRange.setStartAfter(spaceNode);
                caretRange.collapse(true);
                sel.removeAllRanges();
                sel.addRange(caretRange);
            }
        } else {
            // Xoá đoạn @typing hiện tại và thay bằng span mention
            range.deleteContents();
            const spaceNode = document.createTextNode(' ');
            range.insertNode(mentionSpan);
            mentionSpan.after(spaceNode);
            const sel = window.getSelection();
            if (sel) {
                const caretRange = document.createRange();
                caretRange.setStartAfter(spaceNode);
                caretRange.collapse(true);
                sel.removeAllRanges();
                sel.addRange(caretRange);
            }
        }
        setShowMentionMenu(false);
        setMentionStartPos(null);
        setMentionQuery('');
        // Đảm bảo focus lại vào ô nhập
        setTimeout(()=>{
            editable.focus();
        }, 0);
    };
    const handleKeyDownEditable = (e)=>{
        if (showMentionMenu) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedMentionIndex((prev)=>Math.min(prev + 1, mentionSuggestions.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedMentionIndex((prev)=>Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (mentionSuggestions[selectedMentionIndex]) {
                    selectMention(mentionSuggestions[selectedMentionIndex]);
                }
            } else if (e.key === 'Escape') {
                setShowMentionMenu(false);
                setMentionStartPos(null);
            }
        }
    };
    return {
        showMentionMenu,
        mentionSuggestions,
        selectedMentionIndex,
        mentionMenuRef,
        editableRef,
        getPlainTextFromEditable,
        parseMentions,
        handleInputChangeEditable,
        handleKeyDownEditable,
        selectMention,
        setShowMentionMenu
    };
}
_s(useChatMentions, "yHWamXJ6Ek2uhNHCzyS2ztWVd74=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChatUpload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "useChatUpload",
    ()=>useChatUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$uploadHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/uploadHelper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/uploadStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
let swReadyPromise = null;
let swListenerAttached = false;
const pendingUploads = new Map();
async function ensureServiceWorker() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!('serviceWorker' in navigator)) return null;
    if (!swReadyPromise) {
        swReadyPromise = navigator.serviceWorker.register('/sw-upload.js', {
            scope: '/'
        }).then(()=>navigator.serviceWorker.ready);
    }
    const reg = await swReadyPromise.catch(()=>null);
    if (reg && !swListenerAttached) {
        swListenerAttached = true;
        navigator.serviceWorker.addEventListener('message', (e)=>{
            const data = e.data;
            if (!data || !data.type) return;
            const id = String(data.uploadId || '');
            const entry = pendingUploads.get(id);
            if (!entry) return;
            if (data.type === 'UPLOAD_COMPLETE' && data.response) {
                entry.resolve(data.response);
                pendingUploads.delete(id);
            } else if (data.type === 'UPLOAD_FAILED') {
                entry.reject(new Error(data.message || 'Upload failed'));
                pendingUploads.delete(id);
            }
        });
    }
    return reg;
}
function useChatUpload({ roomId, currentUser, selectedChat, isGroup, sendMessageProcess, setMessages, onScrollBottom }) {
    _s();
    const sortMessagesAsc = (list)=>{
        const safeNum = (t)=>{
            const n = Number(t);
            return Number.isFinite(n) ? n : 0;
        };
        const cmp = (a, b)=>{
            const ta = safeNum(a.timestamp);
            const tb = safeNum(b.timestamp);
            if (ta !== tb) return ta - tb;
            const ia = String(a._id || '');
            const ib = String(b._id || '');
            if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
            if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
            return ia.localeCompare(ib);
        };
        return list.slice().sort(cmp);
    };
    const [uploadingFiles, setUploadingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const activeSourcesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const pendingKey = `pendingUploads:${roomId}`;
    const readPending = ()=>{
        try {
            const raw = localStorage.getItem(pendingKey);
            return raw ? JSON.parse(raw) : [];
        } catch  {
            return [];
        }
    };
    const writePending = (arr)=>{
        try {
            localStorage.setItem(pendingKey, JSON.stringify(arr));
        } catch  {}
    };
    const addPending = (item)=>{
        const arr = readPending();
        const exists = arr.some((x)=>x.tempId === item.tempId);
        const next = exists ? arr.map((x)=>x.tempId === item.tempId ? item : x) : [
            ...arr,
            item
        ];
        writePending(next);
    };
    const setPendingPercent = (tempId, percent)=>{
        const arr = readPending();
        const next = arr.map((x)=>x.tempId === tempId ? {
                ...x,
                percent
            } : x);
        writePending(next);
    };
    const removePending = (tempId)=>{
        const arr = readPending();
        const next = arr.filter((x)=>x.tempId !== tempId);
        writePending(next);
    };
    const handleUploadAndSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatUpload.useCallback[handleUploadAndSend]": async (file, type, caption, replyToMessageId, mentions, senderName, batchId, videoCropConfig)=>{
            const sanitizeName = {
                "useChatUpload.useCallback[handleUploadAndSend].sanitizeName": (name)=>{
                    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
                }
            }["useChatUpload.useCallback[handleUploadAndSend].sanitizeName"];
            const uploadId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
            const formData = new FormData();
            formData.append('file', file);
            formData.append('roomId', roomId);
            formData.append('sender', currentUser._id);
            if (!isGroup && '_id' in selectedChat) {
                formData.append('receiver', selectedChat._id);
            }
            formData.append('type', type);
            formData.append('fileName', file.name);
            if (batchId) {
                formData.append('batchId', batchId);
            }
            let folderNameStr = '';
            if (isGroup) {
                folderNameStr = `Group__${sanitizeName(selectedChat.name)}`;
            } else {
                const myName = sanitizeName(currentUser.name || 'Me');
                const partnerBaseName = '_id' in selectedChat && 'name' in selectedChat ? selectedChat.name || 'User' : 'User';
                const partnerName = sanitizeName(partnerBaseName);
                const names = [
                    myName,
                    partnerName
                ].sort();
                folderNameStr = `${names[0]}__${names[1]}`;
            }
            formData.append('folderName', folderNameStr);
            const tempMsg = {
                _id: tempId,
                roomId,
                sender: currentUser._id,
                senderModel: currentUser,
                batchId,
                fileUrl: URL.createObjectURL(file),
                fileName: file.name,
                type,
                timestamp: Date.now(),
                content: caption,
                isSending: true
            };
            setMessages({
                "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>sortMessagesAsc([
                        ...prev,
                        tempMsg
                    ])
            }["useChatUpload.useCallback[handleUploadAndSend]"]);
            setUploadingFiles({
                "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>({
                        ...prev,
                        [tempId]: 0
                    })
            }["useChatUpload.useCallback[handleUploadAndSend]"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setProgress"])(tempId, 0);
            addPending({
                tempId,
                uploadId,
                type,
                fileName: file.name,
                caption,
                fileUrl: tempMsg.fileUrl || '',
                percent: 0
            });
            try {
                onScrollBottom?.();
            } catch  {}
            let success = false;
            let lastMessage = '';
            const useSW = !!await ensureServiceWorker();
            if (useSW) {
                const es = ("TURBOPACK compile-time truthy", 1) ? new EventSource(`/api/upload/progress?id=${encodeURIComponent(uploadId)}`) : "TURBOPACK unreachable";
                const updatePercent = {
                    "useChatUpload.useCallback[handleUploadAndSend].updatePercent": (p)=>{
                        const displayed = Math.min(p, 95);
                        setUploadingFiles({
                            "useChatUpload.useCallback[handleUploadAndSend].updatePercent": (prev)=>({
                                    ...prev,
                                    [tempId]: displayed
                                })
                        }["useChatUpload.useCallback[handleUploadAndSend].updatePercent"]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setProgress"])(tempId, displayed);
                        setPendingPercent(tempId, displayed);
                    }
                }["useChatUpload.useCallback[handleUploadAndSend].updatePercent"];
                if (es) {
                    activeSourcesRef.current[uploadId] = es;
                    es.onmessage = ({
                        "useChatUpload.useCallback[handleUploadAndSend]": (ev)=>{
                            try {
                                const payload = JSON.parse(ev.data);
                                const percent = typeof payload.percent === 'number' ? payload.percent : 0;
                                updatePercent(percent);
                                const done = !!payload.done;
                                if (done) {
                                    es.close();
                                    delete activeSourcesRef.current[uploadId];
                                }
                            } catch  {}
                        }
                    })["useChatUpload.useCallback[handleUploadAndSend]"];
                    es.onerror = ({
                        "useChatUpload.useCallback[handleUploadAndSend]": ()=>{
                            try {
                                es.close();
                                delete activeSourcesRef.current[uploadId];
                            } catch  {}
                        }
                    })["useChatUpload.useCallback[handleUploadAndSend]"];
                }
                for(let attempt = 0; attempt < 2 && !success; attempt++){
                    try {
                        const res = await new Promise({
                            "useChatUpload.useCallback[handleUploadAndSend]": (resolve, reject)=>{
                                pendingUploads.set(uploadId, {
                                    resolve,
                                    reject
                                });
                                const controller = navigator.serviceWorker.controller;
                                const fields = {
                                    file,
                                    roomId,
                                    sender: currentUser._id,
                                    receiver: !isGroup && '_id' in selectedChat ? selectedChat._id : '',
                                    type,
                                    fileName: file.name,
                                    folderName: folderNameStr,
                                    batchId
                                };
                                controller?.postMessage({
                                    type: 'UPLOAD',
                                    uploadId,
                                    fields
                                });
                            }
                        }["useChatUpload.useCallback[handleUploadAndSend]"]);
                        if (res.success) {
                            success = true;
                            const finalMsg = res.data;
                            setMessages({
                                "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>prev.filter({
                                        "useChatUpload.useCallback[handleUploadAndSend]": (m)=>m._id !== tempId
                                    }["useChatUpload.useCallback[handleUploadAndSend]"])
                            }["useChatUpload.useCallback[handleUploadAndSend]"]);
                            const socketData = {
                                ...finalMsg,
                                _id: res._id || res.data._id || Date.now().toString(),
                                roomId,
                                sender: currentUser._id,
                                senderName: senderName || currentUser.name,
                                isGroup,
                                receiver: isGroup ? null : '_id' in selectedChat ? selectedChat._id : '',
                                members: isGroup ? selectedChat.members : [],
                                type,
                                timestamp: Date.now(),
                                content: caption,
                                replyToMessageId,
                                mentions,
                                batchId,
                                videoCropConfig: type === 'video' ? videoCropConfig ?? null : null
                            };
                            await sendMessageProcess(socketData);
                        } else {
                            lastMessage = res.message || 'Không xác định';
                        }
                    } catch (e) {
                        lastMessage = e?.message || String(e) || 'Không xác định';
                    }
                }
                try {
                    es?.close();
                    if (es) delete activeSourcesRef.current[uploadId];
                } catch  {}
            } else {
                for(let attempt = 0; attempt < 2 && !success; attempt++){
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$uploadHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFileWithProgress"])(`/api/upload?uploadId=${uploadId}`, formData, {
                            "useChatUpload.useCallback[handleUploadAndSend]": (clientRawPercent)=>{
                                const displayed = Math.min(clientRawPercent, 95);
                                setUploadingFiles({
                                    "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>({
                                            ...prev,
                                            [tempId]: displayed
                                        })
                                }["useChatUpload.useCallback[handleUploadAndSend]"]);
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setProgress"])(tempId, displayed);
                                setPendingPercent(tempId, displayed);
                            }
                        }["useChatUpload.useCallback[handleUploadAndSend]"]);
                        if (res.success) {
                            success = true;
                            const finalMsg = res.data;
                            setMessages({
                                "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>prev.filter({
                                        "useChatUpload.useCallback[handleUploadAndSend]": (m)=>m._id !== tempId
                                    }["useChatUpload.useCallback[handleUploadAndSend]"])
                            }["useChatUpload.useCallback[handleUploadAndSend]"]);
                            const socketData = {
                                ...finalMsg,
                                _id: res._id || res.data._id || Date.now().toString(),
                                roomId,
                                sender: currentUser._id,
                                senderName: senderName || currentUser.name,
                                isGroup,
                                receiver: isGroup ? null : '_id' in selectedChat ? selectedChat._id : '',
                                members: isGroup ? selectedChat.members : [],
                                type,
                                timestamp: Date.now(),
                                content: caption,
                                replyToMessageId,
                                mentions,
                                batchId,
                                videoCropConfig: type === 'video' ? videoCropConfig ?? null : null
                            };
                            await sendMessageProcess(socketData);
                        } else {
                            lastMessage = res.message || 'Không xác định';
                        }
                    } catch (e) {
                        lastMessage = e?.message || String(e) || 'Không xác định';
                    }
                }
            }
            if (!success) {
                setMessages({
                    "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>prev.filter({
                            "useChatUpload.useCallback[handleUploadAndSend]": (m)=>m._id !== tempId
                        }["useChatUpload.useCallback[handleUploadAndSend]"])
                }["useChatUpload.useCallback[handleUploadAndSend]"]);
                try {
                    alert(`Tải lên thất bại: ${file.name}. Lý do: ${lastMessage}`);
                } catch  {}
            }
            setUploadingFiles({
                "useChatUpload.useCallback[handleUploadAndSend]": (prev)=>{
                    const newState = {
                        ...prev
                    };
                    delete newState[tempId];
                    return newState;
                }
            }["useChatUpload.useCallback[handleUploadAndSend]"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearProgress"])(tempId);
            removePending(tempId);
        }
    }["useChatUpload.useCallback[handleUploadAndSend]"], [
        roomId,
        currentUser,
        isGroup,
        selectedChat,
        sendMessageProcess,
        setMessages,
        onScrollBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatUpload.useEffect": ()=>{
            const pending = readPending();
            if (pending.length === 0) return;
            pending.forEach({
                "useChatUpload.useEffect": (item)=>{
                    setMessages({
                        "useChatUpload.useEffect": (prev)=>{
                            const exists = prev.some({
                                "useChatUpload.useEffect.exists": (m)=>m._id === item.tempId
                            }["useChatUpload.useEffect.exists"]);
                            if (exists) return prev;
                            const msg = {
                                _id: item.tempId,
                                roomId,
                                sender: currentUser._id,
                                senderModel: currentUser,
                                type: item.type,
                                fileUrl: item.fileUrl,
                                fileName: item.fileName,
                                timestamp: Date.now(),
                                content: item.caption,
                                isSending: true
                            };
                            return sortMessagesAsc([
                                ...prev,
                                msg
                            ]);
                        }
                    }["useChatUpload.useEffect"]);
                    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgress"])(item.tempId);
                    const percent = p >= 0 ? p : item.percent || 0;
                    setUploadingFiles({
                        "useChatUpload.useEffect": (prev)=>({
                                ...prev,
                                [item.tempId]: Math.min(percent, 95)
                            })
                    }["useChatUpload.useEffect"]);
                    if (!activeSourcesRef.current[item.uploadId]) {
                        try {
                            const es = new EventSource(`/api/upload/progress?id=${encodeURIComponent(item.uploadId)}`);
                            activeSourcesRef.current[item.uploadId] = es;
                            es.onmessage = ({
                                "useChatUpload.useEffect": (ev)=>{
                                    try {
                                        const payload = JSON.parse(ev.data);
                                        const percentN = typeof payload.percent === 'number' ? payload.percent : 0;
                                        const displayed = Math.min(percentN, 95);
                                        setUploadingFiles({
                                            "useChatUpload.useEffect": (prev)=>({
                                                    ...prev,
                                                    [item.tempId]: displayed
                                                })
                                        }["useChatUpload.useEffect"]);
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setProgress"])(item.tempId, displayed);
                                        setPendingPercent(item.tempId, displayed);
                                        const done = !!payload.done;
                                        if (done) {
                                            es.close();
                                            delete activeSourcesRef.current[item.uploadId];
                                            setUploadingFiles({
                                                "useChatUpload.useEffect": (prev)=>{
                                                    const next = {
                                                        ...prev
                                                    };
                                                    delete next[item.tempId];
                                                    return next;
                                                }
                                            }["useChatUpload.useEffect"]);
                                            setMessages({
                                                "useChatUpload.useEffect": (prev)=>prev.filter({
                                                        "useChatUpload.useEffect": (m)=>m._id !== item.tempId
                                                    }["useChatUpload.useEffect"])
                                            }["useChatUpload.useEffect"]);
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                                            removePending(item.tempId);
                                            ({
                                                "useChatUpload.useEffect": async ()=>{
                                                    try {
                                                        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                                                            limit: 1,
                                                            sortOrder: 'desc',
                                                            extraFilters: {
                                                                uploadId: item.uploadId
                                                            }
                                                        });
                                                        const list = resp?.data || [];
                                                        const match = list[0];
                                                        if (match) {
                                                            setMessages({
                                                                "useChatUpload.useEffect": (prev)=>{
                                                                    const exists = prev.some({
                                                                        "useChatUpload.useEffect.exists": (mm)=>String(mm._id) === String(match._id)
                                                                    }["useChatUpload.useEffect.exists"]);
                                                                    return exists ? prev : [
                                                                        ...prev,
                                                                        match
                                                                    ];
                                                                }
                                                            }["useChatUpload.useEffect"]);
                                                        }
                                                    } catch  {}
                                                }
                                            })["useChatUpload.useEffect"]();
                                        }
                                    } catch  {}
                                }
                            })["useChatUpload.useEffect"];
                            es.onerror = ({
                                "useChatUpload.useEffect": ()=>{
                                    try {
                                        es.close();
                                        delete activeSourcesRef.current[item.uploadId];
                                    } catch  {}
                                }
                            })["useChatUpload.useEffect"];
                        } catch  {}
                    }
                }
            }["useChatUpload.useEffect"]);
            setTimeout({
                "useChatUpload.useEffect": ()=>{
                    const again = readPending();
                    again.forEach({
                        "useChatUpload.useEffect": (item)=>{
                            setMessages({
                                "useChatUpload.useEffect": (prev)=>{
                                    const exists = prev.some({
                                        "useChatUpload.useEffect.exists": (m)=>m._id === item.tempId
                                    }["useChatUpload.useEffect.exists"]);
                                    if (exists) return prev;
                                    const msg = {
                                        _id: item.tempId,
                                        roomId,
                                        sender: currentUser._id,
                                        senderModel: currentUser,
                                        type: item.type,
                                        fileUrl: item.fileUrl,
                                        fileName: item.fileName,
                                        timestamp: Date.now(),
                                        content: item.caption,
                                        isSending: true
                                    };
                                    return sortMessagesAsc([
                                        ...prev,
                                        msg
                                    ]);
                                }
                            }["useChatUpload.useEffect"]);
                        }
                    }["useChatUpload.useEffect"]);
                }
            }["useChatUpload.useEffect"], 600);
            setTimeout({
                "useChatUpload.useEffect": ()=>{
                    const again = readPending();
                    again.forEach({
                        "useChatUpload.useEffect": (item)=>{
                            setMessages({
                                "useChatUpload.useEffect": (prev)=>{
                                    const exists = prev.some({
                                        "useChatUpload.useEffect.exists": (m)=>m._id === item.tempId
                                    }["useChatUpload.useEffect.exists"]);
                                    if (exists) return prev;
                                    const msg = {
                                        _id: item.tempId,
                                        roomId,
                                        sender: currentUser._id,
                                        senderModel: currentUser,
                                        type: item.type,
                                        fileUrl: item.fileUrl,
                                        fileName: item.fileName,
                                        timestamp: Date.now(),
                                        content: item.caption,
                                        isSending: true
                                    };
                                    return sortMessagesAsc([
                                        ...prev,
                                        msg
                                    ]);
                                }
                            }["useChatUpload.useEffect"]);
                        }
                    }["useChatUpload.useEffect"]);
                }
            }["useChatUpload.useEffect"], 1500);
            return ({
                "useChatUpload.useEffect": ()=>{
                    Object.values(activeSourcesRef.current).forEach({
                        "useChatUpload.useEffect": (es)=>{
                            try {
                                es.close();
                            } catch  {}
                        }
                    }["useChatUpload.useEffect"]);
                    activeSourcesRef.current = {};
                }
            })["useChatUpload.useEffect"];
        }
    }["useChatUpload.useEffect"], [
        roomId,
        currentUser,
        setMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatUpload.useEffect": ()=>{
            const onSwMessage = {
                "useChatUpload.useEffect.onSwMessage": async (e)=>{
                    const data = e.data;
                    if (!data || !data.type) return;
                    const id = String(data.uploadId || '');
                    if (!id) return;
                    const arr = readPending();
                    const item = arr.find({
                        "useChatUpload.useEffect.onSwMessage.item": (x)=>x.uploadId === id
                    }["useChatUpload.useEffect.onSwMessage.item"]);
                    if (!item) return;
                    if (data.type === 'UPLOAD_COMPLETE' && data.response) {
                        const res = data.response;
                        if (res.success) {
                            setUploadingFiles({
                                "useChatUpload.useEffect.onSwMessage": (prev)=>{
                                    const next = {
                                        ...prev
                                    };
                                    delete next[item.tempId];
                                    return next;
                                }
                            }["useChatUpload.useEffect.onSwMessage"]);
                            setMessages({
                                "useChatUpload.useEffect.onSwMessage": (prev)=>prev.filter({
                                        "useChatUpload.useEffect.onSwMessage": (m)=>m._id !== item.tempId
                                    }["useChatUpload.useEffect.onSwMessage"])
                            }["useChatUpload.useEffect.onSwMessage"]);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                            removePending(item.tempId);
                            const finalMsg = res.data;
                            const socketData = {
                                ...finalMsg,
                                _id: finalMsg._id || Date.now().toString(),
                                roomId,
                                sender: currentUser._id,
                                senderName: currentUser.name,
                                isGroup,
                                receiver: isGroup ? null : '_id' in selectedChat ? selectedChat._id : '',
                                members: isGroup ? selectedChat.members : [],
                                type: item.type,
                                timestamp: Date.now(),
                                content: item.caption,
                                batchId: finalMsg.batchId
                            };
                            try {
                                await sendMessageProcess(socketData);
                            } catch  {}
                        } else {
                            setUploadingFiles({
                                "useChatUpload.useEffect.onSwMessage": (prev)=>{
                                    const next = {
                                        ...prev
                                    };
                                    delete next[item.tempId];
                                    return next;
                                }
                            }["useChatUpload.useEffect.onSwMessage"]);
                            setMessages({
                                "useChatUpload.useEffect.onSwMessage": (prev)=>prev.filter({
                                        "useChatUpload.useEffect.onSwMessage": (m)=>m._id !== item.tempId
                                    }["useChatUpload.useEffect.onSwMessage"])
                            }["useChatUpload.useEffect.onSwMessage"]);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                            removePending(item.tempId);
                        }
                    } else if (data.type === 'UPLOAD_FAILED') {
                        setUploadingFiles({
                            "useChatUpload.useEffect.onSwMessage": (prev)=>{
                                const next = {
                                    ...prev
                                };
                                delete next[item.tempId];
                                return next;
                            }
                        }["useChatUpload.useEffect.onSwMessage"]);
                        setMessages({
                            "useChatUpload.useEffect.onSwMessage": (prev)=>prev.filter({
                                    "useChatUpload.useEffect.onSwMessage": (m)=>m._id !== item.tempId
                                }["useChatUpload.useEffect.onSwMessage"])
                        }["useChatUpload.useEffect.onSwMessage"]);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                        removePending(item.tempId);
                    }
                }
            }["useChatUpload.useEffect.onSwMessage"];
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.addEventListener('message', onSwMessage);
            }
            return ({
                "useChatUpload.useEffect": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'serviceWorker' in navigator) {
                        navigator.serviceWorker.removeEventListener('message', onSwMessage);
                    }
                }
            })["useChatUpload.useEffect"];
        }
    }["useChatUpload.useEffect"], [
        roomId,
        currentUser,
        selectedChat,
        isGroup,
        sendMessageProcess,
        setMessages
    ]);
    return {
        uploadingFiles,
        handleUploadAndSend
    };
}
_s(useChatUpload, "xy1DxpWSPhyNHZBWrh0q+LiEWEA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChatVoiceInput.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatVoiceInput",
    ()=>useChatVoiceInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/chatInput.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useChatVoiceInput({ editableRef, handleInputChangeEditable }) {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleVoiceInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatVoiceInput.useCallback[handleVoiceInput]": async ()=>{
            const SpeechRecognition = ("TURBOPACK compile-time truthy", 1) ? window.SpeechRecognition || window.webkitSpeechRecognition : "TURBOPACK unreachable";
            if (!SpeechRecognition) {
                alert('Trình duyệt của bạn không hỗ trợ chức năng này. Vui lòng dùng Chrome hoặc Edge.');
                return;
            }
            if (isListening) {
                if (recognitionRef.current) {
                    recognitionRef.current.stop();
                }
                setIsListening(false);
                return;
            }
            const isLocal = ("TURBOPACK compile-time value", "object") !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
            const isSecure = ("TURBOPACK compile-time value", "object") !== 'undefined' && (window.isSecureContext || window.location.protocol === 'https:');
            if (!isSecure && !isLocal) {
                alert('Vui lòng truy cập qua HTTPS hoặc localhost để sử dụng nhập bằng giọng nói.');
                return;
            }
            try {
                if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });
                    stream.getTracks().forEach({
                        "useChatVoiceInput.useCallback[handleVoiceInput]": (t)=>t.stop()
                    }["useChatVoiceInput.useCallback[handleVoiceInput]"]);
                }
            } catch  {
                alert('Vui lòng cấp quyền microphone cho trình duyệt để sử dụng nhập bằng giọng nói.');
                return;
            }
            const recognition = new SpeechRecognition();
            recognition.lang = 'vi-VN';
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.onstart = ({
                "useChatVoiceInput.useCallback[handleVoiceInput]": ()=>{
                    setIsListening(true);
                }
            })["useChatVoiceInput.useCallback[handleVoiceInput]"];
            recognition.onend = ({
                "useChatVoiceInput.useCallback[handleVoiceInput]": ()=>{
                    setIsListening(false);
                }
            })["useChatVoiceInput.useCallback[handleVoiceInput]"];
            recognition.onresult = ({
                "useChatVoiceInput.useCallback[handleVoiceInput]": (event)=>{
                    const transcript = event.results[0][0].transcript;
                    const el = editableRef.current;
                    if (el) {
                        el.focus();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertTextAtCursor"])(el, transcript);
                        handleInputChangeEditable();
                    }
                }
            })["useChatVoiceInput.useCallback[handleVoiceInput]"];
            recognition.onerror = ({
                "useChatVoiceInput.useCallback[handleVoiceInput]": (event)=>{
                    if ((event.error || '').toLowerCase() === 'not-allowed') {
                        alert('Truy cập microphone bị từ chối. Vui lòng cấp quyền trong cài đặt trình duyệt.');
                    }
                    setIsListening(false);
                }
            })["useChatVoiceInput.useCallback[handleVoiceInput]"];
            recognitionRef.current = recognition;
            recognition.start();
        }
    }["useChatVoiceInput.useCallback[handleVoiceInput]"], [
        isListening,
        editableRef,
        handleInputChangeEditable
    ]);
    return {
        isListening,
        handleVoiceInput
    };
}
_s(useChatVoiceInput, "tRjE62cXTYukRAMqM3tkxPAhJYY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChatMembers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "useChatMembers",
    ()=>useChatMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useChatMembers({ selectedChat, isGroup, currentUser, sendNotifyMessage }) {
    _s();
    const [memberCount, setMemberCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeMembers, setActiveMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatMembers.useEffect": ()=>{
            if (isGroup && selectedChat.members) {
                const m = selectedChat.members;
                setActiveMembers(m);
                setMemberCount(m.length);
            } else {
                setActiveMembers([]);
                setMemberCount(0);
            }
        }
    }["useChatMembers.useEffect"], [
        selectedChat,
        isGroup
    ]);
    const handleMemberRemoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMembers.useCallback[handleMemberRemoved]": async (removedMemberId, removedMemberName)=>{
            setActiveMembers({
                "useChatMembers.useCallback[handleMemberRemoved]": (prev)=>prev.filter({
                        "useChatMembers.useCallback[handleMemberRemoved]": (m)=>String(m._id) !== String(removedMemberId)
                    }["useChatMembers.useCallback[handleMemberRemoved]"])
            }["useChatMembers.useCallback[handleMemberRemoved]"]);
            setMemberCount({
                "useChatMembers.useCallback[handleMemberRemoved]": (prev)=>Math.max(0, prev - 1)
            }["useChatMembers.useCallback[handleMemberRemoved]"]);
            const myName = currentUser.name || 'Quản trị viên';
            await sendNotifyMessage(`${myName} đã mời ${removedMemberName} ra khỏi nhóm.`);
        }
    }["useChatMembers.useCallback[handleMemberRemoved]"], [
        currentUser.name,
        sendNotifyMessage
    ]);
    const handleRoleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMembers.useCallback[handleRoleChange]": async (memberId, memberName, newRole)=>{
            setActiveMembers({
                "useChatMembers.useCallback[handleRoleChange]": (prev)=>prev.map({
                        "useChatMembers.useCallback[handleRoleChange]": (m)=>{
                            if (String(m._id) === String(memberId)) {
                                return {
                                    ...m,
                                    role: newRole
                                };
                            }
                            return m;
                        }
                    }["useChatMembers.useCallback[handleRoleChange]"])
            }["useChatMembers.useCallback[handleRoleChange]"]);
            const myName = currentUser.name || 'Quản trị viên';
            let actionText = '';
            if (newRole === 'ADMIN') {
                actionText = `đã bổ nhiệm ${memberName} làm phó nhóm.`;
            } else {
                actionText = `đã hủy quyền phó nhóm của ${memberName}.`;
            }
            await sendNotifyMessage(`${myName} ${actionText}`);
        }
    }["useChatMembers.useCallback[handleRoleChange]"], [
        currentUser.name,
        sendNotifyMessage
    ]);
    const handleMembersAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatMembers.useCallback[handleMembersAdded]": async (newUsers)=>{
            if (!newUsers || newUsers.length === 0) return;
            const newMembersFormatted = newUsers.map({
                "useChatMembers.useCallback[handleMembersAdded].newMembersFormatted": (u)=>({
                        _id: u._id,
                        name: u.name || 'Thành viên',
                        avatar: u.avatar,
                        role: 'MEMBER',
                        joinedAt: Date.now()
                    })
            }["useChatMembers.useCallback[handleMembersAdded].newMembersFormatted"]);
            setActiveMembers({
                "useChatMembers.useCallback[handleMembersAdded]": (prev)=>[
                        ...prev,
                        ...newMembersFormatted
                    ]
            }["useChatMembers.useCallback[handleMembersAdded]"]);
            setMemberCount({
                "useChatMembers.useCallback[handleMembersAdded]": (prev)=>prev + newUsers.length
            }["useChatMembers.useCallback[handleMembersAdded]"]);
        }
    }["useChatMembers.useCallback[handleMembersAdded]"], [
        currentUser.name,
        sendNotifyMessage
    ]);
    return {
        memberCount,
        activeMembers,
        handleMemberRemoved,
        handleRoleChange,
        handleMembersAdded
    };
}
_s(useChatMembers, "zFWDjod3TrUW6grK1xiw1kPYeps=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useHomePage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHomePage",
    ()=>useHomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatNotifications.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useHomePage(config) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { playMessageSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatNotifications"])({});
    // State quản lý dữ liệu
    const [allUsers, setAllUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const allUsersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedChatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showCreateGroupModal, setShowCreateGroupModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showGlobalSearchModal, setShowGlobalSearchModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalSearchTerm, setGlobalSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [globalSearchResults, setGlobalSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        contacts: [],
        messages: []
    });
    const [scrollToMessageId, setScrollToMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roomSearchKeyword, setRoomSearchKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const reminderTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const scheduledReminderIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // 🔥 Đồng bộ searchTerm từ sidebar sang globalSearchTerm
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            setGlobalSearchTerm(searchTerm);
        }
    }["useHomePage.useEffect"], [
        searchTerm
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            allUsersRef.current = allUsers;
        }
    }["useHomePage.useEffect"], [
        allUsers
    ]);
    // 1. Hàm Fetch Data (User & Group)
    const fetchAllData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[fetchAllData]": async ()=>{
            if (!currentUser) return;
            // Fetch Users
            try {
                const res = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'read',
                        currentUserId: currentUser._id
                    })
                });
                const data = await res.json();
                const list = Array.isArray(data) ? data : data.data || [];
                setAllUsers(list.filter({
                    "useHomePage.useCallback[fetchAllData]": (u)=>u._id !== currentUser._id
                }["useHomePage.useCallback[fetchAllData]"]));
            } catch (e) {
                console.error('Fetch users error:', e);
            }
            // Fetch Groups
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
                if (data.data) {
                    setGroups(data.data);
                    // Đồng bộ lại selectedChat (nếu đang mở 1 group) với dữ liệu mới nhất
                    setSelectedChat({
                        "useHomePage.useCallback[fetchAllData]": (prev)=>{
                            if (!prev) return prev;
                            // Chỉ áp dụng cho nhóm, chat 1-1 sẽ không có trong danh sách groups
                            const maybeGroup = prev;
                            const isGroupChat = maybeGroup.isGroup === true || Array.isArray(maybeGroup.members);
                            if (!isGroupChat) return prev;
                            const updated = data.data.find({
                                "useHomePage.useCallback[fetchAllData].updated": (g)=>g._id === maybeGroup._id
                            }["useHomePage.useCallback[fetchAllData].updated"]);
                            // Nếu không tìm thấy nhóm trong danh sách mới (có thể đã bị giải tán), xóa selectedChat
                            if (!updated) {
                                return null;
                            }
                            return updated;
                        }
                    }["useHomePage.useCallback[fetchAllData]"]);
                }
            } catch (e) {
                console.error('Fetch groups error:', e);
            }
        }
    }["useHomePage.useCallback[fetchAllData]"], [
        currentUser
    ]);
    // Hàm xử lý chọn Chat (Optimistic Update - Xóa badge)
    const handleSelectChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[handleSelectChat]": (item)=>{
            setSelectedChat(item);
            selectedChatRef.current = item;
            if (item.isGroup || item.members) {
                setGroups({
                    "useHomePage.useCallback[handleSelectChat]": (prev)=>prev.map({
                            "useHomePage.useCallback[handleSelectChat]": (g)=>g._id === item._id ? {
                                    ...g,
                                    unreadCount: 0
                                } : g
                        }["useHomePage.useCallback[handleSelectChat]"])
                }["useHomePage.useCallback[handleSelectChat]"]);
            } else {
                setAllUsers({
                    "useHomePage.useCallback[handleSelectChat]": (prev)=>prev.map({
                            "useHomePage.useCallback[handleSelectChat]": (u)=>u._id === item._id ? {
                                    ...u,
                                    unreadCount: 0
                                } : u
                        }["useHomePage.useCallback[handleSelectChat]"])
                }["useHomePage.useCallback[handleSelectChat]"]);
            }
        }
    }["useHomePage.useCallback[handleSelectChat]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            const handler = {
                "useHomePage.useEffect.handler": (e)=>{
                    const d = e.detail || {};
                    const userId = String(d.userId || d._id || '');
                    if (!userId) return;
                    const found = allUsersRef.current.find({
                        "useHomePage.useEffect.handler": (u)=>String(u._id) === userId
                    }["useHomePage.useEffect.handler"]) || null;
                    const name = typeof d.name === 'string' ? d.name : found?.name || found?.username || 'Người dùng';
                    const username = typeof d.username === 'string' ? d.username : found?.username || '';
                    const avatar = typeof d.avatar === 'string' ? d.avatar : found?.avatar;
                    if (found) {
                        handleSelectChat(found);
                        return;
                    }
                    const fallbackUser = {
                        _id: userId,
                        name: String(name || 'Người dùng'),
                        username: String(username || userId)
                    };
                    if (avatar) fallbackUser.avatar = String(avatar);
                    handleSelectChat(fallbackUser);
                }
            }["useHomePage.useEffect.handler"];
            window.addEventListener('openDirectChat', handler);
            return ({
                "useHomePage.useEffect": ()=>window.removeEventListener('openDirectChat', handler)
            })["useHomePage.useEffect"];
        }
    }["useHomePage.useEffect"], [
        handleSelectChat
    ]);
    const handleSelectContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[handleSelectContact]": (contact)=>{
            setShowGlobalSearchModal(false);
            setScrollToMessageId(null);
            // Tìm contact đầy đủ từ allUsers hoặc groups
            let fullContact = null;
            if (contact.isGroup) {
                fullContact = groups.find({
                    "useHomePage.useCallback[handleSelectContact]": (g)=>g._id === contact._id
                }["useHomePage.useCallback[handleSelectContact]"]) ?? null;
            } else {
                fullContact = allUsers.find({
                    "useHomePage.useCallback[handleSelectContact]": (u)=>u._id === contact._id
                }["useHomePage.useCallback[handleSelectContact]"]) ?? null;
            }
            if (fullContact) {
                // Chọn chat bằng hàm đã tối ưu
                handleSelectChat(fullContact);
            } else {
                console.warn('Contact not found:', contact._id);
            }
        }
    }["useHomePage.useCallback[handleSelectContact]"], [
        groups,
        allUsers,
        handleSelectChat
    ]);
    const handleGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[handleGlobalSearch]": async (term)=>{
            setGlobalSearchTerm(term);
            if (!term.trim() || !currentUser) {
                setGlobalSearchResults({
                    contacts: [],
                    messages: []
                });
                return;
            }
            const lowerCaseTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(term);
            // 1. Lọc liên hệ/nhóm (Local - Instant)
            let allChats = [
                ...groups,
                ...allUsers
            ];
            if (config?.onlyGroups) {
                allChats = [
                    ...groups
                ];
            } else if (config?.onlyPersonal) {
                allChats = [
                    ...allUsers
                ];
            }
            const myId = String(currentUser._id);
            const contactResults = allChats.map({
                "useHomePage.useCallback[handleGlobalSearch].contactResults": (c)=>{
                    const isGroup = c.isGroup || !!c.members;
                    let displayName = String(c.name || '').trim();
                    if (!isGroup) {
                        const u = c;
                        if (u.nicknames?.[myId]) {
                            displayName = String(u.nicknames[myId]).trim() || displayName || String(u.username || 'Người dùng');
                        } else {
                            displayName = String(u.name || u.username || 'Người dùng').trim();
                        }
                    }
                    return {
                        contact: c,
                        isGroup,
                        displayName
                    };
                }
            }["useHomePage.useCallback[handleGlobalSearch].contactResults"]).filter({
                "useHomePage.useCallback[handleGlobalSearch].contactResults": ({ contact, displayName })=>{
                    if (contact.isHidden) return false;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(displayName).includes(lowerCaseTerm);
                }
            }["useHomePage.useCallback[handleGlobalSearch].contactResults"]).map({
                "useHomePage.useCallback[handleGlobalSearch].contactResults": ({ contact, isGroup, displayName })=>({
                        _id: contact._id,
                        name: displayName,
                        avatar: contact.avatar,
                        isGroup
                    })
            }["useHomePage.useCallback[handleGlobalSearch].contactResults"]).slice(0, 10); // Giới hạn 10 kết quả
            // 2. Gọi API tìm kiếm tin nhắn (Backend)
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
                            limit: 50
                        }
                    })
                });
                const messageData = await res.json();
                const allMessages = messageData.data || [];
                const messages = allMessages.filter({
                    "useHomePage.useCallback[handleGlobalSearch].messages": (msg)=>[
                            'text',
                            'image',
                            'file',
                            'sticker',
                            'video',
                            'reminder'
                        ].includes(msg.type)
                }["useHomePage.useCallback[handleGlobalSearch].messages"]).filter({
                    "useHomePage.useCallback[handleGlobalSearch].messages": (msg)=>!config?.onlyGroups || msg.isGroupChat
                }["useHomePage.useCallback[handleGlobalSearch].messages"]).map({
                    "useHomePage.useCallback[handleGlobalSearch].messages": (msg)=>({
                            _id: msg._id,
                            content: msg.content,
                            type: msg.type,
                            fileName: msg.fileName,
                            timestamp: msg.timestamp,
                            sender: msg.sender,
                            senderName: msg.senderName || '',
                            roomId: msg.roomId,
                            roomName: msg.roomName || '',
                            isGroupChat: msg.isGroupChat || false,
                            partnerId: msg.partnerId,
                            partnerName: msg.partnerName,
                            fileUrl: msg.fileUrl,
                            receiver: msg.receiver,
                            displayRoomName: msg.displayRoomName
                        })
                }["useHomePage.useCallback[handleGlobalSearch].messages"]);
                setGlobalSearchResults({
                    contacts: contactResults,
                    messages
                });
            } catch (e) {
                console.error('Global search API error:', e);
                setGlobalSearchResults({
                    contacts: contactResults,
                    messages: []
                });
            }
        }
    }["useHomePage.useCallback[handleGlobalSearch]"], [
        currentUser,
        groups,
        allUsers,
        config?.onlyGroups,
        config?.onlyPersonal
    ]);
    const getSocketBaseForRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[getSocketBaseForRoom]": (roomId)=>{
            const isGroupChat = groups.some({
                "useHomePage.useCallback[getSocketBaseForRoom].isGroupChat": (g)=>String(g._id) === String(roomId)
            }["useHomePage.useCallback[getSocketBaseForRoom].isGroupChat"]);
            if (isGroupChat) {
                const g = groups.find({
                    "useHomePage.useCallback[getSocketBaseForRoom].g": (x)=>String(x._id) === String(roomId)
                }["useHomePage.useCallback[getSocketBaseForRoom].g"]);
                const members = g ? g.members : [];
                return {
                    roomId,
                    sender: String(currentUser?._id || ''),
                    senderName: currentUser?.name || '',
                    isGroup: true,
                    receiver: null,
                    members
                };
            }
            let receiver = null;
            if (roomId.includes('_')) {
                const parts = roomId.split('_');
                receiver = parts[0] === String(currentUser?._id || '') ? parts[1] : parts[0];
            }
            return {
                roomId,
                sender: String(currentUser?._id || ''),
                senderName: currentUser?.name || '',
                isGroup: false,
                receiver,
                members: []
            };
        }
    }["useHomePage.useCallback[getSocketBaseForRoom]"], [
        groups,
        currentUser
    ]);
    const scheduleReminder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[scheduleReminder]": (msg)=>{
            const idStr = String(msg._id);
            if (scheduledReminderIdsRef.current.has(idStr)) return;
            const at = msg.reminderAt || msg.timestamp;
            const now = Date.now();
            const delay = Math.max(0, at - now);
            scheduledReminderIdsRef.current.add(idStr);
            const timerId = window.setTimeout({
                "useHomePage.useCallback[scheduleReminder].timerId": async ()=>{
                    try {
                        const res = await fetch('/api/messages', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'fireReminder',
                                messageId: msg._id,
                                userId: String(currentUser?._id || '')
                            })
                        });
                        const json = await res.json();
                        const sockBase = getSocketBaseForRoom(String(msg.roomId));
                        if (json?.success && json?.updated && typeof json?.notifyId === 'string') {
                            socketRef.current?.emit('send_message', {
                                ...sockBase,
                                _id: json.notifyId,
                                type: 'notify',
                                content: `Đến giờ lịch hẹn: "${msg.content || ''}"`,
                                timestamp: Date.now(),
                                replyToMessageId: String(msg._id)
                            });
                        }
                        if (json?.nextAt) {
                            socketRef.current?.emit('edit_message', {
                                _id: msg._id,
                                roomId: msg.roomId,
                                content: msg.content,
                                newContent: msg.content,
                                editedAt: Date.now(),
                                originalContent: msg.originalContent || msg.content,
                                reminderAt: json.nextAt,
                                reminderNote: msg.reminderNote
                            });
                        }
                    } catch  {}
                    scheduledReminderIdsRef.current.delete(idStr);
                    const t = reminderTimersRef.current.get(idStr);
                    if (t) reminderTimersRef.current.delete(idStr);
                }
            }["useHomePage.useCallback[scheduleReminder].timerId"], delay);
            reminderTimersRef.current.set(idStr, timerId);
        }
    }["useHomePage.useCallback[scheduleReminder]"], [
        currentUser,
        getSocketBaseForRoom
    ]);
    const fetchAndScheduleReminders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[fetchAndScheduleReminders]": async ()=>{
            if (!currentUser) return;
            try {
                const res = await fetch('/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'readReminders',
                        data: {
                            userId: currentUser._id,
                            limit: 5000,
                            untilTs: Date.now() + 30 * 24 * 60 * 60 * 1000
                        }
                    })
                });
                const json = await res.json();
                const items = Array.isArray(json?.data) ? json.data : [];
                items.forEach({
                    "useHomePage.useCallback[fetchAndScheduleReminders]": (m)=>scheduleReminder(m)
                }["useHomePage.useCallback[fetchAndScheduleReminders]"]);
            } catch  {}
        }
    }["useHomePage.useCallback[fetchAndScheduleReminders]"], [
        currentUser,
        scheduleReminder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            if (!currentUser) return;
            if ("TURBOPACK compile-time truthy", 1) {
                window.__globalReminderSchedulerActive = true;
            }
            void fetchAndScheduleReminders();
            const iv = setInterval({
                "useHomePage.useEffect.iv": ()=>void fetchAndScheduleReminders()
            }["useHomePage.useEffect.iv"], 60000);
            return ({
                "useHomePage.useEffect": ()=>{
                    clearInterval(iv);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.__globalReminderSchedulerActive = false;
                    }
                }
            })["useHomePage.useEffect"];
        }
    }["useHomePage.useEffect"], [
        currentUser,
        fetchAndScheduleReminders
    ]);
    // 🔥 HÀM MỞ / ĐÓNG MODAL TÌM KIẾM TOÀN CỤC (TOGGLE)
    const handleOpenGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[handleOpenGlobalSearch]": ()=>{
            setShowGlobalSearchModal({
                "useHomePage.useCallback[handleOpenGlobalSearch]": (prev)=>{
                    const next = !prev;
                    if (next) {
                        // Khi mở modal, sync searchTerm từ sidebar sang globalSearchTerm nếu có
                        // Chỉ reset nếu không có searchTerm từ sidebar
                        if (!searchTerm.trim()) {
                            setGlobalSearchTerm('');
                            setGlobalSearchResults({
                                contacts: [],
                                messages: []
                            });
                        } else {
                            // Nếu có searchTerm từ sidebar, sync và trigger search
                            setGlobalSearchTerm(searchTerm);
                            handleGlobalSearch(searchTerm);
                        }
                    }
                    return next;
                }
            }["useHomePage.useCallback[handleOpenGlobalSearch]"]);
        }
    }["useHomePage.useCallback[handleOpenGlobalSearch]"], [
        searchTerm,
        handleGlobalSearch
    ]);
    // Thay thế hàm handleNavigateToMessage trong useHomePage.ts
    const handleNavigateToMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[handleNavigateToMessage]": (message, searchKeyword)=>{
            let targetChat = null;
            const myId = String(currentUser?._id);
            // 1. Tìm chat target
            if (message.isGroupChat === true && message.roomId) {
                targetChat = groups.find({
                    "useHomePage.useCallback[handleNavigateToMessage]": (g)=>String(g._id) === String(message.roomId)
                }["useHomePage.useCallback[handleNavigateToMessage]"]) ?? null;
            } else if (message.isGroupChat === false) {
                let partnerId = null;
                if (message.partnerId) {
                    partnerId = String(message.partnerId);
                } else if (message.roomId && message.roomId.includes('_')) {
                    const parts = message.roomId.split('_');
                    partnerId = parts[0] === myId ? parts[1] : parts[0];
                } else {
                    const senderId = String(message.sender);
                    const receiverId = message.receiver ? String(message.receiver) : null;
                    partnerId = senderId === myId ? receiverId : senderId;
                }
                if (partnerId) {
                    targetChat = allUsers.find({
                        "useHomePage.useCallback[handleNavigateToMessage]": (u)=>String(u._id) === partnerId
                    }["useHomePage.useCallback[handleNavigateToMessage]"]) ?? null;
                }
            }
            // 2. Nếu tìm thấy chat, mở và cuộn đến đúng tin nhắn vừa chọn
            if (targetChat) {
                setShowGlobalSearchModal(false);
                handleSelectChat(targetChat);
                if (searchKeyword && searchKeyword.trim()) {
                    setRoomSearchKeyword(searchKeyword);
                }
                setTimeout({
                    "useHomePage.useCallback[handleNavigateToMessage]": ()=>{
                        setScrollToMessageId(String(message._id));
                    }
                }["useHomePage.useCallback[handleNavigateToMessage]"], 200);
            } else {
                // Fallback: Refetch data và thử lại
                console.warn('❌ Chat not found locally. Refetching data...');
                fetchAllData().then({
                    "useHomePage.useCallback[handleNavigateToMessage]": ()=>{
                        alert('Không tìm thấy cuộc trò chuyện. Đã tải lại dữ liệu, vui lòng thử lại.');
                    }
                }["useHomePage.useCallback[handleNavigateToMessage]"]);
            }
        }
    }["useHomePage.useCallback[handleNavigateToMessage]"], [
        groups,
        allUsers,
        currentUser,
        fetchAllData,
        handleSelectChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            const fetchCurrentUser = {
                "useHomePage.useEffect.fetchCurrentUser": async ()=>{
                    setIsLoading(true);
                    try {
                        const user = JSON.parse(localStorage.getItem('info_user') || '{}');
                        if (user && user._id) {
                            setCurrentUser(user);
                        } else {
                            router.push('/');
                        }
                    } catch  {
                        router.push('/');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["useHomePage.useEffect.fetchCurrentUser"];
            fetchCurrentUser();
            const onStorage = {
                "useHomePage.useEffect.onStorage": (e)=>{
                    if (e.key === 'info_user') {
                        try {
                            const next = e.newValue ? JSON.parse(e.newValue) : null;
                            if (next && next._id) {
                                setCurrentUser(next);
                            }
                        } catch  {}
                    }
                }
            }["useHomePage.useEffect.onStorage"];
            window.addEventListener('storage', onStorage);
            return ({
                "useHomePage.useEffect": ()=>{
                    window.removeEventListener('storage', onStorage);
                }
            })["useHomePage.useEffect"];
        }
    }["useHomePage.useEffect"], [
        router
    ]);
    // 3. Gọi Fetch Data lần đầu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            if (currentUser) fetchAllData();
        }
    }["useHomePage.useEffect"], [
        currentUser,
        fetchAllData
    ]);
    // 4. Kết nối Socket & Xử lý Realtime Sidebar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            selectedChatRef.current = selectedChat;
        }
    }["useHomePage.useEffect"], [
        selectedChat
    ]);
    // 4. Kết nối Socket & Xử lý Realtime Sidebar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHomePage.useEffect": ()=>{
            if (!currentUser) return;
            const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSocketUrl"])();
            socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(endpoint, {
                transports: [
                    'websocket'
                ],
                withCredentials: false
            });
            socketRef.current.emit('join_room', currentUser._id);
            socketRef.current.emit('user_online', {
                userId: currentUser._id
            });
            const HEARTBEAT_MS = 60000; // 1 phút
            const hb = setInterval({
                "useHomePage.useEffect.hb": ()=>{
                    try {
                        socketRef.current?.emit('heartbeat', {
                            userId: currentUser._id
                        });
                    } catch  {}
                }
            }["useHomePage.useEffect.hb"], HEARTBEAT_MS);
            socketRef.current.on('presence_update', {
                "useHomePage.useEffect": (payload)=>{
                    setAllUsers({
                        "useHomePage.useEffect": (prev)=>prev.map({
                                "useHomePage.useEffect": (u)=>String(u._id) === String(payload.userId) ? {
                                        ...u,
                                        online: payload.online,
                                        lastSeen: payload.lastSeen ?? u.lastSeen
                                    } : u
                            }["useHomePage.useEffect"])
                    }["useHomePage.useEffect"]);
                }
            }["useHomePage.useEffect"]);
            const handleBeforeUnload = {
                "useHomePage.useEffect.handleBeforeUnload": ()=>{
                    try {
                        socketRef.current?.emit('heartbeat', {
                            userId: currentUser._id
                        });
                    } catch  {}
                }
            }["useHomePage.useEffect.handleBeforeUnload"];
            window.addEventListener('beforeunload', handleBeforeUnload);
            socketRef.current.on('update_sidebar', {
                "useHomePage.useEffect": (data)=>{
                    const isMyMsg = data.sender === currentUser._id;
                    const activeChatId = selectedChatRef.current?._id || null;
                    // 1. Xác định tên người gửi
                    let senderName = 'Người lạ';
                    if (isMyMsg) {
                        senderName = 'Bạn';
                    } else {
                        const foundUser = allUsersRef.current.find({
                            "useHomePage.useEffect.foundUser": (u)=>u._id === data.sender
                        }["useHomePage.useEffect.foundUser"]);
                        if (foundUser) senderName = foundUser.name || 'Người lạ';
                        if (data.senderName) senderName = data.senderName;
                    }
                    // 2. 🔥 Format nội dung tin nhắn - Ưu tiên lastMessage nếu có
                    let contentDisplay = '';
                    // Nếu server đã gửi kèm lastMessage (đã format sẵn), dùng luôn, trừ khi là recall để tự chèn prefix
                    if (data.lastMessage && !data.isRecalled && data.type !== 'recall') {
                        contentDisplay = data.lastMessage;
                    } else if (data.isRecalled || data.type === 'recall') {
                        contentDisplay = data.isGroup ? isMyMsg ? 'Bạn: Tin nhắn đã được thu hồi' : `${senderName}: Tin nhắn đã được thu hồi` : 'Tin nhắn đã được thu hồi';
                    } else {
                        const isTextLike = data.type === 'text' || data.type === 'notify';
                        const rawContent = isTextLike ? data.content || '' : `[${data.type || 'Unknown'}]`;
                        contentDisplay = `${senderName}: ${rawContent}`;
                    }
                    const isMsgType = data.type === 'text' || data.type === 'image' || data.type === 'file' || data.type === 'sticker' || data.type === 'video' || data.type === 'notify';
                    const soundEnabled = currentUser?.notifications?.soundEnabled !== false;
                    if (!isMyMsg && isMsgType && soundEnabled) {
                        playMessageSound();
                    }
                    // 3. CẬP NHẬT STATE
                    if (data.isGroup) {
                        setGroups({
                            "useHomePage.useEffect": (prev)=>{
                                const index = prev.findIndex({
                                    "useHomePage.useEffect.index": (g)=>g._id === data.roomId
                                }["useHomePage.useEffect.index"]);
                                if (index === -1) {
                                    const myId = String(currentUser._id);
                                    const memberIds = Array.isArray(data.members) ? data.members.map({
                                        "useHomePage.useEffect": (m)=>typeof m === 'object' && m?._id ? String(m._id) : String(m)
                                    }["useHomePage.useEffect"]).filter(Boolean) : [];
                                    const iAmMember = memberIds.includes(myId);
                                    if (iAmMember) {
                                        const stubMembers = Array.isArray(data.members) ? data.members.map({
                                            "useHomePage.useEffect": (m)=>typeof m === 'object' && m?._id ? {
                                                    _id: String(m._id),
                                                    role: 'MEMBER',
                                                    joinedAt: Date.now()
                                                } : {
                                                    _id: String(m),
                                                    role: 'MEMBER',
                                                    joinedAt: Date.now()
                                                }
                                        }["useHomePage.useEffect"]) : [];
                                        const stubGroup = {
                                            _id: String(data.roomId),
                                            name: (data.groupName || data.senderName || 'Nhóm').trim() || 'Nhóm',
                                            isGroup: true,
                                            members: stubMembers,
                                            createdBy: String(data.sender || ''),
                                            unreadCount: 0,
                                            lastMessage: contentDisplay,
                                            lastMessageAt: data.timestamp || Date.now()
                                        };
                                        const next = [
                                            stubGroup,
                                            ...prev
                                        ];
                                        setTimeout({
                                            "useHomePage.useEffect": ()=>fetchAllData()
                                        }["useHomePage.useEffect"], 200);
                                        return next;
                                    }
                                    fetchAllData();
                                    return prev;
                                }
                                const isActiveChat = activeChatId === data.roomId;
                                // --- XỬ LÝ BIỆT DANH (GROUP NICKNAME) ---
                                let displaySenderName = senderName;
                                if (!isMyMsg) {
                                    const currentGroup = prev[index];
                                    const senderMember = currentGroup.members?.find({
                                        "useHomePage.useEffect": (m)=>{
                                            const mId = typeof m === 'object' && m && '_id' in m ? String(m._id) : String(m);
                                            return mId === String(data.sender);
                                        }
                                    }["useHomePage.useEffect"]);
                                    // Kiểm tra nickname trong member
                                    if (senderMember && typeof senderMember === 'object') {
                                        const sm = senderMember;
                                        if (sm.nickname) {
                                            displaySenderName = sm.nickname;
                                        }
                                    }
                                }
                                // --- RE-FORMAT LAST MESSAGE NẾU CÓ BIỆT DANH ---
                                let finalContentDisplay = contentDisplay;
                                // Chỉ re-format nếu không phải là tin nhắn hệ thống (notify không người gửi) và không phải tin nhắn của mình
                                // Nếu là recall, cũng cần xử lý
                                if (!isMyMsg) {
                                    const isTextLike = data.type === 'text' || data.type === 'notify';
                                    const rawContent = data.content || '';
                                    if (data.isRecalled || data.type === 'recall') {
                                        finalContentDisplay = `${displaySenderName}: Tin nhắn đã được thu hồi`;
                                    } else if (isTextLike) {
                                        finalContentDisplay = `${displaySenderName}: ${rawContent}`;
                                    } else {
                                        // Image, file, sticker, etc.
                                        const typeLabel = data.type ? `[${data.type}]` : '[Tin nhắn]';
                                        finalContentDisplay = `${displaySenderName}: ${typeLabel}`;
                                    }
                                }
                                const updatedGroup = {
                                    ...prev[index],
                                    lastMessage: finalContentDisplay,
                                    lastMessageAt: data.timestamp || Date.now(),
                                    isRecall: data.isRecalled || false,
                                    unreadCount: isMyMsg || isActiveChat ? 0 : (prev[index].unreadCount || 0) + 1
                                };
                                const newGroups = [
                                    ...prev
                                ];
                                newGroups.splice(index, 1);
                                return [
                                    updatedGroup,
                                    ...newGroups
                                ];
                            }
                        }["useHomePage.useEffect"]);
                    } else {
                        // --- Xử lý 1-1 (User List) ---
                        const partnerId = isMyMsg ? data.receiver : data.sender;
                        setAllUsers({
                            "useHomePage.useEffect": (prev)=>{
                                const index = prev.findIndex({
                                    "useHomePage.useEffect.index": (u)=>u._id === partnerId
                                }["useHomePage.useEffect.index"]);
                                if (index === -1) {
                                    fetchAllData();
                                    return prev;
                                }
                                const isActiveChat = activeChatId === partnerId;
                                const updatedUser = {
                                    ...prev[index],
                                    lastMessage: contentDisplay,
                                    lastMessageAt: data.timestamp || Date.now(),
                                    isRecall: data.isRecalled || false,
                                    unreadCount: isMyMsg || isActiveChat ? 0 : (prev[index].unreadCount || 0) + 1
                                };
                                const newUsers = [
                                    ...prev
                                ];
                                newUsers.splice(index, 1);
                                return [
                                    updatedUser,
                                    ...newUsers
                                ];
                            }
                        }["useHomePage.useEffect"]);
                    }
                }
            }["useHomePage.useEffect"]);
            socketRef.current.on('group_members_updated', {
                "useHomePage.useEffect": (payload)=>{
                    const myId = String(currentUser._id);
                    const nextMemberIds = Array.isArray(payload.members) ? payload.members.map({
                        "useHomePage.useEffect": (m)=>String(m._id)
                    }["useHomePage.useEffect"]) : [];
                    const stillInGroup = nextMemberIds.includes(myId);
                    if (!stillInGroup) {
                        setGroups({
                            "useHomePage.useEffect": (prev)=>prev.filter({
                                    "useHomePage.useEffect": (g)=>String(g._id) !== String(payload.roomId)
                                }["useHomePage.useEffect"])
                        }["useHomePage.useEffect"]);
                        if (selectedChatRef.current && String(selectedChatRef.current._id) === String(payload.roomId)) {
                            setSelectedChat(null);
                        }
                    }
                }
            }["useHomePage.useEffect"]);
            socketRef.current.on('group_renamed', {
                "useHomePage.useEffect": (payload)=>{
                    setGroups({
                        "useHomePage.useEffect": (prev)=>prev.map({
                                "useHomePage.useEffect": (g)=>String(g._id) === String(payload.roomId) ? {
                                        ...g,
                                        name: payload.groupName
                                    } : g
                            }["useHomePage.useEffect"])
                    }["useHomePage.useEffect"]);
                    if (selectedChatRef.current && String(selectedChatRef.current._id) === String(payload.roomId)) {
                        setSelectedChat({
                            "useHomePage.useEffect": (prev)=>prev ? {
                                    ...prev,
                                    name: payload.groupName
                                } : prev
                        }["useHomePage.useEffect"]);
                    }
                }
            }["useHomePage.useEffect"]);
            return ({
                "useHomePage.useEffect": ()=>{
                    try {
                        clearInterval(hb);
                    } catch  {}
                    window.removeEventListener('beforeunload', handleBeforeUnload);
                    socketRef.current?.disconnect();
                }
            })["useHomePage.useEffect"];
        }
    }["useHomePage.useEffect"], [
        currentUser,
        fetchAllData,
        playMessageSound
    ]);
    // 5. Xử lý Chat Action (Pin/Hide)
    const handleChatAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHomePage.useCallback[handleChatAction]": async (roomId, actionType, isChecked, isGroupChat)=>{
            if (!currentUser?._id) return;
            const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
            try {
                const payload = {
                    action: 'toggleChatStatus',
                    _id: currentUser._id,
                    currentUserId: currentUser._id,
                    roomId,
                    conversationId: roomId,
                    data: actionType === 'pin' ? {
                        isPinned: isChecked
                    } : {
                        isHidden: isChecked
                    }
                };
                const res = await fetch(apiRoute, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    if (isGroupChat) {
                        setGroups({
                            "useHomePage.useCallback[handleChatAction]": (prev)=>prev.map({
                                    "useHomePage.useCallback[handleChatAction]": (chat)=>{
                                        if (chat._id === roomId) {
                                            const updateField = actionType === 'pin' ? 'isPinned' : 'isHidden';
                                            return {
                                                ...chat,
                                                [updateField]: isChecked
                                            };
                                        }
                                        return chat;
                                    }
                                }["useHomePage.useCallback[handleChatAction]"])
                        }["useHomePage.useCallback[handleChatAction]"]);
                    } else {
                        setAllUsers({
                            "useHomePage.useCallback[handleChatAction]": (prev)=>prev.map({
                                    "useHomePage.useCallback[handleChatAction]": (chat)=>{
                                        if (chat._id === roomId) {
                                            const updateField = actionType === 'pin' ? 'isPinned' : 'isHidden';
                                            return {
                                                ...chat,
                                                [updateField]: isChecked
                                            };
                                        }
                                        return chat;
                                    }
                                }["useHomePage.useCallback[handleChatAction]"])
                        }["useHomePage.useCallback[handleChatAction]"]);
                    }
                    setTimeout({
                        "useHomePage.useCallback[handleChatAction]": ()=>{
                            fetchAllData();
                        }
                    }["useHomePage.useCallback[handleChatAction]"], 500);
                }
            } catch (error) {
                console.error(`Lỗi ${actionType} chat:`, error);
            }
        }
    }["useHomePage.useCallback[handleChatAction]"], [
        currentUser,
        fetchAllData
    ]);
    return {
        currentUser,
        isLoading,
        allUsers,
        groups,
        selectedChat,
        searchTerm,
        setSearchTerm,
        showCreateGroupModal,
        setShowCreateGroupModal,
        showGlobalSearchModal,
        globalSearchTerm,
        globalSearchResults,
        scrollToMessageId,
        setScrollToMessageId,
        roomSearchKeyword,
        setRoomSearchKeyword,
        handleOpenGlobalSearch,
        handleGlobalSearch,
        handleSelectContact,
        handleNavigateToMessage,
        fetchAllData,
        handleChatAction,
        handleSelectChat,
        setSelectedChat
    };
}
_s(useHomePage, "ibVSVNezylWpfCPx2pEY2KjyBos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatNotifications"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_hooks_4a77935e._.js.map