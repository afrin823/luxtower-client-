import Typewriter from 'typewriter-effect';
const PaymentText = () => {
    return (
        <div>
                <Typewriter
                options={{
                    strings: ['Payment', 'Payment Process'],
                    autoStart: true,
                    loop: true,
                }}/>
        </div>
    );
};

export default PaymentText;