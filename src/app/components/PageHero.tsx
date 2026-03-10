"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex h-[300px] w-full items-center overflow-hidden sm:h-[350px] md:h-[550px] lg:h-[60vh]">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-70"></div>

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent dark:from-black/80 dark:via-black/40"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-3xl flex-grow flex-col justify-start pt-16 md:pt-32"
        >

          {/* Breadcrumb */}
          <div className="mb-2 flex items-center gap-2 text-[17px] font-semibold text-black/70 md:text-lg dark:text-white/90">
            <span className="cursor-pointer hover:text-black dark:hover:text-white">
              Home
            </span>
            <span className="font-bold">.</span>
            <span>{breadcrumb}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-none tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[90px] dark:text-white">
            {title}
          </h1>

        </motion.div>
      </div>

    </section>
  );
}