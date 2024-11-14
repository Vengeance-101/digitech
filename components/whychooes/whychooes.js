import Image from "next/image";
import React from "react";
import shape17 from "@/images/shape/17.png";

const DigiWhy = () => {
  return (
    <>
      <div className="choose-us-style-one-area  text-white default-padding">
        <div
          className="cover-bg"
          style={{ backgroundImage: `url(/images/why/why.jpg)` }}
        ></div>
        <div className="shape-left-top">
          <Image src={shape17} alt="Shape" />
        </div>
        <div className="text-invisible max-lg:hidden">Digitechmate</div>
        <div className="container mx-auto">
          <div className="row">
            <div className="w-1/2 pr-14 max-lg:w-full">
              <div className="choose-us-style-one">
                <div className="digitechmate_topheading">
                  <h3 className="text-white">Award-Winning Institute</h3>
                  <h2 className="digiHeader2">
                    Career-Ready Training with Industry Experts
                  </h2>
                </div>

                <ul className="list-item">
                  <li>
                    <h4 className="mb-2">
                      100% Job Placement <del> Assistance </del>{" "}
                      <mark>Guarantee.</mark>
                    </h4>
                    <p>
                      Our training programs are designed to equip you with
                      job-oriented skills that align with current industry
                      demands, ensuring you're prepared for real-world job
                      opportunities, not just internships. We offer
                      comprehensive support to help you secure a successful
                      career, whether you're aiming for remote, hybrid, or
                      in-office positions.
                    </p>
                  </li>
                  <li>
                    <h4 className="mb-2">
                      Real-Time Industry Professionals as Your Mentor
                    </h4>
                    <p>
                      Gain cutting-edge skills and practical knowledge from
                      industry professionals with over 12 years of experience.
                      Our mentors provide real-world insights and hands-on
                      expertise, ensuring you stay ahead with the most current
                      and in-demand technologies. Learn directly from those who
                      have successfully navigated the industry's challenges and
                      trends, preparing you for real client projects and career
                      success.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigiWhy;
