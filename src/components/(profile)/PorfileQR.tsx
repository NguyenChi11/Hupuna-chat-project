'use client';

import { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';

function ProfileQR({ profilePath }: { profilePath: string }) {
  const [dataUrl, setDataUrl] = useState<string>('');

  const qrValue = useMemo(() => {
    if (!profilePath) return '';
    if (typeof window === 'undefined') return '';
    const origin = window.location.origin;
    const path = profilePath.startsWith('/') ? profilePath : `/${profilePath}`;
    return `${origin}${path}`;
  }, [profilePath]);

  useEffect(() => {
    let cancelled = false;
    if (!qrValue) {
      setDataUrl('');
      return;
    }
    QRCode.toDataURL(qrValue, { errorCorrectionLevel: 'M', margin: 1, width: 320 })
      .then((url: string) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setDataUrl('');
      });
    return () => {
      cancelled = true;
    };
  }, [qrValue]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center border border-gray-200">
        {dataUrl ? (
          <Image width={320} height={320} src={dataUrl} alt="Mã QR hồ sơ" className="w-full h-full rounded-lg" />
        ) : (
          <span className="text-gray-400 text-sm">Đang tạo QR…</span>
        )}
      </div>
      <p className="text-sm text-gray-500 text-center md:text-base">
        Mã QR để người khác kết bạn hoặc xem hồ sơ của bạn.
      </p>
    </div>
  );
}
export default ProfileQR;
