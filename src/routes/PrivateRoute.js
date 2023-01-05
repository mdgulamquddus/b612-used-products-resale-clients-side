import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }
  console.log(user);
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
