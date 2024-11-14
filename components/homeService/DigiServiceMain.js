"use client";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DigitService } from "./data/serviceData";
import Image from "next/image";
import DigiCardStyle from "./DigiCardStyle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DigiServiceMain = () => {
  return (
    <>
      <div className="project-style-one-area default-padding-home-service bg-dark bottom-shape-light ">
        <div className="container mx-auto">
          <div className="heading-left text-light">
            <div className="flex flex-wrap">
              <div className="w-[60%] max-lg:w-full ">
                <div className="digitechmate_topheading">
                  <h3 className="text-white">
                    Step Into the Future with Digitechmate
                  </h3>
                  <h2 className="digiHeader2">
                    Explore Top Career Fields for a Thriving Future
                  </h2>
                  <h4 className="text-white">
                    Hands-On Experience to Transform Your Career
                  </h4>
                  <p className=" pt-3 text-gray-200">
                    Boost your credentials with professional certificates that
                    are highly regarded by employers worldwide and higher-paying
                    roles.
                  </p>
                </div>
              </div>
            </div>
            <div className="digi-shape-thumb1 rotateme ">
              <Image
                src="/bg/testimonial-map.png"
                width={600}
                height={600}
                alt="digitechmate map"
                className="w-full h-full "
              />
            </div>

            <div className="service-shape">
              <Image
                src="/bg/all-shape3.png"
                alt="digitechmate icon"
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="project-style-one-carousel swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                    freeMode={true}
                    grabCursor={false}
                    autoplay={true}
                    loop={true}
                    keyboard={{
                      enabled: true,
                    }}
                    navigation={{
                      nextEl: ".project-button-next",
                      prevEl: ".project-button-prev",
                    }}
                    pagination={{
                      el: ".project-pagination",
                      clickable: true,
                      type: "fraction",
                    }}
                  >
                    {DigitService.map((project, id) => (
                      <SwiperSlide key={id}>
                        <DigiCardStyle project={project} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="project-swiper-nav">
                  <div className="project-pagination"></div>
                  <div className="project-button-prev flex items-center justify-center text-white font-extrabold text-lg">
                    <IoIosArrowBack />
                  </div>
                  <div className="project-button-next flex items-center justify-center text-white font-extrabold text-lg">
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigiServiceMain;
