import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <p className="text-2xl font-bold">ToyTopia</p>
          <p className="">ToyTop Industries Ltd.</p>
          <p className="">Providing reliable tech since 1992</p>
          <p></p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contacts" className="link link-hover">
            Contact
          </Link>
          <Link to="/term-and-conditions" className="link link-hover">
            Terms and condition
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <Link to="https://www.facebook.com/freelancerjakiul/">
              <ImFacebook2 />
            </Link>
            <Link to="https://www.instagram.com/jakiulhasan0/">
              <FaInstagramSquare />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
