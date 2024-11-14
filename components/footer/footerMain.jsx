/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Estiva_logo from "./estiva_logo/Estiva";
import { GrLocation } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

const FooterMain = () => {
  return (
    <>
      <section className=" footer_glass max-sm:px-4 lg:px-20 footerbgsets default-padding">
        <section className="relative">
          <div className="container mx-auto">
            <div className="w-full  divide-devider-color border-b-1 mb-4">
              <Link href="/">
                <Image
                  className="mediaLogoSet "
                  priority
                  src={`data:image/png;base64,${Estiva_logo}`}
                  alt="digitechmate company Logo"
                  width={250}
                  height={65}
                />
              </Link>
            </div>
            <div className="grid grid-cols-7 gap-8  max-md:gap-1 max-lg:grid-cols-3 max-sm:grid-cols-2 ">
              <div className="footer_about col-span-3 max-lg:col-span-6 max-sm:col-span-3">
                <h3>Move Your Career to the Next Level</h3>

                <p className="mt-2">
                  Imagine a place where innovation isn't an option – it's the
                  only language we speak. From crafting genius-level solutions
                  to providing smart time support, we offer everything you need
                  to excel in this digital realm. Join us in the digital
                  revolution, where every project is a masterpiece, and every
                  client is a success story.
                </p>
              </div>

              <div className="footer_service  ">
                <h4 className="text-cyan-950"> Company</h4>
                <ul className="mt-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/estivasoftech-history">Case study</Link>
                  </li>
                  <li>
                    <Link href="https://www.estivasoftech.com/blog/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-estivasoftech">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="footer_comapny  ">
                <h4 className="text-cyan-950">Our services</h4>
                <ul className="mt-4">
                  <li>
                    <Link href="/digital-marketing-services">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development-services">
                      Web development
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-design-services">Designing</Link>
                  </li>
                  <li>
                    <Link href="/software-development-services">Software</Link>
                  </li>
                  <li>
                    <Link href="/multimedia-presentation-services">
                      Multimedia
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer_contact col-span-2 ">
                <h4 className="text-cyan-950">Find us Here</h4>
                <ul className="mt-4">
                  <li className="flex py-1">
                    <i>
                      <BsTelephoneOutbound className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="tel:+919990140888">+91-999 0140 888</Link>
                    </span>
                  </li>
                  <li className="flex py-1">
                    <i>
                      <BsTelephoneOutbound className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="tel:+917011918181">+91-7011 91 8181</Link>
                    </span>
                  </li>
                  <li className="flex py-1">
                    <i>
                      <MdAlternateEmail className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="mailto:info@digitechmate.com">
                        info@digitechmate.com
                      </Link>
                    </span>
                  </li>
                  <li className="flex py-1">
                    <i>
                      <GrLocation className="text-2xl " />
                    </i>
                    <span className="pl-2">
                      <Link href="https://maps.app.goo.gl/nbhDKnGoNzm781zJ7">
                        A-1233/34,GD Colony Mayur Vihar Phase -3, Delhi 110096,
                        India.
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FooterMain;
