"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Data from "../../data.json";

const SkillsIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleIconMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleIconMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex gap-[2rem] flex-col items-center pt-[3rem] pb-[5rem]">
      <div className="grid grid-cols-5 gap-[4rem] p-4">
        {Data.skills.slice(0, 5).map((icon, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => handleIconMouseEnter(index)}
            onMouseLeave={handleIconMouseLeave}
            animate={{
              scale: [1, 1.2, 1],
              rotate: hoveredIndex === index ? 360 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: { duration: 0.5 },
            }}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              width={50}
              height={50}
              src={icon.logo}
              alt={`Icon ${index}`}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-[3rem] p-4 align-middle">
        {Data.skills.slice(5, 9).map((icon, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => handleIconMouseEnter(index + 5)}
            onMouseLeave={handleIconMouseLeave}
            animate={{
              scale: [1, 1.2, 1],
              rotate: hoveredIndex === index + 5 ? 360 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: { duration: 0.5 },
            }}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              width={50}
              height={50}
              src={icon.logo}
              alt={`Icon ${index + 5}`}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[2rem] p-4">
        {Data.skills.slice(9, 12).map((icon, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => handleIconMouseEnter(index + 9)}
            onMouseLeave={handleIconMouseLeave}
            animate={{
              scale: [1, 1.2, 1],
              rotate: hoveredIndex === index + 9 ? 360 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: { duration: 0.5 },
            }}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              width={50}
              height={50}
              src={icon.logo}
              alt={`Icon ${index + 9}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsIcons;
