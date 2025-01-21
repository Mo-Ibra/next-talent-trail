"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 bg-white dark:bg-inherit ${
        isScrolled ? "shadow-md dark:border-b dark:border-white/[0.2]" : ""
      }`}
    >
      <div className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
