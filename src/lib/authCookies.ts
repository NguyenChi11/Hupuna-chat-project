import { NextResponse } from 'next/server';

const defaultCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  sameSite: 'lax' as const,
};

export function setAuthCookies(
  res: NextResponse,
  params: {
    accessToken?: string;
    refreshToken?: string;
    sid?: string;
    accessMaxAge?: number;
    refreshMaxAge?: number;
    sidMaxAge?: number;
  },
) {
  const {
    accessToken,
    refreshToken,
    sid,
    accessMaxAge = 30 * 24 * 3600,
    refreshMaxAge = 3650 * 24 * 3600,
    sidMaxAge = 3650 * 24 * 3600,
  } = params;

  if (accessToken) {
    res.cookies.set('session_token', accessToken, { ...defaultCookieOptions, maxAge: accessMaxAge });
  }
  if (sid) {
    res.cookies.set('sid', sid, { ...defaultCookieOptions, maxAge: sidMaxAge });
  }
  if (refreshToken) {
    res.cookies.set('refresh_token', refreshToken, { ...defaultCookieOptions, maxAge: refreshMaxAge });
  }
  return res;
}

export function clearAuthCookies(res: NextResponse) {
  res.cookies.set('session_token', '', { ...defaultCookieOptions, maxAge: 0 });
  res.cookies.set('sid', '', { ...defaultCookieOptions, maxAge: 0 });
  res.cookies.set('refresh_token', '', { ...defaultCookieOptions, maxAge: 0 });
  return res;
}
