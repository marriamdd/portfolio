import React from "react";
import { Metadata } from "next";
import CustomizedAccordions from "../components/Accordion";
import MultiActionAreaCard from "../components/ProjectsCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};
export default function Projects() {
  return (
    <div className="flex flex-col xl:flex-row w-[100%] ">
      <CustomizedAccordions />
      <MultiActionAreaCard />
    </div>
  );
}
