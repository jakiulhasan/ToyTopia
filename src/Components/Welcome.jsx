import React from "react";
import { Link } from "react-router";
import { FaSmile } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-linear-to-b from-pink-100 to-blue-100 p-6">
      <FaSmile className="text-6xl text-yellow-500 mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold text-pink-600 mb-2">
        Welcome to <span className="text-blue-600">ToyTopia!</span>
      </h1>
      <p className="text-gray-700 max-w-md mb-6">
        Discover a world full of fun, imagination, and creativity! Explore our
        unique collection of toys that bring smiles to every face.
      </p>
      <Link
        to="/all-toys"
        className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-all duration-300"
      >
        Explore Toys
      </Link>
    </div>
  );
};

export default Welcome;
