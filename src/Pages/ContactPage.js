import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/AboutContactTitle";

function ContactPage() {
  return (
    <div className="title">
      <div>
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="mapLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.117135848623!2d3.1103268150651777!3d50.64351567950244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329e4ac3f1d13%3A0x6dd0bce92819d3b9!2s12%20Rue%20du%20P%C3%A9rigord%2C%2059370%20Mons-en-Bar%C5%93ul!5e0!3m2!1sen!2sfr!4v1623613702216!5m2!1sen!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullFcreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+33 3 76 05 84 87"}
            text2={"+33 6 36 16 83 67"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"thaibang1983hn@gmail.com"}
            text2={""}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"12 rue du Périgord,"}
            text2={"59370 Mons en Baroeul, France"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
