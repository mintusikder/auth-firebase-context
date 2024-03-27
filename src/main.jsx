import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/layout/Main.jsx';
import Home from './assets/layout/component/Home.jsx';
import Login from './assets/layout/component/Login.jsx';
import Register from './assets/layout/component/Register.jsx';
import Providers from './assets/providers/Providers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
    <RouterProvider router={router}></RouterProvider>
    </Providers>
  </React.StrictMode>,
)
