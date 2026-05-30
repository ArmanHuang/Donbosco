"use client";

import React, { useState } from "react";
import { addRegister } from "@/lib/services/registerService";
import { addContact } from "@/lib/services/contactService";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "registration">(
    "contact"
  );

  return (
    <div className="min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative h-[260px] sm:h-[360px] md:h-[500px] lg:h-[700px] w-full">
        <img
          src="/contactus-bg.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* MAIN SECTION */}
      <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/about-partnership.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* TITLE */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F59E0B] mb-4">
              Get in Touch with Us
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-base">
              You are someone who is important to us, so please use this page if
              you have any questions or needed information.
            </p>
          </div>

          {/* TAB BUTTON */}
          <div className="flex justify-center gap-6 sm:gap-8 mb-10 md:mb-14">
            <button
              onClick={() => setActiveTab("contact")}
              className={`text-base sm:text-lg font-semibold pb-2 border-b-2 transition ${
                activeTab === "contact"
                  ? "text-[#F59E0B] border-[#F59E0B]"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Contact Us
            </button>

            <button
              onClick={() => setActiveTab("registration")}
              className={`text-base sm:text-lg font-semibold pb-2 border-b-2 transition ${
                activeTab === "registration"
                  ? "text-[#F59E0B] border-[#F59E0B]"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Registration
            </button>
          </div>

          {/* FORM CARD */}
          <div className="bg-white/75 backdrop-blur-sm rounded-2xl md:rounded-[30px] shadow-2xl p-5 sm:p-8 md:p-12">
            {activeTab === "contact" ? <ContactForm /> : <RegistrationForm />}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileno: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.mobileno || !form.subject) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await addContact(form);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        mobileno: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 text-left text-black">
      <div>
        <label className="block mb-2 font-medium text-base">
          Full Name
        </label>

        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none focus:border-[#F59E0B]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className="block mb-2 font-medium text-base">
            Email Address
          </label>

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none focus:border-[#F59E0B]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-base">
            Mobile No.
          </label>

          <input
            required
            name="mobileno"
            value={form.mobileno}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none focus:border-[#F59E0B]"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium text-base">
          Subject
        </label>

        <input
          required
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none focus:border-[#F59E0B]"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-base">
          Message
        </label>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none resize-none focus:border-[#F59E0B]"
        />
      </div>

      <div className="text-center pt-3 md:pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition shadow-lg disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit Message"}
        </button>
      </div>

      {success && (
        <p className="text-green-600 text-center text-base">
          ✅ Message sent successfully!
        </p>
      )}
    </form>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    lastEducation: "",
    address: "",
    email: "",
    mobileno: "",
    country: "",
    program: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.fullname ||
      !form.lastEducation ||
      !form.address ||
      !form.email ||
      !form.mobileno ||
      !form.country ||
      !form.program
    ) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await addRegister({
        name: form.fullname,
        email: form.email,
        mobileno: form.mobileno,
        subject: form.program,
        message: `Last Education: ${form.lastEducation}\nAddress: ${form.address}\nCountry: ${form.country}\n${form.message}`,
      });

      setSuccess(true);

      setForm({
        fullname: "",
        lastEducation: "",
        address: "",
        email: "",
        mobileno: "",
        country: "",
        program: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none focus:border-[#F59E0B]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 text-left text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className="block mb-2 font-medium text-base">
            Full Name
          </label>

          <input
            required
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-base">
            Last Education
          </label>

          <select
            required
            name="lastEducation"
            value={form.lastEducation}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Education</option>
            <option value="High School">High School</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor Degree">Bachelor Degree</option>
            <option value="Master Degree">Master Degree</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium text-base">
          Address
        </label>

        <input
          required
          name="address"
          value={form.address}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className="block mb-2 font-medium text-base">
            Email Address
          </label>

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-base">
            Mobile No.
          </label>

          <input
            required
            name="mobileno"
            value={form.mobileno}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium text-base">
          Country
        </label>

        <select
          required
          name="country"
          value={form.country}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select Country</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Philippines">Philippines</option>
          <option value="Thailand">Thailand</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Cambodia">Cambodia</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium text-base">
          Program
        </label>

        <select
          required
          name="program"
          value={form.program}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select Program</option>
          <option value="First Choice">First Choice</option>
          <option value="Second Choice">Second Choice</option>
          <option value="Third Choice">Third Choice</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium text-base">
          Message
        </label>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-3 sm:p-4 outline-none resize-none focus:border-[#F59E0B]"
        />
      </div>

      <div className="text-center pt-3 md:pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition shadow-lg disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit Registration"}
        </button>
      </div>

      {success && (
        <p className="text-green-600 text-center text-base">
          Registration submitted successfully!
        </p>
      )}
    </form>
  );
}