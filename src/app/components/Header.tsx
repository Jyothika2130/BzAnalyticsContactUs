"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Success Stories",
    "Blogs",
    "Careers",
    "Contact Us",
  ];

  return (
    <header className="w-full bg-black text-white px-6 space-x-[0.5px] lg:px-12 py-5 flex items-center justify-between relative">
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src="https://bzanalytics.ai/assets/bz/bq.png"
          alt="BZ Analytics"
          className="w-[120px] lg:w-[140px] h-auto object-contain"
        />
      </div>

      <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium mr-[25px]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`${inter.className} font-[14px] flex items-center gap-2 hover:text-orange-500 transition `}
          >
            <div
              className="relative
after:content-['']
after:absolute
after:left-[-14px]
after:top-0
after:bottom-0
after:my-auto
after:w-[5px]
after:h-[5px]
after:rounded-full
after:bg-current"
            >
              {item}
            </div>
          </a>
        ))}

       
       <div className="relative">
  {/* Trigger */}
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300"
  >
    <img src="/usa.png" alt="EN" className="w-5 h-5 rounded-full" />
    <span>EN</span>
    <span
      className={`transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      ▾
    </span>
  </button>

  {/* Dropdown */}
  {open && (
    <div className="absolute right-0 mt-3 z-50 w-40 rounded-md bg-[#1f1f1f] text-white shadow-lg overflow-hidden">
      
      <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-neutral-800">
        <img src="/india.png" className="w-5 h-5 rounded-full" />
        <span>HI</span>
      </button>

      <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-neutral-800">
        <img src="/uae.png" className="w-5 h-5 rounded-full" />
        <span>AR</span>
      </button>

    </div>
  )}
</div>
      </nav>

      {/* RIGHT BUTTON (Desktop Only) */}
      <div className="hidden lg:block">
        <button className="px-10 py-[15px] border border-white bg-black text-white hover:bg-white hover:text-black transition duration-300 text-[16px] font-bold">
          Schedule a Consultation
        </button>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden text-3xl"
      >
        ☰
      </button>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-black text-white transform transition-transform duration-300 z-50
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 px-6 py-8 text-[16px]">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 hover:text-gray-300"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-lg">•</span>
              {item}
            </a>
          ))}

          {/* Region Section */}
          <div className="border-t border-gray-700 pt-6">
            <p className="mb-3 text-gray-400">Region</p>
            <div className="space-y-3">
              <div className="cursor-pointer hover:text-gray-300">EN</div>
              <div className="cursor-pointer hover:text-gray-300">🇮🇳</div>
              <div className="cursor-pointer hover:text-gray-300">AR</div>
            </div>
          </div>

          {/* Mobile Button */}
          <button className="mt-6 px-6 py-3 border border-white bg-black text-white hover:bg-white hover:text-black transition duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
