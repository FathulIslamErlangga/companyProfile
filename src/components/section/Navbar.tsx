"use client";
import React from "react";
import NavLinks from "../elements/NavLinks";
import ToggleNav from "../elements/ToggleNav";
import NavLinksMobile from "../MobileVersion/NavLinksMobile";

const Navbar = () => {
  return (
    <header className="bg-white w-full  flex items-center z-10 fixed">
      <div className="flex justify-between w-full items-center relative">
        <div className=" brands flex items-center px-20 py-7">
          <h1 className="text-3xl  font-semibold  text-primaryDark">
            Twis<span className="text-primary">code</span>
          </h1>
        </div>
        <div className="flex px-20 items-center ">
          <ToggleNav />
          <NavLinks />
          <NavLinksMobile />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
