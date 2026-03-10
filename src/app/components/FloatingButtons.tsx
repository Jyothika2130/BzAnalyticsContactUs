'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingButtons() {

  return (
    <div className="fixed right-10 bottom-10 z-50 flex flex-col items-center gap-4">

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-[6px_0px_15px_rgba(255,255,255,0.6)] hover:scale-110"
      >
        <FaWhatsapp className="w-6 h-6 text-amber-600" />
      </a>

    </div>
  );
}