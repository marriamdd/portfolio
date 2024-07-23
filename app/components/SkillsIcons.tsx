"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Data from "/Users/mariamidavitashvili/portfolio/data.json";

const SkillsIcons = () => {
  const [rotate, setRotate] = useState(Array(Data.skills.length).fill(false));

  const handleIconClick = (index: number) => {
    setRotate((prevRotate) =>
      prevRotate.map((rot, idx) => (idx === index ? !rot : rot))
    );
  };
  console.log(Data.skills.length);
  return (
    <div className="flex gap-[2rem]  flex-col items-center pt-[3rem] pb-[5rem]">
      <div className="grid grid-cols-5 gap-[4rem] p-4">
        {Data.skills.slice(0, 5).map((icon, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              rotate: rotate[index] ? 360 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: { duration: 1 },
            }}
            onClick={() => handleIconClick(index)}
          >
            <Image
              width={50}
              height={50}
              src={icon.logo}
              alt={`Icon ${index}`}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-[3rem] p-4 align-middle">
        {Data.skills.slice(5, 9).map((icon, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              rotate: rotate[index + 5] ? 360 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: { duration: 1 },
            }}
            onClick={() => handleIconClick(index + 5)}
          >
            <Image
              width={50}
              height={50}
              src={icon.logo}
              alt={`Icon ${index}`}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[2rem] p-4">
        {Data.skills.slice(9, 12).map((icon, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              rotate: rotate[index + 9] ? 360 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              rotate: { duration: 1 },
            }}
            onClick={() => handleIconClick(index + 9)}
          >
            <Image
              width={50}
              height={50}
              src={icon.logo}
              alt={`Icon ${index}`}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsIcons;
