import React from "react";
import Input from "../../component/formElement/Input";
import { Contact } from "../../component/common/Footer";
import Textarea from "../../component/formElement/Textarea";
import cx from "classnames"
export const ContactFormComponent = ({oneColumn}) => {
  return (
    <>
      <p className="font-extrabold text-2xl mb-10">Send Us a Message</p>
      <form action="." method="post" className="grid gap-5">
        <div className={cx("grid col-span-2 gap-5  w-full",{
          "grid-cols-2":!oneColumn
        })}>
          <Input placeholder={"Name"} />
          <Input placeholder={"Email"} />
        </div>
        <div className="grid col-span-2 gap-3">
          <Input placeholder={"Subject"} />
          <Textarea placeholder={"Message"} />
        </div>
        <div className="grid col-span-2 gap-3">
          <button className="bg-info p-4 mt-3 rounded-md text-white font-semibold">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </>
  );
};
const ContactForm = () => {
  return (
    <div className="py-10 mx-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <ContactFormComponent />
        </div>
        <div className="col-span-1">
          <p className="font-extrabold text-xl text-info ms-10 mb-6">
            CONTACT US
          </p>

          <Contact
            light
            title="Get In Touch!"
            subtitle={
              <>
                {" "}
                Ready to take your business to the next level? Contact Global
                Strategy Finance Consultants today to schedule a consultation.
                Let's discuss how our services can address your specific needs
                and drive your business forward.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
