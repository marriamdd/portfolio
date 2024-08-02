"use client";
import * as React from "react";
import Data from "../../data.json";
import Image from "next/image";

export default function CustomizedAccordions({
  setChecked,
  checked,
}: {
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
  checked: string[];
}) {
  const [showCheckbox, setShowCheckbox] = React.useState<boolean>(true);

  const handleCheckboxChange = (name: string) => {
    setChecked((prevChecked) =>
      prevChecked.includes(name)
        ? prevChecked.filter((item) => item !== name)
        : [...prevChecked, name]
    );
  };

  return (
    <div className="flex flex-col pt-7 gap-8 w-full px-8 xl:w-1/2 xl:border-r border-[#1E2D3D] animate-fadeIn">
      <h2 className="text-[1.8rem] border-b-[1px] border-[#1E2D3D]  pb-[2rem] font-[500]">
        _Projects
      </h2>
      <div
        onClick={() => setShowCheckbox((prev) => !prev)}
        className="flex gap-4  items-center cursor-pointer"
      >
        <Image
          className={`transition-transform duration-500 ease-in-out ${
            showCheckbox ? "rotate-90" : ""
          }`}
          alt="arrow"
          width={10}
          height={5}
          src="/shared/Vector (6).svg"
        />
        <h2 className="text-[1.8rem]">TechStacks</h2>
      </div>
      <div
        className={`flex flex-col gap-4 ${showCheckbox ? "block" : "hidden"}`}
      >
        {Data.techStacks.map((skill) => (
          <div key={skill} className="flex items-center gap-4 cursor-pointer">
            <input
              id={`checkbox-${skill}`}
              type="checkbox"
              checked={checked.includes(skill)}
              onChange={() => handleCheckboxChange(skill)}
              className="mr-3"
            />
            <label htmlFor={`checkbox-${skill}`}>
              <span
                className={`text-[1.8rem] font-[500] transition-all duration-[0.5s] ease-in ${
                  checked.includes(skill) ? "text-white" : "text-[#607B96]"
                }`}
              >
                {skill}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
