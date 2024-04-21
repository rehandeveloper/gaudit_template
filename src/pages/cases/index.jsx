import Hero from "../../component/common/Hero";
import { COMPANY } from "../../lib/templateConstants";
import image from "../../assets/bg-2.jpg";
import { Link } from "react-router-dom";
import AboutCompany from "../../component/AboutCompany";
import CompanyStatus from "../../component/CompanyStatus";
import { urlRoutes } from "../../routes";
const Cases = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Case Studies`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / Cases
          </p>
        }
      />
    </>
  );
};

export default Cases;
