"use client";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,rgba(255,231,179,0.91)_0%,rgba(250,250,250,0.91)_100%)] py-5 text-center px-4">
      
      <h2 className="text-2xl md:text-3xl text-black font-semibold max-w-3xl mx-auto mb-10 leading-relaxed">
        Together and united the Salesians in the Don Bosco Tech ASEAN network
        serve to develop marginalized youth people through training centers
      </h2>

      <div className="flex flex-row items-center gap-6">
        <img src="/donboscologo.png" alt="Logo" className="h-12" />
        <img src="/footerImage.png" alt="Logo" className="" />


      </div>
    
      <div className="flex flex-row">
      <p className="text-black">Follow us ON</p>

      </div>

      <div className="flex gap-6 items-center">

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/dbtechasean/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/instagram.png"
          alt="Instagram"
          className="w-10 h-10 object-contain hover:scale-110 transition"
        />
      </a>

      {/* FACEBOOK */}
      <a
        href="https://www.facebook.com/dbtechasean/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/FB.png"
          alt="Facebook"
          className="w-8 h-8 object-contain hover:scale-110 transition"
        />
      </a>

      {/* X / TWITTER */}
      <a
        href="https://twitter.com/dbtechasean"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/x.png"
          alt="X"
          className="w-15 h-15 object-contain hover:scale-110 transition"
        />
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/company/dbtechasean"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          className="w-12 h-12 object-contain hover:scale-110 transition"
        />
      </a>

    </div>

      <p className="mt-10 text-sm text-gray-700">
        Copyright © {new Date().getFullYear()} Don Bosco Tech ASEAN. All Rights Reserved.
      </p>
      
    </footer>
  );
}