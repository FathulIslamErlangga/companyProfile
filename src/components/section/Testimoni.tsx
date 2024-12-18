import React from "react";
import Image from "next/image";
const Testimoni = () => {
  return (
    <section className="pt-32">
      <div className="container-lg">
        <h1 className="text-primaryDark font-semibold text-center text-3xl">
          Testimoni
        </h1>
        <div className="grid grid-cols-1 pb-5 mt-32 ml-4 px-4 sm:grid-cols-1 lg:grid-cols-3 gap-3">
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
                Nobody
              </h1>
              <div className="flex flex-wrap justify-center py-5 ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    className="mx-w-full mx-2   lg:block"
                    src="/images/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="py-5 px-2">
                <span className="text-slate-500 relative">
                  <Image
                    className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                    src="/images/quote.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  We are extremely satisfied with the services provided by
                  Twiscode. They not only understood our vision but also
                  transformed it into reality perfectly.
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
                Rudi Wijaya
              </h1>
              <div className="flex flex-wrap justify-center py-5 ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    className="mx-w-full mx-2   lg:block"
                    src="/images/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="py-5 px-2">
                <span className="text-slate-500 relative">
                  <Image
                    className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                    src="/images/quote.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  The innovation offered by Twicecode has taken our business to
                  the next level. They truly understand our needs and deliver
                  the best results.
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
                Fathul Islam Erlangga
              </h1>
              <div className="flex flex-wrap justify-center py-5 ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    className="mx-w-full mx-2   lg:block"
                    src="/images/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="py-5 px-2">
                <span className="text-slate-500 relative">
                  <Image
                    className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                    src="/images/quote.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  Working with Twicecode has been an outstanding experience.
                  Their team is highly professional and always provides timely
                  solutions that exceed our expectations.
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
    </section>
  );
};

export default Testimoni;
