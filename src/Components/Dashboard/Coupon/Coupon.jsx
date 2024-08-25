import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import Loader from "../../Loader/Loader";
import Modal from "./Modal/Modal";


function Coupon() {
  const axiosPublic = useAxiosPublic();

  const { isPending, data: coupons } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosPublic.get("/coupon");
      return res.data;
    },
  });

  if (isPending) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Manage Coupons Page</h1>
      <div>
        <div className="py-10">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add Coupons
          </button>
          <Modal />
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra border">
            {/* head */}
            <thead className="bg-gray-500 text-white">
              <tr>
                <th></th>
                <th>Coupons</th>
                <th>Discount(%)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {coupons?.map((coupon, index) => (
                <tr key={coupon._id}>
                  <th>{index + 1}</th>
                  <td>{coupon.code}</td>
                  <td>{coupon.discount}</td>
                  <td>
                    {coupon.isActive ? (
                      <p className="text-green-500">Active</p>
                    ) : (
                      <p className="text-orange-800">Inactive</p>
                    )}
                  </td>
                  <td>Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
