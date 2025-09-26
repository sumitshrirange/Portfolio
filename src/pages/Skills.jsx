import React from "react";
import Heading from "../components/ui/Heading";
import SkillsCard from "../components/ui/SkillsCard";

function Skills() {
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="TECHNICAL" text2="SKILLS" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <SkillsCard
          title="Frontend Development"
          skills="JavaScript, React, Redux, HTML5, CSS, Tailwind CSS, Framer-Motion, GSAP"
        />
        <SkillsCard
          title="Backend Development"
          skills="Node.js, Express.js, NoSQL, MongoDB, Firebase"
        />
        <SkillsCard
          title="Programming Languages"
          skills="JavaScript, Java, Python, C, C++"
        />
        <SkillsCard
          title="Tools & Platforms"
          skills="Git, GitHub, Postman, VS Code"
        />
      </div>
    </section>
  );
}

export default Skills;
