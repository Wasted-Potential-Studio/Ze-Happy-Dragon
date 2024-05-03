'use client';
import React from "react";
import  localFont  from "next/font/local";

const myFont = localFont({
  src: './../../../public/fonts/Wulkan-Display-Medium.otf',
  display: 'swap',
})

export default function Video() {
  return (
    <main className={myFont.className}>
    <section 
      className="relative overflow-hidden bg-white pb-0 pt-[0px] dark:bg-gray-dark md:pb-[0px] md:pt-[0px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[0px] 2xl:pt-[0px]"
    >
      <div className="relative"> 
        <video
          className="object-cover w-screen h-screen"
          src={require('../../../public/videos/v1-3.webm')}
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"> 
        <p className="mb- text-base !leading-relaxed text-black dark:text-white sm:text-lg md:text-xl text-center"></p>
          <h1 className="mb-0 text-4xl leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight xl:text-7xl 2xl:text-7xl text-center">
            Unforgettable travel <br />
            experience with <br />
          </h1>
          <h1 className="mb-0 text-4xl font leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight xl:text-7xl 2xl:text-7xl text-center">
            <em>Ze Happy Dragon </em>
          </h1>
        </div>
      </div>
    </section>
    </main>
  );
}