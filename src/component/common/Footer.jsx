import PropTypes from "prop-types"
import { CallOutline, ChevronForwardOutline, LocationOutline, Mail, MailOutline, PhonePortraitOutline } from 'react-ionicons';
import { COMPANY } from '../../lib/templateConstants';
import { Logo } from './Description';
import { Link } from "react-router-dom";
import { urlRoutes } from "../../routes";


function Right({title,to}) {
  return (
    <div className="flex text-white gap-3 font-extrabold text-lg">
      <ChevronForwardOutline
        color={"#51c5ff"}
        title={title}
        height="23px"
        width="23px"
      />
      <Link to={to}>
        <div className="hover:text-blue-300 text-white">{title}</div>
      </Link>
    </div>
  );
}

Right.propTypes = {
  title: PropTypes.any,
  to: PropTypes.any
}


const Footer = () => {
  return (
    <footer className="w-full justify-center lg:justify-between py-40 px-5 sm:px-10 lg:px-20  shadow-md bg-info">
      <div className="grid w-full grid-cols-4  gap-10 ">
        <div className=" grid-rows-3 gap-10 grid col-span-4 sm:col-span-1 md:col-span-4 lg:col-span-1">
          <div>
            <p className="font-black text-6xl text-white">{COMPANY}</p>
            <font className="w-full">slogan of the company</font>
          </div>
          <div>
            <p className=" text-white">
              Donec neque massa, faucibus nec lorem vitae feugiat pharetra sem.
              Nulla elementum eget lectus dapibus amatug mix finibus.
            </p>
          </div>
          <div className="flex gap-2">
            <Logo />
          </div>
        </div>
        <div className="hidden grid-rows-3  sm:flex">
          <div className="row-span-2">
            <p className="text-3xl mb-7 text-white font-extrabold ">
              Quick Links
            </p>
            <ul>
              <li>
                <Right title={"Home"} to={urlRoutes.HOME} />
                <Right title={"About Us"} to={urlRoutes.ABOUT} />
                <Right title={"Services"} to={urlRoutes.SERVICER} />
                <Right title={"Cases"} to={urlRoutes.CASES} />
                <Right title={"Pricing"} to={urlRoutes.PRICING} />
                <Right title={"FAQs"} to={urlRoutes.FAQ} />
                <Right title={"Contact Us"} to={urlRoutes.CONTACT} />
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="hidden grid-rows-2  sm:flex">
          <div className="row-span-2">
            <p className="text-3xl mb-7 text-white font-extrabold ">Services</p>

            <ul>
              <li>
                <Right title={"Bookkeeping"} />
                <Right title={"Payroll Services"} />
                <Right title={"Tax Planning"} />
                <Right title={"Audit & Assurance"} />
                <Right title={"Financial Statement"} />
                <Right title={"Tech Consulting"} />
                <Right title={"Business Advisory"} />
                <Right title={"FAQs"} />
                <Right title={"Outsourced CFO"} />
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="grid grid-rows-2">
          <div className="row-span-2">
            <p className="text-3xl mb-7 text-white font-extrabold ">
              Information
            </p>
            <ul>
              <li className="flex align-baseline">
                <CallOutline width={"3em"} height={"3em"} color={"#51c5ff"} />
                <div className="ms-3">
                  <p className="font-black text-2xl text-white">Phone</p>
                  <p className="text-gray-200">+123-234-1234</p>
                </div>
              </li>
              <li className="flex align-baseline">
                <MailOutline width={"3em"} height={"3em"} color={"#51c5ff"} />
                <div className="ms-3">
                  <p className="font-black text-2xl text-white">Email</p>
                  <p className="text-gray-200">hello@awesomesite.com</p>
                </div>
              </li>
              <li className="flex align-baseline">
                <LocationOutline
                  width={"3em"}
                  height={"3em"}
                  color={"#51c5ff"}
                />
                <div className="ms-3">
                  <p className="font-black text-2xl text-white">Address</p>
                  <p className="text-gray-200">
                    99 Roving St., Big City, PKU 23456
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div></div>
        </div>

        <div className="col-span-4 w-full border-t border-gray-300"></div>
        <div className="text-center col-span-4 text-white">
          Copyright 2023 © All Right Reserved Design by mixomate
        </div>
      </div>
    </footer>
  );
}

export default Footer