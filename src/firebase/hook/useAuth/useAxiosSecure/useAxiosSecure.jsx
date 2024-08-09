import axios from "axios";
import useAuth from "../useAuth";

const axiosSecure = axios.create({

  baseURL: "http://localhost:4000",
});
function useAxiosSecure() {
  const { user } = useAuth();

  if (user) return axiosSecure;
}

export default useAxiosSecure;
