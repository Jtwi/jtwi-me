import Head from "next/head";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import JordanTWI from "../public/jordtwi.png";
import Typewriter from "typewriter-effect";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 40000, easing: (t) => t };

export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 12 },
      },
    },
    slides: { perView: 1 },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="bg-cover bg-white dark:bg-gray-900 dark:text-white text-black top-0 min-h-screen">
      <div className="mx-auto max-w-4xl px-8">
        <Head>
          <meta charSet="UTF-8" />s
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Jordan Twiggs – JTWI</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="JTWI — Jordan Twiggs Personal Website" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="JTWI — Jordan Twiggs Personal Website"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jtwi.me/" />
          <meta
            property="og:title"
            content="JTWI — Jordan Twiggs Personal Website"
          />
          <meta
            property="og:description"
            content="JTWI — Jordan Twiggs Personal Website"
          />
          <meta property="og:image" content={JordanTWI} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://jtwi.me/" />
          <meta
            property="twitter:title"
            content="JTWI — Jordan Twiggs Personal Website"
          />
          <meta
            property="twitter:description"
            content="JTWI — Jordan Twiggs Personal Website"
          />
          <meta property="twitter:image" content={JordanTWI} />
        </Head>

        <main className="max-w-3xl space-y-12 py-14">
          <Fade delay={200} triggerOnce>
            <div className="space-y-2 ">
              <h1 className="font-bold mb-3 text-4xl md:text-6xl">
                Hi, I&apos;m{" "}
                <a className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                  Jordan
                </a>
              </h1>

              <a className="font-semibold text-2xl md:text-3xl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Digital Lead, Web Dev, Discord Wizard")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .start();
                  }}
                />
              </a>
              <div className="flex items-center  space-x-5 pt-2">
                <a
                  target="_blank"
                  href="https://twitter.com/_jtwi"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter w-8 h-8 transform hover:opacity-90 hover:scale-125 ease-in-out duration-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/jordan-twiggs/"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter w-8 h-8 transform hover:opacity-90 hover:scale-125 ease-in-out duration-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/jtwi"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter w-8 h-8 transform hover:opacity-90 hover:scale-125 ease-in-out duration-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="mailto:hello@jtwi.me"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter w-8 h-8 transform hover:opacity-90 hover:scale-125 ease-in-out duration-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </a>
              </div>
            </div>
          </Fade>
          <Fade delay={200} triggerOnce>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold">
                💭 – About Me
              </h3>
              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                I&apos;m 23 years old, from the United Kingdom! I started my
                journey in graphic design before adventuring into web
                development for a handful of local clients.
              </p>
              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                Six years later I now focus on Business Development &
                Management, Full Stack Development, Online Community Management,
                Web3 / Blockchain Tech for worldwide clients. As well as
                founding two of my own online businesses!
              </p>

              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                I also graduated from Birmingham City University in 2022 with a
                First class Honours in Business Information Technology!
              </p>
              <p className="font-medium italic tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                Been a busy six years...
              </p>
            </div>
          </Fade>

          <Fade delay={200} triggerOnce>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold">
                👨🏼‍💻 – What Do I Do
              </h3>
              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                Honestly, a few too many things to count on one hand...
              </p>
              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                I&apos;m currently having a fantastic time working with QA as a
                Digital Lead developing multiple business streams such as Teach
                The Nation To Code, Web3 and Online Communities.
              </p>
              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                But, let me hightlight my main focuses & skills:
              </p>
              <p className="font-normal leading-loose tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                <a className="bg-clip-text font-extrabold text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                  ►
                </a>{" "}
                Frontend Web Development <br />
                <a className="bg-clip-text font-extrabold  text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                  ►
                </a>{" "}
                Discord (Setup, Security, Development) <br />
                <a className="bg-clip-text font-extrabold  text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                  ►
                </a>{" "}
                Community Management <br />
                <a className="bg-clip-text font-extrabold  text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                  ►
                </a>{" "}
                Blockchain & Web3 (NFTs, DAO, Smart Contracts) <br />
                <a className="bg-clip-text font-extrabold  text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                  ►
                </a>{" "}
                Business Development & Management <br />
                <a className="bg-clip-text font-extrabold  text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                  ►
                </a>{" "}
                UI/UX Design <br />
              </p>
              <p className="font-normal tracking-wide eading-loose dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                I&apos;m always open to new projects big or small!
                <br /> My contact details can be found at the top of the page:
                <a
                  className="font-bold cursor-pointer tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {" "}
                  Click Here ↑
                </a>
              </p>
            </div>
          </Fade>

          <Fade delay={200} triggerOnce>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold">
                ⚙️ – Projects & Work
              </h3>
              <p className="font-normal tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                Don&apos;t just take my word for it. Check out the recent
                projects I have worked on!
              </p>

              <div ref={sliderRef} className="keen-slider">
                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 border-gray-300 hover:shadow-sm border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/botmrt.png"
                      alt="BotMart Worlds Largest Bot Marketplace"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        DISCORD MANAGEMENT
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        BotMart <br />
                        Reeflabs LLC
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 border-gray-300 hover:shadow-sm shadow-sm border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/radioshackllc2.png"
                      alt="RadioShack Web3 Crypto Swap"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        DIGITAL LEAD
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        RadioShack <br />
                        Online LLC
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 border-gray-300 hover:shadow-sm  border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/qa.png"
                      alt="QA UK's largest tech training and digital skills organisation"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        DIGITAL LEAD
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        QA LTD
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 hover:shadow-sm  shadow-sm border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/originalgaragenfttailopez.png"
                      alt="Original Garage Social Club by Tai Lopez"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        COMMUNITY MANAGEMENT
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        OG Social Club NFT
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent shadow-sm bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 border-gray-300 hover:shadow-sm  border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/retailcommerceventurerev.png"
                      alt="Retail Ecommerce Ventures"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium dark:text-gray-500 text-gray-400 mb-1">
                        UI/UX & WEB DEVELOPMENT
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        Retail Ecommerce Ventures LLC
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text dark:bg-white bg-gray-900 font-semibold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 border-gray-300 hover:shadow-sm  border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/bcu.png"
                      alt="Birmingham City University"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        DOCKER LINUX WEB SERVER
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        Birmingham City University
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 border-gray-300 hover:shadow-sm  border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/astroproxies.png"
                      alt="AstroProxies / Astro IO LTD"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        FOUNDER & DIRECTOR
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        Astro Proxies <br /> Astro IO LTD
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-1 keen-slider__slide">
                  <div className="h-full border-2 dark:bg-white bg-gray-900 hover:shadow-sm  shadow-sm border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-36 md:h-36 w-full object-cover object-center"
                      src="/curatesmart.png"
                      alt="Curate Smart - UK Smart Homes"
                      layout="responsive"
                      width="750"
                      height="450"
                    />
                    <div className="p-4 sm:p-6">
                      <h2 className="text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">
                        WEB DEVELOPMENT
                      </h2>
                      <h1 className="title-font text-lg font-semibold text-white dark:text-black mb-2">
                        Curate Smart
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className=" inline-flex items-center"
                          target="_blank"
                          href="https://twitter.com/_jtwi"
                          rel="noopener noreferrer"
                        >
                          <h2 className="bg-clip-text font-semibold text-transparent shadow-sm bg-gradient-to-r from-blue-600 to-blue-500">
                            Case Study →
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={200} triggerOnce>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold">📚 – Blog</h3>

              <p className="font-medium italic tracking-wide dark:text-gray-100 text-gray-900 sm:text-xl text-md">
                Coming Soon...
              </p>
            </div>
          </Fade>
          <Fade delay={200} triggerOnce>
            <footer className="mx-auto mt-28 max-w-3xl border-t-4 border-black/10 py-10 dark:border-white/10">
              <h1 className="text-2xl mb-1 md:text-3xl bg-clip-text font-bold text-transparent opacity-100 bg-gradient-to-r from-blue-600 to-blue-500">
                Jordan Twiggs
              </h1>
              <p className="font-semibold tracking-wide dark:text-gray-100 text-gray-900 sm:text-md text-sm">
                © JTWI LTD 2022
              </p>
            </footer>
          </Fade>
        </main>
      </div>
    </div>
  );
}
