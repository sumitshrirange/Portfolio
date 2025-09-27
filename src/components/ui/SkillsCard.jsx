import React from "react";
import { motion } from "motion/react";

function SkillsCard({ title, skills }) {
  const skillArray = skills.split(",").map((skill) => skill.trim());

  return (
    <motion.div
      drag="x"
      dragElastic={0.2}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      whileDrag={{ cursor: "grabbing", scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }}
      initial={{ x: 5 }}
      whileInView={{ x: 0 }}
      className="p-[.6px] lg:p-0 rounded-2xl lg:bg-none bg-gradient-to-tr from-black to-[#07e1c1]"
    >
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
    </motion.div>
  );
}

export default SkillsCard;
