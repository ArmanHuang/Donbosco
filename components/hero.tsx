import Image from "next/image";
import Landingpage from "../app/images/landingpage.png"
import ApplyNow from "../app/images/apppl.png"
import AvailableCourse from "../app/images/availableCourse.png"
import NewsEvent from '../app/images/newsEvent.png'
import PartnerShip from '../app/images/partnerShip.png'
import App from "next/app";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-start text-white">

      <Image
        src={Landingpage}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />


   
      <div className="relative z-10 max-w-6xl px-6 md:px-12">
     
        <p className="text-orange-400 font-semibold text-lg mb-3">
          Don Bosco Tech ASEAN
        </p>

     
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Empowering Future <br />
          Technical Leaders
        </h1>

    
        <p className="text-gray-300 max-w-xl mb-8">
          Providing world-class technical education and global opportunities
          for the next generation.
        </p>


        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
          Explore More
        </button>
      </div>


  <div className="absolute -bottom-14 w-full px-6">
  <div className="max-w-7xl mx-auto" >
    
    <div className="
      grid grid-cols-2 md:grid-cols-4
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-2xl shadow-xl
      overflow-hidden
    ">

   
      <div className="flex items-center justify-center gap-4 py-8 px-6 border-r-8 border-[#F59E0B]">
        <Image src={ApplyNow} alt="Apply Now" className="w-24 h-24" />
        <p className="text-3xl font-semibold text-[#F59E0B]">
          Apply Now
        </p>
      </div>


      <div className="flex items-center justify-center gap-4 py-8 px-6 border-r-8 border-[#F59E0B]">
        <Image src={AvailableCourse} alt="Courses" className="w-24 h-24" />
        <p className="text-3xl font-semibold text-[#F59E0B]">
          Available Courses
        </p>
      </div>


      <div className="flex items-center justify-center gap-4 py-8 px-6 border-r-8 border-[#F59E0B]">
        <Image src={NewsEvent} alt="News" className="w-24 h-24" />
        <p className="text-3xl font-semibold text-[#F59E0B]">
          News & Events
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 py-8 px-6">
        <Image src={PartnerShip} alt="Partnership" className="w-24 h-24" />
        <p className="text-3xl font-semibold text-[#F59E0B]">
          Partnership
        </p>
      </div>

    </div>

  </div>
</div>

    </section>
  );
}