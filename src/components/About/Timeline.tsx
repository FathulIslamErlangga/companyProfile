import React from "react";

const Timeline = () => {
  return (
    <section className="pt-32">
      <div className="text-center font-semibold text-4xl pb-10">
        <h1>Timeline</h1>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2019</time>

              <div>
                <div className=" flex flex-wrap ">
                  <span className="bg-primary rounded-full  w-3 h-3 mt-1"></span>
                  <span className="ml-2">
                    Launched a cloud-based application development platform for
                    SMEs.
                  </span>
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10  text-start">
              <time className="font-mono italic t">2020</time>
              <div>
                <div className=" flex flex-wrap ">
                  <span className="bg-primary rounded-full  w-3 h-3 mt-1"></span>
                  <span className="ml-2 w-[63%]">
                    Developed a technology consulting service designed to help
                    companies undergo digital transformation.
                  </span>
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10  text-start">
              <time className="font-mono italic t">2021</time>
              <div>
                <div className=" flex flex-wrap ">
                  <span className="bg-primary rounded-full  w-3 h-3 mt-2"></span>
                  <span className="ml-2 w-[63%]">
                    Launched business automation solutions using Artificial
                    Intelligence (AI) and Machine Learning (ML) technologies.
                  </span>
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10  text-start">
              <time className="font-mono italic t">2023</time>
              <div>
                <div className=" flex flex-wrap ">
                  <span className="bg-primary rounded-full  w-3 h-3 mt-2"></span>
                  <span className="ml-2 w-[63%]">
                    Became a trusted technology partner for over 500 companies
                    across Southeast Asia, including startups, corporations, and
                    government agencies.
                  </span>
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
