import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-primaryWhite -z-[12] pt-36 h-auto lg:h-full">
      <div className="container-lg pb-10 lg:pb-0">
        <div className="flex flex-wrap ">
          <div className="  mx-auto  self-center lg:w-1/2 lg:pl-36">
            <h1 className=" pt-10  w-[50%]  leading-8 mx-auto text-primaryDark text-sm  tracking-wide text-center  lg:text-4xl lg:leading-10 lg:w-full lg:pl-[60px] lg:pt-0">
              <span className="bg-primary px-1">Twiscode</span> is committed to
              innovation and excellence, with a mission to empower growth and
              create meaningful impact for our customers and communities.
            </h1>
          </div>
          <div className="w-full  self-end lg:w-1/2 ">
            <div className="px-5">
              <Image
                className="mx-w-full mx-auto   lg:block"
                src="/images/gedung.png"
                alt="hero page"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
