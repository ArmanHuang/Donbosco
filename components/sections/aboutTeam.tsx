import Image from "next/image";

export default function AboutTeam() {
  return (
    <main className="w-full">
      {/* HERO + TIMELINE */}
      <section className="relative w-full py-20 px-6 bg-gray-100">
      <Image
        src="/about-bg.png"
        alt="Background"
        fill
        className="w-full"
      />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-6">
            Don Bosco Tech ASEAN Today
          </h1>

          <p className="text-gray-700 max-w-3xl mx-auto text-sm leading-relaxed mb-12">
            Don Bosco Tech ASEAN is a regional network formed through a
            development initiative launched in 2018 in partnership with Don
            Bosco Mondo, Germany. The initiative focuses on enhancing
            vocational training across seven (+1) ASEAN countries.
          </p>

          {/* TIMELINE */}
          <div className="relative mt-16">
            {/* line */}
            <div className="h-1 bg-[#F59E0B] w-full absolute top-1/2 -translate-y-1/2" />

            <div className="flex justify-between items-start relative">
              {/* ITEM */}
              {[
                { year: "2018", text: "Project agreement signed between Don Bosco Mondo and ASEAN countries." },
                { year: "2019", text: "Network development and collaboration across countries." },
                { year: "2022", text: "Delegation visits Bangkok fostering industry collaboration." },
                { year: "2023", text: "Central office moved to Philippines and expanded partnerships." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center w-1/4 text-center text-mist-950">
                  <div className="bg-white shadow-md rounded-xl p-4 mb-4 text-xs max-w-[180px]">
                    {item.text}
                  </div>

                  <div className="w-4 h-4 bg-[#F59E0B] rounded-full z-10" />

                  <span className="mt-2 text-[#F59E0B] font-semibold text-sm">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="relative w-full py-20 px-6 ">

        <div className="absolute inset-0 bg-yellow-200 -z-10">
        <Image
        src='/about-bg.png'
        alt="background"
        fill
        className="w-full"
        
        />
        </div>
       


   
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F59E0B] mb-12">
            Our Team
          </h2>

          {/* TEAM GRID */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { name: "Lukas Lamberts", role: "Representative of Don Bosco Mondo-Germany", img: "/lukasLamberts.png" },
              { name: "Br. Ephrem Mariano Santos, SDB", role: "Indonesian Coordinator", img: "/ephremMariano.png" },
              { name: "Fr. Gerald Ravsaco, SDB", role: "Cambodia Coordinator", img: "/geraldRayasco.png" },
              { name: "Fr. Duong Quoc Huy, SDB", role: "Vietnam Coordinator", img: "/duongHuoq.png" },
              { name: "Fr. Dindo Vitug, SDB", role: "ASEAN Coordinator", img: "/dindoVituc.png" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-4 shadow-md w-[160px]"
              >

                <h3 className="text-xs font-semibold text-[#F59E0B] mb-1">
                  {member.name}
                </h3>
                <div className="w-full h-[120px] relative mb-3">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
               
                <p className="text-[10px] text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 max-w-3xl mx-auto text-sm leading-relaxed">
            Meet the people behind Don Bosco Tech ASEAN. Our team brings
            together diverse expertise and a shared commitment to empowering
            youth through quality vocational education and training across the
            ASEAN region.
          </p>
        </div>
      </section>
    </main>
  );
}
