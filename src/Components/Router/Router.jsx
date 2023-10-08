import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/Details/Details";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../Private/PrivateRoutes";
import AllServices from "../../Pages/AllServices/AllServices";
import ErrorPage from "../../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: () => fetch("../services.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoutes>
            <AllServices />
          </PrivateRoutes>
        ),
        loader: () => fetch("../services.json"),
      },
    ],
  },
]);
export default router;
