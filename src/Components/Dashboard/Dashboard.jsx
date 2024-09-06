import useAuth from "../../firebase/hook/useAuth/useAuth";
import Card from "./Card";
import { Helmet } from "react-helmet-async";
import useUsersRole from "../../firebase/hook/useAuth/useUsersRole/useUsersRole";


function Dashboard() {
  const { user } = useAuth();
  const usersRole = useUsersRole();

  // if (isLoading) {
  //   return <Loader></Loader>; // Display a loading state while checking admin status
  // }

  console.log("isAdmin value:", usersRole); // Debugging check

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <h1
        data-aos="fade-left"
        className="text-3xl animate-bounce font-bold text-center border-b-4 border-gray-700 w-2/12 mx-auto mb-8 lg:mb-4"
      >
        Hello, {user.displayName}
      </h1>

      <div className="pb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card
          data-aos="fade-right"
          title="My Profile"
          content="See your Profile"
          to="/dashboard/profile"
        />

        {usersRole === "admin" &&(
          <>
            <Card
              data-aos="fade-up"
              title="Manage Member"
              content="Manage your users efficiently."
              to="/dashboard/manage-member"
            />
            <Card
              data-aos="fade-left"
              title="Agreement Request"
              content="Agreement Request"
              to="/dashboard/agreement-request"
            />
            <Card
              data-aos="fade-right"
              title="Manage Coupons"
              content="Manage all the coupons"
              to="/dashboard/coupons"
            />
          </>
        )}

        <Card
          data-aos="fade-up"
          title={usersRole === "admin" ? "Make Announcement" : "Announcement"}
          content="See The Announcements page"
          to="/dashboard/announcements"
        />
        {usersRole === "member" &&(
          <>
             <Card
          data-aos="fade-left"
          title="Payment History"
          content="See The Payment History"
          to="/dashboard/payment-history"
        />

        <Card
          data-aos="fade-right"
          title="Make Payment"
          content="Make a Payment"
          to="/dashboard/make-payment"
        /></>
        )}
     
      </div>
    </div>
  );
}

export default Dashboard;
