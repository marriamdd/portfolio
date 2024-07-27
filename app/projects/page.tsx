"use client";
import React from "react";
// import { Metadata } from "next";
import CustomizedAccordions from "../components/Accordion";
import MultiActionAreaCard from "../components/ProjectsCard";
import OnGithubBTN from "../components/OnGithubBTN";

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
    <div className="flex flex-col xl:flex-row w-[100%] h-[100%] overflow-y-hidden">
      <CustomizedAccordions setChecked={setChecked} checked={checked} />
      <div className="flex flex-col w-full overflow-y-auto">
        <MultiActionAreaCard checked={checked} />
        <div className="mt-4">
          <OnGithubBTN />
        </div>
      </div>
    </div>
  );
}
