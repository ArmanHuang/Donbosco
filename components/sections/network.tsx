"use client";

export default function NetworkPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/cta-bg.jpg"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold  text-[#F59E0B] mb-6">
            Don Bosco Tech Building Youth’s Future
          </h1>

          <p className="max-w-xl text-black text-lg leading-relaxed mb-6">
            Don Bosco Tech ASEAN’s innovative and holistic technical and
            vocational education and training gives youth the skills and
            information they need to succeed in today’s world. Don Bosco Tech
            prepares young people to be productive and responsible citizens,
            helping Southeast Asia’s economy and society.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
            Explore More
          </button>
        </div>
      </section>
      




    </div>
  );
}
