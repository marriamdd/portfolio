"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Antd from "/public/skills/antd.png";
import Css from "/public/skills/css-3.png";
import Git from "/public/skills/git.png";
import Html from "/public/skills/html.png";
import Api from "/public/skills/icons8-rest-api-96.png";
import Next from "/public/skills/next.svg";
import Js from "/public/skills/js.png";
import MaterialUI from "/public/skills/png-transparent-material-ui-hd-logo.png";
import React from "/public/skills/reactLogo.png";
import Styled from "/public/skills/styled-components.png";
import Tailwind from "/public/skills/tailwind.png";
import Type from "/public/skills/typescript.png";
import { useState } from "react";

const SkillsIcons = () => {
  const icons = [
    Js,
    Css,
    Html,
    Next,
    React,
    Git,
    Type,
    Api,
    Antd,
    MaterialUI,
    Styled,
    Tailwind,
  ];

  const [rotate, setRotate] = useState(Array(icons.length).fill(false));

  const handleIconClick = (index: number) => {
    setRotate((prevRotate) =>
      prevRotate.map((rot, idx) => (idx === index ? !rot : rot))
    );
  };

  return (
    <div className="flex gap-[2rem] flex-col items-center pt-[3rem] pb-[5rem]">
      <div className="grid grid-cols-5 gap-[4rem] p-4">
        {icons.slice(0, 5).map((icon, index) => (
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
              src={icon}
              alt={`Icon ${index}`}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-[3rem] p-4 align-middle">
        {icons.slice(5, 9).map((icon, index) => (
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
              src={icon}
              alt={`Icon ${index}`}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[2rem] p-4">
        {icons.slice(9, 12).map((icon, index) => (
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
              src={icon}
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
