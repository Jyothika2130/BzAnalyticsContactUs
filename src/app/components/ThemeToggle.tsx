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
    <div
      onClick={toggleTheme}
      className="fixed left-6 bottom-10 z-50 cursor-pointer border px-5 py-2.5 text-[10px] font-extrabold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-black"
    >
      {resolvedTheme === "dark" ? "Light/Dark " : "Dark/Light"}
    </div>
  );
}
