import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { useData } from "@/hooks/StateContext";
import Link from "next/link";
import { servicesData } from "@/components/navbar/Data/ProductMenuData";

const MobileSublink = () => {
  const { handleSlider, slider, activeSub } = useData();

  return (
    <div
      className={`w-full h-full absolute overflow-y-auto top-0 transition-all duration-300 ease-in-out ${
        slider ? "left-0" : "left-[100%]"
      } py-5 px-9`}
    >
      <button
        className="text-xl text-red-500 inline-flex items-center gap-2 py-2"
        onClick={handleSlider}
      >
        <IoIosArrowBack />
        Back
      </button>
      <h1 className="text-xl my-3">{activeSub}</h1>
      <div className="h-0.5 w-full bg-red-500" />
      <div className="h-auto w-full flex flex-col">
        <ul>
          {servicesData
            .filter((category) => category.item === activeSub) // Use filter for better clarity
            .map((data, i) => (
              <li
                key={i}
                className="flex gap-4 py-2  cursor-pointer categoryLink"
              >
                <Link
                  href={`${data.url}`}
                  className="text-base category-tags text-black flex items-center gap-2 category-main-tag transition-all duration-300 ease-in-out"
                >
                  {data.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileSublink;
