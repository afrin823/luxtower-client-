import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const FailPayment = () => {
    return (
        <div className="flex items-center justify-center pt-20">
            <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gray-200 border-2 border-red-400 rounded-full flex items-center justify-center mb-6">
                        <IoMdClose className="text-5xl text-red-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Payment Failed
                    </h2>
                    <p className="text-gray-600 mb-8">
                        A payment failure or failed transaction happens when an intended online or card transaction does not completely go through.
                    </p>
                    <Link
                        to="/dashboard"
                        className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FailPayment;
