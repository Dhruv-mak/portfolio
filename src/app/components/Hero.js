"use client";
import Image from "next/image";
import firstImage from "../../../public/images/hero3.png";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
gsap.registerPlugin(TextPlugin, RoughEase);
const Hero = () => {
    useEffect(() => {
        let tl = gsap.timeline();
        const word_list = ["Dhruv", "a Developer", "a Dreamer", "a Doer", "an Engineer"]
        // tl.from('#Intro', {y: 50, ease: 'power1.out', duration: 10, delay: 0.5})
        tl.to('.cursor', {opacity:1, ease: "power2.inOut", repeat:-1, duration:0.6})
        let masterTl = gsap.timeline({repeat: -1, repeatDelay: 1});
        word_list.forEach((word, index) => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
            tl.to('.text', {duration: 1, text: word})
            masterTl.add(tl);
        })
    }, []);
    return (
        <div id="c185mj" className="h-full">
            <section
                className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] bg-purple-50 h-full"
                id="c185mj"
            >
                <div
                    className="container relative z-10 mx-auto px-4 sm:px-12 lg:pb-32 xl:px-30 h-full"
                >
                    <div className="relative z-10 flex flex-col items-center lg:flex-row">
                        <div className="mt-12 w-full lg:mt-24 lg:w-[55%] lg:pr-14">
                            <h1
                                id="hero-text"
                                className="mb-8 text-center  font-bold lg:text-left "
                            >
                                <div id="hero-action-1" className="text-slate-800 text-4xl xl:text-5xl 2xl:text-6xl">Code is my Canvas</div>
                                <div id="hero-action-2" className="primary-color-text text-purple-600 text-4xl xl:text-5xl 2xl:text-6xl my-3">
                                <span className = "box"></span>
                                <span id="Intro" className = "inline-block">I&apos;m&nbsp;</span>
                                <span className = "text"></span>
                                <span className = "cursor opacity-0">&#x2590;</span>
                                </div>
                                <div id="hero-action-3" className="text-slate-800 text-xl xl:text-3xl 2xl:text-3xl">Rooted in India, Reaching Globally</div>
                            </h1>
                            <p
                                id="hero-subtext"
                                className="mb-8 text-center text-gray-700 lg:text-left"
                            >
                                Exploring new horizons in technology, I transform complex 
                                problems into elegant digital solutions.
                            </p>
                            <div id="hero-cta-button" className="mb-12 text-center lg:text-left">
                                <a
                                    href="/#contact"
                                    className="primary-color-bg items-center rounded px-5 py-3 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500"
                                >
                                    <span id="hero-cta-button-text">Explore More</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="relative mt-12 hidden w-full overflow-visible lg:block lg:w-[45%] lg:p-6"
                        >
                            <div
                                className="primary-color-border absolute bottom-0 left-0 h-0 w-0 border-[100px] border-transparent border-b-purple-600 border-l-purple-600 hovered-element"
                            ></div>
                            <div
                                className="absolute -right-9 top-16 h-[145px] w-[190px] bg-[radial-gradient(#cccccc_3px,transparent_3px)] [background-size:16px_16px]"
                            ></div>
                            <div >
                                <Image
                                    src={firstImage}
                                    alt="Hero"
                                    className="seo-image relative mt-8 aspect-square w-full rounded-2xl object-cover lg:mt-0 dont-replace"
                                    data-media='{"id":"1450969748","src":"iStock","type":"image"}'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="primary-color-border primary-color-[100] absolute -left-56 -top-24 h-[400px] w-[400px] rounded-full border-[60px] border-purple-100"
                ></div>
                <div
                    className="absolute bottom-0 top-0 hidden h-full w-full overflow-hidden lg:block"
                >
                    <div
                        className="primary-color-border primary-color-[100] absolute -right-60 bottom-14 h-[400px] w-[400px] rounded-full border-[60px] border-purple-100"
                    ></div>
                </div>
            </section>
        </div>
    );
};
    
export default Hero;