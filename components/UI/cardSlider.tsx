"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

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
    <div className="">
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
                <div key={item.id} className="text-center">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <p className="text-blue-950">{item.title}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-orange-400 p-3 rounded-full shadow"
      >
        ←
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute -right-1.5 top-1/2 -translate-y-1/2 z-50 bg-orange-400 p-3 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
}