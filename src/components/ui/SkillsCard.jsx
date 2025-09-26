import React from "react";

function SkillsCard({ title, skills }) {
  const skillArray = skills.split(",").map((skill) => skill.trim());

  return (
    <div className="p-[.6px] lg:p-0 rounded-2xl lg:bg-none bg-gradient-to-tr from-black to-[#07e1c1]">
      <div className="lg:bg-[#35333448] bg-[#181818] p-5 rounded-2xl h-full">
        <p className="text-center font-semibold lg:text-[#00d2b2]">{title}</p>

        <div className="flex flex-wrap items-center gap-2 lg:mt-10 mt-5">
          {skillArray.map((skill, index) => (
            <span
              key={index}
              className="lg:bg-[#35333448] bg-[#3533342d] lg:text-white text-[#07e1c1] py-1 px-3 rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
