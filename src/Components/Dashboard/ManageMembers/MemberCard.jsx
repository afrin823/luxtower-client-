
/* eslint-disable react/prop-types */
function MemberCard({ member, handleRemove }) {
    return (
      <div className="shadow-md rounded-lg border p-4 flex justify-between items-center my-2">
        <div>
          <h3 className="text-lg font-medium">{member?.name}</h3>
          <p className="text-gray-600">{member?.email}</p>
        </div>
        <button
          className="btn btn-sm btn-error disabled"
          onClick={() => handleRemove(member._id)}
        >
          Remove
        </button>
      </div>
    );
  }
  
  export default MemberCard;
  
