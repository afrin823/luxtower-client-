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
import Announcements from "../Components/Dashboard/Announcement/Announcements";
import AgreementRequest from "../pages/AgreementRequest/AgreementRequest";
import Coupon from "../Components/Dashboard/Coupon/Coupon";
import MakeAnnounce from "../Components/Dashboard/Announcement/MakeAnnounce";
import AdminRoute from "../firebase/hook/useAuth/routes/AdminRoute/AdminRoute";
import MembersRoute from "../firebase/hook/useAuth/routes/AdminRoute/MembersRoute/MembersRoute";
import SuccessPayment from "../pages/Dashboard/Payment/SuccessPayment";
import FailPayment from "../pages/Dashboard/Payment/FailPayment";
import AboutUs from "../pages/AboutUs/AboutUs";
import ViewApartment from "../pages/Apperments/ViewApartment";
import Chat from "../Components/Dashboard/Chat";

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

      },
      {
        path: '/chat',
        element:
          <Chat></Chat>

      },
      {
        path: '/viewApartment/:id',
        element: <PrivateRoute><ViewApartment /></PrivateRoute>,
      
      },
 
      {
        path: '/about',
        element:
          <PrivateRoute>
            <AboutUs></AboutUs>
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
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
      {
        path: '/dashboard/profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "/dashboard/payment-history",
        element: <PrivateRoute>
          <MembersRoute>
          <PaymentHistory></PaymentHistory>
          </MembersRoute>
        </PrivateRoute>
      },
      {
        path: "/dashboard/make-payment",
        element: <PrivateRoute>
          <MembersRoute>
          <MakePayment></MakePayment>
          </MembersRoute>
        </PrivateRoute>
      },
      {
        path: "/dashboard/payment",
        element: <PrivateRoute>
          <MembersRoute>
          <Payment></Payment>
          </MembersRoute>
        </PrivateRoute>
      },
      {
        path: "/dashboard/success-payment/:tranId",
        element: <SuccessPayment></SuccessPayment>
      },
      {
        path: "/dashboard/fail-payment/:tranId",
        element: <FailPayment></FailPayment>
      }
      ,
      {
        path: '/dashboard/agreement-request',
        element: <PrivateRoute>
          <AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/manage-member',
        element: <PrivateRoute>
          <AdminRoute>
          <ManageMembers></ManageMembers>
        </AdminRoute>
        </PrivateRoute> 
      },
      {
        path: '/dashboard/coupons',
        element: <PrivateRoute>
          <AdminRoute>
          <Coupon></Coupon>
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/make-announcement',
        element: <PrivateRoute>
          <AdminRoute>
          <MakeAnnounce></MakeAnnounce>
          </AdminRoute>
        </PrivateRoute>
      }
      ,
      {
        path: 'cart',
        element: <AdminRoute><Cart></Cart></AdminRoute>
      },
     {
      path: '/dashboard/announcements',
      element: <PrivateRoute>
        <Announcements></Announcements>
      </PrivateRoute>
     },
      {
        path: '/dashboard/payment',
        element: <PrivateRoute>
          <MembersRoute>
          <Payment></Payment>
          </MembersRoute>
        </PrivateRoute>
      }
    ]
  }
]);

export default router;