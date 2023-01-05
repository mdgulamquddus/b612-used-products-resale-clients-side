import { createBrowserRouter } from "react-router-dom";
import Welcome from "../components/Dashboard/Welcome";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../pages/Dashboard/Admin/AllProducts";
import AllReport from "../pages/Dashboard/Admin/AllReport";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import WishList from "../pages/Dashboard/WishList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <Welcome></Welcome>,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "all-report",
        element: <AllReport />,
      },
    ],
  },
]);

export default router;
