import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userSignIn, googleSignIn } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleForgetPassword = (e) => {
    const email = e.target.parentNode.parentNode.parentNode.email.value;
    navigate("/forgot-password", { state: { email } });
  };
  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Google Sign-In Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log("error:", error.message);
        toast.error(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login Successful");
        form.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log("error:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero bg-base-200 py-5 md:min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h2 className="font-semibold text-2xl text-center mb-3">
                Login to your account
              </h2>
              <hr className="border-base-300" />
              <fieldset className="fieldset mt-3">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                {/* Password */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="********"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="z-50 absolute right-3 top-3 text-xl text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="mt-2">
                  <a
                    onClick={handleForgetPassword}
                    className="link link-hover text-sm"
                  >
                    Forgot password?
                  </a>
                </div>

                <button type="submit" className="btn btn-primary mt-4 w-full">
                  Login
                </button>
              </fieldset>
            </form>

            {/* Google Sign-In */}
            <button
              onClick={signInWithGoogle}
              className="btn mt-3 w-full flex items-center justify-center gap-2"
            >
              <FcGoogle /> Sign in with Google
            </button>

            <p className="text-center my-3">
              Don’t have an account?{" "}
              <Link to="/register" className="font-semibold text-red-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
