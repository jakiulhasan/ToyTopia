import React, { Suspense, useEffect, useState } from "react";
import ThreeImageSlider from "../Components/ThreeImageSlider";
import PopularToys from "../Components/PopularToys";
import Welcome from "../Components/Welcome";
import StayUpToDate from "../Components/StayUpToDate";
import AboutSection from "../Components/AboutSection";
import api from "../axios/api";
import Loading from "../Components/Loading";

const Homepages = () => {
  const [popularToys, setPopularToys] = useState([]);
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const loadToys = async () => {
      try {
        const response = await api.get("/toys");
        setToys(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadToys();
  }, []);

  useEffect(() => {
    const filtered = toys.filter((toy) => toy.rating >= 4.8);
    setPopularToys(filtered);
  }, [toys]);

  return (
    <div>
      <ThreeImageSlider></ThreeImageSlider>
      {loading ? (
        <Loading></Loading>
      ) : (
        <PopularToys popularToys={popularToys}></PopularToys>
      )}
      <Welcome></Welcome>
      <AboutSection></AboutSection>
      <StayUpToDate></StayUpToDate>
    </div>
  );
};

export default Homepages;
