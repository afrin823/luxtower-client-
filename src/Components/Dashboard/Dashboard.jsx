import useAuth from "../../firebase/hook/useAuth/useAuth";
import { Helmet } from "react-helmet-async";
import useUsersRole from "../../firebase/hook/useAuth/useUsersRole/useUsersRole";
import { Link } from "react-router-dom";


function Dashboard() {
  const { user } = useAuth();
  const usersRole = useUsersRole();

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <h1
        data-aos="fade-left"
        className="text-3xl animate-bounce font-bold text-center mb-8 lg:mb-4"
      >
        Hi, Welcome {user.displayName}
      </h1>

      <div className="pb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">

        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title">My Profile</h2>
            <p>See your Profile</p>
            <div className="card-actions justify-end">
              <Link to="/dashboard/profile" className="btn bg-sky-300 ">See Profile</Link>
            </div>
          </div>
        </div>

        {usersRole === "admin" && (
          <>
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Manage Member</h2>
                <p>Manage your users efficiently.</p>
                <div className="card-actions justify-end">
                  <Link to="/dashboard/manage-member" className="btn bg-sky-300 ">See Profile</Link>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Agreement Request</h2>
                <p>Agreement Request</p>
                <div className="card-actions justify-end">
                  <Link to="/dashboard/agreement-request" className="btn bg-sky-300 ">See Profile</Link>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Manage Coupons</h2>
                <p>Manage all the coupons</p>
                <div className="card-actions justify-end">
                  <Link to="/dashboard/coupons" className="btn bg-sky-300 ">See Profile</Link>
                </div>
              </div>
            </div>
          </>
        )}
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{usersRole === "admin" ? "Make Announcement" : "Announcement"}</h2>
                <p>See The Announcements page</p>
                <div className="card-actions justify-end">
                  <Link to="/dashboard/announcements" className="btn bg-sky-300 ">See Profile</Link>
                </div>
              </div>
            </div>
        {usersRole === "member" && (
          <>
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Payment History</h2>
                <p>See The Payment History</p>
                <div className="card-actions justify-end">
                  <Link to="/dashboard/payment-history" className="btn bg-sky-300 ">See Profile</Link>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Make Payment</h2>
                <p>Make a Payment</p>
                <div className="card-actions justify-end">
                  <Link to="/dashboard/make-payment" className="btn bg-sky-300 ">See Profile</Link>
                </div>
              </div>
            </div>
            </>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
