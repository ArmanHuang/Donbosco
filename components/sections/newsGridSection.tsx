"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsGridSection() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news-api`);

        if (!res.ok) {
          setNews([]);
          return;
        }

        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error(error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* BANNER */}
      <section className="relative w-full h-[220px] sm:h-[300px] md:h-[400px]">
        <img
          src="/news-bg.jpg"
          alt="News Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* TITLE */}
      <section className="py-10 md:py-12 px-6 sm:px-10 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B]">
          News & Events
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base leading-relaxed">
          Further sustainable growth of these works could be ensured through a
          networking of the Salesians of Don Bosco in the ASEAN region.
        </p>

        <div className="w-full h-[3px] bg-orange-400 mt-6"></div>
      </section>

      {/* CONTENT */}
      <section className="px-6 sm:px-10 md:px-20 pb-16 md:pb-20">
        {loading && (
          <p className="text-center text-gray-500">Loading news...</p>
        )}

        {!loading && news.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                href={`/newsevent/${item.id}`}
                key={item.id}
                className="cursor-pointer group block"
              >
                <div className="relative w-full h-[190px] sm:h-[210px] md:h-[220px] overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {item.date && (
                  <p className="text-[#F59E0B] text-xs sm:text-sm mt-3 text-right">
                    {item.date}
                  </p>
                )}

                <h3 className="text-base font-semibold text-gray-800 mt-1 leading-snug group-hover:text-[#F59E0B] transition">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        )}

        {!loading && news.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No news available
          </p>
        )}

        <div className="flex justify-center mt-10 gap-4 items-center text-base">
          <span className="cursor-pointer hover:text-[#F59E0B]">1</span>
          <span className="cursor-pointer hover:text-[#F59E0B]">2</span>
          <span className="cursor-pointer hover:text-[#F59E0B]">3</span>

          <button className="bg-[#F59E0B] hover:bg-[#d97706] transition text-white px-3 py-1.5 rounded">
            →
          </button>
        </div>
      </section>
    </main>
  );
}