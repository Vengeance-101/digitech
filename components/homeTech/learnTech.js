import { LearnTechDigi } from "@/data/learnTech/learnTech";
import PlacementLogo from "./insideLogo";

const LearnTech = () => {
  return (
    <>
      <div className=" digi-techboxshadow">
        <div
          className="partner-shape"
          style={{ backgroundImage: `url(/images/shape/map-light.png)` }}
        ></div>
        <div className=" container mx-auto py-8">
          <div className="flex flex-wrap">
            <div className="w-full text-center ">
              <div className="digitechHome relative">
                <h3 className="text-2xl">
                  <span className="digiHeader2 text-3xl ">
                    Explore the Technology Strategies of 350+{" "}
                  </span>{" "}
                  Premier Global Brands with Digitechmate
                </h3>
                <p className="mt-2 font-bold">
                  Unlock the secrets behind top-tier companies like Google,
                  Amazon, and Netflix by learning the technologies that power
                  their success. Start building the future by gaining the skills
                  that global tech giants rely on.
                </p>
              </div>

              <div className="swiper-wrapper mt-2 h-[100px]">
                <PlacementLogo Partner={LearnTechDigi} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnTech;
