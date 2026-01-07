// server.js
import { Server } from 'socket.io';
const io = new Server(
  Number(process.env.SOCKET_PORT || process.env.NEXT_PUBLIC_SOCKET_PORT || process.env.NEXT_PUBLIC_SERVER_PORT || 3002),
  {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  },
);
const presence = new Map();
const callSessions = new Map();
const roomCalls = new Map();
const roomNicknames = new Map();

// const formatDuration = (sec) => {
//   const s = Math.max(0, Math.floor(Number(sec || 0)));
//   const m = Math.floor(s / 60);
//   const ss = s % 60;
//   return `${m} phút ${ss} giây`;
// };
// const buildCallContent = ({ type, incoming, status, durationSec }) => {
//   const kind = type === 'video' ? 'video' : 'thoại';
//   const dir = incoming ? 'đến' : 'đi';
//   if (status === 'answered') return `Cuộc gọi ${kind} ${dir} – ${formatDuration(durationSec || 0)}`;
//   if (status === 'rejected') return `Cuộc gọi ${kind} ${dir} – Bị từ chối`;
//   return `Cuộc gọi ${kind} ${dir} – Không phản hồi`;
// };
const createCallNotify = async ({ roomId, sender, callerId, calleeId, type, status, durationSec }) => {
  try {
    const payload = {
      roomId: String(roomId),
      sender: String(sender),
      callerId: String(callerId),
      calleeId: String(calleeId),
      type,
      status,
      durationSec: typeof durationSec === 'number' ? Math.max(0, Math.floor(durationSec)) : 0,
    };
    io.to(String(sender)).emit('call_notify', payload);
  } catch {}
};

io.on('connection', (socket) => {
  let connectedUserId = null;

  socket.on('join_room', (room) => {
    const roomId = String(room);
    socket.join(roomId);
    try {
      const current = roomNicknames.get(roomId) || {};
      socket.emit('room_nicknames_state', { roomId, map: current });
    } catch {}
  });
  socket.on('call_leave', () => {});

  socket.on('join_user', (payload) => {
    const userId = typeof payload === 'string' ? payload : String(payload?.userId || '');
    if (!userId) return;
    socket.join(String(userId));
    connectedUserId = String(userId);
  });

  socket.on('send_message', (data) => {
    const roomId = String(data.roomId);
    const now = Date.now();
    const payload = { ...data, timestamp: now, serverTimestamp: now };
    io.in(roomId).emit('receive_message', payload);

    const isTextLike = payload.type === 'text' || payload.type === 'notify';
    const lastMessage = `${payload.senderName}: ${isTextLike ? (payload.content ?? '') : `[${payload.type ?? 'Unknown'}]`}`;
    const sidebarData = { ...payload, lastMessage, timestamp: now, serverTimestamp: now };

    if (data.isGroup && data.members) {
      data.members.forEach((memberId) => {
        const idRaw = typeof memberId === 'object' ? memberId._id : memberId;
        io.to(String(idRaw)).emit('update_sidebar', sidebarData);
      });
    } else if (data.receiver) {
      io.to(String(data.receiver)).emit('update_sidebar', sidebarData);
    }
    if (data.sender) {
      io.to(String(data.sender)).emit('update_sidebar', sidebarData);
    }
  });
  socket.on('messages_read', (data) => {
    try {
      const roomId = String(data.roomId);
      const userId = String(data.userId || connectedUserId || '');
      if (!roomId || !userId) return;
      io.in(roomId).emit('messages_read', { roomId, userId });
    } catch {}
  });

  socket.on('group_members_updated', (data) => {
    const roomId = String(data.roomId);
    const members = Array.isArray(data.members) ? data.members : [];
    const payload = {
      roomId,
      members,
      sender: data.sender,
      senderName: data.senderName,
      timestamp: Date.now(),
    };

    // Broadcast vào room (cho những client đang mở phòng)
    io.in(roomId).emit('group_members_updated', payload);

    const sidebarData = {
      roomId,
      lastMessage: `${data.senderName || 'Ai đó'}: [Cập nhật thành viên]`,
      type: 'notify',
      timestamp: Date.now(),
      isGroup: true,
      members,
      groupName: data.groupName,
    };

    const prevMembers = Array.isArray(data.prevMembers) ? data.prevMembers : [];
    const nextMembers = members;
    const merged = [...prevMembers, ...nextMembers];
    const recipients = new Set(
      merged.map((m) => (typeof m === 'object' && m?._id ? String(m._id) : String(m))).filter((id) => !!id),
    );

    recipients.forEach((id) => {
      io.to(id).emit('update_sidebar', sidebarData);
      io.to(id).emit('group_members_updated', payload);
    });
    if (data.sender) {
      io.to(String(data.sender)).emit('update_sidebar', sidebarData);
    }
  });

  socket.on('group_created', (data) => {
    const roomId = String(data.roomId);
    const members = Array.isArray(data.members) ? data.members : [];

    const sidebarData = {
      roomId,
      lastMessage: `${data.senderName || 'Ai đó'}: [Tạo nhóm]`,
      type: 'notify',
      timestamp: Date.now(),
      isGroup: true,
      members,
      sender: data.sender,
      senderName: data.senderName,
      groupName: data.groupName,
    };

    const recipients = new Set(
      members.map((m) => (typeof m === 'object' && m?._id ? String(m._id) : String(m))).filter(Boolean),
    );

    // Gửi cho tất cả thành viên (bao gồm người tạo)
    recipients.forEach((id) => {
      io.to(id).emit('update_sidebar', sidebarData);
    });
    if (data.sender) {
      io.to(String(data.sender)).emit('update_sidebar', sidebarData);
    }
  });

  socket.on('group_renamed', (data) => {
    const roomId = String(data.roomId);
    const groupName = String(data.groupName || '');
    const members = Array.isArray(data.members) ? data.members : [];
    const now = Date.now();

    io.in(roomId).emit('group_renamed', { roomId, groupName, timestamp: now });

    const sidebarData = {
      roomId,
      lastMessage: `${data.senderName || 'Ai đó'}: [Đổi tên nhóm]`,
      type: 'notify',
      timestamp: now,
      isGroup: true,
      members,
      groupName,
      sender: data.sender,
      senderName: data.senderName,
    };

    const recipients = new Set(
      members.map((m) => (typeof m === 'object' && m?._id ? String(m._id) : String(m))).filter(Boolean),
    );
    recipients.forEach((id) => {
      io.to(id).emit('update_sidebar', sidebarData);
      io.to(id).emit('group_renamed', { roomId, groupName, timestamp: now });
    });
    if (data.sender) {
      io.to(String(data.sender)).emit('update_sidebar', sidebarData);
    }
  });
  socket.on('pin_message', (data) => {
    const roomId = String(data.roomId);
    io.in(roomId).emit('message_pinned', {
      _id: data._id,
      roomId: data.roomId,
      isPinned: data.isPinned,
    });
  });
  socket.on('toggle_reaction', (data) => {
    const roomId = String(data.roomId);

    // ✅ Broadcast reaction update tới tất cả clients trong room
    const payload = {
      _id: data._id,
      roomId: data.roomId,
      reactions: data.reactions, // ✅ QUAN TRỌNG: Phải có field này
      editedAt: data.editedAt || Date.now(),
    };

    // Emit tới tất cả clients trong room (bao gồm cả sender)
    io.in(roomId).emit('reaction_updated', payload);

    // ✅ Optional: Update sidebar nếu cần
    if (data.isGroup && data.members) {
      data.members.forEach((memberId) => {
        const idRaw = typeof memberId === 'object' ? memberId._id : memberId;
        io.to(String(idRaw)).emit('update_sidebar', {
          ...data,
          lastMessage: `${data.senderName || 'Ai đó'}: [Đã thả cảm xúc]`,
          type: 'reaction',
          timestamp: data.editedAt || Date.now(),
        });
      });
    } else if (data.receiver) {
      io.to(String(data.receiver)).emit('update_sidebar', {
        ...data,
        lastMessage: `${data.senderName || 'Ai đó'}: [Đã thả cảm xúc]`,
        type: 'reaction',
        timestamp: data.editedAt || Date.now(),
      });
    }
  });
  // 🔥 Broadcast cập nhật biệt danh phòng tới tất cả thành viên trong room
  socket.on('room_nickname_updated', (data) => {
    try {
      const roomId = String(data.roomId);
      const targetUserId = String(data.targetUserId || '');
      const nickname = String(data.nickname || '');
      if (!roomId || !targetUserId) return;
      const map = roomNicknames.get(roomId) || {};
      if (nickname) map[targetUserId] = nickname;
      else delete map[targetUserId];
      roomNicknames.set(roomId, map);
      io.in(roomId).emit('room_nickname_updated', { roomId, targetUserId, nickname });
    } catch {}
  });
  // 🔥 THÊM SOCKET EVENT CHO EDIT MESSAGE
  socket.on('edit_message', (data) => {
    const payload = {
      _id: data._id,
      roomId: data.roomId,
      content: data.newContent,
      editedAt: data.editedAt,
      originalContent: data.originalContent,
      pollQuestion: data.pollQuestion,
      pollOptions: data.pollOptions,
      pollVotes: data.pollVotes,
      isPollLocked: data.isPollLocked,
      pollLockedAt: data.pollLockedAt,
      // Reminder fields
      reminderAt: data.reminderAt,
      reminderNote: data.reminderNote,
      reminderRepeat: data.reminderRepeat,
      reminderFired: data.reminderFired,
      // Timestamp
      timestamp: data.timestamp,
      // other flags
      isPinned: data.isPinned,
      reactions: data.reactions,
    };

    io.in(String(data.roomId)).emit('edit_message', payload);
    io.in(String(data.roomId)).emit('message_edited', payload);

    // Update Sidebar
    if (typeof data.newContent === 'string') {
      const sidebarData = {
        _id: data._id,
        roomId: data.roomId,
        sender: data.sender,
        senderName: data.senderName,
        content: data.newContent,
        lastMessage: `${data.senderName}: ${data.newContent}`,
        type: 'text',
        timestamp: data.editedAt || Date.now(),
        editedAt: data.editedAt,
        isGroup: data.isGroup,
        members: data.members,
        receiver: data.receiver,
      };

      if (data.isGroup && data.members) {
        data.members.forEach((memberId) => {
          const idRaw = typeof memberId === 'object' ? memberId._id : memberId;
          io.to(String(idRaw)).emit('update_sidebar', sidebarData);
        });
      } else if (data.receiver) {
        io.to(String(data.receiver)).emit('update_sidebar', sidebarData);
      }
      if (data.sender) {
        io.to(String(data.sender)).emit('update_sidebar', sidebarData);
      }
    }
  });
  socket.on('folder_item_updated', (data) => {
    const roomId = String(data.roomId);
    io.in(roomId).emit('folder_item_updated', data);
  });
  socket.on('folder_tree_updated', (data) => {
    const roomId = String(data.roomId);
    io.in(roomId).emit('folder_tree_updated', data);
  });
  socket.on('chatflash_folder_updated', (data) => {
    const roomId = String(data.roomId);
    io.in(roomId).emit('chatflash_folder_updated', data);
  });
  socket.on('chatflash_kv_updated', (data) => {
    const roomId = String(data.roomId);
    io.in(roomId).emit('chatflash_kv_updated', data);
  });

  socket.on('recall_message', (data) => {
    io.in(data.roomId).emit('message_recalled', {
      _id: data._id,
      roomId: data.roomId,
    });

    const sidebarData = {
      ...data,
      content: 'đã thu hồi tin nhắn',
      type: 'recall',
      isRecalled: true,
    };

    if (data.isGroup && data.members) {
      data.members.forEach((memberId) => {
        const idStr = typeof memberId === 'object' ? memberId._id : memberId;
        io.to(idStr).emit('update_sidebar', sidebarData);
      });
    } else if (data.receiver) {
      io.to(data.receiver).emit('update_sidebar', sidebarData);
    }
    if (data.sender) {
      io.to(data.sender).emit('update_sidebar', sidebarData);
    }
  });

  socket.on('message_deleted', (data) => {
    const roomId = String(data.roomId);
    io.in(roomId).emit('message_deleted', {
      _id: data._id,
      roomId: data.roomId,
    });

    const sidebarData = {
      _id: data._id,
      roomId: data.roomId,
      sender: data.sender,
      senderName: data.senderName,
      isGroup: data.isGroup,
      receiver: data.receiver,
      members: data.members,
      type: 'delete',
      timestamp: data.timestamp || Date.now(),
      lastMessage: `${data.senderName || 'Ai đó'}: [Xóa lịch hẹn]`,
    };

    if (data.isGroup && data.members) {
      data.members.forEach((memberId) => {
        const idStr = typeof memberId === 'object' ? memberId._id : memberId;
        io.to(String(idStr)).emit('update_sidebar', sidebarData);
      });
    } else if (data.receiver) {
      io.to(String(data.receiver)).emit('update_sidebar', sidebarData);
    }
    if (data.sender) {
      io.to(String(data.sender)).emit('update_sidebar', sidebarData);
    }
  });

  socket.on('user_online', (payload) => {
    const userId = String(payload?.userId || '');
    if (!userId) return;
    connectedUserId = userId;
    const prev = presence.get(userId) || { online: false, lastSeen: null };
    const next = { online: true, lastSeen: prev.lastSeen };
    presence.set(userId, next);
    io.emit('presence_update', { userId, online: true, lastSeen: next.lastSeen });
  });

  socket.on('heartbeat', (payload) => {
    const userId = String(payload?.userId || connectedUserId || '');
    if (!userId) return;
    const next = { online: true, lastSeen: Date.now() };
    presence.set(userId, next);
    io.emit('presence_update', { userId, online: true, lastSeen: next.lastSeen });
  });

  socket.on('user_offline', (payload) => {
    const userId = String(payload?.userId || connectedUserId || '');
    if (!userId) return;
    const next = { online: false, lastSeen: Date.now() };
    presence.set(userId, next);
    io.emit('presence_update', { userId, online: false, lastSeen: next.lastSeen });
  });

  socket.on('disconnect', () => {
    if (!connectedUserId) return;
    const next = { online: true, lastSeen: Date.now() };
    presence.set(connectedUserId, next);
  });

  socket.on('call_offer', () => {});

  socket.on('call_answer', () => {});

  socket.on('call_candidate', () => {});

  socket.on('call_end', () => {});
  socket.on('call_reject', async (data) => {});
  socket.on('incoming-call', (data) => {
    const recipients = Array.isArray(data?.recipients) ? data.recipients.map((x) => String(x)) : [];
    recipients.forEach((id) => io.to(id).emit('incoming-call', data));
  });
  socket.on('call-accepted', (data) => {
    const recipients = Array.isArray(data?.recipients) ? data.recipients.map((x) => String(x)) : [];
    recipients.forEach((id) => io.to(id).emit('call-accepted', data));
  });
  socket.on('call-declined', (data) => {
    const recipients = Array.isArray(data?.recipients) ? data.recipients.map((x) => String(x)) : [];
    recipients.forEach((id) => io.to(id).emit('call-declined', data));
  });
  socket.on('participant-joined', (data) => {
    const recipients = Array.isArray(data?.recipients) ? data.recipients.map((x) => String(x)) : [];
    recipients.forEach((id) => io.to(id).emit('participant-joined', data));
  });
  socket.on('participant-left', (data) => {
    const recipients = Array.isArray(data?.recipients) ? data.recipients.map((x) => String(x)) : [];
    recipients.forEach((id) => io.to(id).emit('participant-left', data));
  });
  socket.on('call-ended', (data) => {
    const recipients = Array.isArray(data?.recipients) ? data.recipients.map((x) => String(x)) : [];
    recipients.forEach((id) => io.to(id).emit('call-ended', data));
  });
});
