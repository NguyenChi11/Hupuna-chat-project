'use client';

import Image from 'next/image';

function toMegaStream(url: string) {
  return url;
}

export default function ImageGrid({ images }: { images?: string[] }) {
  if (!images?.length) return null;
  return (
    <div className="grid  gap-2">
      {images.slice(0, 4).map((src, i) => (
        <Image
          alt={`Image ${i}`}
          width={200}
          height={200}
          key={i}
          src={toMegaStream(src)}
          className="w-full h-64 rounded-2xl object-cover"
          unoptimized={src.includes('mega.nz')}
        />
      ))}
    </div>
  );
}
