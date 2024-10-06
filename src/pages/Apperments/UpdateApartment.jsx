import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateApartment = () => {
  const { id } = useParams();

  // Fetch apartment data using useQuery
  const { data: apartmentData, isLoading } = useQuery({
    queryKey: ["apartment", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:4000/apartment/${id}`);
      return res.data;
    },
  });

  // Handle form update using useMutation
  const updateMutation = useMutation({
    mutationFn: async (newApartment) => {
      const res = await axios.patch(
        `http://localhost:4000/apartment/update/${id}`,
        newApartment
      );
      return res.data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "YAY",
          text: "Successfully Updated the Apartment",
        });
      }
    },
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const apartment_no = form.apartment_no.value;
    const block_name = form.block_name.value;
    const floor_no = form.floor_no.value;
    const request_date = form.request_date.value;
    const rent = form.rent.value;
    const image = form.image.value;

    const newApartment = {
      apartment_no,
      block_name,
      floor_no,
      request_date,
      rent,
      image,
    };

    // Trigger the mutation
    updateMutation.mutate(newApartment);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-24">
      <div className="max-w-screen-xl gap-8 px-8 py-16 mx-auto rounded-lg md:px-12 lg:px-8 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-8 lg:mb-4">
          Update Apartment
        </h1>

        <div className="bg-[#F4F3F0] p-24 w-5/5 mx-auto m-8 shadow rounded mt-0">
          <form onSubmit={handleUpdate}>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label htmlFor="apartmentNo" className="text-sm font-medium mb-2">
                  Apartment Number:
                </label>
                <input
                  type="text"
                  id="apartmentNo"
                  name="apartment_no"
                  defaultValue={apartmentData.apartment_no}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                <label htmlFor="floor" className="text-sm font-medium mb-2">
                  Floor Number:
                </label>
                <input
                  type="text"
                  id="floor"
                  name="floor_no"
                  defaultValue={apartmentData.floor_no}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label htmlFor="blockName" className="text-sm font-medium mb-2">
                  Block Name:
                </label>
                <input
                  type="text"
                  id="blockName"
                  name="block_name"
                  defaultValue={apartmentData.block_name}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                <label htmlFor="apartmentImage" className="text-sm font-medium mb-2">
                  Apartment Image:
                </label>
                <input
                  type="text"
                  id="apartmentImage"
                  name="image"
                  defaultValue={apartmentData.image}
                  className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label htmlFor="rent" className="text-sm font-medium mb-2">
                Rent
              </label>
              <input
                type="text"
                id="rent"
                name="rent"
                defaultValue={apartmentData.rent}
                className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <br />
            <div className="form-control w-full">
              <label htmlFor="date" className="text-sm font-medium mb-2">
                Request Date:
              </label>
              <input
                type="date"
                id="date"
                name="request_date"
                defaultValue={apartmentData.request_date}
                className="w-full text-center text-lg"
              />
            </div>
            <br />
            <input
              type="submit"
              value="Update"
              className="btn bg-sky-300 w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateApartment;
