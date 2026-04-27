// app/contact/page.tsx

"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "registration">("contact");

  return (
    <div className="min-h-screen ">
      {/* HERO */}
      <div className="relative h-[300px] w-full">
        <img
          src="/contactus-bg.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center px-10">
          <h1 className="text-4xl font-bold text-black">
            DON BOSCO <br /> TECH ASEAN
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-gray-700 mb-6">
          You are someone who is important to us, so please use this page if you
          have any questions or needed information.
        </p>

        {/* TAB BUTTON */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab("contact")}
            className={`font-semibold pb-1 border-b-2 transition ${
              activeTab === "contact"
                ? "text-orange-500 border-orange-500"
                : "text-gray-400 border-transparent"
            }`}
          >
            Contact Us
          </button>

          <button
            onClick={() => setActiveTab("registration")}
            className={`font-semibold pb-1 border-b-2 transition ${
              activeTab === "registration"
                ? "text-orange-500 border-orange-500"
                : "text-gray-400 border-transparent"
            }`}
          >
            Registration
          </button>
        </div>

        {/* CONDITIONAL RENDER */}
        {activeTab === "contact" ? <ContactForm /> : <RegistrationForm />}
      </div>
    </div>
  );
}

/* ================= CONTACT FORM ================= */
function ContactForm() {
  return (
    <form className="text-neutral-900 space-y-4 text-left">
      <div>
        <label className="block mb-1">Name</label>
        <input type="text" className="w-full border p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Email Address</label>
          <input type="email" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Mobile No.</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
      </div>

      <div>
        <label className="block mb-1">Subject</label>
        <input type="text" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Message</label>
        <textarea rows={5} className="w-full border p-2 rounded"></textarea>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

/* ================= REGISTRATION FORM ================= */
function RegistrationForm() {
  return (
    <form className="text-neutral-900 space-y-4 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Full Name</label>
          <input className="w-full border p-2 rounded" />
        </div>
        <div>
          <label>Last Education</label>
          <input className="w-full border p-2 rounded" />
        </div>
      </div>

      <div>
        <label>Address</label>
        <input className="w-full border p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Email Address</label>
          <input className="w-full border p-2 rounded" />
        </div>
        <div>
          <label>Mobile No.</label>
          <input className="w-full border p-2 rounded" />
        </div>
      </div>

      <div>
        <label>Country</label>
        <input className="w-full border p-2 rounded" />
      </div>

      <div>
        <label>Program</label>
        <input className="w-full border p-2 rounded" />
      </div>

      <div>
        <label>Message</label>
        <textarea rows={5} className="w-full border p-2 rounded" />
      </div>

      <div className="text-center pt-4">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
}
