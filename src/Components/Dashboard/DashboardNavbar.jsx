import { FaHome, FaUser, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUsersRole from "../useUsersRole/useUsersRole";
import { MdDashboardCustomize } from "react-icons/md";
import useAuth from "../../firebase/hook/useAuth/useAuth";

function DashboardNavbar() {
  const { logOut } = useAuth();
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
      {usersRole === "admin" && (
        <li>
          <NavLink
            to="/dashboard/manage-member"
            className="flex items-center space-x-3"
          >
            <FaChartBar />
            <span>Manage Members</span>
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/dashboard/announcements"
          className="flex items-center space-x-3"
        >
          <FaCog />
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
              <FaCog />
              <span>Payment History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/make-payment"
              className="flex items-center space-x-3"
            >
              <FaCog />
              <span>Make Payment</span>
            </NavLink>
          </li>
        </>
      )}
      {usersRole === "admin" && (
        <>
          <li>
            <NavLink
              to="/dashboard/agreement-request"
              className="flex items-center space-x-3"
            >
              <FaCog />
              <span>Agreement Requests</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/coupons"
              className="flex items-center space-x-3"
            >
              <FaCog />
              <span>Manage Coupons</span>
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/" className="flex items-center space-x-3">
          <FaHome />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <div className="flex items-center space-x-3">
          <FaSignOutAlt />
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
        <ul className="menu p-4 w-80 bg-blue-500 text-white space-y-2 h-screen">
          {links}
        </ul>
      </div>
    </>
  );
}

export default DashboardNavbar;
