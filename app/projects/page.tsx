import React from "react";
import { Metadata } from "next";
import CustomizedAccordions from "../components/Accordion";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};
export default function Projects() {
  return (
    <div>
      Projects
      <CustomizedAccordions />
    </div>
  );
}
