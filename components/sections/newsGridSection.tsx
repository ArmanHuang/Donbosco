"use client";

import Image from "next/image";
import { newsData } from "@/data/news";

export default function NewsGridSection() {
  return (
    <section className="bg-gradient-to-b from-white to-yellow-100 py-20 px-6 md:px-20">
      
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
          News & Events
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm">
          Further sustainable growth of these works could be ensured through a
          networking of the Salesians of Don Bosco in the ASEAN region.
        </p>

        <div className="w-full h-[3px] bg-orange-400 mt-6"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <div key={item.id} className="cursor-pointer group">

            {/* IMAGE */}
            <div className="relative w-full h-[180px] overflow-hidden rounded">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* DATE */}
            {item.date && (
              <p className="text-orange-500 text-xs mt-2 text-right">
                {item.date}
              </p>
            )}

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-gray-800 mt-1 leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* PAGINATION (dummy dulu) */}
      <div className="flex justify-center mt-10 gap-3 items-center">
        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>
        <span className="cursor-pointer">3</span>
        <button className="bg-orange-400 text-white px-2 py-1 rounded">
          →
        </button>
      </div>
    </section>
  );
}