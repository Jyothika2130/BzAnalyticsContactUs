'use client';

import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingButtons() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-10 bottom-10 z-50 flex flex-col items-center gap-4">

      <button
        onClick={scrollToTop}
        className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c17f45] bg-white text-[#c17f45] shadow-2xl shadow-black transition-colors hover:scale-105 hover:bg-[#c17f45] hover:text-white dark:bg-black dark:hover:text-black"
      >
        <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
      </button>

      <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-white shadow-2xl shadow-black transition-transform hover:scale-105 dark:border-white/20 dark:bg-black">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-black">
          <FaWhatsapp className="text-2xl text-orange-500" />
        </div>
      </div>

    </div>
  );
}