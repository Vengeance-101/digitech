import Image from "next/image";
import anim1Thumb from "@/images/shape/anim-1.png";
import anim2Thumb from "@/images/shape/anim-2.png";
import anim3Thumb from "@/images/shape/anim-3.png";
import anim4Thumb from "@/images/shape/anim-4.png";
import breadCrumbThumb from "@/images/shape/50.png";
import BodyCard from "./bodyCard";

const BodyAbout = ({ data }) => {
  return (
    <>
      <div className="about-style-one-area default-padding bg-service-bg">
        <div className="shape-animated-left">
          <Image src={anim1Thumb} alt="Image Not Found" />
          <Image src={anim2Thumb} alt="Image Not Found" />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 ">
            <div className="about-style-one w-[55%] pr-16 max-lg:w-full max-lg:p-0  sticky top-24 ">
              {data.map((items, i) => {
                let { title, subtitle, text, topTtitle } = items;

                return (
                  <div className="digitechmate_topheading" key={i}>
                    <h3 className="text-gray-800">{topTtitle}</h3>
                    <h2> {title}</h2>
                    <h4 className="mb-5">{subtitle}</h4>
                    <p className="about-text2 pt-3">{text}</p>
                  </div>
                );
              })}
            </div>
            <div className="about-style-one w-[43%] max-lg:w-full max-lg:p-0 max-lg:mt-10 ">
              <div className="about-thumb relative  ">
                <div className="max-xl:flex max-xl:justify-center ">
                  <div className="breadcrum-shape ">
                    <Image src={breadCrumbThumb} alt="Image Not Found" />
                  </div>
                  {data.map((items, i) => {
                    let { src, alt } = items;

                    return (
                      <Image
                        key={i}
                        src={src}
                        alt={alt}
                        width={500}
                        height={600}
                        className="w-auto max-w-full h-auto"
                        loading="lazy" // Lazy load to improve performance
                        placeholder="blur" // Optionally use a blur-up placeholder
                        blurDataURL={`src?blur=10`} // Placeholder for low-quality image preview (LQIP)
                      />
                    );
                  })}
                </div>
                <BodyCard />
                <div className="thumb-shape-bottom max-xl:hidden">
                  <Image src={anim3Thumb} alt="Image Not Found" />
                  <Image src={anim4Thumb} alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyAbout;
