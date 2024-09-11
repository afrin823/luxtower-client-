import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../firebase/hook/useAuth/useAuth";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const MakePayment = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [month, setMonth] = useState(null);


  const { isPending, data: apartment } = useQuery({
    queryKey: ["apartment"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedApartments/${user.email}`);
      return res.data;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault()

    const submitPayment = {
      userInfo: { name: user.displayName, email: user.email },
      month,
      floor_no: apartment.floor_no,
      block_name: apartment.block_name,
      apartment_no: apartment.apartment_no,
      rent: apartment.rent,
    };
    // 
    navigate("/dashboard/payment", { state: submitPayment });

  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 lg:mb-4">Make Payment</h1>

      {isPending ? (
        <Loader />
      ) : (
        <div className=" max-w-screen-xl gap-8 px-8 py-16 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      
          <form
              onSubmit={handleSubmit}
              className="space-y-4 shadow-2xl py-10 px-6 rounded-lg"
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={user?.email}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="floor" className="text-sm font-medium mb-2">
                  Floor
                </label>
                <input
                  type="text"
                  id="floor"
                  value={apartment?.floor_no}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="blockName" className="text-sm font-medium mb-2">
                  Block Name
                </label>
                <input
                  type="text"
                  id="blockName"
                  value={apartment?.block_name}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="apartmentNo" className="text-sm font-medium mb-2">
                  Apartment No / Room No
                </label>
                <input
                  type="text"
                  id="apartmentNo"
                  value={apartment?.apartment_no}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="rent" className="text-sm font-medium mb-2">
                  Rent
                </label>
                <input
                  type="text"
                  id="rent"
                  value={"$" + apartment?.rent}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <h2>Payment Details</h2>
              <div className="flex flex-col">
                <label htmlFor="month" className="text-sm font-medium mb-2">
                  Month
                </label>
                <select
                  required
                  id="month"
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="">Select Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
           <button type="submit"  className="btn bg-sky-300 w-full">
                Submit Payment
              </button>
            </form>
        </div>

      )}
    </div>
  );
};

export default MakePayment;