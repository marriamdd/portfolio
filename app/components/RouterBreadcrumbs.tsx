"use client";
import * as React from "react";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import fileIcon2 from "/public/shared/Vector (4).svg";
import DownloadBtn from "./DownloadBtn";
import SkillsIcons from "./SkillsIcons";
import Data from "../../data.json";

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState<string | null>("info");
  const [selectedOption, setSelectedOption] =
    React.useState<string>("Personal");
  const [chosenOptions, setChosenOptions] = React.useState<string[]>([
    "Personal",
  ]);
  const [click, setClick] = React.useState<string[]>([]);

  const handleClick = (prop: string) => {
    setOpen((prevOpen) => (prevOpen === prop ? null : prop));
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (!chosenOptions.includes(option)) {
      setChosenOptions((prevChosen) => [...prevChosen, option]);
    }
  };

  const handleInfoClick = (info: string) => {
    if (!click.includes(info)) {
      setClick([info]);
    }
  };

  const handleDelete = (option: string) => {
    setChosenOptions((prevChosen) =>
      prevChosen.filter((item) => item !== option)
    );
  };
  React.useEffect(() => {
    if (chosenOptions.length == 1) {
      setSelectedOption(chosenOptions[0]);
    }
  }, [chosenOptions]);

  return (
    <div className="xl:flex xl:h-[80vh]">
      <div className="xl:h-[80vh] xl:w-[400px] xl:border-r-[1px] xl:border-[#1E2D3D]">
        <div className="pt-[2rem] animate-fadeIn xl:w-[400px]">
          <h2 className="about-me text-[1.6rem] pb-[2rem] text-[#fff] leading-140 font-[650] pl-[2rem]">
            _About-me
          </h2>
        </div>
        <div className="flex flex-col w-[full] gap-[1rem]">
          <nav
            className="box mt-[1rem] gap-[1rem]"
            aria-label="mailbox folders"
          >
            <ul className="animate-fadeIn flex flex-col gap-[0.5rem]">
              <li
                className="pl-[2rem] py-[1rem] bg-[#1E2D3D]"
                onClick={() => handleClick("info")}
              >
                <div className="flex items-center ">
                  <Image
                    className={` h-[7px] all-transition duration-[0.5s] ease-out ${
                      open === "info" ? "rotate-90" : ""
                    }`}
                    width={12.728}
                    height={4.778}
                    alt="arrowDown"
                    src="/shared/Vector (6).svg"
                  />
                  <span className="pl-[1rem] text-[1.6rem] font-[500]">
                    Info
                  </span>
                </div>
              </li>
              <div className="animate-fadeIn ">
                <ul
                  className={`${
                    open === "info" ? "flex " : " hidden "
                  }  animate-fadeIn  all-transition duration-[0.5s] ease-out flex-col gap-[1rem] my-[1rem] ml-[3rem]`}
                >
                  <li onClick={() => handleOptionClick("Personal")}>
                    <div className="ml-[2px] flex items-center">
                      <Image
                        className={`mr-[0.5rem] h-[7px] all-transition duration-[0.5s] ease-out ${
                          selectedOption === "Personal" ? "rotate-90" : ""
                        }`}
                        width={12.728}
                        height={4.778}
                        alt="arrowDown"
                        src="/shared/Vector (6).svg"
                      />
                      <Image
                        width={12.728}
                        height={7.8}
                        className="mr-[0.7rem]"
                        src="/shared/Vector (5).svg"
                        alt="fileIcon"
                      />
                      <span className="text-greyText hover:text-[white] text-[16px] font-[550]">
                        Personal
                      </span>
                    </div>
                  </li>
                  <li onClick={() => handleOptionClick("Professional")}>
                    <div className="ml-[2px] flex items-center">
                      <Image
                        className={`mr-[0.5rem] h-[7px] all-transition duration-[0.5s] ease-out ${
                          selectedOption === "Professional" ? "rotate-90" : ""
                        }`}
                        width={12.728}
                        height={7.8}
                        alt="arrowDown"
                        src="/shared/Vector (6).svg"
                      />
                      <Image
                        src={fileIcon2}
                        alt="fileIcon"
                        width={12.728}
                        height={7.8}
                        className="mr-[0.7rem]"
                      />
                      <span className="text-greyText hover:text-[white] text-[16px] font-[550]">
                        Professional
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <li
                className="pl-[2rem] py-[1rem] bg-[#1E2D3D]"
                onClick={() => handleClick("contact")}
              >
                <div className="  flex items-center">
                  <Image
                    className={` h-[7px] all-transition duration-[0.5s] ease-out ${
                      open === "contact" ? "rotate-90" : ""
                    }`}
                    width={12.728}
                    height={4.778}
                    alt="arrowDown"
                    src="/shared/Vector (6).svg"
                  />
                  <span className="pl-[1rem] text-[16px] font-[550]">
                    {" "}
                    Contact{" "}
                  </span>
                </div>
              </li>
              {open === "contact" && (
                <div className="px-[2rem] py-[1rem] animate-fadeIn flex gap-[1.3rem] flex-col">
                  <div
                    onClick={() => handleInfoClick("email")}
                    className="flex gap-[1rem] items-center"
                  >
                    <EmailIcon style={{ color: "#607B96" }} />
                    <h2 className="text-greyText hover:text-[#3f5161] all-transition duration-[1s] ease-out">
                      {Data.gmail}
                    </h2>
                  </div>
                  <div
                    onClick={() => handleInfoClick("number")}
                    className="flex gap-[1rem] items-center"
                  >
                    <PhoneIcon
                      className="PhoneIcon"
                      style={{ color: "#607B96" }}
                    />
                    <h2 className="text-greyText hover:text-[#3f5161] all-transition duration-[1s] ease-out">
                      {" "}
                      {Data.phone}
                    </h2>
                  </div>
                </div>
              )}
            </ul>
          </nav>

          <Typography
            className="pl-[2rem]  xl:hidden"
            variant="body1"
            sx={{ mt: 2 }}
          >
            <span className="text-[1.6rem] font-[450]">{"// Info "}</span>

            <span className="text-greyText font-[450] text-[1.6rem]">
              {"/ " + selectedOption}
            </span>
          </Typography>
        </div>
      </div>
      <div className="w-[100%]">
        <div className=" xl:w-[100%] border-b-[1px] border-r-[1px] border-[#1E2D3D] xl:bg  items-center  hidden xl:flex">
          {chosenOptions.map((option) => (
            <div
              key={option.toLocaleLowerCase()}
              onClick={() => setSelectedOption(option)}
              className="flex border-r-[1px] animate-fadeIn border-[#1E2D3D] items-center bg-gray-200 p-2 m-2 rounded"
            >
              <Typography className="text-[greyText]" sx={{ mr: 1 }}>
                {option}
              </Typography>
              <IconButton
                onClick={() => {
                  handleDelete(option);
                }}
                disabled={chosenOptions.length <= 1}
              >
                <CloseIcon style={{ color: "#607B96" }} />
              </IconButton>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="xl:border-r-[1px] animate-fadeIn xl:border-[#1E2D3D] xl:w-[50rem] xl:pt-[2rem]   xl:min-h-[74vh]">
            <Typography
              className="pl-[2rem] hidden xl:flex "
              variant="body1"
              sx={{ mt: 2 }}
            >
              <span className="text-[1.6rem] font-[450]">
                {"// Info "}&nbsp;
              </span>
              <span className="text-greyText font-[450] text-[1.6rem]">
                {" / " + selectedOption}
              </span>
            </Typography>
            {selectedOption === "Personal" && (
              <div className="px-[2rem] py-[2rem]">
                <p
                  className="text-greyText xl:w-[40rem]  
             animate-fadeIn leading-150 text-[1.6rem] font-[450]"
                >
                  {Data.personalInfo}
                </p>
              </div>
            )}
            {selectedOption === "Professional" && (
              <div className="px-[2rem] py-[2rem]">
                <p
                  className="text-greyText xl:w-[40rem]
             animate-fadeIn leading-150 text-[1.6rem] font-[450]"
                >
                  {Data.proffesionalInfo}
                </p>
              </div>
            )}
          </div>
          <div className="skills animate-fadeIn">
            <p>Skills</p>
            <SkillsIcons />
            <a download href="/Doc/CV Mariam Davitashvili .pdf">
              <DownloadBtn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
