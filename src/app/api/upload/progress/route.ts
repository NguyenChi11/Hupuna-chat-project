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
      let notFoundCount = 0;
      const MAX_NOT_FOUND = 20; // 60 * 250ms = 15 seconds

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
        let percent = raw;
        let done = false;

        // Logic xử lý các trạng thái đặc biệt
        if (percent === -1) {
          // -1: Không tìm thấy (chưa bắt đầu hoặc đã bị xóa)
          // Chờ một khoảng thời gian trước khi kết luận là done
          notFoundCount++;
          if (notFoundCount > MAX_NOT_FOUND) {
            done = true; // Timeout
          } else {
            percent = 0; // Giả lập đang chờ (0%)
            done = false;
          }
        } else if (percent === -2) {
          // -2: Lỗi (đã được set từ API upload)
          done = true;
        } else if (percent >= 100) {
          // 100: Hoàn thành
          done = true;
        } else {
          // Có tiến trình (0-99)
          notFoundCount = 0; // Reset counter
          done = false;
        }

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
