export async function fetchLiveKitToken(params: {
  room: string;
  identity: string;
  name?: string;
  metadata?: string;
  canPublish?: boolean;
  canSubscribe?: boolean;
}): Promise<string> {
  const res = await fetch('/api/livekit/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const json = await res.json();
  if (!json?.success || !json?.token) {
    throw new Error(json?.error || 'generate token failed');
  }
  return String(json.token);
}

