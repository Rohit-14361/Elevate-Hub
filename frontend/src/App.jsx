import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

// import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="mx-auto max-w-screen h-screen ">
      <Toaster position="top-center" />

      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<RouteElement route={route} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const RouteElement = ({ route }) => {
  return route.isProtected ? (
    <ProtectedRoute>{route.element}</ProtectedRoute>
  ) : (
    <>{route.element}</>
  );
};
export default App;
