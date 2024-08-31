/* eslint-disable react/prop-types */
function RequestCard({ apartment,handleAccept, handleReject }) {
  const { _id, apartment_no, floor_no, image, block_name, rent, } = apartment;

    return (
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 p-4">
        <div className="card w-full shadow-xl bg-white rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <h2 className="card-title text-3xl font-bold text-center mb-6 text-sky-300">
              Agreement Request
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">User Name:</span>
                <span className="text-lg">{apartment?.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">User Email:</span>
                <span className="text-lg">{apartment?.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">Floor No:</span>
                <span className="text-lg">{apartment?.floor_no}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">Block Name:</span>
                <span className="text-lg">{apartment?.block_name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">Apartment No:</span>
                <span className="text-lg">{apartment?.apartment_no}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">Rent:</span>
                <span className="text-lg">${apartment?.rent}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-semibold">Request Date:</span>
                <span className="text-lg">{apartment?.request_date}</span>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={() => handleAccept(apartment._id)} className="btn btn-success w-32 transform transition hover:scale-105">
                Accept
              </button>
              <button onClick={() => handleReject(apartment._id)} className="btn btn-error w-32 transform transition hover:scale-105">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default RequestCard;
  