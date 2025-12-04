import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ToysCard from "../Components/ToysCard";
import { Helmet } from "react-helmet-async";
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import api from "../axios/api";
import Loading from "../Components/Loading";

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const loadToys = async () => {
      try {
        const response = await api.get("/toys");
        setToysData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadToys();
  }, []);

  const [sortBy, setSortBy] = useState("");
  const [itemsToShow, setItemsToShow] = useState(24);

  // sorting only (no filtering)
  const processedToys = [...toysData]
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "quantity")
        return b.availableQuantity - a.availableQuantity;
      return 0;
    })
    .slice(0, itemsToShow);

  return (
    <>
      <Helmet>
        <title>All Toys</title>
      </Helmet>

      {/* TOP HEADER */}
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pb-4 border-b">
          {/* Breadcrumb */}
          <div className="text-sm breadcrumbs">
            <ul className="flex gap-1 text-gray-500">
              <li>
                <Link to="/" className="hover:text-primary duration-200">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-gray-800">All Product</li>
            </ul>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-6">
            {/* Show Count */}
            <div className="flex items-center text-sm text-gray-600 gap-1">
              Show:
              {[9, 12, 18, 24].map((num) => (
                <button
                  key={num}
                  onClick={() => setItemsToShow(num)}
                  className={`px-1 ${
                    itemsToShow === num
                      ? "text-primary font-semibold"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="relative">
              <select
                className="select w-40 border-none border-b-2 border-primary focus:outline-none rounded-none text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="quantity">Quantity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* TOYS GRID */}
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 p-4 sm:p-0">
          {processedToys.map((toy) => (
            <ToysCard key={toy.toyId} popularToy={toy} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllToys;
