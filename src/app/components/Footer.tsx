"use client";

import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const menuColumn1 = ["Home", "About Us", "Services", "Success Stories"];
const menuColumn2 = ["Blogs", "Careers", "Contact Us"];

const socialIcons = [
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaXTwitter />, link: "#" },
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);


    setTimeout(() => {
      setLoading(false);
      setSuccess("Subscribed successfully!");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="w-full bg-[#111] text-white">
      <div className="max-w-[1375px] mx-auto px-6 py-12 lg:py-16">

        <div className="text-center lg:text-left">
          <p className="text-[20px] md:text-[24px] font-medium text-gray-300">
            Let’s start working together
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 hover:text-orange-400 transition cursor-pointer">
            hello@bzanalytics.ai
          </h2>
        </div>

        <hr className="my-8 md:my-10 w-full border-t border-gray-700/60" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="flex flex-col items-center lg:items-start space-y-8">
            <img
              src="/bz.png"
              alt="logo"
              className="w-[180px] md:w-[220px]"
            />

            <div className="flex gap-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center hover:bg-orange-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>


          <div className="grid grid-cols-2 gap-8 text-center lg:text-left mt-6 lg:mt-0">
            <div className="space-y-4">
              {menuColumn1.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              {menuColumn2.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

   
          <div className="bg-[#0000004D] p-6 md:p-8 rounded-xl space-y-6 text-center lg:mt-0 mt-6">
            <div className="flex justify-center">
              <img
                src="/logof.png"
                alt="subscribe"
                className="w-20 md:w-24"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold">Subscribe now</h3>

            <p className="text-gray-400">Empower Every Mind</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-black border px-4 py-3 outline-none transition
                ${error ? "border-red-500" : "border-gray-700 focus:border-orange-400"}`}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              {success && <p className="text-green-500 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 py-3 hover:bg-white hover:text-orange-400 transition font-medium disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



