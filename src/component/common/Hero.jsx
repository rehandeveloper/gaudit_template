import React from "react";
import { ArrowUpOutline, BarChartOutline } from "react-ionicons";
import AnimatedButton from "./AnimatedButton";

function Hero({ subtitle, title, description , children}) {
  return (
    <>
      <div className="relative w-full h-[600px] hero-image bg-cover bg-no-repeat bg-center object-cover lg:px-20 p-16 font-semibold ">
        <div className="w-full lg:w-1/2">
          <p className="text-primary-light-1 my-4">{subtitle}</p>
          <h1 className="w-full text-4xl  lg:text-6xl xl:text-7xl text-white lg:leading-tight xl:leading-tight leading-normal">
            {title}
          </h1>

          <p className="text-muted font-thin my-8">{description}</p>
          <AnimatedButton text={"discover more"} />
        </div>
      </div>
      {children}
    </>
  );
}

export default Hero;
