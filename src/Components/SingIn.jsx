import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import regitser from "../../public/regitser.json";
import { AuthContext } from "../firebase/AuthProvider";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import SocialLogin from "./SocialLogin/SocialLogin";

const SignIn = () => {
  const [setSigninError] = useState("");
  const [setSigninSuccessful] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      setEmailError("Please type your email");
      return;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please type your password");
      return;
    } else {
      setPasswordError("");
    }

    setSigninError("");
    setSigninSuccessful("");

    signInUser(email, password)
      .then((result) => {
        const user = { email };

        axiosPublic.post("/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
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

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <Lottie animationData={regitser} data-aos="fade-right" className="h-52 md:h-64 lg:h-full" />
      </div>
      <form onSubmit={handleSignIn} className="card-body">
        <h1 className="text-center text-3xl font-bold">Login!</h1>
        <div className="form-control font-normal">
          <label className="label">
            <span className="text-sm">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            autoComplete="on"
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
            autoComplete="on"
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
          Don&apos;t have an Account?
          <Link to="/signup" className="btn text-base btn-link"> Sign Up</Link>
          <div className="divider px-6">Continue With</div>
        </p>
        <SocialLogin></SocialLogin>
      </form>

    </div>
  );
};

export default SignIn;