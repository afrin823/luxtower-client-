import { Helmet } from "react-helmet-async";


const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Payment</title>
            </Helmet>
                <div>
                    <h1 className="text-3xl font-bold mb-8 lg:mb-4">Payment </h1>
                    <div className="flex items-center justify-center bg-gray-100 py-10">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                            <h1 className="text-2xl font-bold mb-6 text-center">
                                Payment Process
                            </h1>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Email:</span>
                                    <span>userInfo.email</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Floor:</span>
                                    <span>floor_no</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Block Name:</span>
                                    <span>block_name</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Apartment No:</span>
                                    <span>apartment_no</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Month:</span>
                                    <span>month</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Rent:</span>
                                    <span>$apartmentRent.toFixed(2)</span>
                                </div>
                              
                                    <div className="flex justify-between text-green-500">
                                        <span className="font-semibold">Discount:</span>
                                        <span>discount%</span>
                                    </div>
                              
                                <div className="pt-4">
                                    <label className="font-semibold">Coupon Code:</label>
                                </div>
                                <div className="mb-4 flex gap-2">
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        placeholder="Coupon code"
                                     
                                    />
                                    <button className="btn btn-primary">
                                  
                                    </button>
                                </div>

                              
                                    <p  className="text-green-500"                                >
                                   
                                    </p>
                                
                                <div className="py-6">
                                    <div className="mt-6">
                                        <button
                                           
                                            className="btn btn-success text-white w-full"
                                          
                                        >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </div>
        </div>
    );
};

export default Payment;