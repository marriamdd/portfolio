"use client";
import React from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
export default function ContactAccord() {
  const [open, setOpen] = React.useState<string[]>([]);
  const handleClick = (prop: string) => {
    setOpen((prevClick) =>
      prevClick.includes(prop)
        ? prevClick.filter((item) => item !== prop)
        : [...prevClick, prop]
    );
  };
  const [click, setClick] = React.useState<string[]>([]);
  const handleInfoClick = (info: string) => {
    if (!click.includes(info)) {
      setClick((prevClick) => [info]);
    }
  };
  return (
    <div>
      {" "}
      <div
        className="xl:h-[80vh] 
       xl:w-[400px] 
       xl:border-r-[1px] xl:border-[#1E2D3D]  "
      >
        <div className="pt-[2rem] animate-fadeIn xl:w-[400px]">
          <h2 className="about-me text-[1.4rem] text-[#fff] leading-140 font-[450] pl-[2rem] ">
            _Contact-me
          </h2>
        </div>

        <Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              mt: 1,
            }}
            component="nav"
            aria-label="mailbox folders"
          >
            <List className="animate-fadeIn ">
              <ListItem onClick={() => handleClick("contact")}>
                <ListItemButton>
                  <ListItemText className="pl-[1rem]" primary="Contacts" />
                  {open.includes("contact") ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              {open.includes("contact") && (
                <div className="px-[2rem] py-[1rem] animate-fadeIn flex gap-[1.3rem] flex-col">
                  <div
                    onClick={() => handleInfoClick("email")}
                    className="flex gap-[1rem] items-center"
                  >
                    <EmailIcon style={{ color: "#607B96" }} />
                    <h2
                      className={`${
                        click.includes("email")
                          ? "text-[#3f5161]  all-transition duration-[1s] ease-out"
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
                    <PhoneIcon style={{ color: "#607B96" }} />
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
              <ListItem onClick={() => handleClick("info")}>
                <ListItemButton>
                  <ListItemText
                    className="pl-[1rem]"
                    primary="find-me-also-in"
                  />
                  {open.includes("info") ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse
                className="animate-fadeIn"
                component="li"
                in={open.includes("info")}
                timeout="auto"
                unmountOnExit
              >
                <List disablePadding>
                  <ListItem>
                    <ListItemButton sx={{ pl: 4 }}>
                      <Image
                        className="mr-[0.8rem]"
                        width={10}
                        height={10}
                        alt="blank"
                        src="/shared/Vector (8).svg"
                      />
                      <Link
                        className="text-[14px] hover:text-[#99a3ac] text-greyText font-[ 450]"
                        target="_blank"
                        href={"https://www.instagram.com/marriam.d/"}
                      >
                        Instagram
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton sx={{ pl: 4 }}>
                      <Image
                        className="mr-[0.8rem]"
                        width={10}
                        height={10}
                        alt="blank"
                        src="/shared/Vector (8).svg"
                      />
                      <Link
                        className="text-[14px] hover:text-[#99a3ac] text-greyText  font-[ 450]"
                        target="_blank"
                        href={
                          "https://www.facebook.com/profile.php?id=100002604311818"
                        }
                      >
                        Facebook
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton sx={{ pl: 4 }}>
                      <Image
                        className="mr-[0.8rem]"
                        width={10}
                        height={10}
                        alt="blank"
                        src="/shared/Vector (8).svg"
                      />
                      <Link
                        className="text-[14px] hover:text-[#99a3ac] text-greyText font-[ 450]"
                        target="_blank"
                        href={
                          "https://www.linkedin.com/in/mariam--davitashvili/"
                        }
                      >
                        Linkedin
                      </Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Box>
        </Box>
      </div>
    </div>
  );
}
