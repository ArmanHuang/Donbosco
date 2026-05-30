import Image from "next/image";
import Link from "next/link";

import Landingpage from "@/assets/images/landingpage.png";
import ApplyNow from "@/assets/images/apppl.png";
import AvailableCourse from "@/assets/images/availableCourse.png";
import NewsEvent from "@/assets/images/newsEvent.png";
import PartnerShip from "@/assets/images/partnerShip.png";

export default function Hero() {
  const cards = [
    {
      href: "/contact",
      image: ApplyNow,
      alt: "Apply Now",
    },
    {
      href: "/programs",
      image: AvailableCourse,
      alt: "Available Course",
    },
    {
      href: "/newsevent",
      image: NewsEvent,
      alt: "News Event",
    },
    {
      href: "/partnership",
      image: PartnerShip,
      alt: "Partnership",
    },
  ];

  return (
    <section className="relative w-full min-h-[720px] sm:min-h-[760px] md:min-h-[700px] lg:h-[90vh] flex items-center text-white overflow-visible">
      {/* BACKGROUND */}
      <Image
        src={Landingpage}
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-56 sm:pb-60 md:pb-32">
        <p className="text-[#F59E0B] font-bold text-lg sm:text-2xl md:text-4xl mb-3">
          DON BOSCO TVET TIMOR-LESTE
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 md:mb-6">
          Empowering Future <br className="hidden sm:block" />
          Technical Leaders
        </h1>

        <p className="text-gray-200 text-base md:text-lg max-w-md md:max-w-xl mb-7 md:mb-8 leading-relaxed">
          Providing world-class technical education and global opportunities for
          the next generation.
        </p>

        <Link
          href="/newsevent/3"
          className="inline-flex bg-[#F59E0B] hover:bg-[#d97706] transition px-6 py-3 rounded-lg font-semibold shadow-lg text-sm md:text-base"
        >
          Explore More
        </Link>
      </div>

      {/* BOTTOM CARD */}
      <div className="absolute left-0 right-0 -bottom-64 sm:-bottom-44 md:-bottom-16 w-full px-4 sm:px-6 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden">
            {cards.map((card, index) => (
              <Link
                href={card.href}
                key={index}
                className="flex items-center justify-center min-h-[120px] sm:min-h-[130px] md:min-h-[140px] px-4 py-5 border-white/20 transition hover:bg-white/10 border-b odd:border-r md:border-b-0 md:border-r last:border-r-0"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={240}
                  height={90}
                  sizes="(max-width: 768px) 45vw, 25vw"
                  className="w-full max-w-[140px] sm:max-w-[170px] md:max-w-[210px] lg:max-w-[240px] h-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}