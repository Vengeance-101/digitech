import { useData } from "@/hooks/StateContext";
import { TiChevronRight } from "react-icons/ti";
import { navlinkMobile } from "../Data/ProductMenuData";
import Link from "next/link";

const MobileMain = () => {
  // const { handleActiveLink, handleSlider } = useData();

  // const handleClick = (sub) => {
  //   handleSlider();
  //   handleActiveLink(sub);
  // };

  return (
    <ul className="flex flex-col w-full items-start">
      {navlinkMobile.map((data, i) => (
        <li key={i} className="w-full">
          {
            // If the item has a URL, render a Link
            <Link
              className="mobile-sublink-anchor inline-flex items-center justify-between w-full h-auto text-base py-3"
              href={`${data.url}`}
            >
              {data.title}
            </Link>
          }
        </li>
      ))}
    </ul>
  );
};

export default MobileMain;
