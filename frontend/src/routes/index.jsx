import React from "react";

import Home from "../pages";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/dashboard/profile";
import Dashboard from "../pages/dashboard/dashboard";

const routes = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/login", element: <Login />, isProtected: false },
  { path: "/signup/:role", element: <Signup />, isProtected: false },
  {
    path: "/dashboard/profile",
    element: <Profile />,
    isProtected: true,
  },
];

export default routes;
