import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeroSection from "../components/homePageComponent/HeroSection";

const HomePage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isReload = sessionStorage.getItem("isReload");

    if (isReload) {
      navigate("/");
    }
    sessionStorage.setItem("isReload", true);
  }, []);

  return (
    <div>
      <HeroSection />
      <Outlet />
    </div>
  );
};

export default HomePage;
