import { createBrowserRouter } from "react-router-dom";
import Mainpart from "../Layout/Mainpart";
import Home from "../pages/Home";
import Blog from "../Components/Blog/Blog";

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
        }
      ]
    },
  ]);

export default router;