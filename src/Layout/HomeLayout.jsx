import React, { use } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
