import Link from "next/link";
import { MdOutlineMyLocation, MdWifiCalling1 } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info ">
        <h2 className="mb-5">Contact Information</h2>
        <p className="pr-20">
          We are eager to connect and explore how we can help bring your vision
          to life. Don’t hesitate to get in touch—your next project starts with
          a conversation.
        </p>
        <ul className="flex gap-7 flex-col mt-12">
          <li className="wow fadeInUp">
            <div className="flex items-center gap-6">
              <i className="w-16 h-16 rounded-full bg-red-700 flex items-center justify-center text-white text-3xl p-2">
                <MdWifiCalling1 />
              </i>
              <div className="call">
                <h4 className="mb-3">Talk to an Expert</h4>
                <span className="flex flex-col">
                  <Link href="tel:7011 918 181">+91-7011 918 181</Link>
                  <Link href="tel:9990 140 888">+91-9990 140 888</Link>
                </span>
              </div>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="flex gap-6 items-center">
              <i className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-white text-3xl p-2">
                <MdOutlineMyLocation />
              </i>
              <div className="info ">
                <h4>Our Location</h4>
                <span>
                  A-1233/34, G.D. Colony Mayur Vihar
                  <br />
                  Phase-3 Delhi-110096, India
                </span>
              </div>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="flex gap-6 items-center">
              <i className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white text-3xl p-2">
                <TfiEmail />
              </i>
              <div className="info">
                <h4>Official Email</h4>
                <a href="mailto:info@digitechmate.com">info@digitechmate.com</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
