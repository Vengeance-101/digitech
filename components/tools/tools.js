import SkillsCover from "@/libs/skills_cover/skills";
import SwiperDigitech from "@/libs/swiper_course_img/swiper";

const SoftwareOverview = ({ data, techname, techlogo, responsibility }) => {
  return (
    <>
      <div
        className=" bg-dark bg-cover default-padding "
        style={{ backgroundImage: `url(/images/video/banner.png)` }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-[70%] pb-7 max-lg:w-full">
              {data?.map((items, i) => {
                const { heading, subHeading, text } = items;
                return (
                  <div className="digitechmate_topheading" key={i}>
                    <h3 className="text-orange-400">
                      What you’ll learn on this course-----------?
                    </h3>
                    <h2 className="digiHeader2"> {heading}</h2>
                    <h4 className="mb-5 text-orange-400">{subHeading}</h4>
                    <p className="about-text2 pt-3 text-gray-50">{text}</p>
                  </div>
                );
              })}

              <div className="text-white">
                {Object.keys(techname).map((category) => (
                  <div key={category}>
                    <h3 className="text-orange-600">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <ul className="flex flex-wrap ">
                      {/* Loop over each skill in the category */}
                      {techname[category].map((skill, index) => (
                        <li key={index} className="p-2 ">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* tech image slider */}
              <div className="techImg mt-6">
                <SwiperDigitech Partner={techlogo} />
              </div>
            </div>
            {/* end tech slider image */}
            <div className="w-[30%] max-lg:w-full">
              <div className="text-white sticky top-7 red_line max-xl:mt-4">
                <div className="digitechmate_topheading mb-4">
                  <h3 className="text-orange-400">
                    Training for Future Professionals
                  </h3>
                  <h2 className="digiHeader2">Skills Covered</h2>
                </div>

                <SkillsCover data={responsibility} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareOverview;
