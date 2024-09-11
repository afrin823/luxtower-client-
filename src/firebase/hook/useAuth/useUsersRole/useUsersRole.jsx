import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import Loader from "../../../../Components/Loader/Loader";

function useUsersRole() {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["usersRole"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/usersRole?email=${user.email}`);
      return res.data;
    },
  });
  if (isPending) {
    return <Loader />;
  } else {
    const usersRole = data?.role;
    return usersRole;
  }
}

export default useUsersRole;
