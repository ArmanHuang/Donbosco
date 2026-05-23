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
      role: "Don Bosco Tech ASEAN Central Office Managing Director",
      img: "/mark.png",
    },
    {
      name: "John Nicollo Oviedo",
      role: "Don Bosco Tech ASEAN Central Office Admin Assistant",
      img: "/john.png",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === teamMembers.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? teamMembers.length - 3 : prev - 1
    );
  };

  return (
    <main className="w-full overflow-hidden">

      {/* HERO + TIMELINE */}
      <section className="relative w-full py-24 px-6">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <Image
            src="/about-bg.png"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-white/80"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-6">
            Don Bosco Tech ASEAN Today
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-16">
            Don Bosco Tech ASEAN is a regional network formed through a
            development initiative launched in 2018 in partnership with
            Don Bosco Mondo, Germany. The initiative focuses on enhancing
            vocational training across seven (+1) ASEAN countries.
          </p>

          {/* TIMELINE */}
            <div className="relative mt-24 overflow-hidden py-16">

              {/* SCROLL WRAPPER */}
              <div
                className="relative flex gap-16 w-max items-start"
                style={{
                  animation: "scroll 20s linear infinite",
                }}
              >

                {/* BIG LINE */}
                <div className="absolute top-[145px] left-0 h-[4px] bg-[#F59E0B] w-full" />

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

                  /* DUPLICATE */
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
                    className="flex flex-col items-center w-[260px] relative z-10"
                  >

                    {/* CARD */}
                    <div className="bg-white shadow-xl rounded-3xl px-6 py-5 h-[110px] flex items-center justify-center text-center text-sm leading-relaxed text-black hover:scale-105 transition">

                      {item.text}

                    </div>

                    {/* DOT */}
                    <div className="w-6 h-6 bg-[#F59E0B] rounded-full border-[6px] border-white mt-8 z-20" />

                    {/* YEAR */}
                    <span className="mt-5 text-[#F59E0B] font-bold text-2xl">
                      {item.year}
                    </span>

                  </div>

                ))}

              </div>
            </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="relative w-full py-24 px-6">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <Image
            src="/about-bg.png"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-yellow-50/90"></div>

        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#F59E0B] mb-16">
            Our Team
          </h2>

          {/* SLIDER */}
          <div className="relative bg-white rounded-[30px] shadow-2xl p-10 overflow-hidden">

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="absolute left-[-2px] top-1/2 -translate-y-1/2 z-20 bg-[#F59E0B] hover:bg-[#d97706] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            >
              ←
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="absolute right-[-2px] top-1/2 -translate-y-1/2 z-20 bg-[#F59E0B] hover:bg-[#d97706] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            >
              →
            </button>

            {/* TEAM CARDS */}
              <div
                className="flex gap-8 transition-all duration-500 items-start"
                style={{
                  transform: `translateX(-${current * 34}%)`,
                }}
              >

                {teamMembers.map((member, i) => (

                  <div
                    key={i}
                    className="min-w-[30%] flex-shrink-0 flex flex-col items-center text-center hover:-translate-y-2 transition duration-300"
                  >

                    {/* IMAGE CONTAINER */}
                    <div className="w-[220px] h-[220px] rounded-3xl overflow-hidden bg-white shadow-lg mb-6 flex items-center justify-center">

                      <Image
                        src={member.img}
                        alt={member.name}
                        width={220}
                        height={220}
                        className="object-contain w-full h-full"
                      />

                    </div>

                    {/* NAME */}
                    <h3 className="text-xl font-semibold text-[#1F2A5A] leading-relaxed mb-3">
                      {member.name}
                    </h3>

                    {/* ROLE */}
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                      {member.role}
                    </p>

                  </div>

                ))}

              </div>
  
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-14">
            Meet the people behind Don Bosco Tech ASEAN.
            Our team brings together diverse expertise and
            a shared commitment to empowering youth through
            quality vocational education and training across
            the ASEAN region.
          </p>

        </div>
      </section>

    </main>
  );
}