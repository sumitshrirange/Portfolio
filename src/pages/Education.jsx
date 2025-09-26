import React from "react";
import Heading from "../components/ui/Heading";
import { CalendarDays } from "lucide-react";

function Education() {
  const educationData = [
    {
      college: "Loksewa Jr. College Kosamtondi, India",
      stream: "SSC (Class X)",
      score: "Percentage: 81.20%",
      subjects:
        "English, Hindi, Marathi, Mathematics, Science & Technology, Social Science",
      startClg: "2019",
      endClg: "2020",
    },
    {
      college: "Navjeevan Vidyalaya & Jr. Sci. College Sakoli, India",
      stream: "HSC (Class XII)",
      score: "Percentage: 60.83%",
      subjects:
        "Physics, Chemistry, Mathematics & Statistics, Biology, English, Marathi",
      startClg: "2021",
      endClg: "2022",
    },
    {
      college: "Wainganga College of Engineering & Management, Nagpur",
      stream: "Computer Science & Engineering",
      score: "CGPA: 6.52",
      subjects:
        "Data Structures, Operating Systems, DBMS, Computer Networks, Theory of Computation, Artificial Intelligence, Machine Learning, Deep Learning, Software Engineering & Project Management",
      startClg: "2022",
      endClg: "Present",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="MAJOR" text2="EDUCATION" />
      <div className="mt-10">
        {educationData.map((items) => (
          <div
            key={items.college}
            className="relative border-l-2 pb-15 pl-5 flex flex-col gap-5"
          >
            <span className="absolute -left-[7px] top-0 bg-white size-3 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">{items.college}</h3>
              <span className="text-[#808080] text-sm">
                {items.stream} | {items.score}
              </span>
            </div>
            <p className="text-sm">
              <span className="font-semibold mr-1 text-[#07bea2]">
                Subjects:
              </span>
              {items.subjects}
            </p>
            <div className="flex items-center gap-1.5">
              <CalendarDays size={16} />
              <span className="text-[#808080] text-sm">
                {items.startClg} - {items.endClg}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
