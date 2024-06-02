import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Slider from "@/components/Slider"
import Hero from "@/components/Hero";

import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ze Happy Dragon",
  description: "Ze Happy Dragon",
};

export default function Home() {
  return (
    <>
      <Video />
      <ScrollUp />
      <AboutSectionOne />
      <Pricing />
      <Brands/>
      <Hero />
      <Slider/>
      <AboutSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
