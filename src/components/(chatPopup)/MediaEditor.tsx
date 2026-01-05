'use client';

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Cropper from 'react-easy-crop';
import { HiX, HiCheck } from 'react-icons/hi';
import { FaCropSimple, FaPen, FaFaceSmile } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';
import { getProxyUrl } from '@/utils/utils';
import getCroppedImg from '@/utils/canvasUtils';

interface MediaEditorProps {
  mediaUrl: string;
  mediaType?: 'image' | 'video';
  chatName?: string;
  onClose: () => void;
  onSend?: (data: { description: string; isHD: boolean; selected: boolean }) => void;
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
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const [rotation, setRotation] = useState(0);
  const [cropSize, setCropSize] = useState<{ width: number; height: number } | undefined>(undefined);
  const [resizing, setResizing] = useState<{
    edge: 'left' | 'right' | 'top' | 'bottom' | null;
    startX: number;
    startY: number;
    startSize: { width: number; height: number };
    startRect: { x: number; y: number; width: number; height: number };
    startCrop: { x: number; y: number };
  } | null>(null);

  const onCropComplete = useCallback(
    (
      croppedArea: { x: number; y: number; width: number; height: number },
      croppedAreaPixels: { x: number; y: number; width: number; height: number },
    ) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#ff3b30');
  const [brushSize, setBrushSize] = useState(6);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [strokes, setStrokes] = useState<{ color: string; size: number; points: { x: number; y: number }[] }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [displayRect, setDisplayRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const maxCropWidth = useMemo(
    () => (displayRect?.width ?? containerRef.current?.clientWidth) || undefined,
    [displayRect],
  );
  const maxCropHeight = useMemo(
    () => (displayRect?.height ?? containerRef.current?.clientHeight) || undefined,
    [displayRect],
  );
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
    if (!resizing || !cropSize) return;
    const onMove = (ev: MouseEvent | TouchEvent) => {
      let clientX: number;
      let clientY: number;
      if (ev instanceof TouchEvent) {
        const t = ev.touches[0];
        if (!t) return;
        clientX = t.clientX;
        clientY = t.clientY;
      } else {
        clientX = ev.clientX;
        clientY = ev.clientY;
      }
      const dx = clientX - resizing.startX;
      const dy = clientY - resizing.startY;
      const minW = 60;
      const minH = 60;
      const mw = maxCropWidth ?? Number.POSITIVE_INFINITY;
      const mh = maxCropHeight ?? Number.POSITIVE_INFINITY;
      const startLeft = resizing.startRect.x;
      const startTop = resizing.startRect.y;
      const startRight = resizing.startRect.x + resizing.startRect.width;
      const startBottom = resizing.startRect.y + resizing.startRect.height;
      let newWidth = resizing.startSize.width;
      let newHeight = resizing.startSize.height;
      let newCenterX = startLeft + resizing.startSize.width / 2;
      let newCenterY = startTop + resizing.startSize.height / 2;
      if (resizing.edge === 'left') {
        const newLeft = startLeft + dx;
        newWidth = Math.min(Math.max(minW, startRight - newLeft), mw);
        newCenterX = newLeft + newWidth / 2;
      } else if (resizing.edge === 'right') {
        const newRight = startRight + dx;
        newWidth = Math.min(Math.max(minW, newRight - startLeft), mw);
        newCenterX = startLeft + newWidth / 2;
      } else if (resizing.edge === 'top') {
        const newTop = startTop + dy;
        newHeight = Math.min(Math.max(minH, startBottom - newTop), mh);
        newCenterY = newTop + newHeight / 2;
      } else if (resizing.edge === 'bottom') {
        const newBottom = startBottom + dy;
        newHeight = Math.min(Math.max(minH, newBottom - startTop), mh);
        newCenterY = startTop + newHeight / 2;
      }
      setCropSize({ width: newWidth, height: newHeight });
      const deltaX = newCenterX - (startLeft + resizing.startSize.width / 2);
      const deltaY = newCenterY - (startTop + resizing.startSize.height / 2);
      setCrop({ x: resizing.startCrop.x + deltaX, y: resizing.startCrop.y + deltaY });
    };
    const onUp = () => setResizing(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [resizing, cropSize, maxCropWidth, maxCropHeight]);

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
    if (!isCropping) return;
    if (!cropSize || croppedAreaPixels) return;
    const w = cropSize.width;
    const h = cropSize.height;
    let x = crop.x - w / 2;
    let y = crop.y - h / 2;
    if (displayRect) {
      const minX = displayRect.x;
      const minY = displayRect.y;
      const maxX = displayRect.x + displayRect.width - w;
      const maxY = displayRect.y + displayRect.height - h;
      x = Math.min(Math.max(x, minX), maxX);
      y = Math.min(Math.max(y, minY), maxY);
    } else {
      const container = containerRef.current;
      if (container) {
        const maxX = container.clientWidth - w;
        const maxY = container.clientHeight - h;
        x = Math.min(Math.max(x, 0), maxX);
        y = Math.min(Math.max(y, 0), maxY);
      }
    }
    setCroppedAreaPixels({ x: Math.round(x), y: Math.round(y), width: Math.round(w), height: Math.round(h) });
  }, [isCropping, cropSize, crop, croppedAreaPixels, displayRect]);
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
    for (const s of strokes) drawStrokeSegment(ctx, s);
  }, [strokes, drawStrokeSegment]);

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
    let cp = p;
    if (displayRect) {
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
    if (displayRect) {
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
      if (!croppedAreaPixels) return;

      if (mediaType === 'image') {
        const croppedImage = await getCroppedImg(getProxyUrl(currentMedia), croppedAreaPixels, rotation);
        if (croppedImage) {
          setCurrentMedia(croppedImage);
          setIsCropping(false);
          // Reset crop state for next time
          setRotation(0);
          setZoom(1);
          setCrop({ x: 0, y: 0 });
        }
      } else {
        // Video
        setVideoCropConfig({
          crop,
          zoom,
          rotation,
          croppedAreaPixels,
        });
        setIsCropping(false);
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
    setCrop({ x: 0, y: 0 });
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
                onClick={() => {
                  const container = containerRef.current;
                  const rect = displayRect;
                  if (rect) {
                    const w = Math.max(60, Math.round(rect.width));
                    const h = Math.max(60, Math.round(rect.height));
                    const cx = Math.round(rect.x + w / 2);
                    const cy = Math.round(rect.y + h / 2);
                    setCropSize({ width: w, height: h });
                    setCrop({ x: cx, y: cy });
                    setIsCropping(true);
                    return;
                  }
                  if (container) {
                    if (mediaType === 'image') {
                      const im = new window.Image();
                      im.onload = () => {
                        const cw = container.clientWidth;
                        const ch = container.clientHeight;
                        const ia = (im.naturalWidth || im.width) / (im.naturalHeight || im.height);
                        const ca = cw / ch;
                        let dw = cw;
                        let dh = ch;
                        let dx = 0;
                        let dy = 0;
                        if (ia > ca) {
                          dw = cw;
                          dh = cw / ia;
                          dy = (ch - dh) / 2;
                          dx = 0;
                        } else {
                          dh = ch;
                          dw = ch * ia;
                          dx = (cw - dw) / 2;
                          dy = 0;
                        }
                        const w = Math.max(60, Math.round(dw));
                        const h = Math.max(60, Math.round(dh));
                        const cx = Math.round((dx || 0) + w / 2);
                        const cy = Math.round((dy || 0) + h / 2);
                        setCropSize({ width: w, height: h });
                        setCrop({ x: cx, y: cy });
                        setIsCropping(true);
                      };
                      im.src = getProxyUrl(currentMedia);
                      return;
                    }
                    if (mediaType === 'video') {
                      const v = videoRef.current;
                      if (v && v.videoWidth && v.videoHeight) {
                        const cw = container.clientWidth;
                        const ch = container.clientHeight;
                        const ia = v.videoWidth / v.videoHeight;
                        const ca = cw / ch;
                        let dw = cw;
                        let dh = ch;
                        let dx = 0;
                        let dy = 0;
                        if (ia > ca) {
                          dw = cw;
                          dh = cw / ia;
                          dy = (ch - dh) / 2;
                          dx = 0;
                        } else {
                          dh = ch;
                          dw = ch * ia;
                          dx = (cw - dw) / 2;
                          dy = 0;
                        }
                        const w = Math.max(60, Math.round(dw));
                        const h = Math.max(60, Math.round(dh));
                        const cx = Math.round((dx || 0) + w / 2);
                        const cy = Math.round((dy || 0) + h / 2);
                        setCropSize({ width: w, height: h });
                        setCrop({ x: cx, y: cy });
                        setIsCropping(true);
                        return;
                      }
                      const w = Math.max(60, container.clientWidth);
                      const h = Math.max(60, container.clientHeight);
                      setCropSize({ width: w, height: h });
                      setCrop({ x: w / 2, y: h / 2 });
                      setIsCropping(true);
                      return;
                    }
                    const w = Math.max(60, container.clientWidth);
                    const h = Math.max(60, container.clientHeight);
                    setCropSize({ width: w, height: h });
                    setCrop({ x: w / 2, y: h / 2 });
                    setIsCropping(true);
                    return;
                  }
                  setCropSize(undefined);
                  setCrop({ x: 0, y: 0 });
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
              image={mediaType === 'image' ? getProxyUrl(currentMedia) : undefined}
              video={mediaType === 'video' ? getProxyUrl(currentMedia) : undefined}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              objectFit="contain"
              minZoom={1}
              aspect={undefined}
              cropSize={cropSize}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <div className="absolute inset-0 z-30" style={{ pointerEvents: 'none' }}>
              {croppedAreaPixels && cropSize ? (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      left: croppedAreaPixels.x,
                      top: croppedAreaPixels.y - 6,
                      width: croppedAreaPixels.width,
                      height: 12,
                    }}
                    className="bg-white/0 cursor-ns-resize pointer-events-auto"
                    onMouseDown={(e) => {
                      setResizing({
                        edge: 'top',
                        startX: e.clientX,
                        startY: e.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                    onTouchStart={(e) => {
                      const t = e.touches[0];
                      setResizing({
                        edge: 'top',
                        startX: t.clientX,
                        startY: t.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: croppedAreaPixels.x,
                      top: croppedAreaPixels.y + croppedAreaPixels.height - 6,
                      width: croppedAreaPixels.width,
                      height: 12,
                    }}
                    className="bg-white/0 cursor-ns-resize pointer-events-auto"
                    onMouseDown={(e) => {
                      setResizing({
                        edge: 'bottom',
                        startX: e.clientX,
                        startY: e.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                    onTouchStart={(e) => {
                      const t = e.touches[0];
                      setResizing({
                        edge: 'bottom',
                        startX: t.clientX,
                        startY: t.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: croppedAreaPixels.x - 6,
                      top: croppedAreaPixels.y,
                      width: 12,
                      height: croppedAreaPixels.height,
                    }}
                    className="bg-white/0 cursor-ew-resize pointer-events-auto"
                    onMouseDown={(e) => {
                      setResizing({
                        edge: 'left',
                        startX: e.clientX,
                        startY: e.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                    onTouchStart={(e) => {
                      const t = e.touches[0];
                      setResizing({
                        edge: 'left',
                        startX: t.clientX,
                        startY: t.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: croppedAreaPixels.x + croppedAreaPixels.width - 6,
                      top: croppedAreaPixels.y,
                      width: 12,
                      height: croppedAreaPixels.height,
                    }}
                    className="bg-white/0 cursor-ew-resize pointer-events-auto"
                    onMouseDown={(e) => {
                      setResizing({
                        edge: 'right',
                        startX: e.clientX,
                        startY: e.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                    onTouchStart={(e) => {
                      const t = e.touches[0];
                      setResizing({
                        edge: 'right',
                        startX: t.clientX,
                        startY: t.clientY,
                        startSize: { width: cropSize.width, height: cropSize.height },
                        startRect: croppedAreaPixels,
                        startCrop: crop,
                      });
                    }}
                  />
                </>
              ) : null}
            </div>
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

            {mediaType === 'video' && videoCropConfig && (
              <div className="absolute inset-0 pointer-events-none">
                <Cropper
                  video={getProxyUrl(currentMedia)}
                  crop={videoCropConfig.crop}
                  zoom={videoCropConfig.zoom}
                  rotation={videoCropConfig.rotation}
                  onCropChange={() => {}}
                  onRotationChange={() => {}}
                  onZoomChange={() => {}}
                  onCropComplete={() => {}}
                  showGrid={false}
                  classes={{
                    containerClassName: 'pointer-events-none',
                    cropAreaClassName: 'border-none shadow-none outline-none ring-0',
                  }}
                  style={{
                    containerStyle: { pointerEvents: 'none' },
                    mediaStyle: {},
                    cropAreaStyle: { border: 'none', boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.95)' },
                  }}
                />
              </div>
            )}
            {mediaType === 'video' && !videoCropConfig && (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  src={getProxyUrl(currentMedia)}
                  autoPlay
                  loop
                  muted={false}
                  controls={false}
                  ref={videoRef}
                  onLoadedMetadata={() => {
                    const container = containerRef.current;
                    const v = videoRef.current;
                    if (!container || !v) return;
                    computeRect(container.clientWidth, container.clientHeight, v.videoWidth, v.videoHeight);
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
                onClick={() => onSend?.({ description, isHD, selected })}
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
