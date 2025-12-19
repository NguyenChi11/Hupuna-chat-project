function ProfileQR() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center ">
        <span className="text-gray-400">QR</span>
      </div>
      <p className="text-sm text-gray-500 text-center md:text-base">
        Mã QR để người khác kết bạn hoặc xem hồ sơ của bạn.
      </p>
    </div>
  );
}
export default ProfileQR;
