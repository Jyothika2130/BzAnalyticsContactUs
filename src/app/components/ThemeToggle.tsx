"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
  onClick={toggleTheme}
  className="
  fixed bottom-[15px] left-[15px] z-[1000]
  bg-black text-white
  text-[15px] font-extrabold
  px-[7px] py-[5px]
  border border-white
  overflow-hidden
  transition-all duration-500
  cursor-pointer
  group
  "
>
  

  <span
    className="
    absolute left-1/2 top-1/2
    w-[150%] h-0
    bg-white
    -translate-x-1/2 -translate-y-1/2
    rotate-[-25deg]
    transition-all duration-300
    group-hover:h-[400%]
    -z-10
    "
  ></span>

 
  <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
    Light / Dark
  </span>

</button>
  );
}
 