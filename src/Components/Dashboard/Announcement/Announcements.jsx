import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic.jsx";
import Loader from "../../Loader/Loader.jsx";
import AnnouncementCard from "./AnnouncementCard.jsx";
import MakeAnnounce from "./MakeAnnounce.jsx";
import useUsersRole from "../../../firebase/hook/useAuth/useUsersRole/useUsersRole.jsx";


function Announcements() {
  const usersRole = useUsersRole();

  const axiosPublic = useAxiosPublic();

  const { isPending, data: announcements } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });


  return (
    //     <div>
    //       {isAdmin && <MakeAnnounce />}
    //     <h1 className="text-3xl font-bold text-center mb-8 lg:mb-4 py-12 animate-bounce">Announcements</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{isAdmin == "admin" ? "" : isPending ? (
    //       <Loader />
    //     ) : (
    //         announcements?.map((announcement) => (
    //         <AnnouncementCard  key={announcement._id} announcement={announcement} />
    //       ))
    //     )}
    // </div>

    //   </div>
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Announcements Page</h1>
      {usersRole === "admin" && <MakeAnnounce />}
      {usersRole == "admin" ? "" : isPending ? (
        <Loader />
      ) : (
        announcements?.map((announcement) => (
          <AnnouncementCard key={announcement._id} announcement={announcement} />
        ))
      )}


    </div>
  );
}

export default Announcements;
