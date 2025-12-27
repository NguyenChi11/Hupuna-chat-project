import React, { useEffect } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  autoCloseTime?: number; // ms
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "Thành công", 
  description = "Thao tác đã được thực hiện thành công.",
  autoCloseTime = 3000
}) => {
  useEffect(() => {
    if (isOpen && autoCloseTime > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseTime, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
        {/* Decorative Header Background */}
        <div className="h-24 bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl w-32 h-32" />
          <div className="absolute bottom-0 left-0 p-8 bg-black/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-xl w-24 h-24" />
          
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-sm"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Icon & Content */}
        <div className="px-6 pb-8 pt-0 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-10 h-10 bg-white rounded-full p-2 shadow-lg flex items-center justify-center">
              <div className="w-full h-full bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100">
                <HiCheck className="w-10 h-10 text-green-500" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center space-y-3">
            <h3 className="text-xl font-bold text-gray-900">
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="cursor-pointer px-8 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/30 transform transition-all active:scale-95"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
