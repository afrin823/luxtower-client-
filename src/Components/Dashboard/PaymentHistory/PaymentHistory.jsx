import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../firebase/hook/useAuth/useAxiosPublic/useAxiosPublic";

const PaymentHistory = () => {
    const axiosPublic = useAxiosPublic();

    const { data: payments = [], isLoading, isError, error } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic(`/payments`);
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
            <h2>Payment History ({payments.length})</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Payment ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.tranjectionId}</td>
                                <td>{payment.paymentStatus}</td> {/* Changed from paymentStatus */}
                                <td>{payment.date}</td> {/* Changed from paymentStatus */}
                                <td>{payment.paymentMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
