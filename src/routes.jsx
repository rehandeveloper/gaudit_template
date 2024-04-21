import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/about";
import Layout from "./component/common/Layout";
import Home from "./pages/home";

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
    ],
  },
]);
export default router;
