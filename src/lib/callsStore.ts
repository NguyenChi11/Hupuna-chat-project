type CallType = 'one_to_one' | 'group';
type MediaType = 'voice' | 'video';

type CallRow = {
  id: string;
  conversation_id: string;
  type: CallType;
  media: MediaType;
  room_name: string;
  status: 'ringing' | 'ongoing' | 'ended';
  created_by: string;
  started_at: number | null;
  ended_at: number | null;
  created_at: number;
  updated_at: number;
  targets: string[];
};

type ParticipantRow = {
  id: string;
  call_id: string;
  user_id: string;
  status: 'ringing' | 'joined' | 'declined' | 'missed' | 'left';
  joined_at: number | null;
  left_at: number | null;
};

declare global {
  var __callsStore_calls: Map<string, CallRow> | undefined;
  var __callsStore_participants: Map<string, ParticipantRow> | undefined;
}
globalThis.__callsStore_calls = globalThis.__callsStore_calls || new Map<string, CallRow>();
globalThis.__callsStore_participants = globalThis.__callsStore_participants || new Map<string, ParticipantRow>();
const calls = globalThis.__callsStore_calls;
const participants = globalThis.__callsStore_participants;

function id() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
}

export function createCall(payload: {
  conversation_id: string;
  type: CallType;
  media: MediaType;
  room_name: string;
  created_by: string;
  targets: string[];
}) {
  const now = Date.now();
  const row: CallRow = {
    id: id(),
    conversation_id: payload.conversation_id,
    type: payload.type,
    media: payload.media,
    room_name: payload.room_name,
    status: 'ringing',
    created_by: payload.created_by,
    started_at: null,
    ended_at: null,
    created_at: now,
    updated_at: now,
    targets: payload.targets,
  };
  calls.set(row.id, row);
  return row;
}

export function getCall(call_id: string) {
  return calls.get(call_id) || null;
}

export function setCallOngoing(call_id: string) {
  const row = calls.get(call_id);
  if (!row) return null;
  if (row.status !== 'ongoing') {
    row.status = 'ongoing';
    row.started_at = Date.now();
    row.updated_at = Date.now();
    calls.set(call_id, row);
  }
  return row;
}

export function endCall(call_id: string) {
  const row = calls.get(call_id);
  if (!row) return null;
  row.status = 'ended';
  row.ended_at = Date.now();
  row.updated_at = Date.now();
  calls.set(call_id, row);
  return row;
}

export function addParticipants(call_id: string, list: Array<{ user_id: string; status: ParticipantRow['status'] }>) {
  const rows: ParticipantRow[] = [];
  for (const item of list) {
    const row: ParticipantRow = {
      id: id(),
      call_id,
      user_id: item.user_id,
      status: item.status,
      joined_at: item.status === 'joined' ? Date.now() : null,
      left_at: null,
    };
    participants.set(row.id, row);
    rows.push(row);
  }
  return rows;
}

export function updateParticipant(call_id: string, user_id: string, patch: Partial<ParticipantRow>) {
  for (const row of participants.values()) {
    if (row.call_id === call_id && row.user_id === user_id) {
      const next = { ...row, ...patch };
      participants.set(row.id, next);
      return next;
    }
  }
  return null;
}

export function getParticipants(call_id: string) {
  return Array.from(participants.values()).filter((p) => p.call_id === call_id);
}

export function getJoinedCount(call_id: string) {
  return getParticipants(call_id).filter((p) => p.status === 'joined').length;
}

export function getRecipientsForCall(call_id: string) {
  const row = calls.get(call_id);
  if (!row) return [];
  const base = new Set<string>([row.created_by, ...row.targets]);
  return Array.from(base);
}
