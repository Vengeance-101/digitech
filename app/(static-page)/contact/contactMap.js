import React from "react";

const ContactMap = () => {
  return (
    <>
      <section className="map-area">
        <div id="contact-map" className="contact-map">
          <div style={{ width: "100%" }}>
            <iframe
              title="Contact"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28019.808865507846!2d77.30839496011352!3d28.615489446071066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5827fe47ab7%3A0x43f8d8f8f8b59fe1!2sDigitechmate!5e0!3m2!1sen!2sin!4v1726758612412!5m2!1sen!2sin"
              style={{ width: "100%" }}
              height={672}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
