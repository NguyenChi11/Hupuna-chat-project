import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Các cấu hình khác giữ nguyên ở đây nếu có
  images: {
    localPatterns: [
      {
        pathname: '/imgs/**',
      },
      {
        pathname: '/icons/**',
      },
      {
        pathname: '/logo/**',
      },
    ],
    // Cho phép load ảnh từ MEGA (avatar sau khi upload)
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '117.4.242.30',
        port: '8090',
        pathname: '/api/files/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'mega.nz',
      },
    ],
  },
  // Khai báo root cho Turbopack để tránh chọn sai workspace
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
