import type { Metadata } from 'next';
import { Geist, Geist_Mono, Patrick_Hand, Be_Vietnam_Pro, Source_Sans_3 } from 'next/font/google';
// import Script from 'next/script';
import './globals.css';
import 'react-advanced-cropper/dist/style.css';
import { ToastProvider } from '../components/base/toast';
import OneSignalScript from '@/components/OneSignalScript';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const patrickHand = Patrick_Hand({
  variable: '--font-patrick-hand',
  weight: '400',
  subsets: ['latin', 'vietnamese', 'latin-ext'],
  display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese', 'latin-ext'],
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hupuna chat Web',
  description: 'Developer Hupuna create a chat web app',
  applicationName: 'Hupuna Chat',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hupuna Chat',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <meta name="apple-mobile-web-app-title" content="Tên App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beVietnamPro.variable} ${patrickHand.variable} ${sourceSans3.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ToastProvider>{children}</ToastProvider>
        <OneSignalScript />
        {/* <Script src="/chat-widget.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
