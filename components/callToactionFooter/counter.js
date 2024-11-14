"use client";
import React from "react";
import CountUp from "react-countup";
import { GiPodiumWinner } from "react-icons/gi";
import { PiCertificateLight } from "react-icons/pi";
const AchievementCounter = () => {
  return (
    <>
      <div className="achivement-counter">
        <ul className=" max-md:flex max-md:justify-evenly max-md:items-baseline max-sm:relative ">
          <li>
            <div className="icon  text-gray-300">
              <i>
                <PiCertificateLight />
              </i>
            </div>
            <div className="fun-fact max-sm:text-center">
              <div className="counter">
                <div className="timer">
                  <CountUp end={630} enableScrollSpy />
                </div>
                <div className="operator">+</div>
              </div>
              <span className="medium">People Certified</span>
            </div>
          </li>
          <li>
            <div className="icon text-gray-300">
              <i>
                <GiPodiumWinner />
              </i>
            </div>
            <div className="fun-fact max-sm:text-center">
              <div className="counter">
                <div className="timer" data-to="90" data-speed="2000">
                  <CountUp end={98} enableScrollSpy />
                </div>
                <div className="operator">%</div>
              </div>
              <span className="medium">Placement Record</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AchievementCounter;
