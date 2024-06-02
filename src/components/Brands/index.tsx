'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useScroll, motion } from "framer-motion";

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => direction = e.direction * -1
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className={styles.main}>
      <AboutSectionOne />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p className="text-black dark:text-white" ref={firstText}>Ze Happy Dragon</p>
          <p className="text-black dark:text-white" ref={secondText}>Ze Happy Dragon</p>
        </div>
      </div>
    </main>
  );
}

function AboutSectionOne() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'start start']
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);

  return (
    <motion.div ref={element} style={{ opacity: scrollYProgress }}>
      <Image 
        src="/images/trip7.jpg"
        fill={true}
        alt="background"
      />
    </motion.div>
  );
}
