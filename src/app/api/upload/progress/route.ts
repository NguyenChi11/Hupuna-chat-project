// app/api/upload/progress/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getProgress, clearProgress } from '@/lib/uploadStore';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

  const encoder = new TextEncoder();
  let cleanupRef: (() => void) | null = null;

  const stream = new ReadableStream({
    start(controller) {
      let interval: ReturnType<typeof setInterval> | null = null;
      let cleaned = false;

      const cleanup = () => {
        if (cleaned) return;
        cleaned = true;
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        req.signal.removeEventListener('abort', onAbort);
        clearProgress(id);
        try {
          controller.close();
        } catch {}
      };

      const onAbort = () => cleanup();
      cleanupRef = cleanup;
      req.signal.addEventListener('abort', onAbort);

      interval = setInterval(() => {
        const raw = getProgress(id);
        const percent = raw;
        const done = percent >= 100 || percent < 0 || percent === -1;
        const payload = { id, percent, formattedPercent: `${Math.round(Math.max(0, percent))}%`, done };
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
        if (done) {
          cleanup();
        }
      }, 250);
    },
    cancel() {
      if (typeof cleanupRef === 'function') {
        cleanupRef();
      } else {
        clearProgress(id);
      }
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
