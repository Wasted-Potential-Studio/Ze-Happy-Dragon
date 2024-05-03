'use client';
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const myFont = localFont({
  src: "./../../../public/fonts/Futura-Std-Light.otf",
  display: "swap",
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ze Happy Dragon",
  description: "Ze Happy Dragon",
  // other metadata
};

const AboutPage = () => {
  // Manage separate hover states for each image
  const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]); // Specify that it's an array of numbers

  const handleMouseEnter = (index: number) => { // Explicitly define the type of index
    if (!hoveredIndexes.includes(index)) {
      setHoveredIndexes([...hoveredIndexes, index]);
    }
  };

  const handleMouseLeave = (index: number) => { // Explicitly define the type of index
    setHoveredIndexes(hoveredIndexes.filter((i) => i !== index));
  };

  return (
    <main className={myFont.className}>
      <section id="about" className="pt-20 md:pt-20 lg:pt-20">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-2 flex flex-wrap items-center">
              <div className="w-full px-3 lg:w-1/3 relative">
                <div className="relative mx-auto aspect-[19/26] max-w-[700px] lg:mr-0">
                  <div
                    className={`absolute inset-0 transition-filter ${
                      hoveredIndexes.includes(0) ? "brightness-75" : "brightness-100"
                    }`}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                  >
                    <Image
                      src={`/images/trip8.jpg`}
                      alt={`about-image-0`}
                      fill
                      className="mx-auto max-w-full pb-6 drop-shadow-three  dark:drop-shadow-none lg:mr-0"
                    />
                  </div>
                  <p className="pb-4 pt-6 text-center text-5xl absolute left-1/2 top-1/9 -translate-x-1/2 -translate-y-1/9">Group Journey</p>
                  <div className="text-center mb-4 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                    <button className="bg-black hover:text-black px-4 py-2 rounded hover:bg-white  text-white font-bold text-lg">View Details</button>
                  </div>
                </div>
              </div>

              <div className="w-full px-3 lg:w-1/3 relative">
                <div className="relative mx-auto aspect-[19/26] max-w-[700px] lg:mr-0">
                  <div
                    className={`absolute inset-0 transition-filter ${
                      hoveredIndexes.includes(1) ? "brightness-75" : "brightness-100"
                    }`}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                  >
                    <Image
                      src={`/images/trip9.jpg`}
                      alt={`about-image-1`}
                      fill
                      className="mx-auto max-w-full pb-6 drop-shadow-three  dark:drop-shadow-none lg:mr-0"
                    />
                  </div>
                  <p className="pb-4 pt-6 text-center text-5xl absolute left-1/2 top-1/9 -translate-x-1/2 -translate-y-1/9">Solo Adventure</p>
                  <div className="text-center mb-4 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                    <button className="bg-black hover:text-black px-4 py-2 rounded hover:bg-white  text-white font-bold text-lg">View Details</button>
                  </div>
                </div>
              </div>

              <div className="w-full px-3 lg:w-1/3 relative">
                <div className="relative mx-auto aspect-[19/26] max-w-[700px] lg:mr-0">
                  <div
                    className={`absolute inset-0 transition-filter ${
                      hoveredIndexes.includes(2) ? "brightness-75" : "brightness-100"
                    }`}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                  >
                    <Image
                      src={`/images/trip10.jpg`}
                      alt={`about-image-2`}
                      fill
                      className="mx-auto max-w-full pb-6 drop-shadow-three  dark:drop-shadow-none lg:mr-0"
                    />
                  </div>
                  <p className="pb-4 pt-6 text-center text-5xl absolute left-1/2 top-1/9 -translate-x-1/2 -translate-y-1/9">Family Vacation</p>
                  <div className="text-center mb-4 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                    <button className="bg-black hover:text-black px-4 py-2 rounded hover:bg-white  text-white font-bold text-lg">View Details</button>
                  </div>
                </div>
              </div>

              {/* Add more image components as needed */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
