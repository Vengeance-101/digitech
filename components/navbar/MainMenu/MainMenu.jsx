import Link from "next/link";
import { useData } from "@/hooks/StateContext";
import DropDownMenu from "./ProductsMenu/dropDown";
import { IoMdArrowDropdown } from "react-icons/io";
import { navlink } from "../Data/ProductMenuData";
import { Offlinesublinks, Onlinesublinks } from "../Data/dropdown";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const { isScrolled, hoverLink, sethoverLink, setactiveSub } = useData();
  const pathname = usePathname(); // Get the current pathname

  return (
    <ul
      className="flex gap-6 items-center"
      onMouseLeave={() => sethoverLink("")}
    >
      {navlink.map((data, i) => {
        return (
          <li key={i}>
            <Link
              href={data.url}
              className={`flex items-center  max-xl:text-gray-900 py-6 
               ${
                 hoverLink === data.title
                   ? "text-[red]"
                   : isScrolled
                   ? "text-[#253858] text-[15px] font-semibold py-9"
                   : "text-gray-200"
               }
            `}
              onMouseEnter={() => {
                sethoverLink(data.title);
                if (data.title === "Offline Courses") {
                  setactiveSub("Software & Web Development");
                } else if (data.title === "Online Courses") {
                  setactiveSub("Online Software & Web Development");
                }
              }}
            >
              {data.title}
              {(data.title === "Offline Courses" ||
                data.title === "Online Courses") && (
                <IoMdArrowDropdown
                  className={`${
                    hoverLink === data.title ? "text-[red]" : ""
                  } arrow transition-transform duration-500 ease-in-out text-xl`}
                />
              )}
            </Link>
            {(data.title === "Offline Courses" ||
              data.title === "Online Courses") && (
              <DropDownMenu
                data={
                  hoverLink === "Offline Courses"
                    ? Offlinesublinks
                    : Onlinesublinks
                }
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
