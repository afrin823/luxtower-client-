


/* eslint-disable react/prop-types */
function UserProfile({ user }) {

    return (
      <div className="shadow-md rounded-lg bg-[url('https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg')] border p-4">
        <div className="items-center text-center">
          <img
            className="w-1/6 rounded-full mx-auto animate-pulse"
            src={user?.photoURL}
            alt="display image"
          />
           <h3 className="text-2xl font-semibold md:text-3xl text-gray-300">
              {user?.displayName}
            </h3>
            <p className="text-gray-400 md:text-2xl">{user.email}</p>
          <div className="ml-4">
           
          </div>
        </div>
      </div>
    );
  }
  
  export default UserProfile;
  