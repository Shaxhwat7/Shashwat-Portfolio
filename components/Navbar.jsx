"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/constants";

const Navbar = () => {
  const handleMenuItemClick = (href) => {
    const cleanHref = href.startsWith("/") ? href.slice(1) : href;
    const element = document.querySelector(cleanHref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-10 bg-black text-white border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold font-head tracking-wide hover:text-gray-300 transition-colors"
        >
          Shashwat
        </Link>

        <div className="flex items-center gap-4">
          {/* ✅ Animated About Button */}
          <a
            href="/Me"
            className="hidden sm:inline-block px-4 py-2 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            About Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
