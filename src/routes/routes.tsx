import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Page_not_found from "../pages/page_not_found";
import About_us from "../pages/about_us";
import Buyer_services from "../pages/buyer_services";
import Contact_us from "../pages/contact_us";
import Demolition_services from "../pages/demolition_services";
export const ROUTER = createBrowserRouter([
  {
    path: "/DannyYonko_NorcalSurplus",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/DannyYonko_NorcalSurplus/about_us",
    element: <About_us />,
  },
  {
    path: "/about_us",
    element: <About_us />,
  },
  {
    path: "/DannyYonko_NorcalSurplus/buyer_services",
    element: <Buyer_services />,
  },
  {
    path: "/buyer_services",
    element: <Buyer_services />,
  },
  {
    path: "/DannyYonko_NorcalSurplus/contact_us",
    element: <Contact_us />,
  },
  {
    path: "/contact_us",
    element: <Contact_us />,
  },
  {
    path: "/DannyYonko_NorcalSurplus/demolition_services",
    element: <Demolition_services />,
  },
  {
    path: "/demolition_services",
    element: <Demolition_services />,
  },
  {
    path: "*",
    element: <Page_not_found />,
  },
]);
