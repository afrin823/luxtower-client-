import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const Cupon = () => {
    const axiosPublic = useAxiosPublic()

    const { isPending, data: coupon } = useQuery({
        queryKey: ["coupons"],
        queryFn: async () => {
          const res = await axiosPublic("/coupon");
          return res.data;
        },
      });
    
      if (isPending) return <Loader />;

    return (
            <div className="container mx-auto p-6">
      <div className="bg-gray-100 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl animate-bounce font-bold text-gray-900 mb-4 w-3/12 mx-auto border-y-2">
              Exclusive Coupons
            </h2>
            <p className="text-lg animate-bounce text-gray-700 mb-8 ">
              Discover our latest offers and save big!
            </p>
          </div>
          <div data-aos="fade-up" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coupon?.slice(0, 6).map((coupon) => (
              <div
                key={coupon._id}
                className="bg-white rounded-lg shadow-md h-64 w-full overflow-hidden"
              >
                <div data-aos="fade-left" className="p-6 ">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {coupon.description}
                  </h3>
               
                  <p className="text-base  text-gray-700 mb-4">
                    <span className="font-bold">Code:</span> {coupon.code}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="text-base font-bold ">Status:</span> <span className="badge badge-accent">{coupon.isActive ? "Active" : "Inactive"}</span>
                  </p>
                  <p className="text-base font-bold text-gray-700 mb-2">
                    Discount: <span className="badge badge-secondary">{coupon.discount}%</span>
                  </p>
               
                </div>
                <div className="text-base font-bold p-2 text-center bg-sky-300 text-white"> 
                  {coupon.isActive && (
                    <a className="text-primary-500 font-semibold hover:text-primary-700 transition duration-300">
                      Available
                    </a>
                  )}
                  {!coupon.isActive && (
                    <span className="text-gray-500 font-semibold">Expired</span>
                  )}
                  </div>
           
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Cupon;
