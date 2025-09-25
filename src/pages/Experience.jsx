import React from "react";
import Heading from "../components/ui/Heading";
import { CalendarDays } from "lucide-react";

const experienceData = [
  {
    domain: "Web Development Intern",
    company: "Anishree Technologies LLP",
    summary:
      "Gained hands-on experience in frontend development using HTML, CSS, JavaScript, and React.js. Collaborated with mentors to strengthen both technical and soft skills, improving teamwork and communication. Contributed to building and testing responsive web interfaces, ensuring optimized performance and usability.",
    startJob: "Jan'24",
    endJob: "Apr'24",
  },
  // {
  //   domain: "Software Engineer",
  //   company: "-",
  //   summary:
  //     "Gained hands-on experience in frontend development using HTML, CSS, JavaScript, and React.js. Collaborated with mentors to strengthen both technical and soft skills, improving teamwork and communication. Contributed to building and testing responsive web interfaces, ensuring optimized performance and usability.",
  //   startJob: "Jun'26",
  //   endJob: "Present",
  // },
];

function Experience() {
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="WORK" text2="EXPERIENCE" />
      <div className="mt-10">
        {experienceData.map((items) => (
          <div className="relative border-l-2 pb-15 pl-5 flex flex-col gap-5">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
