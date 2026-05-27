"use client";

export default function NetworkPage() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/ourNetworkBG.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Map */}
        <div className="flex justify-center order-1">
          <img
            src="/world.png"
            alt="ASEAN Map"
            className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-5">
            Our Network
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl mx-auto md:mx-0">
            Don Bosco Tech ASEAN is a network of ASEAN countries in 7 (+1)
            consisting of the Philippines, Indonesia, Thailand, Vietnam,
            Cambodia, Myanmar, Laos, and Timor-Leste.
          </p>
        </div>
      </div>

      {/* Partners Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 -mt-6 md:-mt-10 lg:-mt-14 pb-16 md:pb-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-center">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F59E0B] mb-4">
            Our Partners
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl mx-auto">
            As an international network, Don Bosco Tech ASEAN pays close
            attention to establishing effective, efficient, useful, productive,
            and valuable networking with local and international institutions.
          </p>

          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10 items-center justify-items-center">
            <img
              src="/toyota.png"
              alt="Toyota"
              className="w-full max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain"
            />

            <img
              src="/seamolec.png"
              alt="Seamolec"
              className="w-full max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain"
            />

            <img
              src="/honda.png"
              alt="Honda"
              className="w-full max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain"
            />

            <img
              src="/ahk.png"
              alt="AHK"
              className="w-full max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}