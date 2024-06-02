'use client';
import styles from './style.module.scss';
import { projects } from './data';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTransform, motion } from 'framer-motion';
import localFont  from "next/font/local";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string; // Assuming you're using 'link' from your data
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const myFont = localFont({
  src: './../../../public/fonts/Futura-Std-Light.otf',
  display: 'swap',
})

const Card = ({ i, title, description, src, link, color, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);

  // Calculate the section boundaries 
  const sectionStart = i * 0.25; 
  const sectionEnd = (i + 1) * 0.25;

  // Track scroll progress only within the section
  const sectionProgress = useTransform(progress, [sectionStart, sectionEnd], [4, 1]);

  const imageScale = useTransform(sectionProgress, [0, 1], [2, 1]);
  const scale = useTransform(sectionProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <main  className={myFont.className}>
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <span>
              <a href={link} target="_blank"> 
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
        </main>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  //  Removed Lenis related code here

  return (
    <main ref={container} className={styles.main}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, (i + 1) * 0.25]} 
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}