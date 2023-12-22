"use client";
import Image from "next/image";
import aboutImage from "../../../public/images/about.jpg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const About = () => (
  <div id="about" className="h-screen">
    <section
      id="about"
      className="code-section relative bg-white font-['Poppins']"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-12 lg:pb-12 xl:px-32 hovered-element">
        <div className="relative z-10 flex flex-col items-center lg:flex-row">
          <div className="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
            <h1
              id="about-header-text"
              className="mb-8 text-center text-4xl font-bold text-slate-800 lg:text-left xl:text-5xl 2xl:text-6xl"
            >
              About Me
            </h1>
            <p
              id="about-first-paragraph"
              className="mb-8 text-center text-gray-700 lg:text-left"
            >
              As a Software Engineer, I&apos;m committed to delivering
              high-quality, optimized solutions. Skilled in Python to
              JavaScript, database management to cloud services, I strive to
              exceed client expectations with diverse engineering expertise.
            </p>
            <div
              id="about-checkmark-list"
              className="mb-8 pl-8 text-center text-gray-700 lg:text-left"
            >
              <ul>
                <li className="mb-4 flex flex-row">
                  <i
                    className="fa fa-check mr-4 mt-1 text-green-500"
                    aria-hidden="true"
                  ></i>
                  <span id="about-checkmark-list-item-1">
                    I innovate in network optimization, balancing execution time
                    and resources efficiently in my projects and studies.
                  </span>
                </li>
                <li className="mb-4 flex flex-row">
                  <i
                    className="fa fa-check mr-4 mt-1 text-green-500"
                    aria-hidden="true"
                  ></i>
                  <span id="about-checkmark-list-item-2" className="">
                    My work has led to significant advancements in system
                    functionalities, particularly in backend efficiency and
                    workflow automation.
                  </span>
                </li>
                <li className="mb-4 flex flex-row">
                  <i
                    className="fa fa-check mr-4 mt-1 text-green-500"
                    aria-hidden="true"
                  ></i>
                  <span id="about-checkmark-list-item-3" className="">
                    I&apos;ve developed projects like an end-to-end encrypted
                    chat app, prioritizing secure, confidential communication.
                  </span>
                </li>
              </ul>
            </div>
            <p
              id="about-second-paragraph"
              className="mb-12 text-center text-gray-700 lg:text-left"
            >
              Why choose my portfolio? Because I deliver quality and value. My
              portfolio showcases my experience and ability to deliver impactful
              outcomes. R eady for any project, I offer specialized skills.
            </p>
            <div
              id="about-cta-button"
              className="mb-12 text-center lg:text-left"
            >
              <button
                className="primary-color-bg items-center rounded px-8 py-4 font-semibold text-white bg-purple-600 hover:bg-purple-500"
                onClick={() => {
                    gsap.to(window, { duration: 1, scrollTo: `#contact` });
                }}
              >
                <span id="about-cta-button-text">Get in Touch</span>
              </button>
            </div>
          </div>
          <div className="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6">
            <div className="primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-purple-600 border-l-purple-600"></div>
            <div className="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]"></div>
            <div>
              <Image
                src={aboutImage}
                alt="Hero"
                className="seo-image relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0 dont-replace"
                data-media='{"id":"1439425791","src":"iStock","type":"image"}'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default About;
