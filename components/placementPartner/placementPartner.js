import PlacementLogo from "./insideLogo";
import { Partnerslogos1 } from "@/data/placement/logo";

const PlacementPartner = () => {
  return (
    <>
      <div className="overflow-hidden default-padding bg-[#e9e9e9bf]">
        <div
          className="partner-shape"
          style={{ backgroundImage: `url(/images/shape/map-light.png)` }}
        ></div>
        <div className=" container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <h2 className="title">Our Alumni Thrive At Top Companies</h2>
              <p>
                Join a growing community with access to over 325 trusted hiring
                partners.
              </p>
              <div className="swiper-wrapper mt-5">
                <PlacementLogo Partner={Partnerslogos1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementPartner;
