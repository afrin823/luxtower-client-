import { useState } from "react";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import annoucement from "../../../../public/annoucement.json"

function MakeAnnounce() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();

    const announce = { title, description };

    axiosPublic
      .post("/announcements", announce)
      .then((res) => {
        Swal.fire({
          title: "Successfully announcement make",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later!",
          icon: "warning",
        });
      });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>Make an Announcement</title>
      </Helmet>
      <div className="flex flex-col justify-between">
        <h2 className="text-center text-2xl font-semibold animate-bounce">Make an Announcement</h2>
        <Lottie animationData={annoucement} data-aos="fade-right" className="h-52 md:h-64 lg:h-full" />
      </div>

      <form onSubmit={handleSubmit} className="card-body shadow-lg rounded-md">
      <h1 className="text-center font-semibold text-md">
          Make Announcement
        </h1>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter the title"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Enter the description"
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-sky-300 text-white w-full">Submit</button>
        </div>
      </form>

    </div>
  );
}

export default MakeAnnounce;
