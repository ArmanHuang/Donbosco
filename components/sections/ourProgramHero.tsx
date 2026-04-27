"use client";
import { useState, useEffect } from "react";
import ProgramSection from "@/components/sections/programSection";

export default function OurProgramsHero() {
  const [country, setCountry] = useState("");
  const [selectedData, setSelectedData] = useState<any>(null);
  const [selectedCenter, setSelectedCenter] = useState<any>(null);

  useEffect(() => {
    if (!country) return;

  
    let ignore = false;
  
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/programs/${country}`);

        console.log("COUNTRY:", country);
        console.log("RESPONSE STATUS:", res.status);

        if (!res.ok) {
          console.log("API ERROR:", res.status);
          setSelectedData(null);
          return;
        }
        
        const data = await res.json();
        setSelectedData(data);
  
        const resCenter = await fetch(`/api/centers/${country}`);

        console.log("CENTER STATUS:", resCenter.status);
  
        if (resCenter.ok) {
          const centerData = await resCenter.json();
          if (!ignore) setSelectedCenter(centerData?.centers?.[0] ?? null);
        } else {
          if (!ignore) setSelectedCenter(null);
        }
  
      } catch (error) {
        console.error(error);
        if (!ignore) {
          setSelectedData(null);
          setSelectedCenter(null);
        }
      }
    };
  
    fetchData();
  
    return () => {
      ignore = true;
    };
  }, [country]);

  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="/ourProgramBackground.png"
          alt="Programs Banner"
          className="w-full h-full mt-20 object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold text-[#F59E0B]">
            Our Programs
          </h1>
          <p className="text-white mt-3 max-w-xl text-sm md:text-base">
            Transforming lives and fostering brighter futures, we equip young
            people with the skills they need to succeed.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F59E0B]">
          Our Programs
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Don Bosco Tech ASEAN offers a diverse range of quality vocational
          training programs designed to equip young people with the skills and
          knowledge they need to build brighter futures.
        </p>

        {/* Select Country */}
        <div className="mt-10 flex justify-center">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-orange-400 rounded-full px-6 py-2 text-mist-950 focus:outline-none"
          >
            <option value="">Select Country</option>
            <option value="philippines">Philippines</option>
            <option value="indonesia">Indonesia</option>
            <option value="cambodia">Cambodia</option>
            <option value="timorleste">Timor Leste</option>
            <option value="thailand">Thailand</option>
            <option value="laos">Laos</option>
            <option value="myanmar">Myanmar</option>
            <option value="vietnam">Vietnam</option>
          </select>
        </div>
      </section>

      {/* Program Section */}
      {selectedData && <ProgramSection data={selectedData} />}

      {/* OUR CENTERS */}
      {selectedCenter && (
        <section className="px-6 md:px-20 py-12">
          <h2 className="text-3xl font-bold text-[#F59E0B] mb-6 text-center">
            Our Centers
          </h2>

          <h4 className="mb-6 text-center text-mist-950">
            Across 8 countries, Don Bosco Tech ASEAN empowers 36 youth through
            quality vocational training in diverse communities.
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT */}
            <ul className="list-disc pl-5 m-36 space-y-2">
              {selectedCenter.schools.map((school: string, i: number) => (
                <li
                  key={i}
                  className="hover:underline cursor-pointer text-mist-950"
                >
                  {school}
                </li>
              ))}
            </ul>

            {/* RIGHT */}
            <div className="border rounded-lg overflow-hidden h-96 m-24">
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