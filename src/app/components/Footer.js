"use client";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);
const hanleNavClick = (id) => {
    gsap.to(window, { duration: 1, scrollTo: id });
}; 
const FooterButton = ({ id, children }) => (
    <a className="text-gray-700" onClick={() => hanleNavClick(id)}>
        {children}
    </a>
);

const FooterService = ({ children }) => <div className="">{children}</div>;

const FooterContactInfo = ({ iconClass, children }) => (
    <div className="flex flex-row text-slate-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-full p-2">
            <i className={`primary-color-text ${iconClass} text-xl text-purple-600`} aria-hidden="true"></i>
        </div>
        <div className="flex items-center">{children}</div>
    </div>
);

const Footer = () => {
    const navLinks = [
        { id: '#top', name: 'Home' },
        { id: '#services', name: 'Services' },
        { id: '#portfolio', name: 'Portfolio' },
        { id: '#pricing', name: 'Pricing' },
        { id: '#contact', name: 'Contact' },
    ];

    const services = [
        'Python Development',
        'Cloud Services',
        'JavaScript & TypeScript',
        'Data Mining',
        'Data Security',
        'Network Optimization',
    ];

    const contactInfos = [
        { iconClass: 'fa-regular fa-phone', info: '+1 352-256-5844' },
        { iconClass: 'fa-regular fa-envelope', info: 'dhruv.makwana5004@gmail.com' },
        { iconClass: 'fa-regular fa-location-dot', info: 'Florida, USA' },
    ];

    return (
        <div id="footer-div">
            <footer className="primary-color-bg primary-color-[50] code-section relative -mt-52 overflow-hidden py-16 font-['Poppins'] bg-purple-50">
                <div id="footer" className="container relative mx-auto px-4 pb-0 pt-36 sm:px-12 xl:px-32">
                    <div className="primary-color-border primary-color-[100] absolute -left-80 -top-14 h-[400px] w-[400px] rounded-full border-[60px] border-purple-100"></div>
                    <div className="primary-color-border primary-color-[100] absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-purple-100"></div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"></div>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        <div className="mb-8 flex flex-col space-y-4">
                            <a id="footer-brand-name" href="/" className="primary-color-text mb-8 text-xl font-bold lg:text-3xl text-purple-600">
                                Dmakwana&apos; Portfolio
                            </a>
                            <div id="footer-name-subtext" className="text-gray-700 2xl:pr-[30%]">
                                Dedicated to delivering high quality software engineering solutions.
                            </div>
                        </div>
                        <div id="footer-nav-links" className="mb-8 flex flex-col space-y-4">
                            <div className="mb-8 text-2xl font-semibold text-slate-800">Navigation</div>
                            {navLinks.map((link, index) => (
                                <FooterButton key={index} href={link.href}>{link.name}</FooterButton>
                            ))}
                        </div>
                        <div className="mb-8 flex flex-col space-y-4">
                            <div className="mb-8 text-2xl font-semibold text-slate-800">Services</div>
                            <div id="footer-services" className="flex flex-col space-y-4 text-gray-700">
                                {services.map((service, index) => (
                                    <FooterService key={index}>{service}</FooterService>
                                ))}
                            </div>
                        </div>
                        <div id="footer-contact-info" className="mb-8 flex flex-col space-y-4">
                            <div className="mb-8 text-2xl font-semibold text-slate-800">Contact Me</div>
                            {contactInfos.map((info, index) => (
                                <FooterContactInfo key={index} iconClass={info.iconClass}>{info.info}</FooterContactInfo>
                            ))}
                        </div>
                    </div>
                    <p id="footer-copyright" className="relative z-10 mt-24 text-center text-lg text-gray-600">
                        © Dmakwana Portfolio
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;