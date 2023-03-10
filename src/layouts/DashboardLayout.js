import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../api/users";
import Navbar from "../components/Header/Navbar";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../context/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  console.log(role);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              {role === "admin" && (
                <>
                  <Link to="all-users">All Users</Link>
                  <Link to="all-products">All Products</Link>
                  <Link to="all-bookings">All Booking Products</Link>
                </>
              )}
              {role === "Seller" && (
                <>
                  <Link to="my-products">My Products</Link>
                  <Link to="add-product">Add Product</Link>
                </>
              )}
              {role === "Buyer" && (
                <>
                  <Link to="buyer-all-product">My Products</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
