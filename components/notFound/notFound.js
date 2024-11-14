import { HoverCenter, HoverSlide } from "@/libs/callAction/ReadMore";
import Image from "next/image";

const NotFoundContent = () => {
  return (
    <>
      <div className="error-page-area default-padding text-center bg-cover py-4 lg:px-28 lg:p-[4rem] md:p-12 sm:p-12 relative p-12 ">
        <div
          className="shape-left"
          style={{ background: "url(/images/shape/44-left.png)" }}
        ></div>
        <div
          className="shape-right"
          style={{ background: "url(/images/shape/44-right.png)" }}
        ></div>
        <div className="container mx-auto">
          <div className="error-box">
            <div className="flex flex-wrap ">
              <div className="w-full text-center">
                <div className="flex justify-center w-full mb-6">
                  <Image
                    src="/bg/404.png" // The path is relative to the 'public' folder
                    alt="404 Error"
                    width={500} // Set the width you need
                    height={300} // Set the height you need
                  />
                </div>
                <h2>Sorry! Page Not Found</h2>
                <p>
                  We can't find that page! The page you are looking for was
                  never existed.
                </p>
                <div className="w-full mt-4">
                  <HoverCenter title={"Back To Home"} link={"/"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundContent;
