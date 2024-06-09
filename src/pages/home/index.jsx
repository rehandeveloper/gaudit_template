import HomeHero from './HomeHero';
import AboutCompany from '../../component/AboutCompany';
import CompanyStatus from '../../component/CompanyStatus';
import Faq from '../../component/Faq';
import Blog from '../../component/Blog';
import "./home.css";
import OurServices from '../../component/Services';
import ChooseUs from '../../component/ChooseUs';
import Coaching from '../../component/Coaching.';
import Testimonial from '../../component/common/Testimonial';

const Home = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      
      <HomeHero />
      <AboutCompany />
      <Coaching/>
      <CompanyStatus />
      <OurServices />
      <ChooseUs />
      <Testimonial/>
      <Faq />
      <Blog />
    </div>
  );
}

export default Home