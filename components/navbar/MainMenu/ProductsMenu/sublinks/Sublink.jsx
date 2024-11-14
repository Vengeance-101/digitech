import { useData } from "@/hooks/StateContext";
import Link from "next/link";
const Sublink = ({ data }) => {
  const { activeSub, hoverLink, sethoverLink } = useData();

  return (
    <div className={`absolute px-6 w-full top-0 right-0  digi_footer_bg`}>
      <ul className="grid grid-cols-3  w-full  gap-1 mt-14 ">
        {data.map((category, i) => {
          if (category.item == activeSub) {
            return (
              <li
                key={i}
                className="flex cursor-pointer categoryLink items-center"
              >
                <Link
                  href={` ${
                    hoverLink == "Offline Courses" ? "/offline" : "/online"
                  }/${category.url}`}
                  className="  category-tags py-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:translate-x duration-300"
                  onClick={() => {
                    sethoverLink("");
                  }}
                >
                  {category.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sublink;
