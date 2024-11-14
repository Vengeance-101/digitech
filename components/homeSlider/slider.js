import Image from "next/image";
import Link from "next/link";
import USP from "./usp";
import { HoverSlide } from "@/libs/callAction/ReadMore";

const Slider = () => {
  return (
    <div className="slider-area default-padding">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center ">
          <div className="w-3/5 max-lg:w-full ">
            <div className="digitechmate_topheading">
              <h3 className="text-white">
                Empowering You to Succeed in Today's Competitive World
              </h3>
              <h1>
                Build and Scale Your Startup Career Fast with{" "}
                <span>Digitechmate Institute</span>
              </h1>
              <p className="text-white">
                Take the next step in your career with our expert guidance and
                specialized training tailored to industry needs. We provide the
                tools, resources, and support necessary to help you achieve your
                goals and unlock your full potential.
              </p>
            </div>
            <div className="relative h-16 mb-8">
              <div className="lines pt-2 pb-16">
                <div className="line max-lg:w-full" />
              </div>
            </div>

            {/* ===================buttons ================================= */}
            <div className="flex gap-12 relative  max-sm:items-center max-sm:gap-8 max-sm:flex-col-reverse">
              <HoverSlide
                title={"Schedule Your Consultation"}
                link={"/contact"}
              />
              <div className="flex gap-4 justify-center  ">
                <Link className="contact-icon" href="tel:+91 7011 918 181">
                  <Image
                    src="/images/slider/call.png"
                    alt="call icon"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="contact-number">
                  <span className="text-gray-50 font-semibold max-sm:text-xl">
                    Consult with an Expert
                  </span>
                  <h3>
                    <Link href="tel:+7011918181" className="text-3xl font-bold">
                      +91-7011 918 181
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 max-lg:hidden ">
            <div className="slider-thumb">
              <Image
                src="/images/slider/hero-img.png"
                alt="digitechmate Hero Banner"
                width={600}
                height={300}
                className=" max-w-full "
                loading="lazy" // Lazy load to improve performance
                placeholder="blur" // Optionally use a blur-up placeholder
                blurDataURL={`src?blur=10`} // Placeholder for low-quality image preview (LQIP)
              />
            </div>
          </div>

          {/* usp */}
          <div className="usp mt-10 relative bottom-0 max-sm:hidden">
            <USP />
          </div>

          {/* slider shape */}
          <div className="slider-shape">
            <div className="slider-shape-thumb">
              <Image
                src="/images/slider/hero-shape.png"
                alt="icon"
                width={300}
                height={300}
              />
            </div>
            <div className="slider-shape-thumb2">
              <Image
                src="/images/slider/hero-shape2.png"
                alt="icon"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
