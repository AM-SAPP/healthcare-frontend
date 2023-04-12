import React , {useEffect, useState}from 'react'
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
import AddHealthRecord from './components/Doctor/AddHealthRecord';
import Web3 from 'web3';
import {abi} from './ABI'



const [Contract , setContract] = useState();


useEffect(()=>{
  const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8546"));
  const contract = new web3.eth.Contract(abi,"0x3fcECcE434D224bd66CBd99357970E0084425099");
  // setContract(contract);
  check(contract);
},[]);






// await contract.methods.IsUserRegistered().call().then(console.log);

async function check(contract){
  await contract.methods.registerAsDoctor("Nikhil",21,"abcd").call();
  await contract.methods.getAllDoctors().call().then(console.log);
}




// await check();

// console.log(web3.currentProvider) ;


// console.log(abi);

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
      },
      {
        path : "/add-health-record",
        element: <AddHealthRecord/>
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
