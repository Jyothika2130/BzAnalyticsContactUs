"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex h-[300px] w-full items-center overflow-hidden sm:h-[350px] md:h-[550px] lg:h-[70vh]">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-75"></div>

     
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-black/100 dark:via-black/40"></div>

      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

     
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-2xl flex-grow flex-col justify-center pt-[231px] pb-[211px]"
        >

          <div className="mb-2 flex items-center gap-2 text-2xl font-extrabold text-black/70 md:text-base dark:text-white/80">
            <span className="cursor-pointer hover:text-amber-700 dark:hover:text-amber-600">
              Home
            </span>
            <span className="font-bold">.</span>
            <span>{breadcrumb}</span>
          </div>

         
          <h1 className="text-2xl font-bold leading-none tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[60px] dark:text-white">
            {title}
          </h1>

        </motion.div>
      </div>

    </section>
  );
}