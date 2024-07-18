import Image from "next/image";
import bgMobile from "../assets/bg-main-desktop.png";
import { url } from "inspector";
import Link from "next/link";
export default function Home() {
  return (
    <div className="mainPage">
      <div>
        <div>
          <span>Hi all. I am</span>
          <h2>Mariam Davitashvili</h2>
          <span> Front-end developer</span>
        </div>
        <div>
          <span>\\ find my profile on Github:</span>
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
    </div>
  );
}
