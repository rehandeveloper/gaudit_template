import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/about";
import Layout from "./component/common/Layout";
import Home from "./pages/home";
import Services from "./pages/services";
import ServiceDetail from "./pages/serviceDetail";
import Cases from "./pages/cases";
import CaseDetail from "./pages/caseDetail";
import ContactUs from "./pages/contactUs";
import Teams from "./pages/teams";

export const urlRoutes = {
  HOME: "/",
  ABOUT: "/about",
  SERVICE: "/services",
  SERVICE_DETAIL:"/serservice-detail/",
  SERVICE_DETAIL_ID: "/service-detail/:id",
  CASES: "/cases",
  PRICING: "/pricing",
  FAQ: "/faq",
  CASE_DETAIL: "/case-detail",
  CONTACT: "/contact",
  TEAMS: "/teams",
}; 


const router = createBrowserRouter([
  {
    path: urlRoutes.HOME,
    element: <Layout />,
    children: [
      {
        path: urlRoutes.HOME,
        element: <Home />,
      },
      {
        path: urlRoutes.ABOUT,
        element: <AboutUs />,
      },
      {
        path: urlRoutes.SERVICE,
        element: <Services />,
      },
      {
        path: urlRoutes.SERVICE_DETAIL,
        element: <ServiceDetail />,
      },
      {
        path: urlRoutes.SERVICE_DETAIL_ID,
        element: <ServiceDetail />,
      },
      {
        path: urlRoutes.CASES,
        element: <Cases />,
      },
      {
        path: urlRoutes.CASE_DETAIL,
        element: <CaseDetail />,
      },
      {
        path: urlRoutes.CONTACT,
        element: <ContactUs />,
      },
      {
        path: urlRoutes.TEAMS,
        element: <Teams />,
      },
    ],
  },
]);
export default router;
