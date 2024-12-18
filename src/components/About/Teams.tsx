import React from "react";
import Image from "next/image";

const Teams = () => {
  return (
    <section className="pt-32">
      <h1 className="text-center text-4xl font-semibold">
        Our <span className="text-primary">Teams</span>
      </h1>
      <div>
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 pb-5 mt-32 ml-4 px-4  lg:grid-cols-3 gap-4">
            <div className="bg-primaryWhite rounded-lg shadow-lg shadow-primaryDark p-8 w-full relative flex justify-center">
              <div className="absolute -top-10 flex justify-center items-center rounded-full  ">
                <Image
                  className="max-w-[30%] bg-white  rounded-full  p-3  lg:max-w-full  lg:p-2 lg:w-[100px]"
                  src="/images/avatar.jpeg"
                  alt="hero page"
                  width={350}
                  height={350}
                />
              </div>
              <div className="py-14">
                <h1 className="text-primaryDark text-center font-semibold text-2xl lg:text-lg ">
                  Fathul Islam Erlangga
                  <span className="block">CEO & Founder</span>
                </h1>
                <div className="py-5 px-2 text-justify">
                  <span className="text-slate-500 relative ">
                    <Image
                      className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                      src="/images/quote.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                    With over 15 years of experience in the tech industry, John
                    has a strong background in software engineering and
                    entrepreneurship. His leadership and vision have been key in
                    driving the company success from a small startup to an
                    industry leader.
                    <Image
                      className="mx-w-full mx-2  absolute bottom-0 -right-7 lg:block"
                      src="/images/double-quotes.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-primaryWhite rounded-lg shadow-lg shadow-primaryDark p-8 w-full relative flex justify-center">
              <div className="absolute -top-10 flex justify-center items-center rounded-full  ">
                <Image
                  className="max-w-[30%] bg-white   rounded-full  p-3  lg:max-w-full  lg:p-2 lg:w-[100px]"
                  src="/images/avatar.jpeg"
                  alt="hero page"
                  width={350}
                  height={350}
                />
              </div>
              <div className="py-14">
                <h1 className="text-primaryDark text-center font-semibold text-2xl lg:text-lg ">
                  Jane Smith
                  <span className="block">Chief Technology Officer (CTO)</span>
                </h1>
                <div className="py-5 px-2 text-justify">
                  <span className="text-slate-500 relative ">
                    <Image
                      className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                      src="/images/quote.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                    Jane is a seasoned technology leader with over 10 years of
                    experience in product development and cloud computing. She
                    has been instrumental in shaping our technology strategy and
                    driving innovation in our platform offerings.
                    <Image
                      className="mx-w-full mx-2  absolute bottom-0 -right-7 lg:block"
                      src="/images/double-quotes.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-primaryWhite rounded-lg shadow-lg shadow-primaryDark p-8 w-full relative flex justify-center">
              <div className="absolute -top-10 flex justify-center items-center rounded-full  ">
                <Image
                  className="max-w-[30%] bg-white   rounded-full  p-3  lg:max-w-full  lg:p-2 lg:w-[100px]"
                  src="/images/avatar.jpeg"
                  alt="hero page"
                  width={350}
                  height={350}
                />
              </div>
              <div className="py-14">
                <h1 className="text-primaryDark text-center font-semibold text-2xl lg:text-lg ">
                  Michael Lee
                  <span className="block"> Head of Product Development</span>
                </h1>

                <div className="py-5 px-2 text-justify">
                  <span className="text-slate-500 relative ">
                    <Image
                      className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                      src="/images/quote.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                    Michael brings a wealth of experience in building scalable
                    software solutions. With a passion for user-centric design,
                    he leads our development teams to create cutting-edge
                    products that solve real-world business problems.
                    <Image
                      className="mx-w-full mx-2  absolute bottom-0 -right-7 lg:block"
                      src="/images/double-quotes.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
