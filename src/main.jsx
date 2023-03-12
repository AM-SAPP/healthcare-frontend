import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sidebar from './components/Common/SideBar';
import ErrorPage from './components/Common/Errorpage';
import Profile from './components/Profile';
import Registration from './components/Common/Registration';
import Login from './components/Common/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar/>,
    errorElement : <ErrorPage/>,
    children:[
      {
        path: "profile",
        element : <Profile/>
      }
    ]
  },
  {
    path: "/register",
    element : <Registration/>,
    errorElement : <ErrorPage/>
  },
  {
    path: "/login",
    element : <Login/>,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
