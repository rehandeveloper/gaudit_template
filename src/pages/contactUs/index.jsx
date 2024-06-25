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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215346.0668518105!2d58.26543631334627!3d23.581874531643138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8879aafc9%3A0xdb53876d0d79a72c!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sin!4v1719340449403!5m2!1sen!2sin"
          width="100%"
          height="445"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215346.0668518105!2d58.26543631334627!3d23.581874531643138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8879aafc9%3A0xdb53876d0d79a72c!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sin!4v1719340449403!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </>
  );
};

export default ContactUs;
