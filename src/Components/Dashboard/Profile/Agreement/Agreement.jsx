import TextAnimation from "./TextAnimation";

/* eslint-disable react/prop-types */
function Agreement({ apartments }) {
  const { floor_no, block_name, apartment_no, request_date, rent, status } = apartments;

  return (
    <div className="py-6">
      <h2 className="text-3xl mb-4 font-bold text-center ">
          <TextAnimation></TextAnimation>
        </h2>
      <div className="rounded-lg shadow-md bg-gray-200 text-justify p-8 flex flex-col gap-4">
        <div className="mt-4 border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
            <label htmlFor="agreementDate" className="text-gray-700 font-medium">
            Agreement Accept Date: 
          </label>
          <span className="text-base font-semibold">{request_date || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="floor" className="text-base text-gray-900 font-medium">Floor Number:</label>
              <span id="floor" className="text-base font-semibold">{floor_no || "None"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="block" className="text-base text-gray-900 font-medium">Block Number:</label>
              <span id="block" className="text-base font-semibold">{block_name || "None"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="roomNumber" className=" text-base text-gray-900 font-medium">Apartment Number:</label>
              <span id="roomNumber" className="text-base font-semibold">{apartment_no || "None"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="roomNumber" className=" text-base text-gray-900 font-medium">Rent:</label>
              <span id="roomNumber" className="text-base font-semibold">{rent || "None"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="roomNumber" className="text-gray-900 text-base font-medium">Apartment Number:</label>
          
               <span id="agreementDate" className="text-base font-semibold">
            {status || "None"}
          </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
