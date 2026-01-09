module.exports = [
"[project]/src/utils/dateUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/utils/getFbEmojiUrl.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEmojiUrl",
    ()=>getEmojiUrl
]);
function getEmojiUrl(unicode) {
    return `https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/72x72/${unicode}.png`;
}
}),
"[project]/src/utils/uploadHelper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/utils/chatInput.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/utils/chatMessages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/hooks/useCreateGroupModal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateGroupModal",
    ()=>useCreateGroupModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function useCreateGroupModal({ currentUser, allUsers, mode, conversationId, existingMemberIds = [], reLoad, onMembersAdded, onGroupCreated, onClose }) {
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatarFile, setAvatarFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMembers, setSelectedMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const currentUserId = String(currentUser._id);
        const initialSet = new Set([
            ...existingMemberIds.map(String),
            currentUserId
        ]);
        return Array.from(initialSet);
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
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
    const groupedUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = allUsers;
        if (searchTerm.trim()) {
            const norm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(searchTerm);
            filtered = allUsers.filter((u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(u.name || '').includes(norm));
        }
        const sortedUsers = [
            ...filtered
        ].sort((a, b)=>(a.name || '').localeCompare(b.name || ''));
        const groups = {};
        sortedUsers.forEach((user)=>{
            const firstLetter = (user.name?.charAt(0) || '#').toUpperCase();
            const key = /^[A-Z]$/.test(firstLetter) ? firstLetter : '#';
            if (!groups[key]) groups[key] = [];
            groups[key].push(user);
        });
        return groups;
    }, [
        allUsers,
        searchTerm
    ]);
    const sortedGroupKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Object.keys(groupedUsers).sort((a, b)=>{
            if (a === '#') return 1;
            if (b === '#') return -1;
            return a.localeCompare(b);
        });
    }, [
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
                        const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
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
                        const sock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])(), {
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
}),
"[project]/src/hooks/useChatInfoPopup.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatInfoPopup",
    ()=>useChatInfoPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useChatInfoPopup({ selectedChat, isGroup, messages, currentUser, onChatAction }) {
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
    const [localIsPinned, setLocalIsPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialIsPinned === true);
    const [localIsHidden, setLocalIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialIsHidden === true);
    // Accordion trạng thái mở/đóng cho từng mục
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Id của item đang mở menu "..."
    const [activeMenuId, setActiveMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cập nhật state cục bộ khi props thay đổi (theo phòng hiện tại)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalIsPinned(initialIsPinned === true);
        setLocalIsHidden(initialIsHidden === true);
    }, [
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
    const [mediaList, setMediaList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaGroups, setMediaGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileList, setFileList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileGroups, setFileGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkList, setLinkList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkGroups, setLinkGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mediaTotal, setMediaTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fileTotal, setFileTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [linkTotal, setLinkTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMediaExpanded, setIsMediaExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFileExpanded, setIsFileExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLinkExpanded, setIsLinkExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const assetsReqKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const flattenGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((groups)=>groups.flatMap((g)=>g.items ?? []), []);
    const fetchAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (assetType, needAll)=>{
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
                setMediaList(items.map((it)=>({
                        id: it.id,
                        url: it.url,
                        fileName: it.fileName,
                        type: it.type,
                        timestamp: it.timestamp
                    })));
                setMediaGroups(groups.map((g)=>({
                        dateLabel: String(g.dateLabel || ''),
                        items: (g.items || []).map((it)=>({
                                id: it.id,
                                url: it.url,
                                fileName: it.fileName,
                                type: it.type,
                                timestamp: it.timestamp
                            }))
                    })));
                setMediaTotal(total);
                setIsMediaExpanded(needAll);
            } else if (assetType === 'file') {
                const items = flattenGroups(groups);
                const total = typeof json.total === 'number' ? json.total : items.length;
                setFileList(items.map((it)=>({
                        id: it.id,
                        url: it.url,
                        fileName: it.fileName || 'Tài liệu',
                        timestamp: it.timestamp
                    })));
                setFileGroups(groups.map((g)=>({
                        dateLabel: String(g.dateLabel || ''),
                        items: (g.items || []).map((it)=>({
                                id: it.id,
                                url: it.url,
                                fileName: it.fileName || 'Tài liệu',
                                timestamp: it.timestamp
                            }))
                    })));
                setFileTotal(total);
                setIsFileExpanded(needAll);
            } else {
                const items = flattenGroups(groups);
                const total = typeof json.total === 'number' ? json.total : items.length;
                setLinkList(items);
                setLinkGroups(groups.map((g)=>({
                        dateLabel: String(g.dateLabel || ''),
                        items: (g.items || []).map((it)=>({
                                id: it.id,
                                url: it.url,
                                timestamp: it.timestamp
                            }))
                    })));
                setLinkTotal(total);
                setIsLinkExpanded(needAll);
            }
        } catch  {}
    }, [
        currentRoomId,
        flattenGroups
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        messages,
        openItems,
        isMediaExpanded,
        isFileExpanded,
        isLinkExpanded,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openItems['Ảnh/Video'] && mediaList.length === 0) void fetchAssets('media', false);
    }, [
        openItems,
        mediaList.length,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openItems['File'] && fileList.length === 0) void fetchAssets('file', false);
    }, [
        openItems,
        fileList.length,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openItems['Link'] && linkList.length === 0) void fetchAssets('link', false);
    }, [
        openItems,
        linkList.length,
        fetchAssets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
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
}),
"[project]/src/hooks/useChatMentions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatMentions",
    ()=>useChatMentions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useChatMentions({ allUsers, activeMembers, currentUser, allUsersMap }) {
    const [showMentionMenu, setShowMentionMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mentionQuery, setMentionQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mentionStartPos, setMentionStartPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMentionIndex, setSelectedMentionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const mentionMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getPlainTextFromEditable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
        const traverse = (node)=>{
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
                el.childNodes.forEach((child)=>{
                    out += traverse(child);
                });
                if (BLOCK_TAGS.has(el.tagName)) {
                    if (out && !out.endsWith('\n')) out += '\n';
                }
                return out;
            }
            return '';
        };
        const text = traverse(editableRef.current);
        return text;
    }, []);
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
    const mentionSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const getName = (u)=>{
            if (allUsersMap) {
                const id = u._id || u.id;
                const name = allUsersMap.get(String(id));
                if (name) return name;
            }
            return u.name || u.name;
        };
        const usersList = activeMembers.length > 0 ? activeMembers : allUsers;
        // Ensure current user is in the list
        const currentUserId = currentUser._id;
        const hasCurrentUser = usersList.some((u)=>{
            const id = u._id || u.id;
            return String(id) === String(currentUserId);
        });
        const finalUsersList = hasCurrentUser ? usersList : [
            ...usersList,
            currentUser
        ];
        if (!mentionQuery) return finalUsersList;
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(mentionQuery);
        const hasDia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDiacritics"])(mentionQuery);
        return finalUsersList.filter((user)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accentAwareIncludes"])(getName(user) || '', mentionQuery));
    }, [
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
}),
"[project]/src/hooks/useChatUpload.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "useChatUpload",
    ()=>useChatUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$uploadHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/uploadHelper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/fetch/messages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/uploadStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
let swReadyPromise = null;
let swListenerAttached = false;
const pendingUploads = new Map();
async function ensureServiceWorker() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const reg = undefined;
}
function useChatUpload({ roomId, currentUser, selectedChat, isGroup, sendMessageProcess, setMessages, onScrollBottom }) {
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
    const [uploadingFiles, setUploadingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const activeSourcesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
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
    const handleUploadAndSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (file, type, caption, replyToMessageId, mentions, senderName, batchId, videoCropConfig)=>{
        const sanitizeName = (name)=>{
            return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
        };
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
        setMessages((prev)=>sortMessagesAsc([
                ...prev,
                tempMsg
            ]));
        setUploadingFiles((prev)=>({
                ...prev,
                [tempId]: 0
            }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProgress"])(tempId, 0);
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
            const es = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            const updatePercent = (p)=>{
                const displayed = Math.min(p, 95);
                setUploadingFiles((prev)=>({
                        ...prev,
                        [tempId]: displayed
                    }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProgress"])(tempId, displayed);
                setPendingPercent(tempId, displayed);
            };
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            for(let attempt = 0; attempt < 2 && !success; attempt++){
                try {
                    const res = await new Promise((resolve, reject)=>{
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
                    });
                    if (res.success) {
                        success = true;
                        const finalMsg = res.data;
                        setMessages((prev)=>prev.filter((m)=>m._id !== tempId));
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
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            } catch  {}
        } else {
            for(let attempt = 0; attempt < 2 && !success; attempt++){
                try {
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$uploadHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadFileWithProgress"])(`/api/upload?uploadId=${uploadId}`, formData, (clientRawPercent)=>{
                        const displayed = Math.min(clientRawPercent, 95);
                        setUploadingFiles((prev)=>({
                                ...prev,
                                [tempId]: displayed
                            }));
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProgress"])(tempId, displayed);
                        setPendingPercent(tempId, displayed);
                    });
                    if (res.success) {
                        success = true;
                        const finalMsg = res.data;
                        setMessages((prev)=>prev.filter((m)=>m._id !== tempId));
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
            setMessages((prev)=>prev.filter((m)=>m._id !== tempId));
            try {
                alert(`Tải lên thất bại: ${file.name}. Lý do: ${lastMessage}`);
            } catch  {}
        }
        setUploadingFiles((prev)=>{
            const newState = {
                ...prev
            };
            delete newState[tempId];
            return newState;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProgress"])(tempId);
        removePending(tempId);
    }, [
        roomId,
        currentUser,
        isGroup,
        selectedChat,
        sendMessageProcess,
        setMessages,
        onScrollBottom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pending = readPending();
        if (pending.length === 0) return;
        pending.forEach((item)=>{
            setMessages((prev)=>{
                const exists = prev.some((m)=>m._id === item.tempId);
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
            });
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgress"])(item.tempId);
            const percent = p >= 0 ? p : item.percent || 0;
            setUploadingFiles((prev)=>({
                    ...prev,
                    [item.tempId]: Math.min(percent, 95)
                }));
            if (!activeSourcesRef.current[item.uploadId]) {
                try {
                    const es = new EventSource(`/api/upload/progress?id=${encodeURIComponent(item.uploadId)}`);
                    activeSourcesRef.current[item.uploadId] = es;
                    es.onmessage = (ev)=>{
                        try {
                            const payload = JSON.parse(ev.data);
                            const percentN = typeof payload.percent === 'number' ? payload.percent : 0;
                            const displayed = Math.min(percentN, 95);
                            setUploadingFiles((prev)=>({
                                    ...prev,
                                    [item.tempId]: displayed
                                }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProgress"])(item.tempId, displayed);
                            setPendingPercent(item.tempId, displayed);
                            const done = !!payload.done;
                            if (done) {
                                es.close();
                                delete activeSourcesRef.current[item.uploadId];
                                setUploadingFiles((prev)=>{
                                    const next = {
                                        ...prev
                                    };
                                    delete next[item.tempId];
                                    return next;
                                });
                                setMessages((prev)=>prev.filter((m)=>m._id !== item.tempId));
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                                removePending(item.tempId);
                                (async ()=>{
                                    try {
                                        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fetch$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMessagesApi"])(roomId, {
                                            limit: 1,
                                            sortOrder: 'desc',
                                            extraFilters: {
                                                uploadId: item.uploadId
                                            }
                                        });
                                        const list = resp?.data || [];
                                        const match = list[0];
                                        if (match) {
                                            setMessages((prev)=>{
                                                const exists = prev.some((mm)=>String(mm._id) === String(match._id));
                                                return exists ? prev : [
                                                    ...prev,
                                                    match
                                                ];
                                            });
                                        }
                                    } catch  {}
                                })();
                            }
                        } catch  {}
                    };
                    es.onerror = ()=>{
                        try {
                            es.close();
                            delete activeSourcesRef.current[item.uploadId];
                        } catch  {}
                    };
                } catch  {}
            }
        });
        setTimeout(()=>{
            const again = readPending();
            again.forEach((item)=>{
                setMessages((prev)=>{
                    const exists = prev.some((m)=>m._id === item.tempId);
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
                });
            });
        }, 600);
        setTimeout(()=>{
            const again = readPending();
            again.forEach((item)=>{
                setMessages((prev)=>{
                    const exists = prev.some((m)=>m._id === item.tempId);
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
                });
            });
        }, 1500);
        return ()=>{
            Object.values(activeSourcesRef.current).forEach((es)=>{
                try {
                    es.close();
                } catch  {}
            });
            activeSourcesRef.current = {};
        };
    }, [
        roomId,
        currentUser,
        setMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onSwMessage = async (e)=>{
            const data = e.data;
            if (!data || !data.type) return;
            const id = String(data.uploadId || '');
            if (!id) return;
            const arr = readPending();
            const item = arr.find((x)=>x.uploadId === id);
            if (!item) return;
            if (data.type === 'UPLOAD_COMPLETE' && data.response) {
                const res = data.response;
                if (res.success) {
                    setUploadingFiles((prev)=>{
                        const next = {
                            ...prev
                        };
                        delete next[item.tempId];
                        return next;
                    });
                    setMessages((prev)=>prev.filter((m)=>m._id !== item.tempId));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
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
                    setUploadingFiles((prev)=>{
                        const next = {
                            ...prev
                        };
                        delete next[item.tempId];
                        return next;
                    });
                    setMessages((prev)=>prev.filter((m)=>m._id !== item.tempId));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                    removePending(item.tempId);
                }
            } else if (data.type === 'UPLOAD_FAILED') {
                setUploadingFiles((prev)=>{
                    const next = {
                        ...prev
                    };
                    delete next[item.tempId];
                    return next;
                });
                setMessages((prev)=>prev.filter((m)=>m._id !== item.tempId));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProgress"])(item.tempId);
                removePending(item.tempId);
            }
        };
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'serviceWorker' in navigator) //TURBOPACK unreachable
        ;
        return ()=>{
            if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'serviceWorker' in navigator) //TURBOPACK unreachable
            ;
        };
    }, [
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
}),
"[project]/src/hooks/useChatVoiceInput.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatVoiceInput",
    ()=>useChatVoiceInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$chatInput$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/chatInput.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useChatVoiceInput({ editableRef, handleInputChangeEditable }) {
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleVoiceInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const SpeechRecognition = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if ("TURBOPACK compile-time truthy", 1) {
            alert('Trình duyệt của bạn không hỗ trợ chức năng này. Vui lòng dùng Chrome hoặc Edge.');
            return;
        }
        //TURBOPACK unreachable
        ;
        const isLocal = undefined;
        const isSecure = undefined;
        const recognition = undefined;
    }, [
        isListening,
        editableRef,
        handleInputChangeEditable
    ]);
    return {
        isListening,
        handleVoiceInput
    };
}
}),
"[project]/src/hooks/useChatMembers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "useChatMembers",
    ()=>useChatMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useChatMembers({ selectedChat, isGroup, currentUser, sendNotifyMessage }) {
    const [memberCount, setMemberCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeMembers, setActiveMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGroup && selectedChat.members) {
            const m = selectedChat.members;
            setActiveMembers(m);
            setMemberCount(m.length);
        } else {
            setActiveMembers([]);
            setMemberCount(0);
        }
    }, [
        selectedChat,
        isGroup
    ]);
    const handleMemberRemoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (removedMemberId, removedMemberName)=>{
        setActiveMembers((prev)=>prev.filter((m)=>String(m._id) !== String(removedMemberId)));
        setMemberCount((prev)=>Math.max(0, prev - 1));
        const myName = currentUser.name || 'Quản trị viên';
        await sendNotifyMessage(`${myName} đã mời ${removedMemberName} ra khỏi nhóm.`);
    }, [
        currentUser.name,
        sendNotifyMessage
    ]);
    const handleRoleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (memberId, memberName, newRole)=>{
        setActiveMembers((prev)=>prev.map((m)=>{
                if (String(m._id) === String(memberId)) {
                    return {
                        ...m,
                        role: newRole
                    };
                }
                return m;
            }));
        const myName = currentUser.name || 'Quản trị viên';
        let actionText = '';
        if (newRole === 'ADMIN') {
            actionText = `đã bổ nhiệm ${memberName} làm phó nhóm.`;
        } else {
            actionText = `đã hủy quyền phó nhóm của ${memberName}.`;
        }
        await sendNotifyMessage(`${myName} ${actionText}`);
    }, [
        currentUser.name,
        sendNotifyMessage
    ]);
    const handleMembersAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (newUsers)=>{
        if (!newUsers || newUsers.length === 0) return;
        const newMembersFormatted = newUsers.map((u)=>({
                _id: u._id,
                name: u.name || 'Thành viên',
                avatar: u.avatar,
                role: 'MEMBER',
                joinedAt: Date.now()
            }));
        setActiveMembers((prev)=>[
                ...prev,
                ...newMembersFormatted
            ]);
        setMemberCount((prev)=>prev + newUsers.length);
    }, [
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
}),
"[project]/src/hooks/useHomePage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHomePage",
    ()=>useHomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChatNotifications.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function useHomePage(config) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { playMessageSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChatNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatNotifications"])({});
    // State quản lý dữ liệu
    const [allUsers, setAllUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const allUsersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedChatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showCreateGroupModal, setShowCreateGroupModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showGlobalSearchModal, setShowGlobalSearchModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalSearchTerm, setGlobalSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [globalSearchResults, setGlobalSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        contacts: [],
        messages: []
    });
    const [scrollToMessageId, setScrollToMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roomSearchKeyword, setRoomSearchKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const reminderTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const scheduledReminderIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // 🔥 Đồng bộ searchTerm từ sidebar sang globalSearchTerm
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setGlobalSearchTerm(searchTerm);
    }, [
        searchTerm
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        allUsersRef.current = allUsers;
    }, [
        allUsers
    ]);
    // 1. Hàm Fetch Data (User & Group)
    const fetchAllData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            setAllUsers(list.filter((u)=>u._id !== currentUser._id));
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
                setSelectedChat((prev)=>{
                    if (!prev) return prev;
                    // Chỉ áp dụng cho nhóm, chat 1-1 sẽ không có trong danh sách groups
                    const maybeGroup = prev;
                    const isGroupChat = maybeGroup.isGroup === true || Array.isArray(maybeGroup.members);
                    if (!isGroupChat) return prev;
                    const updated = data.data.find((g)=>g._id === maybeGroup._id);
                    // Nếu không tìm thấy nhóm trong danh sách mới (có thể đã bị giải tán), xóa selectedChat
                    if (!updated) {
                        return null;
                    }
                    return updated;
                });
            }
        } catch (e) {
            console.error('Fetch groups error:', e);
        }
    }, [
        currentUser
    ]);
    // Hàm xử lý chọn Chat (Optimistic Update - Xóa badge)
    const handleSelectChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        setSelectedChat(item);
        selectedChatRef.current = item;
        if (item.isGroup || item.members) {
            setGroups((prev)=>prev.map((g)=>g._id === item._id ? {
                        ...g,
                        unreadCount: 0
                    } : g));
        } else {
            setAllUsers((prev)=>prev.map((u)=>u._id === item._id ? {
                        ...u,
                        unreadCount: 0
                    } : u));
        }
    }, []);
    const handleSelectContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((contact)=>{
        setShowGlobalSearchModal(false);
        setScrollToMessageId(null);
        // Tìm contact đầy đủ từ allUsers hoặc groups
        let fullContact = null;
        if (contact.isGroup) {
            fullContact = groups.find((g)=>g._id === contact._id) ?? null;
        } else {
            fullContact = allUsers.find((u)=>u._id === contact._id) ?? null;
        }
        if (fullContact) {
            // Chọn chat bằng hàm đã tối ưu
            handleSelectChat(fullContact);
        } else {
            console.warn('Contact not found:', contact._id);
        }
    }, [
        groups,
        allUsers,
        handleSelectChat
    ]);
    const handleGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (term)=>{
        setGlobalSearchTerm(term);
        if (!term.trim() || !currentUser) {
            setGlobalSearchResults({
                contacts: [],
                messages: []
            });
            return;
        }
        const lowerCaseTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(term);
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
        const contactResults = allChats.map((c)=>{
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
        }).filter(({ contact, displayName })=>{
            if (contact.isHidden) return false;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeNoAccent"])(displayName).includes(lowerCaseTerm);
        }).map(({ contact, isGroup, displayName })=>({
                _id: contact._id,
                name: displayName,
                avatar: contact.avatar,
                isGroup
            })).slice(0, 10); // Giới hạn 10 kết quả
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
            const messages = allMessages.filter((msg)=>[
                    'text',
                    'image',
                    'file',
                    'sticker',
                    'video',
                    'reminder'
                ].includes(msg.type)).filter((msg)=>!config?.onlyGroups || msg.isGroupChat).map((msg)=>({
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
                }));
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
    }, [
        currentUser,
        groups,
        allUsers,
        config?.onlyGroups,
        config?.onlyPersonal
    ]);
    const getSocketBaseForRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((roomId)=>{
        const isGroupChat = groups.some((g)=>String(g._id) === String(roomId));
        if (isGroupChat) {
            const g = groups.find((x)=>String(x._id) === String(roomId));
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
    }, [
        groups,
        currentUser
    ]);
    const scheduleReminder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg)=>{
        const idStr = String(msg._id);
        if (scheduledReminderIdsRef.current.has(idStr)) return;
        const at = msg.reminderAt || msg.timestamp;
        const now = Date.now();
        const delay = Math.max(0, at - now);
        scheduledReminderIdsRef.current.add(idStr);
        const timerId = window.setTimeout(async ()=>{
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
        }, delay);
        reminderTimersRef.current.set(idStr, timerId);
    }, [
        currentUser,
        getSocketBaseForRoom
    ]);
    const fetchAndScheduleReminders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            items.forEach((m)=>scheduleReminder(m));
        } catch  {}
    }, [
        currentUser,
        scheduleReminder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentUser) return;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        void fetchAndScheduleReminders();
        const iv = setInterval(()=>void fetchAndScheduleReminders(), 60000);
        return ()=>{
            clearInterval(iv);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    }, [
        currentUser,
        fetchAndScheduleReminders
    ]);
    // 🔥 HÀM MỞ / ĐÓNG MODAL TÌM KIẾM TOÀN CỤC (TOGGLE)
    const handleOpenGlobalSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowGlobalSearchModal((prev)=>{
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
        });
    }, [
        searchTerm,
        handleGlobalSearch
    ]);
    // Thay thế hàm handleNavigateToMessage trong useHomePage.ts
    const handleNavigateToMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, searchKeyword)=>{
        let targetChat = null;
        const myId = String(currentUser?._id);
        // 1. Tìm chat target
        if (message.isGroupChat === true && message.roomId) {
            targetChat = groups.find((g)=>String(g._id) === String(message.roomId)) ?? null;
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
                targetChat = allUsers.find((u)=>String(u._id) === partnerId) ?? null;
            }
        }
        // 2. Nếu tìm thấy chat, mở và cuộn đến đúng tin nhắn vừa chọn
        if (targetChat) {
            setShowGlobalSearchModal(false);
            handleSelectChat(targetChat);
            if (searchKeyword && searchKeyword.trim()) {
                setRoomSearchKeyword(searchKeyword);
            }
            setTimeout(()=>{
                setScrollToMessageId(String(message._id));
            }, 200);
        } else {
            // Fallback: Refetch data và thử lại
            console.warn('❌ Chat not found locally. Refetching data...');
            fetchAllData().then(()=>{
                alert('Không tìm thấy cuộc trò chuyện. Đã tải lại dữ liệu, vui lòng thử lại.');
            });
        }
    }, [
        groups,
        allUsers,
        currentUser,
        fetchAllData,
        handleSelectChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCurrentUser = async ()=>{
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
        };
        fetchCurrentUser();
        const onStorage = (e)=>{
            if (e.key === 'info_user') {
                try {
                    const next = e.newValue ? JSON.parse(e.newValue) : null;
                    if (next && next._id) {
                        setCurrentUser(next);
                    }
                } catch  {}
            }
        };
        window.addEventListener('storage', onStorage);
        return ()=>{
            window.removeEventListener('storage', onStorage);
        };
    }, [
        router
    ]);
    // 3. Gọi Fetch Data lần đầu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentUser) fetchAllData();
    }, [
        currentUser,
        fetchAllData
    ]);
    // 4. Kết nối Socket & Xử lý Realtime Sidebar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectedChatRef.current = selectedChat;
    }, [
        selectedChat
    ]);
    // 4. Kết nối Socket & Xử lý Realtime Sidebar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentUser) return;
        const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSocketUrl"])();
        socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(endpoint, {
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
        const hb = setInterval(()=>{
            try {
                socketRef.current?.emit('heartbeat', {
                    userId: currentUser._id
                });
            } catch  {}
        }, HEARTBEAT_MS);
        socketRef.current.on('presence_update', (payload)=>{
            setAllUsers((prev)=>prev.map((u)=>String(u._id) === String(payload.userId) ? {
                        ...u,
                        online: payload.online,
                        lastSeen: payload.lastSeen ?? u.lastSeen
                    } : u));
        });
        const handleBeforeUnload = ()=>{
            try {
                socketRef.current?.emit('heartbeat', {
                    userId: currentUser._id
                });
            } catch  {}
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        socketRef.current.on('update_sidebar', (data)=>{
            const isMyMsg = data.sender === currentUser._id;
            const activeChatId = selectedChatRef.current?._id || null;
            // 1. Xác định tên người gửi
            let senderName = 'Người lạ';
            if (isMyMsg) {
                senderName = 'Bạn';
            } else {
                const foundUser = allUsersRef.current.find((u)=>u._id === data.sender);
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
                setGroups((prev)=>{
                    const index = prev.findIndex((g)=>g._id === data.roomId);
                    if (index === -1) {
                        const myId = String(currentUser._id);
                        const memberIds = Array.isArray(data.members) ? data.members.map((m)=>typeof m === 'object' && m?._id ? String(m._id) : String(m)).filter(Boolean) : [];
                        const iAmMember = memberIds.includes(myId);
                        if (iAmMember) {
                            const stubMembers = Array.isArray(data.members) ? data.members.map((m)=>typeof m === 'object' && m?._id ? {
                                    _id: String(m._id),
                                    role: 'MEMBER',
                                    joinedAt: Date.now()
                                } : {
                                    _id: String(m),
                                    role: 'MEMBER',
                                    joinedAt: Date.now()
                                }) : [];
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
                            setTimeout(()=>fetchAllData(), 200);
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
                        const senderMember = currentGroup.members?.find((m)=>{
                            const mId = typeof m === 'object' && m && '_id' in m ? String(m._id) : String(m);
                            return mId === String(data.sender);
                        });
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
                });
            } else {
                // --- Xử lý 1-1 (User List) ---
                const partnerId = isMyMsg ? data.receiver : data.sender;
                setAllUsers((prev)=>{
                    const index = prev.findIndex((u)=>u._id === partnerId);
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
                });
            }
        });
        socketRef.current.on('group_members_updated', (payload)=>{
            const myId = String(currentUser._id);
            const nextMemberIds = Array.isArray(payload.members) ? payload.members.map((m)=>String(m._id)) : [];
            const stillInGroup = nextMemberIds.includes(myId);
            if (!stillInGroup) {
                setGroups((prev)=>prev.filter((g)=>String(g._id) !== String(payload.roomId)));
                if (selectedChatRef.current && String(selectedChatRef.current._id) === String(payload.roomId)) {
                    setSelectedChat(null);
                }
            }
        });
        socketRef.current.on('group_renamed', (payload)=>{
            setGroups((prev)=>prev.map((g)=>String(g._id) === String(payload.roomId) ? {
                        ...g,
                        name: payload.groupName
                    } : g));
            if (selectedChatRef.current && String(selectedChatRef.current._id) === String(payload.roomId)) {
                setSelectedChat((prev)=>prev ? {
                        ...prev,
                        name: payload.groupName
                    } : prev);
            }
        });
        return ()=>{
            try {
                clearInterval(hb);
            } catch  {}
            window.removeEventListener('beforeunload', handleBeforeUnload);
            socketRef.current?.disconnect();
        };
    }, [
        currentUser,
        fetchAllData,
        playMessageSound
    ]);
    // 5. Xử lý Chat Action (Pin/Hide)
    const handleChatAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (roomId, actionType, isChecked, isGroupChat)=>{
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
                    setGroups((prev)=>prev.map((chat)=>{
                            if (chat._id === roomId) {
                                const updateField = actionType === 'pin' ? 'isPinned' : 'isHidden';
                                return {
                                    ...chat,
                                    [updateField]: isChecked
                                };
                            }
                            return chat;
                        }));
                } else {
                    setAllUsers((prev)=>prev.map((chat)=>{
                            if (chat._id === roomId) {
                                const updateField = actionType === 'pin' ? 'isPinned' : 'isHidden';
                                return {
                                    ...chat,
                                    [updateField]: isChecked
                                };
                            }
                            return chat;
                        }));
                }
                setTimeout(()=>{
                    fetchAllData();
                }, 500);
            }
        } catch (error) {
            console.error(`Lỗi ${actionType} chat:`, error);
        }
    }, [
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
}),
"[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatProvider",
    ()=>ChatProvider,
    "useChatContext",
    ()=>useChatContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ChatProvider = ({ value, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ChatContext.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const useChatContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
};
}),
"[project]/src/data/fbEmojis.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/data/dataBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/uploadStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/onesignal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-onesignal/dist/index.js [app-ssr] (ecmascript)");
;
let __inited = false;
async function initOneSignal() {
    if (__inited) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
        appId: String(("TURBOPACK compile-time value", "12119819-aca3-4965-86fe-633ab89cd21a") || process.env.ONESIGNAL_APP_ID || '').trim(),
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
    const permission = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Notifications.requestPermission();
    return permission;
}
async function getUserId() {
    const userId = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
    return userId;
}
async function addUserTags(tags) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].User.addTags(tags);
}
async function loginOneSignal(externalId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].login(externalId);
    } catch  {}
}
async function ensureSubscribed() {
    try {
        const id = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
        if (id) return id;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Notifications.requestPermission();
        for(let i = 0; i < 5; i++){
            const cur = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
            if (cur) return cur;
            await new Promise((r)=>setTimeout(r, 800));
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$onesignal$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].User.PushSubscription.id;
    } catch  {
        return null;
    }
}
async function waitForOneSignalReady() {
    const max = 30;
    for(let i = 0; i < max; i++){
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        await new Promise((r)=>setTimeout(r, 200));
    }
}
}),
];

//# sourceMappingURL=src_5a408c01._.js.map