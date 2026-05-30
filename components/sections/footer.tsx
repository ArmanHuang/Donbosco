"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        bg-[linear-gradient(180deg,rgba(255,231,179,0.91)_0%,rgba(250,250,250,0.91)_100%)]
        px-5
        py-6
        md:py-8
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <div className="flex justify-center mb-10">

          <h2
            className="
              text-sm
              sm:text-base
              md:text-xl
              text-black
              font-semibold
              leading-relaxed
              text-center
              max-w-3xl
            "
          >
            Together and united the Salesians in the Don Bosco Tech ASEAN
            network serve to develop marginalized youth people through training
            centers
          </h2>

        </div>

        {/* BOTTOM SECTION */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-start
            gap-8
          "
        >

          {/* LEFT SIDE */}
          <div>

            {/* LOGOS */}
            <div className="flex items-center gap-4 mb-4">

              <Image
                src="/donboscologo.png"
                alt="Logo"
                width={140}
                height={140}
                className="w-32 md:w-40 h-auto object-contain"
              />

              <Image
                src="/footerImage.png"
                alt="Footer"
                width={220}
                height={120}
                className="w-36 md:w-48 h-auto object-contain"
              />

            </div>

            {/* FOLLOW */}
            <p className="text-black text-sm mb-3">
              Follow us ON
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-5">

              <a
                href="https://www.instagram.com/dbtechasean/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.facebook.com/dbtechasean/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/FB.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition"
                />
              </a>

              <a
                href="https://twitter.com/dbtechasean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/x.png"
                  alt="X"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/dbtechasean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition"
                />
              </a>

            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="md:self-end">
            <p className="text-xs text-gray-700">
              Copyright © {new Date().getFullYear()} DON BOSCO TVET TIMOR-LESTE.
              All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}