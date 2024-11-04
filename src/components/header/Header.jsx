import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const {pathname}= useLocation();
  return (
    <div className="w-full">
      <div className={`navbar rounded-t-lg w-10/12 mx-auto ps-6 ${pathname==="/"?"bg-purple-600 text-white":"bg-base-100"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-gray-400 font-semibold" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) => (isActive ? "text-gray-400 font-semibold" : "")}
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "text-gray-400 font-semibold" : "")}
            >
              Dashboard
            </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="text-xl font-bold">Gadget World</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center gap-8 px-1">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? " text-gray-400 font-semibold" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) => (isActive ? " text-gray-400 font-semibold" : "")}
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? " text-gray-400 font-semibold" : "")}
            >
              Dashboard
            </NavLink>
        </ul>
        </div>
        <div className="navbar-end space-x-4 pr-6">
          <a className="text-2xl p-2 border rounded-full hover:bg-gray-200 hover:text-purple-600">
            <IoCartOutline />
          </a>
          <a className="text-2xl p-2 border rounded-full hover:bg-gray-200 hover:text-purple-600">
            <IoHeartOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
