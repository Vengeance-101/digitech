import Image from "next/image";
import React from "react";
import breadCrumbThumb from "@/images/shape/50.png";

const BreadCrumb = ({ data }) => {
  let { title, text } = data;
  return (
    <>
      <div
        className="breadcrumb-area bg-cover shadow text-center text-light"
        style={{ backgroundImage: "url(/images/about.jpg)" }}
      >
        <div className="breadcrum-shape flex justify-center">
          <Image src={breadCrumbThumb} alt="Image Not Found" />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap px-35">
            <div className="w-full text-gray-100 flex flex-col relative">
              <h2 className="digiHeader2 mb-2 ">{title}</h2>
              <p className="font-medium text-lg">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
