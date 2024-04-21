import PropTypes from "prop-types";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "../../routes";
import Description from "./Description";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
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
