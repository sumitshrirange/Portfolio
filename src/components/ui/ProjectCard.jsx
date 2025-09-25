import portfolioImg from "../../assets/portfolio-img.png";
import theNewsImg from "../../assets/thenew-img.png";
import foodieImg from "../../assets/foodie-img.png";
import { Dot, Github, Globe } from "lucide-react";

function ProjectCard() {
  const dataProject = [
    {
      name: "Portfolio",
      githubLink: "https://github.com/sumitshrirange/Portfolio",
      liveLink: "https://sumit-shrirange.vercel.app/",
      thumbnail: portfolioImg,
      techStack: [
        "React",
        "Tailwind CSS",
        "Lucide-React",
        "React-Dom",
        "Framer-Motion",
      ],
    },
    {
      name: "The News",
      githubLink: "https://github.com/sumitshrirange",
      liveLink: "https://thenews-two.vercel.app/",
      thumbnail: theNewsImg,
      techStack: [
        "React",
        "Node",
        "Express",
        "Tailwind CSS",
        "Google News API",
        "Google Gemini API",
      ],
    },
    {
      name: "Foodie",
      githubLink: "https://github.com/sumitshrirange/Foodie",
      liveLink: "https://foodie-e-commerce.netlify.app/",
      thumbnail: foodieImg,
      techStack: [
        "React",
        "Redux",
        "React-Dom",
        "Tailwind CSS",
        "Framer-Motion",
      ],
    },
    {
      name: "Pulsights",
      githubLink: "/",
      liveLink: "/",
      thumbnail:
        "https://t3.ftcdn.net/jpg/08/69/07/78/360_F_869077811_HjRjVEw3f8QiAlHK4PabeRl95WWAZRr6.jpg",
      techStack: [
        "React",
        "Node",
        "Express",
        "Tailwind CSS",
        "MongoDB",
        "NoSQL",
      ],
    },
  ];

  return (
    <div className="flex flex-row flex-wrap items-center justify-between lg:gap-10 gap-18">
      {dataProject.map((project) => (
        <div
          key={project.name}
          className="relative bg-[#35333448] p-5 mt-10 lg:w-[47%] lg:h-75 h-62 rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span>{project.name}</span>
            <div className="flex items-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="flex h-[65%] items-center overflow-hidden">
            <img
              src={project.thumbnail}
              className="object-cover"
              alt={`${project.name} project`}
              loading="lazy"
            />
          </div>

          {/* Tech Stack */}
          <div className="absolute left-0 lg:top-52 top-45 bg-[#35333448] backdrop-blur-[7px] w-full rounded-2xl">
            <div className="p-4 lg:mt-10 mt-8 border-t-2">
              <div className="flex flex-col items-center gap-2 text-xs">
                <span className="underline">Tech Stack</span>
                <span className="flex items-center flex-wrap justify-center">
                  {project.techStack.map((tech, index) => (
                    <span key={tech} className="flex items-center">
                      {tech}
                      {index < project.techStack.length - 1 && (
                        <Dot size={24} />
                      )}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
