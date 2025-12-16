export async function folderUserApi(payload: Record<string, unknown>) {
  try {
    const res = await fetch('/api/folder-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch {
    return null;
  }
}

