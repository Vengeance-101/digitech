import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";

const DigiCardStyle = ({ project }) => {
  const { thumb, tag, title, text, link } = project;

  return (
    <>
      <div className="swiper-slide mt-7">
        <div className="digitechmateService">
          <div className="flex flex-wrap">
            <div className="w-1/2 max-lg:w-full">
              <div className="thumb max-xl:flex max-xl:justify-center">
                <Image
                  src={`/images/home/${thumb}`}
                  width={1900}
                  height={1267}
                  alt="Image Not Found"
                />
              </div>
            </div>
            <div className="w-1/2 max-lg:w-full max-lg:mt-1 lg:mt-24">
              <div className="info">
                <span>{tag}</span>
                <h3>
                  <Link href={`${link}`}>{title}</Link>
                </h3>
                <p>{text}</p>
                <Link className="btn-animation dark mt-10" href={`${link}`}>
                  <i>
                    <IoArrowForwardCircle />
                  </i>
                  <span>See Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigiCardStyle;
