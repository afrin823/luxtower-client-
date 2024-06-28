import { createBrowserRouter } from "react-router-dom";
import Mainpart from "../Layout/Mainpart";
import Home from "../pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpart></Mainpart>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;