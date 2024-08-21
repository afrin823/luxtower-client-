


/* eslint-disable react/prop-types */
function UserProfile({ user }) {

    return (
      <div className="shadow-md rounded-lg border p-4">
        <div className="flex items-center text-center">
          <img
            className="w-1/4 rounded-lg"
            src={user?.photoURL}
            alt={user?.displayName}
          />
          <div className="ml-4">
            <h3 className="text-2xl font-semibold md:text-4xl">
              {user?.displayName}
            </h3>
            <p className="text-gray-600 md:text-2xl">{user.email}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserProfile;
  