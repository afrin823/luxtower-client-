import useAuth from "../../firebase/hook/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const ApartmentCard = ({ apartments }) => {
  const { _id, image, apartment_no, request_date, block_name, floor_no, rent } = apartments;

  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleAgreement = (id) => {
    if (!user) return navigate("/signin");

    if (user) {
      const apartmentInfo = {
        name: user.displayName,
        email: user.email,
        apartment_id: id,
        apartment_no: apartment_no,
        block_name: block_name,
        floor_no: floor_no,
        rent: rent,
        request_date: request_date,
      };

      console.log(apartmentInfo);

      axiosPublic
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
          <img
            data-aos="fade-up"
            className="w-full h-48 object-cover"
            src={image}
            alt={`Apartment No ${apartment_no}`} // Added alt text
          />
        </div>
        <div data-aos="fade-right" className="card-body">
          <h2 className="text-lg font-bold">Apartment No: {apartment_no}</h2>
          <h3 className="text-sm font-medium">Floor No: {floor_no}</h3>
          <h3 className="text-sm font-medium">Block: {block_name}</h3>
          <h3 className="text-sm font-medium">Rent: ${rent}</h3>
          <div className="card-actions">
            <button
              onClick={() => handleAgreement(_id)}
              className="btn bg-sky-400 w-full text-white font-medium"
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
