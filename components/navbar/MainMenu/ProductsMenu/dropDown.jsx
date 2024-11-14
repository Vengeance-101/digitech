import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Sublink from "./sublinks/Sublink";
import { useData } from "@/hooks/StateContext";
import { servicesData } from "../../Data/ProductMenuData";
const DropDownMenu = ({ data }) => {
  const { handleActiveLink, activeSub, sethoverLink, hoverLink } = useData();

  return (
    <div
      className={`absolute ${
        hoverLink == "Offline Courses" || hoverLink == "Online Courses"
          ? "dropDownVisible"
          : "dropDownHidden"
      } w-full bg-slate-100 top-full -translate-x-1/2 left-1/2 z-99 h-[650px]`}
      onMouseLeave={() => {
        sethoverLink("");
      }}
    >
      {/* <div className="w-[37%] h-full absolute top-0 left-0 "></div> */}
      <div className="container mx-auto py-5 px-40 ">
        <div className="flex h-[625px]">
          <ul className="flex flex-col items-start overflow-hidden digitechTopbar py-12 w-[25%] ">
            {data.map((title, i) => (
              <li key={i} className="pl-8 w-full">
                <button
                  className={`sublink-anchor relative w-full transition-all duration-100 ease-in-out text-sm px-2 py-3 ${
                    title === activeSub
                      ? "bg-teal-50 text-red-800 "
                      : "bg-transparent text-white"
                  }`}
                  onMouseEnter={() => handleActiveLink(title)}
                >
                  <h6 className="w-full text-left  mr-20  font-extrabold">
                    {title}
                  </h6>
                </button>
              </li>
            ))}

            <Link
              href="#"
              className="mt-24 py-3 all-products inline-flex w-full pl-10 items-center gap-1 text-sm text-white"
            >
              See all Products
              <MdOutlineArrowRightAlt className="rightArrow text-lg" />
            </Link>
          </ul>
          <div className="w-[75%] relative ">
            <Sublink data={servicesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
