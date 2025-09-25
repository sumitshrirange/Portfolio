import React from "react";

function Heading({
  text1,
  text2,
  align = "text-center lg:text-start",
  size = "text-5xl md:text-7xl lg:text-8xl xl:text-9xl",
  primaryColor = "text-white",
  secondaryColor = "text-[#353334]",
}) {
  return (
    <h1 className={`${size} font-bold ${align} ${primaryColor}`}>
      {text1} <span className={secondaryColor}>{text2}</span>
    </h1>
  );
}

export default Heading;
