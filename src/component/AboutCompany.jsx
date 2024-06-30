import React from 'react';
import businness from "./../assets/ew_1.png";
import unity from "./../assets/bg-2.jpg";
import { ChevronForwardOutline, Play } from 'react-ionicons';
import AnimatedButton from './common/AnimatedButton';
import {motion} from "framer-motion";

function AboutCompany({ hideLink }) {
  return (
    <div className="w-full min-h-screen lg:px-24 py-10 lg:flex block gap-x-24">
      <motion.div
       initial={{ opacity: 0, x: "-110%" }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
        delay:0.2,
         duration: 1.5,
         opacity: {
           duration: 1,
         },
       }}
       viewport={{once:true,}}
      className="lg:w-1/2 w-full h-full p-10 relative">
        <img
          src={businness}
          width={200}
          height={200}
          className="w-full h-full rounded-2xl shadow-sm"
        />
        <div className="absolute lg:w-96 w-52 lg:h-52 h-36 rounded-lg lg:right-0 right-4 bottom-0  ">
          <img src={unity} className="w-full h-full rounded-2xl shadow-sm" />
          <span className="absolute top-1/2 left-1/2 flex justify-center items-center h-10 w-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
            <button className="absolute">
              <Play
                color={"#fff"}
                height="10px"
                width="10px"
                cssClasses={"text-hite"}
              />
            </button>
          </span>
        </div>
      </motion.div>
      <div className="lg:w-1/2 w-full h-full">
        <div className="p-12">
          <p className="text-primary font-medium text-xl">About Global Strategy Finance Consultants
</p>
          <motion.h1 
           initial={{ opacity: 0, y: "100%" }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{
             duration: 1.5,
             opacity: {
               duration: 1,
             },
           }}
           viewport={{once:true,}}
          className="text-black lg:text-5xl text-2xl leading-loose font-semibold my-4">
            Strategic partner for Finance and Business Strategy.
          </motion.h1>
          <p className="text-secondary my-2">
          We offer a specialized Strategy Mastery Program, Personal Development and Strategic Finance coaching, including training on becoming a Fractional CFO, all designed to enhance our clients' careers and empower them to expand or establish their businesses. Our expert guidance ensures sustainable growth and long-term success, making us your strategic partner in finance and business strategy. We provide comprehensive, customized solutions that uphold excellence and integrity. Discover how our expertise in Internal Audit, Tax Services, Feasibility Studies, Fractional CFO Services, and Valuation Reports can propel your business forward.

          </p>

          <div className="my-14">
            <div className="pb-5">
              <h1 className="lg:text-3xl text:xl font-semibold">
                {" "}
                <ChevronForwardOutline
                  color={"#00B6D6"}
                  cssClasses={"inline-block mb-1 mr-4"}
                />
                Our Vision
              </h1>
              <p>
              Global Strategy Finance Consultants, we're committed to empowering businesses with insightful financial strategies and robust analyses. Our team of seasoned professionals brings a wealth of experience across diverse industries, dedicated to delivering measurable results and unparalleled value.

              </p>
            </div>
            <div>
              <h1 className="lg:text-3xl text:xl font-semibold">
                {" "}
                <ChevronForwardOutline
                  color={"#00B6D6"}
                  cssClasses={"text-primary-light inline-block mb-1 mr-4"}
                />
                Our Mission
              </h1>
              <p>
              To be recognized as the trusted advisor for businesses seeking innovative Financial and Strategic Solutions, contributing to their sustainable growth and success.

              </p>
            </div>
          </div>
          {!hideLink && <AnimatedButton text={"More About Us"} to={"/about"} />}
        </div>
      </div>
    </div>
  );
}

export default AboutCompany