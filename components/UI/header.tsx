"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logodonbosco from "@/assets/images/donboscologo.png";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const programs = [
    { name: "Philippines", path: "/programs/philippines" },
    { name: "Indonesia", path: "/programs/indonesia" },
    { name: "Cambodia", path: "/programs/cambodia" },
    { name: "Timor Leste", path: "/programs/timorleste" },
    { name: "Thailand", path: "/programs/thailand" },
    { name: "Laos", path: "/programs/laos" },
    { name: "Myanmar", path: "/programs/myanmar" },
    { name: "Vietnam", path: "/programs/vietnam" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News & Events", path: "/newsevent" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Image
              src={Logodonbosco}
              alt="Don Bosco Tech ASEAN"
              width={140}
              height={140}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-black">
          <Link
            href="/"
            className={`relative transition ${
              pathname === "/" ? "text-yellow-400" : "hover:text-yellow-400"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400" />
            )}
          </Link>

          <Link
            href="/about"
            className={`relative transition ${
              pathname === "/about"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400" />
            )}
          </Link>

          {/* Programs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <button
              className={`relative transition ${
                pathname.startsWith("/programs")
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              Programs ▾

              {pathname.startsWith("/programs") && (
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400" />
              )}
            </button>

            {programOpen && (
              <div className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-lg border py-2">
                {programs.map((program) => (
                  <Link
                    key={program.path}
                    href={program.path}
                    className={`block px-4 py-3 text-base transition ${
                      pathname === program.path
                        ? "text-yellow-400"
                        : "text-black hover:bg-yellow-400 hover:text-white"
                    }`}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/newsevent"
            className={`relative transition ${
              pathname === "/newsevent"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            News & Events
            {pathname === "/newsevent" && (
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400" />
            )}
          </Link>

          <Link
            href="/contact"
            className={`relative transition ${
              pathname === "/contact"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            Contact
            {pathname === "/contact" && (
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400" />
            )}
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 pb-6 space-y-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block text-lg ${
              pathname === "/" ? "text-yellow-400" : "hover:text-yellow-400"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={`block text-lg ${
              pathname === "/about"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            About
          </Link>

          {/* Mobile Programs Dropdown */}
          <div>
            <button
              onClick={() => setProgramOpen(!programOpen)}
              className={`block text-lg ${
                pathname.startsWith("/programs")
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              Programs ▾
            </button>

            {programOpen && (
              <div className="ml-4 mt-3 space-y-3">
                {programs.map((program) => (
                  <Link
                    key={program.path}
                    href={program.path}
                    onClick={() => {
                      setOpen(false);
                      setProgramOpen(false);
                    }}
                    className={`block text-base ${
                      pathname === program.path
                        ? "text-yellow-400"
                        : "hover:text-yellow-400"
                    }`}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/newsevent"
            onClick={() => setOpen(false)}
            className={`block text-lg ${
              pathname === "/newsevent"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            News & Events
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`block text-lg ${
              pathname === "/contact"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}