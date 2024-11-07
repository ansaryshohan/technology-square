import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContextProvider from "./contexts/CartContextProvider.jsx";
import "./index.css";
import routes from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <HelmetProvider>
        <RouterProvider router={routes}>
          <ToastContainer />
        </RouterProvider>
      </HelmetProvider>
    </CartContextProvider>
  </StrictMode>
);
