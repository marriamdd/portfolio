"use client";
import React from "react";
import FormComp from "../components/Form";
import ContactAccord from "../components/ContactAccord";
import CodeDemo from "../components/CodeDemo";
import HeadForContact from "../components/HeadForContact";

export interface EemployerInfo {
  name: string;
  gmail: string;
  message: string;
}
export default function ContactMe() {
  const [employerInfo, setEmployer] = React.useState<EemployerInfo>({
    name: "",
    gmail: "",
    message: "",
  });
  return (
    <div className="flex flex-col xl:flex-row xl:h-[80vh] ">
      <HeadForContact />
      <ContactAccord />

      <FormComp setEmployer={setEmployer} />
      <CodeDemo employerInfo={employerInfo} />
    </div>
  );
}
