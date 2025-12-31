'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { Message } from '@/types/Message';
import { isVideoFile } from '@/utils/utils';

const MESSAGE_SOUND_URL = 'https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3';

let globalAudioContext: AudioContext | null = null;

interface UseChatNotificationsOptions {
  chatName?: string;
}

export function useChatNotifications({ chatName }: UseChatNotificationsOptions) {
  const messageAudioRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayedAtRef = useRef<number>(0);
  const flashingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const flashTabTitle = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!document.hidden) return; // Chỉ nhấp nháy khi tab đang ẩn

    if (flashingIntervalRef.current) return; // Đang nhấp nháy rồi thì thôi

    const originalTitle = document.title;
    let isOriginal = false;
    
    flashingIntervalRef.current = setInterval(() => {
      document.title = isOriginal ? 'Bạn có tin nhắn mới' : originalTitle;
      isOriginal = !isOriginal;
    }, 1000);

    const stopFlashing = () => {
      if (flashingIntervalRef.current) {
        clearInterval(flashingIntervalRef.current);
        flashingIntervalRef.current = null;
      }
      document.title = originalTitle;
      window.removeEventListener('focus', stopFlashing);
      window.removeEventListener('click', stopFlashing);
    };

    window.addEventListener('focus', stopFlashing);
    window.addEventListener('click', stopFlashing);
  }, []);

  const playMessageSound = useCallback(() => {
    if (typeof window === 'undefined') return;
    try {
      const now = Date.now();
      if (now - (lastPlayedAtRef.current || 0) < 400) {
        return;
      }
      if (!messageAudioRef.current) {
        const a = new Audio(MESSAGE_SOUND_URL);
        a.preload = 'auto';
        messageAudioRef.current = a;
      }
      const audio = messageAudioRef.current;
      audio.currentTime = 0;
      void audio.play().catch(() => {
        try {
          const AC = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext })
            .AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
          if (!AC) return;
          
          let ctx = globalAudioContext;
          if (!ctx) {
            ctx = new AC();
            globalAudioContext = ctx;
          }

          if (ctx.state === 'suspended') {
             void ctx.resume();
          }

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.connect(ctx.destination);

          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(820, ctx.currentTime);
          osc1.frequency.linearRampToValueAtTime(1180, ctx.currentTime + 0.08);
          osc1.connect(gain);

          const osc2 = ctx.createOscillator();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(620, ctx.currentTime + 0.05);
          osc2.frequency.linearRampToValueAtTime(980, ctx.currentTime + 0.12);
          osc2.connect(gain);

          gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 0.02);
          gain.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.20);

          osc1.start(ctx.currentTime);
          osc1.stop(ctx.currentTime + 0.18);
          osc2.start(ctx.currentTime + 0.05);
          try {
            osc2.stop(ctx.currentTime + 0.23);
          } catch {}
          setTimeout(() => {
            try {
              osc1.disconnect();
              osc2.disconnect();
              gain.disconnect();
              // Do NOT close the global context, just disconnect nodes
              // ctx.close(); 
            } catch {}
          }, 260);
        } catch {}
      });
      lastPlayedAtRef.current = now;
    } catch {
      // ignore
    }
  }, []);

  const showMessageNotification = useCallback(
    (msg: Message) => {
      if (typeof window === 'undefined') return;
      if (!('Notification' in window)) return;

      // Nếu chưa xin quyền, xin ngay lúc nhận tin nhắn
      if (Notification.permission === 'default') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification(chatName || 'Tin nhắn mới', {
              body:
                msg.content ||
                (msg.type === 'image'
                  ? 'Đã gửi cho bạn một ảnh.'
                  : msg.type === 'video' || isVideoFile(msg.fileName)
                    ? 'Đã gửi cho bạn một video.'
                    : msg.type === 'file'
                      ? 'Đã gửi cho bạn một file.'
                      : 'Bạn có tin nhắn mới.'),
            });
          }
        });
        return;
      }

      if (Notification.permission !== 'granted') return;

      const body =
        msg.content ||
        (msg.type === 'image'
          ? 'Đã gửi cho bạn một ảnh.'
          : msg.type === 'video' || isVideoFile(msg.fileName)
            ? 'Đã gửi cho bạn một video.'
            : msg.type === 'file'
              ? 'Đã gửi cho bạn một file.'
              : 'Bạn có tin nhắn mới.');

      new Notification(chatName || 'Tin nhắn mới', {
        body,
      });
    },
    [chatName],
  );

  // Xin quyền thông báo 1 lần khi mở cửa sổ chat
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('Notification' in window)) return;
    if (Notification.permission === 'default') {
      Notification.requestPermission().catch(() => {
        // ignore
      });
    }
  }, []);

  // Unlock WebAudio context on user interaction
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAudio = () => {
      // 1. Unlock HTML5 Audio (existing logic)
      if (!messageAudioRef.current) {
        const a = new Audio(MESSAGE_SOUND_URL);
        a.preload = 'auto';
        messageAudioRef.current = a;
      }
      const audio = messageAudioRef.current;
      try {
        audio.muted = true;
        audio.currentTime = 0;
        void audio
          .play()
          .then(() => {
            audio.pause();
            audio.muted = false;
            audio.currentTime = 0;
          })
          .catch(() => {
            // ignore
          });
      } catch {
        // ignore
      }

      // 2. Unlock WebAudio Context (New Logic for Mobile)
      try {
        const AC = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext })
          .AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        
        if (AC) {
          if (!globalAudioContext) {
            globalAudioContext = new AC();
          }
          const ctx = globalAudioContext;
          if (ctx.state === 'suspended') {
            void ctx.resume();
          }
          // Play a silent buffer to fully unlock iOS/Android
          const buffer = ctx.createBuffer(1, 1, 22050);
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(ctx.destination);
          source.start(0);
        }
      } catch {
        // ignore
      }
    };

    const events = ['click', 'pointerdown', 'touchstart', 'keydown'] as const;
    events.forEach((ev) => window.addEventListener(ev, initAudio, { once: true }));
    return () => {
      events.forEach((ev) => window.removeEventListener(ev, initAudio));
    };
  }, []);

  return {
    playMessageSound,
    showMessageNotification,
    flashTabTitle,
  };
}


