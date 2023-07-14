import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useValidUser from "../hooks/useValidUser";
interface typeRoutes {
  redirectPath?: string;
  children?: React.ReactNode;
  isAdmin?: boolean;
}



const ProtectedRoute = ({ children, redirectPath = "/login", isAdmin }: typeRoutes) => {
  if (!sessionStorage.getItem("token")) {
    return <Navigate to={redirectPath} replace />;
  }
  if(isAdmin && !useValidUser()) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;