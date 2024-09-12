import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../firebase/hook/useAuth/useAuth";
import UserProfile from "../UserProfile/UserProfile";
import Agreement from "./Agreement/Agreement";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import Loader from "../../Loader/Loader";


function Profile() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { isLoading, data: apartments = {} } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedApartments/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });



  return (
    <div >
      <Helmet>
        <title>Profile</title>
      </Helmet>
        
      <UserProfile user={user} />
      {/* {apartment?.map((apartment) => (
        <Agreement key={apartment._id} apartment={apartment} />
      ))} */}
      
      {isLoading ? <Loader /> : <Agreement key={apartments._id} apartments={apartments} />}
        </div>
  
  );
}


export default Profile;
