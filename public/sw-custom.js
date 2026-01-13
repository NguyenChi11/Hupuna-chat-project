const CACHE_NAME = 'hupuna-chat-cache-v1';

// Add assets to cache
const urlsToCache = ['/', '/manifest.json', '/logo/hupuna-logo-300.png', '/logo/hupuna-logo-800.png'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. Skip cross-origin
  if (!url.href.startsWith(self.location.origin)) return;

  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  // 3. Ignore paths (API, Next Image, etc.) -> Network Only
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/_next/image')) {
    return;
  }

  // 4. Strategy: Stale-While-Revalidate for Static Assets
  // (JS, CSS, Images, Fonts, or specific folders)
  const isStaticAsset =
    url.pathname.startsWith('/_next/static/') || url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|gif|ico|woff|woff2)$/);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch((err) => {
            // Network failed, throw to let the browser handle or fail
            throw err;
          });
        return cachedResponse || fetchPromise;
      }),
    );
    return;
  }

  // 5. Strategy: Network First for Documents (Navigation)
  // This ensures fresh content (and auth state) but allows offline fallback if cached
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Update cache with fresh page
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        }),
    );
    return;
  }
});

// Import other workers
try {
  importScripts('/OneSignalSDKWorker.js');
} catch (e) {
  console.warn('Failed to import OneSignalSDKWorker.js', e);
}

try {
  importScripts('/sw-upload.js');
} catch (e) {
  console.warn('Failed to import sw-upload.js', e);
}
