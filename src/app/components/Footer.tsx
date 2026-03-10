
'use client';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#131313] pt-24 pb-40 font-sans text-white">
      
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 20px)`,
          backgroundSize: '100% 100%',
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[120px]">
      
          <div className="flex-1 lg:max-w-[750px]">
           
            <div className="mb-8">
              <p className="mb-2 text-xl font-medium text-white">
                Let&apos;s start working together
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-[54px]">
                hello@bzanalytics.ai
              </h2>
            </div>

            
            <div className="mb-12 h-[1px] w-full bg-white/10"></div>

          
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4">
             
              <div className="flex flex-col justify-between">
               
                <div className="flex w-[280px] items-center">
                  <Image
                    src="/bz.png"
                    alt="Bz Analytics Logo"
                    width={280}
                    height={70}
                    className="h-auto w-full object-contain"
                  />
                </div>

                
                <div className="mt-12 flex items-center gap-5">
                  <a
                    href="#"
                    className="flex h-14 w-12 shrink-0 items-center justify-center rounded-full bg-black transition-colors hover:bg-amber-600"
                  >
                    <Linkedin className="h-6 w-6 fill-white text-white" />
                  </a>
                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black transition-colors hover:bg-amber-600"
                  >
                    <svg
                      className="h-5 w-5 fill-current text-white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black transition-colors hover:bg-amber-600"
                  >
                    <Facebook className="h-6 w-6 fill-white text-white" />
                  </a>
                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black transition-colors hover:bg-amber-600"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black transition-colors hover:bg-amber-600"
                  >
                    <FaYoutube className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-4 lg:ml-8">
                <div className="flex flex-col gap-4 pt-2 ">
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    Success Stories
                  </a>
                </div>
                <div className="flex flex-col gap-4 pt-2">
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    Blogs
                  </a>
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="text-xl font-medium tracking-wide text-gray-300 transition-colors hover:text-amber-600"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

        
          <div className="mt-8 ml-auto w-full shrink-0 lg:-mt-10 lg:mb-auto lg:w-[300px]">
            <div className="flex flex-col justify-center rounded-sm bg-[#0b0b0b] p-6 shadow-2xl sm:p-8">
              
              <div className="mb-6 flex w-full justify-center">
                <Image
                  src="/logof.png"
                  alt="Subscribe Megaphone"
                  width={160}
                  height={112}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-1 text-xl font-medium text-white">
                Subscribe now
              </h3>
              <p className="mb-4 text-xs text-gray-400">Empower Every Mind</p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-sm border border-transparent bg-[#151515] px-4 py-2 text-sm text-white transition-colors placeholder:text-gray-500 focus:border-white/20 focus:outline-none"
                />
                <button className="w-full rounded-sm bg-[#ff9100] py-2 text-sm font-semibold text-black transition-colors hover:bg-[#e68200]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
