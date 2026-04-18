"use client";

export default function NetworkPage() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/ourNetworkBG.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Map */}
        <div className="flex justify-center">
          <img
            src="/mapIndo.png"
            alt="ASEAN Map"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-4">
            Our Network
          </h2>

          <p className="text-lg text-black leading-relaxed">
            Don Bosco Tech ASEAN is a network of ASEAN countries in 7 (+1)
            consisting of the Philippines, Indonesia, Thailand, Vietnam,
            Cambodia, Myanmar, Laos, Timor-Leste.
          </p>
        </div>
      </div>

      {/* Partners Card */}
      <div className="relative -bottom-24 max-w-7xl mx-auto px-6 z-10 ">
        <div className=" bg-white rounded-2xl shadow-xl p-10 text-center ">
          <h3 className="text-3xl font-bold  text-[#F59E0B] mb-4">
            Our Partners
          </h3>

          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            As an international network, Don Bosco Tech ASEAN pays close
            attention to establishing effective, efficient, useful, productive,
            and valuable networking with all of local and international
            institutions
          </p>

          {/* Logos */}
          <div className="flex justify-center items-center gap-5 w-full">
            <img src="/toyota.png" className="" />
            <img src="/seamolec.png" className="" />
            <img src="/honda.png" className="" />
            <img src="/ahk.png" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
