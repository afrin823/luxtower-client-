import useAuth from "../../firebase/hook/useAuth/useAuth";

/* eslint-disable react/prop-types */
function RequestCard({ apartment, handleAccept, handleReject }) {
  const { _id, apartment_no, floor_no, image, block_name, rent, accept_date } = apartment;
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 p-4">
      <div className="card w-full shadow-xl bg-white rounded-lg overflow-hidden">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold text-center mb-6">
            Agreement Request
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col">
              <h3 className="text-gray-500 font-semibold text-lg">User Name:   <span className="text-lg text-gray-600">{user.displayName}</span></h3>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold text-lg">User Email:   <span className="text-lg text-gray-600">{user.email}</span></span>
            
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold text-lg">Floor No:  <span className="text-lg text-gray-600">{apartment?.floor_no}</span></span>
             
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-lg font-semibold">Block Name:  <span className="text-lg text-gray-600">{apartment?.block_name}</span></span>
             
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-lg font-semibold">Apartment No: <span className="text-lg text-gray-600">{apartment?.apartment_no}</span></span>
              
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-lg font-semibold">Rent: <span className="text-lg text-gray-600">${apartment?.rent}</span></span>
              
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-lg font-semibold">Request Date:  <span className="text-lg text-gray-600">{apartment?.accept_date}</span></span>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button onClick={() => handleAccept(apartment._id)} className="btn text-white btn-success w-32 transform transition hover:scale-105">
              Accept
            </button>
            <button onClick={() => handleReject(apartment._id)} className="btn text-white btn-error w-32 transform transition hover:scale-105">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
