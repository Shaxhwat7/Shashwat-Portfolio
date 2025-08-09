"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-10 bg-black text-white border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold font-head tracking-wide hover:text-gray-300 transition-colors"
        >
          Shashwat
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/Me"
            className="relative inline-block px-4 py-2 rounded-md text-sm font-medium text-white bg-black
                       after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                       after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-[2px] bg-white mb-1"></span>
          <span className="block w-6 h-[2px] bg-white mb-1"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black border-t border-gray-800">
          <a
            href="/Me"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            About
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
