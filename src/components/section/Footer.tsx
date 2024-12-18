import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primaryWhite mt-32">
      <div className=" brands flex items-center px-20 py-7">
        <h1 className="text-3xl  mr-5 font-semibold mx-auto text-primaryDark lg:mr-0">
          Twis<span className="text-primary">code</span>
        </h1>
        <aside className=" block mx-auto text-sm lg:text-lg ">
          <p className="mt-1 text-center">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
