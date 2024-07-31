import axios from "axios";

const axiosPublic = axios.create({
  // https://b9-battle-for-supremacy-server-flame.vercel.app
  // http://localhost:3000

  baseURL: "http://localhost:3000",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
