"use client";

import { useState, useEffect } from "react";
import ProgramSection from "@/components/sections/programSection";

export default function OurProgramsHero({
  defaultCountry = "",
}: {
  defaultCountry?: string;
}) {
  const country = defaultCountry;

  const [selectedData, setSelectedData] = useState<any>(null);
  const [selectedCenter, setSelectedCenter] = useState<any>(null);

  useEffect(() => {
    if (!country) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/programs/${country}`);
        const data = await res.json();

        setSelectedData(data);

        const resCenter = await fetch(`/api/centers/${country}`);

        if (resCenter.ok) {
          const centerData = await resCenter.json();
          setSelectedCenter(centerData?.centers?.[0] ?? null);
        }
      } catch (error) {
        console.error(error);
        setSelectedData(null);
        setSelectedCenter(null);
      }
    };

    fetchData();
  }, [country]);
  
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <section className="relative w-full h-[260px] sm:h-[330px] md:h-[400px] mt-16 md:mt-20">
        <img
          src="/ourProgramBackground.png"
          alt="Programs Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 sm:px-10 md:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B]">
            Our Programs
          </h1>

          <p className="text-white mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Transforming lives and fostering brighter futures, we equip young
            people with the skills they need to succeed.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 px-6 sm:px-10 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F59E0B]">
          Our Programs
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Don Bosco Tech ASEAN offers a diverse range of quality vocational
          training programs designed to equip young people with the skills and
          knowledge they need to build brighter futures.
        </p>

      </section>

      {selectedData && <ProgramSection data={selectedData} />}

      {selectedCenter && (
        <section className="px-6 sm:px-10 md:px-20 py-12 md:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F59E0B] mb-6 text-center">
            Our Centers
          </h2>

          <h4 className="mb-10 text-center text-slate-950 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Across 8 countries, Don Bosco Tech ASEAN empowers youth through
            quality vocational training in diverse communities.
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <ul className="list-disc pl-5 space-y-3 text-left">
                {selectedCenter.schools.map((school: string, i: number) => (
                  <li
                    key={i}
                    className="hover:underline cursor-pointer text-slate-950 text-sm sm:text-base leading-relaxed"
                  >
                    {school}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border rounded-2xl overflow-hidden h-[260px] sm:h-[340px] md:h-96 shadow-md bg-white">
              <img
                src={selectedCenter.image}
                alt="Map"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}