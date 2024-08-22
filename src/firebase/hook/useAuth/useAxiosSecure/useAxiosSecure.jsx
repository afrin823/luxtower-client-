import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";

const axiosSecure = axios.create({

  baseURL: "http://localhost:4000",
});
function useAxiosSecure() {
  const navigate = useNavigate();
  const {logOut} = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    console.log('requested stopped by interceptors', token);
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  })
  //interceptors 401 and 403 satus
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    console.log('status error in the interceptors', status);
    if (status === 401 || status === 403){
      await logOut();
      navigate('/signin')
    }
    return Promise.reject(error)
  })

  return axiosSecure;
}

export default useAxiosSecure;
