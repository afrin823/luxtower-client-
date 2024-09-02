import { IoHome } from "react-icons/io5";
import useAuth from "../../firebase/hook/useAuth/useAuth";

import Card from "./Card";
import { Link } from "react-router-dom";
import useUsersRole from "../../firebase/hook/useAuth/useUsersRole/useUsersRole";


function Cart() {
    const { user } = useAuth();
    const usersRole = useUsersRole();
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Hello, {user.displayName}</h1>
            <Link className="btn btn-primary text-white items-center justify-center" to="/"><IoHome className="text-2xl"/>
            Go to Home page</Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <Card
                    title="My Profile"
                    content="See your Profile"
                    to="/dashboard/profile">

                </Card>
                    {usersRole === "admin" && (
                        <Card
                            title="Manage Member"
                            content="Manage your users efficiently."
                            to="/dashboard/manage-member"
                        />
                    )}
                <Card
                     title={usersRole === "admin" ? "Make Announcement" : "Announcement"}
                     content="See The Announcements page"
                     to="/dashboard/announcements">

                </Card>
            </div>
        </div>
    );
}

export default Cart;