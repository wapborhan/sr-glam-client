import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon />,
  },
]);

export default routes;
