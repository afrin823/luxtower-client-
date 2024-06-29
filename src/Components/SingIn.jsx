import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import axios from "axios";

import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../firebase/AuthProvider";

const SingIn = () => {
  const [signinError, setSigninError] = useState("");
  const [singinSuccesfull, setSinginSuccesfull] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newError, setNewErrot] = useState("");
  const [newErrorpassword] = useState("");
  const location = useLocation();
  // console.log(location);

  //-----------------

  const { signInUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  //-----------------------------

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // console.log(password.length);

    if (email.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please type your email",
      });
      setNewErrot("please type your email");
      return;
    }
    setNewErrot("");

    //-----------------------------------------
    setSigninError("");
    setSinginSuccesfull("");

    //--------------------------

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        //jwt kaj start
        const user = { email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })

          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });

        // e.target.reset();
        Swal.fire({
          title: "signIn Successfull",
          text: "User Succesfully SignIn",
          icon: "success",
        });
        // navigate(location?.state ? location.state : "/");
        setSinginSuccesfull("Succesfully SignIn ");
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
  //-----------------------------

  const handleGooglrSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        //  console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  //-----------------------------------


  return (
    <div>
      <div className=" mt-0 pt-16 mb-5">

        <div className="container mx-auto px-4">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-center text-3xl font-bold">Login
              </h1>
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
                <p className="text-red-500">{newError}</p>
              </div>

              <div className="form-control  font-normal relative">
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
                <p className="text-red-500">{newErrorpassword}</p>
                <span
                  className="absolute top-3 right-8 mt-10"
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
                <button className="btn  text-base font-semibold bg-[#3498db] text-white">
                  Login
                </button>
              </div>
              </div>
              <p className="text-center text-base">
              Dont have an Account
              <Link to="/signup" className="btn text-base btn-link"> Sign Up          
              </Link>
              <div className="divider px-6">Continue With</div>
            </p>

              
              
          

            <div className="flex justify-center ">
              <button  onClick={handleGooglrSignIn}
                aria-label="Log in with Google"
                className="btn border-1 border-yellow-500 w-full rounded-sm"
              >
              <img className="w-8" src="https://i.ibb.co/dQs5hVM/Logo-google-icon-PNG-removebg-preview-1.png"  alt="" />
              
              </button>

              
            </div>
            </form>
         

           

            {signinError && (
              <p className="text-red-700 text-xl p-4 text-center font-semibold">
                {signinError}
              </p>
            )}
            {singinSuccesfull && (
              <p className="text-green-700 text-xl p-4 text-center font-semibold">
                {singinSuccesfull}
              </p>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
