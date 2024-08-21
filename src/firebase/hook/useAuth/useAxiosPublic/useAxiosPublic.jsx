import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;