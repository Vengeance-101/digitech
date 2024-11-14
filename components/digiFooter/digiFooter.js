import Image from "next/image";
import Link from "next/link";
import Estiva_logo from "./estiva_logo/Estiva";
import { MdAttachEmail, MdInstallMobile } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { PiPhoneCallThin } from "react-icons/pi";
import { FaTeamspeak } from "react-icons/fa";
// footer content
const footer_content = {
  number_text: "Talk to an Expert's Advice!",
  number: "+91-9990 140 888",
  sm_info:
    "At Digitechmate, we believe that success is built on passion, perseverance, and the power of learning. Whether you're a job seeker, a student, or a professional, every challenge is an opportunity to grow. Stay focused, stay curious, and let innovation drive you forward—because the future belongs to those who never stop learning.",
  tagline: "Digitechmate: Empowering Growth Through Innovation",
  email: "info@digitechmate.com",
  address: "A - 1233/34, G. D. Colony Mayur Vihar Phase -3, Delhi",
  footer_links: [
    {
      id: 1,
      cls: "md:w-1/3",
      title: "Top Demanding Course",
      links: [
        { link: "#", title: "Full Stack Development" },
        { link: "#", title: "MERN Stack Development" },
        { link: "#", title: "Cyber Security" },
        { link: "#", title: "UI Development" },
        { link: "#", title: "UI/UX Designing" },
        { link: "#", title: "Digital Marketing" },
      ],
    },
    {
      id: 2,
      cls: "hidden lg:block w-1/3",
      title: "Quick Links",
      links: [
        { link: "#", title: "Book an Appointment" },
        { link: "#", title: "Corporate Training" },
        { link: "#", title: "Online-Course" },
        { link: "#", title: "Career" },
        { link: "#", title: "News" },
        { link: "#", title: "Contact Us" },
      ],
    },
  ],
};

const {
  number_text,
  number,
  sm_info,
  tagline,
  email,
  website,
  address,
  footer_links,
} = footer_content;

const Footer = () => {
  return (
    <footer className="default-padding-footer relative digitechmate_footer_bg digi_footer_bg bg-service-bg">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-lg:justify-around ">
          <div className="w-1/2 mb-3  max-xl:w-1/2  max-lg:w-full">
            <div className="footer-contact-info">
              <div className="emmergency-call flex items-center mb-8 ">
                <div className="text-2xl mr-4">
                  <i className="animated-icon font-bold text-6xl">
                    <FaTeamspeak />
                  </i>
                </div>
                <div className="">
                  <h3 className="text-lg font-semibold mb-2 max-sm:text-sm">
                    {number_text}
                  </h3>
                  <h3 className="text-3xl font-bold text-red-700 max-xsm:text-[22px] ">
                    <Link href="tel:9990140888">{number}</Link>
                  </h3>
                </div>
              </div>
              <div className="footer-logo mb-4 ">
                <Link href="/">
                  <Image
                    className="mediaLogoSet "
                    priority
                    src={`data:image/png;base64,${Estiva_logo}`}
                    alt="digitechmate company Logo"
                    width={180}
                    height={65}
                  />
                </Link>
              </div>
              <div className="footer-contact-content mb-8">
                <strong className="text-red-700 py-4">{tagline}</strong>

                <p>{sm_info}</p>
              </div>
              <div className="footer-emailing">
                <ul>
                  <li className="flex gap-3 items-center mb-4  text-red-600 group">
                    <MdAttachEmail className=" h-10 w-10 rounded-full ring-2  ring-red-500 p-2  ease-in-out duration-300 group-hover:p-1" />

                    <Link
                      href="mailto:info@digitechmate.com"
                      className="text-black text-sm"
                    >
                      <strong>{email}</strong>
                    </Link>
                  </li>

                  <li className="flex items-center mb-4 gap-3 text-red-600 group">
                    <GrMapLocation className=" h-10 w-10 rounded-full ring-2  ring-red-500 p-2  ease-in-out duration-300  group-hover:p-1" />
                    <Link
                      href="https://maps.app.goo.gl/8zB1DtcTap3tfwog6"
                      target="_blank"
                      className="text-black text-sm"
                    >
                      <strong>{address}</strong>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {footer_links.map((item, i) => (
            <div key={i} className="w-1/4 flex justify-center">
              <div className="footer-widget">
                <h3 className="footer-title text-2xl font-semibold mb-6">
                  {item.title}
                </h3>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index} className="mb-4">
                      <Link href={link.link} className="hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
