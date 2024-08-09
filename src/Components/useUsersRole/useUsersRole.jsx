import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import useAxiosSecure from "../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import useAuth from "../../firebase/hook/useAuth/useAuth";

function useUsersRole() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isPending, data } = useQuery({
    queryKey: ["usersRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/usersRole?email=${user.email}`);
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
