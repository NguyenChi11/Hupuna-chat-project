'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import { HiX } from 'react-icons/hi';

// Dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onClose?: () => void;
  onSend?: () => void;
}

export default function RichTextEditor({ value, onChange, onClose, onSend }: RichTextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#quill-toolbar-container',
      },
    }),
    [],
  );

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
      {/* Close button absolute positioned */}
      <div className="absolute top-2 right-2 z-10">
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
          <HiX className="w-5 h-5" />
        </button>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-hidden relative quill-custom-wrapper">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          placeholder="Nhấn Ctrl + Shift + X để định dạng tin nhắn"
          className="h-full"
        />
      </div>

      {/* Custom Toolbar at Bottom */}
      <div id="quill-toolbar-container" className="flex items-center gap-0.5 p-2 border-t border-gray-200 bg-white">
        <span className="ql-formats">
          <button className="ql-bold" aria-label="Bold"></button>
          <button className="ql-italic" aria-label="Italic"></button>
          <button className="ql-underline" aria-label="Underline"></button>
          <button className="ql-strike" aria-label="Strike"></button>
        </span>

        <span className="ql-formats">
          <button className="ql-list" value="ordered" aria-label="Ordered List"></button>
          <button className="ql-list" value="bullet" aria-label="Bullet List"></button>
          <button className="ql-indent" value="-1" aria-label="Indent Less"></button>
          <button className="ql-indent" value="+1" aria-label="Indent More"></button>
        </span>

        <div className="flex-1"></div>

        {/* Right side icons */}
        <div className="flex items-center gap-2 ml-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors" onClick={onSend} aria-label="Send">
            <span className="text-blue-600 font-semibold text-sm">GỬI</span>
          </button>
        </div>
      </div>

      {/* Custom CSS overrides for Quill to match the design */}
      <style jsx global>{`
        .quill-custom-wrapper .ql-container.ql-snow {
          border: none;
          height: 100%;
          font-family: inherit;
          font-size: 1rem;
        }
        .quill-custom-wrapper .ql-editor {
          height: 100%;
          padding: 1rem;
          font-size: 1rem;
          color: #374151; /* text-gray-700 */
        }
        .quill-custom-wrapper .ql-editor.ql-blank::before {
          font-style: normal;
          color: #9ca3af; /* text-gray-400 */
          font-size: 0.875rem;
        }
        /* Hide the default toolbar border if any */
        #quill-toolbar-container.ql-toolbar.ql-snow {
          border: none;
          border-top: 1px solid #e5e7eb;
          padding: 8px;
        }
      `}</style>
    </div>
  );
}
