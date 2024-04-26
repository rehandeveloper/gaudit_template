import HomeHero from './HomeHero';
import AboutCompany from '../../component/AboutCompany';
import CompanyStatus from '../../component/CompanyStatus';
import Faq from '../../component/Faq';
import Blog from '../../component/Blog';
import "./home.css";
import OurServices from '../../component/Services';

const Home = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <HomeHero />
      <AboutCompany />
      <CompanyStatus />
      <OurServices/>
      <ChooseUs/>
      <Faq />
      <Blog />
    </div>
  );
}

export default Home