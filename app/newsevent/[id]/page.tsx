import Image from "next/image";
import Link from "next/link";

import { newsData } from "@/data/news";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">News not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/newsevent" className="text-[#F59E0B] text-sm font-semibold">
          ← Back to News
        </Link>

        <p className="text-[#F59E0B] text-sm mt-8 mb-3">{news.date}</p>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          {news.title}
        </h1>

        <div className="relative w-full h-[300px] md:h-[520px] rounded-lg overflow-hidden mb-10">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <article className="max-w-none text-gray-700 leading-relaxed space-y-6 text-lg">
        <p>{news.description}</p>
        </article>
      </section>
    </main>
  );
}