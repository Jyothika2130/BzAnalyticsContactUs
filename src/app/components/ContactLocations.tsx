"use client";

import Image from "next/image";

const locations = [
  {
    id: 1,
    country: "India",
    flag: "/india.png",
    address: [
      "International Solution for Free and Open Source",
      "Software ICFOSS, Karyavattom,",
      "Thiruvananthapuram",
    ],
    email: "hello@bzanalytics.ai",
    phones: ["+91 999 5285 233", "+91 974 570 7677"],
  },
  {
    id: 2,
    country: "UAE",
    flag: "/uae.png",
    address: [
      "Office# 1703, 17th Floor, Musalla Towers,",
      "Near Burjuman Metro Station, Dubai,",
      "United Arab Emirates.",
    ],
    email: "hello@bzanalytics.ai",
    phones: ["+971 50 16 623 12", "+971 50 11 362 66"],
  },
];

export default function ContactLocations() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-900 rounded-xl p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {locations.map((location) => (
            <div
              key={location.id}
              className="flex flex-col sm:flex-row gap-6 text-white text-center sm:text-left items-center sm:items-start"
            >
              {/* Flag */}
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shrink-0">
                <Image
                  src={location.flag}
                  alt={location.country}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {location.country}
                </h3>

                {location.address.map((line, index) => (
                  <p key={index} className="text-gray-300">
                    {line}
                  </p>
                ))}

                <p className="mb-1 mt-3">{location.email}</p>

                {location.phones.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}