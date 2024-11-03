import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between w-full">
      <Header/>
      <div className="flex-1 w-full md:w-10/12 md:mx-auto">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout