import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import Homepage from "../home/Homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    // element: <ComingSoon />,
    element: <Homepage />,
  },
]);

export default routes;
