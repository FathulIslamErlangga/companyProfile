import CompanyHistory from "@/components/About/CompanyHistory";
import Culture from "@/components/About/Culture";
import Teams from "@/components/About/Teams";
import Timeline from "@/components/About/Timeline";
import React from "react";

const page = () => {
  return (
    <>
      <CompanyHistory />
      <Timeline />
      <Culture />
      <Teams />
    </>
  );
};

export default page;
