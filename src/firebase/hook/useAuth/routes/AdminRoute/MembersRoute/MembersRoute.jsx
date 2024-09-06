import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../useAuth";
import useAxiosPublic from "../../../useAxiosPublic/useAxiosPublic";
import Loader from "../../../../../../Components/Loader/Loader";
import { Navigate } from "react-router-dom";


function MembersRoute({ children }) {
  const { loading, user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: "membersRoles",
    queryFn: async () => {
      const res = await axiosPublic.get(`/usersRole?email=${user.email}`);
      return res.data;
    },
  });

  if (loading) return <Loader />;
  if (isPending) return <Loader />;

  if (data.role === "member") return children;

  return <Navigate to="/" />;
}

export default MembersRoute;
