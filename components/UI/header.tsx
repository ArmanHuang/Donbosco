import Image from "next/image";
import Link from "next/link";
import Logodonbosco from "@/assets/images/donboscologo.png";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div />

      <div className="relative flex items-center justify-between px-8 py-4 text-white">
        <div className="flex items-center gap-3">
          <Image
            src={Logodonbosco}
            alt="Don Bosco Tech ASEAN"
            width={200}
            height={200}
          />
          <div className="leading-tight">
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium">
          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-400 scale-x-100" />
          </Link>

          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link href="/programs" className="hover:text-yellow-400 transition">
            Programs
          </Link>

          <Link href="/newsevent" className="hover:text-yellow-400 transition">
            News & Events
          </Link>

          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  );
}
