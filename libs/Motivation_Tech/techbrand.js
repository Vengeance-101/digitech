import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { CgTwitter } from "react-icons/cg";
const MotivationTech = () => {
  return (
    <>
      <div className="text-center ">
        <div className="marketing-types">
          <div>
            <h2>Learn Today, Lead Tomorrow with us</h2>
          </div>
          <div className="icon">
            <i className="flex items-center justify-center text-red-700">
              <FaPinterestP />
            </i>
            <i className="flex items-center justify-center">
              <FaLinkedinIn />
            </i>
            <i className="flex items-center justify-center">
              <FaFacebookF />
            </i>
            <i className="flex items-center justify-center">
              <AiFillInstagram />
            </i>
          </div>
          <div className="blur-shape"></div>
        </div>
      </div>
    </>
  );
};

export default MotivationTech;
