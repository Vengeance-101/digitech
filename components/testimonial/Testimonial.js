"use client";
import React from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Feedback from "./inside";

const Testimonials = ({ data }) => {
  return (
    <>
      <div
        className="testimonials-style-two-area bg-dark default-padding-top half-shape-light-bottom"
        style={{ backgroundImage: `url(/images/shape/34.png)` }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="text-center">
                <h4 className="sub-heading digiHeader2">
                  Reviews: A Testimony to What We Do - See What Our Learners
                  Have to Say About Us
                </h4>
                <h2 className="title digiHeader2 py-5">
                  Listen to real people, real results
                </h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fill">
          <div className="flex">
            <div className="testimonial-style-two-carousel swiper">
              {/* -------------------- */}

              <Swiper
                modules={[Keyboard, Autoplay, Pagination]}
                freeMode={true}
                grabCursor={true}
                autoplay={true}
                centeredSlides={true}
                initialSlide={1}
                slidesPerView={1}
                loop={true}
                spaceBetween={50}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 2.5,
                  },
                }}
              >
                <div className="swiper-wrapper">
                  {data?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <Feedback testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>

              {/* ------------------------ */}
              {/* <div className="swiper-pagination "></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
