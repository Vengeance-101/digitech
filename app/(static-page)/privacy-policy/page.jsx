import Link from "next/link";
import React from "react";

const PrivacyPage = () => {
  return (
    <>
      <section className="estiva_gradient">
        <div className="container mx-auto">
          <div className="banner py-20">
            <h1 className="text-white text-center">Privacy Policy</h1>
            <h3 className="text-white text-center">- By DigiTechMate</h3>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-8 px-[5%]">
        <p className="">
          This Privacy Policy (“Privacy Policy”) explains how Digitechmate
          collect, use and share personally identifiable information of visitors
          to our web site (the “Site”) and users of
          <br />
          our products and services (the “Services”).
        </p>

        <div className="information_provide mt-10 ">
          <ul className="flex flex-col gap-7">
            <li>
              {" "}
              <h2>Information collected by Digitechmate</h2>
            </li>
            <li>
              <h3>
                The information provided on this site by the visitors would be
                in two categories
              </h3>
            </li>
            <li>
              1 . Information relating to the use of the site or the services
              provided by the site which includes enrollment information for
              courses (“site information”).
            </li>
            <li>
              2 . Information relating to the taking of the courses required to
              satisfy the course requirements such as answers to questions,
              projects and assignments and other submissions.(“Course
              Information”)
            </li>
            <li>
              The site information is needed for record and identification
              purposes of visitors with respect to the website. The course
              information is necessary to fulfil all the requirements of a
              certification award at the end of each course.
            </li>
            <li>
              Site information may be used at a later date to contact visitors
              via email or telephone, typically to get feedback, to inform the
              visitors about new products or provide support on other issues, If
              you do not want to be contacted by email, you can unsubscribe at
              any time.
            </li>
            <li>
              <h3>
                The site information obtained during course registration and
                payment are:
              </h3>
            </li>
            <li>1 . Name</li>
            <li>2 . E-mail address</li>
            <li>3 . Telephone number</li>
            <li>4 . Address(s)</li>
            <li>5 . Course name</li>
          </ul>

          <div className="cookies_policy mt-10 ">
            <ul className="flex flex-col gap-7">
              <li>
                {" "}
                <h2>Cookies Policy</h2>
              </li>
              <li>
                This site uses cookies. A cookie is a string of information that
                this site is going to store on the visitor&apos;s computer,
                which the visitor&apos;s browser provides to the site, each time
                the visitor returns. The cookie does not personally identify the
                visitor. The purpose of the cookie is to enhance User experience
                on the site, analyze website performance and may also be used
                for future discounts and price offers.
              </li>
              <li>
                2. No payment will be refunded and will not be adjusted in any
                other course.
              </li>
              <li></li>
              <li>
                Any questions, comments or enquiries pertaining to our privacy
                policies can be forwarded to{" "}
                <Link
                  className="text-blue-600"
                  href="mailto:info@digitechmate.com"
                >
                  info@digitechmate.com
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
