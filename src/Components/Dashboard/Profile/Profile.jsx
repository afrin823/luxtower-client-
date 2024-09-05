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


  const { isPending, data: apartment = [], isLoading } = useQuery({
    queryKey: ["apartment"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedApartments/${user.email}`);
      return res.data;
    },
  });
  console.log(isPending)
  if(isLoading){
    return <Loader></Loader>
  }

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-8 lg:mb-4">
        <u>Profile {user.displayName}</u>
      </h1>
      <UserProfile user={user} />
      {apartment?.map((apartment) => (
        <Agreement key={apartment._id} apartment={apartment} />
      ))}

    </div>
  );
}

export default Profile;
