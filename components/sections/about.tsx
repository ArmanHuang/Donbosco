import Image from "next/image";

import aboutUs from '@/assets/images/about-us-home-updated.png'

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/about-bg.png"
        alt="Background"
        fill
        className="w-full"
      />


      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative w-full h-[600px] -left-36">
            <Image
              src={aboutUs}
              alt="Training"
              fill
              className="object-cover rounded-md"
            />
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F59E0B] leading-tight mt-36">
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

          <div className="flex justify-end">
          <button className=" bg-[#F59E0B] w-40 hover:bg-[#d97706] text-white font-semibold px-6 py-4 rounded-lg transition shadow-md ">
            Learn More
          </button>
          </div>
         
        </div>
      </div>
    </section>
  );
}