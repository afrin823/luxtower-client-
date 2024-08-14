import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../firebase/hook/useAuth/useAuth";
import useAxiosSecure from "../../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import UserProfile from "../UserProfile/UserProfile";
import Loader from "../../Loader/Loader";
import Agreement from "./Agreement/Agreement";
import { Helmet } from "react-helmet-async";


function Profile() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isPending, data: apartment } = useQuery({
    queryKey: ["bookedApartment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedApartments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">
        Profile {user.displayName}
      </h1>
      <UserProfile user={user} />
      {isPending ? <Loader /> : <Agreement apartment={apartment} />}
    </div>
  );
}

export default Profile;
