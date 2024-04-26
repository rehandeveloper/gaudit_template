import React from "react";
import Hero from "../../component/common/Hero";
import { Link } from "react-router-dom";
import image from "../../assets/bg-2.jpg";
import { urlRoutes } from "../../routes";
import BlogCard from "../../component/common/BlogCard";

const CaseDetail = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Case Detail`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / Case Detail
          </p>
        }
      />
    </>
  );
};

export default CaseDetail;
