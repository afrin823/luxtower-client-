import { createBrowserRouter } from "react-router-dom";
import Mainpart from "../Layout/Mainpart";
import Home from "../pages/Home";
import Blog from "../Components/Blog/Blog";
import SingIn from "../Components/SingIn";
import Resister from "../Components/Resister";
import Apperments from "../pages/Apperments/Apperments";
import Cart from "../Components/Dashboard/Cart";
import Dashboard from "../Components/Dashboard/Dashboard";
import Announcement from "../Components/Dashboard/Announcement/Announcement";
import ControlPanel from "../Layout/ControlPanel/ControlPanel";
import Profile from "../Components/Dashboard/Profile/Profile";
import PrivateRoute from "../firebase/PrivetRoute";

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
      element: <ControlPanel></ControlPanel>,
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
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: '/dashboard/announcements',
          element: <Announcement></Announcement>
        }
      ]
    }
  ]);

export default router;