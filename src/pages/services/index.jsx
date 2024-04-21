import Hero from "../../component/common/Hero";
import { COMPANY } from "../../lib/templateConstants";
import image from "../../assets/bg-2.jpg";
import { Link } from "react-router-dom";
import AboutCompany from "../../component/AboutCompany";
import CompanyStatus from "../../component/CompanyStatus";
const Services = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Our Services`}
        description={
          <p>
            <Link to="/" className="text-info">
              Home
            </Link>{" "}
            / Services
          </p>
        }
      />
      
    </>
  );
};

export default Services;
