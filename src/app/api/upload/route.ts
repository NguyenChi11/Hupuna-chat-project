// app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server';
import PocketBase, { ClientResponseError } from 'pocketbase';
import { MessageCreate, MessageType, MESSAGES_COLLECTION_NAME } from '@/types/Message';
import { setProgress, clearProgress, getProgress } from '@/lib/uploadStore';
import { addRow } from '@/lib/mongoDBCRUD';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('uploadId');
  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  const raw = getProgress(id);
  const percent = raw === -1 ? 0 : raw;
  return NextResponse.json({ id, percent, formattedPercent: `${Math.round(percent)}%` });
}

export async function POST(req: NextRequest) {
  const uploadId = req.nextUrl.searchParams.get('uploadId') || 'unknown';
  console.log('--- BẮT ĐẦU API UPLOAD (SERVER SIDE) ---', uploadId);

  try {
    setProgress(uploadId, 0);

    // 1. Lấy dữ liệu FormData từ Client gửi lên
    const formData = await req.formData();
    const file = formData.get('file');

    // Kiểm tra file có tồn tại và đúng kiểu không
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ success: false, message: 'File không hợp lệ' }, { status: 400 });
    }

    // Các field phụ
    const roomId = formData.get('roomId') as string;
    const sender = formData.get('sender') as string;
    const receiver = (formData.get('receiver') as string) || '';
    const type = formData.get('type') as MessageType;
    const batchId = (formData.get('batchId') as string) || undefined;
    const skipSaveMessage = formData.get('skipSaveMessage') === 'true';

    // 2. Lấy cấu hình từ biến môi trường
    const pbUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'https://files.hupuna.vn/';
    const identity = process.env.NEXT_PUBLIC_POCKETBASE_USER_ID;
    const password = process.env.NEXT_PUBLIC_POCKETBASE_PASSWORD;
    const collectionName = process.env.NEXT_PUBLIC_POCKETBASE_COLLECTION_FILES || 'files';

    if (!identity || !password) {
      return NextResponse.json({ success: false, message: 'Lỗi cấu hình server: Thiếu .env' }, { status: 500 });
    }

    // 3. Kết nối & Đăng nhập
    const pb = new PocketBase(pbUrl);
    pb.autoCancellation(false); // Tắt tự hủy request để upload ổn định

    try {
      // Đăng nhập bằng tài khoản trong .env
      // Ưu tiên admin auth nếu có thể, hoặc user auth
      try {
        await pb.admins.authWithPassword(identity, password);
      } catch {
        // Fallback user auth
        await pb.collection('users').authWithPassword(identity, password);
      }
    } catch (e: unknown) {
      console.error('Lỗi đăng nhập System PB:', e);
      return NextResponse.json(
        { success: false, message: 'Không thể đăng nhập vào hệ thống lưu trữ' },
        { status: 401 },
      );
    }

    // 4. Chuẩn bị dữ liệu gửi sang PocketBase
    const pbFormData = new FormData();
    pbFormData.append('file', file);
    // Title là bắt buộc
    const title = (formData.get('title') as string) || file.name;
    pbFormData.append('title', title);

    // Các field khác nếu cần
    if (formData.has('folder')) {
      pbFormData.append('folder', formData.get('folder') as string);
    }

    // Gán owner là ID của tài khoản hệ thống (để file có chủ sở hữu) hoặc sender nếu sender là ID hợp lệ trong hệ thống
    // Tuy nhiên, an toàn nhất là dùng ID của tài khoản đang đăng nhập (admin/bot) làm owner ban đầu
    if (pb.authStore.model?.id) {
      pbFormData.append('users_id', pb.authStore.model.id);
    }

    setProgress(uploadId, 10);

    // 5. Thực hiện Upload
    const record = await pb.collection(collectionName).create(pbFormData);

    setProgress(uploadId, 100);

    // 6. Tạo URL hiển thị
    const baseUrl = pbUrl.endsWith('/') ? pbUrl.slice(0, -1) : pbUrl;
    const fullUrl = `${baseUrl}/api/files/${record.collectionId}/${record.id}/${record.file}`;

    // 7. Lưu message vào MongoDB (Logic cũ)
    const messageData: MessageCreate = {
      roomId,
      sender,
      receiver,
      type,
      fileName: record.file, // Dùng tên file từ PB
      fileUrl: fullUrl,
      timestamp: Date.now(),
      batchId,
      uploadId,
    };

    let insertedId: string | undefined = undefined;
    if (!skipSaveMessage && roomId) {
      try {
        insertedId = await addRow(MESSAGES_COLLECTION_NAME, messageData as MessageCreate & Record<string, unknown>);
      } catch (e) {
        console.error('Lỗi lưu DB:', e);
      }
    }

    setTimeout(() => clearProgress(uploadId), 2000);

    return NextResponse.json({
      success: true,
      link: fullUrl,
      data: messageData,
      _id: insertedId,
      saved: !!insertedId,
      // Data format theo yêu cầu mới
      result: {
        id: record.id,
        url: fullUrl,
        filename: record.file,
      },
    });
  } catch (error: unknown) {
    console.error('❌ Lỗi API Upload:', error);
    setProgress(uploadId, -2); // -2 báo hiệu lỗi

    let errorMessage = 'Lỗi server nội bộ';
    let statusCode = 500;

    if (error instanceof ClientResponseError) {
      statusCode = error.status;
      errorMessage = error.message;
      console.error('PB Response:', error.response);
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, message: errorMessage }, { status: statusCode });
  }
}
