'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/base/toast';
import { HiEnvelope, HiUser, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const showToast = useToast();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const submitRequest = () => {
    if (!username.trim() && !email.trim()) {
      showToast({ type: 'warning', message: 'Vui lòng nhập tên đăng nhập hoặc email' });
      return;
    }
    showToast({ type: 'info', message: 'Chức năng đang phát triển. Liên hệ admin để đặt lại mật khẩu' });
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 px-4 py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] w-72 h-72 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-[-10%] bottom-[-10%] w-72 h-72 md:w-96 md:h-96 bg-cyan-300/40 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute left-1/2 top-1/2 w-60 h-60 md:w-72 md:h-72 -translate-x-1/2 -translate-y-1/2 bg-blue-300/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900">Quên mật khẩu</h2>
            <p className="text-center text-gray-600 text-sm sm:text-base mt-1 mb-6">
              Nhập thông tin để khôi phục mật khẩu
            </p>

            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <HiUser className="w-5 h-5 text-blue-600" />
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 bg-gray-50 rounded-[0.25rem] border border-gray-200 focus:ring-blue-100 focus:border-blue-500 transition"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <HiEnvelope className="w-5 h-5 text-blue-600" />
                  Email (tuỳ chọn)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-gray-50 rounded-[0.25rem] border border-gray-200 focus:ring-blue-100 focus:border-blue-500 transition"
                  placeholder="Nhập email đăng ký"
                />
              </div>

              <button
                type="button"
                onClick={submitRequest}
                className="w-full cursor-pointer py-2 bg-blue-600 rounded-[0.25rem] text-white font-bold text-sm shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Gửi yêu cầu khôi phục
                <HiArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => router.push('/login')}
                className="w-full cursor-pointer py-2 rounded-[0.25rem] text-sm border border-blue-500 text-blue-600 font-bold hover:bg-blue-50 flex items-center justify-center gap-2"
              >
                <HiArrowLeft className="w-4 h-4" />
                Quay lại đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
