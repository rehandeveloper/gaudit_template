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
import Member from "./pages/member";
import { Terms, Policy } from "./pages/termsAndPolicies";
import Coaching from "./pages/coaching";


export const urlRoutes = {
  HOME: "/",
  ABOUT: "/about",
  SERVICE: "/services",
  SERVICE_DETAIL: "/service-detail/",
  SERVICE_DETAIL_ID: "/service-detail/:slug",
  CASES: "/cases",
  FAQ: "/faq",
  CASE_DETAIL: "/case-detail",
  CONTACT: "/contact",
  TEAMS: "/teams",
  Member: "/teams/:member",
  TERMS: "/terms-and-conditions",
  POLICY: "/privacy-policy",
  COACHING:"/coaching/:program"
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
      {
        path: urlRoutes.TERMS,
        element: <Terms />,
      },
      {
        path: urlRoutes.POLICY,
        element: <Policy />,
      },
      {
        path: urlRoutes.Member,
        element: <Member />,
      },
      {
        path: urlRoutes.COACHING,
        element: <Coaching />,
      }
    ],
  },
]);
export default router;
