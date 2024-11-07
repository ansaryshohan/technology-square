import { createBrowserRouter } from "react-router-dom";
import ProductSection from "../components/homePageComponent/ProductSection";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import DashboardPage from "../pages/DashboardPage";
import CartCards from "../components/dashboardComponent/CartCards";
import WishListCards from "../components/dashboardComponent/WishListCards";
import StatisticsPage from "../pages/StatisticsPage";
import ContactUsPage from "../pages/ContactUsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            loader: () => fetch("/product.json"),
            element: <ProductSection />,
          },
          {
            path: "/category/:categoryName",
            loader: () => fetch("/product.json"),
            element: <ProductSection />,
          },
        ],
      },
      {
        path: "/product/:productId",
        loader: () => fetch("/product.json"),
        element: <ProductDetailsPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage/>,
        children:[
          {
            index:true,
            element:<CartCards/>
          },
          {
           path:"cart",
           element:<CartCards/> 
          },
          {
           path:"wishlist",
           element:<WishListCards/> 
          }
        ]
      },
      {
        path: "/statistics",
        loader: () => fetch("/product.json"),
        element: <StatisticsPage/>,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage/>,
      },
    ],
  },
]);

export default routes;
