import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT, signJWT, signEphemeralJWT } from '@/lib/auth';

// Danh sách các trang cần bảo vệ
const protectedRoutes = ['/home'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Kiểm tra trang cần bảo vệ
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = request.cookies.get('session_token')?.value;

    // Nếu không có token hoặc token sai -> Đá về trang login (/)
    if (!token || !(await verifyJWT(token))) {
      const refresh = request.cookies.get('refresh_token')?.value || '';
      if (refresh) {
        const payload = await verifyJWT(refresh);
        if (payload && payload['purpose'] === 'refresh') {
          const enc = new TextEncoder();
          const ua = request.headers.get('user-agent') || '';
          const al = request.headers.get('accept-language') || '';
          const data = enc.encode(`${ua}|${al}`);
          const digest = await crypto.subtle.digest('SHA-256', data);
          const hex = Array.from(new Uint8Array(digest))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
          const tfp = typeof payload['fp'] === 'string' ? (payload['fp'] as string) : '';
          const userId = typeof payload['sub'] === 'string' ? (payload['sub'] as string) : '';
          const username = typeof payload['username'] === 'string' ? (payload['username'] as string) : '';
          const name = typeof payload['name'] === 'string' ? (payload['name'] as string) : '';
          if (userId && tfp && tfp === hex) {
            const accessToken = await signJWT({ _id: userId, username, name, fp: hex });
            const res = NextResponse.next();
            res.cookies.set('session_token', accessToken, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              path: '/',
              sameSite: 'lax',
              maxAge: 30 * 24 * 3600,
            });
            const rotateRefresh = await signEphemeralJWT(
              { purpose: 'refresh', sub: userId, username, name, fp: hex },
              3650 * 24 * 3600,
            );
            res.cookies.set('refresh_token', rotateRefresh, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              path: '/',
              sameSite: 'lax',
              maxAge: 3650 * 24 * 3600,
            });
            return res;
          }
        }
      }
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 2. Nếu đã đăng nhập mà vào trang Login (/) -> Đá vào trang chủ
  if (pathname === '/') {
    const token = request.cookies.get('session_token')?.value;
    if (token && (await verifyJWT(token))) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/home/:path*', '/api/conversations/:path*', '/api/message/:path*'],
};
