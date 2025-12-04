import React from "react";
import { IoMdStar } from "react-icons/io";
import { toast } from "react-toastify";

const ToyDetails = ({ toy }) => {
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
  } = toy;

  const handleBuyNow = (e) => {
    e.preventDefault();
    toast.success("Product purchased successfully!");
    document.getElementById("my_modal_2").close();
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <img
          src={pictureURL}
          className="w-full max-w-lg rounded-2xl object-cover shadow-md"
          alt={toyName}
        />

        <div className="space-y-4 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {toyName}
          </h2>
          <p className="text-gray-500 text-lg">{subCategory}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-500">
            ${price}
          </h1>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-10 my-3 text-lg font-semibold text-gray-600">
            <p className="flex gap-1 items-center">
              <IoMdStar className="text-yellow-400" />
              {rating}
            </p>
            <p>Available: {availableQuantity}</p>
          </div>

          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn bg-pink-500 hover:bg-pink-600 text-white border-none mt-2 rounded-full px-6"
          >
            Try Now
          </button>

          <div className="mt-6 bg-gray-100 rounded-2xl shadow-sm p-5 text-gray-700">
            <h3 className="font-bold text-lg mb-2">Seller Information</h3>
            <p className="font-semibold">{sellerName}</p>
            <p className="text-gray-600">{sellerEmail}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box rounded-2xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl mb-4 text-gray-700">
              Enter Your Information to Buy
            </h2>
            <form onSubmit={handleBuyNow} className="space-y-3">
              <div>
                <label className="label text-gray-600">Your Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="label text-gray-600">Your Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Your Email"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-neutral w-full mt-4 rounded-full"
              >
                Buy Now
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ToyDetails;
