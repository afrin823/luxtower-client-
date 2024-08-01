import Swal from "sweetalert2";
import useAuth from "../../firebase/hook/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const ApartmentCard = ({ item }) => {
    const { apartmentNo, floorNo, image, blockName, rent, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const useAxios = useAxiosPublic();

    const handleAgreement = (item) => {
       if( user && user.email){
        //send apartment in database
        console.log(user.email, item);
        const apartmentIteam = {
            apartmentId : _id,
            email: user.email,
            apartmentNo,
            blockName,
            floorNo,
            rent
        }
        useAxios.post('/bookedApartments', apartmentIteam)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${apartmentNo} added to your Apartment`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    
       }else{
        Swal.fire({
            title: "You are not logged In",
            text: "Please login add to the apartment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/signin', {state: {from: location}})
            }
          });
       }
    }

    return (
        <div data-aos="fade-up" className="p-4 bg-white shadow-md rounded-md">
            <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <div className="rounded-md overflow-hidden">
                    <img 
                        className="w-full h-48 object-cover" 
                        src={image}  
                        alt={`Apartment No ${apartmentNo}`} // Added alt text
                    />
                </div>
                <div data-aos="fade-left" className="card-body">
                    <h2 className="text-lg font-bold">Apartment No: {apartmentNo}</h2>
                    <h3 className="text-sm font-medium">Floor No: {floorNo}</h3>
                    <h3 className="text-sm font-medium">Block: {blockName}</h3>
                    <h3 className="text-sm font-medium">Rent: ${rent}</h3>
                    <div className="card-actions justify-end">
                        <button 
                            data-aos="fade-left"
                            onClick={() => handleAgreement(item)}
                            className="btn btn-accent text-white text-xs"
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
