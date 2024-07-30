"use client";
import React from "react";
import FormComp from "../components/Form";
import ContactAccord from "../components/ContactAccord";
import CodeDemo from "../components/CodeDemo";
import HeadForContact from "../components/HeadForContact";
import Head from "next/head";

export interface EemployerInfo {
  name: string;
  email: string;
  message: string;
}
export default function ContactMe() {
  const [employerInfo, setEmployer] = React.useState<EemployerInfo>({
    name: "",
    email: "",
    message: "",
  });
  const title = "Contact Me";
  const description = "Contact Me";

  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Head>
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col xl:flex-row xl:h-[80vh] ">
        <HeadForContact />
        <ContactAccord />

        <FormComp setEmployer={setEmployer} />
        <CodeDemo employerInfo={employerInfo} />
      </div>
    </>
  );
}
