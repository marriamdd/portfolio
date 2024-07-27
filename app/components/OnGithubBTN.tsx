import Link from "next/link";
import React from "react";

function OnGithubBTN() {
  return (
    <div className="flex justify-center">
      <Link
        target="_blank"
        href={"https://github.com/marriamdd?tab=repositories"}
      >
        <button className="text-[black] px-[3rem] py-[2.1rem] rounded-[8px] bg-[#5565E8] hover:bg-[transparent] hover:text-[#5565E8] text-[1.6rem] font-[900]">
          See More On Github
        </button>
      </Link>
    </div>
  );
}

export default OnGithubBTN;
