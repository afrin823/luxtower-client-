import { FaHome, FaUser, FaChartBar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDashboardCustomize, MdOutlinePayments, MdPayments } from "react-icons/md";
import { AuthContext } from "../../firebase/AuthProvider";
import { useContext } from "react";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaCodePullRequest } from "react-icons/fa6";
import { RiCoupon4Fill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import useUsersRole from "../../firebase/hook/useAuth/useUsersRole/useUsersRole";


function DashboardNavbar() {
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const usersRole = useUsersRole();

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Logout success.",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "something went wrong! try later.",
          icon: "warning",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/dashboard" className="flex items-center space-x-3">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/profile"
          className="flex items-center space-x-3"
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="flex items-center space-x-3"
        >
          <IoHome />
          <span>Home</span>
        </NavLink>
      </li>
   
       {
        usersRole === "admin" &&(
          <li>
          <NavLink
            to="/dashboard/manage-member"
            className="flex items-center space-x-3"
          >
            <FaChartBar />
            <span>Manage Members</span>
          </NavLink>
        </li>
        )
       }
    
      <li>
        <NavLink
          to="/dashboard/announcements"
          className="flex items-center space-x-3"
        >
          <TfiAnnouncement />
          <span>
            {usersRole === "admin" ? "Make Announcement" : "Announcement"}
          </span>
        </NavLink>
      </li>
           
      {usersRole === "member" && (
        <>
        <li>
          <NavLink
            to="/dashboard/payment-history"
            className="flex items-center space-x-3"
          >
            <MdOutlinePayments />
            <span>Payment History</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/make-payment"
            className="flex items-center space-x-3"
          >
            <MdPayments />
            <span>Make Payment</span>
          </NavLink>
        </li>
      </>
      )}
   
     
        <>
          {
           usersRole === "admin" &&  (
              <li>
            <NavLink
              to="/dashboard/agreement-request"
              className="flex items-center space-x-3"
            >
              <FaCodePullRequest />
              <span>Agreement Requests</span>
            </NavLink>
          </li>
            )
          }
         {
          usersRole === "admin" && (
            <li>
            <NavLink
              to="/dashboard/coupons"
              className="flex items-center space-x-3"
            >
              <RiCoupon4Fill />
              <span>Manage Coupons</span>
            </NavLink>
          </li>
          )
         }
        </>

      <li>
        <div className="flex items-center space-x-3">
          <IoMdLogOut />
          <span onClick={handleLogout}>Logout</span>
        </div>
      </li>
    </>
  );

  return (
    <>
      <div className="lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-gray-600 text-white hidden">
        <div

          className="flex items-center justify-center h-16 bg-gray-800"
        >
          <div className="flex items-center justify-center gap-1 text-3xl">
            <MdDashboardCustomize />
            <span className="text-2xl font-bold">Dashboard</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ul className="menu p-4 space-y-2">{links}</ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between   text-black p-4">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      {/* Main Content */}

      {/* Drawer for Mobile */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side lg:hidden z-10">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-sky-300 text-white space-y-2 h-screen">
          {links}
        </ul>
      </div>
    </>
  );
}

export default DashboardNavbar;
