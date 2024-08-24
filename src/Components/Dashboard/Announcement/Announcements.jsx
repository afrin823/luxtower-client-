import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../firebase/hook/useAuth/useAdmin";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic.jsx";
import Loader from "../../Loader/Loader.jsx";
import AnnouncementCard from "./AnnouncementCard.jsx";
import MakeAnnounce from "./MakeAnnounce.jsx";


function Announcements() {
    const [isAdmin] = useAdmin();

  const axiosPublic = useAxiosPublic();

  const { isPending, data: announcements } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });


  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 lg:mb-4 animate-bounce text-center mx-auto w-4/12 border-y-2">Announcements </h1>

      {isAdmin == "admin" ? "" : isPending ? (
        <Loader />
      ) : (
        announcements?.map((announcement) => (
          <AnnouncementCard key={announcement._id} announcement={announcement} />
        ))
      )}

      {isAdmin === "admin" && <MakeAnnounce />}
    </div>
  );
}

export default Announcements;
