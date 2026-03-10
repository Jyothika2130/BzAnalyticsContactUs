"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgressCircle = () => {
  const [scroll, setScroll] = useState(0);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const stroke = 1; 
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - scroll / 100);

  return (
    <div
      className="fixed bottom-22 right-6 z-50 cursor-pointer"
      onClick={scrollToTop}
    >
      <svg width="64" height="64" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#fb923c"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
          className="transition-all duration-150 ease-out"
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-400">
        <FaArrowUp className="w-5 h-6" />
      </div>
    </div>
  );
};

export default ScrollProgressCircle;