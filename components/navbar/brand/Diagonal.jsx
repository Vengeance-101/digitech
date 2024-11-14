import { useData } from "@/hooks/StateContext";
import Image from "next/image";
import Digitechmate from "./DIgi-Logo";
import Link from "next/link";
const DigitechMateBrand = () => {
  const { isScrolled } = useData();
  return (
    <div
      className={`diagonal-shapes  ${
        isScrolled ? "hidden" : "block"
      }  max-lg:hidden   `}
    >
      <div className="absolute w-[25%] z-30  d-shape-1  flex justify-center items-center top-0 left-0  h-full bg-[#ffffff] ">
        <Link href={"/"}>
          <Image
            priority
            src={`data:image/png;base64,${Digitechmate}`}
            alt="digitechmate logo"
            width={250}
            height={65}
          />
        </Link>
      </div>
      <div className="absolute w-[25.6%] z-[29]  d-shape-2 top-0 left-0  h-[88%] bg-[#c2c2c2] "></div>
    </div>
  );
};

export default DigitechMateBrand;
