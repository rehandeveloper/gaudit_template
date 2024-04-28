import PropTypes from "prop-types";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "../../routes";
// import Description from './Description';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Description } from "./Description";
import ScrollTop from "./ScrollTop";

const Layout = () => {
  return (
    <div>
       <ScrollTop/>
      <Description />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
