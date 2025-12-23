self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('message', async (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;
  if (data.type !== 'UPLOAD') return;
  const uploadId = String(data.uploadId || '');
  const fields = data.fields || {};
  try {
    const fd = new FormData();
    Object.keys(fields).forEach((k) => {
      const v = fields[k];
      if (v != null) fd.append(k, v);
    });
    const res = await fetch(`/api/upload?uploadId=${encodeURIComponent(uploadId)}`, {
      method: 'POST',
      body: fd,
    });
    const json = await res.json();
    const msg = { type: 'UPLOAD_COMPLETE', uploadId, response: json };
    if (event.source && 'postMessage' in event.source) {
      event.source.postMessage(msg);
    } else {
      const clientsList = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
      clientsList.forEach((c) => c.postMessage(msg));
    }
  } catch (err) {
    const msg = {
      type: 'UPLOAD_FAILED',
      uploadId,
      message: err && typeof err === 'object' && 'message' in err ? String(err.message) : String(err),
    };
    if (event.source && 'postMessage' in event.source) {
      event.source.postMessage(msg);
    } else {
      const clientsList = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
      clientsList.forEach((c) => c.postMessage(msg));
    }
  }
});
