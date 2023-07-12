import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {userSlice}  from "../store/user";
interface typeRoutes {
  redirectPath?: string;
  children?: React.ReactNode;
}

const dispatch = userSlice.actions;


const ProtectedRoute = ({ children, redirectPath = "/login" }: typeRoutes) => {
  console.log(dispatch.getUser());
  if (!sessionStorage.getItem("token")) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;