"use client";
import React from "react";
import { Metadata } from "next";
import FormComp from "../components/Form";
import ContactAccord from "../components/ContactAccord";
import CodeDemo from "../components/CodeDemo";
import Head from "next/head";

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
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact information" />
      </Head>
      <ContactAccord />

      <FormComp setEmployer={setEmployer} />
      <CodeDemo employerInfo={employerInfo} />
    </div>
  );
}
