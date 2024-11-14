"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const HeroBannerImg = ({ img }) => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={45}
        perspective={900}
        transitionSpeed={1000}
        gyroscope={true}
      >
        {img?.map((items, i) => {
          let { src, alt } = items;
          return (
            <Image
              key={i}
              src={src}
              alt={alt}
              width={500}
              height={300}
              // className="max-xl:h-[85%] max-2xl:h-[90%] h-[90%]"
              className="w-auto max-w-full h-auto"
              loading="lazy" // Lazy load to improve performance
              placeholder="blur" // Optionally use a blur-up placeholder
              blurDataURL={`src?blur=10`} // Placeholder for low-quality image preview (LQIP)
            />
          );
        })}
      </Tilt>
    </>
  );
};

export default HeroBannerImg;
