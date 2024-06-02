'use client';
import Image from "next/image";
import React, { useEffect, useState, useRef } from 'react';
import localFont from "next/font/local";
import { useScroll, motion } from "framer-motion";
import gsap from "gsap";
import { Metadata } from "next";

const myFont = localFont({
  src: "./../../../public/fonts/Futura-Std-Light.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Us | Ze Happy Dragon",
  description: "Ze Happy Dragon",
  // other metadata
};

const AboutPage = () => {
  const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]);

  const handleMouseEnter = (index: number) => {
    if (!hoveredIndexes.includes(index)) {
      setHoveredIndexes([...hoveredIndexes, index]);
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndexes(hoveredIndexes.filter((i) => i !== index));
  };

  const AboutSectionOne = () => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
      target: element,
      offset: ['start end', 'start start']
    });

    useEffect(() => {
      scrollYProgress.on("change", (e) => console.log(e));
    }, [scrollYProgress]);

    const images = [
      { src: '/images/Private Prayers Rooms.jpg', text: 'Group Journey', index: 0 },
      { src: '/images/Heritage Hotel Oper Air Lounge.jpg', text: 'Solo Adventure', index: 1 },
      { src: '/images/Sangchen Choekar.jpg', text: 'Family Vacation', index: 2 }
    ];

    return (
      <motion.div ref={element} style={{ opacity: scrollYProgress }}>
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-2 flex flex-wrap items-center">
              {images.map(({ src, text, index }) => (
                <div key={index} className="w-full px-3 lg:w-1/3 relative">
                  <div className="relative mx-auto aspect-[19/26] max-w-[700px] lg:mr-0">
                    <div
                      className={`absolute inset-0 transition-filter ${hoveredIndexes.includes(index) ? "brightness-75" : "brightness-100"}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <Image
                        src={src}
                        alt={`about-image-${index}`}
                        fill
                        className="mx-auto max-w-full pb-6 drop-shadow-three dark:drop-shadow-none lg:mr-0"
                      />
                    </div>
                    <p className="text-white pb-4 pt-6 text-center text-5xl absolute left-1/2 top-1/9 -translate-x-1/2 -translate-y-1/9">{text}</p>
                    <div className="text-center mb-4 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                      <button className="bg-black hover:text-black px-4 py-2 rounded hover:bg-white text-white font-bold text-lg">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <main className={myFont.className}>
      <section id="about" className="pt-20 md:pt-20 lg:pt-20">
        <AboutSectionOne />
      </section>
    </main>
  );
};

export default AboutPage;
