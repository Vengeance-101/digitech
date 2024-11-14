import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// remove comma
const Price = ({ price, summary }) => {
  const formatPrice = (price) => {
    return parseInt(price.replace(/,/g, ""), 10);
  };

  //  add comma

  const formatIndianPrice = (num) => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    const formatted =
      otherNumbers !== ""
        ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
        : lastThree;
    return formatted;
  };
  return (
    <section className="py-6 lg:px-28 relative digi_price default-padding">
      <div className="container mx-auto">
        <div className="w-full">
          {summary.map((items, index) => (
            <div key={index} className="digitechmate_topheading">
              <h3 className="text-gray-800">{items.subHeading}</h3>
              <h2> {items.heading}</h2>
              <h4>{items.topHeading}</h4>
              <p className="about-text2 pt-3">{items.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row mt-16 mb-10 lg:space-x-8">
          {/* Price list on the left */}
          <div className="price_list w-full lg:w-1/2 rounded-xl p-6 lg:p-12 digi_apply mb-8 lg:mb-0">
            <ul>
              {price.map((detail, index) => (
                <li key={index} className="mb-4">
                  {/* Check if the object has priceheading and render it */}
                  {detail.priceheading && (
                    <h3 className="mb-1 text-white">{detail.priceheading}</h3>
                  )}

                  {/* Check if actualPrice exists and calculate the discount */}
                  {detail.actualPrice && (
                    <div className="mb-4 text-base lg:text-2xl">
                      {(() => {
                        const actualPrice = formatPrice(detail.actualPrice);
                        const discountAmount = (actualPrice * 20) / 100;
                        const actualFee = actualPrice - discountAmount;
                        const actualFeeDisplay = formatIndianPrice(actualFee);
                        return (
                          <>
                            <h4 className="text-2xl text-gray-100">
                              Actual Fee ₹<del>{detail.actualPrice}</del>
                            </h4>
                            <h2 className="digiHeader2">
                              ₹{actualFeeDisplay} after 20% Discount!
                            </h2>
                          </>
                        );
                      })()}
                    </div>
                  )}

                  {/* Render other details if they have both key and value */}
                  {detail.key && detail.value && (
                    <div className="flex items-center gap-1 text-sm lg:text-base">
                      <IoMdCheckmarkCircleOutline />
                      <span>
                        <strong>{detail.key}:</strong> {detail.value}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Price list on the right */}
          <div className="price_list w-full lg:w-1/2 digiGlass relative lg:right-8 lg:top-28 p-6 lg:p-12 rounded-xl left-[-5%] max-lg:left-0">
            <ul className="leading-7 text-sm lg:text-base">
              <h2 className="digiHeader2 mb-3">
                Who Can Apply for This Program?
              </h2>
              <li className="mb-3">
                <strong>No Experience? No Problem!: </strong>
                Whether you`re a beginner with little to no coding knowledge,
                you are welcome to apply. The course does not require a tech
                background.
              </li>
              <li className="mb-3">
                <strong>Ideal for All Career Levels:</strong> Perfect for
                students, fresh graduates, job seekers, entrepreneurs, or
                professionals seeking a career switch to web and software
                development.
              </li>
              <li>
                <strong>Professionals Looking for Growth:</strong> If you`re an
                experienced professional wanting to shift into the lucrative
                world of software development, this program is tailored for you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
