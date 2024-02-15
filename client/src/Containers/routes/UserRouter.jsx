import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/userPages/Home/Home'
import Login from '../pages/userPages/Login/Login'
import WorkerCompany from '../pages/userPages/WorkerCompany/WorkerCompany';
import Signup from '../pages/userPages/Signup/Signup';
import CompanySignup from '../pages/userPages/CompanySignup/CompanySignup';
const UserRouter = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/signup' element={<WorkerCompany/>} />
       <Route path='/workerSignup' element={<Signup/>} />
       <Route path='/companySignup' element={<CompanySignup/>} />
    </Routes>

  )
}

export default UserRouter