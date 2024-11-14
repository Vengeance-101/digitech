import Image from "next/image";
import { HoverCenter, HoverSlide } from "@/libs/callAction/ReadMore";
import HeroBannerImg from "@/libs/heroBanner/heroBannerImg";

const HeroBanner = ({ data, heroimg }) => {
  return (
    <section className="heroBanner default-padding-banner  digi-techboxshadow">
      <div className="flex container mx-auto flex-wrap items-center">
        <div className="w-1/2 max-lg:w-full">
          {data.map((items, i) => {
            let { heading, subHeading1, subHeading2, rating, text } = items;
            return (
              <div key={i}>
                <h1 className="font-bold leading-[45px] digiHeader max-sm:text-[40px]">
                  {heading}
                </h1>
                <h3 className="pt-4 pb-4">{subHeading1}</h3>
                <h4>{subHeading2}</h4>
                <p className="text-gray-700 mt-2">{text}</p>
                <h4 className="text-gray-700 mt-4 font-semibold">{rating}</h4>
              </div>
            );
          })}

          {/* <div className="mt-16 max-lg:hidden">
            <div className="flex gap-10">
              <HoverSlide
                title={"Connect with a Specialist"}
                link={"tel:+7011 918 181"}
              />
              <HoverCenter title="Schedule Your Consultation" link="/contact" />
            </div>
          </div> */}
        </div>
        <div className="w-1/2 flex relative max-lg:w-full max-lg:mt-6 justify-end max-2xl:justify-center items-center wow fadeInRight">
          {/* Hero Image */}
          <HeroBannerImg img={heroimg} />
        </div>

        <div className="banner-shape-bg max-sm:hidden">
          <Image
            src={`/images/shape/4.png`}
            width={416}
            height={593}
            alt="Shape"
          />
        </div>

        <div className="mt-9  max-xl:w-full max-2xl:w-full max-xl:justify-center max-2xl:justify-evenly max-lg:justify-center ">
          <div className="flex gap-3 max-sm:justify-center">
            <HoverSlide
              title={"Connect with a Specialist"}
              link={"tel:+7011 918 181"}
            />
            <HoverCenter title={"Schedule Your Consultation"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
