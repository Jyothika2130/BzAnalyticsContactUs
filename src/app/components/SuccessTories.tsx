'use client';

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";
interface CardItem {
  title: string;
  img: string;
  desc: string;
}

const cards: CardItem[] = [
  { title: "Metaverse & Gaming", img: "/img1.jpg", desc: "Empowering Metaverse & Gaming with Innovative Solutions." },
  { title: "Energy & Manufacturing", img: "/img2.jpg", desc: "Optimizing Operations: Solutions for Energy & Manufacturing." },
  { title: "SDG", img: "/img3.jpg", desc: "Tech-Driven Sustainability: Achieving Goals with Innovation." },
  { title: "Healthcare", img: "/img4.jpg", desc: "Revolutionizing Healthcare: Better Patient Care through Innovation." },
  { title: "Textile", img: "/img5.jpg", desc: "Digital Transformation in Textile: Innovation-Led Progress." },
  { title: "Corporate", img: "/img6.jpg", desc: "Strategic Solutions for Corporate Success." },
  { title: "Advertising", img: "/img7.jpg", desc: "Elevating Brands: Creative Solutions for Advertising." },
  { title: "PSU", img: "/img8.jpg", desc: "Efficiency Redefined: Excellence in Public Sector Undertakings." },
  { title: "Finance", img: "/img9.jpg", desc: "Transforming Finance: Cutting-Edge Solutions." },
];

const CARD_WIDTH = 380;
const GAP = 24;
const VISIBLE_CARDS = 4;

export default function SuccessStories() {
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = cards.length - VISIBLE_CARDS;

  const nextSlide = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <>
    <section className="w-full bg-white dark:bg-black py-10 mt-40 overflow-hidden">
      <div className="relative px-5">

        {/* LEFT ARROW */}
{startIndex > 0 && (
  <button
    onClick={prevSlide}
    className="
    absolute left-2 top-1/2 -translate-y-1/2 z-40
    w-[28px] h-[60px]
    bg-black text-white
    border border-white border-2
    rounded-2xl
    overflow-hidden
    flex items-center justify-center
    group
    transition-all duration-500
    cursor-pointer
    "
  >
    {/* Sweep Animation */}
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
    />

    {/* Arrow */}
    <span className="relative z-10 text-white text-2xl font-bold group-hover:text-orange-500 transition-colors duration-300">
      ‹
    </span>
  </button>
)}

{/* RIGHT ARROW */}
{startIndex < maxIndex && (
  <button
    onClick={nextSlide}
    className="
    absolute right-2 top-1/2 -translate-y-1/2 z-40
   w-[28px] h-[60px]
    bg-black text-white
    border border-white border-2
    rounded-2xl
    overflow-hidden
    flex items-center justify-center
    group
    transition-all duration-500
    cursor-pointer
    "
  >
    {/* Sweep Animation */}
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
    />

    {/* Arrow */}
    <span className="relative z-10 text-white text-2xl font-bold  group-hover:text-orange-500 transition-colors duration-300">
      ›
    </span>
  </button>
)}

        {/* VIEWPORT */}
        <div className="overflow-hidden pr-[120px]">
          <div
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${startIndex * (CARD_WIDTH + GAP)}px)`
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="group/card relative w-[380px] h-[250px] flex-shrink-0 rounded-[10px] overflow-hidden cursor-pointer
           transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
           group-hover:translate-x-3 hover:!translate-x-0
           hover:scale-110 hover:z-20"
              >
                {/* Image */}
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover "
                />

                {/* Overlay */}
                <div className="absolute inset-0  transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-10 w-fit p-4 bg-black opacity-60 mb-0">
                  <h3 className="text-white text-[20px]  font-semibold">
                    {card.title}
                  </h3>

                  
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>



<section className="w-full px-2 sm:px-1  bg-white dark:bg-black" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 mx-60">
          <div className="flex flex-col gap-y-2 md:gap-y-2  md:text-left">
           <span className=" w-2 h-2 rounded-full bg-yellow-600" />

            <p className="dark:text-[#eaeaea] uppercase text-base">
             What we’re offering
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px]  font-extrabold leading-tight">
              What your business needs,
            </h2>
          </div>

          <div className="mt-6 md:mt-20">
            <ul className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10">
              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                BzAnalytics works with the world's leading Enterprises, SMEs & Startups – 
              to plan, develop, test and expand their digital initiatives.
              </li>

              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                We assure your business grows with innovative and sustainable technologies 
              built to brand your identity.
              </li>
            </ul>
          </div>
        </div>
      </section>

    <section className="w-full  bg-white dark:bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      {/* cards */}
      <div
        className="w-full theme-bg 
py-12 sm:py-14 md:py-16
px-4 sm:px-6 md:px-8
 lg:-mt-[20px]  
"
      >
       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_1.jpg"
              alt="UX Design"
              className="w-full h-[350px] object-cover"
            />

            {/* Orange Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">UX/UI</span>
                  <span className="block text-2xl sm:text-3xl">Design</span>
                </p>
              </div>
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Enhancing user experiences through research, wireframes, and
                prototypes, creating visually appealing and user-friendly
                interfaces.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-sm  overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_2.jpg"
              alt="UX Design 2"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">On Demand</span>
                  <span className="block text-2xl sm:text-3xl">Product</span>
                  <span className="block text-2xl sm:text-3xl">Team</span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Flexible teams for custom software development, scaling, and
                extending your internal team's capabilities, led by dedicated
                developers and product owners.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_3.jpg"
              alt="UX Design 3"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">Mobile App</span>
                  <span className="block text-2xl sm:text-3xl">
                    Development
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Building iOS and Android apps, including cross-platform
                development using Flutter, tailored for both consumer and
                enterprise needs.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_4.jpg"
              alt="UX Design 4"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">Web</span>
                  <span className="block text-2xl sm:text-3xl">
                    Development
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Crafting websites, web applications, and custom software, along
                with creating web portals for specific business purposes.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 text-white ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}