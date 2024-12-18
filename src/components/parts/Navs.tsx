import { IElements } from "@/uitls/type/Elements";
import React from "react";

const Navs = ({ children, className }: IElements) => {
  return <nav className={className}>{children}</nav>;
};

export default Navs;
