/* eslint-disable @typescript-eslint/no-unused-vars */
(() => {
  const init = async () => {
    const DRAG_ENABLED = false;
    const FIXED_WIDTH = 360;
    const FIXED_HEIGHT = 540;
    // Tránh chạy 2 lần hoặc trong iframe chat
    if (document.getElementById('hupuna-chat-widget-container')) return;
    if (window.location.pathname.startsWith('/chat-iframe')) return;

    // Không bắt buộc đăng nhập để hiển thị widget
    // Nếu có thông tin người dùng thì sẽ gửi INIT cho iframe ở bên dưới

    // Tìm script để lấy data-src, data-title
    let scriptEl = document.currentScript;
    if (!scriptEl) {
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src.includes('chat-widget.js')) {
          scriptEl = scripts[i];
          break;
        }
      }
    }

    const url = new URL(scriptEl?.src || '', window.location.href);
    const origin = url.origin;
    const defaultSrc = `${origin}/chat-iframe`;

    const iframeSrc = scriptEl?.dataset.src || scriptEl?.getAttribute('data-src') || defaultSrc;

    // Container chính
    const container = document.createElement('div');
    container.id = 'hupuna-chat-widget-container';
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '4.375rem',
      right: '1.25rem',
      zIndex: '2147483647',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      pointerEvents: 'none',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    });
    document.body.appendChild(container);

    // Wrapper iframe (widget chat)
    const iframeWrap = document.createElement('div');
    Object.assign(iframeWrap.style, {
      width: `${FIXED_WIDTH}px`,
      height: `${FIXED_HEIGHT}px`,
      position: 'relative',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 1.25rem 2.5rem rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      background: '#fff',
      display: 'none',
      pointerEvents: 'auto',
      transform: 'translateY(20px)',
      opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2)',
    });

    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.title = 'Hupuna Chat Widget';
    iframe.allow = 'clipboard-write; microphone; camera';
    iframe.style = 'border:none; width:100%; height:100%; display:block;';
    iframeWrap.appendChild(iframe);
    iframe.addEventListener('load', () => {
      try {
        const targetOrigin = new URL(iframeSrc).origin;
        let u = null;
        try {
          const raw = localStorage.getItem('info_user');
          u = raw ? JSON.parse(raw) : null;
        } catch {}
        const payload = {
          type: 'HUPUNA_WIDGET_INIT',
          site: window.location.origin,
          user: u && (u._id || u.username) ? { _id: u._id, username: u.username, name: u.name, email: u.email } : null,
        };
        iframe.contentWindow && iframe.contentWindow.postMessage(payload, targetOrigin);
      } catch {}
    });
    let dragHandle = null;
    if (DRAG_ENABLED) {
      dragHandle = document.createElement('div');
      dragHandle.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 2rem;
        background: transparent;
        cursor: move;
        z-index: 5;
        pointer-events: auto;
      `;
      iframeWrap.appendChild(dragHandle);
    }

    // Nút mở chat với container relative
    const btnWrap = document.createElement('div');
    Object.assign(btnWrap.style, {
      position: 'relative',
      display: 'block',
      marginTop: '1.25rem',
      transform: 'translateY(0)',
      opacity: '1',
      transition: 'all 0.4s ease',
      pointerEvents: 'auto',
    });

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Mở trò chuyện với Hupuna');
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true">
        <path fill="currentColor" fill-opacity=".3" d="M775.3 248.9a369.62 369.62 0 0 0-119-80A370.2 370.2 0 0 0 512.1 140h-1.7c-99.7.4-193 39.4-262.8 109.9-69.9 70.5-108 164.1-107.6 263.8.3 60.3 15.3 120.2 43.5 173.1l4.5 8.4V836h140.8l8.4 4.5c52.9 28.2 112.8 43.2 173.1 43.5h1.7c99 0 192-38.2 262.1-107.6 70.4-69.8 109.5-163.1 110.1-262.7.2-50.6-9.5-99.6-28.9-145.8a370.15 370.15 0 0 0-80-119zM312 560a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"/>
        <path fill="currentColor" d="M664 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"/>
        <path fill="currentColor" d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"/>
      </svg>`;

    Object.assign(btn.style, {
      width: '4rem',
      height: '4rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #0ea5e9, #3b82f6, #1d4ed8)',
      color: 'white',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'visible',
    });

    // Badge thông báo - ĐẶT Ở GÓC TRÊN PHẢI CỦA NÚT
    const badge = document.createElement('span');
    badge.textContent = '1';
    badge.style.cssText = `
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      min-width: 1.75rem;
      height: 1.75rem;
      padding: 0 0.375rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2.5px solid white;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.5);
      opacity: 0;
      transform: scale(0.8);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.2);
      z-index: 10;
      pointer-events: none;
    `;
    btn.appendChild(badge);

    // Icon cuộc gọi - ĐẶT Ở GÓC TRÊN TRÁI CỦA NÚT
    const phone = document.createElement('span');
    phone.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    `;
    phone.style.cssText = `
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2.5px solid white;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.5);
      opacity: 0;
      transform: scale(0.8);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.2);
      z-index: 10;
      pointer-events: none;
    `;
    btn.appendChild(phone);

    // Thêm animation pulse cho phone khi có cuộc gọi
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-call {
        0%, 100% {
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.5), 0 0 0 0 rgba(16, 185, 129, 0.7);
        }
        50% {
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.5), 0 0 0 8px rgba(16, 185, 129, 0);
        }
      }
      .phone-active {
        animation: pulse-call 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite !important;
      }
    `;
    document.head.appendChild(style);

    // Hiệu ứng hover cho nút
    btn.onmouseenter = () => {
      btn.style.transform = 'scale(1.12) translateY(-4px)';
      btn.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.6)';
    };
    btn.onmouseleave = () => {
      btn.style.transform = 'scale(1) translateY(0)';
      btn.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.5)';
    };

    btnWrap.appendChild(btn);
    container.appendChild(iframeWrap);
    container.appendChild(btnWrap);

    const margin = 12;
    let isOpen = false;
    const clamp = (x, min, max) => Math.min(Math.max(x, min), max);
    const getWidgetWidth = () => FIXED_WIDTH;
    const getWidgetHeight = () => FIXED_HEIGHT;
    const updateAlign = () => {
      const left = parseFloat(container.style.left || '0');
      const rightSpace = window.innerWidth - left;
      container.style.alignItems = rightSpace < left ? 'flex-end' : 'flex-start';
    };
    const ensureInside = (opened) => {
      if (!DRAG_ENABLED) return;
      const btnRect = btn.getBoundingClientRect();
      const contentWidth = opened ? getWidgetWidth() : btnRect.width;
      const maxLeft = window.innerWidth - contentWidth - margin;
      const currentLeft = parseFloat(container.style.left || '0');
      const newLeft = clamp(currentLeft, margin, maxLeft);
      container.style.left = `${newLeft}px`;
      const iframeHeight = opened ? getWidgetHeight() : 0;
      const maxTop = opened ? window.innerHeight - iframeHeight - margin : window.innerHeight - btnRect.height - margin;
      const currentTop = parseFloat(container.style.top || '0');
      const newTop = clamp(currentTop, margin, maxTop);
      container.style.top = `${newTop}px`;
      updateAlign();
    };
    if (DRAG_ENABLED) {
      (() => {
        const cs = getComputedStyle(container);
        const btnRect = btn.getBoundingClientRect();
        let initLeft = window.innerWidth - parseFloat(cs.right || '20') - btnRect.width;
        let initTop = window.innerHeight - parseFloat(cs.bottom || '70') - btnRect.height;
        try {
          const saved = JSON.parse(localStorage.getItem('HUPUNA_WIDGET_POS') || 'null');
          if (saved && typeof saved.left === 'number' && typeof saved.top === 'number') {
            initLeft = saved.left;
            initTop = saved.top;
          }
        } catch {}
        initLeft = clamp(initLeft, margin, window.innerWidth - btnRect.width - margin);
        initTop = clamp(initTop, margin, window.innerHeight - btnRect.height - margin);
        container.style.left = `${initLeft}px`;
        container.style.top = `${initTop}px`;
        container.style.bottom = '';
        container.style.right = '';
        updateAlign();
      })();
    }

    let dragging = false;
    let moved = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let origLeft = 0;
    let origTop = 0;
    if (DRAG_ENABLED) {
      btn.addEventListener('pointerdown', (e) => {
        dragging = true;
        moved = false;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        origLeft = parseFloat(container.style.left || '0');
        origTop = parseFloat(container.style.top || '0');
        try {
          btn.setPointerCapture(e.pointerId);
        } catch {}
        container.style.transition = 'none';
        btn.style.transition = 'none';
      });
      window.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
        const btnRect = btn.getBoundingClientRect();
        const maxLeft = window.innerWidth - btnRect.width - margin;
        const maxTop = window.innerHeight - btnRect.height - margin;
        const newLeft = clamp(origLeft + dx, margin, maxLeft);
        const newTop = clamp(origTop + dy, margin, maxTop);
        container.style.left = `${newLeft}px`;
        container.style.top = `${newTop}px`;
        updateAlign();
      });
      window.addEventListener('pointerup', (e) => {
        if (!dragging) return;
        dragging = false;
        try {
          btn.releasePointerCapture(e.pointerId);
        } catch {}
        container.style.transition = '';
        btn.style.transition = '';
        const btnRect = btn.getBoundingClientRect();
        const w = btnRect.width;
        const h = btnRect.height;
        const leftPos = parseFloat(container.style.left || '0');
        const topPos = parseFloat(container.style.top || '0');
        const L = margin;
        const R = window.innerWidth - w - margin;
        const T = margin;
        const B = window.innerHeight - h - margin;
        const corners = [
          { left: L, top: T },
          { left: R, top: T },
          { left: L, top: B },
          { left: R, top: B },
        ];
        let best = corners[0];
        let bestDist = Infinity;
        for (const c of corners) {
          const dx = leftPos - c.left;
          const dy = topPos - c.top;
          const d = dx * dx + dy * dy;
          if (d < bestDist) {
            bestDist = d;
            best = c;
          }
        }
        container.style.left = `${best.left}px`;
        container.style.top = `${best.top}px`;
        updateAlign();
        try {
          localStorage.setItem('HUPUNA_WIDGET_POS', JSON.stringify({ left: best.left, top: best.top }));
        } catch {}
      });
    }
    btn.addEventListener('click', (e) => {
      if (moved) {
        e.preventDefault();
        return;
      }
      open();
    });
    if (DRAG_ENABLED) window.addEventListener('resize', () => ensureInside(isOpen));

    // Hàm mở/đóng mượt mà
    const open = () => {
      isOpen = true;
      if (DRAG_ENABLED) {
        try {
          const savedOpen = JSON.parse(localStorage.getItem('HUPUNA_WIDGET_POS_OPEN') || 'null');
          if (savedOpen && typeof savedOpen.left === 'number' && typeof savedOpen.top === 'number') {
            const maxLeft = window.innerWidth - getWidgetWidth() - margin;
            const maxTop = window.innerHeight - getWidgetHeight() - margin;
            container.style.left = `${clamp(savedOpen.left, margin, maxLeft)}px`;
            container.style.top = `${clamp(savedOpen.top, margin, maxTop)}px`;
            updateAlign();
          }
        } catch {}
        ensureInside(true);
      }
      iframeWrap.style.display = 'block';
      setTimeout(() => {
        iframeWrap.style.transform = 'translateY(0)';
        iframeWrap.style.opacity = '1';
      }, 10);
      btnWrap.style.opacity = '0';
      btnWrap.style.transform = 'translateY(20px)';
      setTimeout(() => (btnWrap.style.display = 'none'), 400);
    };

    const close = () => {
      isOpen = false;
      movedOpen = false;
      iframeWrap.style.transform = 'translateY(20px)';
      iframeWrap.style.opacity = '0';
      setTimeout(() => (iframeWrap.style.display = 'none'), 400);
      if (DRAG_ENABLED) {
        const btnRect2 = btn.getBoundingClientRect();
        const w2 = btnRect2.width;
        const h2 = btnRect2.height;
        const leftPos2 = parseFloat(container.style.left || '0');
        const topPos2 = parseFloat(container.style.top || '0');
        const L2 = margin;
        const R2 = window.innerWidth - w2 - margin;
        const T2 = margin;
        const B2 = window.innerHeight - h2 - margin;
        const corners2 = [
          { left: L2, top: T2 },
          { left: R2, top: T2 },
          { left: L2, top: B2 },
          { left: R2, top: B2 },
        ];
        let best2 = corners2[0];
        let bestDist2 = Infinity;
        for (const c of corners2) {
          const dx2 = leftPos2 - c.left;
          const dy2 = topPos2 - c.top;
          const d2 = dx2 * dx2 + dy2 * dy2;
          if (d2 < bestDist2) {
            bestDist2 = d2;
            best2 = c;
          }
        }
        container.style.left = `${best2.left}px`;
        container.style.top = `${best2.top}px`;
        updateAlign();
        try {
          localStorage.setItem('HUPUNA_WIDGET_POS', JSON.stringify({ left: best2.left, top: best2.top }));
        } catch {}
      }
      btnWrap.style.display = 'block';
      setTimeout(() => {
        btnWrap.style.opacity = '1';
        btnWrap.style.transform = 'translateY(0)';
      }, 10);
    };

    const toggle = () => {
      if (iframeWrap.style.display === 'block') close();
      else open();
    };

    // Nhận message từ iframe
    window.addEventListener('message', (e) => {
      try {
        const allowedOrigin = new URL(iframeSrc).origin;
        if (e.origin !== allowedOrigin) return;
      } catch {}

      const data = e.data;
      if (data === 'HUPUNA_WIDGET_CLOSE' || (data && data.type === 'HUPUNA_WIDGET_CLOSE')) {
        close();
      }
      if (data && data.type === 'HUPUNA_WIDGET_OPEN') open();
      if (data && data.type === 'HUPUNA_WIDGET_TOGGLE') toggle();
      if (data && data.type === 'HUPUNA_WIDGET_NOTIFY_COUNT') {
        const count = Number(data.count || 0);
        if (count > 0) {
          badge.textContent = count > 99 ? '99+' : String(count);
          badge.style.opacity = '1';
          badge.style.transform = 'scale(1)';
        } else {
          badge.style.opacity = '0';
          badge.style.transform = 'scale(0.8)';
        }
      }
      if (data && data.type === 'HUPUNA_WIDGET_CALL') {
        const active = !!data.active;
        if (active) {
          phone.style.opacity = '1';
          phone.style.transform = 'scale(1)';
          phone.classList.add('phone-active');
        } else {
          phone.style.opacity = '0';
          phone.style.transform = 'scale(0.8)';
          phone.classList.remove('phone-active');
        }
      }
    });

    let draggingOpen = false;
    let movedOpen = false;
    let openStartX = 0;
    let openStartY = 0;
    let openOrigLeft = 0;
    let openOrigTop = 0;
    if (DRAG_ENABLED && dragHandle) {
      dragHandle.addEventListener('pointerdown', (e) => {
        draggingOpen = true;
        movedOpen = false;
        openStartX = e.clientX;
        openStartY = e.clientY;
        openOrigLeft = parseFloat(container.style.left || '0');
        openOrigTop = parseFloat(container.style.top || '0');
        try {
          dragHandle.setPointerCapture(e.pointerId);
        } catch {}
        container.style.transition = 'none';
        iframeWrap.style.transition = 'none';
      });
      window.addEventListener('pointermove', (e) => {
        if (!draggingOpen) return;
        const dx = e.clientX - openStartX;
        const dy = e.clientY - openStartY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) movedOpen = true;
        const maxLeft = window.innerWidth - getWidgetWidth() - margin;
        const maxTop = window.innerHeight - getWidgetHeight() - margin;
        const newLeft = clamp(openOrigLeft + dx, margin, maxLeft);
        const newTop = clamp(openOrigTop + dy, margin, maxTop);
        container.style.left = `${newLeft}px`;
        container.style.top = `${newTop}px`;
        updateAlign();
      });
      window.addEventListener('pointerup', (e) => {
        if (!draggingOpen) return;
        draggingOpen = false;
        try {
          dragHandle.releasePointerCapture(e.pointerId);
        } catch {}
        container.style.transition = '';
        iframeWrap.style.transition = '';
        try {
          localStorage.setItem(
            'HUPUNA_WIDGET_POS_OPEN',
            JSON.stringify({
              left: parseFloat(container.style.left || '0'),
              top: parseFloat(container.style.top || '0'),
            }),
          );
        } catch {}
      });
    }

    // Public API
    window.HupunaChatWidget = {
      open,
      close,
      toggle,
      iframe,
      button: btn,
      container,
      showNotification: (count = 1) => {
        badge.textContent = count > 99 ? '99+' : count;
        badge.style.opacity = '1';
        badge.style.transform = 'scale(1)';
      },
      hideNotification: () => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
      },
      showCall: () => {
        phone.style.opacity = '1';
        phone.style.transform = 'scale(1)';
        phone.classList.add('phone-active');
      },
      hideCall: () => {
        phone.style.opacity = '0';
        phone.style.transform = 'scale(0.8)';
        phone.classList.remove('phone-active');
      },
    };
  };

  // Chạy khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
