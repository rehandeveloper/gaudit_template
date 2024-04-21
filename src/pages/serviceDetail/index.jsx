import React from 'react'
import Hero from '../../component/common/Hero';
import { Link } from 'react-router-dom';
import image from "../../assets/bg-2.jpg";

const ServiceDetail = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Service Detail`}
        description={
          <p>
            <Link to="/" className="text-info">
              Home
            </Link>{" "}
            / Service Detail
          </p>
        }
      />
    </>
  );
}

export default ServiceDetail