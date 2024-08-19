import axios from "axios";
import useAuth from "../useAuth";

const axiosSecure = axios.create({

  baseURL: "https://buliding-management-server.vercel.app",
});
function useAxiosSecure() {
  const { user } = useAuth();

  if (user) return axiosSecure;
}

export default useAxiosSecure;
