"use client";

import { useState } from "react";
import ProgramSection from "@/components/sections/programSection";
import { CountryProgram } from "@/types/program";
import {programsData} from '@/data/program'
import { ourCentersData } from "@/data/ourCenters";

export default function ProgramsPage() {
  const [country, setCountry] = useState("");


  const selectedData = programsData[country];
  const selectedCenter = ourCentersData[country]?.centers?.[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="/images/program-banner.jpg"
          alt="Programs Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-400">
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
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
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
            className="border border-orange-400 rounded-full px-6 py-2 text-gray-700 focus:outline-none"
          >
            <option value="">Select Country</option>
            <option value="philippines">Philippines</option>
            <option value="indonesia">Indonesia</option>
            <option value="cambodia">Cambodia</option>
            <option value="timorleste">Timor Leste</option>
            <option value="thailand">Thailand</option>


            

          </select>
        </div>
      </section>

      {/* Program Section */}
      {selectedData && <ProgramSection data={selectedData} />}

   {/* OUR CENTERS */}
{selectedCenter && (
  <section className="px-6 md:px-20 py-12">
    <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
      Our Centers
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT */}
      <ul className="list-disc pl-5 space-y-2">
        {selectedCenter.schools.map((school, i) => (
          <li key={i} className="hover:underline cursor-pointer text-mist-950">
            {school}
          </li>
        ))}
      </ul>

      {/* RIGHT */}
      <div className="border rounded-lg overflow-hidden">
        <img
          src={selectedCenter.image}
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </section>
)}
  </main>
  )}
