import React from "react";
import Hero from "../../component/common/Hero";
import { Link } from "react-router-dom";
import image from "../../assets/bg-2.jpg";

const ContactUs = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Contact Us`}
        description={
          <p>
            <Link to="/" className="text-info">
              Home
            </Link>{" "}
            / Contact Us
          </p>
        }
      />
    </>
  );
};

export default ContactUs;
