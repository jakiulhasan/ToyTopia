import React from "react";
import { useLoaderData } from "react-router";
import ToysCard from "../Components/ToysCard";
import { Helmet } from "react-helmet-async";
import ToysHeader from "../Components/ToysHeader";

const AllToys = () => {
  const toysData = useLoaderData();
  console.log(toysData);
  return (
    <>
      <Helmet>
        <title>All Toys</title>
      </Helmet>
      <ToysHeader></ToysHeader>
      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-5 my-10">
        {toysData.map((popularToy) => (
          <ToysCard popularToy={popularToy}></ToysCard>
        ))}
      </div>
    </>
  );
};

export default AllToys;
