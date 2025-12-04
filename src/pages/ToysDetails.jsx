import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ToyDetails from "../Components/ToyDetails";
import { Helmet } from "react-helmet-async";
import Loading from "../Components/Loading";
import api from "../axios/api";

const ToysDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState([]);
  const [toy, setToy] = useState({});

  useEffect(() => {
    const loadToys = async () => {
      try {
        const response = await api.get("/toys");
        const toyData = response.data.find((toyData) => toyData.toyId == id);
        setToy(toyData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadToys();
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <title>{toy.toyName}</title>
      </Helmet>
      <ToyDetails toy={toy}></ToyDetails>
    </div>
  );
};

export default ToysDetails;
