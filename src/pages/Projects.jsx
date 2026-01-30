import Heading from "../components/ui/Heading";
import ProjectCard from "../components/ui/ProjectCard";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "../seo/seoConfig";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | {SITE_NAME}</title>
        <meta
          name="description"
          content="Explore real-world web and full stack projects built using React, Node.js, MongoDB, and modern technologies."
        />
        <link rel="canonical" href={`${SITE_URL}/projects`} />
      </Helmet>

      <section className="flex flex-col items-center justify-center lg:inline">
        <Heading text1="RECENT" text2="PROJECTS" />

        <ProjectCard />

        <div className="flex justify-center mt-6 p-[.6px] lg:p-0 rounded-2xl lg:bg-none bg-gradient-to-tr from-[#0a0909] to-[#07e1c1]">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 5 }}
            href="https://github.com/sumitshrirange"
            className="flex items-center gap-2 text-sm font-semibold lg:bg-[#35333448] bg-[#181818] w-fit px-7 py-2 rounded-full"
          >
            See All
            <Github size={16} strokeWidth={2.75} />
          </motion.a>
        </div>
      </section>
    </>
  );
}

export default Projects;
