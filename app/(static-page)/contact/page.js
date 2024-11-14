import Image from "next/image";
import ContactInfo from "./contactInfo";
import shape37 from "@/images/shape/37.png";
import ContactForm from "./contatForm";
import ContactMap from "./contactMap";
import BreadCrumb from "@/components/aboutHeader/aboutHeader";

const contactData = {
  title: "Contact Us – Connect with Digitechmate for Your Career Success",
  text: "At Digitechmate, we are committed to helping you achieve your professional dreams with expert training and personalized guidance. Our experienced team creates tailored learning paths to fit your unique goals, ensuring you gain the skills needed to succeed in today’s competitive landscape. Whether you’re just starting or aiming to elevate your career, we align our services with your aspirations to empower your journey. Contact us today, and let’s unlock your future together!",
};

const Contact = () => {
  return (
    <>
      <BreadCrumb data={contactData} />
      <div className="overflow-hidden secondary default-padding ">
        <div className="contact-shape">
          <Image src={shape37} alt="Image Not Found" />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="contact-stye-one w-1/2 max-xl:w-full max-xl:mb-12 digi_footer_contact">
              <ContactInfo />
            </div>
            <div className="contact-stye-one w-1/2  max-xl:w-full">
              <div className="contact-form-style-one px-16 py-12 max-sm:px-4">
                <h5 className="sub-heading secondary">Have Questions?</h5>
                <h2 className="heading">Send us a Massage</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
    </>
  );
};

export default Contact;
