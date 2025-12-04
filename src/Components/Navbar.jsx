import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import Loading from "./Loading";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/toysDetails.json").then((res) =>
      res.json().then((data) => setToys(data))
    );
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFilteredToys([]); // hide dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim().length === 0) {
      setFilteredToys([]);
      return;
    }

    const matches = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredToys(matches);
  };

  console.log(toys);

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
    <NavLink to="/about">About Us</NavLink>,
    <NavLink to="/contacts">Contacts</NavLink>,
    <NavLink to="/support">Support</NavLink>,
  ];
  return (
    <div className="navbar bg-primary backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="w-7xl mx-auto flex">
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
          <Link to="/" className="text-3xl font-bold text-blue-500">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <li key={index} className="mx-2 text-white font-semibold">
                {link}
              </li>
            ))}
          </ul>
        </div>
        {/* Search Bar */}
        <div className="navbar-center hidden lg:flex relative">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              placeholder="Search toys..."
              value={searchText}
              onChange={handleSearch}
            />
          </label>

          {filteredToys.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute top-12 bg-white w-80 p-3 rounded shadow-lg max-h-60 overflow-y-auto z-50"
            >
              {filteredToys.map((toy) => (
                <Link
                  key={toy.toyId}
                  to={`/toys/${toy.toyId}`}
                  className="block p-2 hover:scale-105 transition-transform "
                >
                  <div className="flex items-center bg-base-200 shadow-sm p-2 rounded-sm">
                    <img
                      src={toy.pictureURL}
                      alt={toy.toyName}
                      className="w-12 h-12 rounded-sm inline-block mr-2 object-cover"
                    />
                    <div>
                      <h1 className="font-bold truncate max-w-[180px]">
                        {toy.toyName}
                      </h1>
                      <div className="flex gap-2">
                        <p className="text-sm text-gray-600">
                          Price: ${toy.price}
                        </p>
                        <p className="text-sm text-gray-600">
                          Ratings: {toy.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
                <li onClick={signOut}>
                  <button>
                    <a>Log Out</a>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-secondary text-primary font-bold px-7"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
