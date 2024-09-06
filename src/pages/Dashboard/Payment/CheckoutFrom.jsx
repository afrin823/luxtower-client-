import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import { useLocation } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const { userInfo, month, floor_no, block_name, apartment_no, rent } = location.state;

    useEffect(() => {
        // Create PaymentIntent on component mount
        axiosSecure.post('/create-payment-intent', { amount: rent })
            .then(response => {
                setClientSecret(response.data.clientSecret);
            })
            .catch(error => {
                console.error('Error creating payment intent:', error);
            });
    }, [axiosSecure, rent]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setIsProcessing(true);

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            console.log('Payment error', paymentError);
            setError(paymentError.message);
            setIsProcessing(false);
            return;
        }

        console.log('Payment Method', paymentMethod);
        setError('');

        // Confirm payment
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: userInfo.name,  // Replace with actual user info
                    email: userInfo.email,  // Replace with actual user info
                },
            },
        });

        if (confirmError) {
            console.log('Confirmation error', confirmError);
            setError(confirmError.message);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded:', paymentIntent);
            // Handle successful payment here (e.g., save payment details, navigate to a success page, etc.)
        }

        setIsProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay'}
            </button>
            {error && <p className="text-red-600">{error}</p>}
        </form>
    );
};

export default CheckoutForm;
