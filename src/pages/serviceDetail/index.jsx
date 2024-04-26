import React, { useState } from "react";
import Hero from "../../component/common/Hero";
import { Link } from "react-router-dom";
import image from "../../assets/bg-2.jpg";
import { urlRoutes } from "../../routes";
import { serviceData } from "../../data/services";
import { Right } from "../../component/common/list/RightArrowListItem";
import {
  ArrowRedoOutline,
  Document,
  DocumentOutline,
  FolderOpen,
  FolderOpenOutline,
  ShareOutline,
  ShareSharp,
  ShareSocialOutline,
} from "react-ionicons";
import ManageFinances from "../cases/ManageFinances";
import Input from "../../component/formElement/Input";
import Textarea from "../../component/formElement/Textarea";
import { ContactFormComponent } from "../contactUs/ContactForm";
import ServiceContent from "./ServiceContent";
import AboutMySelf from "./AboutMyself";

const ServiceDetail = () => {
  const [serviceID, setServiceID] = useState(1)
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Service Detail`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / Service Detail
          </p>
        }
      />
      <section className="block lg:flex mx-5 lg:mx-10 xl:mx-48 py-24 gap-x-11">
        <div className="w-12/12">
          <ServiceContent
            data={serviceData.find((item) => item.id === serviceID)}
          />
        </div>
        <div className="max-w-6/12">
          <div className="card bg-info p-7 w-100 rounded-xl mt-5">
            <h1 className="font-extrabold text-2xl text-white pb-3">
              Other Services
            </h1>
            <ul>
              {serviceData
                .filter((item) => item.id !== serviceID)
                .map((item, index) => (
                  <Right
                    title={item.title}
                    to={urlRoutes.HOME}
                    key={index}
                    handleClick={(e) => {
                      e.preventDefault();
                      setServiceID(item.id);
                    }}
                  />
                ))}
            </ul>
            {/* {
              serviceData.map(item=> )
            } */}
          </div>
          <ManageFinances parallax={false} />
          <div className="relative border-info border p-10">
            <ContactFormComponent oneColumn />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
