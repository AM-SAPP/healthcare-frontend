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
import DoctorHomepage from './components/Doctor/DoctorHomepage';
import PatientHomepage from './components/Patient/PatientHomepage';
import HospitalHomepage from './components/Hospital/HospitalHomepage';
import HealthRecord from './components/Patient/HealthRecord';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar/>,
    errorElement : <ErrorPage/>,
    children:[
      {
        path: "profile",
        element : <Profile/>
      },
      {
        path : "/doctor/home",
        element: <DoctorHomepage/>
      },
      {
        path: "/patient/home",
        element : <PatientHomepage/>
      },
      {
        path: "/hospital/home",
        element: <HospitalHomepage/>
      },
      {
        path : "/healthrecord",
        element : <HealthRecord/>
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
