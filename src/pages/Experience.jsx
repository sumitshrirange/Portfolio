import React from "react";
import Heading from "../components/ui/Heading";
import { CalendarDays } from "lucide-react";
import { motion } from "motion/react";

const experienceData = [
  {
    domain: "Web Developer",
    company: "Prancevia Pvt. Ltd.",
    summary:
      "Working on developing responsive frontend interfaces and implementing backend functionalities for full-stack web applications. Collaborated with cross-functional teams to deliver efficient features, focusing on performance, API integration, reusable components, and clean, maintainable code.",
    startJob: "Jan'26",
    endJob: "Present",
  },
  {
    domain: "Full-Stack Developer | Intern",
    company: "Navodita Infotech",
    summary:
      "Gained hands-on experience in full-stack development and contributing to a real-life project. Collaborated with mentors to strengthen both technical and soft skills, improving teamwork and communication. Contributed to building the frontend and backend, ensuring optimized performance and usability.",
    startJob: "Oct'25",
    endJob: "Nov'25",
  },
  {
    domain: "Web Developer | Intern",
    company: "Anishree Technologies LLP",
    summary:
      "Gained hands-on experience in frontend development using HTML, CSS, JavaScript, and React.js. Collaborated with mentors to strengthen both technical and soft skills, improving teamwork and communication. Contributed to building and testing responsive web interfaces, ensuring optimized performance and usability.",
    startJob: "Jan'24",
    endJob: "Apr'24",
  },
];

function Experience() {
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="WORK" text2="EXPERIENCE" />
      <div className="mt-10">
        {experienceData.map((items) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            key={items.endJob}
            className="relative border-l-2 pb-15 pl-5 flex flex-col gap-5"
          >
            <span className="absolute -left-[7px] top-0 bg-white size-3 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">{items.domain}</h3>
              <span className="text-[#808080] text-sm">{items.company}</span>
            </div>
            <p className="text-sm">{items.summary}</p>
            <div className="flex items-center gap-1.5">
              <CalendarDays size={16} />
              <span className="text-[#808080] text-sm">
                {items.startJob} - {items.endJob}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
