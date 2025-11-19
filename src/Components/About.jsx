import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-10 text-center">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-pink-500 mb-4">About ToyTopia</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        Welcome to <span className="font-semibold text-pink-500">ToyTopia</span>{" "}
        — where fun, imagination, and learning come together! We’re passionate
        about bringing high-quality toys that spark creativity and joy in every
        child. From classic building sets to modern educational toys, our
        mission is to make playtime meaningful and memorable.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-gray-700">
        <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-pink-600 mb-2">🎯 Our Mission</h3>
          <p>
            To inspire creativity and happiness in every child through safe,
            colorful, and educational toys.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-pink-600 mb-2">💡 Our Vision</h3>
          <p>
            To become the most trusted toy shop that connects families through
            learning and fun.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-pink-600 mb-2">❤️ Our Promise</h3>
          <p>
            Every toy we sell is chosen with care — safe materials, durable
            design, and endless fun guaranteed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
