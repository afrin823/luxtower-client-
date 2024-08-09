import { createBrowserRouter } from "react-router-dom";
import Mainpart from "../Layout/Mainpart";
import Home from "../pages/Home";
import Blog from "../Components/Blog/Blog";
import SingIn from "../Components/SingIn";
import Resister from "../Components/Resister";
import Contact from "../pages/ContactUs/Contact";
import Apperments from "../pages/Apperments/Apperments";
import PrivateRoute from "../firebase/PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import DashboardMenu from "../pages/Dashboard/Cart/DashboardMenu";

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
          element: <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
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
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/apartments',
          element: 
            <Apperments></Apperments>
         
        }
      
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'dashboardMenu',
          element: <DashboardMenu></DashboardMenu>
        }
      ]
    }
  ]);

export default router;