import { BsExclamationLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const SuccessPayment = () => {

    return (
        <div>
            <div className="flex items-center justify-center pt-20">
                <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full relative">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-200 border-2 border-green-400 rounded-full flex items-center justify-center mb-6">
                        <BsExclamationLg className="text-5xl text-green-600" data-aos="fade-down"/>
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                            Payment Successful
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Thank you for your payment. Your transaction has been completed
                            successfully.
                        </p>
                        <Link
                            to="/dashboard"
                            className=" bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
                        >
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
                <style jsx>{`
        .animate-checkmark {
          animation: checkmark 0.5s ease-in-out;
        }
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
            </div>
        </div>
    );
};

export default SuccessPayment;