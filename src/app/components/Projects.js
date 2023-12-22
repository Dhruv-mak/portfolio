import Image from "next/image";
import project1 from "../../../public/images/hero1.png";
import project2 from "../../../public/images/hero2.png";
import project3 from "../../../public/images/hero3.png";
import Card from "./Card";

const Portfolio = () => {
  const details = [
    {
      image: project1,
      title: "VIKOR Method",
      description:
        "Balancing execution time and efficiency through algorithmic optimization.",
    },
    {
      image: project2,
      title: "Time-Interval Mining",
      description:
        "Python solution for finding sequential patterns in databases, considering time-interval weights.",
    },
    {
      image: project3,
      title: "Encrypted Chat Application",
      description:
        "Secure messaging application leveraging Diffie-Hellman key exchange and AES encryption.",
    },
  ];
  return (
    <div id="portfolio">
      <section
        id="portfolio"
        className="primary-color-bg primary-color-[50] code-section relative font-['Poppins'] md:mb-36 md:h-[700px] bg-purple-50"
      >
        <div className="mx-auto px-4 pb-32 lg:container sm:px-12 xl:px-32">
          <div className="relative z-10">
            <div className="pt-24">
              <div
                id="portfolio-small-heading"
                className="primary-color-text mb-4 text-center text-sm lg:text-left text-purple-600"
              >
                Portfolio
              </div>
              <h1
                id="portfolio-header-text"
                className="mb-8 text-center text-3xl font-bold lg:text-left lg:text-4xl xl:text-5xl text-slate-800"
              >
                Showcasing My Work
              </h1>
              <p
                id="portfolio-subtext"
                className="mb-8 text-center text-lg font-thin text-gray-700 lg:text-left"
              >
                Below is a collection of my projects that show the breadth and
                depth of my skills and expertise.
              </p>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {details.map((detail, index) => (
                <Card detail={detail} key={index} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 top-0 h-full w-full overflow-hidden">
          <div className="primary-color-border primary-color-[100] absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full border-[60px] border-purple-100"></div>
          <div className="primary-color-border primary-color-[100] absolute -right-60 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-purple-100"></div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
