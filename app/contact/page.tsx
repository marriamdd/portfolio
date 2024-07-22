import React from "react";
import { Metadata } from "next";
import FormComp from "../components/Form";

export const metadata: Metadata = {
  title: "ContactMe",
  description: "Contact information",
};
export default function ContactMe() {
  return (
    <div>
      ContactMe
      <FormComp />
    </div>
  );
}
