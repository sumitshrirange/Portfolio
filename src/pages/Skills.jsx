import React from "react";
import Heading from "../components/ui/Heading";
import SkillsCard from "../components/ui/SkillsCard";
import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "../seo/seoConfig";

function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills | {SITE_NAME}</title>
        <meta
          name="description"
          content="Technical skills including React, JavaScript, Node.js, MongoDB, REST APIs, and modern web development tools."
        />
        <link rel="canonical" href={`${SITE_URL}/skills`} />
      </Helmet>

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
    </>
  );
}

export default Skills;
