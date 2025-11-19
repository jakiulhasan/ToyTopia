import React from "react";
import { Link } from "react-router";
import { FaRobot } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-pink-100 via-blue-50 to-yellow-100 text-center px-4">
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <div className="animate-bounce">
        <FaRobot className="text-9xl text-pink-500 drop-shadow-md" />
      </div>

      <h1 className="text-8xl font-extrabold text-pink-600 mt-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-3">
        Oops! This Toy Rolled Away 🧸
      </h2>
      <p className="text-gray-600 mt-4 max-w-md">
        The page you’re looking for might have been moved, or it’s taking a nap
        in the toy box. Don’t worry — there’s still plenty of fun waiting for
        you!
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-all"
        >
          🏠 Go to Home
        </Link>
        <Link
          to="/all-toys"
          className="px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-all"
        >
          🎁 Explore Toys
        </Link>
      </div>

      <p className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} ToyTopia — Making Smiles Everyday
      </p>
    </div>
  );
};

export default Error;
