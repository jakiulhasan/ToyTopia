import React, { Suspense, useEffect, useState } from "react";
import ThreeImageSlider from "../Components/ThreeImageSlider";
import { useLoaderData } from "react-router";
import Loading from "../Components/Loading";
import PopularToys from "../Components/PopularToys";
import Welcome from "../Components/Welcome";
import StayUpToDate from "../Components/StayUpToDate";

const Homepages = () => {
  const toysData = useLoaderData();

  const [popularToys, setPopularToys] = useState([]);

  useEffect(() => {
    const filtered = toysData.filter((toy) => toy.rating >= 4.8);
    setPopularToys(filtered);
  }, [toysData]);

  console.log(popularToys);
  return (
    <div>
      <ThreeImageSlider></ThreeImageSlider>
      <Welcome></Welcome>
      <PopularToys popularToys={popularToys}></PopularToys>
      <StayUpToDate></StayUpToDate>
    </div>
  );
};

export default Homepages;
