import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ViewApartment = () => {
    const {id} = useParams();
    console.log(id);
    const axiosPublic = useAxiosPublic();

    const {data, isLoading} = useQuery({
        queryKey: ["apartment"],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:4000/apartment/${id}`)
            return res.data;
        }
    })

    if(isLoading){
        return "loading";
    }
    console.log(data);

    // Now you can safely access apartment properties
    const { apartment_no, image, rent, block_name,request_date, floor_no } = data;

    return (
        <div className="pt-24 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full  bg-slate-100 rounded-xl">
            <img className="w-full  mx-auto p-8" src={image} alt="" />
        </div>
        <div className="cols-span-1">
            <h2 className="text-4xl font-bold mb-2">Block Name: {block_name}</h2>
            <h3 className="text-xl mb-3">Apartment Number: {apartment_no}</h3>
            <hr />
            <h2 className="text-xl my-2 font-bold">Request Date: {request_date}</h2>
            <hr />
            <h2 className="text-xl my-2 font-bold">Floor Number: {floor_no}</h2>
            <hr />
            <p className="my-2 text-justify"><span className="font-bold">Rent:</span> {rent}</p>
            <hr />
           
          
        </div>
        </div>
    
        </div>
    );
};

export default ViewApartment;
