import { FaGooglePlusG } from "react-icons/fa";
import useAuth from "../../../firebase/hook/useAuth/useAuth";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SocialLogin() {
    const {signInWithGoogle} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
  //-------------------------------

  const handleGooglrSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        const userInfo = {
            result: result.user?.email,
            name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Something went wrong. Try later.",
              icon: "warning",
            });
          });
      })
    
  };



  return (     

    <div className="form-control text-2xl font-semibold ">
    <button
      onClick={() => handleGooglrSignIn()}
      aria-label="Log in with Google"
      className="btn border-1 border-yellow-500 w-full rounded-sm"
    >
      <span className="text-4xl text-orange-400"><FaGooglePlusG />
      </span>
    </button>
  </div>
  );
}

export default SocialLogin;
