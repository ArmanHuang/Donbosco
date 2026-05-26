"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// @ts-ignore
import "swiper/css";

type Item = {
  id: number;
  image: string;
  title: string;
};

type Props = {
  data: Item[];
};

export default function CardSlider({ data }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const chunkData = (arr: Item[], size: number) => {
    const result: Item[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  };

  const grouped = chunkData(data, 3);

  return (
    <div className="relative">
      {/* SWIPER */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
      >
        {grouped.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-8">
              {group.map((item) => (
                <Link
                  href={`/newsevent/${item.id}`}
                  key={item.id}
                  className="text-center block group"
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="text-blue-950 font-medium group-hover:text-[#F59E0B] transition">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PREV BUTTON */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-orange-400 hover:bg-orange-500 transition text-white p-3 rounded-full shadow"
      >
        ←
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-orange-400 hover:bg-orange-500 transition text-white p-3 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
}