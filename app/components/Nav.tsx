"use client";

import React, { useEffect, useState } from "react";

import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const NavBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="navbar h-[55px]">
      <div className="logo">
        <h2 className="sm:pr-[14rem] pr-[0px]">Mariam Davitashvili</h2>
      </div>
      <div className="menu text-greyText">
        <Menu className="bg-[#011627]" mode="horizontal">
          <Menu.Item
            className="border-l-[1px] border-r-[1px] border-[#1E2D3D]"
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
          <Menu.Item className="border-r-[1px] border-[#1E2D3D]" key="about">
            <Link
              style={{ color: "#607B96" }}
              className="text-greyText"
              href="/about"
            >
              _About-me
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
              Contacts
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      <Button
        className="menu-button  bg-[transparent] shadow-none"
        type="primary"
        onClick={showDrawer}
        style={{ zIndex: 1050 }}
      >
        <MenuOutlined />
      </Button>

      <Drawer
        className="xl:hidden"
        title="Mariam Davitashvili"
        placement="right"
        onClose={onClose}
        open={visible}
        closeIcon={
          <CloseIcon sx={{ width: 24, height: 24, color: "#607B96" }} />
        }
        style={{ zIndex: 1040 }}
      >
        <div className="menuDiv  ">
          <Menu mode="vertical">
            <Menu.Item className="border-t-[1px] border-[#1E2D3D]" key="home">
              <Link
                onClick={() => setVisible(false)}
                style={{ color: "#fff" }}
                href="/"
              >
                _hello
              </Link>
            </Menu.Item>
            <Menu.Item className="border-t-[1px] border-[#1E2D3D]" key="about">
              <Link
                onClick={() => setVisible(false)}
                style={{ color: "#fff" }}
                href="/about"
              >
                _About-me
              </Link>
            </Menu.Item>
            <Menu.Item
              className="border-t-[1px] border-[#1E2D3D]"
              key="projects"
            >
              <Link
                onClick={() => setVisible(false)}
                style={{ color: "#fff" }}
                href="/projects"
              >
                _projects
              </Link>
            </Menu.Item>
            <Menu.Item
              className="border-t-[1px] border-[#1E2D3D]"
              key="contact"
            >
              <Link
                onClick={() => setVisible(false)}
                style={{ color: "#fff" }}
                href="/contact"
              >
                _contact-me
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Drawer>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
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
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
