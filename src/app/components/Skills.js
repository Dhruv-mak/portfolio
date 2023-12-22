"use client";
import Image from "next/image";
import serviceImage from "../../../public/images/skills_light.png";
import { useState } from "react";
import Pills from "./Pills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skill = ({ url, header, alt_text }) => (
  <div className="skillClass flex-1 bg-white px-8 text-center md:max-w-xs">
    <div className="relative mx-auto mb-6 flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-3xl overflow-hidden bg-purple-100 text-4xl text-blue-500">
      <Image src={url} alt={alt_text} fill />
    </div>
    <h4 className="mb-4 text-sm sm:text-lg font-semibold text-slate-800">{header}</h4>
  </div>
);

const frontEnd = [
  { url: "/icons/html.svg", header: "HTML", alt_text: "HTML Image" },
  { url: "/icons/css.svg", header: "CSS", alt_text: "CSS Image" },
  {
    url: "/icons/javascript.svg",
    header: "JavaScript",
    alt_text: "JavaScript Image",
  },
  {
    url: "/icons/typescript.svg",
    header: "TypeScript",
    alt_text: "TypeScript Image",
  },
  { url: "/icons/react.svg", header: "React", alt_text: "React Image" },
  { url: "/icons/nextjs.svg", header: "Next.js", alt_text: "Next.js Image" },
  { url: "/icons/redux.svg", header: "Redux", alt_text: "Redux Image" },
  {
    url: "/icons/tailwind.svg",
    header: "Tailwind",
    alt_text: "Tailwind Image",
  },
  {
    url: "/icons/bootstrap.svg",
    header: "Bootstrap",
    alt_text: "Bootstrap Image",
  },
  {
    url: "/icons/material.svg",
    header: "MUI",
    alt_text: "Material UI Image",
  },
  { url: "/icons/qt.svg", header: "Qt", alt_text: "Qt Image" },
  { url: "/icons/sass.svg", header: "Sass", alt_text: "Sass Image" },
  { url: "/icons/gsap.svg", header: "GSAP", alt_text: "GSAP Image" },
  { url: "/icons/webpack.svg", header: "Webpack", alt_text: "Webpack Image" },
];

const backEnd = [
  { url: "/icons/python.svg", header: "Python", alt_text: "Python Image" },
  { url: "/icons/django.svg", header: "Django", alt_text: "Django Image" },
  { url: "/icons/flask.svg", header: "Flask", alt_text: "Flask Image" },
  { url: "/icons/fastapi.svg", header: "FastAPI", alt_text: "FastAPI Image" },
  {
    url: "/icons/insomnia.svg",
    header: "Insomnia",
    alt_text: "Insomnia Image",
  },
  {
    url: "/icons/postgresql.svg",
    header: "PostgreSQL",
    alt_text: "PostgreSQL Image",
  },
  { url: "/icons/mysql.svg", header: "MySQL", alt_text: "MySQL Image" },
  { url: "/icons/mongodb.svg", header: "MongoDB", alt_text: "MongoDB Image" },
  { url: "/icons/oracle.svg", header: "Oracle", alt_text: "Oracle Image" },
  { url: "/icons/sqlite.svg", header: "SQLite", alt_text: "SQLite Image" },
  { url: "/icons/postman.svg", header: "Postman", alt_text: "Postman Image" },
];

const other = [
  { url: "/icons/git.svg", header: "Git", alt_text: "Git Image" },
  { url: "/icons/aws-ec2.svg", header: "EC2", alt_text: "AWS EC2 Image" },
  { url: "/icons/aws-s3.svg", header: "S3", alt_text: "AWS S3 Image" },
  { url: "/icons/aws-sqs.svg", header: "SQS", alt_text: "AWS SQS Image" },
  {
    url: "/icons/aws-lambda.svg",
    header: "Lambda",
    alt_text: "AWS Lambda Image",
  },
  {
    url: "/icons/github_action.svg",
    header: "Actions",
    alt_text: "GitHub Actions Image",
  },
  { url: "/icons/docker.svg", header: "Docker", alt_text: "Docker Image" },
  {
    url: "/icons/kubernets.svg",
    header: "Kubernetes",
    alt_text: "Kubernetes Image",
  },
  { url: "/icons/linux.svg", header: "Linux", alt_text: "Linux Image" },
  { url: "/icons/pandas.svg", header: "Pandas", alt_text: "Pandas Image" },
  { url: "/icons/numpy.svg", header: "NumPy", alt_text: "NumPy Image" },
  { url: "/icons/opencv.svg", header: "OpenCV", alt_text: "OpenCV Image" },
  { url: "/icons/pytorch.svg", header: "PyTorch", alt_text: "PyTorch Image" },
];

const pills = [
  { labels: "Front End", active: true },
  { labels: "Back End" },
  { labels: "Other" },
];

const Skills = () => {
  const [labels, setLabels] = useState(pills);
  const [skillList, setSkillList] = useState(frontEnd);
  const handleLabelClick = (label) => {
    labels.forEach((labelItem) => {
      if (labelItem.labels === label.labels) {
        labelItem.active = true;
      } else {
        labelItem.active = false;
      }
    });
    setLabels(labels);
    if (label.labels === "Front End") {
      setSkillList(frontEnd);
    } else if (label.labels === "Back End") {
      setSkillList(backEnd);
    } else {
      setSkillList(other);
    }
  };

  useGSAP(() => {
    const skillIcons = document.getElementById("skill-icons").children;
    gsap.from(skillIcons, {
      delay: 0.3,
      opacity: 0,
      y: 50,
      ease: "power3.out",
      duration: 0.5,
    });
  }, [skillList])

  return (
    <div id="skills" className="min-h-screen">
      <section
        className="code-section bg-white py-20 font-['Poppins']"
      >
        <div className="container mx-auto px-4 sm:px-12 xl:px-32 h-full">
          <h2
            id="skills-header"
            className="mb-8 text-center text-3xl font-bold xl:text-4xl 2xl:text-5xl text-slate-800"
          >
            My Expertise
          </h2>
          <h3
            id="skills-subtext"
            className="mx-auto mb-12 w-3/4 text-center font-thin text-gray-700"
          >
            I pride myself on my broad range of skills, which enables me to approach 
            various projects with unique problem-solving methods. My core capabilities are outlined below.
          </h3>
          <div className="flex flex-row">
            <div className="hidden w-[50%] xl:block relative">
              <Image
                src={serviceImage}
                alt="Hero"
                className="relative mt-8 h-full rounded-2xl object-cover lg:mt-0"
                data-media='{"id":"1536191188","src":"iStock","type":"image"}'
              />
            </div>
            <div className="xl:w-[60%]">
              <Pills labels={labels} handleClick={handleLabelClick} />
              <div id="skill-icons" className="grid w-full grid-cols-4 gap-y-12 md:grid-cols-5 md:gap-10">
                {skillList.map((skill, index) => (
                  <Skill
                    ref={(el) => (skillRefs.current[index] = el)}
                    key={index}
                    url={skill.url}
                    header={skill.header}
                    alt_text={skill.alt_text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
