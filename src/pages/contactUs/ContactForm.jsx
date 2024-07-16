import React, { useRef } from "react";
import Input from "../../component/formElement/Input";
import { Contact } from "../../component/common/Footer";
import Textarea from "../../component/formElement/Textarea";
import cx from "classnames"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const ContactFormComponent = ({oneColumn}) => {
  
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(errors

  )


  const onSubmit = async(data)=>{
   const {name, email, subject, message} = data;
   
   formRef.current.reset();

    try{
     const resp = await axios.post("https://sheet.best/api/sheets/ad57720c-1507-4d69-9b41-a09c75c4b581", {
        name,
        email,
        subject,
        message
      } )
      console.log(resp);
      toast("Saved Successfully!")

     
      
      setTimeout(()=>{
        navigate("/");
      },3000)

    }
    catch(error){
      console.error(error);
      toast("something went wrong!")
    }
  
   

    
};


  return (
    <>
     <ToastContainer />
      <p className="font-extrabold text-2xl mb-10">Send Us a Message</p>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" ref={formRef}>
      <div className="grid col-span-2 gap-5 w-full grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm">Name
          <span className="text-red-500 mx-2">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", {
              required: "Name is required"
            })}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm">Email
          <span className="text-red-500 mx-2">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid col-span-2 gap-3">
        <label htmlFor="subject" className="text-sm">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          {...register("subject")}
          className="border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>
      <div className="grid col-span-2 gap-3">
        <label htmlFor="message" className="text-sm">Message
        <span className="text-red-500 mx-2">*</span>
        </label>
        <textarea
          id="message"
          placeholder="Message"
          {...register("message", {
            required: "Message is required"
          })}
          className="border border-gray-300 rounded-md p-2 mt-1"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      <div className="grid col-span-2 gap-3">
        <button type="submit" className="bg-info p-4 rounded-md text-white font-semibold">
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
