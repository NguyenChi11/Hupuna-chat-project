'use client';

import Image from 'next/image';
import { HiCamera } from 'react-icons/hi';
import { getProxyUrl } from '@/utils/utils';

export default function Header({
  displayName,
  backgroundUrl,
  avatarUrl,
  isUploading,
  avatarFailed,
  setAvatarFailed,
  onSelectFile,
  isUploadingBackground,
  onSelectBackgroundFile,
}: {
  displayName: string;
  backgroundUrl?: string;
  avatarUrl?: string;
  isUploading: boolean;
  avatarFailed: boolean;
  setAvatarFailed: (failed: boolean) => void;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isUploadingBackground?: boolean;
  onSelectBackgroundFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="h-32 relative mb-16">
      {backgroundUrl ? (
        <Image src={getProxyUrl(backgroundUrl)} alt="bg" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600" />
      )}

      {isUploadingBackground && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <div className="flex items-center gap-3 px-3 py-2 rounded bg-black/50">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Đang tải...</span>
          </div>
        </div>
      )}

      {/* Change Background Button */}
      <label className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer group transition-colors">
        <HiCamera className="text-white w-5 h-5" />
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => {
            onSelectBackgroundFile?.(e);
            try {
              e.target.value = '';
            } catch {}
          }}
          disabled={Boolean(isUploadingBackground)}
        />
      </label>

      <div className="absolute left-1/2 -bottom-14 -translate-x-1/2 w-28 h-28 p-1 bg-white rounded-full overflow-hidden shadow-md">
        <label className="group cursor-pointer relative block w-full h-full rounded-full overflow-hidden">
          {!avatarFailed && avatarUrl ? (
            <Image
              src={getProxyUrl(avatarUrl)}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              alt={displayName}
              onError={() => setAvatarFailed(true)}
            />
          ) : (
            <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold">
              {displayName[0]?.toUpperCase()}
            </div>
          )}

          <div
            className={`absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            <HiCamera className="w-8 h-8" />
          </div>

          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              onSelectFile(e);
              try {
                e.target.value = '';
              } catch {}
            }}
            disabled={isUploading}
          />
        </label>
      </div>
    </div>
  );
}
