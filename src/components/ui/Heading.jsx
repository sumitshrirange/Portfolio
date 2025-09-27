import React from "react";
import { motion } from "motion/react";

function Heading({
  text1,
  text2,
  align,
  size = "text-5xl md:text-7xl lg:text-8xl xl:text-9xl",
  primaryColor = "text-white",
  secondaryColor = "text-[#353334]",
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`${size} font-bold ${align} ${primaryColor}`}
    >
      {text1} <span className={secondaryColor}>{text2}</span>
    </motion.h1>
  );
}

export default Heading;
