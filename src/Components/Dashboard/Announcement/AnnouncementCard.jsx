
const AnnouncementCard = ({ announcement }) => {
    return (
        <div className="bg-sky-200 rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-medium mb-2">{announcement?.title}</h2>
          <p className="text-gray-700">{announcement.description}</p>
        </div>
    );
};

export default AnnouncementCard;