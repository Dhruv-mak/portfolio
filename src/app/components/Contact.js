import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = ({ icon, title, children }) => (
    <div className="mb-6 flex flex-row space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white p-6">
            <FontAwesomeIcon icon={icon} className="text-3xl" />
        </div>
        <div className="flex flex-col">
            <div className="text-2xl font-semibold">{title}</div>
            <div className="">{children}</div>
        </div>
    </div>
);

const ContactInput = ({ id, type, name, label }) => (
    <div className="w-full">
        <div className="">
            <label htmlFor={id} className="font-medium text-gray-700">{label}</label>
        </div>
        <div>
            <input id={id} type={type} name={name} className="w-full border border-white border-b-gray-300 p-2" />
        </div>
    </div>
);

const Contact = () => (
    <div id="contact">
        <section id="contact" className="code-section font-['Poppins']">
            <div className="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32 hovered-element">
                <div className="relative z-10 rounded-3xl bg-white p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-col lg:flex-row lg:space-x-8">
                        <div className="primary-color-bg rounded-3xl p-8 pt-12 text-white bg-purple-600">
                            <div className="mb-4 uppercase">Contact Me</div>
                            <div className="mb-6 text-4xl font-semibold flex items-ceter">
                                <FontAwesomeIcon className="inline-block h-10 w-10" icon={faCommentDots} aria-hidden="true" /> 
                                <h2 className='inline-block ml-5'>Let&apos;s Talk</h2>
                            </div>
                            <div className="hidden py-4 lg:block">
                                <ContactInfo icon={faLocationDot} title="Our Location">Florida, USA</ContactInfo>
                                <ContactInfo icon={faEnvelope} title="Email Address">dhruv.makwana5004@gmail.com</ContactInfo>
                                <ContactInfo icon={faPhone} title="Telephone">+1 352-256-5844</ContactInfo>
                            </div>
                        </div>
                        <div className="w-full p-6">
                            <form id="contact-us-form">
                                <div className="flex flex-col space-y-4 md:space-y-12">
                                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                                        <ContactInput id="first-name" type="text" name="first-name" label="First Name" />
                                        <ContactInput id="last-name" type="text" name="last-name" label="Last Name" />
                                    </div>
                                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                                        <ContactInput id="email" type="email" name="email" label="Email Address" />
                                        <ContactInput id="phone" type="tel" name="phone" label="Phone" />
                                    </div>
                                    <div className="w-full">
                                        <div className="">
                                            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                                        </div>
                                        <div className="">
                                            <textarea id="message" name="message" rows="4" className="w-full border border-white border-b-gray-300 p-2"></textarea>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button type="submit" className="primary-color-bg items-center rounded px-8 py-3 text-sm font-semibold uppercase text-white bg-purple-600 hover:bg-purple-500">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Contact;