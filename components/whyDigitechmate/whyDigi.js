import shape10 from "@/images/shape/10.png";
import Services1TabData from "@/data/whyDigitechmate/whydigi";
import SingleServices from "./whybody";
import Image from "next/image";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";
const WhyDigitechmate = () => {
  return (
    <>
      <div className="services-style-one-area default-padding">
        <div className="triangle-shape">
          <Image src={shape10} alt="Shape" />
        </div>
        <div
          className="center-shape"
          style={{ backgroundImage: `url("/images/shape/5.png")` }}
        ></div>
        <div className="container mx-auto">
          <div className="inline-block w-[50%] max-xl:w-full digitechmate_topheading">
            <h3 className="text-gray-800">
              Real Projects, Real Skills: Dive In at Digitechmate!
            </h3>
            <h2>
              Why Choose Digitechmate as India’s Leading Learning Partner?
            </h2>
            <h4 className="mt-4">
              Discover why Digitechmate is emerging as India’s top choice for
              building next-gen industry leaders.
            </h4>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[40%]  top-7 xl:sticky h-[25%] max-xl:w-full max-xl:mb-8">
              <div className="service-nav-info">
                <h4 className="sub-title">What we do</h4>
                <h2>Excellent service and support for you</h2>
                <div
                  className="nav nav-tabs service-tab-navs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-id-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                    type="button"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    <i>
                      <IoBriefcaseOutline />
                    </i>
                    Self-Paced and Mentor-Led Learning
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                    type="button"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    <i>
                      <MdOutlineLibraryBooks />
                    </i>
                    Industry-Relevant Curriculum
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                    type="button"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    <i>
                      <TbFileExport />
                    </i>
                    Portfolio Development
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[60%] max-xl:w-full">
              <div
                className="tab-content services-tab-content"
                id="nav-tabContent"
              >
                {Services1TabData.map((service) => (
                  <div
                    className={`tab-pane fade ${service.tabClass}`}
                    id={service.tabId}
                    role="tabpanel"
                    aria-labelledby={service.ariaLabelled}
                    key={service.id}
                  >
                    <div className="flex flex-wrap gap-4 pt-16">
                      {service.tabData.map((data) => (
                        <div className="w pb-8" key={data.id}>
                          <SingleServices data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyDigitechmate;
