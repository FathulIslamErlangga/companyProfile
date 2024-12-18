import React from "react";
import Image from "next/image";

const OverviewPage = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container-lg">
        <h1 className="font-semibold text-center text-4xl pb-5">
          Company Overview
        </h1>
        <div className="flex flex-wrap pt-20">
          <div className="relative pb-10 lg:ml-52">
            <div className="bg-[#ff90bd] mt-32 shadow-lg shadow-primaryDark rounded-md p-2 w-[50%] m-32 lg:w-[40%] lg:p-8 lg:mt-12">
              <p className="text-sm text-primaryDark">
                <span className="font-semibold">Twiscode</span> is a leading
                technology and development firm committed to driving digital
                transformation. With a passionate team of experts, we create
                innovative solutions that empower businesses to thrive. Our
                company has a rich history of growth and excellence, built on a
                foundation of collaboration, creativity, and integrity. We are
                dedicated to shaping the future through cutting-edge technology
                and exceptional results, ensuring success for our clients.
              </p>
              <div className="absolute top-0 right-16 lg:right-60  -z-10 ">
                <Image
                  className="max-w-[50%] w-full mx-auto rounded-md shadow-lg shadow-primaryDark  lg:max-w-full lg:block"
                  src="/images/overview.jpeg"
                  alt="hero page"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewPage;
