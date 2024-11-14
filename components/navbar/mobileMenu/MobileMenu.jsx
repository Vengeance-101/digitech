import { useData } from "@/hooks/StateContext";
import MobileSublink from "../MainMenu/ProductsMenu/sublinks/MobileSublink";
import MobileMain from "./Offline-Online";

const MobileMenu = () => {
  const { toggle, slider } = useData();

  return (
    <div
      className={`absolute transition-all duration-700 ease-in-out opacity-0 z-50 top-full ${
        toggle ? "right-0" : "-right-[100%]"
      } max-lg:w-[70dvw] max-sm-h-dvh max-lg:h-dvh lg:invisible lg:opacity-0  sm:py-2 ${
        toggle
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } block xl:hidden`}
    >
      <div className="bg-white w-full h-full relative overflow-hidden px-8 shadow-2xl rounded-tl-lg">
        <div
          className={`transition-all duration-300 ease-in-out w-full ${
            slider ? "-translate-x-[105%]" : "translate-x-0"
          }`}
        >
          <h4 className=" text-gray-800 pt-5">
            Boost Your Career with Our professional Courses & Placement Support
          </h4>
          <div className="relative h-4 mb-8">
            <div className="lines ">
              <div className="line max-lg:w-full" />
            </div>
          </div>
          <MobileMain />

          {/* Button visible only on medium and larger screens */}
          <div className="hidden max-md:flex w-full items-center justify-center py-3">
            <button className="bg-red-600 py-3 px-4 text-base transition-all duration-300 ease-in-out hover:bg-black rounded-md font-extrabold text-white">
              Get Consultant
            </button>
          </div>
        </div>
        <MobileSublink />
      </div>
    </div>
  );
};

export default MobileMenu;
