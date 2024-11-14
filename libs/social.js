import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { CgTwitter } from "react-icons/cg";
import Link from "next/link";

const SocialShare = () => {
  return (
    <>
      <li>
        <Link href="https://www.facebook.com/digitechmate/" target="_blank">
          <FaFacebookF className=" h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-facebook ease-in-out duration-300 hover:py-1 hover:px-1" />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/digitechmate/" target="_blank">
          <AiFillInstagram className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-instagram ease-in-out duration-300 hover:py-1 hover:px-1" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/digitechmate/"
          target="_blank"
        >
          <FaLinkedinIn className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-linkedin ease-in-out duration-300 hover:py-1 hover:px-1" />
        </Link>
      </li>
      <li>
        <Link href="https://x.com/digitechmate" target="_blank">
          <CgTwitter className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-twitter ease-in-out duration-300 hover:py-1 hover:px-1" />
        </Link>
      </li>
      <li>
        <Link href="https://in.pinterest.com/digitechmate/" target="_blank">
          <FaPinterestP className="h-8 w-8 rounded-full ring-2  ring-white py-2 px-2 hover:bg-icon-pinterest ease-in-out duration-300 hover:py-1 hover:px-1" />
        </Link>
      </li>
    </>
  );
};

export default SocialShare;
