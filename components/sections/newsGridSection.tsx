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
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="/news-bg.jpg"
          alt="News Banner"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F59E0B]">
          News & Events
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm">
          Further sustainable growth of these works could be ensured through a
          networking of the Salesians of Don Bosco in the ASEAN region.
        </p>

        <div className="w-full h-[3px] bg-orange-400 mt-6"></div>
      </section>

      <section className="px-6 md:px-20 pb-20">
        {loading && (
          <p className="text-center text-gray-500">Loading news...</p>
        )}

        {!loading && news.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                href={`/newsevent/${item.id}`}
                key={item.id}
                className="cursor-pointer group block"
              >
                <div className="relative w-full h-[180px] overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {item.date && (
                  <p className="text-[#F59E0B] text-xs mt-2 text-right">
                    {item.date}
                  </p>
                )}

                <h3 className="text-sm font-semibold text-gray-800 mt-1 leading-snug group-hover:text-[#F59E0B] transition">
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

        <div className="flex justify-center mt-10 gap-3 items-center">
          <span className="cursor-pointer">1</span>
          <span className="cursor-pointer">2</span>
          <span className="cursor-pointer">3</span>
          <button className="bg-[#F59E0B] text-white px-2 py-1 rounded">
            →
          </button>
        </div>
      </section>
    </main>
  );
}