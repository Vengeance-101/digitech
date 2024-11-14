"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import TechLogo from "./logoImg";

const PlacementLogo = ({ Partner }) => {
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
          spaceBetween: 0,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        970: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 8,
          spaceBetween: 10,
        },
      }}
      autoplay={{
        delay: 1800,
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

export default PlacementLogo;
