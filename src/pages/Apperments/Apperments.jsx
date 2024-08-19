import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import useAxiosSecure from "../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";


const Apperments = () => {

    const axiosSecure = useAxiosSecure();

    const { isPending, data } = useQuery({
        queryKey: ["apartment"],
        queryFn: async () => {
          const res = await axiosSecure.get("/apartment");
          return res.data;
        },
      });
    if (isPending) return <Loader />;
    
    return (
        <div className="pt-24">
            <Helmet>
                <title>Apperments</title>
            </Helmet>
            <div className="bg-base-200 p-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.map((apartments) => (
                        <ApartmentCard key={apartments._id} apartments={apartments} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apperments;