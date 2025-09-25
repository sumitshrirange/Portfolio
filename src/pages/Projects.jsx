import Heading from "../components/ui/Heading";
import ProjectCard from "../components/ui/ProjectCard";
import { Github } from "lucide-react";

function Projects() {
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="RECENT" text2="PROJECTS" />

      <ProjectCard/>

      <div className="flex justify-center mt-6">
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
