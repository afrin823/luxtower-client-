import { createBrowserRouter } from "react-router-dom";
import Mainpart from "../Layout/Mainpart";
import Home from "../pages/Home";
import Blog from "../Components/Blog/Blog";
import SingIn from "../Components/SingIn";
import Resister from "../Components/Resister";
import Contact from "../pages/ContactUs/Contact";

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
          element: <Blog></Blog>
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
        }
      
      ]
    },
  ]);

export default router;