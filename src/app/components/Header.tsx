"use client";
import { FiChevronUp, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";

const navItems = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Services" },
  { name: "Success Stories" },
  { name: "Blogs" },
  { name: "Careers" },
  { name: "Contact Us" },
];

const languages = [
  { code: "en", label: "EN", flag: "/usa.png" },
  { code: "hi", label: "HI", flag: "/india.png" },
  { code: "ar", label: "AR", flag: "/uae.png" },
];

const Header = () => {
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black z-50">
      <div className="max-w-[1250px] mx-auto px-3 h-[80px] flex items-center justify-between">

       
        <img className="w-[150px] h-auto" src="/bz.png" alt="logo" />

     
        <ul className="hidden lg:flex ml-7 items-center gap-1 text-[15px] font-bold">
          <span className="text-white text-[13px]">•</span>

          {navItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="cursor-pointer hover:text-orange-500 text-white transition">
                {item.name}
              </span>

              {index !== navItems.length - 1 && (
                <span className="text-white text-[13px]">•</span>
              )}
            </li>
          ))}
        </ul>

       
        <div className="flex items-center gap-6">

        
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-2 text-white"
            >
              <img
                src={selectedLang.flag}
                className="w-6 h-6 rounded-full object-cover"
                alt="flag"
              />
              {selectedLang.label}
              {openLang ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </button>

            {openLang && (
              <div className="absolute right-0 mt-3 bg-black border border-gray-700 rounded-md shadow-lg w-[120px] z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setOpenLang(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                  >
                    <img
                      src={lang.flag}
                      className="w-5 h-5 rounded-full object-cover"
                      alt={lang.label}
                    />
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          
          <button className="hidden lg:block border me-0.5 border-white text-white font-bold px-5 py-2 hover:bg-white hover:text-black transition">
            Schedule a consultation
          </button>

          
          <button
            className="lg:hidden text-white"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      
      {openMenu && (
        <div className="lg:hidden bg-black px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="text-white border-b border-gray-700 pb-3 cursor-pointer hover:text-orange-500"
            >
              {item.name}
            </div>
          ))}

          <button className="w-full mt-4 border border-white text-white font-bold px-5 py-2 hover:bg-white hover:text-black transition">
            Schedule a consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;