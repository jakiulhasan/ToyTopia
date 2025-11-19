import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const StayUpToDate = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) return alert("Please enter your email");
    toast.success(`Thanks for subscribing, ${email}!`);
    e.target.reset();
  };

  return (
    <div className="bg-blue-50 py-12 px-6 text-center rounded-2xl shadow-inner mt-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-3">
        Stay Up to Date!
      </h2>
      <p className="text-gray-600 mb-6">
        Subscribe to get the latest updates, new toy arrivals, and exclusive
        offers from{" "}
        <span className="font-semibold text-pink-600">ToyTopia</span>.
      </p>
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full sm:w-2/3 px-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-all duration-300"
        >
          <FaPaperPlane />
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default StayUpToDate;
