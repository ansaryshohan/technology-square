import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  
  return (
    <div className="min-h-screen flex flex-col justify-between w-full">
      <ToastContainer autoClose={1500} />
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
