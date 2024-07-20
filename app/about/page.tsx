import React from "react";
import RouterBreadcrumbs from "../components/RouterBreadcrumbs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me",
};
export default function Page() {
  return (
    <div>
      <RouterBreadcrumbs />
    </div>
  );
}
