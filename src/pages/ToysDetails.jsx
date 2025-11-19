import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToyDetails from "../Components/ToyDetails";
import { Helmet } from "react-helmet-async";

const ToysDetails = () => {
  const { id } = useParams();
  const toysData = useLoaderData();

  const [toy, setToy] = useState({});

  useEffect(() => {
    const toyData = toysData.find((toyData) => toyData.toyId == id);
    setToy(toyData);
  }, [id, toysData]);

  console.log(toy);
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
