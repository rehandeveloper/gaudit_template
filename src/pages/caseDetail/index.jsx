import React from "react";
import Hero from "../../component/common/Hero";
import { Link } from "react-router-dom";
import image from "../../assets/bg-2.jpg";

const CaseDetail = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Case Detail`}
        description={
          <p>
            <Link to="/" className="text-info">
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
