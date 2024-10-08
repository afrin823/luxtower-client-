import Typewriter from 'typewriter-effect';

const MakePaytext = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Make Payment', 'Create Payment'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default MakePaytext;