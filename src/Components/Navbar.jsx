import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  const signOut = () => {
    console.log("clicked sign out");
    signOutUser()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = [
    <NavLink to="/">Home</NavLink>,
    <NavLink to="/all-toys">All Toys</NavLink>,
    user && <NavLink to="/contacts">Contacts</NavLink>,
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto flex">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-3xl font-bold text-blue-500"
          >
            <span className="text-red-500">Toy</span>Topia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <li key={index} className="mx-2">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown z-10 dropdown-hover dropdown-end">
              <div tabIndex={0} className="cursor-pointer m-1 flex gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8" />
                )}
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-[300px] p-2 shadow-sm"
              >
                <li>
                  <Link to="/user-profile">
                    <div>
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <RxAvatar className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">My Profile</p>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
          {user && (
            <button className="btn" onClick={signOut}>
              <a>Log Out</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
