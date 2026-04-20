import Image from "next/image";

export default function AboutNetwork() {
  return (
    <main className="w-full">
      {/* TOP SECTION */}
      <section className="relative w-full h-[600px] flex items-center justify-center">
            {/* Background Image */}
        <div className="absolute inset-0">
        <img
          src="/ourNetworkBG.jpg"
          alt=""
          className="w-full h-full object-cover"

        />
      </div>


        <div className="relative z-20 max-w-7xl w-full flex items-center justify-between px-6">
          {/* MAP */}
          <div className="w-1/2">
            <Image
              src="/mapIndo.png" // ganti sesuai asset kamu
              alt="ASEAN Map"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="w-1/2 pl-10">
            <h1 className="text-4xl font-bold text-[#F59E0B] mb-4">
              Our Networks
            </h1>
            <p className="text-gray-700 text-sm leading-relaxed max-w-md">
              Don Bosco Tech ASEAN is a network of ASEAN countries in 7 (+1)
              consisting of the Philippines, Indonesia, Thailand, Vietnam,
              Cambodia, Myanmar, Laos, Timor-Leste.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="bg-gradient-to-b from-white via-[#FFE7B3] to-[#FAFAFA] py-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 w-1/2">
            {/* OVERALL OBJECTIVE */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h2 className="text-[#F59E0B] font-semibold text-lg mb-2">
                Overall Objective
              </h2>
              <p className="text-gray-700 text-sm">
                Contribute to fighting poverty and qualifying marginalized young
                people in seven (+1) ASEAN countries.
              </p>
            </div>

            {/* PROJECT OBJECTIVES */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h2 className="text-[#F59E0B] font-semibold text-lg mb-2 text-center">
                Project Objectives
              </h2>
              <ol className="text-gray-700 text-sm list-decimal list-inside space-y-1">
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
          <div className="w-1/2 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/overallObjectives.png" // ganti sesuai asset kamu
                alt="Workshop"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
