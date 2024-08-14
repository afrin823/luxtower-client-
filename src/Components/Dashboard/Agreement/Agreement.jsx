/* eslint-disable react/prop-types */
function Agreement({ apartment }) {
    // Replace with your actual date
    console.log(apartment)
  
    return (
      <div className="py-20">
        <div className="rounded-lg shadow-md bg-white p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center text-sky-400">
            
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <label htmlFor="agreementDate" className="text-gray-700 font-medium">
              Agreement Accept Date:
            </label>
            <span id="agreementDate" className="text-lg font-semibold">
              {apartment?.status ? apartment.status : "none"}
            </span>
          </div>
          <div className="mt-4 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">
              Rented Apartment Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="floor" className="text-gray-700 font-medium">
                  Floor Number:
                </label>
                <span id="floor" className="text-lg font-semibold">
                  {apartment?.floor_no ? apartment.floor_no : "none"}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="block" className="text-gray-700 font-medium">
                  Block Number:
                </label>
                <span id="block" className="text-lg font-semibold">
                  {apartment?.block_name ? apartment.block_name : "none"}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="roomNumber" className="text-gray-700 font-medium">
                  Apartment Number:
                </label>
                <span id="roomNumber" className="text-lg font-semibold">
                  {apartment?.apartment_no ? apartment.apartment_no : "none"}
                </span>
              </div>
            </div>
          </div>
          {/* Remove the submit button since it's static data */}
        </div>
      </div>
    );
  }
  
  export default Agreement;
  