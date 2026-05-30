"use client";

import Link from "next/link";
import Image from "next/image";
import Logodonbosco from "@/assets/images/donboscologo.png";

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
            Together and united the Salesians in the DON BOSCO
TVET TIMOR-LESTE
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

              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={Logodonbosco}
                  alt="Don Bosco TVET Timor-Leste"
                  width={35}
                  height={35}
                  className="object-contain"
                />

                <div className="flex flex-col">
                  <h1 className="text-base md:text-md font-bold text-black leading-tight">
                    DON BOSCO TVET
                  </h1>
                  <p className="text-sm md:text-base font-semibold text-black leading-tight">
                    TIMOR-LESTE
                  </p>
                </div>
              </Link>

              <Image
                src="/footerImage.png"
                alt="Footer"
                width={300}
                height={300}
                className="w-46 md:w-48 h-auto object-contain"
              />

            </div>

            {/* FOLLOW */}
            <p className="text-black text-sm mb-3">
              Follow us On
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
                  width={50}
                  height={50}
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
                  width={40}
                  height={40}
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