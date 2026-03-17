"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navBar = [
  "Home",
  "About Us",
  "Services",
  "Success Stories",
  "Blogs",
  "Careers",
  "Contact Us",
];
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400","500"],
  display: "swap",
});
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { code: "en", label: "EN", flag: "/usa.png" },
    { code: "hi", label: "HI", flag: "/india.png" },
    { code: "ar", label: "AR", flag: "/uae.png" },
  ];

  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <nav className="fixed top-0 left-0 z-[100] flex h-[90px] w-full items-center justify-between border-b border-white/5 bg-black py-4 pr-4 pl-6 text-white transition-colors duration-300 md:pr-6 md:pl-12">
      <Link
        href="/"
        className="flex h-10 flex-shrink-0 cursor-pointer items-center md:h-12"
      >
        <Image
          src="/bz.png"
          alt="Logo"
          width={180}
          height={48}
          className="h-full w-auto object-contain invert-0 transition-all"
          priority
        />
      </Link>

      <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 whitespace-nowrap lg:flex xl:gap-5">
        {navBar.map((link) => (
          <div key={link} className="flex items-center gap-2">
            <Link
              href="#"
              className={`${plusJakarta.className} text-[14px] font-semibold text-white transition-colors hover:text-amber-600 `}
>
            <span className="text-white text-[13px] ms-1">•</span>
              <span>{link}</span>
            </Link>
          </div>
        ))}

        <div className="relative ml-2">
          <button
            onClick={() => setOpenLang(!openLang)}
            className="flex items-center gap-2 text-[14px] font-semibold text-white"
          >
            <Image
              src={selectedLang.flag}
              alt={selectedLang.label}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            {selectedLang.label}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {openLang ? (
                <path d="m18 15-6-6-6 6" />
              ) : (
                <path d="m6 9 6 6 6-6" />
              )}
            </svg>
          </button>

          {openLang && (
            <div className="absolute right-0 mt-3 w-[120px] rounded-md border border-white/10 bg-black shadow-lg">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang);
                    setOpenLang(false);
                  }}
                  className="flex cursor-pointer items-center gap-3 px-4 py-2 text-white hover:bg-zinc-800"
                >
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden items-center sm:flex">
        <Link
            href="#"
            className="hidden min-[1200px]:block bg-[#101010] relative overflow-hidden border border-white px-10 py-4 group cursor-pointer flex-shrink-0"
          >

            <span className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
            -translate-x-1/2 -translate-y-1/2 rotate-45 
            scale-0 group-hover:scale-110 
            transition-transform duration-500 ease-out"></span>

            <span className="relative z-10 text-white  group-hover:text-orange-500 transition-colors duration-300 font-extrabold  text-[17px] tracking-normal">
              Schedule a consultation
            </span>

          </Link>
      </div>

      <div
        className="flex cursor-pointer items-center rounded-full p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm"
            />

            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[120] flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-[#0a0a0a] p-8"
            >
              <div className="mb-12 flex items-center justify-between">
                <Image
                  src="/bz.png"
                  alt="Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain invert-0 transition-all"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navBar.map((link, i) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-white transition-colors hover:text-[#c17f45]"
                    >
                      {link}
                    </Link>
                    
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src="https://flagcdn.com/w40/us.png"
                      alt="EN"
                      width={40}
                      height={30}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-white">English (US)</span>
                </div>
                <button className="w-full rounded-lg bg-[#c17f45] py-4 text-sm font-extrabold tracking-widest text-black uppercase shadow-xl shadow-orange-950/20">
                  Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
