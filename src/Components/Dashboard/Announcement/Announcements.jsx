import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic.jsx";
import Loader from "../../Loader/Loader.jsx";
import AnnouncementCard from "./AnnouncementCard.jsx";
import MakeAnnounce from "./MakeAnnounce.jsx";
import useUsersRole from "../../../firebase/hook/useAuth/useUsersRole/useUsersRole.jsx";

function Announcements() {
  const usersRole = useUsersRole();
  const axiosPublic = useAxiosPublic();

  const { isLoading, data: announcements } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4 text-center">
        Announcements
      </h1>
      <p className="text-center w-10/12 mx-auto text-sm text-gray-500 pb-6">
      We are excited to announce the launch of our new project, a groundbreaking initiative that promises to bring unique value and elevate our standards. Stay tuned for more updates as we embark on this exciting journey together!
      </p>
      {usersRole === "admin" && <MakeAnnounce />}
      {usersRole !== "admin" ? (
        isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements?.map((announcement) => (
              <AnnouncementCard
                key={announcement._id}
                announcement={announcement}
              />
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}

export default Announcements;
