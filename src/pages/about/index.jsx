import Hero from "../../component/common/Hero";
import { COMPANY } from "../../lib/templateConstants";
import image from "../../assets/bg-2.jpg";
import { Link } from "react-router-dom";
import AboutCompany from "../../component/AboutCompany";
import CompanyStatus from "../../component/CompanyStatus";
import { urlRoutes } from "../../routes";
import AboutMySelf from "../serviceDetail/AboutMyself";
const AboutUs = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`About ${COMPANY}`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / About Us
          </p>
        }
      />
      <AboutCompany hideLink />
      <CompanyStatus />
      <AboutMySelf />
    </>
  );
}

export default AboutUs;