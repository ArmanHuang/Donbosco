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
      {/* HEADER */}
      <Header />

      <section className="relative w-full overflow-hidden bg-[#f5f5f5]">
        {/* HERO SECTION */}
        <div className="relative w-full min-h-screen">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/about-partnership.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/partnership-section-image.jpg"
                alt="Partnership"
                className="w-full max-w-lg object-cover shadow-2xl"
              />
            </div>

            {/* Right Text */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#F59E0B] leading-tight mb-6">
                Invest in futures, transform lives.
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                DON BOSCO
TVET TIMOR-LESTE collaborates with industries,
                institutions, and organizations to strengthen
                vocational education and empower future technical
                leaders across ASEAN.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Collaborate through industry partnerships,
                mentorship, volunteering, and sustainable
                development programs.
              </p>

              {/* Learn More Button */}
              <button
                onClick={() => {
                  document
                    .getElementById("partners")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#F59E0B] hover:bg-[#d48a09] transition text-white font-semibold px-8 py-4 rounded-lg"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* PARTNERS SECTION */}
        <div
          id="partners"
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about-partnership.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-[#F59E0B] mb-6">
              Our Partners
            </h2>

            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-20">
              DON BOSCO
TVET TIMOR-LESTE pays close attention to
              establishing effective, efficient, productive,
              and valuable networking with local and
              international institutions.
            </p>

            {/* Partner Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center">
              {partnerPages[page as keyof typeof partnerPages].map(
                (logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Partner ${index}`}
                    className="h-24 object-contain mx-auto"
                  />
                )
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-5 mt-20">
              {/* Prev */}
              <button
                onClick={() => setPage(page === 1 ? 2 : 1)}
                className="bg-[#F59E0B] hover:bg-[#d48a09] transition text-white px-3 py-2"
              >
                ←
              </button>

              {/* Page 1 */}
              <button
                onClick={() => setPage(1)}
                className={`font-semibold ${
                  page === 1
                    ? "text-[#F59E0B]"
                    : "text-gray-500"
                }`}
              >
                1
              </button>

              {/* Page 2 */}
              <button
                onClick={() => setPage(2)}
                className={`font-semibold ${
                  page === 2
                    ? "text-[#F59E0B]"
                    : "text-gray-500"
                }`}
              >
                2
              </button>

              {/* Next */}
              <button
                onClick={() => setPage(page === 2 ? 1 : 2)}
                className="bg-[#F59E0B] hover:bg-[#d48a09] transition text-white px-3 py-2"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="bg-[#f5f5f5] py-28">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
            {/* Left Text */}
            <div>
              <h2 className="text-5xl font-bold text-[#F59E0B] mb-8">
                We would like to discuss
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                You are someone who is important to us,
                so please use this page if you have any
                questions or need information or want
                to register as a participant on our TVET.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Share how your organization's expertise
                aligns with our mission to empower youth
                through vocational training. From funding
                opportunities to industry collaboration,
                mentorship, or volunteer skills, your
                contributions can shape brighter futures
                in Southeast Asia.
              </p>
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border text-black border-gray-400 p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                />
              </div>

              {/* Email & Mobile */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Email */}
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
                    className="w-full border text-black border-gray-400 p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                  />
                </div>

                {/* Mobile */}
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
                    className="w-full border text-black border-gray-400 p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border  text-black border-gray-400 p-4 bg-transparent outline-none focus:border-[#F59E0B]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#F59E0B] hover:bg-[#e68a00] transition text-white px-10 py-4 font-semibold rounded-lg disabled:opacity-50"
              >
                {loading ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}