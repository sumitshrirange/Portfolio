import React from "react";
import Heading from "../components/ui/Heading";
import theNewsImg from "../assets/thenew-img.png";
import foodieImg from "../assets/foodie-img.png";
import portfolioImg from "../assets/portfolio-img.png";
import { Dot, Github, Globe } from "lucide-react";

function Projects() {
  const dataProject = [
    {
      name: "Portfolio",
      githubLink: "https://github.com/sumitshrirange/Portfolio",
      liveLink: "https://sumit-shrirange.vercel.app/",
      thumbnail: portfolioImg,
      tech1: "React",
      tech2: "Tailwind CSS",
      tech3: "Lucide-React",
      tech4: "React-Dom",
      tech5: "Framer-Motion",
      tech6: "Figma",
    },
    {
      name: "The News",
      githubLink: "https://github.com/sumitshrirange",
      liveLink: "https://thenews-two.vercel.app/",
      thumbnail: theNewsImg,
      tech1: "React",
      tech2: "Node",
      tech3: "Express",
      tech4: "Tailwind CSS",
      tech5: "Google News API",
      tech6: "Google Gemini API",
    },
    {
      name: "Foodie",
      githubLink: "https://github.com/sumitshrirange/Foodie",
      liveLink: "https://foodie-e-commerce.netlify.app/",
      thumbnail: foodieImg,
      tech1: "React",
      tech2: "Redux",
      tech3: "React-Dom",
      tech4: "Tailwind CSS",
      tech5: "Framer-Motion",
      tech6: "Figma",
    },
    {
      name: "Pulsights",
      githubLink: "/",
      liveLink: "/",
      thumbnail:
        "https://t3.ftcdn.net/jpg/08/69/07/78/360_F_869077811_HjRjVEw3f8QiAlHK4PabeRl95WWAZRr6.jpg",
      tech1: "React",
      tech2: "Node",
      tech3: "Express",
      tech4: "Tailwind CSS",
      tech5: "MongoDB",
      tech6: "Framer-Motion",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="RECENT" text2="PROJECTS" />

      <div className="flex flex-row flex-wrap items-center justify-between lg:gap-10 gap-18">
        {dataProject.map((items) => (
          <div
            key={items.name}
            className="relative bg-[#35333448] p-5 mt-10 lg:w-[47%] lg:h-75 h-62 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span>{items.name}</span>

              <div className="flex items-center gap-4">
                <a href={items.githubLink}>
                  <Github size={20} />
                </a>
                <a href={items.liveLink}>
                  <Globe size={20} />
                </a>
              </div>
            </div>
            <div className="flex h-[65%] items-center overflow-hidden">
              <img
                src={items.thumbnail}
                className="object-cover"
                alt="the news project image"
                loading="lazy"
              />
            </div>
            <div className="absolute left-0 lg:top-52 top-45 bg-[#35333448] backdrop-blur-[7px] w-full rounded-2xl">
              <div className="p-4 lg:mt-10 mt-8 border-t-2">
                <div className="flex flex-col items-center gap-2 text-xs">
                  <span className="underline">Tech Stack</span>
                  <span className="flex items-center flex-wrap justify-center">
                    {items.tech1}
                    <Dot size={24} />
                    {items.tech2}
                    <Dot size={24} />
                    {items.tech3}
                    <Dot size={24} />
                    {items.tech4}
                    <Dot size={24} />
                    {items.tech5}
                    <Dot size={24} />
                    {items.tech6}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:mt-20 mt-27">
        <a
          href="https://github.com/sumitshrirange"
          className="flex items-center gap-2 text-sm font-semibold bg-[#35333448] w-fit px-7 py-2 rounded-full"
        >
          See All
          <Github size={16} strokeWidth={2.75} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
