import { FaUserAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import Cart from "./Cart";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-sky-400 ">
            
                <ul className="menu p-4">
                
                    <li>
                        <Link to='' className="text-white"><FaHouseChimney className="text-white" /> Dashboard</Link>
                    </li>
                    <li>
                        <Link to='dashboardMenu' className="text-white"><FaUserAlt className="text-white" /> Profile</Link>
                    </li>
                    <li>
                        <Link to='cart' className="text-white"><IoSettings className="text-white" /> Announcement</Link>
                    </li>
                    <li>
                        <Link to='cart' className="text-white"><IoIosSettings className="text-white" /> Payment History</Link>
                    </li>
                    <li>
                        <Link to='cart' className="text-white"><IoIosSettings
                         className="text-white" />Make Payment</Link>
                    </li>
                    <li>
                        <Link to='cart' className="text-white"><MdLogout className="text-white" /> Logout</Link>
                        <div className="divider"></div>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1">
                <Outlet></Outlet>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Dashboard;