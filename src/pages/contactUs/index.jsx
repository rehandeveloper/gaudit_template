import React from "react";
import Hero from "../../component/common/Hero";
import { Link } from "react-router-dom";
import image from "../../assets/bg-2.jpg";
import { urlRoutes } from "../../routes";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Contact Us`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / Contact Us
          </p>
        }
      />

      <ContactForm />
      <div className="w-full p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57708.83314850784!2d82.93858052167968!3d25.310853200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21ee940b17%3A0x48600e4fcdfb7b13!2sShri%20Kashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1713717336162!5m2!1sen!2sin"
          width="100%"
          height="445"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
