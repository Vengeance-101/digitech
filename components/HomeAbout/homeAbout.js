import Image from "next/image";

const HomeAbout = ({ data = {} }) => {
  const {
    title,
    heading,
    subheading,
    image,
    imageAlt,
    content,
    key,
    value,
    key1,
    value1,
    icon1,
    icon2,
  } = data;
  return (
    <div className="about-area new-style default-padding digi-feature-area">
      <div className="container mx-auto">
        <div className="flex items-center flex-wrap">
          <div className="w-2/5  max-xl:w-full max-xl:mb-12">
            <div className="about-thumb">
              <Image
                src={image}
                alt={imageAlt}
                width={500} // Aspect ratio width
                height={500} // Aspect ratio height
                className="w-full h-auto  max-xl:relative max-xl:left-12" // Full width class
              />
            </div>
          </div>
          <div className="w-3/5  max-xl:w-full">
            <div className="digitechmate_topheading">
              <h3 className="text-gray-800">{title}</h3>
              <h2> {heading}</h2>
              <h4>{subheading}</h4>
              <p className="about-text2 pt-3">{content}</p>
            </div>
            <div className="flex mt-10 gap-4 items-center">
              <div className="w-11/12">
                <div className="about-icon-box mb-9">
                  <div className="about-icon-thumb">
                    <Image
                      src={icon1}
                      alt="digitechmate icon"
                      width={85}
                      height={85}
                      className="max-w-[62px] max"
                    />
                  </div>
                  <div className="about-box-content">
                    <h4>{key}</h4>
                    <p className="pb-4">{value}</p>
                  </div>
                </div>
                <div className="about-icon-box border-non ">
                  <div className="about-icon-thumb">
                    <Image
                      src={icon2}
                      alt="digitechmate official banner"
                      width={85}
                      height={85}
                      className="max-w-[62px]"
                    />
                  </div>
                  <div className="about-box-content">
                    <h4>{key1}</h4>
                    <p>{value1}</p>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <div className="awoard-thumb pt-3">
                  <Image
                    src="/bg/awoard.jpg"
                    alt="digitechmate icon"
                    width={485}
                    height={585}
                    className="max-w-full bg-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;
