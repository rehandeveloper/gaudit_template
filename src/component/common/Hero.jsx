import React from "react";
import { ArrowUpOutline, BarChartOutline } from "react-ionicons";
import AnimatedButton from "./AnimatedButton";

function Hero({
  subtitle,
  title,
  description,
  children,
  image,
  button,
  imageHeight = "h-[600px]",
}) {
  return (
    <>
      <div
        id="Hero"
        className={`relative w-full ${imageHeight} hero-image bg-cover bg-no-repeat bg-center object-cover lg:px-20 p-16 font-semibold `}
        style={{ background: `url(${image}),rgba(22, 22, 22, 0.407)` }}
      >
        <div className="w-full lg:w-1/2">
          <p className="text-primary-light-1 my-4  Global Strategy Finance Consultants">{subtitle}</p>
          <h1 className="w-full text-4xl  lg:text-6xl xl:text-7xl text-white lg:leading-tight xl:leading-tight leading-normal">
            {title}
          </h1>

          <p className="text-muted font-thin my-8">{description}</p>
          {button}
        </div>
      </div>
      {children}
    </>
  );
}

export default Hero;
