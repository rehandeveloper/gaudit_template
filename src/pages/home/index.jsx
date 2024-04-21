import HomeHero from './HomeHero';
import AboutCompany from '../../component/AboutCompany';
import CompanyStatus from '../../component/CompanyStatus';
import Faq from '../../component/Faq';
import Blog from '../../component/Blog';
import "./home.css";

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutCompany />
      <CompanyStatus />
      <Faq />
      <Blog />
    </>
  );
}

export default Home