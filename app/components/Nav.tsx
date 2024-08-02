"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
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

  const [activeLink, setActiveLink] = React.useState<string | null>(null);
  return (
    <div className="flex items-center h-[57px] px-[2rem] animate-fadeIn">
      <div className="w-[350px] pl-[2rem]">
        <h1 className="name py-[1.4rem] xl:border-r-[1px] xl:border-[#1E2D3D]">
          Mariam Davitashvili
        </h1>
      </div>
      <div className=" all-transition duration-[1s] ease headerNav xl:flex hidden   w-full ">
        <Link
          onClick={() => setActiveLink("/")}
          className={`py-[1.4rem] border-r-[1px] border-[#1E2D3D] ${
            activeLink === "/" ? "border-b-[2px] border-b-[#3889e7]" : ""
          } text-[#1E2D3D] all-transition duration-[1s] ease`}
          href="/"
        >
          _hello
        </Link>
        <Link
          onClick={() => setActiveLink("/about")}
          className={`py-[1.4rem] border-r-[1px] border-[#1E2D3D] ${
            activeLink === "/about" ? "border-b-[2px] border-b-[#3889e7]" : ""
          } text-[#1E2D3D] all-transition duration-[1s] ease`}
          href={"/about"}
        >
          _about
        </Link>

        <Link
          onClick={() => setActiveLink("/projects")}
          className={`py-[1.4rem] border-r-[1px] border-[#1E2D3D] ${
            activeLink === "/projects"
              ? "border-b-[2px] border-b-[#3889e7]"
              : ""
          } text-[#1E2D3D] all-transition duration-[1s] ease`}
          href={"/projects"}
        >
          _projects
        </Link>
        <Link
          onClick={() => setActiveLink("/contact")}
          className={`ml-auto border-l-[1px] mr-[-1.5rem] py-[1.4rem] border-[#1E2D3D]
            ${
              activeLink === "/contact"
                ? "border-b-[2px] border-b-[#3889e7]"
                : ""
            } all-transition duration-[1s] ease`}
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
        className="h-[55px]   border-b-[1px] "
        title="Mariam Davitashvili"
        onClose={onClose}
        open={open}
        onClick={handleDrawerClick}
      >
        <Link className="hover:bg-[#607b96]  pl-[2rem]" href={"/"}>
          {" "}
          _hello
        </Link>
        <Link className="hover:bg-[#607b96]  pl-[2rem]" href={"/about"}>
          {" "}
          _about
        </Link>
        <Link className="hover:bg-[#607b96]  pl-[2rem]" href={"/projects"}>
          {" "}
          _projects
        </Link>
        <Link className="hover:bg-[#607b96]  pl-[2rem]" href={"/contact"}>
          {" "}
          _contact
        </Link>
      </Drawer>
    </div>
  );
};

export default NavBar;
