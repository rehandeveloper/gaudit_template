import HomeHero from './HomeHero';
import AboutCompany from '../../component/AboutCompany';
import CompanyStatus from '../../component/CompanyStatus';
import Faq from '../../component/Faq';
import Blog from '../../component/Blog';
import "./home.css";
import Services from '../../component/Services';
import ChooseUs from '../../component/ChooseUs';

const Home = () => {
  return (
    <div className='bg-white w-full'>
      <HomeHero />
      <AboutCompany />
      <CompanyStatus />
      <Services/>
      <ChooseUs/>
      <Faq />
      <Blog />
    </div>
  );
}

export default Home