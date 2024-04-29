import Image from "next/image"
import SectionTitle from "../../components/Common/SectionTitle";
import localFont  from "next/font/local";

const myFont = localFont({
  src: './../../../public/fonts/Futura-Std-Light.otf',
  display: 'swap',
})

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ze Happy Dragon",
  description: "Ze Happy Dragon",
  // other metadata
};

const AboutPage = () => {
  return (
    <main className={myFont.className}>
    <section 
      className="relative overflow-hidden bg-white pb-0 pt-[0px] dark:bg-gray-dark md:pb-[0px] md:pt-[0px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[0px] 2xl:pt-[0px]"
    >
      <div className="relative h-[75vh]"> 
        <Image
        src="/images/trip1.jpg"
        alt="ass"
        objectFit="cover"
        fill
        />
        <div className="absolute top-10 left-0  w-full h-full flex flex-col justify-center items-center">
          <h1 className="mb-10 text-xl leading-tight text-white dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight xl:text-3xl 2xl:text-3xl text-center">
            About Ze Happy Dragon <br />
          </h1>
          <h1 className="mb-0 text-4xl leading-tight  text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight xl:text-7xl 2xl:text-7xl text-center">
            We Connect Travelers <br />
            With The Culture <br />
          </h1>
        </div>
      </div>
    </section>
    <section id="about" className="pt-20 md:pt-20 lg:pt-20">
      <div  className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-2 flex flex-wrap items-center">
            <div className="w-full px-6 lg:w-1/3">
            <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl">escape</h2>
              <div className="relative mx-auto aspect-[19/24] max-w-[400px] lg:mr-0">
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
            <div className="w-full px-6 lg:w-1/3">
            <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl ">connect</h2>
              <div className="relative mx-auto aspect-[19/24] max-w-[400px] lg:mr-0">
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
            <div className="w-full px-6 lg:w-1/3">
            <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl">discover</h2>
              <div className="relative mx-auto aspect-[19/24] max-w-[400px] lg:mr-0">
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
    <section 
      className="relative overflow-hidden bg-white pb-0 pt-[0px] dark:bg-gray-dark md:pb-[0px] md:pt-[0px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[0px] 2xl:pt-[0px]"
    >
      <div className="relative h-[65vh]"> 
        <Image
        src="/images/trip1.jpg"
        alt="ass"
        objectFit="cover"
        fill
        />
        <div className="mx-4 px-4 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <SectionTitle
                title="Our Story"
                paragraph="Offering dynamic group & private experiences in majestic itineraries with hospitality & professionalism at the forefront of each bespoke experience.  "
                sub="TRUSTED SINCE 2017"
                mb="px"
              />
        </div>
      </div>
    </section>
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[15/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/trip7.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/trip7.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <main className={myFont.className}>
          <div className="w-full px-4">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Lorem ipsum dolor
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          </main>
        </div>
      </div>
    </section>
    <section 
      className="relative overflow-hidden bg-white pb-0 pt-[0px] dark:bg-gray-dark md:pb-[0px] md:pt-[0px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[0px] 2xl:pt-[0px]"
    >
      <div className="relative h-[65vh]"> 
        <Image
        src="/images/trip1.jpg"
        alt="ass"
        objectFit="cover"
        fill
        />
        <div className="mx-4 px-4 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <SectionTitle
                title="Our Story"
                paragraph="Offering dynamic group & private experiences in majestic itineraries with hospitality & professionalism at the forefront of each bespoke experience.  "
                sub="TRUSTED SINCE 2017"
                mb="px"
              />
        </div>
        
      </div>
    </section>
    <section 
      className="relative overflow-hidden bg-white pb-0 pt-[0px] dark:bg-gray-dark md:pb-[0px] md:pt-[0px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[0px] 2xl:pt-[0px]"
    >
      <div className="relative h-[20vh]"> 
        <div className="absolute top-0 left-0  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-xl leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight xl:text-3xl 2xl:text-3xl text-center">
            MEET THE TEAM <br />
          </h1>
        </div>
      </div>
    </section>
    <section id="about" className="pt-0 md:pt-0 lg:pt-20">
      <div  className="container">
        <div className="border-b border-body-color/[.15] pb- dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-6 lg:w-1/2">
            <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl">Founder </h2>
              <div className="relative mx-auto aspect-[1/1] max-w-[400px] ">
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
              <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl">Ujwal Garg</h2>
              <h2 className="text-center text-xl font-semibold p-4 sm:text-xl sm:leading-tight md:text-xl md:leading-tight xl:text-xl 2xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit. Duis vulputate feugiat <br/>
              vulputate. Donec bibendum lacus feugiat <br/>
              diam, in dictum sem porta a.eugiat Cras <br/>
              luctus, nisi vel vulputate fermentum,   <br/>
              enim orci consectetur tellus, nec difd  <br/>
              mi rhoncus justo vehicula accumsan.     <br/>
              </h2>
            </div>
            <div className="w-full px-6 lg:w-1/2">
            <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl ">connect</h2>
              <div className="relative mx-auto aspect-[1/1] max-w-[400px] ">
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
              <h2 className="text-center text-4xl font-semibold p-4 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight xl:text-4xl 2xl:text-4xl">Ujwal Garg</h2>
              <h2 className="text-center text-xl font-semibold p-4 sm:text-xl sm:leading-tight md:text-xl md:leading-tight xl:text-xl 2xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit. Duis vulputate feugiat <br/>
              vulputate. Donec bibendum lacus feugiat <br/>
              diam, in dictum sem porta a.eugiat Cras <br/>
              luctus, nisi vel vulputate fermentum,   <br/>
              enim orci consectetur tellus, nec difd  <br/>
              mi rhoncus justo vehicula accumsan.     <br/>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section 
      className="relative overflow-hidden bg-white pb-0 pt-[0px] dark:bg-gray-dark md:pb-[0px] md:pt-[0px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[0px] 2xl:pt-[0px]"
    >
      <div className="relative h-[40vh]"> 
        <Image
        src="/images/trip1.jpg"
        alt="ass"
        objectFit="cover"
        fill
        />
      </div>
    </section>
    </main>
  );
};

export default AboutPage;
