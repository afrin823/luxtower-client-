import useAxiosSecure from "../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";

const Cupon = () => {
    const axiosSecure = useAxiosSecure()

    const { isPending, data: coupon } = useQuery({
        queryKey: ["coupons"],
        queryFn: async () => {
          const res = await axiosSecure("/coupon");
          return res.data;
        },
      });
    
      if (isPending) return <Loader />;

    return (
            <div className="container mx-auto p-6">
      <div className="bg-gray-100 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exclusive Coupons
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover our latest offers and save big!
            </p>
          </div>
          <div data-aos="fade-up" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coupon?.map((coupon) => (
              <div
                key={coupon._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div data-aos="fade-left" className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {coupon.description}
                  </h3>
                  <p className="text-base text-gray-700 mb-4">
                    Code: {coupon.code}
                  </p>
                  <p className="text-base text-gray-700 mb-4">
                    Discount: {coupon.discount}%
                  </p>
                  <p className="text-sm text-gray-600">
                    Status: {coupon.isActive ? "Active" : "Inactive"}
                  </p>
                </div>
                <div data-aos="fade-left" className="bg-gray-100 text-center py-3">
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
