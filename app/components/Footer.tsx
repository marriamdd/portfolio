"use client";
import React from "react";
import bgMobile from "../../assets/bg-main-mobile.png";
import { Button, Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import linkedin from "/public/linkedin.svg";
import facebook from "/public/facebook.svg";
import github from "/public/github.svg";
function Footer() {
  return (
    <footer
      style={{ position: "fixed", bottom: "2rem" }}
      className="m-[2rem]  h-[55px] rounded-lg border border-[#1E2D3D] bg-[#011627]"
    >
      <div className="navbar h-[55px]  ">
        <div className="menu text-greyText">
          <Menu className="bg-[#011627] h-[55px] " mode="horizontal">
            <h2 className="sm:pr-[10rem] text-[#607B96] text-[1.6rem] font-[600] pr-[0px] pl-[2rem] pt-[1.5rem]">
              find me in :
            </h2>

            <div className=" border-l-[1px] xl:ml-[0px] ml-auto pt-[1.3rem] px-[1.2rem] border-r-[1px] border-[#1E2D3D]">
              <a
                style={{ color: "#607B96" }}
                className="text-greyText"
                href="https://www.facebook.com/profile.php?id=100002604311818"
                target="_blank"
              >
                <Image
                  src={facebook}
                  alt="facebook"
                  width={24}
                  height={24}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
            <div className="border-r-[1px] xl:mr-auto px-[1.2rem] pt-[1.3rem] border-[#1E2D3D]">
              <a
                style={{ color: "#607B96" }}
                href="https://www.linkedin.com/in/mariam--davitashvili/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={24}
                  height={24}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
            <div className=" px-[1.2rem] xl:pt-[.3rem] xl:border-l-[1px] pt-[1.3rem] border-r-[1px] border-[#1E2D3D]">
              <a
                style={{ color: "#607B96" }}
                className="text-greyText flex flex-row "
                href="https://github.com/marriamdd"
                target="_blank"
              >
                <span className="hidden  xl:inline text-[16px] text-[#607B96] font-[650]">
                  @marriamdd &nbsp;
                </span>
                <Image
                  src={github}
                  alt="github"
                  width={24}
                  height={24}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </Menu>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
