/* eslint-disable @typescript-eslint/no-unused-vars */
export const getProxyUrl = (url?: string, download?: boolean) => {
  if (!url) return '';

  // Các link khác (S3, Firebase, External, PocketBase...) -> Giữ nguyên
  return url;
};

// 2. Helper check video (đặt ngoài component)
export const isVideoFile = (fileName?: string) => {
  if (!fileName) return false;
  const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm', 'flv'];
  const ext = fileName.split('.').pop()?.toLowerCase();
  return videoExtensions.includes(ext || '');
};

export const isLink = (str: string | undefined): boolean => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '(' + // Bắt đầu nhóm Hostname
      'localhost|' + // ✅ THÊM DÒNG NÀY: Chấp nhận localhost
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})|' + // domain name (google.com)
      '((\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (127.0.0.1)
      ')' + // Kết thúc nhóm Hostname
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  );
  return !!pattern.test(str || '');
};

export const resolveSocketUrl = (): string => {
  const envUrl = (process.env.NEXT_PUBLIC_SOCKET_URL || '').trim();
  const envPort = (process.env.NEXT_PUBLIC_SOCKET_PORT || '').trim();

  if (typeof window === 'undefined') return envUrl || '';

  const host = window.location.hostname;
  const protocol = window.location.protocol;
  const isSecure = protocol === 'https:';

  // 1. Ưu tiên URL từ biến môi trường
  if (envUrl) {
    let finalUrl = envUrl;
    // Nếu URL chứa localhost/127.0.0.1 -> thay bằng hostname hiện tại
    if (finalUrl.includes('localhost') || finalUrl.includes('127.0.0.1')) {
      finalUrl = finalUrl.replace('localhost', host).replace('127.0.0.1', host);
    }

    // Nếu đã có protocol
    if (finalUrl.match(/^(ws|wss|http|https):\/\//)) {
      // Nếu đang ở HTTPS, bắt buộc dùng WSS/HTTPS để tránh Mixed Content
      if (isSecure) {
        return finalUrl.replace(/^http:/, 'https:').replace(/^ws:/, 'wss:');
      }
      return finalUrl;
    }

    // Nếu chưa có protocol
    const proto = isSecure ? 'https:' : 'http:';
    return `${proto}//${finalUrl}`;
  }

  // 2. Logic fallback (tự động đoán)
  const port = envPort || '3002';

  // Localhost / Dev -> Luôn dùng http + port
  if (host === 'localhost' || host === '127.0.0.1') {
    return `http://${host}:${port}`;
  }

  // Production (HTTPS)
  if (isSecure) {
    // Nếu không set port cụ thể trong ENV, ta giả định dùng port 443 (qua Nginx proxy)
    // để tránh lỗi Mixed Content (wss://...:3002 yêu cầu SSL trên port 3002)
    if (!envPort) {
      return `https://${host}`;
    }
    // Nếu có set port, dùng port đó với https (wss)
    return `https://${host}:${port}`;
  }

  // Production (HTTP) hoặc IP LAN
  return `${protocol}//${host}:${port}`;
};
