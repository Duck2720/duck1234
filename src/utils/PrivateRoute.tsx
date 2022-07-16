import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const user: any = useSelector((state: any) => state.auth.login.currentUser);
  const id = user.user?.id;

  return id === 1 ? <Outlet /> : <Navigate to="/home" />;
}

export default PrivateRoute;
