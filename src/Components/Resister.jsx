import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { GoEyeClosed } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../public/signUp.json"
import { AuthContext } from "../firebase/AuthProvider";
import { FaGooglePlusG } from "react-icons/fa";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const Resister = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, settermsError] = useState("");

  const [signupError, setSignupError] = useState("");

  const [singupSuccesfull, setSingupSuccesfull] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //-------------------------------
  const { createUser, auth, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  //---------------------------------
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const accepted = form.terms.checked;
    // console.log(name, email, photoURL, password);
    //------------------------

    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please type your name",
      });
      setNameError("Please type your name");
      return;
    }
    setNameError("");

    if (email.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please type your email",
      });
      setEmailError("Please type your email");
      return;
    }
    setEmailError("");

    if (password.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please type 6 character Password",
      });
      setPasswordError("Please type 6 character Password");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "your password should have at least one upper, one lower case & must 6charactor ",
      });
      setPasswordError(
        "your password should have at least one upper, one lower case & must 6charactor "
      );
      return;
    }
    setPasswordError("");

    if (!accepted) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please accept our conditions",
      });
      settermsError("please accept our conditions");
      return;
    }
    settermsError("");

    //-------------------------
    setSignupError("");
    setSingupSuccesfull("");

    //-------------------------
    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch(() => {
            // An error occurred
            // ...
          });

        //  console.log(result.user);
        e.target.reset();
        Swal.fire({
          title: "signUp Successfull",
          text: "Created Succesfully SignUp",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email Already In Use",
        });
      });
  };
  //----------------------------
  const handleGooglrSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
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
            type="Name"
            placeholder="Name"
            name="name"
            required
            className="input input-bordered font-normal"
          />
          <p className="text-red-500">{nameError}</p>
        </div>

        <div className="form-control font-semibold">
          <label className="label">
            <span className="font-normal text-sm">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="input input-bordered font-normal"
          />
          <p className="text-red-500">{emailError}</p>
        </div>

        <div className="form-control font-semibold">
          <label className="label">
            <span className="font-normal text-sm">Photo URL</span>
          </label>
          <input
            type="photoURL"
            name="photoURL"
            placeholder="photoURL"
            className="input input-bordered font-normal"
          />
        </div>

        <div className="form-control font-semibold relative">
          <label className="label">
            <span className="font-normal text-sm">Password</span>
          </label>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered font-normal"
          />
          <p className="text-red-500">{passwordError}</p>

          <span
            className="absolute top-3 right-8 mt-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <GoEyeClosed /> : <FiEye />}
          </span>
        </div>

        <div className="pl-4 py-2 font-medium">
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2 " htmlFor="terms">
            Accept Our Terms & Conditions
          </label>
          <p className="text-red-500">{termsError}</p>
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
        <div className="form-control text-2xl font-semibold ">
          <button
            onClick={handleGooglrSignIn}
            aria-label="Log in with Google"
            className="btn border-1 border-yellow-500 w-full rounded-sm"
          >
            <span className="text-4xl text-orange-400"><FaGooglePlusG />
            </span>
          </button>
        </div>
      </form>



      {signupError && (
        <p className="text-red-700 text-xl p-4 text-center font-semibold">
          {signupError}
        </p>
      )}
      {singupSuccesfull && (
        <p className="text-green-700 text-xl p-4 text-center font-semibold">
          {singupSuccesfull}
        </p>
      )}
    </div>

  );
};

export default Resister;
