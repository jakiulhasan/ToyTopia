import React, { useRef } from "react";
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

  const modalRef = useRef(null);

  const handleBuyNow = (e) => {
    e.preventDefault();
    toast.success("Product purchased successfully!");
    modalRef.current.close();
  };

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current.close();
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
        <div className="flex-1 space-y-4">
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

          {/* Action Button */}
          <button
            onClick={() => modalRef.current.showModal()}
            className="btn bg-pink-500 hover:bg-pink-600 text-white border-none mt-2 rounded-full px-6 py-2"
          >
            Try Now
          </button>

          {/* Seller Info */}
          <div className="mt-6 bg-gray-100 rounded-2xl shadow-sm p-5 text-gray-700">
            <h3 className="font-bold text-lg mb-2">Seller Information</h3>
            <p className="font-semibold">{sellerName}</p>
            <p className="text-gray-600">{sellerEmail}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal" onClick={handleBackdropClick}>
        <div className="modal-box rounded-2xl max-w-md p-6">
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">
            Enter Your Information
          </h2>
          <form onSubmit={handleBuyNow} className="space-y-4">
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
              className="btn btn-primary w-full rounded-full mt-2"
            >
              Buy Now
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ToyDetails;
