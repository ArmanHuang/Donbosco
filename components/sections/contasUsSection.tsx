"use client";

import React, { useState } from "react";
import { addRegister } from "@/lib/services/registerService";
import { addContact } from "@/lib/services/contactService";

export default function ContactPage() {

  const [activeTab, setActiveTab] = useState<
    "contact" | "registration"
  >("contact");

  return (
    <div className="min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative h-[500px] md:h-[700px] w-full">

        {/* BACKGROUND */}
        <img
          src="/contactus-bg.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

  
      </section>

      {/* MAIN SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <img
            src="/about-partnership.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/85"></div>

        </div>

        {/* CONTAINER */}
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-4">
              Get in Touch with Us
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              You are someone who is important to us,
              so please use this page if you have any
              questions or needed information.
            </p>

          </div>

          {/* TAB BUTTON */}
          <div className="flex justify-center gap-8 mb-14">

            {/* CONTACT */}
            <button
              onClick={() => setActiveTab("contact")}
              className={`text-lg font-semibold pb-2 border-b-2 transition ${
                activeTab === "contact"
                  ? "text-[#F59E0B] border-[#F59E0B]"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Contact Us
            </button>

            {/* REGISTRATION */}
            <button
              onClick={() => setActiveTab("registration")}
              className={`text-lg font-semibold pb-2 border-b-2 transition ${
                activeTab === "registration"
                  ? "text-[#F59E0B] border-[#F59E0B]"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Registration
            </button>

          </div>

          {/* FORM CARD */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[30px] shadow-2xl p-8 md:p-12">

            {activeTab === "contact" ? (
              <ContactForm />
            ) : (
              <RegistrationForm />
            )}

          </div>

        </div>

      </section>

    </div>
  );
}

/* ===================================================== */
/* CONTACT FORM */
/* ===================================================== */

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    // VALIDATION
    if (
      !form.name ||
      !form.email ||
      !form.mobileno ||
      !form.subject
    ) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {

      await addContact(form);

      setSuccess(true);

      // RESET
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-left text-black"
    >

      {/* NAME */}
      <div>

        <label className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
        />

      </div>

      {/* EMAIL + MOBILE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* EMAIL */}
        <div>

          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
          />

        </div>

        {/* MOBILE */}
        <div>

          <label className="block mb-2 font-medium">
            Mobile No.
          </label>

          <input
            required
            name="mobileno"
            value={form.mobileno}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
          />

        </div>

      </div>

      {/* SUBJECT */}
      <div>

        <label className="block mb-2 font-medium">
          Subject
        </label>

        <input
          required
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
        />

      </div>

      {/* MESSAGE */}
      <div>

        <label className="block mb-2 font-medium">
          Message
        </label>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none resize-none focus:border-[#F59E0B]"
        />

      </div>

      {/* BUTTON */}
      <div className="text-center pt-4">

        <button
          type="submit"
          disabled={loading}
          className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-10 py-4 rounded-xl transition shadow-lg"
        >
          {loading ? "Sending..." : "Submit Message"}
        </button>

      </div>

      {/* SUCCESS */}
      {success && (
        <p className="text-green-600 text-center">
          ✅ Message sent successfully!
        </p>
      )}

    </form>
  );
}

/* ===================================================== */
/* REGISTRATION FORM */
/* ===================================================== */

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
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    // VALIDATION
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

      // RESET
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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-left text-black"
    >

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* FULL NAME */}
        <div>

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            required
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
          />

        </div>

        {/* LAST EDUCATION */}
        <div>

          <label className="block mb-2 font-medium">
            Last Education
          </label>

          <select
            required
            name="lastEducation"
            value={form.lastEducation}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
          >

            <option value="">
              Select Education
            </option>

            <option value="High School">
              High School
            </option>

            <option value="Diploma">
              Diploma
            </option>

            <option value="Bachelor Degree">
              Bachelor Degree
            </option>

            <option value="Master Degree">
              Master Degree
            </option>

          </select>

        </div>

      </div>

      {/* ADDRESS */}
      <div>

        <label className="block mb-2 font-medium">
          Address
        </label>

        <input
          required
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
        />

      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* EMAIL */}
        <div>

          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
          />

        </div>

        {/* MOBILE */}
        <div>

          <label className="block mb-2 font-medium">
            Mobile No.
          </label>

          <input
            required
            name="mobileno"
            value={form.mobileno}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
          />

        </div>

      </div>

      {/* COUNTRY */}
      <div>

        <label className="block mb-2 font-medium">
          Country
        </label>

        <select
          required
          name="country"
          value={form.country}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
        >

          <option value="">
            Select Country
          </option>

          <option value="Indonesia">
            Indonesia
          </option>

          <option value="Philippines">
            Philippines
          </option>

          <option value="Thailand">
            Thailand
          </option>

          <option value="Vietnam">
            Vietnam
          </option>

          <option value="Cambodia">
            Cambodia
          </option>

        </select>

      </div>

      {/* PROGRAM */}
      <div>

        <label className="block mb-2 font-medium">
          Program
        </label>

        <select
          required
          name="program"
          value={form.program}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none focus:border-[#F59E0B]"
        >

          <option value="">
            Select Program
          </option>

          <option value="First Choice">
            First Choice
          </option>

          <option value="Second Choice">
            Second Choice
          </option>

          <option value="Third Choice">
            Third Choice
          </option>

        </select>

      </div>

      {/* MESSAGE */}
      <div>

        <label className="block mb-2 font-medium">
          Message
        </label>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/90 rounded-lg p-4 outline-none resize-none focus:border-[#F59E0B]"
        />

      </div>

      {/* BUTTON */}
      <div className="text-center pt-4">

        <button
          type="submit"
          disabled={loading}
          className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-10 py-4 rounded-xl transition shadow-lg"
        >
          {loading ? "Sending..." : "Submit Registration"}
        </button>

      </div>

      {/* SUCCESS */}
      {success && (
        <p className="text-green-600 text-center">
          Registration submitted successfully!
        </p>
      )}

    </form>
  );
}