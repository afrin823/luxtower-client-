import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://buliding-management-server.vercel.app',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    
  
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;