import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };
  const menuItems = (
    <>
      <NavLink className="btn btn-ghost" to="/">
        Home
      </NavLink>
      <NavLink className="btn btn-ghost" to="/products">
        Products
      </NavLink>
      <NavLink className="btn btn-ghost" to="/wishlist">
        WishList
      </NavLink>

      {user && user.uid ? (
        <>
          <NavLink className="btn btn-ghost" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink onClick={handleLogout} className="btn btn-ghost" to="/">
            Log Out
          </NavLink>
        </>
      ) : (
        <NavLink className="btn btn-ghost" to="/login">
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        <Link to="/">
          <img
            src="https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/header/logo-ubuy.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
