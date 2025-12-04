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
            className="w-full h-[200px]"
            alt={popularToy.toyName}
          />
        </figure>

        <div className="card-body">
          {/* Toy Name - One Line Only */}
          <h2 className="card-title font-bold truncate">
            {popularToy.toyName}
          </h2>

          {/* Description - Only 2 Lines */}
          <p className="line-clamp-2 text-sm">{popularToy.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <IoMdStar key={i} className="text-2xl text-red-500" />
              ))}
            </div>
            <span className="text-xl">{popularToy.rating}</span>
          </div>

          {/* Pricing */}
          <div className="flex gap-5 items-center mt-2">
            <h3 className="line-through">
              {((popularToy.price * 30) / 100 + popularToy.price).toFixed(2)}
            </h3>
            <h2 className="text-xl font-bold">${popularToy.price}</h2>
          </div>

          {/* Button */}
          <Link
            to={`/toys/${popularToy.toyId}`}
            className="btn btn-primary mt-3"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
