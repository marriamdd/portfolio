"use client";
import React from "react";
import Data from "../../data.json";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
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
          <h2 className="about-me text-[1.4rem] pb-[3rem] text-[#fff] leading-140 font-[450] pl-[2rem] ">
            _Contact-me
          </h2>
        </div>

        <div>
          <nav
            className="box mt-[1rem] gap-[1rem]"
            aria-label="mailbox folders"
          >
            <ul className="animate-fadeIn flex flex-col gap-[0.5rem]">
              <li onClick={() => handleClick("contact")}>
                <div className="flex items-center pl-[2rem] py-[1rem] bg-[#1E2D3D]">
                  <Image
                    className={`mr-[0.5rem] h-[7px] all-transition duration-[0.5s] ease-out ${
                      open.includes("contact") ? "rotate-90" : ""
                    }`}
                    width={12.728}
                    height={4.778}
                    alt="arrowDown"
                    src="/shared/Vector (6).svg"
                  />
                  <span className="pl-[1rem] text-[1.6rem] font-[500]">
                    Contacts
                  </span>
                </div>
              </li>
              {open.includes("contact") && (
                <div className="px-[2rem] py-[1rem] animate-fadeIn  flex gap-[1.3rem] flex-col">
                  <div
                    onClick={() => handleInfoClick("email")}
                    className="flex gap-[1rem] items-center"
                  >
                    <EmailIcon style={{ color: "#607B96" }} />
                    <h2
                      className={`
                         "text-[#3f5161]  hover:text-[#99a3ac]  all-transition duration-[1s] ease-out"
                      }`}
                    >
                      davitahvili.m3@gmail.com
                    </h2>
                  </div>
                  <div
                    onClick={() => handleInfoClick("number")}
                    className=" number flex gap-[1rem] items-center"
                  >
                    <PhoneIcon style={{ color: "#607B96" }} />
                    <h2
                      className={`
                      "text-[#3f5161]  hover:text-[#99a3ac]  all-transition duration-[1s] ease-out"
                   }`}
                    >
                      +1(347)992-8113
                    </h2>
                  </div>
                </div>
              )}

              <li onClick={() => handleClick("info")}>
                <div className="flex items-center pl-[2rem] py-[1rem] bg-[#1E2D3D]">
                  <Image
                    className={`mr-[0.5rem] h-[7px] all-transition duration-[0.5s] ease-out ${
                      open.includes("info") ? "rotate-90" : ""
                    }`}
                    width={12.728}
                    height={4.778}
                    alt="arrowDown"
                    src="/shared/Vector (6).svg"
                  />
                  <span className="pl-[1rem] text-[1.6rem] font-[500] ">
                    Find-me-also-in
                  </span>
                </div>
              </li>
              <div className="animate-fadeIn">
                {open.includes("info") && (
                  <ul className="animate-fadeIn pt-[1rem] flex flex-col gap-[1rem]">
                    {Data.social.map((social) => (
                      <li key={social.name}>
                        <div className=" flex gap-[0.5rem] pl-[4rem] ">
                          <Image
                            className="mr-[0.8rem]"
                            width={13}
                            height={13}
                            alt="blank"
                            src="/shared/Vector (8).svg"
                          />
                          <Link
                            className="text-[16px] hover:text-[#c7d3dd] text-greyText font-[450]"
                            target="_blank"
                            href={social.link}
                          >
                            {social.name}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
