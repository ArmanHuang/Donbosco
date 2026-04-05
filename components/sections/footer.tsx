"use client";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,rgba(255,231,179,0.91)_0%,rgba(250,250,250,0.91)_100%)] py-16 text-center px-6">
      
      <h2 className="text-2xl md:text-3xl text-neutral-700 font-semibold max-w-3xl mx-auto mb-10 leading-relaxed">
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

      <div className="flex flex-row items-center gap-6">
      <div className="flex gap-6 text-orange-600 text-lg font-medium">
        <a href="https://instagram.com" target="_blank">
            <span className="text-pink-500"><FaInstagram /></span>
        </a>
        
        <a href="https://facebook.com" target="_blank">
            <span className="text-blue-600"><FaFacebookF /></span>
        </a>

        <a href="https://x.com" target="_blank">
            <span className="text-blue-400"><FaTwitter /></span>
        </a>

        <a href="https://linkedin.com" target="_blank">
            <span className="text-blue-700"><FaLinkedinIn /></span>
        </a>
        </div>

      </div>

      <p className="mt-10 text-sm text-gray-700">
        Copyright © {new Date().getFullYear()} Don Bosco Tech ASEAN. All Rights Reserved.
      </p>
      
    </footer>
  );
}