import React from "react";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import { Link } from "react-router";
const Welcome = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-5">
      <Link to="/all-toys" className="w-1/2">
        <img src={Banner1} alt="banner 1" />
      </Link>
      <Link to="/all-toys" className="w-1/2">
        <img src={Banner2} alt="banner 2" />
      </Link>
    </div>
  );
};

export default Welcome;
