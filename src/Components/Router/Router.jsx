import { createBrowserRouter } from "react-router-dom";
import Root from "../Services/Root";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/Details/Details";
import Login from "../../Pages/Login/Login";
import SignIn from "../../Pages/Signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("../services.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
