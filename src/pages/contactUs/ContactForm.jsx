import React from 'react'
import Input from '../../component/formElement/Input';
import { Contact } from '../../component/common/Footer';
import Textarea from '../../component/formElement/Textarea';

const ContactForm = () => {
  return (
    <div className="py-10 mx-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <p className="font-extrabold text-2xl mb-10">Send Us a Message</p>
          <form action="." method="post" className="grid gap-3">
            <div className="grid col-span-2 gap-5 grid-cols-2 w-full">
              <Input placeholder={"Name"} />
              <Input placeholder={"Email"} />
            </div>
            <div className="grid col-span-2 gap-3">
              <Input placeholder={"Subject"} />
              <Textarea placeholder={"Message"} />
            </div>
            <div className="grid col-span-2 gap-3">
              <button className="bg-info p-4 rounded-md text-white font-semibold">
                SEND MESSAGE
              </button>
            </div>
          </form>
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
                Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit.
                Augue molestie a etiam quis tincidunt est, et efficitur ipsum
                nunc bibendum ut risus et vehicula proin tempus.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm