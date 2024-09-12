import Typewriter from 'typewriter-effect';
const AnnounceText = () => {
    return (
        <div>
              <Typewriter
                options={{
                    strings: ['Announcements', 'Announcements'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default AnnounceText;