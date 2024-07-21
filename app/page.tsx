import Image from "next/image";

import Link from "next/link";

import code from "/public/shared/code-snippet-no-opacity (1).svg";
import codeOp from "/public/shared/code-snippet.png";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hello",
  description: "Learn more about me",
};
export default function Home() {
  return (
    <div className="mainPage  xl:flex animate-fadeIn justify-center">
      <div className="flex flex-col xl:flex-1  gap-[9rem] transition-all duration-[1s] ease  mt-[3rem] mx-[2rem] xl:ml-[12rem] xl:pt-[8rem] ">
        <div className="flex flex-col gap-[1.5rem] pt-[3rem]">
          <span className="text-[#E5E9F0] text-[1.4rem] font-[450]">
            Hi all. I am
          </span>
          <h2 className="text-[#E5E9F0] text-[4.3rem] md:text-[6.2rem] transition-all duration-1000 ease  font-[330]">
            Mariam Davitashvili
          </h2>
          <span className="text-[#43D9AD] text-[2rem] font-[450]">
            {" "}
            &gt; Front-end developer
          </span>
        </div>
        <div className="flex flex-col h-[6rem] ">
          <span className="text-[#607B96]">\\ find my profile on Github:</span>
          <br />
          <Link target="_blank" href={"https://github.com/marriamdd"}>
            <span style={{ color: "rgb(77, 91, 206)" }}> const</span>{" "}
            <span style={{ color: "rgb(67, 217, 173)" }}>githubLink</span>
            <span>&nbsp; = </span>{" "}
            <span style={{ color: "#FEA55F" }}>
              https://github.com/marriamdd
            </span>
          </Link>
        </div>
      </div>
      <div className="hidden all-transition animate-fadeIn duration-[1s] ease-out xl:flex flex-col gap-[2rem] xl:ml-[-4rem] xl:pt-[8rem] flex-1">
        <Image src={codeOp} alt="" />
        <Image src={code} alt="" />
        <Image src={codeOp} alt="" />
      </div>
    </div>
  );
}
