import React from "react";

import Home from "../pages";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/login", element: <Login />, isProtected: false },
  { path: "/signup/:role", element: <Signup />, isProtected: false },
];

export default routes;
