import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageMembers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users", )
            return res.data;
        }
    })
    // make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${users.name} Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             axiosSecure.delete(`/users/${user._id}`)
             .then(res => {
                if (res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
             })
            }
          });
    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <div className="text-3xl">All Members</div>
                <div className="text-3xl">Total Members : {users.length}</div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                   { user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-sky-300">
                                        <FaUsers className="text-white text-2xl" />
                                    </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg  ">
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMembers;