"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutTeam() {
  const [current, setCurrent] = useState(0);

  const teamMembers = [
    {
      name: "Lukas Lamberts",
      role: "Representative of Don Bosco Mondo-Germany",
      img: "/lukasLamberts.png",
    },
    {
      name: "Br. Ephrem Mariano Santos, SDB",
      role: "Indonesian Coordinator",
      img: "/ephremMariano.png",
    },
    {
      name: "Fr. Gerald Ravsaco, SDB",
      role: "Cambodia Coordinator",
      img: "/geraldRayasco.png",
    },
    {
      name: "Fr. Duong Quoc Huy, SDB",
      role: "Vietnam Coordinator",
      img: "/duongHuoq.png",
    },
    {
      name: "Fr. Dindo Vitug, SDB",
      role: "ASEAN Coordinator",
      img: "/dindoVituc.png",
    },
    {
      name: "Francis Wichai Srisura",
      role: "Thailand Coordinator",
      img: "/francisWichai.png",
    },
    {
      name: "Br. Amilcar C. da Silva, SDB",
      role: "Timor-Leste Coordinator",
      img: "/br.png",
    },
    {
      name: "Mark Carlos Tito Gumapon",
      role: "DON BOSCO TVET TIMOR-LESTE Central Office Managing Director",
      img: "/mark.png",
    },
    {
      name: "John Nicollo Oviedo",
      role: "DON BOSCO TVET TIMOR-LESTE Central Office Admin Assistant",
      img: "/john.png",
    },
  ];

  const maxSlide = teamMembers.length - 1;

  const nextSlide = () => {
    setCurrent((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  return (
    <main className="w-full overflow-hidden">
      {/* HERO + TIMELINE */}
      <section className="relative w-full py-16 md:py-20 lg:py-24 px-6">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about-bg.png"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-6">
            DON BOSCO
TVET TIMOR-LESTE Today
          </h1>

          <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-10 md:mb-16">
            DON BOSCO
TVET TIMOR-LESTE is a regional network formed through a
            development initiative launched in 2018 in partnership with Don
            Bosco Mondo, Germany. The initiative focuses on enhancing vocational
            training across seven (+1) ASEAN countries.
          </p>

          {/* TIMELINE */}
          <div className="relative mt-10 md:mt-20 overflow-hidden py-10 md:py-16">
            <div
              className="relative flex gap-8 md:gap-16 w-max items-start"
              style={{
                animation: "scroll 20s linear infinite",
              }}
            >
              <div className="absolute top-[130px] md:top-[145px] left-0 h-[4px] bg-[#F59E0B] w-full" />

              {[
                {
                  year: "2018",
                  text: "Project agreement signed between Don Bosco Mondo and ASEAN countries.",
                },
                {
                  year: "2019",
                  text: "Network development and collaboration across countries.",
                },
                {
                  year: "2022",
                  text: "Delegation visits Bangkok fostering industry collaboration.",
                },
                {
                  year: "2023",
                  text: "Central office moved to Philippines and expanded partnerships.",
                },
                {
                  year: "2018",
                  text: "Project agreement signed between Don Bosco Mondo and ASEAN countries.",
                },
                {
                  year: "2019",
                  text: "Network development and collaboration across countries.",
                },
                {
                  year: "2022",
                  text: "Delegation visits Bangkok fostering industry collaboration.",
                },
                {
                  year: "2023",
                  text: "Central office moved to Philippines and expanded partnerships.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-[220px] md:w-[260px] relative z-10"
                >
                  <div className="bg-white shadow-xl rounded-3xl px-5 md:px-6 py-5 h-[100px] md:h-[110px] flex items-center justify-center text-center text-xs md:text-sm leading-relaxed text-black hover:scale-105 transition">
                    {item.text}
                  </div>

                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#F59E0B] rounded-full border-[5px] md:border-[6px] border-white mt-8 z-20" />

                  <span className="mt-5 text-[#F59E0B] font-bold text-xl md:text-2xl">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="relative w-full py-16 md:py-20 lg:py-24 px-6">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about-bg.png"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-yellow-50/90"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-10 md:mb-16">
            Our Team
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-12 md:mt-14">
            Meet the people behind DON BOSCO
TVET TIMOR-LESTE. Our team brings
            together diverse expertise and a shared commitment to empowering
            youth through quality vocational education and training across the
            ASEAN region.
          </p>
          {/* MOBILE: LIST CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:hidden">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-[180px] h-[180px] rounded-3xl overflow-hidden bg-white shadow-lg mb-5">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={180}
                    height={180}
                    className="object-contain w-full h-full"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#1F2A5A] leading-relaxed mb-2">
                  {member.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* TABLET / LAPTOP: SLIDER */}
          <div className="hidden md:block relative bg-white rounded-[30px] shadow-2xl p-8 lg:p-10 overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#F59E0B] hover:bg-[#d97706] text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-xl"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#F59E0B] hover:bg-[#d97706] text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-xl"
            >
              →
            </button>

            <div className="overflow-hidden px-10">
              <div
                className="flex gap-8 transition-all duration-500 items-start"
                style={{
                  transform: `translateX(-${current * 33.33}%)`,
                }}
              >
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className="min-w-[33.33%] flex-shrink-0 flex flex-col items-center text-center hover:-translate-y-2 transition duration-300"
                  >
                    <div className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-3xl overflow-hidden bg-white shadow-lg mb-6 flex items-center justify-center">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={220}
                        height={220}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold text-[#1F2A5A] leading-relaxed mb-3">
                      {member.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}