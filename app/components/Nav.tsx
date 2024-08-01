"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Button, Drawer } from "antd";
import type { DrawerProps } from "antd";
import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] =
    React.useState<DrawerProps["placement"]>("right");
  const showDrawer = () => {
    setOpen(true);
    console.log("ll");
  };

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleDrawerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      setOpen(false);
    }
  };
  return (
    <div className="flex items-center h-[57px] px-[2rem] animate-fadeIn">
      <div className="w-[350px] pl-[2rem]">
        <h1 className="name py-[1.4rem] xl:border-r-[1px] xl:border-[#1E2D3D]">
          Mariam Davitashvili
        </h1>
      </div>
      <div className=" all-transition duration-[1s] ease headerNav xl:flex hidden   w-full gap-[1rem]">
        <Link
          className="border-r-[1px] py-[1.4rem] border-[#1E2D3D]  all-transition duration-[1s] ease"
          href={"/"}
        >
          _hello
        </Link>
        <Link
          className="border-r-[1px] py-[1.4rem] border-[#1E2D3D]"
          href={"/about"}
        >
          _about
        </Link>

        <Link
          className="border-r-[1px] py-[1.4rem] border-[#1E2D3D]"
          href={"/projects"}
        >
          _projects
        </Link>
        <Link
          className="ml-auto border-l-[1px] py-[1.4rem] border-[#1E2D3D]"
          href={"/contact"}
        >
          _contact
        </Link>
      </div>
      <MenuIcon
        fontSize="large"
        className="ml-auto flex xl:hidden cursor-pointer text-[#607b96]"
        onClick={showDrawer}
      />

      <Drawer
        className="h-[55px] border-b-[1px] border-[red]"
        title="Mariam Davitashvili"
        onClose={onClose}
        open={open}
        onClick={handleDrawerClick}
      >
        <Link href={"/"}> _hello</Link>
        <Link href={"/about"}> _about</Link>
        <Link href={"/projects"}> _projects</Link>
        <Link href={"/contact"}> _contact</Link>
      </Drawer>
    </div>
  );
};

export default NavBar;
