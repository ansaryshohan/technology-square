import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeroSection from "../components/homePageComponent/HeroSection";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isReload = sessionStorage.getItem("isReload");

    if (isReload) {
      navigate("/");
    }
    sessionStorage.setItem("isReload", true);
  }, [navigate]);

  return (
    <div>
      <Helmet>
        <title>HomePage- Gadget World</title>
      </Helmet>
      <HeroSection />
      <Outlet />
    </div>
  );
};

export default HomePage;
