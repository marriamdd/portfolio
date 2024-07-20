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
import fileIcon1 from "/public/Vector (5).svg";
import fileIcon2 from "/public/Vector (4).svg";
import Image from "next/image";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface ListItemLinkProps {
  to: string;
  open?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/inbox": "Inbox",
  "/inbox/important": "Personal",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink(props: ListItemLinkProps) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component="a" {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    "Personal",
  ]);
  const [click, setClick] = React.useState<string[]>([]);
  const handleClick = (prop: string) => {
    setOpen((prevOpen) => (prevOpen === prop ? null : prop));
  };

  const handleOptionClick = (option: string) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions((prevSelected) => [option]);
    }
  };

  const handleInfoClick = (info: string) => {
    if (!click.includes(info)) {
      setClick((prevSelected) => [info]);
    }
  };

  const handleDelete = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item !== option)
    );
  };
  const ArrowIcon = styled(ArrowDownwardIcon)`
    font-size: 36px;
    transition: transform 1s ease;
    transform: ${(props: { rotate: boolean }) =>
      props.rotate ? "rotate(90deg)" : "rotate(0deg)"};
  `;
  return (
    <>
      <div className="pt-[2rem] animate-fadeIn">
        <h2 className="text-[1.4rem] text-[#fff] leading-140 font-[450] pl-[2rem] ">
          _about-me
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
          <List className="animate-fadeIn ">
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
                  <ListItemButton sx={{ pl: 4 }}>
                    <Image
                      className="pr-[0.7rem]"
                      src={fileIcon1}
                      alt="fileIcon"
                    />
                    <ListItemText
                      className={`${
                        selectedOptions.includes("Personal")
                          ? "text-[#fff]"
                          : "text-greyText"
                      }`}
                      primary="Personal"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => handleOptionClick("Professional")}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Image
                      className="pr-[0.7rem]"
                      src={fileIcon2}
                      alt="fileIcon"
                    />
                    <ListItemText
                      className={`${
                        selectedOptions.includes("Professional")
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
                  <EmailIcon />
                  <h2
                    className={`${
                      click.includes("email")
                        ? "text-[#3f5161] all-transition duration-[1s] ease-out"
                        : "text-greyText all-transition duration-[1s] ease-out"
                    }`}
                  >
                    davitahvili.m3@gmail.com
                  </h2>
                </div>
                <div
                  onClick={() => handleInfoClick("number")}
                  className="flex gap-[1rem] items-center"
                >
                  <PhoneIcon />
                  <h2
                    className={`${
                      click.includes("number")
                        ? "text-[#3f5161] all-transition duration-[1s] ease-out"
                        : "text-greyText all-transition duration-[1s] ease-out"
                    }`}
                  >
                    {" "}
                    (+995) 551-10-48-62
                  </h2>
                </div>
              </div>
            )}
          </List>
        </Box>

        <Typography className="pl-[2rem]" variant="body1" sx={{ mt: 2 }}>
          <span className="text-[1.6rem] font-[450]">{"// Info  "}</span>
          <span className="text-greyText font-[450] text-[1.6rem]">
            {"/ " + selectedOptions.join(", ")}
          </span>
        </Typography>
      </Box>
      {selectedOptions.includes("Personal") && (
        <div className="px-[2rem] py-[2rem]">
          <p className="text-greyText animate-fadeIn leading-150 text-[1.6rem] font-[450]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo
            aut amet nesciunt atque blanditiis, quam et id sed tempore pariatur
            ratione. Quo nihil eaque molestias in, ipsa error accusantium. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Amet quos
            reiciendis odio quidem praesentium! Reprehenderit delectus
            laudantium numquam nihil hic saepe repellat ratione consequuntur,
            veniam ullam. Quia autem consectetur nihil! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Cupiditate repellat placeat
            vitae nobis porro dolorum beatae error ducimus repudiandae dicta.
            Sint quos perferendis accusamus temporibus in quaerat cumque illum!
            Quo?
          </p>
        </div>
      )}
      {selectedOptions.includes("Professional") && (
        <div className="px-[2rem] py-[2rem]">
          <p className="text-greyText animate-fadeIn leading-150 text-[1.6rem] font-[450]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo
            aut amet nesciunt atque blanditiis, quam et id sed tempore pariatur
            ratione. Quo nihil eaque molestias in, ipsa error accusantium. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Amet quos
            reiciendis odio quidem praesentium! Reprehenderit delectus
            laudantium numquam nihil hic saepe repellat ratione consequuntur,
            veniam ullam. Quia autem consectetur nihil! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Cupiditate repellat placeat
            vitae nobis porro dolorum beatae error ducimus repudiandae dicta.
            Sint quos perferendis accusamus temporibus in quaerat cumque illum!
            Quo?
          </p>
        </div>
      )}
      <ArrowIcon rotate={selectedOptions.includes("Personal")}>
        {" "}
        <ArrowDownwardIcon />
      </ArrowIcon>
    </>
  );
}
