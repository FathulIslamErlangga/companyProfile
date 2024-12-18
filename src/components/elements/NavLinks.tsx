"use client";
import React from "react";
import Navs from "../parts/Navs";
import Link from "next/link";

const NavLinks = () => {
  return (
    <Navs className={"bg-primaryDark w-full hidden  lg:bg-transparent lg:flex"}>
      <div className="w-full  h-screen  lg:h-full">
        <ul className="text-primaryWhite  block lg:text-primaryDark lg:flex">
          <li className="group">
            <Link href="/" className="py-5 flex mx-5 text-base">
              Home
            </Link>
          </li>
          <li className="group">
            <Link href="/about" className="py-5 flex mx-5 text-base">
              About Us
            </Link>
          </li>
          <li className="group">
            <Link href="/services" className="py-5 flex mx-5 text-base">
              Service
            </Link>
          </li>
          <li className="group">
            <Link href="/teams" className="py-5 flex mx-5 text-base">
              Teams
            </Link>
          </li>
        </ul>
      </div>
    </Navs>
  );
};

export default NavLinks;