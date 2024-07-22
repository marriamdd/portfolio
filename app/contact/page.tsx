import React from "react";
import { Metadata } from "next";
import FormComp from "../components/Form";
import ContactAccord from "../components/ContactAccord";
import CodeDemo from "../components/CodeDemo";

export const metadata: Metadata = {
  title: "ContactMe",
  description: "Contact information",
};

export default function ContactMe() {
  return (
    <div className="flex flex-col xl:flex-row xl:h-[80vh] ">
      <ContactAccord />

      <FormComp />
      <CodeDemo />
    </div>
  );
}
