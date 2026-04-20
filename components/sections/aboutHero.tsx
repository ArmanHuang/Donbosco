import Image from "next/image";

export default function AboutUs() {
  return (
<main className="bg-gradient-to-b from-white via-[#FFE7B3] to-[#FAFAFA] min-h-screen">      {/* HERO IMAGE */}
      <section className="relative w-full mt-20">
        <Image
          src="/aboutUsBanner.png" // ganti dengan gambar kamu
          alt="About Hero"
          width={1920}
          height={500}
          className="w-full h-[350px] object-cover"
        />
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start ">
        {/* LEFT TEXT */}
        <div >
          <h1 className="text-5xl font-bold text-[#F59E0B] mb-6">
            About Us
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Don Bosco Tech ASEAN is a network of seven (+1) ASEAN countries to
            build common understanding and effective communication in efforts
            to contribute to fighting poverty and improving the quality of
            marginalized young people through the development of TVET
            (Technical and Vocational Education and Training) centers.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Don Bosco Tech ASEAN has played an active role in developing 36
            TVET centers with a total of around 9,000 students who are
            accompanied by around 800 qualified and certified trainers and
            staffs. All of it spread in 7 (+1) ASEAN countries. Our project
            target is to develop and foster marginalized young people reaching
            27,000 students.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our indirect targets are the development of the family and social
            environment of the trainees, government institutions in the area of
            developing TVET centers, collaborating with companies as training
            partners and prospective employers.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our member countries are Philippines, Indonesia, Thailand,
            Cambodia, Vietnam, Myanmar, Laos and Timor-Leste. In our efforts,
            we collaborate intensively, effectively and continuously with
            various local and international scale institutions, government
            institutions and private sector.
          </p>
        </div>

        {/* RIGHT IMAGE (SUDAH OVERLAP DALAM 1 FILE) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/aboutUsImage.png" // ini gambar yang sudah overlap 3 foto
            alt="About Images"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}
