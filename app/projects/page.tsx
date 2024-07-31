"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import CustomizedAccordions from "../components/Accordion";
import MultiActionAreaCard from "../components/ProjectsCard";
import OnGithubBTN from "../components/OnGithubBTN";

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

  const title = "Projects";
  const description =
    "Projects page with dynamic content, showcasing various tech stacks and projects.";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Head>
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col xl:flex-row w-[100%] xl:h-[100%] xl:overflow-y-scroll">
        <CustomizedAccordions setChecked={setChecked} checked={checked} />
        <div className="flex flex-col w-full overflow-y-auto">
          <MultiActionAreaCard checked={checked} />
          <div className="mt-4">
            <OnGithubBTN />
          </div>
        </div>
      </div>
    </>
  );
}
