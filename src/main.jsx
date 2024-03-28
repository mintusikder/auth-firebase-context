import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./assets/layout/Main.jsx";
import Home from "./assets/layout/component/Home.jsx";
import Login from "./assets/layout/component/Login.jsx";
import Register from "./assets/layout/component/Register.jsx";
import AuthProvider from "./assets/providers/AuthProvider.jsx";
import Orders from "./assets/layout/component/Orders.jsx";
import PrivateRoutes from "./assets/routes/PrivateRoutes.jsx";
import Profile from "./assets/layout/component/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
