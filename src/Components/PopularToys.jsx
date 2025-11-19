import React from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";
import ToysCard from "./ToysCard";

const PopularToys = ({ popularToys }) => {
  console.log(popularToys);
  return (
    <div className="">
      <Marquee className="bg-secondary p-4 font-bold text-white">
        <div className=" flex gap-48">
          <span>UpComing Events</span>
          <span>UpComing Events</span>
          <span>UpComing Events</span>
          <span>UpComing Events</span>
        </div>
      </Marquee>
      <h2 className="text-center mt-2 ">Trending Now</h2>
      <h1 className="text-center text-2xl font-bold">
        <span className="text-secondary">Best Selling</span> Products
      </h1>
      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-5 mt-5">
        {popularToys.map((popularToy) => (
          <ToysCard popularToy={popularToy}></ToysCard>
        ))}
      </div>
      <Link
        to="/all-toys"
        className="btn btn-secondary mx-auto flex justify-center w-fit my-10"
      >
        View All Toys
      </Link>
    </div>
  );
};

export default PopularToys;
