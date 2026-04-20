"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logodonbosco from "@/assets/images/donboscologo.png";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "News & Events", path: "/newsevent" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={Logodonbosco}
            alt="Don Bosco Tech ASEAN"
            width={140}
            height={140}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative transition ${
                pathname === item.path
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {item.name}

              {/* underline active */}
              {pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`block text-lg ${
                pathname === item.path
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}