import React, { use } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet-async";
import FloatingCart from "../Components/FloatingCart";

const HomeLayout = () => {
  const { loading, user } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      {user && <FloatingCart></FloatingCart>}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
