"use client";
import Image from "next/image";
import { useEffect } from "react";
import ToggleBtn from "./toggleBtn/ToggleBtn";
import { useData } from "@/hooks/StateContext";
import DigitechMateBrand from "./brand/Diagonal";
import { HoverCenter } from "@/libs/callAction/ReadMore";
import Topbar from "./Topbar/topbar";
import MainMenu from "./MainMenu/MainMenu";
import MobileMenu from "./mobileMenu/MobileMenu";
import DigitechmateLogo from "./brand/DIgi-Logo";
import Link from "next/link";

const Header = () => {
  const { isScrolled, setIsScrolled } = useData(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state when scrollY is greater than 50
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
  }, [setIsScrolled]);

  return (
    <div
      className={`w-full z-[99999] transition-all duration-800 ease-in-out transform ${
        isScrolled
          ? "fixed top-0 bg-white digi-techshadow translate-y-0" // Sticky with animation
          : "relative digitechTopbar translate-y-0" // Start hidden
      }`}
    >
      {/* Header contacts */}
      <Topbar />

      <header className="container mx-auto ">
        <nav className="max-lg:py-2">
          {/* Diagonal with brand shapes */}
          <div className="block max-xl:hidden">
            <DigitechMateBrand />
          </div>

          <div className="flex items-center">
            {/* Logo sticky */}
            <div
              className={`w-1/4 max-lg:w-1/3 max-sm:w-3/4 ${
                isScrolled ? "opacity-100  px-3" : "opacity-0 "
              } max-xl:opacity-100 transition-all duration-300 ease-in-out`}
            >
              <Link href="/">
                <Image
                  priority
                  src={`data:image/png;base64,${DigitechmateLogo}`} // Use Digitechmate logo
                  alt="digitechmate logo"
                  width={270}
                  height={65}
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div
              className={`w-3/4 max-lg:w-2/3 max-sm:w-4/12 invisible opacity-0 lg:visible lg:opacity-100 font-semibold flex gap-6 max-lg:hidden justify-end pr-2`}
            >
              <MainMenu />
              <div className="flex items-center max-xl:hidden">
                <HoverCenter title={"Consult with expert"} link={"/contact"} />
              </div>
            </div>

            {/* Right Section (Consultant & Toggle) */}
            <div className="flex gap-5 items-center max-lg:w-2/3 max-lg:justify-end relative">
              <div className="flex items-center lg:hidden max-lg:visible btnnav max-sm:hidden">
                <HoverCenter title={"Consult with expert"} link={"/contact"} />
              </div>
              <ToggleBtn />
            </div>
          </div>
        </nav>
      </header>
      <div className="relative max-md:top-1 rounded-lg">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
