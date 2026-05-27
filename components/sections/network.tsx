"use client";

import Link from "next/link";

export default function NetworkPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[650px] sm:min-h-[720px] md:min-h-[80vh] flex items-center">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/cta-bg.jpg"
            alt="Network Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F59E0B] leading-tight mb-6">
            Don Bosco Tech Building Youth’s Future
          </h1>

          <p className="max-w-xl text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            Don Bosco Tech ASEAN’s innovative and holistic technical and
            vocational education and training gives youth the skills and
            information they need to succeed in today’s world. Don Bosco Tech
            prepares young people to be productive and responsible citizens,
            helping Southeast Asia’s economy and society.
          </p>

          <Link
            href="/programs"
            className="inline-flex bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg text-sm sm:text-base"
          >
            Explore More
          </Link>
        </div>
      </section>
    </div>
  );
}