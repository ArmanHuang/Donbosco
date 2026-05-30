import Image from "next/image";

export default function AboutNetwork() {
  return (
    <main className="w-full overflow-hidden">
      {/* TOP SECTION */}
      <section className="relative min-h-[700px] md:min-h-[600px] flex items-center justify-center py-16 md:py-0">
        

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* CONTENT */}
        <div className="relative z-50 max-w-7xl w-full px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* MAP */}
          <div className="flex justify-center">
            <Image
              src="/world.png"
              alt="ASEAN Map"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain w-full max-w-[320px] sm:max-w-[450px] md:max-w-[650px]"
            />
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F59E0B] mb-4">
              Our Networks
            </h1>

            <p className="text-gray-700 text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Don Bosco Tech ASEAN is a network of ASEAN countries in 7 (+1)
              consisting of the Philippines, Indonesia, Thailand, Vietnam,
              Cambodia, Myanmar, Laos, and Timor-Leste.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="bg-gradient-to-b from-white via-[#FFE7B3] to-[#FAFAFA] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            {/* OVERALL OBJECTIVE */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h2 className="text-[#F59E0B] font-semibold text-lg mb-2">
                Overall Objective
              </h2>

              <p className="text-gray-700 text-base leading-relaxed">
                Contribute to fighting poverty and qualifying marginalized young
                people in seven (+1) ASEAN countries.
              </p>
            </div>

            {/* PROJECT OBJECTIVES */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h2 className="text-[#F59E0B] font-semibold text-lg mb-4 text-center">
                Project Objectives
              </h2>

              <ol className="text-gray-700 text-base list-decimal list-inside space-y-3 leading-relaxed">
                <li>
                  Increased placement-rate and training-appropriate (and
                  accordingly paid) employment amongst TVET Graduates.
                </li>

                <li>
                  Strengthened contribution to social transformation.
                </li>

                <li>
                  Increased influence on regional and national TVET policies and
                  implementation schemes.
                </li>
              </ol>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px]">
              <Image
                src="/overallObjectives.png"
                alt="Workshop"
                width={500}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}