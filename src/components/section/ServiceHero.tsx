"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceHero = () => {
  return (
    <section className="bg-primaryWhite h-auto ">
      <div className="container-lg p-10">
        <div className="flex flex-wrap ">
          <div className=" mx-auto self-center lg:w-1/2 lg:pl-10">
            <Image
              className="mx-w-full mx-auto hidden  lg:block"
              src="/images/work.png"
              alt="Service page"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full  pt-10 self-end lg:w-1/2 ">
            <div className="px-5">
              <h1 className="font-bold text-primaryDark text-3xl text-center pb-10">
                Services
              </h1>
              <div className="pb-10">
                <div className="flex flex-wrap pb-5">
                  <Image
                    className="mx-w-full mx-3   lg:block"
                    src="/svg/Android.svg"
                    alt="Service page"
                    width={25}
                    height={25}
                  />
                  <h1 className="font-semibold text-primary">
                    Mobile Application
                  </h1>
                </div>
                <span className="text-primaryDark ml-4 block">
                  Twiscode is committed to innovation and excellence, with a
                  mission to empower growth and create meaningful impact for our
                  customers and communities.
                </span>
                <Link href="" className="text-slate-500 ml-4 mt-5 block">
                  Learn more
                </Link>
              </div>
              <div className="pb-10">
                <div className="flex flex-wrap pb-5">
                  <Image
                    className="mx-w-full mx-3   lg:block"
                    src="/svg/web.svg"
                    alt="Service page"
                    width={25}
                    height={25}
                  />
                  <h1 className="font-semibold text-primary">
                    Web Development
                  </h1>
                </div>
                <span className="text-primaryDark ml-4 block">
                  Our expert team designs and develops responsive, user-friendly
                  websites and web applications that deliver a seamless
                  experience to your customers, enhancing engagement and driving
                  conversions.
                </span>
                <Link href="" className="text-slate-500 ml-4 mt-5 block">
                  Learn more
                </Link>
              </div>
              <div className="pb-10">
                <div className="flex flex-wrap pb-5">
                  <Image
                    className="mx-w-full mx-3   lg:block"
                    src="/svg/Vector.svg"
                    alt="Service page"
                    width={25}
                    height={25}
                  />
                  <h1 className="font-semibold text-primary">UI/UX Design</h1>
                </div>
                <span className="text-primaryDark ml-4 block">
                  We create user-friendly, intuitive interfaces for Android
                  applications that prioritize seamless user experience and
                  aesthetic appeal, ensuring your app is not only functional but
                  also enjoyable to use.
                </span>
                <Link href="" className="text-slate-500 ml-4 mt-5 block">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
