import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? Children : <Navigate to="/login" />;
};

export default ProtectedRoute;
