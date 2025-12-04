import React, { use, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import api from "../axios/api";

const ToyDetails = ({ toy }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const {
    availableQuantity,
    description,
    pictureURL,
    price,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    toyName,
    toyId,
  } = toy;

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = async () => {
    if (!user) {
      toast.error("Please login to continue");
      return navigate("/login");
    }

    if (quantity < 1) {
      return toast.error("Please enter a valid quantity");
    }

    if (quantity > availableQuantity) {
      return toast.error("Not enough stock available");
    }

    try {
      const addToCartData = {
        toyId: toyId,
        email: user.email,
        quantity: quantity,
      };

      const res = await api.post("/add-to-cart", addToCartData);
      console.log(res);
      if (res.data.message === "Quantity updated successfully") {
        toast.success("Quantity updated successfully");
      } else if (res.data.message === "Item added to cart") {
        toast.success("Item added to cart");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
        {/* Toy Image */}
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full lg:w-1/2 max-w-lg rounded-2xl object-cover shadow-md"
        />

        {/* Toy Details */}
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {toyName}
          </h2>

          <p className="text-gray-500 text-lg">{subCategory}</p>

          <p className="text-3xl md:text-4xl font-extrabold text-red-500">
            ${price}
          </p>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Rating & Availability */}
          <div className="flex flex-wrap gap-6 items-center text-gray-600 font-semibold">
            <p className="flex items-center gap-1">
              <IoMdStar className="text-yellow-400" />
              {rating}
            </p>
            <p>Available: {availableQuantity}</p>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <label className="font-semibold text-gray-700">Quantity:</label>

            <div className="flex items-center mt-2 w-40 bg-white rounded-full shadow-md overflow-hidden">
              {/* Minus */}
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
              >
                -
              </button>

              {/* Quantity Number */}
              <div className="flex-1 text-center font-semibold text-lg">
                {quantity}
              </div>

              {/* Plus */}
              <button
                onClick={() =>
                  setQuantity((prev) => Math.min(availableQuantity, prev + 1))
                }
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-4 p-4 bg-gray-100 rounded-2xl shadow-sm">
            <p className="font-semibold text-gray-700 text-lg">
              Total Price:{" "}
              <span className="text-red-600 font-bold">
                ${price * quantity}
              </span>
            </p>
          </div>

          {/* Add To Cart Button */}
          <button
            onClick={handleBuyNow}
            className="btn bg-pink-500 hover:bg-pink-600 text-white border-none mt-3 rounded-full px-6 py-2 flex items-center gap-2"
          >
            <CiShoppingCart className="text-2xl font-black" />
            Add To Cart
          </button>

          {/* Seller Info */}
          <div className="mt-6 bg-gray-100 rounded-2xl shadow-sm p-5 text-gray-700">
            <h3 className="font-bold text-lg mb-2">Seller Information</h3>
            <p className="font-semibold">{sellerName}</p>
            <p className="text-gray-600">{sellerEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
