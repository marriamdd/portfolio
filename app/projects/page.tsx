"use client";
import React from "react";
// import { Metadata } from "next";
import CustomizedAccordions from "../components/Accordion";
import MultiActionAreaCard from "../components/ProjectsCard";

// export const metadata: Metadata = {
//   title: "Projects",
//   description: "Projects",
// };
export interface ISetFilteredProducts {
  id: number;
  name: string;
  teckstack: string[];
  img: string;
  liveLink: string;
  githubLink: string;
}

export default function Projects() {
  const [checked, setChecked] = React.useState<string[]>([]);
  return (
    <div className="flex flex-col xl:flex-row w-[100%] ">
      <CustomizedAccordions setChecked={setChecked} checked={checked} />
      <MultiActionAreaCard checked={checked} />
    </div>
  );
}
