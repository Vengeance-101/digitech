"use client";
import CountUp from "react-countup";
import icons1 from "@/images/icons/growth.png";
import icons2 from "@/images/icons/time.png";
import Image from "next/image";

const BodyCard = () => {
  return (
    <>
      <div className="about-card max-lg:w-full max-lg:p-0 ">
        <ul>
          <li className="flex items-baseline">
            <div className="icon">
              <i>
                <Image
                  src={icons1}
                  alt="digitechmate icons"
                  className="max-w-16"
                />
              </i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp enableScrollSpy end={10} delay={1} duration={2} />
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Years Experience</span>
            </div>
          </li>
          <li className="flex items-baseline">
            <div className="icon">
              <i>
                <Image
                  src={icons2}
                  alt="digitechmate icons"
                  className="max-w-16"
                />
              </i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp enableScrollSpy end={12} delay={1} duration={2} />
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">Online Training Country</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BodyCard;
