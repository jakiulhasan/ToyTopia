import React, { useEffect, useState, useContext } from "react";
import { FaEye } from "react-icons/fa";
import api from "../axios/api";
import { AuthContext } from "../context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/myorders", {
          params: { email: user.email },
        });
        setOrdersData(res.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold my-8 border-b-2 border-base-200">
        <span className="border-b-2 border-secondary">My Orders</span>
      </h2>

      {ordersData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          You have no orders yet.
        </p>
      ) : (
        ordersData.map((order) => (
          <div
            key={order._id}
            className="mb-8 p-6 bg-white shadow-md rounded-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium text-gray-700">
                Order Date: {new Date(order.date).toLocaleDateString()}
              </p>
              <p
                className={`font-semibold ${
                  order.paymentStatus === "completed"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                Processing
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={item.pictureURL}
                    alt={item.toyName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold truncate">
                      {item.toyName}
                    </h3>
                    <p className="text-gray-500 mt-1">
                      Quantity:{" "}
                      <span className="font-medium">{item.quantity}</span>
                    </p>
                    <p className="text-gray-500">
                      Price: <span className="font-medium">${item.price}</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                      Total:{" "}
                      <span className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <FaEye /> View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right font-semibold text-lg">
              Total Amount: ${order.totalAmount.toFixed(2)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
