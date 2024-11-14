import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { CgTwitter } from "react-icons/cg";
import { useData } from "@/hooks/StateContext";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import Certi from "@/images/a.png";
import Image from "next/image";
import { PiCertificateLight, PiCertificateThin } from "react-icons/pi";
import { RiMailSendLine } from "react-icons/ri";
import { MdCallMissedOutgoing } from "react-icons/md";
const Topbar = () => {
  const { isScrolled } = useData();

  return (
    <div
      className={`bg-gray-800 w-full h-auto py-2 default-padding-nav  ${
        isScrolled ? "hidden" : " xl:block"
      }`}
    >
      <div className=" flex flex-wrap container mx-auto">
        <div className="w-4/5 flex max-lg:w-full justify-end max-xl:justify-between  gap-10 text-gray-300 max-md:justify-between max-sm:justify-center max-xl:w-3/4">
          <div className="digiTopTagline  flex gap-4">
            <PiCertificateLight className="text-2xl font-bold rounded-sm ring-1  ring-gray-500 p-1" />
            <span>Certified - ISO-9001 : 2015 | Google</span>
          </div>

          <div className="digiemail flex gap-4 max-md:hidden">
            <RiMailSendLine className="text-2xl rounded-sm ring-1  ring-gray-500 p-1" />
            <Link href="mailto:info@digitechmate.com">
              info@digitechmate.com
            </Link>
          </div>

          <div className="calldigiflex flex gap-4 topCall">
            <MdCallMissedOutgoing className="text-2xl font-semibold rounded-sm ring-1  ring-gray-500 p-1" />
            <Link href="tel:+919990140888">+91-9990 140 888</Link>
          </div>
        </div>

        <div className="w-1/5 flex gap-5 items-center max-xl:w-1/4  text-[white] justify-end max-lg:hidden">
          <div className="social_icon ">
            <ul className="flex gap-3 ">
              <li>
                <Link
                  href="https://www.facebook.com/digitechmate/"
                  target="_blank"
                >
                  <FaFacebookF className=" h-7 w-7 rounded-sm ring-1  ring-gray-500 p-2 hover:bg-icon-facebook ease-in-out duration-300 hover:py-1 hover:px-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/digitechmate/"
                  target="_blank"
                >
                  <AiFillInstagram className=" h-7 w-7 rounded-sm ring-1  ring-gray-500 p-2 hover:bg-icon-instagram ease-in-out duration-300 hover:py-1 hover:px-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/digitechmate/"
                  target="_blank"
                >
                  <FaLinkedinIn className=" h-7 w-7  rounded-sm ring-1  ring-gray-500 p-2 hover:bg-icon-linkedin ease-in-out duration-300 hover:py-1 hover:px-1" />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/digitechmate" target="_blank">
                  <CgTwitter className=" h-7 w-7  rounded-sm ring-1  ring-gray-500 p-2 hover:bg-icon-twitter ease-in-out duration-300 hover:py-1 hover:px-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://in.pinterest.com/digitechmate/"
                  target="_blank"
                >
                  <FaPinterestP className=" h-7 w-7  rounded-sm ring-1  ring-gray-500 p-2 hover:bg-icon-pinterest ease-in-out duration-300 hover:py-1 hover:px-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
