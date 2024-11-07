import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto grid-flow-col items-center text-center mb-5">
        <h3 className="text-2xl font-bold"> Gadget World</h3>
        <p>Providing reliable tech since 2012</p>
      </div>
      <footer className="border">
        <div className="w-10/12 mx-auto footer p-10 flex justify-between gap-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link to={"/"} className="link link-hover">
              Home
            </Link>
            <Link to={"/statistics"} className="link link-hover">
              Statistics
            </Link>
            <Link to={"/dashboard"} className="link link-hover">
              Dashboard
            </Link>
            <Link to={"/contact-us"} className="link link-hover">
              Contact Us
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
