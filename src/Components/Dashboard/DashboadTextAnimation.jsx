import Typewriter from 'typewriter-effect';
import useAuth from '../../firebase/hook/useAuth/useAuth';

const DashboadTextAnimation = () => {
    const {user} = useAuth()
    return (
        <div>
                 <Typewriter
                options={{
                    strings: [`Hi, ${user.displayName}`, 'Welcome to my Dashboard'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default DashboadTextAnimation;