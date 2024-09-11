import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../firebase/hook/useAuth/useAuth";
import useAxiosSecure from "../../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading, isError, error } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user.email}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-gray-700 py-4">Total Payment History ({payments.length})</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-sky-100 rounded-md">
                        <tr>
                            <th></th>
                            <th className="text-xl">Transaction ID</th>
                            <th className="text-xl">Status</th>
                            <th className="text-xl">Month</th>
                            <th className="text-xl">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.tranjectionId}</td>
                                <td>{payment.paymentStatus ? 'Paid' : 'Pending'}</td>
                                <td>{payment.paymentInfo.month}</td>
                                <td>${payment.paymentInfo.apartmentRent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
