import Image from "next/image";
import Link from "next/link";
import aboutUs from "@/assets/images/about-us-home-updated.png";

export default function About() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="/about-bg.png"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] md:-left-10 lg:-left-36">
          <Image
            src={aboutUs}
            alt="Training"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-md"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] leading-tight mt-0 md:mt-20 lg:mt-36 mb-6">
            About Don Bosco <br className="hidden sm:block" /> Tech ASEAN
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
            Technical and Vocational Education and Training (TVET) comprises
            education, training and skills development relating to a wide range
            of occupational fields, production services and livelihoods. TVET
            empowers individuals, organisations, enterprises, and communities
            and fosters employment, decent work and lifelong learning thereby
            promoting inclusive and sustainable economic growth and
            competitiveness.
          </p>

          <div className="flex justify-center md:justify-end">
            <Link href="/about">
              <button className="bg-[#F59E0B] w-40 hover:bg-[#d97706] text-white font-semibold px-6 py-4 rounded-lg transition shadow-md">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}