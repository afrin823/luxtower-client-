import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import axios from "axios";

import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../firebase/AuthProvider";

const SignIn = () => {
  const [signinError, setSigninError] = useState("");
  const [signinSuccessful, setSigninSuccessful] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError] = useState("");
  const location = useLocation();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please type your email",
      });
      setEmailError("Please type your email");
      return;
    }
    setEmailError("");

    setSigninError("");
    setSigninSuccessful("");

    signInUser(email, password)
      .then((result) => {
        const user = { email };

        axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to authenticate",
            });
            setSigninError("Failed to authenticate");
          });

        Swal.fire({
          title: "Sign-In Successful",
          text: "User successfully signed in",
          icon: "success",
        });
        setSigninSuccessful("Successfully signed in");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        setSigninError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="mt-0 pt-16 mb-5">
      <div className="container mx-auto px-4">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            <div className="form-control font-normal">
              <label className="label">
                <span className="text-sm">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered text-sm"
              />
              <p className="text-red-500">{emailError}</p>
            </div>

            <div className="form-control font-normal relative">
              <label className="label">
                <span className="text-sm">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                required
                className="input input-bordered text-sm"
              />
              <p className="text-red-500">{passwordError}</p>
              <span
                className="absolute top-3 right-8 mt-10 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <GoEyeClosed /> : <FiEye />}
              </span>
              <label className="label font-normal">
                <a href="#" className="text-sm link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="form-control mt-6">
                <button className="btn text-base font-semibold bg-[#3498db] text-white">
                  Login
                </button>
              </div>
            </div>
            <p className="text-center text-base">
              Don&pos;t have an Account
              <Link to="/signup" className="btn text-base btn-link"> Sign Up</Link>
              <div className="divider px-6">Continue With</div>
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="btn border-1 border-yellow-500 w-full rounded-sm"
              >
                <span className="text-4xl text-orange-400"><FaGooglePlusG /></span>
              </button>
            </div>
          </form>

          {signinError && (
            <p className="text-red-700 text-xl p-4 text-center font-semibold">
              {signinError}
            </p>
          )}
          {signinSuccessful && (
            <p className="text-green-700 text-xl p-4 text-center font-semibold">
              {signinSuccessful}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
