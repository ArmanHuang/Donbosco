"use client";

import { useState } from "react";

import Header from "@/components/UI/header";
import Footer from "@/components/sections/footer";

import { addPartner } from "@/lib/services/partnerShipservice";

export default function PartnershipPage() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const partnerPages = {
    1: [
      "/honda.png",
      "/seamolec.png",
      "/suzuki.png",
      "/polman.png",
      "/toyota.png",
      "/hondaa.png",
      "/toshiba.png",
      "/al-frescos.png",
      "/bangkok.png",
      "/caravelle.png",
      "/garage.png",
      "/lilama.png",
    ],
    2: [
      "/mekong.png",
      "/minhtri.png",
      "/pomina.png",
      "/saigonpaper.png",
      "/vietnamcredit.png",
      "/seah.png",
      "/reverie.png",
      "/tribe.png",
      "/vinakyoei.png",
      "/ahk.png",
      "/ekonid.png",
    ],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await addPartner(formData);

      alert("Partnership form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        mobileno: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit partnership form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="relative w-full overflow-hidden bg-[#f5f5f5]">
        {/* HERO SECTION */}
        <div className="relative w-full min-h-screen">
          <div className="absolute inset-0">
            <img
              src="/about-partnership.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-white/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <img
                src="/partnership-section-image.jpg"
                alt="Partnership"
                className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-lg object-cover shadow-2xl rounded-xl"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F59E0B] leading-tight mb-6">
                Invest in futures, transform lives.
              </h1>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Don Bosco Tech ASEAN collaborates with industries,
                institutions, and organizations to strengthen vocational
                education and empower future technical leaders across ASEAN.
              </p>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                Collaborate through industry partnerships, mentorship,
                volunteering, and sustainable development programs.
              </p>

              <button
                onClick={() => {
                  document
                    .getElementById("partners")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#F59E0B] hover:bg-[#d48a09] transition text-white font-semibold px-8 py-3 sm:py-4 rounded-lg"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* PARTNERS SECTION */}
        <div
          id="partners"
          className="relative py-20 md:py-28 lg:py-32 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about-partnership.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white/85"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-6">
              Our Partners
            </h2>

            <p className="text-gray-700 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed mb-12 md:mb-20">
              Don Bosco Tech ASEAN pays close attention to establishing
              effective, efficient, productive, and valuable networking with
              local and international institutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center">
              {partnerPages[page as keyof typeof partnerPages].map(
                (logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain mx-auto"
                  />
                )
              )}
            </div>

            <div className="flex justify-center items-center gap-5 mt-12 md:mt-20">
              <button
                onClick={() => setPage(page === 1 ? 2 : 1)}
                className="bg-[#F59E0B] hover:bg-[#d48a09] transition text-white px-3 py-2 rounded"
              >
                ←
              </button>

              <button
                onClick={() => setPage(1)}
                className={`font-semibold ${
                  page === 1 ? "text-[#F59E0B]" : "text-gray-500"
                }`}
              >
                1
              </button>

              <button
                onClick={() => setPage(2)}
                className={`font-semibold ${
                  page === 2 ? "text-[#F59E0B]" : "text-gray-500"
                }`}
              >
                2
              </button>

              <button
                onClick={() => setPage(page === 2 ? 1 : 2)}
                className="bg-[#F59E0B] hover:bg-[#d48a09] transition text-white px-3 py-2 rounded"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="bg-[#f5f5f5] py-16 md:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-6 md:mb-8">
                We would like to discuss
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                You are someone who is important to us, so please use this page
                if you have any questions or need information or want to
                register as a participant on our TVET.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Share how your organization's expertise aligns with our mission
                to empower youth through vocational training. From funding
                opportunities to industry collaboration, mentorship, or
                volunteer skills, your contributions can shape brighter futures
                in Southeast Asia.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border text-black border-gray-400 p-3 sm:p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border text-black border-gray-400 p-3 sm:p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">
                    Mobile No.
                  </label>

                  <input
                    type="text"
                    name="mobileno"
                    value={formData.mobileno}
                    onChange={handleChange}
                    required
                    className="w-full border text-black border-gray-400 p-3 sm:p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Message</label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border text-black border-gray-400 p-3 sm:p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#e68a00] transition text-white px-8 sm:px-10 py-3 sm:py-4 font-semibold rounded-lg disabled:opacity-50"
              >
                {loading ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}