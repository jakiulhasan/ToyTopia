import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-300 mt-10 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-base-content">
        {/* Brand Section */}
        <div>
          <img className="w-32 mb-3" src={logo} alt="logo" />
          <p className="font-semibold text-lg">ToyTop Industries Ltd.</p>
          <p className="text-sm leading-relaxed mt-2 text-base-content/80">
            ToyTopiya – Where Playtime Meets Learning! We provide high-quality,
            safe, educational toys that inspire creativity. Trusted
            international brands with affordable prices & nationwide delivery.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="footer-title mb-3 text-lg font-semibold">Company</h6>
          <ul className="space-y-2 text-base-content/80">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/term-and-conditions"
                className="hover:text-primary transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="footer-title mb-3 text-lg font-semibold">Follow Us</h6>
          <div className="flex gap-5 text-3xl text-base-content/80">
            <Link
              to="https://www.facebook.com/freelancerjakiul/"
              className="hover:text-primary transition"
            >
              <ImFacebook2 />
            </Link>
            <Link
              to="https://www.instagram.com/jakiulhasan0/"
              className="hover:text-primary transition"
            >
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Small Line */}
      <div className="text-center py-4 border-t border-base-200 text-sm text-base-content/60">
        © {new Date().getFullYear()} ToyTopiya. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
