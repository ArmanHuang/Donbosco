// app/contact/page.tsx

"use client";

import React, { useState } from "react";
import { addRegister } from "@/lib/services/registerService";
import { addContact } from "@/lib/services/contactService";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "registration">("contact");

  return (
    <div className="min-h-screen ">
      {/* HERO */}
      <div className="relative h-[700px] w-full">
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

    setLoading(true);
    setSuccess(false);

    try {
      await addContact(form);

      setSuccess(true);

      // reset form
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
    <form onSubmit={handleSubmit} className="text-neutral-900 space-y-4 text-left">
      
      <div>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Mobile No.</label>
          <input
            name="mobileno"
            value={form.mobileno}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div>
        <label>Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>

      {success && (
        <p className="text-green-600 text-center">
          ✅ Message sent successfully!
        </p>
      )}
    </form>
  );
}

/* ================= REGISTRATION FORM ================= */
function RegistrationForm() {
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

    setLoading(true);
    setSuccess(false);

    try {
      await addRegister(form);

      setSuccess(true);

      // reset form
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
    <form onSubmit={handleSubmit} className="text-neutral-900 space-y-4 text-left">
      
      <div>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Mobile No.</label>
          <input
            name="mobileno"
            value={form.mobileno}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div>
        <label>Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>

      {success && (
        <p className="text-green-600 text-center">
          ✅ Message sent successfully!
        </p>
      )}
    </form>
  );
}