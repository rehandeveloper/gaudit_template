import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/about";
import Layout from "./component/common/Layout";
import Home from "./pages/home";
import Services from "./pages/services";
import ServiceDetail from "./pages/serviceDetail";
import Cases from "./pages/cases";
import CaseDetail from "./pages/caseDetail";
import ContactUs from "./pages/contactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-detail",
        element: <ServiceDetail />,
      },
      {
        path: "/cases",
        element: <Cases />,
      },
      {
        path: "/case-detail",
        element: <CaseDetail />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
export default router;
