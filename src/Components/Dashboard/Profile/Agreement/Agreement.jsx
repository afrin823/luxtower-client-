/* eslint-disable react/prop-types */
function Agreement({ apartments }) {
  const { floor_no, block_name, apartment_no, request_date, status } = apartments;

  return (
    <div className="py-20">
      <div className="rounded-lg shadow-md bg-white p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-primary">
          Agreement & Apartment Information
        </h2>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <label htmlFor="agreementDate" className="text-gray-700 font-medium">
            Agreement Accept Date: {request_date || "N/A"}
          </label>
          <span id="agreementDate" className="text-lg font-semibold">
            {status || "None"}
          </span>
        </div>

        <div className="mt-4 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Rented Apartment Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="floor" className="text-gray-700 font-medium">Floor Number:</label>
              <span id="floor" className="text-lg font-semibold">{floor_no || "None"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="block" className="text-gray-700 font-medium">Block Number:</label>
              <span id="block" className="text-lg font-semibold">{block_name || "None"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="roomNumber" className="text-gray-700 font-medium">Apartment Number:</label>
              <span id="roomNumber" className="text-lg font-semibold">{apartment_no || "None"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
