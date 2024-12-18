import React from "react";

const CompanyHistory = () => {
  return (
    <section className="pt-28">
      <div className="hero bg-primary mx-auto rounded-lg w-[80%]">
        <div className="hero-content lg:flex   p-5">
          <div className="lg:flex lg:items-center lg:justify-between text-white">
            <h1 className="text-2xl lg:w-[50%] text-center font-semibold justify-start lg:inline">
              Company History
            </h1>
            <p className="py-6 text-justify text-sm lg:text-lg lg:w-[50%] lg:pr-14 lg:justify-end lg:inline">
              was founded in 2018 by professionals with a vision to create
              innovative programming technology solutions. With a focus on
              software development and web-based applications, our company aims
              to help businesses across various sectors improve their efficiency
              and productivity through the latest technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
