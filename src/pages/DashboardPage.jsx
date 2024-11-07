import { Helmet } from "react-helmet-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const {pathname}=useLocation()

  return (
    <div className="pb-20">
      <Helmet>
        <title>Dashboard- Gadget World</title>
      </Helmet>
      <div className="pb-6  bg-purple-600 text-white">
        <div className="pt-14 pb-6 rounded-b-lg md:w-10/12 md:mx-auto">
          <h1 className="text-5xl font-bold text-center">Dashboard</h1>
          <p className="text-center text-base font-normal w-7/12 mx-auto pt-5 pb-12">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              className={`px-8 py-2 border-2 rounded-3xl ${
                pathname === "/dashboard/cart" ? "bg-white text-black" : ""
              }`}
              onClick={() => navigate("/dashboard/cart")}
            >
              Cart
            </button>
            <button
              className={`px-5 py-2 border-2 rounded-3xl ${
                pathname === "/dashboard/wishlist" ? "bg-white text-black" : ""
              }`}
              onClick={() => navigate("/dashboard/wishlist")}
            >
              WishList
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 mx-auto p-4 rounded-lg bg-white/50 backdrop-blur-md ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
