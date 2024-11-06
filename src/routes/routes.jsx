import { createBrowserRouter } from "react-router-dom";
import ProductSection from "../components/homePageComponent/ProductSection";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

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
    ],
  },
]);

export default routes;
