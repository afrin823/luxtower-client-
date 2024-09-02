
const AnnouncementCard = ({ announcement }) => {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 mb-4 text-justify">
          <h2 className="text-xl font-medium mb-2">{announcement?.title}</h2>
          <p className="text-gray-700">{announcement.description}</p>
        </div>
    );
};

export default AnnouncementCard;