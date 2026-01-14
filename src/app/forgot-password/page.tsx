'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/base/toast';
import { HiEnvelope, HiUser, HiArrowLeft, HiArrowRight, HiLockClosed } from 'react-icons/hi2';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const showToast = useToast();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'request' | 'verify' | 'reset'>('request');
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitRequest = async () => {
    if (!username.trim() && !email.trim()) {
      showToast({ type: 'warning', message: 'Vui lòng nhập tên đăng nhập hoặc email' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'forgotPasswordSendCode',
          data: { username: username.trim(), email: email.trim() },
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast({ type: 'error', message: String(json.message || 'Không thể gửi mã xác thực') });
        return;
      }
      showToast({ type: 'success', message: 'Đã gửi mã xác thực đến email' });
      setStep('verify');
    } catch {
      showToast({ type: 'error', message: 'Lỗi hệ thống. Vui lòng thử lại sau' });
    } finally {
      setLoading(false);
    }
  };

  const submitVerify = async () => {
    const v = code.trim();
    if (v.length !== 6 || !/^\d{6}$/.test(v)) {
      showToast({ type: 'error', message: 'Mã xác thực gồm 6 chữ số' });
      return;
    }
    if (!username.trim() || !email.trim()) {
      showToast({ type: 'error', message: 'Vui lòng nhập lại tên đăng nhập và email' });
      setStep('request');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'forgotPasswordVerifyCode',
          data: {
            username: username.trim(),
            email: email.trim(),
            code: v,
          },
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast({
          type: 'error',
          message: String(json.message || 'Mã xác thực không đúng hoặc đã hết hạn'),
        });
        return;
      }
      showToast({ type: 'success', message: 'Xác minh thành công. Vui lòng tạo mật khẩu mới' });
      setStep('reset');
    } catch {
      showToast({ type: 'error', message: 'Lỗi hệ thống. Vui lòng thử lại sau' });
    } finally {
      setLoading(false);
    }
  };

  const submitReset = async () => {
    const np = newPassword.trim();
    const cp = confirmPassword.trim();
    if (np.length < 6) {
      showToast({ type: 'error', message: 'Mật khẩu phải có ít nhất 6 ký tự' });
      return;
    }
    if (np !== cp) {
      showToast({ type: 'error', message: 'Mật khẩu xác nhận không khớp' });
      return;
    }
    if (!username.trim() || !email.trim()) {
      showToast({ type: 'error', message: 'Thông tin phiên đặt lại mật khẩu không hợp lệ. Vui lòng thực hiện lại' });
      setStep('request');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'forgotPasswordReset',
          data: {
            username: username.trim(),
            email: email.trim(),
            code: code.trim(),
            newPassword: np,
          },
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        showToast({
          type: 'error',
          message: String(json.message || 'Không thể đặt lại mật khẩu'),
        });
        return;
      }
      showToast({ type: 'success', message: 'Đổi mật khẩu thành công. Vui lòng đăng nhập lại' });
      router.push('/login');
    } catch {
      showToast({ type: 'error', message: 'Lỗi hệ thống. Vui lòng thử lại sau' });
    } finally {
      setLoading(false);
    }
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

            {step === 'request' && (
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
                  disabled={loading}
                  className="w-full cursor-pointer py-2 bg-blue-600 rounded-[0.25rem] text-white font-bold text-sm shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? 'Đang gửi...' : 'Gửi yêu cầu khôi phục'}
                  {!loading && <HiArrowRight className="w-4 h-4" />}
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
            )}

            {step === 'verify' && (
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <HiLockClosed className="w-5 h-5 text-blue-600" />
                    Nhập mã xác thực
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded-[0.25rem] border border-gray-200 focus:ring-blue-100 focus:border-blue-500 transition tracking-widest text-center"
                    placeholder="Ví dụ: 123456"
                    maxLength={6}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('request')}
                    className="cursor-pointer flex-1 py-2 rounded-[0.25rem] text-sm border border-gray-300 text-gray-700 font-bold hover:bg-gray-50"
                  >
                    Sửa thông tin
                  </button>
                  <button
                    type="button"
                    onClick={submitVerify}
                    disabled={loading}
                    className="cursor-pointer flex-1 py-2 bg-blue-600 rounded-[0.25rem] text-white font-bold text-sm shadow-lg hover:opacity-90 transition disabled:opacity-70"
                  >
                    {loading ? 'Đang xác minh...' : 'Xác minh mã'}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => router.push('/login')}
                  className="w-full cursor-pointer py-2 rounded-[0.25rem] text-sm border border-blue-500 text-blue-600 font-bold hover:bg-blue-50 flex items-center justify-center gap-2"
                >
                  <HiArrowLeft className="w-4 h-4" />
                  Quay lại đăng nhập
                </button>
              </div>
            )}

            {step === 'reset' && (
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <HiLockClosed className="w-5 h-5 text-blue-600" />
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded-[0.25rem] border border-gray-200 focus:ring-blue-100 focus:border-emerald-500 transition"
                    placeholder="Tạo mật khẩu mạnh"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <HiLockClosed className="w-5 h-5 text-blue-600" />
                    Xác nhận mật khẩu
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded-[0.25rem] border border-gray-200 focus:ring-blue-100 focus:border-blue-500 transition"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('verify')}
                    className="cursor-pointer flex-1 py-2 rounded-[0.25rem] text-sm border border-gray-300 text-gray-700 font-bold hover:bg-gray-50"
                  >
                    Quay lại nhập mã
                  </button>
                  <button
                    type="button"
                    onClick={submitReset}
                    disabled={loading}
                    className="cursor-pointer flex-1 py-2 bg-blue-600 rounded-[0.25rem] text-white font-bold text-sm shadow-lg hover:opacity-90 transition disabled:opacity-70"
                  >
                    {loading ? 'Đang đổi...' : 'Đổi mật khẩu'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
