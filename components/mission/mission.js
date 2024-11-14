import shape21 from "@/images/shape/21.png";
import Image from "next/image";
import Progress from "./progress";
import mission from "@/data/mission/mission";
import { PiHandshakeThin, PiNetworkThin } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";

const Mission = () => {
  return (
    <>
      <div className="feature-style-one-area half-angle-shape overflow-hidden  default-padding max-md:bg-[#040b1b] max-md:text-white">
        <div className="container mx-auto relative">
          <div className="flex flex-wrap">
            <div className="w-[40%] max-lg:w-full max-xl:w-full ">
              <div className="feature-style-one-heading text-white max-md:text-black max-lg:pt-14 max-xl:pl-0 max-xl:pt-14">
                <div className="arrow-shape max-xl:pt-12">
                  <Image
                    src={shape21}
                    alt="Image not found"
                    className="w-[50%] max-lg:pb-10  max-xl:w-[35%] max-lg:w-[35%] relative right-[-490px] max-xl:left-0 max-lg:left-0 -top-8"
                  />
                </div>
                <h2 className="title mb-25 max-xl:pt-11 max-xl:pb-6 digiHeader2">
                  Unlock Your Future with Digitechmate
                </h2>
                <p className=" max-md:text-white ">
                  At Digitechmate, we provide industry-leading courses designed
                  to empower you for success in today's fast-paced tech world.
                  Our unique advantage lies in real-world project-based
                  learning, expert-led sessions, and 100% job placement in
                  top-tier companies.
                </p>
                <div className="circle-progress max-xl:flex max-xl:justify-around max-xl:gap-40 max-xl:py-16 ">
                  {mission.map((progress) => (
                    <Progress progress={progress} key={progress.id} />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[60%] max-lg:w-full max-xl:w-full pl-52 max-xl:pl-0 max-xl:text-white max-lg:pl-0 max-lg:mt-10  max-sm:text-white pt-10">
              <div className="feature-style-one ">
                <div className="icon  relative">
                  <i>
                    <PiHandshakeThin className="relative top-5 left-2 z-20" />
                  </i>
                </div>
                <div className="info">
                  <h4 className="max-xl:text-white">Mission</h4>
                  <p>
                    To offer affordable, cutting-edge training tailored to
                    industry needs, enabling students to achieve excellence in
                    Software Development, Cyber security, Design, and Digital
                    marketing.
                  </p>
                </div>
              </div>

              <div className="feature-style-one ">
                <div className="icon flex items-center ">
                  <i className="text-white text-3xl relative">
                    <PiNetworkThin className="relative top-5 left-2 z-20" />
                  </i>
                </div>
                <div className="info">
                  <h4 className=" max-xl:text-white">Vision</h4>
                  <p>
                    To become a global leader in professional tech education,
                    fostering innovation and skill development for career
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
