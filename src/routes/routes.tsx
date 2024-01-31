import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Lens from "../pages/Lens";
import NotFound from "../pages/NotFound";
import App from "../App";
import ContactUs from "../pages/ContactUs";
import LensDetails from "../pages/LensDetails";
import AddLens from "../pages/AddLens";
import PrivateRoute from "./PrivateRoute";
import Inventory from "../pages/Inventory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Lens />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/all-lens",
        element: <Lens />,
      },
      {
        path: "/add-lens",
        element: (
          <PrivateRoute>
            <AddLens />
          </PrivateRoute>
        ),
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/lens/details/:id",
        element: <LensDetails />,
      },
    ],
  },
]);

export default routes;
