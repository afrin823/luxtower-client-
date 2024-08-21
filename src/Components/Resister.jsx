import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../public/signUp.json"
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import Loader from "./Loader/Loader";
import SocialLogin from "./useUsersRole/SocialLogin/SocialLogin";
import useAuth from "../firebase/hook/useAuth/useAuth";
import useAxiosPublic from "../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const Resister = () => {

  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { createUser, updateUserProfile, loading, user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  if (loading) return <Loader />;
  if (user) return navigate("/");

  const handleSignUp = (e) => {
    e.preventDefault();

    createUser(email, password)
      .then((res) => {
        axiosPublic.post("/users", { name, email })
        .then((res) => {
          Swal.fire({
            title: `Sign up sucessfully`,
            icon: "success",
          });
        });
        updateUserProfile(name, photo);
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later.",
          icon: "warning",
        });
      });
  };


  //-----------------------------------


  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8  py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <Lottie animationData={signUp} data-aos="fade-right" className="h-52 md:h-64 lg:h-full" />
      </div>
      <form onSubmit={handleSignUp} className="space-y-6">
        <h1 className="text-center text-3xl font-bold ">Register!
        </h1>
        <div className="form-control font-semibold">
          <label className="label">
            <span className="font-normal text-sm">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control font-semibold">
          <label className="label">
            <span className="font-normal text-sm">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="form-control font-semibold">
          <label className="label">
            <span className="font-normal text-sm">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            required
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <div className="form-control font-semibold relative">
          <label className="label">
            <span className="font-normal text-sm">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control text-2xl font-semibold ">
          <button className="btn text-base font-semibold bg-[#3498db] text-white">
            Register
          </button>
        </div>
        <div className="text-center text-sm">
          Already Have Account? Please
          <Link to="/signin" className="btn text-sm btn-link">Sign In</Link>
          <p className="divider px-6 pt-0">Continue With</p>
        </div>
        <SocialLogin></SocialLogin>
      </form>
    </div>

  );
};

export default Resister;
