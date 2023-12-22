"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const links = [
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'portfolio', text: 'Portfolio' },
    { id: 'contact', text: 'Contact' },
];

const Link = ({ id, text }) => (
    <button className="text-gray-800 hover:text-purple-500" onClick={() => {
        gsap.to(window, {duration: 1, scrollTo: `#${id}`})
    }}>
        {text}
    </button>
);

const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('nav-links-mobile');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
}

const Navbar = () => {
    return (
        <header
            id="top"
            className="primary-color-bg primary-color-[50] code-section font-['Poppins'] bg-purple-50"
        >
            <nav className="container relative z-10 mx-auto px-4 py-10 sm:px-12 xl:px-32 hovered-element">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <a
                            id="nav-name-text"
                            href="/"
                            className="primary-color-text text-xl lg:text-3xl text-purple-600"
                        >
                            <Image className="ml-5 max-h-full h-10 w-40" src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div
                        id="nav-links"
                        className="hidden items-center space-x-8 text-sm md:flex lg:text-base"
                    >
                        {links.map((link, index) => (
                            <Link key={index} {...link} />
                        ))}
                    </div>
                    <div
                        id="nav-cta"
                        className="hidden items-center space-x-4 text-sm md:flex lg:text-base"
                    >
                        <div id="nav-cta-button">
                            <a
                                href="/#contact"
                                className="primary-color-bg rounded px-8 py-3 text-xs uppercase text-white bg-purple-600"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                    <div id="mobile-menu-icon" className="flex items-center md:hidden" onClick={toggleMobileMenu}>
                        <button className="text-gray-800" aria-label="Navigation Dropdown Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu"
                            >
                                <line x1="3" y1="12" x2="21" y2="12" className=""></line>
                                <line x1="3" y1="6" x2="21" y2="6" className=""></line>
                                <line x1="3" y1="18" x2="21" y2="18" className=""></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="nav-links-mobile" className="mt-4 hidden md:hidden">
                    <div className="relative z-10 flex flex-col space-y-2 bg-white pb-4 text-center text-lg">
                        {links.map((link, index) => (
                            <Link key={index} {...link} />
                        ))}
                        <div id="nav-mobile-cta-button" className="flex-col space-y-2 pt-4">
                            <div id="nav-cta-button">
                                <a
                                    href="/#contact"
                                    className="primary-color-bg px-4 py-2 text-white bg-purple-600"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;