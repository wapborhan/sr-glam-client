import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ComingSoon from "../components/ComingSoon";
import Homepage from "../home/Homepage";
import Register from "../layout/Register";
import Login from "../layout/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    // element: <ComingSoon />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
