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
          {/* ✅ About Me with animated underline */}
          <a
            href="/Me"
            className="relative hidden sm:inline-block px-4 py-2 rounded-md text-sm font-medium text-white bg-black
                       after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                       after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
