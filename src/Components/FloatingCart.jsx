import React, { useState, useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import api from "../axios/api";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import { FaRegTrashAlt } from "react-icons/fa";

const FloatingCart = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [myCart, setMyCart] = useState([]);
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMyCart = async () => {
    try {
      setLoading(true);
      const response = await api.get("/toys");
      setToysData(response.data);

      const { data } = await api.get("/my-cart", {
        params: { email: user.email },
      });
      setMyCart(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleRemove = async (toyId) => {
    try {
      await api.delete(`/my-cart/${toyId}`);
      setMyCart((prev) => prev.filter((item) => item.toyId !== toyId));
    } catch (error) {
      console.log(error);
    }
  };

  // Match cart items with toysData
  const cartItems = myCart
    .map((cartItem) => {
      const toy = toysData.find((t) => t.toyId === cartItem.toyId);
      if (!toy) return null;
      return {
        ...cartItem,
        toyName: toy.toyName,
        price: toy.price,
        pictureURL: toy.pictureURL,
      };
    })
    .filter(Boolean);

  const itemCount = cartItems.length;
  const displayCount = itemCount > 99 ? "99+" : itemCount;

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => {
          loadMyCart();
          setOpen(true);
        }}
        className="fixed bottom-6 right-6 bg-white shadow-xl border rounded-full p-4 z-200 flex items-center justify-center hover:scale-105 transition"
      >
        <CiShoppingCart size={28} />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-0.5">
            {displayCount}
          </span>
        )}
      </button>

      {/* Background Dim */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide-up Cart Window */}
      <div
        className={`fixed bottom-0 right-0 w-full sm:w-96 bg-white shadow-2xl p-5 z-50 rounded-t-2xl transform transition-all duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {loading && <Loading />}

        {/* Empty Cart */}
        {!loading && cartItems.length === 0 && (
          <p className="text-center text-gray-500 py-6">Your cart is empty</p>
        )}

        {/* Cart Items */}
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-base-200 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.pictureURL}
                  alt={item.toyName}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.toyName}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.toyId)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
        </div>

        {/* Complete Order Button */}
        {cartItems.length > 0 && (
          <button className="w-full bg-indigo-600 mt-4 text-white py-2 rounded-lg hover:bg-indigo-700">
            Complete Order
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingCart;
