import React from 'react'
import Hero from '../../component/common/Hero';
import { Link } from 'react-router-dom';
import image from "../../assets/bg-2.jpg";
import { urlRoutes } from '../../routes';

const ServiceDetail = () => {
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
    </>
  );
}

export default ServiceDetail