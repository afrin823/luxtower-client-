import useAuth from "../../firebase/hook/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const ApartmentCard = ({ apartments }) => {
  const { _id, apartment_no, floor_no, image, block_name, rent, } = apartments;

  const [coupon, setCoupon] = useState('');
  const axiosPublic = useAxiosPublic();
  console.log(coupon);

  const { user } = useAuth();
  const handleCoupon = (e) => {
    e.preventDefault();
    setCoupon(e.target.value)

  }
  const navigate = useNavigate();


  const handleAgreement = async (id) => {
    if (!user) return navigate("/signin");

    if (user) {
      const apartmentInfo = {
        userInfo: {
          name: user?.displayName,
          email: user?.email,
        },
        apartment_id: id,
        floor_no: floor_no,
        block_name: block_name,
        apartment_no: apartment_no,
        rent: rent,
        couponNumber: coupon
      };
      // console.log(apartmentInfo);

      try {
        const data  = await axiosPublic.post(`/bookedApartments`, apartmentInfo);

        if (data.data.message === "already existing") {
            return  Swal.fire({
              title: "already existing",
              icon: "warning",
            });
        } else if (data.data.message === "Success") {
            return Swal.fire({
              title: "Success",
              icon: "success"
            })
        }
    } catch (error) {
        console.error("Error during apartment booking:", error);
        Swal.fire({
          title: "error",
          icon: "error",
        });
    }
  }

  }
    return (
      <div data-aos="fade-up" className="p-4 bg-white shadow-md rounded-md">
        <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
          <div className="rounded-md overflow-hidden">
            <img data-aos="fade-up"
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
            <div className="card-actions ">

              <button className="btn bg-sky-400 w-full text-white font-medium" onClick={() => document.getElementById('my_modal_1').showModal()}>Agreement</button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    <form onSubmit={() => handleAgreement(_id)} method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <input type="text" onChange={handleCoupon} placeholder="Coupon" />
                      <button className="btn" >confirm</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ApartmentCard;
