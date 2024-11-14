import digiCeriting from "@/images/certificate/Digitechmate-Certificate.jpg";
import illustration12 from "@/images/certificate/12.webp";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Certificate = ({ data }) => {
  return (
    <div className="about-style-six-area default-padding bg-service-bg">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/5 max-lg:hidden">
            <div className="about-style-six-thumb sticky top-7 ">
              <Image
                src={digiCeriting}
                alt="Digitechmate Certificate"
                className="rounded-md shadow-certificate"
              />
              <Image
                src={illustration12}
                alt="Digitechmate Certificate"
                className="hidden lg:block "
                loading="lazy" // Lazy load to improve performance
                placeholder="blur" // Optionally use a blur-up placeholder
              />
            </div>
          </div>
          <div className="w-full lg:w-2/5 lg:mt-6">
            {data?.map((item, index) => {
              const { title, text, roles } = item;

              return (
                <div className="digitechmate_topheading" key={index}>
                  <h3 className="text-gray-800">
                    {" "}
                    Transform your IT skills with Digitechmate`s leading courses
                  </h3>
                  <h2> {title}</h2>
                  <h4 className="mb-5">
                    Transform Your IT Skills with Digitechmate’s Leading Courses
                  </h4>
                  <p className="about-text2 pt-3">{text}</p>
                  <ul className="list-disc pl-5">
                    {roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-center gap-4">
                        <IoMdCheckmarkCircleOutline />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-3/5 max-lg:block hidden">
            <div className="about-style-six-thumb sticky top-7 ">
              <Image
                src={digiCeriting}
                alt="Digitechmate Certificate"
                className="rounded-md shadow-certificate w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
