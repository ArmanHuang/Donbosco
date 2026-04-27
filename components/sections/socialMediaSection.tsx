"use client";

import { socialData } from "@/data/social";

export default function SocialMediaSection() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(255,231,179,0.91)_0%,rgba(250,250,250,0.91)_100%)] py-20 px-6 md:px-20">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-orange-500 text-center mb-12">
        Social Media Updates
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {socialData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[30px] border border-orange-400 p-6 shadow-sm flex flex-col justify-between min-h-[260px]"
          >
            {/* TOP */}
            <div>
              {/* FB ICON + TITLE */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  f
                </div>
                <p className="font-semibold text-gray-800">
                  {item.title}
                </p>
              </div>

              {/* CONTENT */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>

            {/* BOTTOM */}
            <button className="mt-6 text-sm text-gray-500 hover:underline text-left">
              Show more
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}