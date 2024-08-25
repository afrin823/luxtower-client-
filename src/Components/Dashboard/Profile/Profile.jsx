import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../firebase/hook/useAuth/useAuth";
import useAxiosSecure from "../../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import UserProfile from "../UserProfile/UserProfile";
import Agreement from "./Agreement/Agreement";
import { Helmet } from "react-helmet-async";


function Profile() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  const { isPending, data } = useQuery({
    queryKey: ["apartment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`http://localhost:4000/bookedApartments`);
      return res.data;
    },
  });
  console.log(isPending)

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-8 lg:mb-4">
        <u>Profile {user.displayName}</u>
      </h1>
      <UserProfile user={user} />
      {data?.map((apartment) => (
        <Agreement key={apartment._id} apartment={apartment} />
      ))}

    </div>
  );
}

export default Profile;
