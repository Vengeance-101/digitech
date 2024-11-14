import Partner from "@/data/partner/partner";
import SwiperDigitech from "@/libs/brand_tech/swiper";

const PartnerSlider = () => {
  return (
    <>
      <div className="shadow-lg partner-style-two-area overflow-hidden text-lime-50 bg-[#00131f] max-sm:bg-[#00131f]">
        <div
          className="partner-shape"
          style={{ backgroundImage: `url(/images/shape/map-light.png)` }}
        ></div>
        <div className=" container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-[30%] bg-[#00131f] max-sm:w-full max-md:w-[40%] max-lg:w-[40%] max-sm:hidden">
              <div className="partner-heading max-sm:text-sm  ">
                <h3 className="pl-4">
                  Learn the tech behind <br className="max-sm:hidden" />
                  <strong className="max-sm:hidden">350+ </strong> top global
                  brands
                </h3>
              </div>
            </div>
            <div className="w-[70%]  max-md:w-[60%] max-lg:w-[60%] bg_color max-sm:w-full flex max-sm:block">
              <div className=" swiper">
                <div className="sm:hidden flex justify-center pt-4">
                  <h3 className=" text-white max-sm:text-center">
                    Learn the tech behind
                    <strong className="text-3xl"> 350+ </strong> top global
                    brands
                  </h3>
                </div>
                <div className="swiper-wrapper max-lg:relative items-center">
                  <SwiperDigitech Partner={Partner} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
