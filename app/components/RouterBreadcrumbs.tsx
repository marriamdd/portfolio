"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import fileIcon2 from "/public/shared/Vector (4).svg";
import DownloadBtn from "./DownloadBtn";
import SkillsIcons from "./SkillsIcons";
import Data from "/Users/mariamidavitashvili/portfolio/data.json";

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
          <h2 className="about-me text-[1.4rem] text-[#fff] leading-140 font-[450] pl-[2rem]">
            _About-me
          </h2>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column", width: 360 }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              mt: 1,
            }}
            component="nav"
            aria-label="mailbox folders"
          >
            <List className="animate-fadeIn">
              <ListItem onClick={() => handleClick("info")}>
                <ListItemButton>
                  <ListItemText className="pl-[1rem]" primary="Info" />
                  {open === "info" ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse
                className="animate-fadeIn"
                component="li"
                in={open === "info"}
                timeout="auto"
                unmountOnExit
              >
                <List disablePadding>
                  <ListItem onClick={() => handleOptionClick("Personal")}>
                    <ListItemButton sx={{ ml: -2 }}>
                      <Image
                        className={`mr-[1rem] h-[7px] all-transition duration-[0.5s] ease-out ${
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
                      <ListItemText
                        className={`${
                          selectedOption === "Personal"
                            ? "text-[#fff]"
                            : "text-greyText"
                        }`}
                        primary="Personal"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem onClick={() => handleOptionClick("Professional")}>
                    <ListItemButton sx={{ ml: -2 }}>
                      <Image
                        className={`mr-[1rem] h-[7px] all-transition duration-[0.5s] ease-out ${
                          selectedOption === "Professional" ? "rotate-90" : ""
                        }`}
                        width={12.728}
                        height={4.778}
                        alt="arrowDown"
                        src="/shared/Vector (6).svg"
                      />
                      <Image
                        className="pr-[0.7rem]"
                        src={fileIcon2}
                        alt="fileIcon"
                      />
                      <ListItemText
                        className={`${
                          selectedOption === "Professional"
                            ? "text-[#fff]"
                            : "text-greyText"
                        }`}
                        primary="Professional"
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem onClick={() => handleClick("contact")}>
                <ListItemButton>
                  <ListItemText className="pl-[1rem]" primary="Contact" />
                  {open === "contact" ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              {open === "contact" && (
                <div className="px-[2rem] py-[1rem] animate-fadeIn flex gap-[1.3rem] flex-col">
                  <div
                    onClick={() => handleInfoClick("email")}
                    className="flex gap-[1rem] items-center"
                  >
                    <EmailIcon style={{ color: "#607B96" }} />
                    <h2
                      className={`${
                        click.includes("email")
                          ? "text-[#3f5161] all-transition duration-[1s] ease-out"
                          : "text-greyText all-transition duration-[1s] ease-out"
                      }`}
                    >
                      {Data.gmail}
                    </h2>
                  </div>
                  <div
                    onClick={() => handleInfoClick("number")}
                    className="flex gap-[1rem] items-center"
                  >
                    <PhoneIcon style={{ color: "#607B96" }} />
                    <h2
                      className={`${
                        click.includes("number")
                          ? "text-[#3f5161] all-transition duration-[1s] ease-out"
                          : "text-greyText all-transition duration-[1s] ease-out"
                      }`}
                    >
                      {" "}
                      {Data.phone}
                    </h2>
                  </div>
                </div>
              )}
            </List>
          </Box>

          <Typography
            className="pl-[2rem] xl:hidden"
            variant="body1"
            sx={{ mt: 2 }}
          >
            <span className="text-[1.6rem] font-[450]">{"// Info "}</span>

            <span className="text-greyText font-[450] text-[1.6rem]">
              {"/ " + selectedOption}
            </span>
          </Typography>
        </Box>
      </div>
      <div className="w-[100%]">
        <div className=" xl:w-[100%] border-b-[1px] border-r-[1px] border-[#1E2D3D] xl:bg  items-center  hidden xl:flex">
          {chosenOptions.map((option) => (
            <div
              key={option}
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
          <div className="xl:border-r-[1px] animate-fadeIn xl:border-[#1E2D3D] xl:w-[50rem]  xl:min-h-[74vh]">
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
