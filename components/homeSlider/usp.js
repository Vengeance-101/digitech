import Image from "next/image";

const USP = () => {
  return (
    <div className=" estiva_video_card   ">
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  setboxnew ">
        <div className="flex boxmaintop estiva_border_bottom  gap-1 px-2 py-4 ">
          <div className="left">
            <Image
              src="/bg/quality.svg"
              alt={"Quality Assurance"}
              width={85}
              height={85}
              className="max-w-[62px]"
            />
          </div>
          <div className="right">
            <p className="text-white text-lg">Real-Industry Experience</p>
            <p className="text-gray-400  ">
              Our trainers aren't just instructors; they're active professionals
              working in the tech industry, ensuring that the training is not
              only theoretical but rooted in real client-based projects.
            </p>
          </div>
        </div>
        <div className="flex boxmaintop estiva_border_bottom  gap-1 px-2 py-4 ">
          <div className="">
            <Image
              src="/bg/agile.svg"
              alt={"Agile Stage Flow"}
              width={85}
              height={85}
              className="max-w-[62px]"
            />
          </div>
          <div className="right">
            <p className="text-white text-lg">
              Workshops & Seminars by Industry Experts
            </p>
            <p className="text-gray-400  ">
              Beyond traditional classroom learning, students have the
              opportunity to attend exclusive workshops and seminars conducted
              by industry experts for best practices shaping the future of IT..
            </p>
          </div>
        </div>
        <div className="flex boxmaintop estiva_border_bottom  gap-1 px-2 py-4  max-lg:hidden">
          <div className="left ">
            <Image
              src="/bg/experience.svg"
              alt={"Experience with Expertise"}
              width={85}
              height={85}
              className="max-w-[62px]"
            />
          </div>
          <div className="right">
            <p className="text-white text-lg">Fast Career Growth</p>
            <p className="text-gray-400  ">
              Our streamlined programs focus on delivering immediate results,
              helping you land top IT positions faster than traditional training
              methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USP;
