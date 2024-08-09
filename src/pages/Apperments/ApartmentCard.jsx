import Swal from "sweetalert2";
import useAuth from "../../firebase/hook/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";

const ApartmentCard = ({ apartments }) => {
    const {  _id, apartmentNo, floorNo, image, blockName, rent, } = apartments;
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
  
    const handleAgreement = (id) => {
      if (!user) return navigate("/signin");
  
      if (user) {
        const apartmentInfo = {
          userInfo: {
            name: user.displayName,
            email: user.email,
          },
          apartment_id: id,
        };
  
        console.log(apartmentInfo);
  
        axiosSecure
          .post("/bookedApartments", apartmentInfo)
          .then((res) => {
            Swal.fire({
              title: `${res.data.message}`,
              icon: `${res.data.status === 200 ? "success" : "warning"}`,
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Something went wrong. Try later",
              icon: "warning",
            });
          });
      }
    };
    return (
        <div data-aos="fade-up" className="p-4 bg-white shadow-md rounded-md">
            <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <div className="rounded-md overflow-hidden">
                    <img  data-aos="fade-up"
                        className="w-full h-48 object-cover" 
                        src={image}  
                        alt={`Apartment No ${apartmentNo}`} // Added alt text
                    />
                </div>
                <div data-aos="fade-right" className="card-body">
                    <h2 className="text-lg font-bold">Apartment No: {apartmentNo}</h2>
                    <h3 className="text-sm font-medium">Floor No: {floorNo}</h3>
                    <h3 className="text-sm font-medium">Block: {blockName}</h3>
                    <h3 className="text-sm font-medium">Rent: ${rent}</h3>
                    <div className="card-actions ">
                        <button 
                            data-aos="fade-right"
                            onClick={() => handleAgreement(_id)}
                            className="btn btn-accent w-full text-white text-xs"
                        >
                            Agreement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;
