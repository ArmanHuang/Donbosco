"use client";

import CardSlider from "../UI/cardSlider";
import { useEffect, useState } from "react";

export default function NewsSection() {
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
    <section className="relative py-16 md:py-20 lg:py-24 bg-gray-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/newsEventBg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-4">
          NEWS & EVENTS
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10 text-base leading-relaxed">
          Stay connected with us through our latest news and events. Explore our
          journey, achievements, and activities that inspire and bring our
          community together.
        </p>

        {/* Card */}
        <div className="max-w-[1200px] w-full mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 lg:p-12 min-h-[360px] md:min-h-[442px]">
          {loading && (
            <p className="text-gray-500 text-base text-justify">
              Loading news...
            </p>
          )}

          {!loading && news.length > 0 && <CardSlider data={news} />}

          {!loading && news.length === 0 && (
            <p className="text-gray-500 text-base">
              No news available
            </p>
          )}
        </div>
      </div>
    </section>
  );
}