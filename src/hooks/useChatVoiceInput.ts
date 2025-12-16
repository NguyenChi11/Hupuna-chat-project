'use client';

import { useCallback, useRef, useState } from 'react';
import { insertTextAtCursor } from '@/utils/chatInput';

interface UseChatVoiceInputParams {
  editableRef: React.RefObject<HTMLDivElement | null>;
  handleInputChangeEditable: () => void;
}

export function useChatVoiceInput({ editableRef, handleInputChangeEditable }: UseChatVoiceInputParams) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const handleVoiceInput = useCallback(async () => {
    const SpeechRecognition =
      typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null;

    if (!SpeechRecognition) {
      alert('Trình duyệt của bạn không hỗ trợ chức năng này. Vui lòng dùng Chrome hoặc Edge.');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    const isLocal =
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    const isSecure =
      typeof window !== 'undefined' && (window.isSecureContext || window.location.protocol === 'https:');
    if (!isSecure && !isLocal) {
      alert('Vui lòng truy cập qua HTTPS hoặc localhost để sử dụng nhập bằng giọng nói.');
      return;
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((t) => t.stop());
      }
    } catch {
      alert('Vui lòng cấp quyền microphone cho trình duyệt để sử dụng nhập bằng giọng nói.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'vi-VN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: SpeechRecognitionEventLike) => {
      const transcript = event.results[0][0].transcript;
      const el = editableRef.current;
      if (el) {
        el.focus();
        insertTextAtCursor(el, transcript);
        handleInputChangeEditable();
      }
    };

    recognition.onerror = (event: SpeechRecognitionEventLike) => {
      if ((event.error || '').toLowerCase() === 'not-allowed') {
        alert('Truy cập microphone bị từ chối. Vui lòng cấp quyền trong cài đặt trình duyệt.');
      }
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [isListening, editableRef, handleInputChangeEditable]);

  return {
    isListening,
    handleVoiceInput,
  };
}
