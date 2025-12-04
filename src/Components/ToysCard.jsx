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
            className="w-full h-[200px] "
            alt={popularToy.toyName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between font-bold">
            {popularToy.toyName}
          </h2>
          <p className="flex-1">{popularToy.description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-2">
              <div className="flex">
                <IoMdStar className="text-2xl text-red-500" />
                <IoMdStar className="text-2xl text-red-500" />
                <IoMdStar className="text-2xl text-red-500" />
                <IoMdStar className="text-2xl text-red-500" />
                <IoMdStar className="text-2xl text-red-500" />
              </div>
              <span className="font-text-xl">{popularToy.rating}</span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="line-through">
              {(popularToy.price * 30) / 100 + popularToy.price}
            </h3>
            <h2 className="text-xl font-bold">${popularToy.price}</h2>
          </div>

          <Link to={`/toys/${popularToy.toyId}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
