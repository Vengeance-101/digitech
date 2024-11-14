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
          slidesPerView: 3,
          spaceBetween: 20,
        },
        630: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        830: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 18,
        },
        1400: {
          slidesPerView: 8,
          spaceBetween: 10,
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
