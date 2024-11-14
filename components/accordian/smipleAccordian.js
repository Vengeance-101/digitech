"use client";
import Image from "next/image";
import faqimg from "@/images/faq/faq.webp";
import { useEffect } from "react";
import { PiUsersThreeBold } from "react-icons/pi";

const SimpleAccordian = ({ faq }) => {
  useEffect(() => {
    const accordionItemHeaders = document.querySelectorAll(
      ".accordionitemheader"
    );

    const handleAccordionClick = (event) => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordionitemheader.active"
      );
      const accordionItemHeader = event.target;

      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.remove("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      accordionItemBody.style.maxHeight =
        accordionItemHeader.classList.contains("active")
          ? accordionItemBody.scrollHeight + "px"
          : 0;
    };

    accordionItemHeaders.forEach((header) => {
      header.addEventListener("click", handleAccordionClick);
    });

    // Cleanup listeners on component unmount
    return () => {
      accordionItemHeaders.forEach((header) => {
        header.removeEventListener("click", handleAccordionClick);
      });
    };
  }, []);

  return (
    <section className="faqbg  overflow-hidden px-[9%] pt-[100px] pb-[45px]">
      <div className="container mx-auto">
        <div className="flex">
          {/* FAQ Section */}
          <div className="w-full lg:w-[55%]">
            <div className="digitechmate_topheading mb-4">
              <h3 className="text-gray-800">
                Common Inquiries About Digitechmate
              </h3>
              <h2> Frequently Asked Questions (FAQ)</h2>
            </div>
            <div className="accordion">
              {faq?.map(({ question, answer }, i) => (
                <div className="accordionitem" key={i}>
                  <div className="accordionitemheader cursor-pointer p-4 bg-gray-100">
                    {question}
                  </div>
                  <div className="accordionitembody overflow-hidden max-h-0 transition-max-height duration-300 ease-in-out">
                    <div
                      className="accordionitembodycontent p-4 bg-white"
                      dangerouslySetInnerHTML={{ __html: answer }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block lg:w-[45%] relative">
            <div className="borderrOne pl-4 h-[550px] mx-5 relative">
              <div className="flex my-4 ml-2 space-x-2">
                <div className="iconsMaondov" />
                <div className="iconsMaondov" />
                <div className="iconsMaondov" />
              </div>

              <div className="h-[456px] relative">
                <div className="absolute shine flex justify-end w-full h-full">
                  <video
                    src="/images/video/faq.webm"
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div className="absolute top-[20rem]    ">
                  <div className="flex items-center px-4 py-7 border-2 rounded-lg gap-4 bg-bg-estiva-footer justify-center">
                    <i className="text-[32px] text-white"></i>
                    <h6 className="text-white text-center">
                      Empower your future with cutting-edge tech skills - your
                      success starts here!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleAccordian;
