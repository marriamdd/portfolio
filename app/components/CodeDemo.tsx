"use client";
import React, { useEffect, useState } from "react";
import { EemployerInfo } from "../contact/page";

export default function CodeDemo({
  employerInfo,
}: {
  employerInfo: EemployerInfo;
}) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const dateString = today.toLocaleDateString("en-GB", options);
    setFormattedDate(dateString);
  }, []);
  return (
    <div
      className="xl:flex hidden px-[2rem] p-[8rem]
    "
    >
      <div className="flex flex-col pr-[1rem]">
        {nums.map((num) => (
          <span className={`${num == 6 && "pb-[1.5rem]"}`} key={Math.random()}>
            {num}
          </span>
        ))}
      </div>
      <div>
        <p className="mb-[1.5rem]">
          {" "}
          <span className="pink">const</span>&nbsp;
          <span className="blue">button</span>
          &nbsp;<span className="pink">=</span>&nbsp;
          <span className="blue">document.querySelector</span>
          <span className="grey">{`(`}</span>
          <span className="orange">&#96; #sendBtn &#96;</span>
          <span className="grey">{`)`}</span>
        </p>
        <p>
          <span className="pink">const</span>&nbsp;
          <span className="blue">message</span>
          &nbsp;<span className="pink">=</span>&nbsp;
          <span className="grey">{`{`}</span>
          <br />
          <span className="blue">name:</span>&nbsp;
          <span className="orange"> &quot;{employerInfo.name}&quot;</span>{" "}
          <span className="grey">,</span>
          <br />
          <span className="blue">email:</span>&nbsp;
          <span className="orange">&quot;{employerInfo.gmail}&quot;</span>{" "}
          <span className="grey">,</span>
          <br />
          <span className="blue">message</span>&nbsp;
          <span className="orange">&quot;{employerInfo.message} &quot;</span>
          <span className="grey">,</span>
          <br />
          <span className="grey">date:</span>
          <span className="orange">&quot;{formattedDate}&quot;</span> <br />
          <span className="grey">{`}`}</span>
        </p>
        <br />
        <span className="blue">button.addEventListener</span>
        <span className="grey">{`()`}</span>
        <span className="orange">&apos;click&apos;</span>
        <span className="grey">,</span>&nbsp;
        <span className="grey">{`()`}</span>&nbsp;
        <span className="pink">{`=>`}</span>&nbsp;
        <span className="grey">{`{`}</span>
        <br />
        <span className="blue">form.send</span>
        <span className="grey">{`(`}</span>
        <span className="blue">message</span>
        <span className="grey">{`)`}</span>
        <span className="grey">;</span>
        <br />
        <span className="grey">{`}`}</span>
        <span className="grey">{`)`}</span>
      </div>
    </div>
  );
}
