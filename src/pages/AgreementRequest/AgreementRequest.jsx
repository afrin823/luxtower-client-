import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader/Loader";
import RequestCard from "../RequestCard/RequestCard";
import useAxiosPublic from "../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

function AgreementRequest() {
  const axiosPublic = useAxiosPublic();

  const { isPending, data = [], refetch } = useQuery({
    queryKey: ["bookedApartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookedApartments");
      return res.data;
    },
  });

  const handleAccept = (id) => {
    axiosPublic
      .patch(`/bookedApartments/${id}`)
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          icon: res.data.status === 200 ? "success" : "warning",
        });
        refetch();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later!",
          icon: "warning",
        });
      });
  };

  const handleReject = (id) => {
    axiosPublic
      .patch(`/bookedApartments/${id}`)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Agreement Reject success",
          icon: "success",
        });
        refetch();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later!",
          icon: "warning",
        });
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 lg:mb-4  w-5/12 mx-auto animate-bounce">Agreement Request page</h1>
      <div className="py-10">
        {isPending ? (
          <Loader />
        ) : data.length > 0 ? (
          data.map((apartment) => (
            <RequestCard
              handleAccept={handleAccept}
              handleReject={handleReject}
              key={apartment._id}
              apartment={apartment}
            />
          ))
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-10">
            <h1 className="font-bold text-4xl text-center text-red-600 mb-4">
              No Agreement Request Available
            </h1>
            <p className="text-gray-700 text-center text-xl pt-4">
              Please check back later
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgreementRequest;
