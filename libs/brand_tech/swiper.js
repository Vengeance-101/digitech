"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import TechLogo from "./logo";
const SwiperDigitech = ({ Partner }) => {
  return (
    <Swiper
      modules={[Keyboard, Autoplay]}
      loop={true}
      spaceBetween={10}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        970: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {/* Map through Partner data and create SwiperSlide components */}
      {Partner.map((partner, index) => (
        <SwiperSlide key={index}>
          <TechLogo logo={partner.logo} alt={partner.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperDigitech;
