// app/(pages)/coming-soon/page.tsx   (hoặc bất kỳ route nào bạn muốn)

'use client';

import { HiSparkles, HiRocketLaunch, HiClock, HiCheckBadge } from 'react-icons/hi2';

export default function ComingSoonPage() {
  return (
    <main className="relative h-[100vh] min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      {/* Hiệu ứng nền động */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-ping" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo + Tên */}
        

        {/* Card chính – Glassmorphism đỉnh cao */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-3xl border border-white/20 p-7">
          <div className="flex flex-col items-center">
            {/* Icon lớn */}
            <div className="p-3 bg-white/20 rounded-3xl shadow-2xl mb-4 animate-bounce">
              <HiRocketLaunch className="w-24 h-24 text-white" />
            </div>

            {/* Tiêu đề */}
            <h2 className="text-xl md:text-6xl font-black text-white mb-6 leading-tight">
              Đang được
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">hoàn thiện</span>
            </h2>

        

            {/* Danh sách tính năng sắp ra mắt */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
              {[
                { icon: HiSparkles, text: 'Giao diện đẹp như mơ' },
                { icon: HiClock, text: 'Tin nhắn siêu nhanh' },
                { icon: HiCheckBadge, text: 'Bảo mật tuyệt đối' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 md:p-6 p-1 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="md:w-12 md:h-12 w-8 h-8 text-cyan-300" />
                  <span className="text-white font-semibold text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Nút hành động */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => (window.location.href = '/home')}
                className="px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <HiRocketLaunch className="w-7 h-7 " />
                Vào ứng dụng ngay
              </button>

              <button
                onClick={() => alert('Sắp có thông báo khi ra mắt chính thức!')}
                className="px-6 py-3 bg-white/20 backdrop-blur-xl border-2 border-white/50 text-white font-bold text-xl rounded-2xl hover:bg-white/30 transition-all duration-300 active:scale-95"
              >
                Nhận thông báo khi sẵn sàng
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Hupuna – Được xây dựng với tình yêu và công nghệ</p>
        </div>
      </div>
    </main>
  );
}
