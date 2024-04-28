import PropTypes from "prop-types";
import {
  CallOutline,
  ChevronForwardOutline,
  LocationOutline,
  Mail,
  MailOutline,
  PhonePortraitOutline,
} from "react-ionicons";
import { COMPANY } from "../../lib/templateConstants";
import { SocialLinks } from "./Description";
import logo from "./../../assets/logoOnly.png";

import { Link } from "react-router-dom";
import { urlRoutes } from "../../routes";
import cx from "classnames"
import { Right } from "./list/RightArrowListItem";
import { serviceData } from "../../data/services";


export function Contact({ light, title = "Information",subtitle }) {
  return (
    <div className="grid grid-rows-1 md:px-10">
      <div className="row-span-1">
        <ul>
        <p
          className={cx("text-3xl mb-7  font-extrabold", {
            "text-white": !light,
          })}
        >
          {title}
        </p>
        <p>
         {subtitle}
        </p>
          <li className="flex align-baseline mt-3">
            <CallOutline width={"3em"} height={"3em"} color={"#51c5ff"} />
            <div className="ms-3">
              <p
                className={cx("font-black text-2xl", {
                  "text-white": !light,
                })}
              >
                Phone
              </p>
              <p className={cx({ "text-gray-200": !light })}>+123-234-1234</p>
            </div>
          </li>
          <li className="flex align-baseline">
            <MailOutline width={"3em"} height={"3em"} color={"#51c5ff"} />
            <div className="ms-3">
              <p
                className={cx("font-black text-2xl", {
                  "text-white": !light,
                })}
              >
                Email
              </p>
              <p className={cx({ "text-gray-200": !light })}>
                hello@gsfc.com
              </p>
            </div>
          </li>
          <li className="flex align-baseline">
            <LocationOutline width={"3em"} height={"3em"} color={"#51c5ff"} />
            <div className="ms-3">
              <p
                className={cx("font-black text-2xl", {
                  "text-white": !light,
                })}
              >
                Address
              </p>
              <p className={cx({ "text-gray-200": !light })}>
                99 Roving St., Big City, PKU 23456
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="w-full justify-center lg:justify-between pt-20 pb-10 px-5 sm:px-10 lg:px-20  shadow-md bg-info">
      <div className="grid w-full grid-cols-4  gap-10 mx-5 max-h-fit">
        <div className=" grid-rows-3 gap-10 grid col-span-4 sm:col-span-1 md:col-span-4 lg:col-span-1">
          <div className="row-span-2 ">
            <p className="font-black text-6xl text-white">
              <img src={logo} alt="gaudit logo" width="250px" />
            </p>
            {/* <font className="w-full">slogan of the company</font> */}
            <p className=" text-white">
              Donec neque massa, faucibus nec lorem vitae feugiat pharetra sem.
              Nulla elementum eget lectus dapibus amatug mix finibus.
            </p>
          </div>
          
            <SocialLinks />
        </div>
        <div className="col-span-4 md:col-span-1 grid-rows-3  sm:flex">
          <div className="row-span-2">
            <p className="text-3xl mb-7 text-white font-extrabold ">
              Quick Links
            </p>
            <ul>
              <li>
                <Right title={"Home"} to={urlRoutes.HOME} />
                <Right title={"About Us"} to={urlRoutes.ABOUT} />
                <Right title={"Services"} to={urlRoutes.SERVICE} />
                <Right title={"Cases"} to={urlRoutes.CASES} />
                <Right title={"Pricing"} to={urlRoutes.PRICING} />
                <Right title={"FAQs"} to={urlRoutes.FAQ} />
                <Right title={"Teams"} to={urlRoutes.TEAMS} />
                <Right title={"Contact Us"} to={urlRoutes.CONTACT} />
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="col-span-4 md:col-span-1 grid-rows-1  sm:flex">
          <div className="row-span-2">
            <p className="text-3xl mb-7 text-white font-extrabold ">Services</p>

            <ul>
              <li>
                {serviceData.map(item=>
                  <Right title={item.title} key={item.slug} to={urlRoutes.SERVICE_DETAIL_ID.replace(":slug",item.slug)}/>
                )}
                <Right title={"Terms & Conditions"} to={urlRoutes.TERMS}/>
                <Right title={"Privacy Policy"} to={urlRoutes.POLICY}/>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <Contact />

        <div className="col-span-4 w-full border-t border-gray-300"></div>
        <div className="text-center col-span-4 text-white">
          Copyright 2023 © All Right Reserved Design by mixomate
        </div>
      </div>
    </footer>
  );
};

export default Footer;
