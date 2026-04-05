import Image from "next/image";

import aboutBg from '@/assets/images/about-bg.png'
import aboutUs from '@/assets/images/about-us-home-updated.png'

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src={aboutBg}
        alt="Background"
        fill
        className="w-full"
      />


      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative w-full h-[500px]">
            <Image
              src={aboutUs}
              alt="Training"
              fill
              className="object-cover rounded-md"
            />
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F59E0B] leading-tight mb-6">
            About Don Bosco <br /> Tech ASEAN
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Technical and Vocational Education and Training (TVET) comprises
            education, training and skills development relating to a wide range
            of occupational fields, production services and livelihoods. TVET
            empowers individuals, organisations, enterprises, and communities
            and fosters employment, decent work and lifelong learning thereby
            promoting inclusive and sustainable economic growth and
            competitiveness.
          </p>

          <button className="bg-[#F59E0B] hover:bg-[#d97706] text-white font-semibold px-6 py-3 rounded-lg transition shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}