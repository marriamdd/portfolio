// components/NavBar.tsx
"use client"; // Add this directive

import React, { useEffect, useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import CloseIcon from "../../assets/Vector.svg";
import Image from "next/image";
const NavBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar h-[55px]  ">
      <div className="logo">
        <h2 className="pr-[14rem]">Mariam Davitashvili</h2>
      </div>
      <div className="menu text-greyText">
        <Menu style={{}} className="bg-[#011627]" mode="horizontal">
          <Menu.Item
            className=" border-l-[1px] border-r-[1px] border-[#1E2D3D]"
            key="/"
          >
            <Link
              style={{ color: "#607B96" }}
              className="text-greyText"
              href="/"
            >
              _hello
            </Link>
          </Menu.Item>
          <Menu.Item
            className="border-l-[1px] border-r-[1px] border-[#1E2D3D]"
            key="about"
          >
            <Link
              style={{ color: "#607B96" }}
              className="text-greyText"
              href="/about"
            >
              _about-me
            </Link>
          </Menu.Item>
          <Menu.Item className="border-r-[1px] border-[#1E2D3D]" key="services">
            <Link style={{ color: "#607B96" }} href="/projects">
              _projects
            </Link>
          </Menu.Item>
          <Menu.Item
            style={{ marginLeft: "auto" }}
            className="border-l-[1px] border-[#1E2D3D]"
            key="contact"
          >
            <Link style={{ color: "#607B96" }} href="/contact">
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      <Button
        className="menu-button xl:hidden bg-[transparent] shadow-none"
        type="primary"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </Button>

      {visible && (
        <Drawer
          title="Mariam Davitashvili"
          placement="right"
          onClose={onClose}
          open={visible}
          closeIcon={
            <Image
              src={CloseIcon}
              alt="Close"
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
          }
        >
          <Menu mode="vertical">
            <Menu.Item className="border-t-[1px] border-[#1E2D3D]" key="home">
              <Link style={{ color: "#fff" }} href="/">
                {" "}
                _hello
              </Link>
            </Menu.Item>
            <Menu.Item className="border-t-[1px] border-[#1E2D3D]" key="about">
              <Link style={{ color: "#fff" }} href="/about">
                _About-me
              </Link>
            </Menu.Item>
            <Menu.Item
              className="border-t-[1px] border-[#1E2D3D]"
              key="projects"
            >
              <Link style={{ color: "#fff" }} href="/projects">
                _projects
              </Link>
            </Menu.Item>
            <Menu.Item
              className="border-t-[1px] border-[#1E2D3D]"
              key="contact"
            >
              <Link style={{ color: "#fff" }} href="/contact">
                _contact-me
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      )}
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          background: #001529;
        }
        .logo a {
          color: #fff;
          font-size: 20px;
          font-weight: bold;
        }
        .menu {
          flex: 1;
          display: none;
        }
        .menu-button {
          display: none;
        }
        @media (min-width: 1280px) {
          .menu {
            display: block;
          }
          .menu-button {
            display: none;
          }
        }
        @media (max-width: 1280px) {
          .menu {
            display: none;
          }
          .menu-button {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
