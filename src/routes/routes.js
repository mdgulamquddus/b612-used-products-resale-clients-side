import { createBrowserRouter } from "react-router-dom";
import AllCategoriesItem from "../components/Category.js/AllCategoriesItem";
import ProductDetails from "../components/Category.js/ProductDetails";
import Welcome from "../components/Dashboard/Welcome";
import Error from "../components/Error/Error";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../pages/Dashboard/Admin/AllProducts";
import AllReport from "../pages/Dashboard/Admin/AllReport";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import BuyerAllProduct from "../pages/Dashboard/Buyer/BuyerAllProduct";
import WishList from "../pages/Dashboard/Buyer/WishList";
import Checkout from "../pages/Dashboard/Checkout/Checkout";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";
import MyProducts from "../pages/Dashboard/Seller/MyProducts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:category",
        element: (
          <PrivateRoute>
            <AllCategoriesItem></AllCategoriesItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
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
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Welcome></Welcome>,
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-report",
        element: (
          <PrivateRoute>
            <AllReport />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "buyer-all-product",
        element: (
          <PrivateRoute>
            <BuyerAllProduct></BuyerAllProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
