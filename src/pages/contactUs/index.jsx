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
    </>
  );
};

export default ContactUs;
