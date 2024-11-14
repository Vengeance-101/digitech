import { HoverSlide } from "../callAction/ReadMore";

const Quotes = ({ quoteData }) => {
  return (
    <>
      <div className="quote flex items-center default-padding  ">
        <video src="/about-us-video.mp4" type="video/mp4" muted autoPlay loop />
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center flex-col ">
            <div className="w-full relative z-40">
              {quoteData?.map((item, index) => (
                <h4
                  key={index}
                  className="text-3xl leading-10 text-center text-cyan-50"
                >
                  {item.quote}
                </h4>
              ))}
            </div>
            <div className="w-full z-50 mt-9 flex justify-center">
              <div className="w-72">
                <HoverSlide
                  title={"Get Professional Guidance"}
                  linl={"/contact"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
