'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Cropper, CropperRef, CircleStencil, RectangleStencil, ImageRestriction } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';

type Props = {
  open: boolean;
  src: string | null;
  onClose: () => void;
  onConfirm: (file: File) => void;
  aspectRatio?: number;
  circle?: boolean;
  fileName?: string;
  outputType?: 'image/jpeg' | 'image/png' | 'image/webp';
  quality?: number;
};

export default function CropImageModal({
  open,
  src,
  onClose,
  onConfirm,
  aspectRatio = 1,
  circle = false,
  fileName = 'cropped.jpg',
  outputType = 'image/jpeg',
  quality = 0.92,
}: Props) {
  const cropperRef = useRef<CropperRef>(null);
  const [ready, setReady] = useState(false);

  const stencil = useMemo(() => (circle ? CircleStencil : RectangleStencil), [circle]);

  useEffect(() => {
    if (!open) setReady(false);
  }, [open]);

  const handleZoom = (delta: number) => {
    try {
      const factor = 1 + delta;
      cropperRef.current?.zoomImage(factor, { transitions: true });
    } catch {}
  };

  const handleConfirm = async () => {
    const canvas = cropperRef.current?.getCanvas();
    if (!canvas) return;
    canvas.toBlob(
      (blob: Blob | null) => {
        if (!blob) return;
        const ext = outputType === 'image/png' ? 'png' : outputType === 'image/webp' ? 'webp' : 'jpg';
        const safeName = fileName?.trim() ? fileName : `cropped.${ext}`;
        const file = new File([blob], safeName, { type: outputType });
        onConfirm(file);
      },
      outputType,
      quality,
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-[800px]">
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Điều chỉnh ảnh</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="relative w-full h-[50vh] min-h-[320px] bg-gray-50 rounded-lg overflow-hidden">
            {src ? (
              <Cropper
                ref={cropperRef}
                src={src}
                className="w-full h-full"
                stencilComponent={stencil}
                stencilProps={{ aspectRatio, movable: true, resizable: true }}
                imageRestriction={ImageRestriction.fitArea}
                onReady={() => setReady(true)}
                defaultSize={({ imageSize }) => ({
                  width: Math.min(imageSize.width, 800),
                  height: Math.min(imageSize.height, 600),
                })}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">Không có ảnh</div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleZoom(-0.1)}
                className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                Thu nhỏ
              </button>
              <button
                onClick={() => handleZoom(0.1)}
                className="px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                Phóng to
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                Hủy
              </button>
              <button
                onClick={handleConfirm}
                disabled={!ready}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
