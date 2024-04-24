'use client';
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import localFont  from "next/font/local";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const myFont = localFont({
  src: './../../../public/fonts/Futura-Std-Light.otf',
  display: 'swap',
})

const word = "with gsap";



export default function AboutSectionOne() {
  const container = useRef(null);
  const imagesRef = useRef(null)
  

  useLayoutEffect( () => {
    const context = gsap.context( () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start: "top bottom",
          end:"bottom top",
          scrub: true

        }
      })
      tl.to(imagesRef.current, {y: -0}, 0)
      
    })

  },[])


  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div ref={container} className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-16 lg:w-1/2">
              <main className={myFont.className}>
              <SectionTitle
                title="IMMERSIVE TRAVEL EXPERIENCE"
                paragraph="Offering dynamic group & private experiences in majestic itineraries with hospitality & professionalism at the forefront of each bespoke experience.  "
                sub="TRUSTED SINCE 2017"
                mb="44px"
              />
              </main>
              
              <Link
                    href=""
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Say Hello
                  </Link>
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  

                  
                </div>
              </div>
            </div>

            <div className="w-full px-12 lg:w-1/2">
              <div  ref={imagesRef} className="relative mx-auto aspect-[19/24] max-w-[600px] lg:mr-0">
                <Image
                  src="/images/trip8.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/trip8.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


