'use client';

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Cropper, CropperRef } from 'react-advanced-cropper';
import { HiX, HiCheck } from 'react-icons/hi';
import { FaCropSimple, FaPen, FaFaceSmile } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';
import { getProxyUrl } from '@/utils/utils';

interface MediaEditorProps {
  mediaUrl: string;
  mediaType?: 'image' | 'video';
  chatName?: string;
  onClose: () => void;
  onSend?: (data: {
    description: string;
    isHD: boolean;
    selected: boolean;
    videoCropConfig?: {
      crop: { x: number; y: number };
      zoom: number;
      rotation: number;
      croppedAreaPixels: { x: number; y: number; width: number; height: number } | null;
    } | null;
  }) => void;
}

export default function MediaEditor({ mediaUrl, mediaType = 'image', chatName, onClose, onSend }: MediaEditorProps) {
  const [description, setDescription] = useState('');
  const [isHD, setIsHD] = useState(false);
  const [selected, setSelected] = useState(false);

  // Crop state
  const [currentMedia, setCurrentMedia] = useState(mediaUrl);
  // For video, we store crop config instead of blob
  const [videoCropConfig, setVideoCropConfig] = useState<{
    crop: { x: number; y: number };
    zoom: number;
    rotation: number;
    croppedAreaPixels: { x: number; y: number; width: number; height: number } | null;
  } | null>(null);

  const [isCropping, setIsCropping] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#ff3b30');
  const [brushSize, setBrushSize] = useState(6);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [strokes, setStrokes] = useState<{ color: string; size: number; points: { x: number; y: number }[] }[]>([]);
  const [constrainToMedia, setConstrainToMedia] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cropperRef = useRef<CropperRef>(null);
  const [videoMeta, setVideoMeta] = useState<{ width: number; height: number } | null>(null);
  const [displayRect, setDisplayRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [isTexting, setIsTexting] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [textSize, setTextSize] = useState(20);
  const [textEntries, setTextEntries] = useState<
    { id: string; text: string; x: number; y: number; color: string; size: number }[]
  >([]);
  const [draggingTextId, setDraggingTextId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const croppedVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    updateSize(); // Initial check

    return () => observer.disconnect();
  }, []);

  const generateVideoPoster = useCallback(async (): Promise<string | null> => {
    // Helper to capture from a video element
    const capture = (video: HTMLVideoElement): string | null => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/jpeg', 0.92);
      } catch (e) {
        console.warn('Failed to capture video frame (likely CORS):', e);
        return null;
      }
    };

    // Try using the existing video ref first
    if (videoRef.current && videoRef.current.videoWidth && videoRef.current.videoHeight) {
      const result = capture(videoRef.current);
      if (result) return result;
    }

    // Fallback: create a new video element with crossOrigin
    try {
      const v = document.createElement('video');
      v.crossOrigin = 'anonymous'; // Important for CORS
      v.muted = true;
      v.playsInline = true;

      await new Promise<void>((resolve, reject) => {
        v.addEventListener('loadeddata', () => resolve(), { once: true });
        v.addEventListener('error', reject, { once: true });
        v.src = getProxyUrl(currentMedia);
        v.load();
      });

      // Ensure we have a frame (sometimes loadeddata is enough, but seek might be safer if black)
      if (v.currentTime === 0) {
        v.currentTime = 0.1;
        await new Promise((r) => v.addEventListener('seeked', r, { once: true }));
      }

      return capture(v);
    } catch (e) {
      console.error('Failed to generate video poster fallback:', e);
      return null;
    }
  }, [currentMedia]);

  const ensureCanvasSize = useCallback(() => {
    const c = canvasRef.current;
    const container = containerRef.current;
    if (!c || !container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (c.width !== w) c.width = w;
    if (c.height !== h) c.height = h;
  }, []);

  const computeRect = useCallback((containerW: number, containerH: number, mediaW: number, mediaH: number) => {
    const imgAspect = mediaW / mediaH;
    const containerAspect = containerW / containerH;
    if (imgAspect > containerAspect) {
      const dw = containerW;
      const dh = containerW / imgAspect;
      const dy = (containerH - dh) / 2;
      const rdw = Math.round(dw);
      const rdh = Math.round(dh);
      const rdy = Math.round(dy);
      setDisplayRect({ x: 0, y: rdy, width: rdw, height: rdh });
    } else {
      const dh = containerH;
      const dw = containerH * imgAspect;
      const dx = (containerW - dw) / 2;
      const rdh = Math.round(dh);
      const rdw = Math.round(dw);
      const rdx = Math.round(dx);
      setDisplayRect({ x: rdx, y: 0, width: rdw, height: rdh });
    }
  }, []);

  useEffect(() => {
    if (!isCropping) return;
    const ref = cropperRef.current;
    if (!ref) return;
    const state = ref.getState();
    if (!state) return;
    ref.setState({
      ...state,
      transforms: {
        ...(state.transforms || {}),
        rotate: rotation,
      },
    });
  }, [zoom, rotation, isCropping]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (mediaType === 'image') {
      const im = new window.Image();
      im.onload = () =>
        computeRect(
          container.clientWidth,
          container.clientHeight,
          im.naturalWidth || im.width,
          im.naturalHeight || im.height,
        );
      im.src = getProxyUrl(currentMedia);
    }
  }, [computeRect, currentMedia, mediaType]);

  useEffect(() => {
    const container = containerRef.current;
    const v = videoRef.current;
    if (!container || !v || mediaType !== 'video') return;
    if (v.videoWidth && v.videoHeight) {
      computeRect(container.clientWidth, container.clientHeight, v.videoWidth, v.videoHeight);
    }
  }, [computeRect, mediaType]);

  useEffect(() => {
    if (mediaType !== 'video') return;
    if (!videoCropConfig || !videoCropConfig.croppedAreaPixels) return;
    const { width: cw, height: ch } = containerSize;
    if (cw <= 0 || ch <= 0) return;
    const { width: kw, height: kh } = videoCropConfig.croppedAreaPixels;
    const rotate = videoCropConfig.rotation || 0;
    if (rotate === 0) {
      const scale = Math.min(cw / kw, ch / kh);
      const dw = Math.round(kw * scale);
      const dh = Math.round(kh * scale);
      const dx = Math.round((cw - dw) / 2);
      const dy = Math.round((ch - dh) / 2);
      setDisplayRect({ x: dx, y: dy, width: dw, height: dh });
    } else {
      setDisplayRect({ x: 0, y: 0, width: cw, height: ch });
    }
  }, [mediaType, videoCropConfig, containerSize]);

  const drawStrokeSegment = useCallback(
    (ctx: CanvasRenderingContext2D, stroke: { color: string; size: number; points: { x: number; y: number }[] }) => {
      if (stroke.points.length < 2) {
        const p = stroke.points[0];
        if (!p) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, stroke.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = stroke.color;
        ctx.fill();
        return;
      }
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.beginPath();
      const [p0, ...rest] = stroke.points;
      ctx.moveTo(p0.x, p0.y);
      for (const p of rest) ctx.lineTo(p.x, p.y);
      ctx.stroke();
    },
    [],
  );

  const redrawOverlay = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    if (displayRect && constrainToMedia) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(displayRect.x, displayRect.y, displayRect.width, displayRect.height);
      ctx.clip();
    }
    for (const s of strokes) drawStrokeSegment(ctx, s);
    if (displayRect && constrainToMedia) {
      ctx.restore();
    }
  }, [strokes, drawStrokeSegment, displayRect, constrainToMedia]);

  const [videoPoster, setVideoPoster] = useState<string | null>(null);

  useEffect(() => {
    ensureCanvasSize();
    redrawOverlay();
  }, [ensureCanvasSize, redrawOverlay, isDrawing]);

  useEffect(() => {
    const handler = () => {
      ensureCanvasSize();
      redrawOverlay();
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [ensureCanvasSize, redrawOverlay]);

  const pointerPos = (e: React.MouseEvent | React.TouchEvent) => {
    const c = canvasRef.current;
    if (!c) return { x: 0, y: 0 };
    const rect = c.getBoundingClientRect();
    if ('touches' in e && e.touches.length) {
      const t = e.touches[0];
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    }
    const me = e as React.MouseEvent;
    return { x: me.clientX - rect.left, y: me.clientY - rect.top };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    ensureCanvasSize();
    setIsPointerDown(true);
    const p = pointerPos(e);
    if (displayRect && constrainToMedia) {
      const outsideX = p.x < displayRect.x || p.x > displayRect.x + displayRect.width;
      const outsideY = p.y < displayRect.y || p.y > displayRect.y + displayRect.height;
      if (outsideX || outsideY) {
        return;
      }
    }
    let cp = p;
    if (displayRect && constrainToMedia) {
      const cx = Math.min(Math.max(p.x, displayRect.x), displayRect.x + displayRect.width);
      const cy = Math.min(Math.max(p.y, displayRect.y), displayRect.y + displayRect.height);
      cp = { x: cx, y: cy };
    }
    setStrokes((prev) => [...prev, { color: brushColor, size: brushSize, points: [cp] }]);
  };

  const moveDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !isPointerDown) return;
    const p = pointerPos(e);
    let cp = p;
    if (displayRect && constrainToMedia) {
      const cx = Math.min(Math.max(p.x, displayRect.x), displayRect.x + displayRect.width);
      const cy = Math.min(Math.max(p.y, displayRect.y), displayRect.y + displayRect.height);
      cp = { x: cx, y: cy };
    }
    setStrokes((prev) => {
      if (!prev.length) return prev;
      const last = prev[prev.length - 1];
      const updated = { ...last, points: [...last.points, cp] };
      const next = [...prev.slice(0, -1), updated];
      return next;
    });
    redrawOverlay();
  };

  const endDraw = () => {
    if (!isDrawing) return;
    setIsPointerDown(false);
  };
  const handleSaveCrop = async () => {
    try {
      if (!cropperRef.current) return;

      if (mediaType === 'image') {
        const canvas = cropperRef.current.getCanvas();
        if (canvas) {
          const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg'));
          if (blob) {
            const url = URL.createObjectURL(blob);
            setCurrentMedia(url);
            setIsCropping(false);
            // Reset crop state for next time
            setRotation(0);
            setZoom(1);
          }
        }
      } else {
        // Video
        const state = cropperRef.current.getState();
        const coordinates = cropperRef.current.getCoordinates();
        if (state && coordinates) {
          setVideoCropConfig({
            crop: { x: coordinates.left, y: coordinates.top },
            zoom: 1,
            rotation: state.transforms.rotate || 0,
            croppedAreaPixels: {
              x: coordinates.left,
              y: coordinates.top,
              width: coordinates.width,
              height: coordinates.height,
            },
          });
          setIsCropping(false);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const applyDrawing = async () => {
    try {
      const container = containerRef.current;
      const c = canvasRef.current;
      if (!container || !c || strokes.length === 0) {
        setIsDrawing(false);
        return;
      }
      if (mediaType === 'video') {
        setIsDrawing(false);
        return;
      }
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const im = new window.Image();
        im.crossOrigin = 'anonymous';
        im.onload = () => resolve(im);
        im.onerror = reject;
        im.src = getProxyUrl(currentMedia);
      });
      const w = container.clientWidth;
      const h = container.clientHeight;
      const out = document.createElement('canvas');
      out.width = w;
      out.height = h;
      const ctx = out.getContext('2d')!;
      const imgAspect = img.width / img.height;
      const containerAspect = w / h;
      if (imgAspect > containerAspect) {
        const dw = w;
        const dh = w / imgAspect;
        const dy = (h - dh) / 2;
        ctx.drawImage(img, 0, dy, dw, dh);
      } else {
        const dh = h;
        const dw = h * imgAspect;
        const dx = (w - dw) / 2;
        ctx.drawImage(img, dx, 0, dw, dh);
      }
      const overlay = c.getContext('2d')!;
      const copy = overlay.getImageData(0, 0, c.width, c.height);
      const tmp = document.createElement('canvas');
      tmp.width = c.width;
      tmp.height = c.height;
      const tctx = tmp.getContext('2d')!;
      tctx.putImageData(copy, 0, 0);
      ctx.drawImage(tmp, 0, 0, w, h);
      const dataUrl = out.toDataURL('image/jpeg', 0.92);
      setCurrentMedia(dataUrl);
      setIsDrawing(false);
      setStrokes([]);
      const ctxOverlay = c.getContext('2d');
      if (ctxOverlay) ctxOverlay.clearRect(0, 0, c.width, c.height);
    } catch (e) {
      setIsDrawing(false);
    }
  };

  const handleRestore = () => {
    setCurrentMedia(mediaUrl);
    setVideoCropConfig(null);
    setRotation(0);
    setZoom(1);
    setIsDrawing(false);
    setStrokes([]);
    setIsTexting(false);
    setTextEntries([]);
    setTextInput('');
  };

  return (
    <div className="fixed inset-0 z-[10001] bg-black flex flex-col">
      {/* Top Bar */}
      <div className="px-4 py-4 flex items-center justify-between text-white bg-black border-b border-white/10">
        {isCropping ? (
          <div className="flex items-center justify-between w-full pointer-events-auto">
            <button onClick={() => setIsCropping(false)} className="p-2 -ml-2">
              <HiX className="w-8 h-8" />
            </button>
            <div className="text-lg font-semibold">Cắt ảnh</div>
            <button onClick={handleSaveCrop} className="p-2 -mr-2 text-blue-400">
              <HiCheck className="w-8 h-8" />
            </button>
          </div>
        ) : isDrawing ? (
          <div className="flex items-center justify-between w-full pointer-events-auto">
            <button
              onClick={() => {
                setIsDrawing(false);
                setStrokes([]);
                const c = canvasRef.current;
                const ctx = c?.getContext('2d');
                if (c && ctx) ctx.clearRect(0, 0, c.width, c.height);
              }}
              className="p-2 -ml-2"
            >
              <HiX className="w-8 h-8" />
            </button>
            <div className="text-lg font-semibold">Vẽ</div>
            <button onClick={applyDrawing} className="p-2 -mr-2 text-blue-400">
              <HiCheck className="w-8 h-8" />
            </button>
          </div>
        ) : isTexting ? (
          <div className="flex items-center justify-between w-full pointer-events-auto">
            <button
              onClick={() => {
                setIsTexting(false);
                setTextInput('');
              }}
              className="p-2 -ml-2"
            >
              <HiX className="w-8 h-8" />
            </button>
            <div className="text-lg font-semibold">Văn bản</div>
            <button
              onClick={() => {
                const container = containerRef.current;
                if (!container || !textInput.trim() || !displayRect) {
                  setIsTexting(false);
                  setTextInput('');
                  return;
                }
                const id = Math.random().toString(36).slice(2);
                setTextEntries((prev) => [
                  ...prev,
                  {
                    id,
                    text: textInput.trim(),
                    x: Math.round(displayRect.x + displayRect.width / 2),
                    y: Math.round(displayRect.y + displayRect.height / 2),
                    color: textColor,
                    size: textSize,
                  },
                ]);
                setIsTexting(false);
                setTextInput('');
              }}
              className="p-2 -mr-2 text-blue-400"
            >
              <HiCheck className="w-8 h-8" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full pointer-events-auto">
            <button onClick={onClose} className="p-2 -ml-2">
              <HiX className="w-8 h-8" />
            </button>
            <div className="flex items-center gap-6">
              {currentMedia !== mediaUrl || videoCropConfig ? (
                <button
                  onClick={handleRestore}
                  className="px-3 py-1 rounded-full bg-white/10 text-xs hover:bg-white/20"
                >
                  Khôi phục
                </button>
              ) : null}
              <button
                className="p-2"
                onClick={async () => {
                  if (mediaType === 'video') {
                    const poster = await generateVideoPoster();
                    if (poster) setVideoPoster(poster);
                  }
                  setIsCropping(true);
                }}
              >
                <FaCropSimple className="w-6 h-6" />
              </button>
              <button className="p-2" onClick={() => setIsDrawing(true)}>
                <FaPen className="w-6 h-6" />
              </button>
              <button className="p-2 font-serif text-xl font-bold" onClick={() => setIsTexting(true)}>
                Aa
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Image Area */}
      <div
        className="flex-1 flex items-center justify-center bg-black overflow-hidden relative w-full h-full"
        ref={containerRef}
      >
        {isCropping ? (
          <div className="relative w-full h-full">
            <Cropper
              ref={cropperRef}
              src={mediaType === 'video' ? videoPoster || '' : getProxyUrl(currentMedia)}
              className="w-full h-full object-contain"
              stencilProps={{
                aspectRatio: undefined,
              }}
            />
            {/* Crop Controls Overlay */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col gap-4 px-8 pb-4">
              <div className="flex items-center gap-4">
                <span className="text-xs text-white w-12">Zoom</span>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white w-12">Xoay</span>
                <input
                  type="range"
                  value={rotation}
                  min={0}
                  max={360}
                  step={1}
                  aria-labelledby="Rotation"
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            {mediaType === 'image' ? (
              <Image src={getProxyUrl(currentMedia)} alt="Editing" fill className="object-contain" priority />
            ) : null}
            {textEntries.map((t) => (
              <div
                key={t.id}
                style={{
                  position: 'absolute',
                  left: t.x,
                  top: t.y,
                  transform: 'translate(-50%, -50%)',
                  color: t.color,
                  fontSize: `${t.size}px`,
                  fontWeight: 700,
                  cursor: 'grab',
                  userSelect: 'none',
                }}
                onMouseDown={(e) => {
                  setDraggingTextId(t.id);
                  setDragOffset({ x: e.clientX - t.x, y: e.clientY - t.y });
                  setSelectedTextId(t.id);
                }}
                onMouseMove={(e) => {
                  if (draggingTextId !== t.id) return;
                  const nx = e.clientX - dragOffset.x;
                  const ny = e.clientY - dragOffset.y;
                  const cx = displayRect
                    ? Math.min(Math.max(nx, displayRect.x), displayRect.x + displayRect.width)
                    : nx;
                  const cy = displayRect
                    ? Math.min(Math.max(ny, displayRect.y), displayRect.y + displayRect.height)
                    : ny;
                  setTextEntries((prev) => prev.map((it) => (it.id === t.id ? { ...it, x: cx, y: cy } : it)));
                }}
                onMouseUp={() => {
                  if (draggingTextId === t.id) setDraggingTextId(null);
                }}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  setDraggingTextId(t.id);
                  setDragOffset({ x: touch.clientX - t.x, y: touch.clientY - t.y });
                  setSelectedTextId(t.id);
                }}
                onTouchMove={(e) => {
                  if (draggingTextId !== t.id) return;
                  const touch = e.touches[0];
                  const nx = touch.clientX - dragOffset.x;
                  const ny = touch.clientY - dragOffset.y;
                  const cx = displayRect
                    ? Math.min(Math.max(nx, displayRect.x), displayRect.x + displayRect.width)
                    : nx;
                  const cy = displayRect
                    ? Math.min(Math.max(ny, displayRect.y), displayRect.y + displayRect.height)
                    : ny;
                  setTextEntries((prev) => prev.map((it) => (it.id === t.id ? { ...it, x: cx, y: cy } : it)));
                }}
                onTouchEnd={() => {
                  if (draggingTextId === t.id) setDraggingTextId(null);
                }}
              >
                <span className="relative inline-block">
                  {t.text}
                  {selectedTextId === t.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setTextEntries((prev) => prev.filter((it) => it.id !== t.id));
                        setSelectedTextId(null);
                      }}
                      className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow"
                      title="Xóa"
                    >
                      <HiX className="w-4 h-4" />
                    </button>
                  )}
                </span>
              </div>
            ))}

            {mediaType === 'video' && videoCropConfig && videoCropConfig.croppedAreaPixels && (
              <div className="absolute inset-0 flex items-center justify-center">
                {(() => {
                  const { x, y, width: kw, height: kh } = videoCropConfig.croppedAreaPixels!;
                  const { width: cw, height: ch } = containerSize;
                  const rotate = videoCropConfig.rotation || 0;

                  // If not rotated, we can play the video cropped
                  if (rotate === 0 && videoMeta && cw > 0 && ch > 0) {
                    const scale = Math.min(cw / kw, ch / kh);
                    const dw = kw * scale;
                    const dh = kh * scale;
                    const vw = videoMeta.width * scale;
                    const vh = videoMeta.height * scale;

                    return (
                      <div
                        style={{
                          width: dw,
                          height: dh,
                          overflow: 'hidden',
                          position: 'relative',
                        }}
                      >
                        <video
                          src={getProxyUrl(currentMedia)}
                          autoPlay={!isMuted}
                          loop
                          muted={isMuted}
                          playsInline
                          webkit-playsinline="true"
                          onLoadedMetadata={(e) => {
                            const v = e.currentTarget;
                            if (!videoMeta || videoMeta.width !== v.videoWidth || videoMeta.height !== v.videoHeight) {
                              setVideoMeta({ width: v.videoWidth, height: v.videoHeight });
                            }
                          }}
                          ref={croppedVideoRef}
                          style={{
                            position: 'absolute',
                            left: -x * scale,
                            top: -y * scale,
                            width: vw,
                            height: vh,
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }}
                        />
                        <button
                          onClick={() => {
                            const v = croppedVideoRef.current;
                            setIsMuted((prev) => {
                              const next = !prev;
                              if (v) {
                                v.muted = next;
                                if (!next) v.play().catch(() => {});
                              }
                              return next;
                            });
                          }}
                          className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs border border-white/20"
                          title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                        >
                          {isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                        </button>
                      </div>
                    );
                  }

                  // Fallback to static poster for rotated video or missing meta
                  return (
                    <Cropper
                      src={videoPoster || getProxyUrl(currentMedia)}
                      defaultCoordinates={{
                        left: videoCropConfig.croppedAreaPixels!.x,
                        top: videoCropConfig.croppedAreaPixels!.y,
                        width: videoCropConfig.croppedAreaPixels!.width,
                        height: videoCropConfig.croppedAreaPixels!.height,
                      }}
                      stencilProps={{
                        movable: false,
                        resizable: false,
                      }}
                      className="w-full h-full object-contain pointer-events-none"
                      backgroundClassName="bg-black/95"
                    />
                  );
                })()}
              </div>
            )}
            {mediaType === 'video' && !videoCropConfig && (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  src={getProxyUrl(currentMedia)}
                  crossOrigin="anonymous"
                  autoPlay
                  loop
                  muted={false}
                  controls={false}
                  ref={videoRef}
                  onLoadedMetadata={() => {
                    const container = containerRef.current;
                    const v = videoRef.current;
                    if (!container || !v) return;
                    setVideoMeta({ width: v.videoWidth, height: v.videoHeight });
                    computeRect(container.clientWidth, container.clientHeight, v.videoWidth, v.videoHeight);
                    generateVideoPoster().then((p) => {
                      if (p) setVideoPoster(p);
                    });
                  }}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <canvas
              ref={canvasRef}
              className="absolute inset-0"
              style={{ pointerEvents: isDrawing ? 'auto' : 'none' }}
              onMouseDown={startDraw}
              onMouseMove={moveDraw}
              onMouseUp={endDraw}
              onMouseLeave={endDraw}
              onTouchStart={startDraw}
              onTouchMove={moveDraw}
              onTouchEnd={endDraw}
            />
          </div>
        )}
      </div>

      {/* Bottom Bar - Hide when cropping */}
      {!isCropping && !isDrawing && !isTexting && (
        <div className="px-4 py-4 pb-8 flex flex-col gap-4 border-t border-white/10 bg-black">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center px-4 py-2 border border-white/10">
              <input
                type="text"
                placeholder={`Nhập mô tả gửi ${chatName || '...'}`}
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsHD(!isHD)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                isHD ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              HD
              <span className="text-[10px] leading-none">▼</span>
            </button>

            <div className="flex items-center gap-4">
              <button onClick={() => setSelected(!selected)} className="flex items-center gap-2 text-white text-sm">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected ? 'bg-blue-500 border-blue-500' : 'border-white/60'
                  }`}
                >
                  {selected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
                <span>Chọn</span>
              </button>

              <button
                onClick={() => onSend?.({ description, isHD, selected, videoCropConfig })}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <IoSend className="w-5 h-5 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}
      {isTexting && (
        <div className="px-4 py-4 pb-8 flex flex-col gap-4 border-t border-white/10 bg-black">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center px-4 py-2 border border-white/10">
              <input
                type="text"
                placeholder="Nhập văn bản"
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            {[
              '#ffffff',
              '#000000',
              '#ff3b30',
              '#ff9500',
              '#ffcc00',
              '#34c759',
              '#5ac8fa',
              '#007aff',
              '#5856d6',
              '#af52de',
            ].map((c) => (
              <button
                key={c}
                onClick={() => setTextColor(c)}
                className={`w-8 h-8 rounded-full border ${textColor === c ? 'ring-2 ring-white' : 'border-white/30'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 px-8">
            <span className="text-xs text-white">Kích thước</span>
            <input
              type="range"
              min={12}
              max={48}
              step={1}
              value={textSize}
              onChange={(e) => setTextSize(Number(e.target.value))}
              className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm"
            />
          </div>
        </div>
      )}
      {isDrawing && (
        <div className="px-4 py-4 pb-8 flex flex-col gap-4 border-t border-white/10 bg-black">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setConstrainToMedia((v) => !v)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                constrainToMedia ? 'bg-white text-black' : 'bg-white/10 text-white'
              }`}
            >
              {constrainToMedia ? 'Chỉ vẽ trong ảnh/video' : 'Vẽ toàn khung'}
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            {[
              '#ff3b30',
              '#ff9500',
              '#ffcc00',
              '#34c759',
              '#30d158',
              '#5ac8fa',
              '#007aff',
              '#5856d6',
              '#af52de',
              '#ffffff',
              '#000000',
            ].map((c) => (
              <button
                key={c}
                onClick={() => setBrushColor(c)}
                className={`w-8 h-8 rounded-full border ${brushColor === c ? 'ring-2 ring-white' : 'border-white/30'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 px-8">
            <span className="text-xs text-white">Độ đậm</span>
            <input
              type="range"
              min={2}
              max={24}
              step={1}
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
