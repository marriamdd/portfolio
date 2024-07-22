import React from "react";

export default function CodeDemo() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
          <span className="orange"> &quot;Jonathan Devis&quot;</span>{" "}
          <span className="grey">,</span>
          <br />
          <span className="blue">email:</span>&nbsp;
          <span className="orange">
            &quot;jonathan-davis@gmail.com&quot;
          </span>{" "}
          <span className="grey">,</span>
          <br />
          <span className="blue">message</span>&nbsp;
          <span className="orange">
            &quot;Hey! Just checked your website and it looks awesome! Also, I
            checked your articled on Medium. Lerned a few nice tips.
            Thanks!&quot;
          </span>
          <span className="grey">,</span>
          <br />
          <span className="grey">date:</span>
          <span className="orange">&quot;Thu 21 Apr&quot;</span> <br />
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
