import React from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router";

const ToysCard = ({ popularToy }) => {
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src={popularToy.pictureURL}
            className="w-full h-[200px] object-cover"
            alt={popularToy.toyName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {popularToy.toyName}
            <div className="badge badge-secondary">
              {popularToy.rating >= 4.8 ? (
                <span>Popular Toy </span>
              ) : (
                <span>Trending Toy</span>
              )}
            </div>
          </h2>
          <p className="flex-1">{popularToy.description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-2">
              <IoMdStar className="text-2xl text-red-500" />
              {popularToy.rating}
            </p>
            <p className="justify-end flex gap-2">
              {" "}
              Available :{" "}
              <span className="text-green-500 font-bold">
                {popularToy.availableQuantity}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">${popularToy.price}</h2>
            <Link to={`/toys/${popularToy.toyId}`} className="btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
