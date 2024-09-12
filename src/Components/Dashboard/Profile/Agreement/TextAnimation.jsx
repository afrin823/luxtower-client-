import Typewriter from 'typewriter-effect';

const TextAnimation = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Agreement  Information', 'Apartment Information'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default TextAnimation;