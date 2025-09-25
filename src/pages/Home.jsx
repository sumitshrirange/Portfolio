import React from "react";
import Heading from "../components/ui/Heading";
import Projects from "./Projects";
import Experience from "./Experience";

// Reusable stat card component
const StatCard = React.memo(({ number, label }) => (
  <article className="w-18 lg:w-30 text-center lg:text-left">
    <h2 className="text-4xl lg:text-6xl font-bold">{number}</h2>
    <p className="text-[#818181] text-xs lg:text-base">{label}</p>
  </article>
));

function Home() {
  const stats = [
    { number: "+4", label: "MONTHS OF EXPERIENCE" },
    { number: "+12", label: "PROJECTS COMPLETED" },
    { number: "+18", label: "LANGUAGES LEARNT" },
  ];

  return (
    <div className="flex flex-col lg:gap-30 gap-20">
      <section className="flex flex-col items-center justify-center lg:inline">
        <Heading text1="SOFTWARE" text2="ENGINEER" />

        <p className="mt-5 mb-5 lg:mb-15 text-[#818181] text-justify">
          Aspiring Full Stack Web Developer skilled in building responsive and
          scalable applications using the MERN stack.{" "}
          <span className="hidden lg:inline">
            Proficient in JavaScript, RESTful APIs, and experienced in both
            front-end and back-end development with a focus on clean,
            maintainable code and practical problem-solving.
          </span>{" "}
          Currently looking for an opportunity to contribute, learn, and grow as
          a developer.
        </p>

        <div className="flex w-full items-center justify-between lg:justify-start lg:gap-8">
          {stats.map(({ number, label }) => (
            <StatCard key={label} number={number} label={label} />
          ))}
        </div>
      </section>

      <Projects/>
      <Experience/>
    </div>
  );
}

export default Home;
