import Image from "next/image";
import Landingpage from "@/assets/images/landingpage.png";
import ApplyNow from "@/assets/images/apppl.png";
import AvailableCourse from "@/assets/images/availableCourse.png";
import NewsEvent from "@/assets/images/newsEvent.png";
import PartnerShip from "@/assets/images/partnerShip.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:h-[90vh] flex items-center text-white">

      {/* BACKGROUND */}
      <Image
        src={Landingpage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OVERLAY (biar teks kebaca) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 py-20">
        
        <p className="text-orange-400 font-semibold text-sm md:text-lg mb-2 md:mb-3">
          Don Bosco Tech ASEAN
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
          Empowering Future <br />
          Technical Leaders
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-md md:max-w-xl mb-6 md:mb-8">
          Providing world-class technical education and global opportunities
          for the next generation.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold shadow-lg text-sm md:text-base">
          Explore More
        </button>
      </div>

      {/* BOTTOM CARD */}
      <div className="absolute -bottom-24 md:-bottom-14 w-full px-4 md:px-6 z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl shadow-xl
            overflow-hidden
          ">

            {/* ITEM */}
            <div className="flex items-center gap-3 md:gap-4 py-6 md:py-8 px-4 md:px-6 border-b sm:border-b-0 md:border-r md:border-white/20">
              <Image src={ApplyNow} alt="Apply Now" className="w-12 h-12 md:w-20 md:h-20" />
              <p className="text-lg md:text-2xl font-semibold text-[#F59E0B]">
                Apply Now
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 py-6 md:py-8 px-4 md:px-6 border-b sm:border-b-0 md:border-r md:border-white/20">
              <Image src={AvailableCourse} alt="Courses" className="w-12 h-12 md:w-20 md:h-20" />
              <p className="text-lg md:text-2xl font-semibold text-[#F59E0B]">
                Courses
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 py-6 md:py-8 px-4 md:px-6 border-b sm:border-b-0 md:border-r md:border-white/20">
              <Image src={NewsEvent} alt="News" className="w-12 h-12 md:w-20 md:h-20" />
              <p className="text-lg md:text-2xl font-semibold text-[#F59E0B]">
                News & Event
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 py-6 md:py-8 px-4 md:px-6">
              <Image src={PartnerShip} alt="Partnership" className="w-12 h-12 md:w-20 md:h-20" />
              <p className="text-lg md:text-2xl font-semibold text-[#F59E0B]">
                Partnership
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}