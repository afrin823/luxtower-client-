import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";


const Apperments = () => {

    const axiosPublic = useAxiosPublic();

    const { isPending, data } = useQuery({
        queryKey: ["apartment"],
        queryFn: async () => {
          const res = await axiosPublic.get("/apartment");
          return res.data;
        },
      });
    if (isPending) return <Loader />;
    
    return (
        <div className="pt-28">
            <Helmet>
                <title>Apperments</title>
            </Helmet>
            <h2 data-aos="fade-up" className="text-3xl text-center animate-bounce w-2/12 mx-auto py-2 font-bold border-y-2">Apartments
                </h2>
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