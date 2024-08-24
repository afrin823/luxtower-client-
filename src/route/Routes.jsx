import { createBrowserRouter } from "react-router-dom";
import Mainpart from "../Layout/Mainpart";
import Home from "../pages/Home";
import Blog from "../Components/Blog/Blog";
import SingIn from "../Components/SingIn";
import Resister from "../Components/Resister";
import Apperments from "../pages/Apperments/Apperments";
import Cart from "../Components/Dashboard/Cart";
import Dashboard from "../Components/Dashboard/Dashboard";
import ControlPanel from "../Layout/ControlPanel/ControlPanel";
import Profile from "../Components/Dashboard/Profile/Profile";
import PrivateRoute from "../firebase/PrivetRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Components/Dashboard/PaymentHistory/PaymentHistory";
import MakePayment from "../Components/Dashboard/MakePayment/MakePayment";
import ManageMembers from "../Components/Dashboard/ManageMembers/ManageMembers";
import AdminRoute from "./AdminRoute";
import Announcements from "../Components/Dashboard/Announcement/Announcements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpart></Mainpart>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element:
          <Blog></Blog>
      },
      {
        path: '/signin',
        element: <SingIn></SingIn>
      },
      {
        path: '/signup',
        element: <Resister></Resister>
      },
      {
        path: '/apartments',
        element:
          <PrivateRoute>
            <Apperments></Apperments>
          </PrivateRoute>

      }

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <ControlPanel></ControlPanel>
    </PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "/dashboard/make-payment",
        element: <MakePayment></MakePayment>
      },
      {
        path: '/dashboard/manage-member',
        element: <AdminRoute>
          <ManageMembers></ManageMembers>
        </AdminRoute>
      }
      ,
      {
        path: 'cart',
        element: <Cart></Cart>
      },
     {
      path: '/dashboard/announcements',
      element: <Announcements></Announcements>
     },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      }
    ]
  }
]);

export default router;