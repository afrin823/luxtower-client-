
import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const Apartments = () => {
    const axiosPublic = useAxiosPublic();

    const { isLoading, data } = useQuery({
        queryKey: ["apartment"],
        queryFn: async () => {
            const res = await axiosPublic.get("/apartment");
            return res.data;
        },
    });

    if (isLoading) return <Loader />;

    const apartments = Array.isArray(data) ? data : data?.apartments; 

    return (
        <div className="pt-28">
            <Helmet>
                <title>Apartments</title>
            </Helmet>
            <h2
                data-aos="fade-up"
                className="text-3xl text-center mx-auto animate-bounce w-2/12 py-2 font-bold border-double border-b-4 border-sky-300"
            >
                Apartments
            </h2>
            <div className="bg-base-200 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {apartments?.slice(0, 9).map((apartment) => (
                        <ApartmentCard key={apartment._id} apartments={apartment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apartments;
