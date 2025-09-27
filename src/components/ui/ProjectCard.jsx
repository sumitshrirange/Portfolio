import portfolioImg from "../../assets/portfolio-img.png";
import theNewsImg from "../../assets/thenew-img.png";
import foodieImg from "../../assets/foodie-img.png";
import { Dot, Github, Globe } from "lucide-react";
import { motion } from "motion/react";

function ProjectCard() {
  const dataProject = [
    {
      name: "Portfolio",
      githubLink: "https://github.com/sumitshrirange/Portfolio",
      liveLink: "https://sumit-shrirange.vercel.app/",
      thumbnail: portfolioImg,
      techStack: ["React", "Tailwind CSS", "React-Dom", "Framer-Motion"],
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
        "News API",
        "Gemini API",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {dataProject.map((project) => (
        <motion.div
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          whileDrag={{ cursor: "grabbing", scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 5 }}
          initial={{ x: 8 }}
          whileInView={{ x: 0 }}
          key={project.name}
          className="p-[.6px] lg:p-0 rounded-2xl lg:bg-none bg-gradient-to-tr from-[#151312] to-[#07e1c1]"
        >
          <div
            key={project.name}
            className="relative lg:bg-[#35333448] bg-[#181818] p-5 rounded-2xl h-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#07e1c1] lg:text-white">
                {project.name}
              </span>
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
            <div className="flex md:h-50 lg:h-42 h-34 items-center overflow-hidden rounded-t-lg">
              <img
                src={project.thumbnail}
                className="object-cover w-full h-full"
                alt={`${project.name} project`}
              />
            </div>

            {/* Tech Stack */}
            <div className="bg-[#35333448] w-full rounded-b-lg">
              <div className="pt-5">
                <div className="flex py-3 px-1 border-t-2 flex-col items-center gap-2 text-xs">
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
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard;
