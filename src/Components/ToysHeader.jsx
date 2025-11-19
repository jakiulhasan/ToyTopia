import React from "react";

const ToysHeader = () => {
  return (
    <header className="bg-blue-100 py-6 shadow-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800">All Toys</h1>
        <p className="text-gray-600 mt-2">
          Browse through our entire collection of toys and find your favorite!
        </p>
      </div>
    </header>
  );
};

export default ToysHeader;
