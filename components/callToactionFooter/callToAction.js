"use client";
import React from "react";
import AchievementCounter from "./counter";
import { HoverSlide } from "@/libs/callAction/ReadMore";

const RequestCallStyle = () => {
  return (
    <>
      <div
        className="request-call-back-area secondary text-light default-padding"
        style={{ backgroundImage: `url(/images/bg_digi/digi-footer.jpg)` }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap  max-md:mb-20 ">
            <div className="w-[70%] text-white max-md:w-full">
              <h3 className="text-3xl pb-5 text-gray-300">
                Empower Your Future: Boost Skills, Accelerate Growth, and
                Prepare for Tomorrow`s Careers
              </h3>
              <p className=" text-white">
                Our expert technical and support teams are available via phone,
                live chat, and email.
              </p>

              <div className="flex gap-4 items-center h-12 my-9 max-md:justify-center">
                <h2 className="py-6  max-sm:w-full ">Still, confused....??</h2>
                <div className="max-lg:hidden max-md:w-full ">
                  <HoverSlide
                    title={"Schedule Your Consultation"}
                    link={"/contact"}
                  />
                </div>
              </div>

              <div className="max-md:w-full lg:hidden max-lg:block ">
                <HoverSlide
                  title={"Schedule Your Consultation"}
                  link={"/contact"}
                />
              </div>
            </div>
            <div className="w-[30%] text-end max-md:w-full">
              <AchievementCounter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCallStyle;
