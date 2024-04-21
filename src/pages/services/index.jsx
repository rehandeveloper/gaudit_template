import Hero from "../../component/common/Hero";
import { COMPANY } from "../../lib/templateConstants";
import image from "../../assets/bg-2.jpg";
import { Link } from "react-router-dom";
import AboutCompany from "../../component/AboutCompany";
import CompanyStatus from "../../component/CompanyStatus";
import { urlRoutes } from "../../routes";
import OurServices from "../../component/Services";
const Services = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Our Services`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / Services
          </p>
        }
      />
      <OurServices/>
    </>
  );
};

export default Services;
