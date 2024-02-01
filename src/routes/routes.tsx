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
import UpdateLens from "../pages/UpdateLens";
import DuplicateLens from "../pages/DuplicateLnes";
import SellsHistory from "../pages/SellsHistory";

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
        path: "/sells",
        element: (
          <PrivateRoute>
            <SellsHistory />
          </PrivateRoute>
        ),
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
      {
        path: "/lens/update/:id",
        element: (
          <PrivateRoute>
            <UpdateLens />
          </PrivateRoute>
        ),
      },
      {
        path: "/lens/duplicate/:id",
        element: (
          <PrivateRoute>
            <DuplicateLens />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
