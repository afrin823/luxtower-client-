import Typewriter from 'typewriter-effect';

const MakePaytext = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Make Payment', 'Make An Payment'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default MakePaytext;